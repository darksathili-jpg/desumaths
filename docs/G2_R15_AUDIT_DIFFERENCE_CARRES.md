# Desumaths G2-R15 — Audit conservatoire : différence de deux carrés

Date : 10 novembre 2026. **Migration de l'exercice BLOQUÉE en attente de correction algorithmique et décision pédagogique.**

Le lot R15 ne transforme **aucun** fichier HTML, CSS, JavaScript d'exercice ni aucune correction. Le but est de protéger la rédaction historique et de caractériser des anomalies avant migration.

## Observations reproductibles

- Source historique : `renderer/2nde/Equations/Difference de carres/ScriptDifferencedecarre.js`, empreinte SHA-256 `af195a463522ad6a2767bfc09334ba73f0d61e6b5821d7f2423359f7735eed17`.
- `a` est entier non nul entre -10 et 10, `c=a+k` avec `k` entier non nul entre -10 et 10. Le coefficient `a+c=2a+k` peut être nul : **10 couples sur 400**, dans l'espace équiprobable des coefficients, soit **2,5 %** des couples `(a,k)` possibles. La correction tente alors une division par zéro.
- La consigne HTML générée dit `Factoriser l'expression`, alors que la suite de la correction résout une équation et fournit un ensemble de solutions. **Discordance pédagogique à arbitrer par l'auteur, sans réécriture unilatérale.**
- Les blocs pédagogiques, les tableaux LaTeX et les sous-accolades sont laissés inchangés.

## Preuves

- Copie locale G2-R14-R3 : **60/60 tests** Node après ajout de quatre tests d'audit.
- Test de conformité SHA-256 des trois fichiers historiques et test des cas `a+c=0`.
- Correctif autonome `desumaths-g2-r15-audit-correctif.zip` SHA-256 `d3b9d06d2cda69937f3b431d3f82321b79b2eb4f55c5dbeaa68e69dd2bee0ddc` : trois fichiers, uniquement tests et script d'installation.
- **Pas de recette graphique G2-R15, pas de nouveau rendu pédagogique.**

## Décision avant développement

Fiabiliser le générateur en excluant les coefficients conduisant à une division par zéro et corriger les signes des fractions après validation d'un contrat de non-régression. Préserver les gabarits LaTeX de correction. Demander l'approbation de la formulation de la consigne si elle doit être corrigée. Aucun commit de code R15 ni fusion dans `main` et aucune publication.
