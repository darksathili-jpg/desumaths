"use strict";
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),vm=require('node:vm');
const dir=path.resolve(__dirname,'../renderer/2nde/Equations/Difference de carres');
const src=fs.readFileSync(path.join(dir,'ScriptDifferencedecarre.js'),'utf8');
const html=fs.readFileSync(path.join(dir,'Differencedecarres.html'),'utf8');
const originalHash='c0209c88beb97a4a474a79adab05f9c71007171bb8a1e440f5a1e7cbfcc1a616';
const original=fs.readFileSync(path.resolve(__dirname,'../docs/G2_R15_FACTO_ORIGINAL.txt'),'utf8');
function sha(s){return crypto.createHash('sha256').update(s).digest('hex');}
test('R15: correction factorisation conservee exactement dans le JS',()=>{
 assert.equal(sha(original),originalHash);
 assert.ok(src.includes('correctiond.innerHTML=`'+original+'`'));
 assert.ok(original.includes('\\underbrace')&&original.includes('\\begin{array}'));
});
test('R15: ni ensemble solution ni resolution produit nul',()=>{
 assert.doesNotMatch(src,/Produit de facteurs nul|\\left\\\{|solsimp\(|simpfracmax\(|\\dfrac/);
 assert.doesNotMatch(src,/\\boxed/);
 assert.match(html,/Factoriser l.expression suivante/);
});
test('R15: charte et MathJax 3 accessibles',()=>{
 assert.match(html,/StylesIndex.css/);assert.match(html,/tex-chtml.js/);assert.match(html,/Styleexos-r15.css/);
 assert.match(html,/id="correctiond"/);assert.match(html,/id="solutions"/);
});
test('R15: 2000 factorisations exactes, avec coefficients non nuls',()=>{
 const elems={};for(const id of ['enonce','correctiond','solution','solutions','correction','recommencer','accueil','MenuSeconde','MenuSecondeEquations'])elems[id]={innerHTML:'',hidden:true,dataset:{afficher:'Afficher',masquer:'Masquer'},setAttribute(){},addEventListener(){},textContent:''};
 const doc={getElementById:id=>elems[id]};
 for(let k=0;k<2000;k++){
  // Le générateur et sa formule doivent rester exacts numériquement à chaque essai.
  const ctx={document:doc,window:{addEventListener(){},MathJax:{typesetPromise:()=>Promise.resolve()},location:{reload(){}}},Math:Math};
  vm.runInNewContext(src+';globalThis.__coeff=[a,b,c,d,aPlusc,bPlusd,aMoinsc,bMoinsd];',ctx);
  const [a,b,c,d,p,q,r,s]=ctx.__coeff;
  assert.notEqual(p,0);
  for(const x of [-3,-1,0,2,4])assert.ok((a*x+b)**2-(c*x+d)**2===(p*x+q)*(r*x+s));
  assert.doesNotMatch(elems.solution.innerHTML,/\\boxed/); assert.match(elems.solution.innerHTML,/\\times/);
 }
});
