# Desumaths G2-R12 — Restauration des corrections validées

Date : 10 novembre 2026. Statut : EN VÉRIFICATION (recette visuelle humaine nécessaire).

## Décision éditoriale impérative

La rédaction des corrections validée par les enseignants de mathématiques est **intangible sans validation explicite** : les méthodes « collège » et « lycée », les équivalences, les sous-accolades, les couleurs bleu/vert/rouge et l'ordre des étapes doivent être conservés. La refonte UI ne donne pas le droit de réécrire ces preuves.

## Correctif

Livrable conversation : `desumaths-g2-r12-preservation.zip` (8 fichiers ; SHA-256 `c1982736231c6b7fa2d9870ae75f4b3328f48858a104bfc33860056fa743f11c`). La correction historique est restaurée dans un module dédié `correction-historique.js`; le calcul des rationnels, la normalisation des signes et la comparaison des saisies restent fiabilisés. Le script d'installation crée une sauvegarde des fichiers remplacés.

## Contrôles exécutés sur la copie de travail

- 42/42 tests automatisés réussis.
- 10 000 équations générées avec contrôle de présence des deux méthodes.
- Test d'empreinte SHA-256 du bloc historique pédagogique : `35505a820bc04f315a1b4bed9ae69dd179ae599c66abe4f9b9ed89df79b0b571`.
- Export Web et tests Web réussis ; 619 références HTML statiques vérifiées, 0 non résolue.

## Limitations

- Recette humaine visuelle du rendu des deux corrections sous MathJax : non réalisée.
- Aucun import du code R12 dans GitHub, aucune fusion, aucune publication.

**Règle pour les migrations suivantes :** préserver d'abord les gabarits historiques, améliorer séparément la robustesse algorithmique et la présentation, puis vérifier leur non-régression indépendamment.
