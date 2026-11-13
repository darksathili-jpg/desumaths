'use strict';
// G2-R13: interdiction de modifier la correction validee sans approbation humaine.
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const dir=path.join(root,'renderer','2nde','Equations','Equationsdegre1');
const source=fs.readFileSync(path.join(dir,'correction-historique.js'),'utf8');
const ui=fs.readFileSync(path.join(dir,'Scriptequationsdegre1.js'),'utf8');
const html=fs.readFileSync(path.join(dir,'Equationsdegre1.html'),'utf8');
const core=require(path.join(dir,'equation-core.js'));
const corrected=require(path.join(dir,'correction-historique.js'));
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const start=source.indexOf('let listecorrections = [');
const end=source.indexOf('\n    // Pas d',start);
test('CONTRAT: bloc de corrections originales inchange',()=>{
 assert.ok(start>=0&&end>start);
 assert.equal(hash(source.slice(start,end)),'35505a820bc04f315a1b4bed9ae69dd179ae599c66abe4f9b9ed89df79b0b571');
});
test('CONTRAT: deux methodes et indications colores presentes',()=>{
 for(const [i,e] of [{a:10,b:-6,c:-8,d:8},{a:5,b:2,c:2,d:1},{a:-4,b:3,c:2,d:-5},{a:3,b:0,c:-2,d:0}].entries()){
   const rendered=corrected.correction(e,core);
   for(const token of ['Méthode &laquo collège &raquo','Méthode &laquo lycée &raquo','\\underbrace','\\color{blue}','\\color{green}','\\color{red}','\\iff','\\begin{array}{lrcl}']){
     assert.ok(rendered.html.includes(token),`scenario ${i}: manque ${token}`);
   }
 }
});
test('CONTRAT: affichage des corrections historiques encore branche',()=>{
 assert.ok(html.indexOf('correction-historique.js')>=0);
 assert.ok(html.indexOf('correction-historique.js')<html.indexOf('Scriptequationsdegre1.js'));
 assert.ok(ui.includes('DesumathsCorrectionHistorique.correction(eq,core)'));
 assert.ok(!ui.includes('core.latexCorrection(eq)'));
});
test('CONTRAT: calculs exacts, signes et saisies equivalentes',()=>{
 const examples=[
  [{a:10,b:-6,c:-8,d:8},'7/9','14/18'],
  [{a:5,b:2,c:2,d:1},'-1/3','-2/6'],
  [{a:1,b:0,c:0,d:0},'0','0/15'],
  [{a:4,b:-1,c:0,d:0},'1/4','0,25'],
  [{a:-2,b:0,c:0,d:3},'-3/2','-1,5']
 ];
 for(const [e,first,equal] of examples){
  assert.equal(core.estSolution(first,e).correct,true);
  assert.equal(core.estSolution(equal,e).correct,true);
  assert.equal(core.estSolution('1/0',e).valide,false);
  assert.ok(corrected.correction(e,core).html.length>200);
 }
});
test('CONTRAT: la saisie de l eleve n est pas incorporee dans le HTML',()=>{
 assert.ok(ui.includes('retour.textContent='));
 assert.ok(!ui.includes('retour.innerHTML='));
});
