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

## Recette automatisée ajoutée

Le workflow `.github/workflows/g4-1-seconde.yml` est déclenché par un push sur la branche `feature/g4-1-seconde-figures`. Il reprend les tests, le build Web, la vérification des liens, les dépendances TeX figées et les recettes Chromium de G4, puis lance `scripts/visual-check-g4-1-seconde.cjs`.

Le nouveau contrôle ouvre réellement le menu Seconde, compte les thèmes historiques, clique sur les deux liens, attend la production de figures SVG non vides et enregistre des captures et métriques à 375 px et 1280 px. En cas d'échec, un fichier JSON et une capture de diagnostic sont produits, dans la mesure où Chrome reste disponible.

**Sécurité de diffusion :** ce workflow n'a pas de job de publication GitHub Pages et n'a pas l'autorisation `pages: write`. Il ne prouve donc pas la disponibilité publique de cette branche. Les captures et rapports sont à consulter dans les artefacts de l'exécution GitHub Actions avant validation humaine.

## Commandes de recette locale

```bash
npm run check
npm run build:web
npm run check:web
npm run audit:web
# Les runtimes TeX et TikZ doivent d'abord être installés dans dist/web.
# Après installation et démarrage du serveur sur le port 8765 :
node scripts/visual-check-g4-tikz.cjs
node scripts/visual-check-g4-1-seconde.cjs
```

État : workflow et script committés ; aucune réussite d'exécution distante ou visuelle n'est déclarée à ce stade.

## Durcissement de la recette

- Le workflow enregistre `artifacts/g4-1-seconde/revision.txt` avec le commit exact (`GITHUB_SHA`) et refuse une divergence entre ce SHA et la copie de travail.
- Le navigateur ouvre aussi le thème historique **Fonctions** depuis le menu Seconde, puis vérifie le titre obtenu avant de tester les deux raccourcis TikZ.
- Le test statique vérifie la présence de ces deux nouveaux garde-fous.

**Réserve de preuve :** la lecture des statuts du dernier commit via le connecteur ne renvoyait aucun statut ni exécution de demande de fusion. Cela ne prouve ni succès ni absence de workflow push ; consulter les runs Actions et les artefacts avant toute conclusion. Le dépôt ne pouvait pas être cloné depuis l'environnement de contrôle (résolution DNS indisponible). Aucune exécution locale des tests n'est revendiquée.

## Correction du suivi des preuves (G4.1-R2)

Le fichier `revision.txt` utilise désormais les sauts de ligne effectifs de `printf` : chaque champ (`commit`, `branch`, `workflow`) est sur sa propre ligne. Le job écrit aussi son état dans le résumé natif GitHub Actions (`GITHUB_STEP_SUMMARY`). Un test statique protège ces deux dispositifs contre une régression.

L'exécution réelle du workflow, les rapports de Chrome et les captures de figures ne sont pas confirmés depuis cette session. Aucun feu vert de publication n'en découle.

## G4.1-R3 — paquet de prévisualisation téléchargeable

Après réussite de toutes les étapes du job (tests mathématiques, build, navigation historique, compilation PDF et figures TikZ réelles en navigateur), la chaîne doit publier un **artefact GitHub Actions**, `desumaths-g4-1-site-preview`. Il contient le dossier `dist/web` complet avec les moteurs LaTeX et TikZ embarqués ainsi que `g4-1-build.json`, qui identifie la branche et le commit testés.

Pour le consulter, ouvrir l'exécution réussie du workflow **Desumaths G4.1 - recette Seconde et figures TikZ** dans Actions, télécharger `desumaths-g4-1-site-preview`, extraire l'archive et démarrer un serveur HTTP depuis le dossier extrait (`python -m http.server 8765`). Ouvrir ensuite `http://localhost:8765/Menus/MenuSeconde.html`. Le serveur HTTP est nécessaire aux moteurs WebAssembly ; l'ouverture directe en `file://` n'est pas une preuve de fonctionnement.

Le paquet n'est pas mis en ligne sur GitHub Pages et n'affecte pas la version publique. **S'il manque, considérer la prévisualisation comme non validée** et examiner d'abord le rapport `desumaths-g4-1-seconde-preuves`.

La recette contrôle également les chemins exportés par `scripts/check-g4-1-web.cjs`, y compris les deux ancres et le thème Fonctions historique. Ne pas assimiler la création du workflow à sa réussite.

## G4.1-R4 — publication conditionnelle sur le site officiel

Après autorisation humaine, le workflow `.github/workflows/g4-1-seconde.yml` comporte maintenant un job `deploy` qui n'est exécuté **que si le job complet `build` réussit**. L'artefact GitHub Pages contient la copie complète de `dist/web`, y compris les pages existantes et les moteurs LaTeX et TikZ récupérés à leurs révisions figées. La publication cible l'environnement `github-pages`.

