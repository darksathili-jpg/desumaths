/* Desumaths G3.4 — indices progressifs, independants des solutions.
 * Aucun calcul, gabarit historique ou moteur de generation n'est modifie.
 * La mascotte n'intervient qu'apres une action volontaire de l'eleve.
 */
(function () {
  'use strict';
  const root = document.querySelector('#hero-compagnon[data-mode="exercise"]');
  if (!root) return;
  const hints = [
    "Observe les deux termes de l’équation : quelle expression entre parenthèses apparaît deux fois ?",
    "Place ce facteur commun en évidence. Attention au signe « moins » : il change les signes du second groupe.",
    "Tu obtiens un produit égal à zéro. Utilise la propriété du produit nul, puis résous les deux équations obtenues."
  ];
  const button = root.querySelector('[data-hero-tip]');
  const count = root.querySelector('[data-hero-step]');
  if (!button) return;
  let index = 0;
  button.addEventListener('click', () => {
    const hero = window.DesumathsHero && window.DesumathsHero.instance;
    if (!hero) return;
    const step = index % hints.length;
    hero.say(hints[step]);
    index++;
    root.dataset.hintStep=String(step+1);
    if (count) count.textContent='Indice '+(step+1)+' / 3';
    button.textContent = step === hints.length-1 ? 'Revoir les indices' : 'Indice suivant';
  });
})();
