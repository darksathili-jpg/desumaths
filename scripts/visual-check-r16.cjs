'use strict';
/*
 * R16: visual integration with a real Chromium and real MathJax 3.
 * Run against the exported web site:
 *  R16_BASE_URL=http://127.0.0.1:8765 node scripts/visual-check-r16.cjs
 * Requires playwright (CI installs it without changing app dependencies).
 */
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const base = process.env.R16_BASE_URL || 'http://127.0.0.1:8765';
const url = base + '/2nde/Equations/Equations%20avec%20factorisation/EqsFacteurcommun.html';
const evidence = path.resolve(process.env.R16_EVIDENCE_DIR || 'artifacts/r16-layout');
fs.mkdirSync(evidence, { recursive: true });
const data = [];

async function inspect(browser, width) {
  const page = await browser.newPage({ viewport: {width, height: 900}, deviceScaleFactor: 1 });
  const exceptions = [];
  page.on('pageerror', e => exceptions.push(e.message));
  try {
    await page.goto(url, {waitUntil:'domcontentloaded', timeout:30000});
    await page.waitForFunction(() => {
      const mj = window.MathJax;
      return !!(mj && typeof mj.typesetPromise === 'function');
    }, null, {timeout:35000});
    await page.locator('#correction').click();
    await page.waitForFunction(() => document.querySelectorAll('#correctiond .r16-math-region').length >= 3,
      null, {timeout:35000});
    await page.waitForTimeout(350);  // MathJax layout + ResizeObserver
    const metrics = await page.evaluate(() => {
      const region = document.querySelector('#correctiond');
      const bounds = region.getBoundingClientRect();
      const viewports = [...document.querySelectorAll('.r16-math-scroll')].map(e => {
        const parent = e.closest('.r16-math-region');
        return {clientWidth:e.clientWidth, scrollWidth:e.scrollWidth,
          controlsVisible:!parent.querySelector('.r16-math-controls').hidden,
          overflow:parent.dataset.overflow};
      });
      return {windowWidth:innerWidth,
        documentWidth:document.documentElement.scrollWidth,
        correctionLeft:bounds.left, correctionRight:bounds.right,
        mathjax:document.querySelectorAll('#correctiond mjx-container').length,
        regions:viewports,
        underbrace:document.querySelector('#correctiond').textContent.includes('facteur commun'),
        explanation:document.querySelector('#correctiond').textContent.includes('les signes')
      };
    });
    assert.equal(exceptions.length, 0, 'JavaScript errors: ' + exceptions.join('; '));
    assert.ok(metrics.mathjax >= 3, 'MathJax: mathematical systems not rendered');
    assert.ok(metrics.underbrace, 'Missing historical common-factor annotation');
    assert.ok(metrics.explanation, 'Missing historical explanation');
    assert.ok(metrics.documentWidth <= width + 2, 'Page-wide horizontal overflow: ' + JSON.stringify(metrics));
    assert.ok(metrics.correctionLeft >= -2 && metrics.correctionRight <= width + 2,
      'Correction offscreen: ' + JSON.stringify(metrics));

    let overflows = 0;
    for (let i=0; i<metrics.regions.length; i++) {
      const region = metrics.regions[i];
      if (region.scrollWidth > region.clientWidth + 5) {
        overflows++;
        assert.ok(region.controlsVisible, 'Invisible navigation for overflowing math array '+i);
        assert.equal(region.overflow, 'true');
        const wrap = page.locator('.r16-math-region').nth(i);
        await wrap.locator('button[aria-label="Fin des calculs"]').click();
        await page.waitForTimeout(450);
        const position = await wrap.locator('.r16-math-scroll').evaluate(el => ({
          left:el.scrollLeft, end:el.scrollWidth - el.clientWidth
        }));
        assert.ok(position.left > 4, 'Arrow did not move mathematical system');
        assert.ok(position.left >= position.end - 6, 'Cannot reach last calculation column: '+JSON.stringify(position));
        await wrap.locator('button[aria-label="Début des calculs"]').click();
      } else {
        assert.equal(region.controlsVisible, false, 'Unnecessary arrow controls');
      }
    }
    await page.screenshot({path:path.join(evidence, 'r16-'+width+'.png'), fullPage:true});
    data.push({width, overflows, ...metrics});
    console.log('R16 VISUAL OK', width, 'pixels /',metrics.mathjax,'MathJax /',overflows,'scrollable arrays');
  } catch (e) {
    await page.screenshot({path:path.join(evidence,'r16-'+width+'-failure.png'),fullPage:true}).catch(()=>{});
    throw e;
  } finally {
    await page.close();
  }
}

(async () => {
  const browser = await chromium.launch({headless:true});
  try {
    for (const width of [375,540,768,1280,1600]) await inspect(browser,width);
    fs.writeFileSync(path.join(evidence,'r16-metrics.json'),JSON.stringify(data,null,2));
    console.log('R16 VISUAL TESTS: SUCCESS');
  } finally {await browser.close();}
})().catch(e => {console.error(e.stack || e);process.exitCode=1;});
