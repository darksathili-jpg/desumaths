'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
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
