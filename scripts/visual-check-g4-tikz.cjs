'use strict';
/* CI must fail if a real WebAssembly TikZ diagram does not become SVG. */
const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const base = process.env.G4_BASE_URL || 'http://127.0.0.1:8765';
const evidence = path.resolve(process.env.G4_EVIDENCE_DIR || 'artifacts/g4-tikz');
const url = base + '/Laboratoire/FiguresTikZ/index.html';
fs.mkdirSync(evidence,{recursive:true});

async function check(browser,width) {
  const page = await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
  const errors=[],badAssets=[],logs=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error')logs.push(m.text().slice(0,500));});
  page.on('response',r=>{if(r.status()>=400 && r.url().includes('vendor/tikzjax'))badAssets.push(r.status()+' '+r.url());});
  page.on('requestfailed',r=>{if(r.url().includes('vendor/tikzjax'))badAssets.push(r.failure()?.errorText+' '+r.url());});

  try {
    const response = await page.goto(url,{waitUntil:'domcontentloaded',timeout:30000});
    assert.ok(response&&response.status()===200,'Laboratoire G4 non accessible');
    await page.waitForFunction(() => {
      const line = document.querySelector('#g4-global-status')?.textContent||'';
      return line.includes('2 figures SVG') || line.includes('figure(s) non générée(s).');
    },null,{timeout:170000});
    const status=await page.locator('#g4-global-status').textContent();
    assert.ok(status.includes('2 figures SVG'),'TikZJax failed to generate both diagrams: '+status+'; logs: '+logs.join(' / '));
    await page.waitForFunction(()=>document.querySelectorAll('mjx-container').length>=2,null,{timeout:20000});
    const figures=await page.locator('svg.tikzjax').count();
    assert.equal(figures,2,'Expected exactly two real TikZ SVG diagrams');
    const info=await page.evaluate(()=>{
      const svgs=[...document.querySelectorAll('svg.tikzjax')].map(el=>{
        const box=el.getBoundingClientRect();
        const region=el.closest('.g4-figure');
        const bounds=el.getBBox();
        return {
          role:el.getAttribute('role'),
          title:el.querySelector('title')?.textContent,
          width:box.width,height:box.height,
          shapeWidth:bounds.width,shapeHeight:bounds.height,
          scrollWidth:region.scrollWidth,clientWidth:region.clientWidth,
          hasDrawing:el.querySelectorAll('path,line,rect,circle,text,polyline,polygon').length
        };
      });
      return {
        viewport:innerWidth,
        pageWidth:document.documentElement.scrollWidth,
        title:document.title,
        mathjax:document.querySelectorAll('mjx-container').length,
        showCodeControls:document.querySelectorAll('details.g4-source').length,
        copyButtons:document.querySelectorAll('[data-copy-source]').length,
        figures:svgs
      };
    });
    assert.deepEqual(badAssets,[], 'Missing self-hosted files: '+badAssets.join('\n'));
    assert.deepEqual(errors,[], 'Javascript errors: '+errors.join('; '));
    assert.ok(info.pageWidth<=width+2,'Global overflow at '+width+': '+JSON.stringify(info));
    assert.equal(info.showCodeControls,2);
    assert.equal(info.copyButtons,2);
    for (const f of info.figures) {
      assert.equal(f.role,'img','Accessible SVG missing role');
      assert.ok(f.title?.length>12,'SVG without accessible title');
      assert.ok(f.width>80 && f.height>60, 'Empty or invisible rendered SVG');
      assert.ok(f.shapeWidth>20&&f.shapeHeight>20, 'SVG has no visible drawing');
      assert.ok(f.hasDrawing>5,'SVG does not contain real mathematical geometry');
    }
    await page.locator('.g4-source').first().locator('summary').click();
    assert.ok(await page.locator('[data-source-code]').first().isVisible());
    assert.match(await page.locator('[data-source-code]').first().textContent(),/\\tkzTabInit/);
    assert.match(await page.locator('[data-source-code]').last().textContent(),/\\addplot/);
    await page.evaluate(()=>window.scrollTo(0,0));
    await page.waitForTimeout(250);
    await page.screenshot({path:path.join(evidence,'g4-'+width+'.png'),fullPage:true});
    fs.writeFileSync(path.join(evidence,'metrics-'+width+'.json'),JSON.stringify(info,null,2));
    console.log('G4 REAL SVG OK',width,'px; two figures; MathJax',info.mathjax,
      '; errors',errors.length,'; asset failures',badAssets.length);
  } catch(e) {
    await page.screenshot({path:path.join(evidence,'g4-'+width+'-failure.png'),fullPage:true}).catch(()=>{});
    fs.writeFileSync(path.join(evidence,'debug-'+width+'.json'),JSON.stringify({errors,badAssets,logs},null,2));
    throw e;
  } finally {
    await page.close();
  }
}
(async()=>{
  const browser=await chromium.launch({channel:'chrome',headless:true});
  try {
    await check(browser,375);
    await check(browser,1280);
    console.log('G4 TIKZJAX WEBASSEMBLY: 2 SVG x 2 viewports SUCCESS');
  } finally {await browser.close();}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
