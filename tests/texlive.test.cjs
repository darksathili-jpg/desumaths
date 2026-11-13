const test=require('node:test'); const assert=require('node:assert/strict'); const fs=require('node:fs'); const path=require('node:path');
const {runPdfLatex,texPath}=require('../electron/texlive.cjs');
const main=fs.readFileSync(path.join(__dirname,'../electron/main.cjs'),'utf8');
const source=fs.readFileSync(path.join(__dirname,'../renderer/Serveur Latex/compilateur.js'),'utf8');
test('native bridge restricted to atelier URL and isolated renderer',()=>{assert.match(main,/desumaths:compile-tex/);assert.match(main,/senderFrame\?\.url/);assert.match(main,/contextIsolation:true,nodeIntegration:false,sandbox:true/);assert.match(source,/desumathsTeX\.compile/);});
test('native runner restricts shell, files, timeout and workdir',()=>{const s=fs.readFileSync(path.join(__dirname,'../electron/texlive.cjs'),'utf8');for(const v of ['-no-shell-escape','-halt-on-error','openin_any:', 'openout_any:', 'shell:false','mkdtemp','setTimeout','fs.rm'])assert.ok(s.includes(v),v);});
test('rejects oversized input',async()=>{const result=await runPdfLatex('x'.repeat(600000));assert.equal(result.status,'invalid');});
test('unavailable binary returns diagnostic',async()=>{const r=await runPdfLatex('\\documentclass{article}\\begin{document}ok\\end{document}',{binary:'ABSENT_DESUMATHS_PDFLATEX_123456'});assert.equal(r.status,'unavailable');});
test('LaTeX compilation integration if local pdflatex exists',async(t)=>{
 const exe=process.platform==='win32'?'C:\\texlive\\2024\\bin\\windows\\pdflatex.exe':'/usr/bin/pdflatex';
 if(!fs.existsSync(exe)){t.skip('TeX Live not available on runner');return;}
 const r=await runPdfLatex('\\documentclass{article}\n\\begin{document}\nDesumaths test.\n\\end{document}',{binary:exe});
 assert.equal(r.status,'ok',r.log?.slice(-1500));assert.match(Buffer.from(r.pdf,'base64').subarray(0,5).toString(),/%PDF-/);
});
