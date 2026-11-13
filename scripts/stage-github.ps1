# Ne commit/push rien : prépare seulement l'import sur audit/g0-foundation.
param([Parameter(Mandatory=$true)][string]$Repo)
$ErrorActionPreference = 'Stop'
$project = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
if (!(Test-Path -LiteralPath (Join-Path $Repo '.git'))) { throw "Dossier cible non Git : $Repo" }
$dest = (Resolve-Path -LiteralPath $Repo).Path
$remote = (& git -C $dest remote get-url origin 2>$null)
if ($LASTEXITCODE -ne 0 -or $remote -notmatch '(^|[:/])darksathili-jpg/desumaths(\.git)?$') {
    throw "Dépôt distant non conforme : $remote"
}
$branch = (& git -C $dest branch --show-current).Trim()
if ($branch -ne 'audit/g0-foundation') { throw "Branche courante : '$branch' ; attendue : audit/g0-foundation" }
$status = (& git -C $dest status --porcelain)
if ($status) { throw 'Dépôt cible non propre : sauvegarder les changements avant import.' }
# Aucun effacement : les fichiers existants non listés sont préservés.
$dirs = @('renderer','electron','scripts','tests','web','.github')
foreach ($name in $dirs) {
    $from = Join-Path $project $name
    $to = Join-Path $dest $name
    if (!(Test-Path -LiteralPath $from)) { throw "Source absente : $from" }
    New-Item -ItemType Directory -Force -Path $to | Out-Null
    Get-ChildItem -LiteralPath $from -Force | Copy-Item -Destination $to -Recurse -Force
}
Copy-Item -LiteralPath (Join-Path $project 'package.json') -Destination (Join-Path $dest 'package.json') -Force
Copy-Item -LiteralPath (Join-Path $project 'README_G2_R9.md') -Destination (Join-Path $dest 'README_G2_R9.md') -Force
& git -C $dest add -- renderer electron scripts tests web .github package.json README_G2_R9.md
if ($LASTEXITCODE -ne 0) { throw 'Echec git add.' }
Write-Host 'Préparation Git terminée : AUCUN commit ni push effectué.' -ForegroundColor Green
& git -C $dest status --short
