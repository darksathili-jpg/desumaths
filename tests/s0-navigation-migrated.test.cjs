'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..', 'renderer');
const menu = fs.readFileSync(path.join(root, 'Menus', 'data-MenuSecondeEquations.js'), 'utf8');

const exercices = [
  ['Équations du premier degré', '2nde/Equations/Equationsdegre1/Equationsdegre1.html', 'Scriptequationsdegre1.js', 'Styleexos-desumaths.css'],
  ['Équations produits', '2nde/Equations/Equations produits/Equationsproduits.html', 'Scriptequationsproduits.js', 'Styleexos-r14.css'],
  ['Différence de deux carrés', '2nde/Equations/Difference de carres/Differencedecarres.html', 'ScriptDifferencedecarre.js', 'Styleexos-r15.css'],
  ['Facteur commun', '2nde/Equations/Equations avec factorisation/EqsFacteurcommun.html', 'ScriptEqsfacteurcommun.js', 'Styleexos-r16.css']
];

for (const [label, relative, script, style] of exercices) {
  test('S0 - accueil et menu rejoignent la version corrigée : ' + label, () => {
    const file = path.join(root, relative);
    assert.ok(fs.existsSync(file), 'Page absente : ' + relative);
    const html = fs.readFileSync(file, 'utf8');
    assert.ok(menu.includes(relative), 'Menu pointant ailleurs : ' + relative);
    assert.match(html, /<meta\s+name="viewport"/i);
    assert.match(html, /Desumaths|Desum@ths/);
    assert.ok(html.includes(script), 'Script absent dans ' + relative);
    assert.ok(html.includes(style), 'Style corrigé absent dans ' + relative);
    assert.ok(fs.existsSync(path.join(path.dirname(file), script)), 'Moteur absent pour ' + label);
    assert.ok(fs.existsSync(path.join(path.dirname(file), style)), 'CSS absent pour ' + label);
    assert.ok(!html.includes('MathJax.Hub.Config'), 'Ancien MathJax interdit : ' + label);
  });
}
test('S0 - les liens restent identiques pour préserver la navigation historique', () => {
  assert.ok(menu.includes('Equationsdegre1/Equationsdegre1.html'));
  assert.ok(menu.includes('Equations produits/Equationsproduits.html'));
  assert.ok(menu.includes('Difference de carres/Differencedecarres.html'));
  assert.ok(menu.includes('Equations avec factorisation/EqsFacteurcommun.html'));
});
