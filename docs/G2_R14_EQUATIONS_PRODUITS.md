# Desumaths G2-R14 — Équations produits

Date : 10 novembre 2026. Statut : **EN VÉRIFICATION (recette visuelle humaine attendue)**.

## Objectif

Migrer la page de Seconde « Équations produits » vers la charte Desumaths en préservant intégralement la rédaction et les transformations pédagogiques validées par les enseignants. Ne pas réécrire le gabarit de correction d'origine.

## Livraison

Correctif léger `desumaths-g2-r14-correctif.zip` (9 fichiers, 12 017 octets, SHA-256 `5faeeae30a0228576aec01eec3f103495f8c9b2d1305724ee2ee898f880dfcd9`) fourni dans la conversation, non encore importé dans le dépôt GitHub. Les fichiers modifiés sont la page HTML, le script avec ses événements sécurisés, une feuille CSS additive et les tests/inventaire associés. Aucune modification de l'accueil ni des trois autres exercices non migrés.

## Verrou pédagogique

Le bloc `correctiond.innerHTML` historique est conservé **strictement octet pour octet après décodage UTF-8**, SHA-256 `7d5c8d04d9dcc15f4cc4f3c0b3033a8ae124c5ed094f462b3ab983706f80a43e`. Il ne contient pas d'ajout inventé de couleurs ou de nouvelles étapes. Le reste du script améliore la récupération explicite des éléments DOM, l'affichage masqué/visible et le chargement MathJax 3.

## Preuves exécutées

- `npm run check` : **52/52** tests OK.
- Évaluation simulée de 1200 équations produits : deux racines vérifiées par substitution dans chaque facteur.
- `npm run build:web` et `npm run check:web` : OK, 4/4 tests Web.
- `npm run audit:web` : 625 chemins statiques vérifiés, 0 manquant.
- `node scripts/inventaire-g2-r13.cjs` : 5 pages conformes à la nouvelle référence ; 3 autres encore non migrées.
- Extraction archive ZIP : intégrité OK.

## Limites

Aucun test de rendu réel dans Chromium/Electron, pas de qualification de l'ergonomie tactile, ni vérification MathJax avec CDN actif dans l'environnement. La page doit être inspectée manuellement, notamment sur les équivalences de la correction historique. Pas de fusion sur `main` ni de publication Web déclenchée.
