'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.join(__dirname, '..');
const read = rel => fs.readFileSync(path.join(root, rel), 'utf8');
const page = read('renderer/index.html');
const js = read('renderer/components/hero/hero.js');
const css = read('renderer/components/hero/hero.css');

test('G3.1: the approved Christophe sprite is identical to the verified asset', () => {
  const file = fs.readFileSync(path.join(root,'renderer/assets/mascotte/hero-front.webp'));
  assert.equal(crypto.createHash('sha256').update(file).digest('hex'),'cdbdac062e829fa0179e72f33e60d9ea8d18054b72a38bd68e33a4a925fa5ff9');
  assert.equal(file.toString('ascii',0,4),'RIFF');
  assert.equal(file.toString('ascii',8,12),'WEBP');
  assert.ok(file.length < 30000);
});
test('G3.1: identity and page navigation remain intact', () => {
  assert.match(page,/StylesIndex\.css/);
  assert.match(page,/components\/hero\/hero\.css/);
  assert.match(page,/components\/hero\/hero\.js/);
  assert.match(page,/id="hero-compagnon"/);
  assert.match(page,/data-hero-return/);
  assert.match(page,/data-hero-saluer/);
  assert.match(page,/data-hero-motion/);
  assert.match(page,/data-hero-hide/);
  assert.match(page,/href="Menus\/MenuSeconde\.html"/);
  assert.match(page,/href="#niveaux"/);
  assert.match(page,/id="demo-enonce"/);
  assert.match(page,/id="demo-solution"/);
});
test('G3.1: no floating overlays or remote assets; accessible reduced motion',()=>{
  assert.match(css,/assets\/mascotte\/hero-front\.webp/);
  assert.match(css,/prefers-reduced-motion:\s*reduce/);
  assert.doesNotMatch(css,/position:\s*fixed/);
  assert.match(js,/document\.hidden/);
  assert.match(js,/\.textContent = message/);
  assert.match(js,/aria-pressed/);
  assert.match(js,/\.hidden = true/);
  assert.match(js,/setMotion/);
  assert.doesNotMatch(js,/innerHTML\s*=/);
});
