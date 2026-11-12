# Desumaths — G4.1 : passerelle graphique Seconde

## Objectif

Introduire les figures mathématiques sans remplacer les exercices historiques ni leurs corrections.

## Livraison technique

- Le menu `renderer/Menus/MenuSeconde.html` propose une activité facultative.
- Les liens pointent vers les ancres `#variations` et `#courbe` du laboratoire TikZ G4.
- `renderer/Menus/StyleMenus.css` fournit une disposition responsive et des liens accessibles au clavier.
- `tests/g4-1-seconde-figures.test.cjs` contrôle les chemins, les ancres, les liens historiques et les propriétés de style.

## Périmètre préservé

Aucun générateur d'exercices, fichier de correction ou modèle LaTeX historique modifié dans G4.1.

## Tests et validation

Les sources et la liste de fichiers changés ont été vérifiées via GitHub.
Le résultat des commandes `npm run check`, `npm run build:web`, `npm run audit:web` et des tests réels Playwright **n'est pas établi dans cette livraison**. Ne pas considérer la branche comme validée pour publication avant exécution et conservation des preuves.

## Prochaine recette

1. Vérifier que le site de prévisualisation sert effectivement cette branche et non une autre.
2. Contrôler les deux ancres depuis le menu Seconde, avec navigation clavier et affichage à 375 et 1280 pixels.
3. Vérifier la présence de deux vrais SVG TikZ et la lisibilité des formules MathJax.
4. Exécuter les tests de non-régression des exercices historiques.
5. Demander validation visuelle humaine avant fusion ou publication de référence.
