# Desumaths G2-R9 — préproduction Web préparée

Date : 10 novembre 2026. **Statut : IMPORT GITHUB EN ATTENTE ; NON PUBLIÉ.**

## Archive de transfert
`desumaths-g2-r9-github-preproduction.zip` fournie dans la conversation.
SHA-256 `4bb0c43eda631baa8e247227625472060eba4f922658dd1bc3ee38a3cd859e57` ; 765 entrées ; ZIP intégralement lisible.

## Contrôles
- `npm run check` : 29/29 réussis.
- `npm run build:web` : réussi.
- `npm run check:web` : 4/4 réussis.
- `npm run audit:web` : 612 chemins HTML relatifs vérifiés, 0 introuvable (audit statique, sans liens dynamiques).
- Fichiers originaux `renderer/index.html`, `renderer/StylesIndex.css`, `renderer/Menus/StyleMenus.css`, `renderer/Menus/rendu-menu.js` et `renderer/script-index.js` identiques à la R8 octet pour octet.
- Workflow Pages : vérification, construction, contrôle, création de l'artefact et déploiement ; déclenchement manuel uniquement, sur branche contenant les sources.

## Import à faire depuis le PC

Le dépôt GitHub contient actuellement les rapports documentaires et le workflow, **pas le contenu intégral des deux sites**. L'archive R9 ajoute `scripts/stage-github.ps1` qui vérifie le dépôt distant exact, la branche `audit/g0-foundation` et la propreté de l'index avant de copier les sources. Il n'effectue **ni commit ni push** : vérification et validation humaines requises. Instructions dans `README_G2_R9.md`.

## Points bloquants à la publication

1. Audit de droits et de données sensibles des ressources historiques.
2. Import contrôlé des sources R9 et vérification du diff Git.
3. Vérification de l'éligibilité Pages du dépôt privé.
4. Déclenchement manuel, puis recette réelle du site publié, notamment formules, exercices et atelier LaTeX connecté.
5. Recette Safari iOS et Linux séparées, aucune validation implicite.

Aucune fusion sur `main`, aucune publication d'installateur et aucun site GitHub Pages créé par cette livraison.
