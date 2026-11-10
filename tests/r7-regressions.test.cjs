const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {runPdfLatex}=require('../electron/texlive.cjs');
const read=(name)=>fs.readFileSync(path.join(__dirname,'..',name),'utf8');
test('R7: only one native compilation at a time, released even if failing',()=>{
 const main=read('electron/main.cjs');
 assert.match(main,/if\(compilationActive\)/);
 assert.match(main,/finally \{compilationActive = false;\}/);
 assert.match(main,/if\(!authorized\) return/);
});
test('R7: stale PDF revoked on retry or reset, error messages in French',()=>{
 const code=read('renderer/Serveur Latex/compilateur.js');
 assert.match(code,/releasePreviousPdf\(\); \/\/ Ne jamais présenter un ancien PDF/);
 assert.match(code,/editor.value = latex; releasePreviousPdf\(\)/);
 assert.match(code,/Temps maximal de compilation dépassé/);
 assert.match(code,/TeX Live est introuvable/);
});
test('R7: handles intentionally invalid LaTeX with failed status and log',async(t)=>{
 const binary=process.platform==='win32'?'C:\\texlive\\2024\\bin\\windows\\pdflatex.exe':'/usr/bin/pdflatex';
 if(!fs.existsSync(binary)){t.skip('TeX Live absent');return;}
 const result=await runPdfLatex('\\documentclass{article}\n\\begin{document}\n\\commandeInexistante\n\\end{document}',{binary});
 assert.equal(result.status,'failed');assert.match(result.log,/Undefined control sequence|commandeInexistante/);assert.equal(result.pdf,undefined);
});
test('R7: compiles mathematical TikZ and amsmath examples if locally installed',async(t)=>{
 const binary=process.platform==='win32'?'C:\\texlive\\2024\\bin\\windows\\pdflatex.exe':'/usr/bin/pdflatex';
 if(!fs.existsSync(binary)){t.skip('TeX Live absent');return;}
 const source=String.raw`\documentclass{article}
\usepackage{amsmath,amssymb,tikz}
\begin{document}
\[x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}\]
\begin{tikzpicture}\draw[->] (0,0)--(3,0);\draw[->](0,0)--(0,2);\end{tikzpicture}
\end{document}`;
 const result=await runPdfLatex(source,{binary,timeout:45000});
 if(result.status!=='ok' && /File `[^']+' not found/.test(result.log)) {t.skip('Environment lacks TeX packages for TikZ');return;}
 assert.equal(result.status,'ok',result.log?.slice(-1200));
 assert.equal(Buffer.from(result.pdf,'base64').subarray(0,5).toString(),'%PDF-');
});
