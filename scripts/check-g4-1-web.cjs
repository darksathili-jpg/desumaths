'use strict';
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../dist/web');
const read = relative => fs.readFileSync(path.join(root,relative),'utf8');
const menu = read('Menus/MenuSeconde.html');
const fullLab = read('Laboratoire/FiguresTikZ/index.html');
const data = read('Menus/menu-seconde-data.js');
const css = read('Menus/StyleMenus.css');
const targets = [
  {file:'variations.html', id:'variations', other:'courbe', label:'Explorer un tableau de variations'},
  {file:'parabole.html', id:'courbe', other:'variations', label:'Explorer une parabole'}
];
for (const {file,id,other,label} of targets) {
  const href = '../Laboratoire/FiguresTikZ/' + file;
  const page = read('Laboratoire/FiguresTikZ/'+file);
  assert.ok(menu.includes('href="' + href + '"'), 'Exported Seconde menu lacks ' + href);
  assert.ok(menu.includes(label), 'Missing navigation label for ' + id);
  assert.ok(page.includes('id="' + id + '" data-tikz-example="' + id + '"'), 'Dedicated destination missing '+id);
  assert.ok(!page.includes('data-tikz-example="'+other+'"'), 'Dedicated page includes unrelated figure '+other);
  assert.ok(fullLab.includes('id="' + id + '" data-tikz-example="' + id + '"'), 'Full laboratory lost figure '+id);
  assert.ok(page.includes('vendor/tikzjax/tikzjax.js'),'TikZ engine reference missing on '+file);
}
assert.ok(fs.existsSync(path.join(root,'Menus/MenuSecondeFonctions.html')),'Historic Functions page missing');
assert.ok(data.includes('MenuSecondeFonctions.html'),'Historic Functions route changed');
assert.ok(css.includes('.g41-links a:focus-visible'),'Keyboard focus style missing');
console.log('G4.1 EXPORT OK: two distinct pages, original two-figure lab, and historical Functions');
