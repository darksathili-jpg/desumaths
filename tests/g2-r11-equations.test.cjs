"use strict";
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'../renderer/2nde/Equations/Equationsdegre1');
const core=require(path.join(root,'equation-core.js'));

test('G2-R11: rational normalization and exact equivalence',()=>{
  assert.deepEqual(core.rationnel(14n,-18n),{num:-7n,den:9n});
  assert.deepEqual(core.rationnel(0n,-7n),{num:0n,den:1n});
  assert.deepEqual(core.parseReponse('x = -14/18'),{num:-7n,den:9n});
  assert.deepEqual(core.parseReponse('0,5'),{num:1n,den:2n});
  assert.deepEqual(core.parseReponse('-.5'),{num:-1n,den:2n});
  assert.equal(core.parseReponse('1/0'),null);
  assert.equal(core.parseReponse('1/2<script>'),null);
  assert.equal(core.parseReponse('1,5/3'),null);
});
test('G2-R11: correct, incorrect and invalid answers',()=>{
  const eq={a:10,b:-6,c:-8,d:8}; // 18x=14 -> 7/9
  assert.deepEqual(core.solution(eq),{num:7n,den:9n});
  assert.equal(core.estSolution('14/18',eq).correct,true);
  assert.equal(core.estSolution('7/9',eq).correct,true);
  assert.equal(core.estSolution('0.777777',eq).correct,false);
  assert.equal(core.estSolution('8/9',eq).correct,false);
  assert.equal(core.estSolution('Bonjour',eq).valide,false);
  assert.equal(core.estSolution('x=7/9',eq).correct,true);
});
test('G2-R11: 10000 randomly generated equations solved exactly',()=>{
  for(let i=0;i<10000;i++){
    const eq=core.genere();const r=core.solution(eq);
    assert.notEqual(eq.a,eq.c);
    assert.equal(BigInt(eq.a-eq.c)*r.num,BigInt(eq.d-eq.b)*r.den);
    assert.equal(core.estSolution(String(r.num)+'/'+String(r.den),eq).correct,true);
  }
});
test('G2-R11: correction methods maintain mathematical equivalence',()=>{
  for(const eq of [{a:10,b:-6,c:-8,d:8},{a:-1,b:3,c:5,d:-9},{a:1,b:1,c:-1,d:1}]){
    const c=core.latexCorrection(eq);
    assert.equal(c.length,2);
    for(const method of c){
      assert.equal(method.etapes[0],core.latexEquation(eq));
      assert.match(method.etapes.at(-1),/^x = /);
    }
  }
});
test('G2-R11: fields, disclosure, accessible feedback and no correction scroll trap',()=>{
  const html=fs.readFileSync(path.join(root,'Equationsdegre1.html'),'utf8');
  const css=fs.readFileSync(path.join(root,'Styleexos-desumaths.css'),'utf8');
  const js=fs.readFileSync(path.join(root,'Scriptequationsdegre1.js'),'utf8');
  for(const id of ['reponse-eleve','verifier-reponse','retour-reponse'])assert.match(html,new RegExp('id="'+id+'"'));
  assert.match(html,/equation-core\.js/);
  assert.match(html,/aria-live="polite"/);
  assert.match(css,/#correctiond\{max-height:none;overflow:visible\}/);
  assert.doesNotMatch(js,/innerHTML\s*=/);
});
