'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const expected={
  "Menu1ST": "Première technologique",
  "Menu1STfonctions": "Première technologique · Fonctions",
  "Menu1STfonctionsdegre2": "Première technologique · Fonctions de degré 2",
  "Menu1STfonctionsdegre3": "Première technologique · Fonctions de degré 3",
  "Menu1STfonctionsderivees": "Première technologique · Fonctions (dérivées)",
  "Menu1STpourcentages": "Première technologique · Pourcentages",
  "Menu1STprobabilitesarbresvariablesaleatoires": "Première technologique · Probabilités et variables aléatoires",
  "Menu1STprobabilitesproportions": "Première technologique · Probabilités et proportions",
  "Menu1STsuitesarithmetiques": "Première technologique · Suites arithmétiques",
  "Menu1STsuitesgeometriques": "Première technologique · Suites géométriques",
  "MenuSecondeDeveloppements": "Seconde · Développements",
  "MenuSecondeEqsDroites": "Seconde · Équations de droites",
  "MenuSecondeEquations": "Seconde · Équations",
  "MenuSecondeFactorisations": "Seconde · Factorisations",
  "MenuSecondeFonctions": "Seconde · Fonctions",
  "MenuSecondeMilieuLongueur": "Seconde · Milieux et longueurs",
  "MenuSecondeNbresetCalculs": "Seconde · Nombres et calculs",
  "MenuSecondePourcentages": "Seconde · Pourcentages",
  "MenuSecondeProbabilites": "Seconde · Probabilités",
  "MenuSecondeSystemes": "Seconde · Systèmes",
  "MenuSecondeValeurAbsolue": "Seconde · Valeur absolue",
  "MenuSecondeVecteurs": "Seconde · Vecteurs",
  "MenuTSTExpos": "Terminale technologique · Fonctions exponentielles et logarithmes",
  "MenuTSTInverse": "Terminale technologique · Fonction inverse",
  "MenuTSTProbasConditionnelles": "Terminale technologique · Probabilités conditionnelles",
  "MenuTSTStats": "Terminale technologique · Statistiques",
  "MenuTSTSuites": "Terminale technologique · Suites",
  "MenuTSTVariablesAleatoires": "Terminale technologique · Variables aléatoires discrètes",
  "MenuTaleContinuite": "Terminale spécialité · Continuité",
  "MenuTaleConvexite": "Terminale spécialité · Convexité",
  "MenuTaleEquasdiffs": "Terminale spécialité · Primitives et équations différentielles",
  "MenuTaleEspace": "Terminale spécialité · Géométrie dans l’espace",
  "MenuTaleIntegration": "Terminale spécialité · Calcul intégral",
  "MenuTaleLN": "Terminale spécialité · Fonction logarithme népérien",
  "MenuTaleLimites": "Terminale spécialité · Limites",
  "MenuTaleProbabilites": "Terminale spécialité · Probabilités",
  "MenuTaleSpe": "Terminale spécialité",
  "MenuTaleSuites": "Terminale spécialité · Suites",
  "MenuTaleSujets": "Terminale spécialité · Sujets de baccalauréat",
  "MenuTaleTechno": "Terminale technologique",
  "MenuTaleTrigo": "Terminale spécialité · Trigonométrie"
};
test('G3.5 : 41 titres de menus lisibles, accentués et sans identifiants techniques',()=>{
 const keys=Object.keys(expected);
 assert.equal(keys.length,41);
 const all=fs.readdirSync(path.join(root,'renderer/Menus'))
   .filter(n=>n.startsWith('data-Menu')&&n.endsWith('.js')).map(n=>n.slice(5,-3)).sort();
 assert.deepEqual(keys.sort(),all,'Every chapter must be covered by this readability contract');
 for(const name of keys){
   const p=path.join(root,'renderer/Menus','data-'+name+'.js');
   const source=fs.readFileSync(p,'utf8');
   const data=vm.runInNewContext(source+';MENU',{}, {timeout:1500});
   assert.equal(data.titre,expected[name],name);
   assert.equal(data.titre.trim(),data.titre,'Leading or trailing spaces in '+name);
   assert.ok(!/ {2,}| · |· {2}/.test(data.titre.replaceAll(' · ',' ')),name);
   assert.ok(data.sections && Array.isArray(data.sections),name+' historical sections removed');
   for(const section of data.sections){
     assert.ok(Array.isArray(section.liens),name+' resource links lost');
     for(const item of section.liens){
       assert.ok(typeof item.href==='string' && item.href.length>0,name+' missing resource');
       assert.ok(typeof item.label==='string' && item.label.length>0,name+' missing resource label');
     }
   }
   const html=path.join(root,'renderer/Menus',name+'.html');
   assert.ok(fs.existsSync(html),'Missing live menu page '+name);
 }
});
test('G3.5 : titre des pages et onglet du navigateur tirés de la même donnée lisible',()=>{
 const renderer=fs.readFileSync(path.join(root,'renderer/Menus/rendu-menu.js'),'utf8');
 assert.match(renderer,/document\.title\s*=\s*`${MENU\.titre}/);
 assert.match(renderer,/elTitre\.textContent\s*=\s*MENU\.titre/);
 assert.match(renderer,/badge\.textContent\s*=\s*'PDF'/);
 assert.match(renderer,/a\.href\s*=\s*encodeURI\(href\)/);
 assert.match(renderer,/construireListe\(section\.liens, liste\)/);
});
