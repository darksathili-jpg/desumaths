'use strict';
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

const base = process.env.DESUMATHS_BASE || 'http://127.0.0.1:8765';
const exercices = [
  ['2nde/Inequations/Tableaux de signes/Tableaux 2 facteurs/TableauSignesDeuxFacteurs.html', false],
  ['1ST/Fonctions/Tableaux de variations/Degre 2/TableauxVariationsD2.html', true],
];

async function verifier(browser, relative, variations, width) {
  const page = await browser.newPage({ viewport: { width, height: 850 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  try {
    const route = relative.split('/').map(encodeURIComponent).join('/');
    const response = await page.goto(base + '/' + route, { waitUntil: 'domcontentloaded' });
    assert.equal(response.status(), 200);
    await page.locator('#enonce mjx-container').first().waitFor({ state: 'visible', timeout: 20000 });
    assert.equal(await page.locator('#correctiond').isVisible(), false);
    assert.equal(await page.locator('#solution').isVisible(), false);
    if (variations) {
      await page.locator('#solutions').click();
      await page.locator('#tableauSolution mjx-mtable').waitFor({ state: 'visible' });
    }
    await page.locator('#correction').click();
    const figure = page.locator('#tableauCorrection mjx-mtable');
    await figure.waitFor({ state: 'visible', timeout: 10000 });
    assert.equal(await figure.locator('mjx-mtr').count(), variations ? 5 : 4);
    assert.equal(await page.locator('mjx-merror').count(), 0);
    assert.equal(await page.locator('#correctiond canvas').count(), 0);
    if (variations) {
      assert.equal(await figure.locator('mjx-c.MJXc-2197, mjx-c.MJXc-2198, mjx-c.mjx-c2197, mjx-c.mjx-c2198').count(), 2);
    }
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    assert.deepEqual(errors, []);
    console.log(width, relative, 'OK');
  } finally {
    await page.close();
  }
}

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.DESUMATHS_CHROME || '/usr/bin/google-chrome',
    args: ['--no-sandbox'],
  });
  try {
    for (const width of [375, 1280]) {
      for (const [relative, variations] of exercices) {
        await verifier(browser, relative, variations, width);
      }
    }
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
