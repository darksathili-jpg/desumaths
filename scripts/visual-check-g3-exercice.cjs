'use strict';
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const base=process.env.G3_BASE_URL||'http://127.0.0.1:8765';
const target=base+'/2nde/Equations/Equations%20avec%20factorisation/EqsFacteurcommun.html';
const out=path.resolve(process.env.G3_EXERCISE_EVIDENCE_DIR||'artifacts/g3-exercice');
fs.mkdirSync(out,{recursive:true});
async function inspect(browser,width,reduced=false){
 const page=await browser.newPage({viewport:{width,height:900},reducedMotion:reduced?'reduce':'no-preference'});
 const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 try{
  await page.goto(target,{waitUntil:'domcontentloaded',timeout:30000});
  await page.waitForFunction(()=>Boolean(window.DesumathsHero&&window.DesumathsHero.instance),null,{timeout:12000});
  const root=page.locator('#hero-compagnon');
  assert.equal(await root.getAttribute('data-mode'),'exercise');
  assert.equal(await root.getAttribute('data-pose'),'idle','Walking must never occur without student action');
  assert.equal(await page.locator('#solution').evaluate(el=>el.hidden),true);
  assert.equal(await page.locator('#correctiond').evaluate(el=>el.hidden),true);
  if(reduced){
    assert.equal(await root.getAttribute('data-motion'),'off');
    assert.equal(await page.locator('.hero-compagnon-sprite').evaluate(e=>getComputedStyle(e).animationName),'none');
  }
  const asset=await page.locator('.hero-compagnon-sprite').evaluate(async element=>{
    const imagePath=getComputedStyle(element).backgroundImage.match(/url\(["']?(.+?)["']?\)/)?.[1];
    const img=new Image();img.src=imagePath;
    try{await img.decode();return {w:img.naturalWidth,h:img.naturalHeight};}
    catch(e){return {error:String(e)};}
  });
  assert.deepEqual(asset,{w:1086,h:1448});
  for(let i=1;i<=3;i++){
    await page.getByRole('button',{name:i===1?'Indice suivant':i===3?'Indice suivant':'Indice suivant'}).click();
    assert.equal(await root.getAttribute('data-hint-step'),String(i));
    assert.equal(await page.locator('[data-hero-step]').textContent(),'Indice '+i+' / 3');
    assert.equal(await page.locator('#solution').evaluate(el=>el.hidden),true,'Hints reveal solution unexpectedly');
    assert.equal(await page.locator('#correctiond').evaluate(el=>el.hidden),true,'Hints reveal detailed correction');
  }
  await page.getByRole('button',{name:'Revoir les indices'}).click();
  assert.equal(await root.getAttribute('data-hint-step'),'1');
  if(!reduced){
    await page.getByRole('button',{name:'Changer de vue'}).click();
    await page.waitForFunction(()=>document.querySelector('#hero-compagnon').dataset.direction==='dos',null,{timeout:3200});
    await page.waitForFunction(()=>document.querySelector('#hero-compagnon').dataset.busy==='false',null,{timeout:8500});
  }
  await page.getByRole('button',{name:'Masquer'}).click();
  assert.equal(await root.evaluate(e=>e.hidden),true);
  await page.getByRole('button',{name:'Afficher Christophe'}).click();
  assert.equal(await root.evaluate(e=>e.hidden),false);

  await page.locator('#correction').click();
  await page.waitForFunction(()=>document.querySelectorAll('#correctiond mjx-container').length>=3,null,{timeout:35000});
  assert.equal(await page.locator('#correctiond').evaluate(el=>el.hidden),false);
  const metrics=await page.evaluate(()=>{
    const q=selector=>{const r=document.querySelector(selector).getBoundingClientRect();return {left:r.left,top:r.top,right:r.right,bottom:r.bottom,height:r.height};};
    return {width:innerWidth,pageWidth:document.documentElement.scrollWidth,
      guide:q('#hero-compagnon'),paper:q('.exercice-feuille'),correction:q('#correctiond'),
      mathRegions:document.querySelectorAll('#correctiond .r16-math-region').length,
      navCount:document.querySelectorAll('.retour-exercice button').length};
  });
  assert.ok(metrics.pageWidth<=width+2,'Horizontal page overflow: '+JSON.stringify(metrics));
  assert.ok(metrics.guide.left>=-2&&metrics.guide.right<=width+2,'Guide off-screen');
  assert.ok(metrics.guide.bottom<=metrics.paper.bottom+2,'Guide outside paper');
  assert.equal(metrics.mathRegions,3,'Historical maths array count changed');
  assert.equal(metrics.navCount,3,'Historical exercise navigation changed');
  assert.deepEqual(errors,[],'Unexpected page JS errors');
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.waitForTimeout(120);
  await page.screenshot({path:path.join(out,'exercice-'+width+(reduced?'-reduced':'')+'.png'),fullPage:true});
  console.log('G3.4 EXERCISE REAL BROWSER OK',width,'px',reduced?'reduced motion':'animations');
 }catch(e){
  await page.screenshot({path:path.join(out,'failure-'+width+'.png'),fullPage:true}).catch(()=>{});
  throw e;
 }finally{await page.close()}
}
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 try{for(const w of [375,540,1280]) await inspect(browser,w);await inspect(browser,375,true);}
 finally{await browser.close()}
 console.log('G3.4 HERO EXERCISE INTEGRATION: SUCCESS');
})().catch(e=>{console.error(e.stack||e);process.exitCode=1;});
