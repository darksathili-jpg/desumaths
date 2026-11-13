'use strict';
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const base=(process.env.PATRIMOINE_BASE_URL||'http://127.0.0.1:8765').replace(/\/$/,'');
const output=path.resolve('artifacts/patrimoine-accueil');
fs.mkdirSync(output,{recursive:true});

(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 try{
  for(const width of [375,1280]){
   const page=await browser.newPage({viewport:{width,height:900}});
   const errors=[];page.on('pageerror',e=>errors.push(e.message));
   try{
    const r=await page.goto(base+'/index.html',{waitUntil:'domcontentloaded'});
    assert.equal(r?.status(),200,'Accueil inaccessible');
    const section=page.locator('.patrimoine-acces');
    await section.waitFor({state:'visible'});
    assert.equal(await section.locator('.patrimoine-cahier').count(),3);
    assert.equal(await section.locator('a').count(),12);
    const metrics=await page.evaluate(()=>{
      const cards=[...document.querySelectorAll('.patrimoine-cahier')];
      const links=[...document.querySelectorAll('.patrimoine-cahier a')];
      return {pageWidth:document.documentElement.scrollWidth,
       cardRects:cards.map(el=>({x:el.getBoundingClientRect().x,width:el.getBoundingClientRect().width})),
       linkHeights:links.map(el=>Math.round(el.getBoundingClientRect().height)),
       linkColors:links.map(el=>getComputedStyle(el).color)};
    });
    assert.ok(metrics.pageWidth<=width+2,'Accueil déborde horizontalement');
    assert.ok(metrics.linkHeights.every(n=>n>=40),'Lien trop petit pour le tactile');
    if(width===375){
     assert.ok(metrics.cardRects[0].x < metrics.cardRects[1].x+1,'Cartes mobiles mal disposées');
     assert.ok(metrics.cardRects[1].width>200);
    }
    for(const href of await section.locator('a').evaluateAll(els=>els.map(el=>el.getAttribute('href')))){
      const res=await page.request.get(base+'/'+href);
      assert.equal(res.status(),200,'Lien vers page historique cassé : '+href);
    }
    assert.deepEqual(errors,[],'Erreurs Javascript sur l’accueil');
    await page.screenshot({path:path.join(output,'accueil-patrimoine-'+width+'.png'),fullPage:true});
    fs.writeFileSync(path.join(output,'metrics-'+width+'.json'),JSON.stringify(metrics,null,2));
    console.log('PATRIMOINE ACCUEIL OK',width,'px, 12 liens valides');
   }finally{await page.close();}
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1;});
