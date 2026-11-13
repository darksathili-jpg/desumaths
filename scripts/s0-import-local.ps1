# Desumaths S0 — importer l'etat local SANS publier
# Usage : powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\s0-import-local.ps1 -Source "C:\...\desumaths-g2-r9" -Repo "C:\Dev\desumaths-git"
param(
  [Parameter(Mandatory=$true)][string]$Source,
  [string]$Repo = "C:\Dev\desumaths-git"
)
$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest
$branch = "stabilisation/s0-local"
$remote = "https://github.com/darksathili-jpg/desumaths.git"
function RunGit([string[]]$GitArgs) {
  & git -C $Repo @GitArgs
  if ($LASTEXITCODE -ne 0) { throw ("Git a echoue : " + ($GitArgs -join ' ')) }
}
$sourcePath = (Resolve-Path -LiteralPath $Source).Path.TrimEnd('\')
if (-not (Test-Path -LiteralPath (Join-Path $sourcePath 'renderer\index.html'))) { throw "Source invalide : renderer/index.html absent." }
if (-not (Test-Path -LiteralPath (Join-Path $sourcePath 'package.json'))) { throw "Source invalide : package.json absent." }
if ($sourcePath -match '[\\/]node_modules([\\/]|$)') { throw "Ne pas utiliser node_modules comme source." }
if (-not (Test-Path -LiteralPath (Join-Path $Repo '.git'))) {
  $repoParent = Split-Path -Parent $Repo
  if (-not (Test-Path -LiteralPath $repoParent)) { New-Item -Path $repoParent -ItemType Directory -Force | Out-Null }
  & git clone $remote $Repo
  if ($LASTEXITCODE -ne 0) { throw "Clonage impossible." }
}
$repoPath = (Resolve-Path -LiteralPath $Repo).Path.TrimEnd('\')
if ($repoPath.Equals($sourcePath,[StringComparison]::OrdinalIgnoreCase) -or $repoPath.StartsWith($sourcePath+'\',[StringComparison]::OrdinalIgnoreCase) -or $sourcePath.StartsWith($repoPath+'\',[StringComparison]::OrdinalIgnoreCase)) {
  throw "Le dossier source et le depot de destination doivent etre independants."
}
$url = (& git -C $Repo remote get-url origin)
if ($LASTEXITCODE -ne 0 -or $url -notmatch '(github\.com[:/]darksathili-jpg/desumaths)(\.git)?$') { throw "Le depot distant n'est pas darksathili-jpg/desumaths : $url" }
$dirty = & git -C $Repo status --porcelain
if ($LASTEXITCODE -ne 0 -or $dirty) { throw "Depot de destination non propre : aucune copie effectuee. Verifier git status." }
RunGit @('fetch','origin',$branch)
& git -C $Repo show-ref --verify --quiet "refs/heads/$branch"
if ($LASTEXITCODE -eq 0) { RunGit @('switch',$branch) }
else { RunGit @('switch','--track','-c',$branch,"origin/$branch") }
$dirty = & git -C $Repo status --porcelain
if ($dirty) { throw "Branche S0 non propre : aucune copie." }
# Source preserved: never delete a file from the local project.
$copied = 0
$skipped = @()
$folders = @('renderer','electron','scripts','tests','web')
foreach ($folder in $folders) {
  $from = Join-Path $sourcePath $folder
  if (-not (Test-Path -LiteralPath $from)) { continue }
  $files = Get-ChildItem -LiteralPath $from -Recurse -File
  foreach ($file in $files) {
    $rel = $file.FullName.Substring($sourcePath.Length).TrimStart('\','/')
    if ($rel -match '(^|[\\/])(node_modules|dist|build|out|release|coverage|test-results|playwright-report|__MACOSX|\.git)([\\/]|$)' -or $rel -match '\.(zip|exe|msi|log)$' -or $file.Name -match '^(\.env|.*\.key$|.*\.pem$)') {
      $skipped += $rel
      continue
    }
    $dest = Join-Path $repoPath $rel
    $parent = Split-Path -Parent $dest
    if (-not (Test-Path -LiteralPath $parent)) { New-Item -ItemType Directory -Path $parent -Force | Out-Null }
    Copy-Item -LiteralPath $file.FullName -Destination $dest -Force
    $copied++
  }
}
foreach ($name in @('package.json','package-lock.json')) {
  $from=Join-Path $sourcePath $name
  if (Test-Path -LiteralPath $from) { Copy-Item -LiteralPath $from -Destination (Join-Path $repoPath $name) -Force; $copied++ }
}
Write-Host ("Fichiers sources copies : " + $copied) -ForegroundColor Green
Write-Host ("Fichiers exclus : " + $skipped.Count)
Write-Host ("Branche : " + $branch)
RunGit @('status','--short')
Write-Host ""
Write-Host "AUCUN COMMIT, PUSH, MERGE OU DEPLOIEMENT N'A ETE EFFECTUE." -ForegroundColor Yellow
Write-Host "Prochaine etape : examiner les modifications, puis lancer npm run check et npm run build:web dans $repoPath."
