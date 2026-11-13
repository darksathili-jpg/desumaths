'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const base=path.resolve(__dirname,'..');
const folder='renderer/1ST/Fonctions/Fonctions degre 2/Forme factorisee/';
const source=fs.readFileSync(path.join(base,folder,'Scriptdegre2FormeFactorisee.js'),'utf8');

test('migration factorized form: legacy parameters, 500 exact instances and solution hiding',()=>{
 let serial=0;
 const nodes=new Map();
 const elem=id=>{
   if(!nodes.has(id))nodes.set(id,{
     id,hidden:true,textContent:'',children:[],attrs:{},
     addEventListener(name,fn){this[name]=fn;},
     setAttribute(name,value){this.attrs[name]=value;},
     replaceChildren(){this.children=[];},
     append(...x){this.children.push(...x);}
   });
   return nodes.get(id);
 };
 const document={getElementById:elem,
   createElement:()=>elem('generated-'+(++serial)),
   createTextNode:text=>({textContent:text})};
 const window={MathJax:null,addEventListener(){}};
 vm.runInNewContext(source,{document,window,Math,Object},{timeout:1000});
 const unique=new Set();
 for(let i=0;i<500;i++){
   const e=window.DesumathsFormeFactorisee.getExercise();
   assert.ok([e.alpha,e.beta,e.x0,e.a,e.image,e.product].every(Number.isInteger));
   assert.ok(Math.abs(e.alpha)<=9&&Math.abs(e.beta)<=9&&Math.abs(e.x0)<=9);
   assert.ok(e.x0!==e.alpha&&e.x0!==e.beta,'Known sample must differ from roots');
   assert.ok(Math.abs(e.a)>=1&&Math.abs(e.a)<=9);
   assert.equal(e.product,(e.x0-e.alpha)*(e.x0-e.beta));
   assert.notEqual(e.product,0);
   assert.equal(e.image,e.a*e.product);
   assert.equal(elem('solution').hidden,true);
   assert.equal(elem('correctiond').hidden,true);
   assert.match(elem('enonce').textContent,/f\(/);
   unique.add([e.alpha,e.beta,e.x0,e.a].join(':'));
   elem('recommencer').click();
 }
 assert.ok(unique.size>100);
 elem('solutions').click();
 elem('correction').click();
 assert.equal(elem('solution').hidden,false);
 assert.equal(elem('correctiond').hidden,false);
 assert.equal(elem('correctiond').children.length,4);
 assert.equal(elem('solutions').attrs['aria-expanded'],'true');
 elem('recommencer').click();
 assert.equal(elem('solution').hidden,true);
 assert.equal(elem('correctiond').hidden,true);
});

test('migration factorized form: historical route and new accessible UI preserved',()=>{
 const html=fs.readFileSync(path.join(base,folder,'Degre2FormeFactorisee.html'),'utf8');
 const data=fs.readFileSync(path.join(base,'renderer/Menus/data-Menu1STfonctionsdegre2.js'),'utf8');
 const style=fs.readFileSync(path.join(base,folder,'Styleexos-desumaths.css'),'utf8');
 assert.match(data,/Forme factorisee\/Degre2FormeFactorisee\.html/);
 assert.match(html,/id="solution"[^>]*hidden/);
 assert.match(html,/id="correctiond"[^>]*hidden/);
 assert.match(html,/mathjax@3\.2\.2/);
 assert.doesNotMatch(html,/polyfill\.io|mathjax\/2\.7\.1|assetsdelivery|bootstrap@/);
 assert.doesNotMatch(html,/Compare tes coordonnées/);
 assert.match(html,/Forme factorisée/);
 assert.match(style,/\.reponse-cachee\[hidden\]/);
 const {spawnSync}=require('node:child_process');
 const syntax=spawnSync(process.execPath,['--check',path.join(base,folder,'Scriptdegre2FormeFactorisee.js')],{encoding:'utf8'});
 assert.equal(syntax.status,0,'Syntaxe du moteur : '+syntax.stderr);
});

test('factorization Chrome acceptance is syntax checked and gates production',()=>{
 const {spawnSync}=require('node:child_process');
 const script='scripts/visual-check-migration-factorisee.cjs';
 const result=spawnSync(process.execPath,['--check',path.join(base,script)],{encoding:'utf8'});
 assert.equal(result.status,0,'Syntaxe de recette invalide : '+result.stderr);
 const workflow=fs.readFileSync(path.join(base,'.github/workflows/g4-1-seconde.yml'),'utf8');
 assert.match(workflow,/node scripts\/visual-check-migration-factorisee\.cjs/);
 assert.match(workflow,/artifacts\/migration-factorisee/);
 const visual=fs.readFileSync(path.join(base,script),'utf8');
 assert.match(visual,/width of \[375,1280\]/);
 assert.match(visual,/data-status|renderedMath/);
 assert.match(visual,/Degre2FormeFactorisee\.html/);
});
