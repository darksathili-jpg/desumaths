"use strict";
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const base=path.join(__dirname,'../renderer/2nde/Equations/Equationsdegre1');
const html=fs.readFileSync(path.join(base,'Equationsdegre1.html'),'utf8');
const css=fs.readFileSync(path.join(base,'Styleexos-desumaths.css'),'utf8');
const script=fs.readFileSync(path.join(base,'Scriptequationsdegre1.js'),'utf8');
test('G2-R10: chart CSS directly inherited, legacy interaction IDs preserved',()=>{
  assert.match(html,/\.\.\/\.\.\/\.\.\/StylesIndex\.css/);
  for(const id of ['enonce','solutions','solution','correction','correctiond','recommencer','accueil','MenuSeconde','MenuSecondeEquations']) assert.match(html,new RegExp('id="'+id+'"'));
  assert.match(css,/var\(--papier\)/);
  assert.match(css,/var\(--rouge\)/);
});
test('G2-R10: generator retained and nonlegacy MathJax initialized',()=>{
  assert.match(html,/Scriptequationsdegre1\.js/);
  assert.match(html,/mathjax@3\/es5\/tex-chtml\.js/);
  assert.doesNotMatch(html,/MathJax\.Hub/);
  assert.match(script,/enonce\.textContent/);
  assert.match(script,/DesumathsCorrectionHistorique\.correction/);
  assert.match(script,/aria-expanded/);
});
test('G2-R10: responsive layout and no legacy external stock photo',()=>{
  assert.match(css,/@media\(max-width:900px\)/);
  assert.doesNotMatch(html,/assetsdelivery/);
  assert.doesNotMatch(html,/polyfill\.io/);
});
