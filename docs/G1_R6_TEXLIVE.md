# Desumaths G1-R6 — TeX Live natif

## Préconditions confirmées par l'utilisateur

- `C:\texlive\2024\bin\windows\pdflatex.exe` répond correctement à `--version` (TeX Live 2024).
- `kpsewhich` retrouve `book.cls`, `tikz.sty`, `tkz-tab.sty`, `pstricks.sty`.

## Réalisation

Archive de conversation `desumaths-g1-r6-texlive.zip` (code non encore intégré au dépôt) : pont Electron `preload.cjs`, canal IPC spécifique à l'atelier, moteur natif `texlive.cjs`, affichage PDF via l'atelier et repli SwiftLaTeX hors Electron. Identité graphique de R5 conservée.

## Tests exécutés

- `npm run check` : **21/21** réussis sur environnement Linux.
- Compilation avec `/usr/bin/pdflatex` d'un document `article` minimal : PDF valide produit.
- Contrôle de refus de source trop volumineuse, binaire introuvable et paramètres du processus de compilation : réussis.
- Essai réel sous Electron/Windows : **non réalisé**.
- Atelier historique complexe, PSTricks/DVI/XeLaTeX et installation Windows : **non validés**.

## Mesures de réduction de risque

Invocation sans shell, `-no-shell-escape`, dossier temporaire, limite de taille d'entrée, délai, isolation du renderer et contrôle de l'URL de l'émetteur IPC. Ces mesures ne constituent pas un bac à sable complet pour du TeX malveillant ; ne compiler que des fichiers de confiance.

Statut : **EN VÉRIFICATION**. Aucune fusion sur main, aucune distribution d'installateur.
