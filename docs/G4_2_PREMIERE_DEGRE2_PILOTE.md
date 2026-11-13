# Desumaths G4.2 — pilote Première technologique, fonctions de degré 2

## Périmètre

Branche indépendante créée depuis `feature/g4-1-seconde-figures`.
Le menu `Menus/Menu1STfonctionsdegre2.html` conserve son générateur de sections et ses ressources historiques et ajoute une activité facultative.

## Activité

`Laboratoire/FiguresTikZ/premiere-degre2.html` affiche une unique parabole TikZJax pour `f(x)=x²−4`, puis propose de conjecturer et vérifier :
- Racines : −2 et 2
- Factorisation : `f(x)=(x−2)(x+2)`
- Sommet : `S(0;−4)`

Le corrigé est masqué dans un élément `details`. Les liens de retour vers le menu Première, vers le laboratoire complet et vers la page variations restent accessibles.

## Preuves et limites

Les fichiers enregistrés ont été relus et les liens, l'unicité de la figure, la cohérence de la factorisation ainsi que l'absence de déploiement automatique ont été vérifiés structurellement. La suite `tests/g4-2-premiere-degre2.test.cjs` et le workflow `.github/workflows/g4-2-premiere.yml` doivent encore être exécutés par GitHub Actions.

Le workflow G4.2 ne publie pas sur GitHub Pages. Avant diffusion, exiger l'artefact de prévisualisation, une vérification visuelle Chrome à 375 et 1280 pixels, le rendu SVG réel et un accord de validation.

Aucun fichier historique d'exercices ou de corrections mathématiques n'est modifié dans ce lot.

## G4.2-R2 — vérifications réelles prévues

Le script `scripts/visual-check-g4-2-premiere.cjs` parcourt le menu Première technologique en Chrome à **375 et 1280 pixels**, exige la présence des huit liens historiques, contrôle le style effectivement appliqué à la passerelle, clique sur la nouvelle activité puis contrôle la page cible.

La recette exige une unique figure TikZ, un SVG géométriquement non vide et accessible, une réponse initialement masquée puis révélable par l'élève, un retour vers le menu d'origine et aucun débordement horizontal. Elle produit des captures, des métriques et des diagnostics en cas d'échec.

Le workflow `.github/workflows/g4-2-premiere.yml` rejoue également la compilation PDF et les contrôles G3/G4/G4.1 déjà présents, et dépose les artefacts `desumaths-g4-2-premiere-preuves` et, **uniquement après les tests**, `desumaths-g4-2-premiere-preview`. Il n'inclut aucun déploiement Pages. `node --check` est également exécuté pour éviter un nouveau blocage dû à une faute de syntaxe dans la recette.

**Statut :** code et workflow présents dans GitHub ; résultats de Chrome et publication non encore confirmés. La branche principale et le site publié sont inchangés par ce lot.
