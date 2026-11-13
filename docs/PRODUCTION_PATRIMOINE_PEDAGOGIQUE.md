# Desumaths — priorité : patrimoine pédagogique et accès production

## Objectif fonctionnel

Les exercices et corrections de l'ancien site doivent rester le produit principal. Le laboratoire TikZ et les prototypes G4.2 sont des compléments, non des remplacements.

## Accueil : accès rapides aux chapitres historiques

La nouvelle section « Retrouver les exercices et leurs corrections » propose 12 liens explicites, répartis entre Seconde, Première technologique et Terminale spécialité. Les noms des fichiers cibles ont été vérifiés dans `renderer/Menus` :

- Seconde : équations, fonctions, probabilités, tous les chapitres ;
- Première technologique : degré 2, suites arithmétiques, probabilités et proportions, tous les chapitres ;
- Terminale spécialité : suites, probabilités, limites, tous les chapitres.

Les menus historiques et leurs sources de données n'ont pas été remplacés. L'accueil garde ses liens existants et Christophe.

## Critères d'acceptation

- Menu d'accueil clair à 375 et 1280 pixels, sans débordement ;
- les douze liens rendent HTTP 200 sur le site exporté et leurs pages existent dans le dépôt ;
- les chapitres et exercices historiques restent inchangés ;
- test Chrome `scripts/visual-check-patrimoine.cjs` exécuté **avant** toute publication dans le workflow G4.1 ;
- captures et métriques conservées dans `artifacts/patrimoine-accueil` ;
- contrôle du job `deploy` et de `g4-1-build.json` avant toute affirmation que la production est à jour.

## Points à traiter après cette première étape

Il faut poursuivre un inventaire détaillé des pages pédagogiques et vérifier **chaque exercice** (génération, bouton de correction, affichage des formules, figures et interaction en conditions élèves). La présence d'un lien et un HTTP 200 ne prouvent pas, à eux seuls, le fonctionnement de l'exercice.

Ne pas considérer la branche `main` comme source de publication actuelle sans preuve : les fichiers du site complet sont présents sur la branche `feature/g4-1-seconde-figures`, pas retrouvés sur `main` lors de cette recette.
