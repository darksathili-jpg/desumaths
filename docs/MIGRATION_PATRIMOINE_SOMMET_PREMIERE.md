# Migration du patrimoine — Première technologique / Sommet

## Périmètre réellement migré

Exercice historique : `1ST/Fonctions/Fonctions degre 2/Sommet/Degre2Sommet.html`.

Son lien d'origine est conservé dans `Menus/data-Menu1STfonctionsdegre2.js`.
La structure obsolète (Bootstrap externe, MathJax 2, images stock) est remplacée par la charte Desumaths et MathJax 3.

## Contrat mathématique

Comme dans l'exercice historique, chaque tirage sélectionne :
- deux racines entières `alpha` et `beta` entre -9 et 9 incluses, éventuellement égales ;
- un coefficient entier non nul `a` tel que `1 <= |a| <= 9` ;
- l'énoncé `f(x)=a(x-alpha)(x-beta)` ;
- le sommet `xS=(alpha+beta)/2`, `yS=a(xS-alpha)(xS-beta)`.

Les étapes de correction reprennent la méthode originale (lire les racines, calculer l'abscisse du sommet puis son ordonnée). Le contenu mathématique généré n'est pas remplacé par l'exemple fixe de la parabole G4.2.

## Règles pédagogiques de non-régression

La solution et la correction détaillée sont masquées au chargement. Les deux boutons sont indépendants et annoncent leur état via `aria-expanded`. Un nouvel exercice masque automatiquement les réponses du tirage précédent. Aucun graphique ne révèle les réponses demandées.

## Preuves

- `tests/migration-sommet-model.test.cjs` : 500 tirages, plage de coefficients et racines, sommet exact, masquage et révélation sur clic.
- `scripts/visual-check-migration-sommet.cjs` : parcours réel par le menu, 12 tirages × 2 largeurs, MathJax, correction en quatre étapes et captures 375/1280.
- GitHub Actions `g4-1-seconde.yml` : exécute ce scénario avant la publication et conserve les preuves `artifacts/migration-sommet`.

Les 500 tirages ont aussi été vérifiés par simulation du générateur actuel, sans erreur. La nouvelle recette GitHub Actions, le navigateur réel et le déploiement restent à confirmer.

## Suite prioritaire

Migrer ensuite les exercices réellement proposés par les menus de l'ancien site, en donnant la priorité à ceux qui dépendent encore de MathJax 2, de Bootstrap et de services externes. Pour chaque exercice, préserver la génération aléatoire et la logique de correction, tester, puis confirmer la version disponible sur GitHub Pages.
