# Desumaths G2-R9 — transfert contrôlé vers GitHub

**Statut : PREPRODUCTION NON PUBLIEE.** L'archive conserve `renderer/` ainsi que les moteurs et contenus R8. Les fichiers graphiques d'origine ne sont pas modifiés.

## Avant de publier

- Vérifier les droits de diffusion de tous les PDF, scripts et ressources historiques. Les documents ont été fournis dans les ZIP mais les droits n'ont pas été audités exhaustivement.
- Vérifier les éventuelles données personnelles, adresses ou références non destinées à un site public.
- Vérifier le plan GitHub : Pages sur un dépôt **privé** n'est pas accessible avec tous les plans GitHub. Une publication publique depuis un dépôt privé peut rendre son **site** publiquement accessible.

## Tester localement

```powershell
npm run check
npm run build:web
npm run check:web
python scripts/audit-web-links.py
npm run preview:web
```

## Import GitHub sans fusion ni publication

Dans PowerShell, ouvrir un dossier indépendant de `watteau-nsi-lab` :

```powershell
git clone https://github.com/darksathili-jpg/desumaths.git C:\Dev\desumaths-git
git -C C:\Dev\desumaths-git fetch origin
git -C C:\Dev\desumaths-git switch --track origin/audit/g0-foundation
```

Si la branche locale existe déjà, utiliser `git switch audit/g0-foundation`. Dans le **dossier de l'archive R9**, importer les fichiers sans toucher à `main` :

```powershell
.\scripts\stage-github.ps1 -Repo 'C:\Dev\desumaths-git'
git -C C:\Dev\desumaths-git diff --cached --stat
```

Après inspection et vérification des droits :

```powershell
git -C C:\Dev\desumaths-git commit -m "feat(web): import Desumaths G2-R9 sources"
git -C C:\Dev\desumaths-git push -u origin audit/g0-foundation
```

## Publication manuelle — à ne faire qu'après la recette

1. Vérifier la branche GitHub et l'absence de fichiers confidentiels.
2. Régler Settings > Pages > Build and deployment : Source = **GitHub Actions**.
3. Pour tester le site, ouvrir Actions > « Desumaths — préproduction web » > Run workflow, branche `audit/g0-foundation` (l'exécution d'un workflow manuel sur une branche non défaut peut dépendre de sa présence sur la branche par défaut ; si le bouton ne s'affiche pas, ne pas fusionner à l'aveugle).
4. Une fois le déploiement réussi, effectuer la recette à `https://darksathili-jpg.github.io/desumaths/`.

**Important :** si le workflow `workflow_dispatch` n'est pas reconnu parce qu'il n'existe pas encore sur `main`, la bonne solution est de préparer une PR de revue vers `main`, puis d'envisager la fusion après validation humaine. Aucune publication n'a été effectuée par ce paquet.

## Hors périmètre validé

iOS Safari, Linux Electron, impression et compilation SwiftLaTeX dans le navigateur restent à vérifier. L'application iOS n'est qu'une web app ; aucune compilation iOS native n'a été produite.
