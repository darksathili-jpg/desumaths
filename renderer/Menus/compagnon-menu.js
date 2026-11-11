/* Desumaths G3.3 — adaptateur unique pour tous les menus.
 * Reutilise strictement le moteur et les 12 poses du compagnon de l'accueil.
 * L'ajout se fait dans le flux de la page : aucun bouton du menu n'est recouvert.
 */
(function () {
  'use strict';
  const menu = document.querySelector('.menu-niveau');
  if (!menu || document.querySelector('#hero-compagnon')) return;

  function creer(tag, classe, texte) {
    const e = document.createElement(tag);
    if (classe) e.className = classe;
    if (typeof texte === 'string') e.textContent = texte;
    return e;
  }
  function ajouter(parent, tag, classe, texte) {
    const e = creer(tag, classe, texte); parent.appendChild(e); return e;
  }
  function bouton(parent, hook, libelle) {
    const e = ajouter(parent, 'button', '', libelle);
    e.type = 'button'; e.dataset[hook] = '';
    return e;
  }

  const titre = typeof MENU !== 'undefined' && MENU && typeof MENU.titre === 'string'
    ? MENU.titre : 'Mathématiques';
  const estEquations = /equations?|équations?/i.test(titre);
  const estFonctions = /fonctions?/i.test(titre);
  const conseils = estEquations
    ? [
        "Observe d'abord la forme de l'équation avant de choisir une méthode.",
        "Un quotient apparaît ? Pense aux valeurs interdites avant de résoudre.",
        "Compare chacune de tes transformations avec la correction détaillée."
      ]
    : estFonctions
      ? [
          "Commence par repérer les informations données sur la fonction.",
          "Une représentation graphique peut t'aider à vérifier ton raisonnement.",
          "Après ton essai, confronte les étapes avec la correction."
        ]
      : [
          "Choisis un thème, puis essaie un exercice avant de regarder la réponse.",
          "Tu peux générer plusieurs exercices pour consolider une même méthode.",
          "La correction détaillée te permet de comparer les étapes, pas seulement le résultat."
        ];

  const base = '../components/hero/';
  for (const nom of ['hero.css', 'hero-menu.css']) {
    if (!document.querySelector('link[data-desumaths-hero="'+nom+'"]')) {
      const link = creer('link'); link.rel = 'stylesheet';
      link.href = base + nom;
      link.dataset.desumathsHero = nom;
      document.head.appendChild(link);
    }
  }

  const conteneur = creer('aside','hero-compagnon menu-compagnon');
  conteneur.id = 'hero-compagnon';
  conteneur.dataset.pose = 'idle';
  conteneur.dataset.motion = 'on';
  conteneur.dataset.mode = 'menu';
  conteneur.setAttribute('aria-label', 'Christophe, accompagnateur des menus Desumaths');

  const plateau = ajouter(conteneur,'div','hero-plateau');
  const marque = ajouter(plateau,'div','hero-plateau-marque');
  marque.setAttribute('aria-hidden','true');
  ajouter(marque,'span','', 'CHRISTOPHE');
  ajouter(marque,'span','hero-plateau-separation');
  ajouter(marque,'span','', 'π');
  const visuel = ajouter(plateau,'div','hero-compagnon-visuel');
  visuel.setAttribute('aria-hidden','true');
  const sprite = ajouter(visuel,'span','hero-compagnon-sprite');
  sprite.dataset.frame = '1';
  ajouter(visuel,'span','hero-ombre');

  const bulle = ajouter(conteneur,'div','hero-bulle');
  ajouter(bulle,'span','hero-bulle-kicker','Christophe · Ton compagnon');
  const message = ajouter(bulle,'p','hero-bulle-texte',
    estEquations ? 'Des équations ? Choisis une forme, puis essaie de la résoudre.'
      : 'Choisis un thème et entraîne-toi à ton rythme.');
  message.dataset.heroMessage='';
  message.setAttribute('aria-live','polite');
  const actions = ajouter(bulle,'div','hero-bulle-actions');
  const tip = bouton(actions,'heroTip','Un conseil');
  bouton(actions,'heroTurn','Changer de vue');
  const motion = bouton(actions,'heroMotion',"Réduire l'animation");
  motion.setAttribute('aria-pressed','false');
  bouton(actions,'heroHide','Masquer');

  const retour = creer('button','hero-retour menu-compagnon-retour','Afficher Christophe');
  retour.type='button'; retour.hidden=true; retour.dataset.heroReturn='';

  const intro = menu.querySelector('.sous-titre-niveau') || menu.querySelector('h1');
  if (intro) { intro.insertAdjacentElement('afterend',conteneur); conteneur.insertAdjacentElement('afterend',retour); }
  else menu.prepend(conteneur,retour);

  const script = creer('script');
  script.src = base + 'hero.js';
  script.addEventListener('load', () => {
    const api = window.DesumathsHero;
    const hero = api && api.instance;
    if (!hero) return;
    let index = 0;
    tip.addEventListener('click', () => {
      hero.say(conseils[index % conseils.length]);
      index++;
    });
  });
  document.head.appendChild(script);
})();
