# Desumaths — architecture cible proposée (non implémentée)

## Principes

- **Préserver** les archives originales par SHA-256 et une copie hors dépôt.
- **Réutiliser** l'interface du premier site et les exercices du second après revue.
- **Isoler** la logique mathématique et son contrôle de validité de la présentation.
- **Fonctionner hors ligne** après installation ; empaqueter polices, MathJax et moteurs compilateurs réellement requis.
- **Ne pas exécuter de contenu réseau non maîtrisé** dans Electron.

## Arborescence envisagée

```text
app/
  electron/
    main.js            # fenêtre, cycle de vie, impression via API contrôlée
    preload.js         # interface IPC minimale et explicite
  renderer/
    index.html         # interface modernisée
    styles/
    menus/
content/
  catalog.json         # identifiants stables des niveaux et exercices
  exercices/           # portage progressif du contenu
tests/
  unit/
  integration/
  e2e/
docs/
  AUDIT_G0.md
  ARCHITECTURE.md
  RECETTE_G1.md
```

Arborescence cible, aucun fichier d'application créé.

## Mesures de sécurité envisagées

- `contextIsolation: true`, `nodeIntegration: false`, `sandbox: true` si compatible avec le périmètre retenu.
- `preload` limité, pas d'accès système direct depuis le renderer.
- Contrôle des navigations et des ouvertures de fenêtres ; URL distantes autorisées uniquement si nécessaire et explicitement validées.
- Aucun `eval` dynamique des exercices lors de la migration.
- Contrôle de sécurité des versions Electron et des dépendances lors de G1.
- Sauvegardes dans le répertoire utilisateur approprié, jamais dans les fichiers packagés.

## Règle de migration

Un exercice n'est marqué **MIGRÉ ET VALIDÉ** qu'après identification de sa source, vérification des entrées et sorties, tests mathématiques indépendants et contrôle du rendu hors ligne. Une page qui s'affiche n'est pas une preuve de correction mathématique.
