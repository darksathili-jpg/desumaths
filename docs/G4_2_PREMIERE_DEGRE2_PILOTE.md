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
