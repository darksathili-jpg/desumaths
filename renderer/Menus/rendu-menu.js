// ============================================================================
// Menus/rendu-menu.js
// Moteur générique pour toutes les pages de menu du site. Chaque page de
// menu n'a besoin que d'un fichier de données déclarant une variable
// globale MENU ; ce script, identique partout, construit la page à partir
// de cet objet. Deux formes de données sont prises en charge :
//
//  - MENU.themes : liste plate {href,label} → rendue en grille d'onglets
//    (menus de niveau : Seconde, Première technologique...).
//  - MENU.sections : liste de { titre?, liens } où chaque lien peut être
//    { href, label, type? } ou un groupe { label, groupe: [...] } imbriqué
//    (menus de thème : fiches PDF + exercices « à volonté », avec
//    sous-groupes comme « Tableaux de signes »).
//
// MENU.retour = { href, label } affiche un second lien de retour dans
// l'en-tête (vers le menu de niveau parent), en plus du lien Accueil.
//
// Scripts classiques (pas de type="module") : chaque page charge son
// fichier menu-*-data.js puis rendu-menu.js dans cet ordre (defer), MENU
// est une simple variable globale, sans chemin d'import à maintenir.
// ============================================================================

function creerLien({ href, label, type }) {
  const a = document.createElement('a');
  a.href = encodeURI(href);
  a.className = 'lien-menu';
  if (type === 'pdf') {
    a.target = '_blank';
    a.rel = 'noopener';
  }

  const texte = document.createElement('span');
  texte.textContent = label;
  a.appendChild(texte);

  if (type === 'pdf') {
    const badge = document.createElement('span');
    badge.className = 'badge-pdf';
    badge.textContent = 'PDF';
    a.appendChild(badge);
  }

  return a;
}

function construireListe(liens, conteneur) {
  liens.forEach((item) => {
    if (item.groupe) {
      const sousTitre = document.createElement('p');
      sousTitre.className = 'sous-groupe-titre';
      sousTitre.textContent = item.label;
      conteneur.appendChild(sousTitre);

      const sousListe = document.createElement('div');
      sousListe.className = 'sous-groupe';
      construireListe(item.groupe, sousListe);
      conteneur.appendChild(sousListe);
      return;
    }
    conteneur.appendChild(creerLien(item));
  });
}

function construireMenu() {
  if (typeof MENU === 'undefined') {
    console.error('rendu-menu.js : aucune variable MENU trouvée. '
      + 'Chargez un fichier menu-*-data.js avant rendu-menu.js.');
    return;
  }

  document.title = `${MENU.titre} — entraîn'maths`;

  const elTitre = document.getElementById('titre-menu');
  if (elTitre) elTitre.textContent = MENU.titre;

  const elRetour = document.getElementById('lien-retour');
  if (elRetour) {
    if (MENU.retour) {
      elRetour.href = MENU.retour.href;
      elRetour.textContent = `← ${MENU.retour.label}`;
      elRetour.hidden = false;
    } else {
      elRetour.hidden = true;
    }
  }

  const grilleThemes = document.getElementById('themes');
  if (grilleThemes && MENU.themes) {
    MENU.themes.forEach((item) => {
      const a = creerLien(item);
      a.className = 'onglet';
      grilleThemes.appendChild(a);
    });
  }

  const conteneurSections = document.getElementById('sections');
  if (conteneurSections && MENU.sections) {
    MENU.sections.forEach((section) => {
      const bloc = document.createElement('div');
      bloc.className = 'section-menu';

      if (section.titre) {
        const h2 = document.createElement('h2');
        h2.className = 'section-titre';
        h2.textContent = section.titre;
        bloc.appendChild(h2);
      }

      const liste = document.createElement('div');
      liste.className = 'liste-liens';
      construireListe(section.liens, liste);
      bloc.appendChild(liste);

      conteneurSections.appendChild(bloc);
    });
  }
}

construireMenu();