L'étape finale de déploiement vérifie sur l'URL fournie par GitHub Pages que `g4-1-build.json` contient exactement le commit testé (`GITHUB_SHA`). Cette vérification peut échouer même après un transfert Pages réussi : en pareil cas, ne pas déclarer la version visible avant vérification réelle.

**Accès attendus après succès complet :**
- Accueil : https://darksathili-jpg.github.io/desumaths/
- Parcours Seconde : https://darksathili-jpg.github.io/desumaths/Menus/MenuSeconde.html
- Figures : https://darksathili-jpg.github.io/desumaths/Laboratoire/FiguresTikZ/index.html

**Attention :** la présence du commit sur GitHub n'établit pas que l'exécution GitHub Actions a réussi. Le workflow G4.1 doit afficher un succès du job `deploy`, et la ressource publique `g4-1-build.json` doit correspondre à la révision courante. Un workflow plus ancien de publication GitHub Pages peut ultérieurement remplacer le site : ne pas confondre la branche de dépôt avec la version actuellement servie.

## G4.1-R5 — audit de la capture réelle

La capture transmise montre bien les cartes des thèmes, mais la section « Laboratoire graphique » reste visuellement non stylisée (absence de panneau et de boutons distincts). Le dépôt contient pourtant les règles `.g41-figures` et `.g41-links a` dans `StyleMenus.css` : un décalage de cache entre HTML et CSS est une explication plausible, non une preuve définitive.

Correction préventive : la page Seconde référence `StyleMenus.css?v=g41-r5` pour forcer une nouvelle URL de feuille de style. La recette Chrome vérifie désormais les styles **calculés** de la section et des boutons à 375 et 1280 pixels, et échoue si le panneau est non stylisé, indépendamment de la présence des sélecteurs dans les sources.

Critère de validation humaine : panneau clair distinct avec bordure latérale rouge, titre lisible et deux boutons espacés, contrastés, faciles à utiliser. Vérifier aussi la navigation vers les deux figures réelles et les anciennes pages de fonctions.

Aucune recette distante réussie ni mise en ligne du correctif R5 n'est confirmée par cet enregistrement seul.

## G4.1-R6 — correction du faux échec des boutons

Le journal Chromium transmis pour le commit `f1cff3a` confirme le succès du compilateur PDF, des tests R16, de la navigation G3.3, des contrôles G3.4 et des 82 affichages des menus G3.5, ainsi que des deux SVG TikZ réels à deux largeurs. L'échec restant était l'assertion trop stricte `display === 'inline-flex'` alors que Chrome renvoyait `display: flex`.

Le test accepte désormais `flex` **ou** `inline-flex`, deux dispositions adaptées aux boutons. Les autres conditions de recette (CSS versionné, bordure, fond non transparent, hauteur, navigation, figures SVG et absence de débordement) restent obligatoires.

Ce correctif ne modifie ni les fichiers d'exercices ni les règles CSS visibles. Son effet sur le prochain workflow et la disponibilité publique n'est pas encore vérifié.

## G4.1-R7 — navigation pédagogique clarifiée

À la suite du retour de recette, les deux boutons du menu Seconde n'ouvrent plus la même page avec deux ancres. Ils pointent vers **deux documents différents** :

- `Laboratoire/FiguresTikZ/variations.html` : uniquement le tableau de variations, son contexte, son code LaTeX et un accès à la parabole ;
- `Laboratoire/FiguresTikZ/parabole.html` : uniquement la représentation graphique, son contexte, son code LaTeX et un accès au tableau.

La page `Laboratoire/FiguresTikZ/index.html` reste le laboratoire comparatif avec ses deux figures. Les deux nouvelles pages conservent l'accès au menu Seconde, au laboratoire complet et à l'autre figure. Le moteur partagé `figures-tikz.js` sait maintenant annoncer le succès pour une ou deux figures, sans affirmer que deux figures ont été produites lorsqu'une seule est attendue.

Le contrôle du site exporté vérifie les deux destinations réelles. La recette Chrome clique chacun des deux boutons et exige que **la page cible ne contienne qu'un seul exercice graphique** et que son SVG soit réellement rendu, à 375 et 1280 pixels.

Les générateurs et les corrections historiques sont inchangés. La réussite de cette nouvelle recette et la mise en ligne R7 restent à confirmer dans GitHub Actions.

## G4.1-R8 — consolidation pédagogique des destinations distinctes

La page `variations.html` propose désormais une observation du sens de variation et du minimum de `f(x)=x²−4`. La page `parabole.html` interroge sur les deux intersections avec l'axe des abscisses et la position du sommet. Chaque page garde une seule figure TikZ et présente sa propre réponse dans un élément HTML `details`, initialement fermé et accessible au clavier.

Les tests statiques vérifient que les questions sont distinctes et mathématiquement cohérentes. Le scénario Chrome confirme que l'élève peut révéler volontairement la réponse. Les pages historiques, les modèles d'exercice et le laboratoire comparatif à deux figures restent inchangés.

**État de preuve :** modifications enregistrées dans la branche ; réussite GitHub Actions de R8 et publication publique non encore constatées.
