# Desumaths G2-R16 — Équations avec facteur commun

Date : 11 novembre 2026. **Statut : EN VÉRIFICATION VISUELLE, aucune publication.**

## Objectif et périmètre

Migration uniquement de l'exercice `2nde/Equations/Equations avec factorisation` vers la charte Desumaths. La correction complète du site historique (factorisation, sous-accolades, phrase expliquant les signes, résolution en deux branches) est recopiée **à l'identique**. Empreinte SHA-256 du gabarit source de la correction : `ad7ef227bc49271b63c31657df324c47e3f2df6645ab8110d93a2210b1cb1e63`.

Le générateur historique demeure inchangé. Les nouveaux scripts rendent le bouton solutions et le bouton correction indépendants du succès du chargement MathJax ; les panneaux restent accessibles et masquables. L'énoncé est séparé de la formule ; la correction occupe toute la largeur sous l'énoncé et la solution, sans réduire la démonstration.

## Livraison

- Correctif ZIP `desumaths-g2-r16-facteur-commun.zip` : 6 fichiers, 8 337 octets, SHA-256 `368591fab4ea6f4d593932dab60a3d6f84dff1230d2925c89d634c2d75011d17`.
- Installation par `appliquer-r16.ps1` : vérification de l'empreinte des fichiers historiques, sauvegarde et restauration sur échec, tests du projet puis reconstruction du Web.
- Ce correctif n'a **pas** été poussé dans GitHub ; seul le rapport l'est.

## Preuves d'intégration (copie de la base G2-R10 plus correctif R16)

- `npm run check` : **36/36** tests réussis, dont 4 nouveaux.
- **5 000** simulations du générateur vérifiant les deux racines et les diviseurs non nuls.
- Boutons solutions / correction : affichage, masquage, attribut ARIA, MathJax facultatif.
- `npm run build:web` : réussite.
- `npm run check:web` : **4/4**.
- `npm run audit:web` : **623** chemins statiques examinés, **0** introuvable.
- Archive ZIP : intégrité réussie.

**Réserves** : ce compte de 36 tests concerne la copie d'intégration G2-R10, pas le cumul complet R15 qui existe sur la machine Windows. Pas de test visuel Windows, Safari ni Electron; pas de vérification complète du rendu par MathJax dans un navigateur. Les erreurs antérieures de R15-R3 sur des tests obsolètes doivent être résolues localement avant la validation de R16. Aucun exercice supplémentaire n'a été migré.
