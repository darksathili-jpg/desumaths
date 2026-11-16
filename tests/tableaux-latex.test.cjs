'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
require('../renderer/tableaux-latex.js');

const { signesDeuxFacteurs, variationsDegreDeux } = globalThis.DesumathsTableauxLatex;

test('le tableau de signes place les racines et chaque zéro dans sa colonne', () => {
  const facteurs = [
    { racine: -1, pente: -5, expression: '-5x-5' },
    { racine: 1, pente: 10, expression: '10x-10' },
  ];
  const source = signesDeuxFacteurs(facteurs);
  assert.ok(source.includes(String.raw`x & -\infty &  & -1 &  & 1 &  & +\infty`));
  assert.ok(source.includes('-5x-5 &  & + & 0 & - &  & - & '));
  assert.ok(source.includes('10x-10 &  & - &  & - & 0 & + & '));
  assert.ok(source.includes('(-5x-5)(10x-10) &  & - & 0 & + & 0 & - & '));
  assert.ok(signesDeuxFacteurs([...facteurs].reverse()).includes('(10x-10)(-5x-5) &  & - & 0 & + & 0 & - & '));
});

test('le tableau de variations distingue le minimum du maximum', () => {
  const bornes = [-3, -1, 2];
  const minimum = variationsDegreDeux({ bornes, images: [4, 0, 9], coefficient: 1 });
  const maximum = variationsDegreDeux({ bornes, images: [-4, 0, -9], coefficient: -1 });
  assert.ok(minimum.includes(String.raw`f'(x) &  & - & 0 & + & `));
  assert.ok(minimum.includes(String.raw`f(x) &  & \searrow &  & \nearrow & `));
  assert.ok(maximum.includes(String.raw`f'(x) &  & + & 0 & - & `));
  assert.ok(maximum.includes(String.raw`f(x) &  & \nearrow &  & \searrow & `));
});

test('les tableaux et les solutions concordent pour les 64 configurations de produit ou de quotient', () => {
  const base = path.join(__dirname, '../renderer/2nde/Inequations/Tableaux de signes');
  const comparaisons = [null, n => n <= 0, n => n < 0, n => n >= 0, n => n > 0];
  const signe = n => n > 0 ? '+' : '-';
  for (const quotient of [false, true]) {
    const fichier = quotient
      ? 'Tableaux 2 facteurx VI/ScriptTableauSignesDeuxFacteursVI.js'
      : 'Tableaux 2 facteurs/ScriptTableauSignesDeuxFacteurs.js';
    const source = fs.readFileSync(path.join(base, fichier), 'utf8');
    const soluce = vm.runInNewContext(source.split('\nlet x1 =')[0] + '\nsoluce');
    for (const [x1, x2] of [[-2, 3], [3, -2]]) {
      for (const a1 of [-2, 2]) {
        for (const a2 of [-3, 3]) {
          const min = Math.min(x1, x2);
          const max = Math.max(x1, x2);
          const points = [min - 1, min, (min + max) / 2, max, max + 1];
          const valeur = x => quotient ? a1 * (x - x1) / (a2 * (x - x2)) : a1 * a2 * (x - x1) * (x - x2);
          const tableau = signesDeuxFacteurs([
            { racine: x1, pente: a1, expression: 'N(x)' },
            { racine: x2, pente: a2, expression: 'D(x)' },
          ], { quotient });
          const signes = points.map(x => {
            if (quotient && x === x2) return String.raw`\Vert`;
            return x === x1 || x === x2 ? '0' : signe(valeur(x));
          });
          assert.ok(tableau.includes(` &  & ${signes.join(' & ')} & \\end{array}`));
          for (let choix = 1; choix <= 4; choix++) {
            const solution = soluce(x1, x2, a1, a2, choix);
            const intervalles = solution.split('\\cup').map(intervalle => {
              const match = intervalle.trim().match(/^([\[\]])(-\\infty|-?\d+)~;([+]?\\infty|-?\d+)([\[\]])$/);
              assert.ok(match, solution);
              const [, gauche, debut, fin, droite] = match;
              return x => (debut === '-\\infty' || (gauche === '[' ? x >= +debut : x > +debut)) &&
                (fin === '+\\infty' || (droite === ']' ? x <= +fin : x < +fin));
            });
            for (const x of points) {
              assert.equal(intervalles.some(contient => contient(x)),
                (!quotient || x !== x2) && comparaisons[choix](valeur(x)), solution);
            }
          }
        }
      }
    }
  }
});
