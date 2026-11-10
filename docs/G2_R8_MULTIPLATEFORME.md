# Desumaths G2-R8 — Architecture multiplateforme

Date : 10 novembre 2026. Statut **EN VÉRIFICATION**.

## Décisions
- Web : export statique du répertoire `renderer/`, déploiement GitHub Pages soumis à recette et déclenchement manuel.
- Windows et Linux : application Electron à partir du même `renderer/`, TeX Live via `pdflatex` natif. Distribution Linux non encore testée.
- iOS : application web dans Safari, installable sur l'écran d'accueil. Ce n'est pas un binaire iOS/App Store ; compilation LaTeX native TeX Live impossible dans le navigateur.
- Charte graphique approuvée : **verrouillée**, aucune réécriture de l'accueil ou des feuilles CSS du R7.

## Artefact de référence
Archive `desumaths-g2-r8-web-linux-ios.zip` livrée dans la conversation (non synchronisée automatiquement avec GitHub).
SHA-256 `e2b137ee6240d6da74290d398ebb8b8b223767d604f1661e642e3526fe1c3bd5`.
761 fichiers. Intégrité ZIP : OK.

## Code ajouté dans le livrable
- `scripts/build-web.cjs` : copie `renderer/` dans `dist/web/`.
- `tests/web-build.test.cjs` : quatre tests de structure et de fidélité de l'export.
- `web/manifest.webmanifest` : métadonnées de web app.
- `.github/workflows/web-preview.yml` : déploiement Pages manuel, à utiliser après import des sources.
- `docs/G2_INVENTAIRE_INITIAL.json` : comptage exploratoire des fichiers.
- `README_G2_R8.md` : tests et recette par plateforme.

## Preuves locales
- `npm run build:web` : succès.
- `npm run check:web` : 4/4.
- `npm run check` : 29/29.
- Fichiers CSS et JS du moteur de menus inchangés lors de l'export.
- Aucun code Electron privilégié inclus dans `dist/web/`.

## Garde-fous et limites
- Le dépôt GitHub ne contient pas encore les sources de G1-R7/G2-R8 : une publication Pages n'est pas possible depuis son état actuel.
- Les dépôts GitHub privés et leur éligibilité à GitHub Pages sont soumis à des conditions de plan et de configuration.
- La compilation dans le navigateur reste assurée par SwiftLaTeX et ses ressources distantes ; non testée sur iOS.
- Sur Linux : Electron et pdflatex doivent être testés sur la distribution réelle.
- Les exercices historiques et leur exactitude mathématique restent à auditer un par un.
- Aucune fusion, aucun déploiement et aucun installateur produits sur GitHub.
