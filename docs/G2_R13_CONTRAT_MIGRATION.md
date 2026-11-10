# Desumaths G2-R13 — contrat pédagogique de migration

Date : 10 novembre 2026. **Statut : VALIDATION TECHNIQUE LOCALE ; RECETTE HUMAINE R13 RESTANTE.**

## Portée et engagements

- Aucun gabarit de correction, page HTML, fichier CSS ou moteur de génération n'a été modifié dans le lot R13.
- Restauration G2-R12 des méthodes « collège » et « lycée », couleurs et sous-accolades tenue comme référence obligatoire.
- Nouvelle suite de tests contractuels portant sur empreinte de la rédaction historique, couleurs, méthodes, branchement effectif dans l'interface, fractions négatives, décimaux et absence d'injection de saisie élève dans le HTML.
- Inventaire signé par SHA-256 des cinq pages du chapitre `2nde/Equations` : un pilote R12 et quatre pages historiques **non migrées** (différence de carrés, factorisation, équations produits, équations quotients).
- Le script d'audit compare aux empreintes du catalogue, signale toute mutation et interdit de considérer une ressource modifiée comme identique à la référence.

## Preuves dans l'environnement de test

- `npm run check`: **47/47**.
- `npm run build:web` et `npm run check:web`: **OK**, **4/4** pour l'export.
- `npm run audit:web`: **619** références statiques et 0 absente.
- Inventaire vérifié : **5 pages dont 4 non migrées**.
- Test par mutation : modification volontaire de `Equationsproduits.html` détectée (code de sortie non nul), puis fichier restauré et vérification réussie.

## Livraison

- Petit correctif `desumaths-g2-r13-preservation.zip` ; 5 fichiers et SHA-256 `200b9e36e7be99301aa72a068846a211db7df2fd9d6fd0bcd0481a10e043b070`.
- Il ajoute uniquement `tests/g2-r13-contract.test.cjs`, `scripts/inventaire-g2-r13.cjs`, `docs/G2_R13_INVENTAIRE.json`, `appliquer-r13.ps1` et `README_G2_R13.md`.
- Le code du ZIP n'est pas encore importé dans GitHub ; cette documentation seule est enregistrée.

## Décision

Les quatre autres exercices restent en **ATTENTE DE MIGRATION** et n'ont pas de validation de leur exactitude mathématique. Tout changement pédagogique est soumis à validation de l'auteur. Aucune fusion sur `main`, aucun déploiement ni qualification iOS/Linux.
