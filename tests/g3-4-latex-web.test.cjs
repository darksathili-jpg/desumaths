'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
test('G3.4: original complex TeX and native Electron route unchanged',()=>{
  const historic=read('renderer/Serveur Latex/latex.js');
  assert.match(historic,/tkz-tab/);
  assert.match(historic,/pstricks/);
  assert.match(historic,/\\documentclass/);
  const editor=read('renderer/Serveur Latex/compilateur.js');
  assert.match(editor,/window\.desumathsTeX\?\.compile/);
  assert.match(editor,/import \{ latex \} from '\.\/latex\.js'/);
  assert.match(editor,/import \{ latexWeb \} from '\.\/latex-web-exemple\.js'/);
  assert.match(editor,/engine\.setTexliveEndpoint/);
  assert.match(editor,/new URL\('\.\.\/texlive\/'/);
  assert.match(editor,/releasePreviousPdf\(\)/);
});
test('G3.4: no arbitrary proxy or remote compiler; real PDF required before success',()=>{
  const script=read('renderer/Serveur Latex/compilateur.js');
  assert.match(script,/String\.fromCharCode\(\.\.\.pdf\.slice\(0,5\)\) === '%PDF-'/);
  assert.match(script,/120000/);
  assert.match(script,/TextEncoder/);
  assert.match(script,/consoleOutput\.textContent/);
  assert.doesNotMatch(script,/innerHTML\s*=/);
  const worker=read('renderer/Serveur Latex/PdfTeXEngine.js');
  const endpoint=worker.match(/PdfTeXEngine\.prototype\.setTexliveEndpoint = function \(url\) \{[\s\S]*?\n    \};/);
  assert.ok(endpoint);
  assert.doesNotMatch(endpoint[0],/latexWorker = undefined/);
});
test('G3.4: Web and historic samples, status and PDF controls exist',()=>{
  const html=read('renderer/Serveur Latex/latex_javascript.html');
  for(const id of ['latex-source','compilebtn','resetbtn','exemple-web','exemple-historique','downloadbtn','etat','pdfbox','console','compatibilite'])
    assert.ok(html.includes('id="'+id+'"'),id);
  const sample=read('renderer/Serveur Latex/latex-web-exemple.js');
  assert.match(sample,/String\.raw`/);
  assert.match(sample,/\\documentclass/);
  assert.match(sample,/\\begin\{document\}/);
  assert.match(sample,/\\end\{document\}/);
  assert.match(sample,/\\begin\{align\*\}/);
});
test('G3.4: runtime source is pinned; local package mirror comes from the Pages origin',()=>{
  const installer=read('scripts/install-web-latex-runtime.cjs');
  assert.match(installer,/f80f84659c9476e41ef7212f6d753e10f6bd4af5/);
  assert.match(installer,/manifest\.json/);
  assert.match(installer,/swiftlatex\.LICENSE\.txt/);
  assert.match(installer,/latex-preview\.MIT\.LICENSE\.txt/);
  const html=read('renderer/Serveur Latex/latex_javascript.html');
  assert.match(html,/PdfTeXEngine\.js/);
  assert.match(html,/type="module" src="compilateur\.js"/);
});
