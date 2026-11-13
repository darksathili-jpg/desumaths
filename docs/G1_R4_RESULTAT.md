# Desumaths G1-R4 — Atelier LaTeX

Date : 9 novembre 2026. **Statut : EN VÉRIFICATION**.

La version corrective G1-R4 est livrée sous forme d'une archive de conversation `desumaths-g1-r4-latex.zip` (10,46 Mo, 746 fichiers). Le code de cette archive n'est **pas** importé dans le dépôt GitHub à ce stade.

## Changements

- Accueil, CSS et moteur de menus originaux préservés.
- Atelier LaTeX avec zone d'édition, bouton de compilation, journal d'erreurs, prévisualisation PDF et lien de téléchargement.
- La source initiale `latex.js` est conservée.
- Les messages du moteur sont rendus par `textContent`, sans interprétation HTML.
- URL `blob:` conservée jusqu'à compilation suivante ou fermeture, au lieu d'être révoquée arbitrairement après 30 secondes.
- Moteur SwiftLaTeX, WebAssembly et téléchargement des ressources TeX distantes conservés.

## Preuves automatisées

- `npm run check` : 15/15 tests Node réussis, incluant 4 tests structurels supplémentaires pour l'atelier.
- `node --check renderer/Serveur Latex/compilateur.js` : réussi.
- Analyse statique : 611 références locales en HTML vérifiées, 0 chemin non résolu par ce contrôle (n'inclut pas les URL construites dynamiquement).
- Intégrité ZIP : vérifiée et noms de fichiers contrôlés pour Windows.

## Non validé

- Lancement réel dans Electron sur Windows.
- Compilation effective d'un PDF à partir du moteur WebAssembly et de ses ressources externes.
- Impression, téléchargement réel et rendu graphique.
- Migration complète et exactitude mathématique de tous les exercices.

Prochain critère de recette : vérifier dans Electron l'ouverture de l'Atelier LaTeX, la compilation d'un document minimal, l'affichage du PDF, puis une erreur LaTeX volontaire suivie d'une correction. Aucune fusion sur `main`.
