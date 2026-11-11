'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const base=path.resolve(__dirname,'..');
const read=path=>fs.readFileSync(require('node:path').join(base,path),'utf8');
const menu=read('renderer/Menus/rendu-menu.js');
const companion=read('renderer/Menus/compagnon-menu.js');
const css=read('renderer/components/hero/hero-menu.css');
const hero=read('renderer/components/hero/hero.js');

test('G3.3 - one shared menu guide; historic menu data and links untouched',()=>{
 assert.match(menu,/construireMenu\(\);/);
 assert.match(menu,/compagnon-menu\.js/);
 for(const p of [
  'renderer/Menus/MenuSeconde.html',
  'renderer/Menus/MenuSecondeEquations.html',
  'renderer/Menus/Menu1ST.html',
  'renderer/Menus/MenuTaleSpe.html']){
   assert.match(read(p),/rendu-menu\.js/);
 }
 assert.match(companion,/document\.querySelector\('\.menu-niveau'\)/);
 assert.match(companion,/hero-compagnon/);
 assert.match(companion,/\.appendChild/);
 assert.match(companion,/hero\.js/);
 assert.match(companion,/hero-menu\.css/);
});
test('G3.3 - supports real MathJax corrected equations and safe pedagogical tips',()=>{
 assert.match(companion,/valeurs interdites/);
 assert.match(companion,/correction détaillée/);
 assert.match(companion,/\bconseils\b/);
 assert.match(companion,/\.textContent = texte/);
 assert.doesNotMatch(companion,/innerHTML\s*=/);
 assert.match(read('renderer/Menus/data-MenuSecondeEquations.js'),/EqsFacteurcommun\.html/);
 assert.match(read('renderer/Menus/data-MenuSecondeEquations.js'),/Equationsproduits\.html/);
 assert.match(read('renderer/Menus/data-MenuSecondeEquations.js'),/Equationsquotients\.html/);
});
test('G3.3 - same 12-frame sprite and a discreet responsive layout',()=>{
 assert.match(css,/grid-template-columns/);
 assert.match(css,/@media\(max-width:620px\)/);
 assert.doesNotMatch(css,/position:\s*fixed/);
 assert.match(hero,/root\.dataset\.mode!=='menu'/);
 assert.match(companion,/data-hero|heroTip/);
 assert.match(companion,/aria-pressed/);
 assert.match(companion,/aria-live/);
 assert.match(companion,/Masquer/);
 assert.match(companion,/Changer de vue/);
 assert.match(read('renderer/components/hero/hero.css'),/christophe-12-poses\.avif/);
});
