'use strict';
/* Validation navigateur du vrai exercice historique "Forme factorisée". */
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const base=(process.env.MIGRATION_BASE_URL||'http://127.0.0.1:8765').replace(/\/$/,'');
const out=path.resolve('artifacts/migration-factorisee');
fs.mkdirSync(out,{recursive:true});
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 try{
  for(const width of [375,1280]){
   const page=await browser.newPage({viewport:{width,height:900}});
   const errors=[];page.on('pageerror',e=>errors.push(e.message));
   try{
    const menu=await page.goto(base+'/Menus/Menu1STfonctionsdegre2.html',{waitUntil:'domcontentloaded'});
    assert.equal(menu?.status(),200);
    const link=page.locator('#sections a[href*="Degre2FormeFactorisee.html"]');
    assert.equal(await link.count(),1,'Lien historique de factorisation absent');
    await link.click();
    await page.waitForURL(url=>decodeURIComponent(url.pathname).endsWith('/Forme factorisee/Degre2FormeFactorisee.html'));
    await page.locator('#enonce').waitFor({state:'visible'});
    assert.equal(await page.locator('#solution').evaluate(e=>e.hidden),true);
    assert.equal(await page.locator('#correctiond').evaluate(e=>e.hidden),true);
    const samples=[];
    for(let i=0;i<12;i++){
      const v=await page.evaluate(()=>window.DesumathsFormeFactorisee?.getExercise());
      assert.ok(v,'Exercice non généré');
      assert.notEqual(v.x0,v.alpha);assert.notEqual(v.x0,v.beta);
      assert.equal(v.product,(v.x0-v.alpha)*(v.x0-v.beta));
      assert.equal(v.image,v.a*v.product);
      assert.ok(Math.abs(v.alpha)<=9&&Math.abs(v.beta)<=9&&Math.abs(v.a)<=9&&Math.abs(v.a)>=1);
      assert.equal(await page.locator('#solution').evaluate(e=>e.hidden),true,'Réponse donnée avant recherche');
      assert.equal(await page.locator('#correctiond').evaluate(e=>e.hidden),true,'Méthode dévoilée');
      samples.push(v);
      if(i<11)await page.locator('#recommencer').click();
    }
    await page.locator('#solutions').click();
    await page.locator('#correction').click();
    assert.equal(await page.locator('#solution').evaluate(e=>e.hidden),false);
    assert.equal(await page.locator('#correctiond').evaluate(e=>e.hidden),false);
    assert.equal(await page.locator('#correctiond .methode-etape').count(),4);
    const metrics=await page.evaluate(()=>({
      viewport:innerWidth,width:document.documentElement.scrollWidth,
      renderedMath:document.querySelectorAll('mjx-container').length,
      solutionText:document.querySelector('#solution').textContent,
      correctionText:document.querySelector('#correctiond').textContent.length
    }));
    assert.ok(metrics.width<=width+2,'Débordement horizontal');
    assert.ok(metrics.renderedMath>=5,'Rendu MathJax non chargé');
    assert.ok(metrics.correctionText>110,'Correction trop courte');
    assert.deepEqual(errors,[],'Erreurs JavaScript');
    await page.screenshot({path:path.join(out,'factorisee-'+width+'.png'),fullPage:true});
    fs.writeFileSync(path.join(out,'metrics-'+width+'.json'),JSON.stringify({metrics,samples},null,2));
    console.log('MIGRATION FACTORISEE OK',width,'px; 12 tirages et correction vérifiés');
   }catch(e){
    await page.screenshot({path:path.join(out,'failure-'+width+'.png'),fullPage:true}).catch(()=>{});
    throw e;
   }finally{await page.close();}
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1;});
