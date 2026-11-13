# Desumaths — G2-R11 : exercice pilote de Seconde

Date : 10 novembre 2026. **Statut : EN VÉRIFICATION, sans fusion sur `main`.**

## Livraison

Archive légère `desumaths-g2-r11-correctif.zip` fournie dans la conversation ; SHA-256 `46791d3c1485c9969eaa34ef5c7ab7153a355d2ce1feda1d64b498f687eb9678` ; 9 entrées et 11 036 octets. Le code correctif n'a pas encore été importé dans GitHub.

## Exercice migré

`renderer/2nde/Equations/Equationsdegre1/Equationsdegre1.html` : la charte graphique de G2-R10 est conservée, avec un champ de réponse et des retours pédagogiques. `equation-core.js` réalise des comparaisons rationnelles exactes, réduit les fractions et empêche les pertes de signe. L'ancienne génération est remplacée pour ce seul exercice, afin de supprimer ses anomalies de normalisation. Deux méthodes de correction sont affichées en sections expansibles sans piège de défilement vertical. La saisie élève n'est pas interprétée comme HTML.

## Preuves

- `npm run check` : **37/37** tests réussis.
- **10 000** équations aléatoires, solutions exactes vérifiées.
- Tests de réponses fractionnaires équivalentes, négatives, invalides et décimales.
- `npm run build:web` : réussi.
- `npm run check:web` : **4/4**.
- `npm run audit:web` : **618** chemins statiques, **0** introuvable.
- Test automatisé Chromium : bloqué par `net::ERR_BLOCKED_BY_ADMINISTRATOR` pour localhost. **Aucune recette graphique réelle déclarée réussie**.

## Contrôles humains attendus

- Rendu de l'énoncé, consigne et bouton Vérifier.
- `7/9` et `14/18` reconnus équivalents pour un exercice correspondant.
- Mauvaise réponse : pas de divulgation automatique.
- Méthodes « collège » et « lycée » lisibles sur mobile et bureau.
- Navigation et fonction « Nouvel exercice ».

L'atelier LaTeX Web n'est pas corrigé par R11. Aucune publication GitHub Pages ni fusion automatique.
