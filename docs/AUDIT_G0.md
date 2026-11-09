# G0 — Audit initial des sources

Date : 2026-11-09. **Statut : EN VERIFICATION**, et non validé.

## Entrées et traçabilité

| Source | SHA-256 | Entrées ZIP | Fichiers utiles |
|---|---|---:|---:|
| `desumaths.zip` | `8b97c887f49cf4e6db95ba8977929f7445b92060ff96391647d6dc12a565b59f` | 12 | 10 |
| `Désusite.zip` | `225fe371222240d3e6a05ac78897433df754f2ef5a8f5d90a19e5badc794538a` | 1725 | 689 |

Fichiers utiles = entrées ordinaires hors dossiers, `__MACOSX/` et fichiers `.DS_Store`. Aucune extraction exécutable ni compilation n'a été réalisée.

## Première source : interface

- 3 HTML, 4 JavaScript, 2 CSS et 1 fichier de configuration.
- `Menus/rendu-menu.js` : rendu de menus à partir de données.
- `Menus/menu-seconde-data.js` et `menu-seconde-inequations-data.js` : données de navigation.
- `index.html`, `StylesIndex.css`, `script-index.js` : accueil et démonstration visuelle.
- Des ressources demandent des services externes (notamment Google Fonts).
- Aucune preuve de navigation exhaustive ni d'accessibilité.

## Deuxième source : site historique

- 212 HTML, 188 JavaScript, 168 CSS, 113 PDF, 6 WASM, 1 PNG et 1 JSON.
- Ensemble de niveaux et répertoires : `2nde`, `1ST`, `1Spe`, `TST`, `Tale Spe`, `Menus`, `Serveur Latex`.
- Accueil référençant MathJax 2.7.1 par CDN.
- Moteurs SwiftLaTeX / PdfTeX et WebAssembly présents ; bon fonctionnement hors ligne **non testé**.
- Nombreuses URL externes ; les 900 occurrences de `http://` ou `https://` trouvées dans HTML/CSS/JS sont un comptage brut de chaînes, **pas** un nombre de dépendances bloquantes.
- Nom de dossier ancien avec encodage atypique dans l'archive : vérifier Unicode, accents et casse pendant l'extraction et sous Windows.

## Risques / blocages ouverts

1. Audit des droits et licences des ressources avant tout import public.
2. Audit de secrets et données personnelles avant tout commit des sources anciennes.
3. Recensement des liens locaux et des ressources en réseau.
4. Comparaison visuelle écran par écran entre version ancienne et nouvelle.
5. Tests d'exercices : énoncé, génération, correction, domaines des valeurs, cas limites et exactitude mathématique.
6. Compatibilité Electron : navigation sécurisée, intégration de MathJax et LaTeX en local, CSP, chemins des ressources empaquetées.
7. Vérification du fonctionnement sans réseau, PDF, impression et reprise utilisateur.
8. Licence d'Electron et dépendances ; distribution Windows à confirmer.

## Verdict

**G0 non clôturé : ATTENTE_HUMAINE pour importer les sources et EN VERIFICATION sur les critères de migration.** Aucun test applicatif, aucune compilation Electron, aucun installeur produit à ce stade.
