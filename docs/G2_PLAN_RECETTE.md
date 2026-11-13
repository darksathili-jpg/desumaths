# Desumaths — G2 / recette par plateforme

## Préconditions
Source intégrale dans le dépôt, dépendances auditées, vérification des droits et données sensibles.

## Web
1. `npm run build:web` et `npm run check:web`.
2. Démarrer un serveur HTTP local (ne pas utiliser `file://`) et ouvrir l'accueil, deux menus et deux exercices.
3. Contrôler MathJax sur les libellés des suites, liens internes et absence d'erreurs console.
4. Vérifier l'atelier SwiftLaTeX connecté à Internet, produire un PDF test, noter les limites des extensions historiques.
5. Déployer sur GitHub Pages **après validation humaine** ; revérifier les chemins sous `/desumaths/`.

## Linux
1. Installer Electron et TeX Live approprié à la distribution.
2. Exécuter tests, accueil, exercice et atelier native.
3. Compiler un cas simple puis un document mathématique historique.
4. Préparer les formats .deb / AppImage seulement après la recette.

## iOS
1. Safari iPhone et iPad : accueil, menus, défilement, lisibilité et boutons tactiles.
2. Tester MathJax et au moins trois exercices sur écran réduit.
3. Installer la web app depuis Safari et vérifier navigation/retour.
4. Tester la compilation SwiftLaTeX ; noter les fonctions non disponibles.
5. Aucune qualification « application iOS native » tant qu'un conteneur natif n'a pas été livré.

## Pédagogie G2
Pour chaque exercice : source identifiée, étude des valeurs générées, comparaison indépendante des solutions, cas limites, vérification de la correction mathématique, tests de régression et procès-verbal de validation.

**État actuel : tests structurels OK, recettes Web/iOS/Linux NON RÉALISÉES.**
