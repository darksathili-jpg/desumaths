# Desumaths — import G2-R9 et passage en préproduction

Date : 10 novembre 2026. **Sources du site encore à transférer ; aucune publication automatique.**

La propriété et l'autorisation de diffusion des PDF historiques sont confirmées par l'auteur. Les composants tiers, l'adresse de contact visible et les éventuelles données personnelles restent soumis à revue avant publication.

## Import depuis le poste Windows

Le fichier `import-desumaths-r9.ps1` livré séparément avec l'archive `desumaths-g2-r9-github-preproduction.zip` :

1. Vérifie le SHA-256 de l'archive R9 : `4bb0c43eda631baa8e247227625472060eba4f922658dd1bc3ee38a3cd859e57`.
2. Clone le dépôt indépendant `darksathili-jpg/desumaths` si nécessaire et confirme l'origine Git.
3. Bascule uniquement sur `audit/g0-foundation`, avec un répertoire propre.
4. Prépare l'import, exécute tests Node, export Web, tests Web et audit statique.
5. Affiche le diff préindexé sans commit par défaut.

Après vérification du diff, un commit/push sur `audit/g0-foundation` peut être fait explicitement. **Ne pas fusionner sur `main`.**

## Publication ultérieure

Workflow manuel sur `main`: `.github/workflows/desumaths-pages.yml`; saisie `PUBLIER` obligatoire, sources prises dans `audit/g0-foundation`, tests imposés. Vérifier les paramètres GitHub Pages et la compatibilité de publication depuis un dépôt privé avant déclenchement. L'adresse prévue est `https://darksathili-jpg.github.io/desumaths/`, non certifiée disponible.

## Étapes de validation distinctes

- Test réel du site Web public (menus, MathJax, exercices, PDF).
- Test iPhone et iPad Safari.
- Test Linux Electron / TeX Live.

**État du jalon : ATTENTE_IMPORT, pas EN LIGNE.**
