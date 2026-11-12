'use strict';
const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root,file),'utf8');

test('G4.1 : Seconde links directly to the two matching lab examples', () => {
  const menu = read('renderer/Menus/MenuSeconde.html');
  const lab = read('renderer/Laboratoire/FiguresTikZ/index.html');
  for (const id of ['variations','courbe']) {
    assert.ok(menu.includes('../Laboratoire/FiguresTikZ/index.html#'+id));
    assert.match(lab,new RegExp('id="'+id+'" data-tikz-example="'+id+'"'));
  }
  assert.match(menu,/id="themes"/);
  assert.match(menu,/rendu-menu\.js/);
  assert.match(menu,/Activité facultative/);
});

test('G4.1 : no historical exercise generators or correction assets need editing', () => {
  const menu = read('renderer/Menus/menu-seconde-data.js');
  assert.match(menu,/MenuSecondeFonctions\.html/);
  assert.match(menu,/MenuSecondeEquations\.html/);
  assert.doesNotMatch(menu,/FiguresTikZ/);
});

test('G4.1 : gateway remains readable and keyboard accessible on mobile', () => {
  const style = read('renderer/Menus/StyleMenus.css');
  assert.match(style,/\.g41-links a:focus-visible/);
  assert.match(style,/min-height:44px/);
  assert.match(style,/@media\(max-width:520px\)/);
});
