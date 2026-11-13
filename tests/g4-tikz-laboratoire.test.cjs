'use strict';
const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname,'..');
const read = p => fs.readFileSync(path.join(root,p),'utf8');
const p = 'renderer/Laboratoire/FiguresTikZ/';
const html = read(p+'index.html');
const js = read(p+'figures-tikz.js');
const css = read(p+'figures-tikz.css');

test('G4: two original TikZ examples are isolated from historical corrections',() => {
  assert.match(html,/<script type="text\/tikz" data-tex-packages='\{"tkz-tab":""\}'/);
  assert.match(html,/<script type="text\/tikz" data-tex-packages='\{"pgfplots":""\}'/);
  assert.equal((html.match(/<script type="text\/tikz"/g)||[]).length,2);
  assert.match(html,/\\tkzTabInit/);
  assert.match(html,/\\tkzTabLine\{, -, z, \+, \}/);
  assert.match(html,/\\tkzTabVar/);
  assert.match(html,/\\begin\{axis\}/);
  assert.match(html,/\\addplot\[blue,very thick/);
  assert.match(html,/domain=-3:3,samples=80/);
  assert.match(html,/f'\(x\)=2x/);
  assert.match(html,/x\*x-4/);
  assert.match(html,/id="g4-global-status"/);
});
test('G4: MathJax remains separate from TikZJax, and PDF engine is not replaced',() => {
  assert.match(html,/MathJax/);
  assert.match(html,/tex-svg\.js/);
  assert.match(html,/vendor\/tikzjax\/tikzjax\.js/);
  assert.match(html,/vendor\/tikzjax\/fonts\.css/);
  assert.match(html,/\.\.\/\.\.\/Serveur%20Latex\/latex_javascript\.html/);
  const pdf = read('renderer/Serveur Latex/compilateur.js');
  assert.match(pdf,/engine\.compileLaTeX\(\)/);
  assert.doesNotMatch(pdf,/TikzJax|tikzjax/i);
});
test('G4: notebook style and accessible SVG feedback survive reduced screens',() => {
  assert.match(css,/max-width:920px/);
  assert.match(css,/max-width:500px/);
  assert.match(css,/overflow-x:auto/);
  assert.match(css,/\.g4-figure svg\.tikzjax/);
  assert.match(js,/tikzjax-load-finished/);
  assert.match(js,/svg\.tikzjax/);
  assert.match(js,/getBoundingClientRect/);
  assert.match(js,/getBBox/);
  assert.match(js,/drawing\.width > 20 && drawing\.height > 20/);
  assert.match(js,/if \(complete\)/);
  assert.match(js,/querySelectorAll/);
  assert.match(js,/MutationObserver/);
  assert.match(js,/navigator\.clipboard\.writeText/);
  assert.match(js,/\.textContent = source\.textContent\.trim/);
  assert.doesNotMatch(js,/\.innerHTML\s*=/);
});
test('G4: original home navigation includes new lab but retains level routes',() => {
  const home=read('renderer/index.html');
  for(const u of ['Laboratoire/FiguresTikZ/index.html','Menus/MenuSeconde.html',
    'Menus/Menu1ST.html','Menus/MenuTaleSpe.html','Serveur%20Latex/latex_javascript.html'])
    assert.ok(home.includes(u),'Missing original link '+u);
  assert.match(read('renderer/Serveur Latex/latex_javascript.html'),/Figures TikZ \(SVG\)/);
});
test('G4: vendor resources come only from a pinned revision and are self-hosted',()=>{
  const installer=read('scripts/stage-tikzjax-web.cjs');
  assert.match(installer,/20412fc9324a80416063fa9c9d2924df60179baa/);
  assert.match(installer,/dist\/web\/vendor\/tikzjax/);
  assert.match(installer,/core\.dump\.gz/);
  assert.match(installer,/tex\.wasm\.gz/);
  assert.match(installer,/tex_files\/tkz-tab\.sty\.gz/);
  assert.match(installer,/tex_files\/pgfplots\.sty\.gz/);
});
