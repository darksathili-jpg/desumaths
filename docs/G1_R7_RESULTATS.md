# Desumaths — G1-R7, 10 novembre 2026

**Statut : EN VÉRIFICATION.** Archive de livraison `desumaths-g1-r7-texlive.zip` fournie dans la conversation (code non importé dans GitHub).

## Entrée humaine confirmée

L'utilisateur a confirmé la compilation réussie de l'exemple LaTeX historique sous Electron G1-R6 avec TeX Live 2024 Windows. Cela valide ce scénario G1-R6, pas encore G1-R7.

## Correctifs

- Pas de modification HTML/CSS de la charte approuvée.
- Verrou de compilation native : refus explicite si compilation déjà active ; libération garantie en `finally`.
- PDF précédemment produit masqué/révoqué au lancement d'une nouvelle compilation et après restauration de l'exemple.
- Messages distincts : binaire absent, dépassement de temps, source invalide et refus d'autorisation.

## Preuves automatisées

- `npm run check` : 25/25 tests OK sur Linux.
- Compilation effective d'un document mathématique TikZ / AMSMath, signature PDF validée.
- Une commande LaTeX volontairement inconnue produit bien `failed` et journal d'erreur.
- ZIP : 755 membres, `testzip()` OK, SHA-256 `051aa4b9c93b5ea6df3334b4ea61ad756778db49151ac4bdba1b98fc2498fbab`.

## Réserves

- Essai G1-R7 sous Windows/Electron non effectué.
- Exhaustivité et exactitude des exercices historiques non auditées.
- Tests de PDF avancés et d'impression Windows à poursuivre.
- Pas de fusion `main`, pas de publication d'installateur.
