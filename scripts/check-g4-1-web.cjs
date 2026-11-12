'use strict';
// G4.1: validates the actual exported site rather than only renderer sources.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../dist/web');
const read = relative => fs.readFileSync(path.join(root,relative),'utf8');
const menu = read('Menus/MenuSeconde.html');
const lab = read('Laboratoire/FiguresTikZ/index.html');
const data = read('Menus/menu-seconde-data.js');
const css = read('Menus/StyleMenus.css');
const targets = [
  ['variations', 'Explorer un tableau de variations'],
  ['courbe', 'Explorer une parabole']
];
for (const [id,label] of targets) {
  const href = '../Laboratoire/FiguresTikZ/index.html#' + id;
  assert.ok(menu.includes('href="' + href + '"'), 'Exported Seconde menu lacks ' + href);
  assert.ok(menu.includes(label), 'Missing navigation label for ' + id);
  assert.ok(lab.includes('id="' + id + '" data-tikz-example="' + id + '"'), 'Missing destination anchor ' + id);
}
assert.ok(fs.existsSync(path.join(root,'Menus/MenuSecondeFonctions.html')),'Historic Functions page missing');
assert.ok(data.includes("MenuSecondeFonctions.html"),'Historic Functions route changed');
assert.ok(css.includes('.g41-links a:focus-visible'),'Keyboard focus style missing');
assert.ok(lab.includes('vendor/tikzjax/tikzjax.js'),'TikZ engine reference missing');
console.log('G4.1 EXPORT OK: menu Seconde, two deep links, historic Functions, CSS and TikZ reference');
