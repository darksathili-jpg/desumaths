'use strict';
/* Migration: contrôle réel de l'ancien exercice Sommet en Chrome. */
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const base=(process.env.MIGRATION_BASE_URL||'http://127.0.0.1:8765').replace(/\/$/,'');
const out=path.resolve('artifacts/migration-sommet');
fs.mkdirSync(out,{recursive:true});
const legacy='/1ST/Fonctions/Fonctions%20degre%202/Sommet/Degre2Sommet.html';
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 try{
  for(const width of [375,1280]){
   const page=await browser.newPage({viewport:{width,height:900}});
   const errors=[];page.on('pageerror',e=>errors.push(e.message));
   try{
    const menu=await page.goto(base+'/Menus/Menu1STfonctionsdegre2.html',{waitUntil:'domcontentloaded'});
    assert.equal(menu?.status(),200);
    const historical=page.locator('#sections a[href*="Degre2Sommet.html"]');
    assert.equal(await historical.count(),1,'Ancien exercice non accessible depuis le menu');
    await historical.click();
    await page.waitForURL(url=>decodeURIComponent(url.pathname).endsWith('/1ST/Fonctions/Fonctions degre 2/Sommet/Degre2Sommet.html'));
    await page.locator('#enonce').waitFor({state:'visible'});
    assert.equal(await page.locator('#solution').evaluate(el=>el.hidden),true,'Solution révélée avant recherche');
    assert.equal(await page.locator('#correctiond').evaluate(el=>el.hidden),true,'Correction révélée avant recherche');
    const tirages=[];
    for(let i=0;i<12;i++){
      const e=await page.evaluate(()=>window.DesumathsSommet?.getExercise());
      assert.ok(e,'Générateur historique non exposé');
      assert.ok(Number.isInteger(e.alpha)&&Number.isInteger(e.beta),'Racines non entières');
      assert.ok(Math.abs(e.alpha)<=9&&Math.abs(e.beta)<=9,'Racines hors bornes historiques');
      assert.ok(Number.isInteger(e.a)&&Math.abs(e.a)>=1&&Math.abs(e.a)<=9,'Coefficient hors bornes');
      assert.equal(e.xS,(e.alpha+e.beta)/2,'Abscisse du sommet erronée');
      assert.equal(e.yS,e.a*(e.xS-e.alpha)*(e.xS-e.beta),'Ordonnée du sommet erronée');
      const response=await page.locator('#enonce').textContent();
      assert.ok(response.includes('f(x)='),'Énoncé absent');
      assert.equal(await page.locator('#solution').evaluate(el=>el.hidden),true,'Réponse dévoilée après tirage');
      assert.equal(await page.locator('#correctiond').evaluate(el=>el.hidden),true,'Correction dévoilée après tirage');
      tirages.push(e);
      if(i<11)await page.locator('#recommencer').click();
    }
    const sol=page.locator('#solutions'),cor=page.locator('#correction');
    await sol.click();
    assert.equal(await page.locator('#solution').evaluate(el=>el.hidden),false);
    assert.equal(await sol.getAttribute('aria-expanded'),'true');
    await cor.click();
    assert.equal(await page.locator('#correctiond').evaluate(el=>el.hidden),false);
    assert.equal(await cor.getAttribute('aria-expanded'),'true');
    assert.equal(await page.locator('#correctiond .methode-etape').count(),4);
    const geometry=await page.evaluate(()=>({
      viewport:innerWidth,documentWidth:document.documentElement.scrollWidth,
      mathjax:document.querySelectorAll('mjx-container').length,
      correctionText:document.querySelector('#correctiond')?.textContent?.length
    }));
    assert.ok(geometry.documentWidth<=width+2,'Débordement horizontal');
    assert.ok(geometry.mathjax>=5,'Formules MathJax non rendues');
    assert.ok(geometry.correctionText>120,'Correction mathématique vide');
    assert.deepEqual(errors,[],'Erreurs Javascript: '+errors.join('; '));
    await page.screenshot({path:path.join(out,'sommet-'+width+'.png'),fullPage:true});
    fs.writeFileSync(path.join(out,'sommet-'+width+'.json'),JSON.stringify({geometry,tirages},null,2));
    console.log('MIGRATION SOMMET OK',width,'px; 12 tirages mathématiquement vérifiés');
   }catch(e){
    await page.screenshot({path:path.join(out,'failure-'+width+'.png'),fullPage:true}).catch(()=>{});
    throw e;
   }finally{await page.close();}
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1;});
