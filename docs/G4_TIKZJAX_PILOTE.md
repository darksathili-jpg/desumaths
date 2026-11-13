# Desumaths G4 — laboratoire TikZJax (pilote isolé)

## Périmètre et sources

- Dépôt d'origine de l'utilisateur : https://github.com/darksathili-jpg/latex_tikz
- Révision strictement figée : `20412fc9324a80416063fa9c9d2924df60179baa`
- Moteur TikZJax : https://github.com/rod2ik/tikzjax (fork du projet TikZJax)
- Licence du moteur : **GNU GPL version 3** ; copie exacte dans `renderer/vendor/tikzjax/LICENSE-GPL-3.0.txt`
- Source originale distribuée par le dépôt `latex_tikz` ; si le composant est modifié, publier également les modifications et préserver les notices. Les licences des polices et paquets TeX doivent être inventoriées avant généralisation.
- Page pilote : `renderer/Laboratoire/FiguresTikZ/index.html`
- Accès Web : `https://darksathili-jpg.github.io/desumaths/Laboratoire/FiguresTikZ/index.html`

## Architecture et invariant

Le moteur **MathJax 3** reste destiné aux formules ; le moteur **TikZJax** transforme les blocs `script[type="text/tikz"]` en **SVG** ; l'atelier PDF existant et le pont Electron restent entièrement séparés.

La source du laboratoire est copiée de `renderer/` vers `dist/web/` par `npm run build:web`. Le job GitHub Actions G4 récupère le dépôt original par commit, copie `tikzjax.js`, `run-tex.js`, `core.dump.gz`, `tex.wasm.gz`, `fonts.css`, `fonts/`, `tex_files/` dans `dist/web/vendor/tikzjax/`, puis teste la page depuis un serveur HTTP. Aucune ressource WebAssembly TikZ ne dépend d'un miroir tiers à l'exécution.

Le HTML de l'accueil contient un lien de navigation. Aucune des corrections historiques des exercices, de leurs gabarits LaTeX ou de leurs scripts générateurs n'est modifiée.

## Expériences testées

1. `tkz-tab` — tableau de variations de `f(x)=x²−4`, avec minimum `−4` atteint en `0`.
2. `pgfplots` — représentation vectorielle de `y=x²−4`, avec intersections en `−2` et `2`.

La réussite exige deux vrais nœuds `svg.tikzjax`, avec dimensions non nulles, géométrie graphique, titre accessible, et plusieurs équations MathJax affichées. Des captures sont conservées en 375 et 1280 pixels.

## Compatibilité observée

Le dépôt source contient une distribution limitée du moteur et des paquets TeX. Le moteur peut sonder deux modules facultatifs absents de ce sous-ensemble (`tikzlibrarypgfplots.surfshading.code.tex.gz` et `pgflibrarypgfplots.surfshading.pgfsys-ximera.def.gz`). Seules ces deux requêtes optionnelles connues peuvent être ignorées, et **uniquement si les deux SVG ont été réellement produits** ; toute autre ressource essentielle manquante doit faire échouer la validation.

Le traitement de blocs `<script type="text/tikz">` est prévu pour le rendu de figures, pas pour compiler une source LaTeX générale en PDF. Le navigateur ne remplace donc pas TeX Live natif pour les documents historiques complexes.

## Recette et livraison

La chaîne G4 teste successivement les 90 tests applicatifs attendus, le build Web, les liens, la compilation PDF réelle dans Chrome, la réponse des exercices historiques, les 41 titres de menus à deux largeurs, puis les deux SVG TikZJax à 375 et 1280 pixels. **Publication uniquement après succès complet**. Les tests TeX Live natifs non exécutables sur le serveur Linux restent explicitement ignorés.

Utiliser la page publiée et les captures GitHub Actions pour la validation visuelle humaine avant extension aux véritables exercices de Seconde ou de Terminale.
