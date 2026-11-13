'use strict';
/*
 * G4 - Copie contrôlée du moteur TikZJax déjà publié dans latex_tikz.
 * Exécuter APRÈS npm run build:web. Le dépôt source est récupéré dans
 * GitHub Actions à une révision exacte, et aucune URL tierce n'est utilisée
 * au moment du rendu des figures.
 */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const revision = '20412fc9324a80416063fa9c9d2924df60179baa';
const sourceDir = process.argv[2];
if (!sourceDir) throw Error('Usage: node scripts/stage-tikzjax-web.cjs /chemin/latex_tikz');
const from = path.resolve(sourceDir);
const dest = path.resolve(__dirname, '../dist/web/vendor/tikzjax');
const output = path.resolve(__dirname, '../dist/web');
if (!fs.existsSync(path.join(output, 'Laboratoire/FiguresTikZ/index.html'))) {
  throw Error('Le laboratoire G4 doit être présent dans la construction Web.');
}
const required = ['tikzjax.js', 'run-tex.js', 'core.dump.gz', 'tex.wasm.gz',
  'fonts.css', 'tex_files/tkz-tab.sty.gz', 'tex_files/pgfplots.sty.gz'];
for (const f of required) {
  if (!fs.existsSync(path.join(from, f))) throw Error('Asset TikZJax manquant : ' + f);
}
fs.mkdirSync(dest, {recursive: true});
for (const file of ['tikzjax.js','run-tex.js','core.dump.gz','tex.wasm.gz','fonts.css']) {
  fs.copyFileSync(path.join(from,file), path.join(dest,file));
}
for (const dir of ['fonts','tex_files']) {
  fs.cpSync(path.join(from,dir),path.join(dest,dir),{recursive:true,force:true});
}
const files = [];
for (const dir of ['fonts','tex_files']) {
  for (const entry of fs.readdirSync(path.join(dest,dir),{recursive:true,withFileTypes:true})) {
    if(entry.isFile()) files.push(path.join(entry.parentPath,entry.name));
  }
}
const dump = fs.statSync(path.join(dest,'core.dump.gz')).size;
const engine = fs.statSync(path.join(dest,'run-tex.js')).size;
if(dump < 1000000 || engine < 100000) throw Error('Distribution TeX suspecte ou tronquée.');
const sha = f => crypto.createHash('sha256').update(fs.readFileSync(path.join(dest,f))).digest('hex');
const manifest = {
  project: 'Desumaths G4 - TikZJax pilote',
  source: 'https://github.com/darksathili-jpg/latex_tikz',
  sourceRevision: revision,
  coreDumpBytes: dump,
  workerBytes: engine,
  packageAndFontCount: files.length,
  scripts: {'tikzjax.js':sha('tikzjax.js'),'run-tex.js':sha('run-tex.js')},
  uses: ['TikZJax SVG','tkz-tab','pgfplots'],
  note: 'Rendu SVG uniquement ; ne remplace pas la compilation PDF de Desumaths.'
};
fs.writeFileSync(path.join(dest,'SOURCE.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify(manifest,null,2));
