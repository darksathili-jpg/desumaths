"use strict";
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.resolve(__dirname,'../renderer/2nde/Equations/Difference de carres/ScriptDifferencedecarre.js'),'utf8');
function boot(mathjax){
  const nodes = {};
  for(const id of ['enonce','correctiond','solution','solutions','correction','recommencer','accueil','MenuSeconde','MenuSecondeEquations']) {
    nodes[id] = {innerHTML:'',hidden:['correctiond','solution'].includes(id),style:{},dataset:{afficher:'Afficher',masquer:'Masquer'},attrs:{},listeners:{},setAttribute(k,v){this.attrs[k]=v},addEventListener(k,f){this.listeners[k]=f},textContent:''};
  }
  const ctx = {document:{getElementById:id=>nodes[id]},window:{MathJax:mathjax,addEventListener(){},location:{reload(){}}},Promise,console:{warn(){}}};
  vm.runInNewContext(source,ctx);
  return nodes;
}
test('les deux boutons affichent puis masquent reellement leurs corrections',()=>{
  const nodes=boot({typesetPromise:()=>Promise.resolve()});
  for(const [button,panel] of [['solutions','solution'],['correction','correctiond']]){
    assert.ok(nodes[panel].innerHTML.length>20);
    nodes[button].listeners.click();
    assert.equal(nodes[panel].hidden,false);
    assert.equal(nodes[panel].style.display,'block');
    assert.equal(nodes[button].attrs['aria-expanded'],'true');
    nodes[button].listeners.click();
    assert.equal(nodes[panel].hidden,true);
    assert.equal(nodes[panel].style.display,'none');
  }
});
test('absence de MathJax : la correction reste visible en LaTeX brut',()=>{
  const nodes=boot(undefined);
  nodes.correction.listeners.click();
  assert.equal(nodes.correctiond.hidden,false);
  assert.match(nodes.correctiond.innerHTML,/\\underbrace/);
});
test('rendu MathJax en erreur : clic et contenu sont conserves',async()=>{
  const nodes=boot({typesetPromise:()=>Promise.reject(new Error('network unavailable'))});
  nodes.solutions.listeners.click();
  await new Promise(resolve=>setImmediate(resolve));
  assert.equal(nodes.solution.hidden,false);
  assert.doesNotMatch(nodes.solution.innerHTML,/\\boxed/); assert.match(nodes.solution.innerHTML,/\\times/);
});
