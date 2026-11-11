'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const crypto=require('node:crypto');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const dir=path.join(root,'renderer/2nde/Equations/Equationsdegre1');
const core=require(path.join(dir,'equation-core.js'));
const old=require(path.join(dir,'correction-historique.js'));
const source=fs.readFileSync(path.join(dir,'correction-historique.js'),'utf8');
const html=fs.readFileSync(path.join(dir,'Equationsdegre1.html'),'utf8');
const ui=fs.readFileSync(path.join(dir,'Scriptequationsdegre1.js'),'utf8');
test('La correction historique conserve ses deux methodes, couleurs et sous-accolades',()=>{
  for(const x of ['\\\\underbrace','\\\\color{blue}','\\\\color{green}','\\\\color{red}','\\\\begin{array}{lrcl}','\\\\underline']){
    assert.ok(source.includes(x),`manque ${x}`);
  }
  const render=old.correction({a:10,b:-6,c:-8,d:8},core);
  for(const x of ['Méthode &laquo collège &raquo','Méthode &laquo lycée &raquo','\\underbrace','\\color{blue}','\\color{green}','\\color{red}','\\iff']){
    assert.ok(render.html.includes(x),`manque ${x}`);
  }
  assert.ok(render.html.includes('\\dfrac{14}{18}'));
  assert.ok(render.html.includes('\\dfrac{7}{9}'));
});
test('Le mecanisme conserve les corrections d origine plutot que la redaction R11',()=>{
  assert.ok(html.indexOf('correction-historique.js')<html.indexOf('Scriptequationsdegre1.js'));
  assert.ok(ui.includes('DesumathsCorrectionHistorique.correction(eq,core)'));
  assert.ok(!ui.includes('core.latexCorrection(eq)'));
});
test('Tous les exercices generes livrent un rendu historique non vide et deux methodes',()=>{
  for(let i=0;i<10000;i++){
    const eq=core.genere();
    const r=old.correction(eq,core);
    assert.ok(r.html.includes('Méthode &laquo collège &raquo'));
    assert.ok(r.html.includes('Méthode &laquo lycée &raquo'));
    assert.ok(r.html.includes('\\color{blue}'));
    assert.ok(r.solution.includes('S='));
  }
});
test('Fraction negative conserve son signe et sa valeur exacte',()=>{
  const e={a:5,b:2,c:2,d:1};
  const r=old.correction(e,core);
  assert.deepEqual(core.solution(e),{num:-1n,den:3n});
  assert.ok(r.solution.includes('-\\dfrac{1}{3}'));
  assert.ok(r.html.includes('-\\dfrac{1}{3}'));
});

test('Empreinte immuable des gabarits pedagogiques d origine',()=>{
  const a=source.indexOf('let listecorrections = [');
  const b=source.indexOf('\n    // Pas d',a);
  assert.ok(a>=0&&b>a);
  const empreinte=crypto.createHash('sha256').update(source.slice(a,b),'utf8').digest('hex');
  assert.equal(empreinte,'35505a820bc04f315a1b4bed9ae69dd179ae599c66abe4f9b9ed89df79b0b571');
});
