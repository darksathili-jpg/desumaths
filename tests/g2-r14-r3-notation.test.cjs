"use strict";
const test=require('node:test');
const assert=require('node:assert/strict');
const crypto=require('node:crypto');
const fs=require('node:fs');
const path=require('node:path');
const js=fs.readFileSync(path.join(__dirname,'../renderer/2nde/Equations/Equations produits/Scriptequationsproduits.js'),'utf8');
test('R14-R3: notation LaTeX historique de R14-R1 preservee',()=>{
  assert.ok(js.includes('Résoudre dans $' + String.fromCharCode(92,92) + 'mathbb{R}$ l’équation :'));
  assert.ok(!js.includes('Résoudre dans ℝ l’équation :'));
});
test('R14-R3: bloc de correction d origine non modifie',()=>{
 const start=js.indexOf('correctiond.innerHTML = `');
 const end=js.indexOf('`;',start)+2;
 assert.ok(start>=0&&end>start);
 assert.equal(crypto.createHash('sha256').update(js.slice(start,end)).digest('hex'),'7d5c8d04d9dcc15f4cc4f3c0b3033a8ae124c5ed094f462b3ab983706f80a43e');
});
