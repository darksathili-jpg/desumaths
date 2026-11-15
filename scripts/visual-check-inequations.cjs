'use strict';
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

const base = process.env.DESUMATHS_BASE || 'http://127.0.0.1:8765';
const path = '/2nde/Inequations/Inequations%20simples/Inequations.html';
const schedule = [
  { positive: true, direction: ['gauche', 'gauche', 'droite', 'droite'] },
  { positive: false, direction: ['droite', 'droite', 'gauche', 'gauche'] }
];

async function check(browser, width, positive, choice, direction) {
  const page = await browser.newPage({ viewport: { width, height: 850 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('requestfailed', request => console.error('Request failed', request.url(), request.failure()));
  page.on('console', message => {
    if (message.type() === 'error') console.error(message.text().slice(0,600));
  });
  try {
    await page.addInitScript(({ positive, choice }) => {
      const draws = [0.05, positive ? 0.25 : 0.75, 0.5, 0.525, (choice + 0.5) / 4];
      const random = Math.random;
      Math.random = () => draws.length ? draws.shift() : random();
    }, { positive, choice });
    const response = await page.goto(base + path, {waitUntil: 'domcontentloaded', timeout: 25000});
    assert.equal(response.status(), 200);
    await page.locator('#enonce mjx-container').first().waitFor({state: 'visible', timeout: 22000});
    assert.equal(await page.locator('#solution').isVisible(), false);
    assert.equal(await page.locator('#correctiond').isVisible(), false);
    await page.locator('#solutions').click();
    await page.locator('#solution mjx-container').first().waitFor({state: 'visible'});
    await page.locator('#correction').click();
    await page.locator('#correction1 mjx-container').first().waitFor({state: 'visible'});
    const figure = page.locator('#figure-intervalle');
    const value = positive ? '0.5' : '-0.5';
    assert.equal(await figure.getAttribute('aria-label'), 'Solutions à ' + direction + ' de ' + value + ', borne ' + (choice % 2 ? 'incluse' : 'exclue'));
    assert.equal(await page.locator('mjx-merror').count(), 0);
    const svg = figure.locator('svg');
    await svg.waitFor({state: 'visible', timeout: 24000});
    const bounds = await svg.evaluate(node => node.getBBox().width);
    assert.ok(bounds > 100, 'Le SVG natif doit produire le dessin');
    assert.ok(await svg.locator('line').count() >= 2, 'La droite et la demi-droite doivent être tracées');
    assert.ok(await svg.locator('circle').count() === 1, 'La borne doit être tracée');
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    if (choice === 0 && positive) {
      await page.locator('#correction').click();
      assert.equal(await figure.isVisible(), false);
      assert.equal(await page.locator('#correction').getAttribute('aria-expanded'), 'false');
      await page.locator('#solutions').click();
      assert.equal(await page.locator('#solution').isVisible(), false);
      await Promise.all([page.waitForNavigation({waitUntil:'domcontentloaded'}), page.locator('#recommencer').click()]);
      await page.locator('#enonce mjx-container').first().waitFor({state:'visible'});
      await page.locator('#MenuSecondeEquations').click();
      await page.waitForURL('**/Menus/MenuSecondeInequations.html');
      await page.getByRole('link', {name:'Inéquations simples', exact:true}).waitFor({state:'visible'});
    }
    assert.deepEqual(errors, []);
    console.log(width, positive ? '+' : '-', choice, 'OK');
  } finally {
    await page.close();
  }
}

(async () => {
  const browser = await chromium.launch({executablePath: process.env.DESUMATHS_CHROME || '/usr/bin/google-chrome', args: ['--no-sandbox']});
  try {
    for (const width of [375, 1280]) {
      for (const {positive, direction} of schedule) {
        for (const [choice, expected] of direction.entries()) {
          await check(browser, width, positive, choice, expected);
        }
      }
    }
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
