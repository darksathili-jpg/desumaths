'use strict';
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const base=process.env.LATEX_BASE_URL||'http://127.0.0.1:8765';
const out=path.resolve(process.env.LATEX_EVIDENCE_DIR||'artifacts/latex-web');
fs.mkdirSync(out,{recursive:true});
const html=base+'/Serveur%20Latex/latex_javascript.html';

async function main() {
  const browser=await chromium.launch({channel:'chrome',headless:true});
  try {
    for(const width of [375,1280]){
      const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
      const errors=[];
      const logs=[];
      const failing=[];
      page.on('pageerror',e=>errors.push(e.message));
      page.on('console',m=>{
        if(m.type()==='error'||m.type()==='warning')logs.push(m.text().slice(0,600));
      });
      page.on('response',r=>{
        if(r.status()>=400&&r.url().includes('/texlive/'))failing.push(r.status()+' '+r.url());
      });
      try {
        await page.goto(html,{waitUntil:'domcontentloaded',timeout:30000});
        await page.waitForFunction(()=>{
          const btn=document.querySelector('#compilebtn');
          const state=document.querySelector('#etat')?.textContent||'';
          return !btn.disabled||state.includes('n’a pas démarré');
        },null,{timeout:45000});
        const state=await page.locator('#etat').textContent();
        assert.equal(await page.locator('#compilebtn').isEnabled(),true,
          'LaTeX engine not ready: '+state+'; browser errors: '+errors.join('; '));
        assert.match(await page.locator('#latex-source').inputValue(),/\\documentclass/);
        assert.match(await page.locator('#latex-source').inputValue(),/\\begin\{document\}/);
        assert.ok((await page.locator('#compatibilite').textContent()).includes('PDFLaTeX fonctionne'));
        await page.locator('#compilebtn').click();
        await page.waitForFunction(()=>{
          const t=document.querySelector('#etat')?.textContent||'';
          return t.includes('PDF créé avec succès')||t.includes('Échec de compilation')||t.includes('Erreur du compilateur');
        },null,{timeout:125000});
        const compilationStatus=await page.locator('#etat').textContent();
        if(!compilationStatus.includes('PDF créé avec succès')){
          throw Error('LaTeX did not compile: '+compilationStatus+
            ' | log: '+(await page.locator('#console').textContent()).slice(-3000)+
            ' | browserErrors: '+JSON.stringify(errors)+
            ' | browserWarnings: '+JSON.stringify(logs).slice(-1200)+
            ' | failedRequests: '+JSON.stringify(failing).slice(-1000));
        }
        const pdf=await page.locator('#downloadbtn').evaluate(async anchor=>{
          const res=await fetch(anchor.href);
          const bytes=new Uint8Array(await res.arrayBuffer());
          return {bytes:Array.from(bytes),contentType:res.headers.get('content-type')};
        });
        const buffer=Buffer.from(pdf.bytes);
        assert.equal(buffer.subarray(0,5).toString('ascii'),'%PDF-','Not a real PDF file');
        assert.ok(buffer.length>1000,'Empty or truncated PDF');
        assert.equal(pdf.contentType,'application/pdf');
        fs.writeFileSync(path.join(out,'latex-exemple-'+width+'.pdf'),buffer);

        const widthMetrics=await page.evaluate(()=>({
          width:innerWidth,documentWidth:document.documentElement.scrollWidth,
          hasDownload:!document.querySelector('#downloadbtn').hidden,
          previewSource:document.querySelector('#pdfbox').src,
        }));
        assert.ok(widthMetrics.documentWidth<=width+2,'Global overflow: '+JSON.stringify(widthMetrics));
        assert.ok(widthMetrics.previewSource.startsWith('blob:'),'PDF preview not linked');

        await page.screenshot({path:path.join(out,'atelier-'+width+'.png'),fullPage:true});
        console.log('LATEX WEB REAL PDF OK',width,'px',buffer.length,'bytes / format and resources self-hosted');

        if(width===1280) {
          await page.locator('#exemple-historique').click();
          assert.match(await page.locator('#latex-source').inputValue(),/tkz-tab/);
          assert.ok((await page.locator('#etat').textContent()).includes('TikZ'));
          await page.locator('#exemple-web').click();
          assert.equal(await page.locator('#downloadbtn').isVisible(),false,'Stale PDF displayed after selecting an example');
        }
        assert.deepEqual(errors,[],'Unexpected browser JS exceptions');
      } catch(e) {
        await page.screenshot({path:path.join(out,'atelier-'+width+'-failure.png'),fullPage:true}).catch(()=>{});
        fs.writeFileSync(path.join(out,'debug-'+width+'.json'),JSON.stringify({errors,logs,failing},null,2));
        throw e;
      } finally {
        await page.close();
      }
    }
    console.log('LATEX WEB INTEGRATION: SUCCESS - real PDF from browser engine');
  } finally {await browser.close();}
}
main().catch(e=>{console.error(e.stack||e);process.exitCode=1;});
