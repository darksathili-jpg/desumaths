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

test('G4.1 : automated browser recipe preserves evidence and never deploys', () => {
  const script = read('scripts/visual-check-g4-1-seconde.cjs');
  const workflow = read('.github/workflows/g4-1-seconde.yml');
  assert.match(script,/375/);
  assert.match(script,/1280/);
  assert.match(script,/getBBox/);
  assert.match(script,/waitForURL/);
  assert.match(script,/historicalFunctionRoute/);
  assert.match(script,/MenuSecondeFonctions/);
  assert.match(script,/page\.screenshot/);
  assert.match(workflow,/node scripts\/visual-check-g4-1-seconde\.cjs/);
  assert.match(workflow,/npm run check/);
  assert.match(workflow,/npm run build:web/);
  assert.match(workflow,/artifacts\/g4-1-seconde/);
  assert.match(workflow,/revision\.txt/);
  assert.match(workflow,/git rev-parse HEAD/);
  assert.match(workflow,/GITHUB_STEP_SUMMARY/);
  assert.match(workflow,/Resume de la recette/);
  const revisionLine = workflow.split('\n').find(line => line.includes("printf 'commit="));
  assert.ok(revisionLine,'Missing provenance output');
  assert.ok(revisionLine.includes(String.raw`\n`),'Missing printf line delimiter');
  assert.ok(!revisionLine.includes(String.raw`\\n`),'Escaped literal newlines in provenance');

  assert.doesNotMatch(workflow,/actions\/deploy-pages/);
  assert.doesNotMatch(workflow,/pages: write/);
});

test('G4.1: downloadable site artifact is gated by browser checks', () => {
  const workflow=read('.github/workflows/g4-1-seconde.yml');
  const exportCheck=read('scripts/check-g4-1-web.cjs');
  assert.match(workflow,/node scripts\/check-g4-1-web\.cjs/);
  assert.match(workflow,/name: desumaths-g4-1-site-preview/);
  const chrome=workflow.indexOf('node scripts/visual-check-g4-1-seconde.cjs');
  const preview=workflow.indexOf('name: desumaths-g4-1-site-preview');
  assert.ok(chrome>=0 && preview>chrome,'Preview must only run after browser recipe');
  assert.match(workflow,/dist\/web\/g4-1-build\.json/);
  assert.doesNotMatch(workflow,/actions\/deploy-pages/);
  for(const id of ['variations','courbe']) {
    assert.ok(exportCheck.includes(id),'Missing exported anchor validation: '+id);
  }
  assert.match(exportCheck,/MenuSecondeFonctions\.html/);
});
