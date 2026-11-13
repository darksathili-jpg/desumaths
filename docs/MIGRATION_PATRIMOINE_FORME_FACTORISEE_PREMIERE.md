# Desumaths — migration de l'exercice historique « Forme factorisée » (Première technologique)

## Source et navigation préservées

Le menu historique `Menus/Menu1STfonctionsdegre2.html` garde son lien vers `1ST/Fonctions/Fonctions degre 2/Forme factorisee/Degre2FormeFactorisee.html`, désormais présenté avec la charte responsive Desumaths. Ce n'est **pas** le laboratoire G4.2 : il s'agit de l'exercice original à génération aléatoire.

## Invariant mathématique

Comme auparavant, le générateur choisit deux racines entières `alpha` et `beta` comprises entre −9 et 9, un point `x0` distinct de ces racines, et un coefficient entier `a` de valeur absolue comprise entre 1 et 9. Il calcule `image=a*(x0-alpha)*(x0-beta)`.

L'élève voit les racines et l'image `f(x0)`, puis doit retrouver **la forme factorisée**. La solution et la correction (formule générale, substitution, coefficient, conclusion) ne s'affichent qu'au clic. Un nouveau tirage les masque de nouveau.

## Migration visuelle

La page utilise les composants graphiques validés sur l'exercice « Équations du premier degré » : feuille d'énoncé, panneaux de réponse, boutons accessibles, navigation et adaptation aux petits écrans. Les dépendances de la page historique MathJax 2, `polyfill.io`, Bootstrap externe et image de stock ont été retirées. Le générateur et la présentation ont été adaptés pour MathJax 3.

## Preuves et validation

- Test Node `tests/migration-forme-factorisee.test.cjs` : 500 générations aléatoires, calculs exacts, plages et affichages cachés ;
- vérification du générateur dans la session de développement : 500 tirages, 500 combinaisons distinctes, 0 anomalie ;
- test navigateur prévu `scripts/visual-check-migration-factorisee.cjs` : chemin depuis le menu, 12 tirages × 2 largeurs (375, 1280), géométrie de page, MathJax et correction, captures et mesures ;
- recette GitHub Actions `g4-1-seconde.yml` : vérification avant la phase `deploy`, publication seulement si le build est réussi.

Les preuves Chrome et la confirmation de la publication de cette nouvelle révision sont **encore en attente**. Vérifier les deux jobs, puis la révision publique.

## Prochaine priorité

Étendre la migration aux exercices historiques suivants et maintenir un inventaire du patrimoine. Ne pas confondre une page existante, une page migrée et une page effectivement validée en production.
