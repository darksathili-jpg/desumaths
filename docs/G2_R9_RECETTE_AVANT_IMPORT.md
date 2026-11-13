# Desumaths R9 — contre-vérification avant import (10 novembre 2026)

**Statut : sources encore absentes de GitHub ; déploiement NON lancé.**

Dans un environnement propre, l'archive de référence `desumaths-g2-r9-github-preproduction.zip` a été extraite puis contrôlée :

| Commande | Résultat |
|---|---|
| `npm run check` | 29/29 tests réussis |
| `npm run build:web` | OK |
| `npm run check:web` | 4/4 tests réussis |
| `npm run audit:web` | 612 références HTML vérifiées, 0 manquante (audit statique) |
| Inventaire `dist/web` | 739 fichiers |

**Limites** : pas de recette navigateur visuelle, ni iOS, ni Linux ; tests Web sur les dépendances distantes non exécutés.

**Droits des PDF — autorisation confirmée par l'auteur le 10 novembre 2026** : l'utilisateur déclare être l'auteur des 113 PDF historiques, constitués de ses propres exercices, et autorise leur diffusion dans Desumaths. Cela lève la réserve spécifique sur ces PDF ; ne présume pas des droits de composants tiers. Le paquet comprend également une adresse de contact `entrainmaths@free.fr` affichée dans `renderer/index.html`. L'adresse affichée et les composants tiers restent à vérifier avant publication. Le scan rudimentaire des secrets ne remplace pas une revue des contenus et licences.

**Garde-fou Git** : branche `audit/g0-foundation` uniquement ; vérifier le dépôt cible, le diff, et conserver `main` stable. Le workflow `main/.github/workflows/desumaths-pages.yml` exige une saisie explicite de `PUBLIER` avant tout déploiement. Ne pas le déclencher avant inspection de la branche source et configuration de GitHub Pages.

**Blocage restant** : le dépôt connecté ne contient pas les 739 fichiers exportés. L'import depuis le poste détenteur du ZIP doit être effectué avec le script `scripts/stage-github.ps1` puis commit/push après revue.
