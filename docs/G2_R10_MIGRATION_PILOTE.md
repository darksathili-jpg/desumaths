# Desumaths G2-R10 — pilote exercices et clarification LaTeX Web

Date : 10 novembre 2026. Statut **EN VÉRIFICATION**.

## Livraison

Deux archives dans la conversation :
- `desumaths-g2-r10-correctif.zip` : **10,9 Ko**, 8 fichiers modifiés et script PowerShell de copie avec sauvegarde. SHA-256 `8166ad9a5574436771a4e5f616c7494497c46ba964387a97dce8b4d24bfa0bba`.
- `desumaths-g2-r10-complet.zip` : archive de travail (plus grande, non nécessaire si la version G2-R9 est installée).

Le correctif transforme la page pilote `renderer/2nde/Equations/Equationsdegre1/Equationsdegre1.html` pour adopter les styles `StylesIndex.css` (papier quadrillé, rouge, encre, cartes, adaptation mobile), conserve les identifiants et le générateur historique, retire l'image extérieure et migre son chargement MathJax vers la version 3. Les fichiers graphiques de l'accueil et le moteur de menus sont inchangés.

## Web LaTeX

Le message de l'atelier explique clairement que **SwiftLaTeX Web est expérimental** et peut dépendre d'un miroir distant indisponible. TeX Live fonctionne dans Electron Windows, mais ne s'exécute pas sur GitHub Pages. Cette livraison **n'établit pas de compilation Web fiable**. Un service serveur isolé/sécurisé ou un miroir de packages vérifié sera nécessaire. Aucune API distante non auditée n'a été ajoutée.

## Contrôles locaux

- `npm run check` : **32/32** tests.
- `npm run build:web` : OK.
- `npm run check:web` : **4/4** tests.
- `npm run audit:web` : **617** références HTML statiques vérifiées, **0** manquante.
- Épreuve visuelle navigateur et test des calculs mathématiques sur un échantillon représentatif : **non réalisés**.
- Rendu mobile Safari, PDF Web réel, publication GitHub : **non validés**.

## Recommandation

Tester le correctif sur une copie locale G2-R9, recueillir une capture de l'exercice pilote et la comparaison avec la charte approuvée, puis importer le correctif sur `audit/g0-foundation` et valider un générateur à la fois. Pas de fusion automatique sur `main`.
