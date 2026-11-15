'use strict';
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

const base = process.env.DESUMATHS_BASE || 'http://127.0.0.1:8765';
const path = '/2nde/Inequations/Inequations%20simples/Inequations.html';
const scenarioGroups = [
  {coefficient: 18, constant: 14, bounds: ['gauche [', 'gauche ]', 'droite ]', 'droite ['], limit: '-1/9'},
  {coefficient: -18, constant: 14, bounds: ['droite ]', 'droite [', 'gauche [', 'gauche ]'], limit: '1/9'}
];

async function check(browser, width, {coefficient, constant, choice, direction, bracket, limit}) {
  const page = await browser.newPage({ viewport: { width, height: 850 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('requestfailed', request => console.error('Request failed', request.url(), request.failure()));
  page.on('console', message => {
    if (message.type() === 'error') console.error(message.text().slice(0,600));
  });
  try {
    await page.addInitScript(({coefficient, constant, choice}) => {
      const draws = [
        (Math.abs(coefficient) - 0.5) / 20,
        coefficient > 0 ? 0.25 : 0.75,
        (16 + 20.5) / 41,
        (constant + 20.5) / 41,
        (choice + 0.5) / 4
      ];
      const random = Math.random;
      Math.random = () => draws.length ? draws.shift() : random();
    }, {coefficient, constant, choice});
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
    const inclusion = choice % 2 ? 'incluse' : 'exclue';
    assert.equal(await figure.getAttribute('aria-label'), `Solutions à ${direction} de ${limit}, borne ${inclusion}`);
    assert.equal(await page.locator('mjx-merror').count(), 0);
    const svg = figure.locator('svg.tikzjax');
    await svg.waitFor({state: 'visible', timeout: 24000});
    const drawing = await svg.evaluate(node => {
      const segments = [...node.querySelectorAll('g[stroke="#c00000"] path')]
        .map(path => path.getAttribute('d').trim())
        .filter(path => /^M[\d .L-]+$/.test(path))
        .map(path => path.match(/-?[\d.]+/g).map(Number));
      return {
        width: node.getBBox().width,
        ray: segments.find(points => points.length === 4),
        bracket: segments.find(points => points.length === 8),
        circles: node.querySelectorAll('circle').length,
        fractionDigits: [...node.querySelectorAll('text[font-family="cmr7"]')].map(text => text.textContent),
        fractionBars: node.querySelectorAll('rect').length
      };
    });
    assert.ok(drawing.width > 100, 'La droite réelle doit être visible');
    assert.ok(drawing.ray && Math.sign(drawing.ray[2] - drawing.ray[0]) === (direction === 'gauche' ? -1 : 1));
    assert.ok(drawing.bracket, 'La borne doit être marquée par un crochet');
    const [topEnd, top, barTop, , barBottom, bottom, bottomEnd] = drawing.bracket;
    assert.equal(barTop, barBottom);
    assert.equal(topEnd, bottomEnd);
    assert.notEqual(top, bottom);
    assert.equal(Math.sign(topEnd - barTop), bracket === '[' ? 1 : -1);
    assert.equal(drawing.circles, 0);
    if (limit.includes('/')) {
      // TikZJax uses Computer Modern glyphs in the Unicode private-use area.
      assert.deepEqual(drawing.fractionDigits, ['\uF031', '\uF039']);
      assert.equal(drawing.fractionBars, 1);
    } else {
      assert.equal(drawing.fractionBars, 0);
    }
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    if (choice === 0 && coefficient === 18) {
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
    console.log(width, coefficient, choice, bracket, limit, 'OK');
  } finally {
    await page.close();
  }
}

(async () => {
  const browser = await chromium.launch({executablePath: process.env.DESUMATHS_CHROME || '/usr/bin/google-chrome', args: ['--no-sandbox']});
  try {
    for (const width of [375, 1280]) {
      for (const {coefficient, constant, bounds, limit} of scenarioGroups) {
        for (const [choice, bound] of bounds.entries()) {
          const [direction, bracket] = bound.split(' ');
          await check(browser, width, {coefficient, constant, choice, direction, bracket, limit});
        }
      }
    }
    await check(browser, 375, {coefficient: -2, constant: 16, choice: 1, direction: 'droite', bracket: '[', limit: '0'});
    await check(browser, 375, {coefficient: 2, constant: 12, choice: 3, direction: 'droite', bracket: '[', limit: '-2'});
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
