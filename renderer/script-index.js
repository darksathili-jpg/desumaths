// ============================================================================
// script-index.js
// Anime la carte de démonstration du hero : un exercice aléatoire est généré,
// résolu (tampon rouge), puis remplacé par un autre, en boucle — pour
// incarner concrètement la promesse « s'entraîner à l'infini » du site.
// Respecte prefers-reduced-motion : un seul exercice est alors affiché,
// sans boucle ni animation de tampon.
// ============================================================================

function alea(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function aleaNonNul(min, max) {
  let v = alea(min, max);
  while (v === 0) v = alea(min, max);
  return v;
}

function signe(n) {
  return n >= 0 ? '+' : '-';
}

const modeles = [
  () => {
    const a = alea(2, 6);
    const xSol = aleaNonNul(-8, 8);
    const b = alea(-9, 9);
    const c = a * xSol + b;
    return {
      enonce: `Résoudre : $${a}x ${signe(b)} ${Math.abs(b)} = ${c}$`,
      solution: `$x = ${xSol}$`,
    };
  },
  () => {
    const p = aleaNonNul(-7, 7);
    const q = aleaNonNul(-7, 7);
    const somme = p + q;
    const produit = p * q;
    return {
      enonce: `Développer : $(x ${signe(p)} ${Math.abs(p)})(x ${signe(q)} ${Math.abs(q)})$`,
      solution: `$x^2 ${signe(somme)} ${Math.abs(somme)}x ${signe(produit)} ${Math.abs(produit)}$`,
    };
  },
  () => {
    const a = alea(1, 6);
    const b = aleaNonNul(-9, 9);
    return {
      enonce: `Dériver : $f(x) = ${a}x^2 ${signe(b)} ${Math.abs(b)}x$`,
      solution: `$f'(x) = ${2 * a}x ${signe(b)} ${Math.abs(b)}$`,
    };
  },
  () => {
    const a = alea(2, 6);
    const xSol = aleaNonNul(-8, 8);
    const b = alea(-9, 9);
    const c = a * xSol + b;
    const symbole = Math.random() < 0.5 ? '<' : '\\leqslant';
    return {
      enonce: `Résoudre : $${a}x ${signe(b)} ${Math.abs(b)} ${symbole} ${c}$`,
      solution: `$x ${symbole} ${xSol}$`,
    };
  },
];

function attendre(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeset(elements) {
  if (window.MathJax && window.MathJax.startup) {
    await window.MathJax.startup.promise;
    await window.MathJax.typesetPromise(elements);
  }
}

async function initialiserDemo() {
  const elEnonce = document.getElementById('demo-enonce');
  const elZoneSolution = document.getElementById('demo-solution');
  const elReponse = document.getElementById('demo-reponse');
  if (!elEnonce || !elZoneSolution || !elReponse) return;

  const reduireMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  async function jouerUnProbleme() {
    const probleme = modeles[Math.floor(Math.random() * modeles.length)]();

    elZoneSolution.classList.remove('corrige');
    elReponse.textContent = '';
    elEnonce.classList.add('masque');
    await attendre(reduireMotion ? 0 : 200);
    elEnonce.innerHTML = probleme.enonce;
    await typeset([elEnonce]);
    elEnonce.classList.remove('masque');

    await attendre(reduireMotion ? 0 : 1100);
    elReponse.innerHTML = probleme.solution;
    await typeset([elReponse]);
    elZoneSolution.classList.add('corrige');
  }

  if (reduireMotion) {
    await jouerUnProbleme();
    return;
  }

  // eslint-disable-next-line no-constant-condition
  while (true) {
    await jouerUnProbleme();
    await attendre(2600);
  }
}

initialiserDemo();
