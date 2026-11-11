# Desumaths — Plan de transition vers une chaîne Git unique

Date : 11 novembre 2026. Statut : PROPOSÉ — NON DÉPLOYÉ.

## Constat vérifié

- Le dépôt distant dispose de `main` et `audit/g0-foundation`.
- Le `package.json` de `audit/g0-foundation` annonce `0.6.0-g2-r9`, tandis que l'utilisateur teste localement des correctifs successifs jusqu'à R16-R2.
- Les captures fournies montrent une régression responsive : correction mathématique disproportionnée sur écran large et colonnes coupées sur écran étroit.
- Les tests Node existants ne garantissent pas le rendu visuel MathJax, les interactions réelles et l'intégrité du texte pédagogique.

## Décision de conception

Une source canonique dans GitHub ; une branche par lot ; aucun ZIP incrémental pour les mises à jour courantes. Le projet local de l'utilisateur doit être consolidé et synchronisé après inventaire des différences, avant toute nouvelle migration. Ne pas mélanger le dépôt `watteau-nsi-lab` avec celui de `desumaths`.

## Lot de stabilisation S0 (préalable obligatoire)

1. Faire une sauvegarde datée complète du dossier local et conserver un commit/une archive de la dernière version approuvée.
2. Inventorier les fichiers locaux R10–R16, et distinguer les changements pédagogiques autorisés, les essais visuels refusés et les tests obsolètes.
3. Conserver les corrections historiques comme ressources protégées et stocker leurs empreintes.
4. Revenir à la disposition validée de R16 sur ordinateur, sans supprimer les démonstrations ; corriger le responsive uniquement après capture de référence.
5. Synchroniser la base consolidée sur une branche Git dédiée ; ne pas fusionner dans `main` avant recette.

## CI proposée

- Tests unitaires des générateurs, fractions, signes et réponses.
- Contrôles d'empreinte et de présence des gabarits pédagogiques historiques.
- Test navigateur réel (Playwright/Chromium) sur 375, 540, 768, 1280 et 1600 px ; attendre le rendu MathJax avant capture.
- Assert `document.documentElement.scrollWidth <= window.innerWidth` pour éviter le débordement global et vérifier que chaque formule demeure lisible/accessible.
- Captures comparées à des références humaines approuvées ; tolérances documentées.
- Prévisualisation de branche avant fusion ; publication après accord explicite.

## Déploiement et retour arrière

- Web : GitHub Actions sur branches testées, puis publication seulement après recette.
- Electron Windows/Linux : même code de rendu, packaging à contrôler séparément.
- Retour arrière via commit Git connu, sans écraser ni réécrire les fichiers historiques.
- iOS : recette Safari et navigateur pour la version Web, distincte de l'application native.

Aucun flux CI, aucune prévisualisation de branche et aucune publication ne sont créés automatiquement par ce document.
