"use strict";
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const crypto=require('node:crypto');
const path=require('node:path');
const dir=path.resolve(__dirname,'../renderer/2nde/Equations/Equations produits');
const script=fs.readFileSync(path.join(dir,'Scriptequationsproduits.js'),'utf8');
const html=fs.readFileSync(path.join(dir,'Equationsproduits.html'),'utf8');
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
test('R14 : correction historique rigoureusement identique a la source validee',()=>{
 const fragment=script.match(/correctiond\.innerHTML = \`[\s\S]*?\`;/);
 assert.ok(fragment,'Gabarit historique introuvable');
 assert.equal(hash(fragment[0]),'7d5c8d04d9dcc15f4cc4f3c0b3033a8ae124c5ed094f462b3ab983706f80a43e');
});
test('R14 : toutes les interactions historiques sont preservees',()=>{
 for(const id of ['enonce','correction','correctiond','solutions','solution','recommencer','accueil','MenuSeconde','MenuSecondeEquations']){
 assert.ok(html.includes('id="'+id+'"'),id);
 }
 for(const name of ['signefrac','solsimpfin','soluces','simplifierfraction','reponse']){assert.ok(script.includes('function '+name+'('));}
});
test('R14 : pas de MathJax v2, pas de dependance image externe',()=>{
 assert.ok(html.includes('mathjax@3/es5/tex-chtml.js'));
 assert.ok(!html.includes('polyfill.io'));
 assert.ok(!html.includes('images.assetsdelivery.com'));
 assert.ok(!script.includes('MathJax.Hub.Queue'));
});
test('R14 : correction sans hauteur limite, interface clavier accessible',()=>{
 const style=fs.readFileSync(path.join(dir,'Styleexos-r14.css'),'utf8');
 assert.ok(style.includes('max-height:none'));
 assert.ok(html.includes('aria-expanded="false"'));
 assert.ok(script.includes("setAttribute('aria-expanded'"));
});

const vm=require('node:vm');
test('R14 : 1200 equations produits, racines exactes et ensemble de solutions',()=>{
  for(let i=1;i<=1200;i++){
    const elems=Object.fromEntries(['enonce','correction','correctiond','solutions','solution','recommencer','accueil','MenuSeconde','MenuSecondeEquations'].map(k=>[k,{innerHTML:'',hidden:true,dataset:{afficher:'Afficher',masquer:'Masquer'},addEventListener(){},setAttribute(){}}]));
    let seed=i*7919;
    const mockedMath=Object.create(Math);
    mockedMath.random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
    const context={document:{getElementById:id=>elems[id]},window:{location:{reload(){},href:''}},Math:mockedMath,console};
    vm.createContext(context);
    vm.runInContext(script+'\nglobalThis.record={a,b,c,d,s1,s2,s3,s4,rep1,rep2,sol1,sol2};',context);
    const {a,b,c,d,s1,s2,s3,s4,rep1,rep2}=context.record;
    const A=(s1==='-'?-a:a),B=(s2==='-'?-b:b);
    const C=(s3==='-'?-c:c),D=(s4==='-'?-d:d);
    assert.ok(Math.abs(A*rep1+B)<1e-9,`racine 1, scenario ${i}`);
    assert.ok(Math.abs(C*rep2+D)<1e-9,`racine 2, scenario ${i}`);
    assert.ok(elems.correctiond.innerHTML.includes('\\begin{array}{rclcrcl}'));
    assert.ok(elems.solution.innerHTML.includes('S='));
  }
});
