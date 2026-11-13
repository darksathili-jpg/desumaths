# G1 — Contrat de recette du premier prototype Electron

**Statut : NON COMMENCÉ.** Aucun résultat de test n'est présumé.

## Périmètre minimal

- Application Windows lançable localement.
- Accueil issu de la charte du premier ZIP.
- Navigation accueil → Seconde → thème → un exercice pilote du second ZIP.
- Énoncé, génération des données, correction vérifiable et affichage des symboles mathématiques.
- Fonctionnement hors réseau après installation.
- Ressources chargées depuis le paquet applicatif.
- Installation et désinstallation contrôlées.

## Conditions de validation

| ID | Test | Preuve attendue |
|---|---|---|
| G1-01 | Démarrage | journal de lancement |
| G1-02 | Navigation complète | test bout en bout et captures |
| G1-03 | Exercice pilote | cas usuels et limites comparés à une référence indépendante |
| G1-04 | Hors ligne | exécution en réseau coupé et rapport |
| G1-05 | Sécurité | revue Electron et absence de privilèges Node côté interface |
| G1-06 | PDF / formules | contrôle visuel et impression (si retenue pour prototype) |
| G1-07 | Packaging Windows | artefact et installation testée |
| G1-08 | Régression | vérification du comportement pédagogique source |

## Gouvernance

Rôles : architecte, développeur, testeur indépendant, validation humaine. Toute anomalie bloquante entraîne le statut BLOQUÉ. G1 ne peut pas être déclaré validé par le seul développeur. Aucun déploiement automatique.
