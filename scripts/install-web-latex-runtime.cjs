'use strict';
// G3.4 - Copy a pinned, self-hosted browser TeX runtime into the Web export.
// This only runs in GitHub Actions; it does NOT change the author's TeX templates.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const source = process.argv[2];
if (!source) throw Error('Usage: node scripts/install-web-latex-runtime.cjs /path/to/latex-preview');
const root = path.resolve(__dirname,'..');
const output = path.join(root,'dist','web');
if (!fs.existsSync(path.join(output,'Serveur Latex','latex_javascript.html'))) throw Error('build:web must run before staging TeX assets');
const fromVendor = path.join(source,'public','vendor');
const fromTeX = path.join(source,'public','texlive');
const toVendor = path.join(output,'Serveur Latex');
const toTeX = path.join(output,'texlive');
if (!fs.existsSync(path.join(fromTeX,'pdftex','10','swiftlatexpdftex.fmt'))) throw Error('Missing self-hosted LaTeX format');
if (!fs.existsSync(path.join(fromVendor,'swiftlatexpdftex.wasm'))) throw Error('Missing pdfTeX wasm');
if (!fs.existsSync(path.join(fromVendor,'swiftlatexpdftex.js'))) throw Error('Missing compatible engine worker');

fs.cpSync(fromTeX,toTeX,{recursive:true,force:true});
for (const file of ['swiftlatexpdftex.js','swiftlatexpdftex.wasm']) {
  fs.copyFileSync(path.join(fromVendor,file),path.join(toVendor,file));
}
fs.copyFileSync(path.join(fromVendor,'swiftlatex.LICENSE.txt'),path.join(toVendor,'swiftlatex.LICENSE.txt'));
fs.copyFileSync(path.join(source,'LICENSE'),path.join(toVendor,'latex-preview.MIT.LICENSE.txt'));
const manifest = JSON.parse(fs.readFileSync(path.join(toTeX,'manifest.json'),'utf8'));
if (Object.keys(manifest).length < 500) throw Error('Incomplete self-hosted TeX Live subset');
const wasm = fs.readFileSync(path.join(toVendor,'swiftlatexpdftex.wasm'));
if (wasm.toString('hex',0,4) !== '0061736d') throw Error('Bad WebAssembly magic');
const fmt = fs.statSync(path.join(toTeX,'pdftex','10','swiftlatexpdftex.fmt'));
if (fmt.size < 8_000_000) throw Error('Incomplete LaTeX format file');
console.log(JSON.stringify({
  result:'Self-hosted PDFLaTeX staged',texFileCount:Object.keys(manifest).length,
  wasmBytes:wasm.length,formatBytes:fmt.size,
  wasmSha256:crypto.createHash('sha256').update(wasm).digest('hex'),
  source:'sean-reid/latex-preview, commit f80f84659c9476e41ef7212f6d753e10f6bd4af5',
},null,2));
