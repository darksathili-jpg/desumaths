"use strict";
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),crypto=require('node:crypto'),path=require('node:path');
const dir=path.resolve(__dirname,'../renderer/2nde/Equations/Equations produits');
const js=fs.readFileSync(path.join(dir,'Scriptequationsproduits.js'),'utf8'),css=fs.readFileSync(path.join(dir,'Styleexos-r14.css'),'utf8');
test('R14-R1: correction originale inchangée',()=>{const start=js.indexOf('correctiond.innerHTML = `'),end=js.indexOf('`;',start)+2;assert.ok(start>=0&&end>start);assert.equal(crypto.createHash('sha256').update(js.slice(start,end)).digest('hex'),'7d5c8d04d9dcc15f4cc4f3c0b3033a8ae124c5ed094f462b3ab983706f80a43e')});
test('R14-R1: enonce en deux lignes et correction pleine largeur',()=>{assert.ok(js.includes('class="enonce-texte"'));assert.ok(js.includes('class="enonce-expression"'));assert.ok(css.includes('grid-column:1/-1'));assert.ok(css.includes('overflow-x:auto'));assert.ok(css.includes('max-height:none'))});
