'use strict';
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const base=process.env.G3_BASE_URL||'http://127.0.0.1:8765';
const evidence=path.resolve(process.env.G3_EVIDENCE_DIR||'artifacts/g3-hero');
fs.mkdirSync(evidence,{recursive:true});
const data=[];
const widths=[375,540,768,1280,1600];

async function inspect(browser,width) {
 const p=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
 const errors=[];p.on('pageerror',e=>errors.push(e.message));
 try{
   await p.goto(base+'/',{waitUntil:'domcontentloaded',timeout:30000});
   await p.waitForFunction(()=>!!(window.DesumathsHero&&window.DesumathsHero.instance),null,{timeout:12000});
   const picture=await p.locator('.hero-compagnon-sprite').evaluate(async el=>{
     const css=getComputedStyle(el);
     const url=css.backgroundImage.match(/url\(["']?(.+?)["']?\)/)?.[1];
     if(!url)return {loaded:false,css:css.backgroundImage};
     const image=new Image();image.src=url;
     try{await image.decode();return {loaded:true,width:image.naturalWidth,height:image.naturalHeight,cssSize:css.backgroundSize};}
     catch(e){return {loaded:false,error:String(e)};}
   });
   assert.equal(picture.loaded,true,'The full 12-frame sprite must load');
   assert.equal(picture.width,696,'Three columns at 232 px');
   assert.equal(picture.height,928,'Four rows at 232 px');
   assert.equal(picture.cssSize,'300% 400%');
   await p.waitForFunction(()=>document.querySelector('#hero-compagnon').dataset.busy==='false',null,{timeout:5000});
   const metrics=await p.evaluate(()=>{
     const rect=selector=>{const r=document.querySelector(selector).getBoundingClientRect();return {left:r.left,top:r.top,right:r.right,bottom:r.bottom,width:r.width,height:r.height};};
     return {pageWidth:document.documentElement.scrollWidth,
       width:innerWidth,
       sprite:rect('.hero-compagnon-sprite'),
       stage:rect('.hero-plateau'),
       bubble:rect('.hero-bulle'),
       companion:rect('.hero-compagnon'),
       demonstration:rect('.carte-demo'),
       levels:document.querySelectorAll('.grille-niveaux .cahier').length};
   });
   assert.deepEqual(errors,[],'Unexpected page errors');
   assert.ok(metrics.pageWidth<=width+2,'Whole page overflows: '+JSON.stringify(metrics));
   assert.ok(metrics.sprite.height>=232,'Character too small: '+JSON.stringify(metrics));
   assert.ok(metrics.sprite.left>=-2&&metrics.sprite.right<=width+2,'Character clipped on screen: '+JSON.stringify(metrics));
   assert.ok(metrics.bubble.left>=-2&&metrics.bubble.right<=width+2,'Speech bubble clipped on screen');
   assert.ok(metrics.companion.bottom<=metrics.demonstration.top+3,'Character overlaps the math exercise');
   assert.equal(metrics.levels,3,'Level navigation regressed');

   const hero=p.locator('#hero-compagnon');
   assert.equal(await hero.getAttribute('data-pose'),'idle');
   assert.equal(await p.locator('.hero-compagnon-sprite').getAttribute('data-frame'),'1');

   await p.getByRole('button',{name:'Me voir marcher'}).click();
   await p.waitForFunction(()=>document.querySelector('#hero-compagnon').dataset.direction==='droite'&&document.querySelector('#hero-compagnon').dataset.busy==='true',null,{timeout:1500});
   await p.waitForFunction(()=>document.querySelector('#hero-compagnon').dataset.busy==='false',null,{timeout:7500});
   assert.equal(await hero.getAttribute('data-direction'),'face');

   await p.getByRole('button',{name:'Changer de vue'}).click();
   await p.waitForFunction(()=>document.querySelector('#hero-compagnon').dataset.direction==='dos',null,{timeout:3000});
   await p.waitForFunction(()=>document.querySelector('#hero-compagnon').dataset.busy==='false',null,{timeout:7500});
   assert.equal(await p.locator('.hero-compagnon-sprite').getAttribute('data-frame'),'1');

   await p.getByRole('button',{name:"Réduire l'animation"}).click();
   assert.equal(await hero.getAttribute('data-motion'),'off');
   await p.getByRole('button',{name:"Activer l'animation"}).click();
   assert.equal(await hero.getAttribute('data-motion'),'on');
   await p.getByRole('button',{name:'Masquer'}).click();
   assert.equal(await hero.evaluate(el=>el.hidden),true);
   await p.getByRole('button',{name:'Afficher Christophe, mon guide'}).click();
   assert.equal(await hero.evaluate(el=>el.hidden),false);

   if(width===1280){
     for(const direction of ['face','gauche','dos','droite']){
       await p.evaluate(direction=>window.DesumathsHero.instance.setDirection(direction),direction);
       await p.screenshot({path:path.join(evidence,'g3-direction-'+direction+'.png'),fullPage:false});
     }
     await p.evaluate(()=>window.DesumathsHero.instance.setDirection('face'));
   }
   await p.evaluate(()=>window.scrollTo(0,0));
   await p.waitForTimeout(150);
   await p.screenshot({path:path.join(evidence,'g3-hero-'+width+'.png'),fullPage:true});
   data.push({width,...metrics,picture});
   console.log('G3.2 VISUAL OK',width,'px; all directions, walk, no overlap, 12-frame atlas');
 }catch(e){
   await p.screenshot({path:path.join(evidence,'g3-hero-'+width+'-failure.png'),fullPage:true}).catch(()=>{});
   throw e;
 }finally{await p.close()}
}
async function reducedMotion(browser){
 const p=await browser.newPage({viewport:{width:375,height:850},reducedMotion:'reduce'});
 try{
  await p.goto(base+'/',{waitUntil:'domcontentloaded'});
  await p.waitForFunction(()=>!!(window.DesumathsHero&&window.DesumathsHero.instance));
  assert.equal(await p.locator('#hero-compagnon').getAttribute('data-motion'),'off');
  assert.equal(await p.locator('#hero-compagnon').getAttribute('data-pose'),'idle');
  assert.equal(await p.locator('.hero-compagnon-sprite').evaluate(el=>getComputedStyle(el).animationName),'none');
  await p.getByRole('button',{name:'Changer de vue'}).click();
  assert.equal(await p.locator('#hero-compagnon').getAttribute('data-direction'),'dos');
  console.log('G3.2 ACCESSIBILITY OK : reduced motion');
 }finally{await p.close()}
}
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 try{for(const width of widths)await inspect(browser,width);await reducedMotion(browser);}
 finally{await browser.close()}
 fs.writeFileSync(path.join(evidence,'metrics.json'),JSON.stringify(data,null,2));
 console.log('G3.2 REAL BROWSER TESTS: SUCCESS');
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
