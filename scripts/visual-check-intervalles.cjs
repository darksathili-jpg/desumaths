'use strict';

const assert = require('node:assert/strict');
const {chromium} = require('playwright');

const base = process.env.DESUMATHS_BASE || 'http://127.0.0.1:8765';
const exercise = '/2nde/Inequations/Intersection%20reunion/InterUnion.html';
const scenarios = [
  {choice: 0, intersection: '∅', union: '[0;3]∪[5;8]'},
  {choice: 1, intersection: '{3}', union: '[0;8]'},
  {choice: 2, intersection: '∅', union: '[0;8]'},
  {choice: 4, intersection: '∅', union: '[0;3[∪]3;8]'},
  {choice: 11, intersection: '{3}', union: ']−∞;+∞[=R'},
];

async function check(browser, width, {choice, intersection, union}) {
  const page = await browser.newPage({viewport: {width, height: 850}});
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  try {
    await page.addInitScript(k => {
      const random = Math.random;
      let draw = 0;
      Math.random = () => {
        if (++draw <= 4) return 0.25;
        if (draw <= 16) return 0.5;
        if (draw === 17) return (k + 0.5) / 27;
        return random();
      };
    }, choice);
    const response = await page.goto(base + exercise, {waitUntil: 'domcontentloaded'});
    assert.equal(response.status(), 200);
    await page.locator('#enonce mjx-container').first().waitFor({state: 'visible'});
    assert.equal(await page.locator('#enonce mjx-container').count(), 4);

    const button = page.locator('#solutions');
    const solution = page.locator('#solution');
    assert.equal(await solution.isVisible(), false);
    await button.click();
    await solution.locator('mjx-container').last().waitFor({state: 'visible'});
    const formulas = await solution.locator('mjx-assistive-mml math').evaluateAll(nodes =>
      nodes.map(node => node.textContent.replace(/\s/g, ''))
    );
    assert.deepEqual(formulas, ['I∩J=' + intersection, 'I∪J=' + union]);
    assert.equal(await page.locator('mjx-merror').count(), 0);
    assert.equal(await button.getAttribute('aria-expanded'), 'true');
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    await page.getByRole('button', {name: 'Masquer la solution'}).click();
    assert.equal(await solution.isVisible(), false);

    if (choice === 0) {
      await Promise.all([
        page.waitForNavigation({waitUntil: 'domcontentloaded'}),
        page.getByRole('button', {name: /Nouvel exercice/}).click()
      ]);
      await page.locator('#enonce mjx-container').first().waitFor({state: 'visible'});
      assert.equal(await solution.isVisible(), false);
      await page.getByRole('link', {name: 'Menu Inéquations', exact: true}).click();
      await page.waitForURL('**/Menus/MenuSecondeInequations.html');
      const link = page.getByRole('link', {name: 'Intersections et réunions', exact: true});
      await link.waitFor({state: 'visible'});
      await link.click();
      await page.waitForURL('**/InterUnion.html');
      await page.locator('#enonce mjx-container').first().waitFor({state: 'visible'});
    }

    assert.deepEqual(errors, []);
    console.log(`Intervalles : ${width}px, cas ${choice} OK`);
  } finally {
    await page.close();
  }
}

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.DESUMATHS_CHROME || '/usr/bin/google-chrome',
    args: ['--no-sandbox']
  });
  try {
    for (const width of [375, 1280]) {
      for (const scenario of scenarios) await check(browser, width, scenario);
    }
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
