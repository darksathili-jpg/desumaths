'use strict';
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const base=process.env.G3_BASE_URL||'http://127.0.0.1:8765';
const evidence=path.resolve(process.env.G3_MENU_EVIDENCE_DIR||'artifacts/g3-menus');
fs.mkdirSync(evidence,{recursive:true});
const report=[];
const routes=[
 {path:'Menus/MenuSeconde.html',label:'Seconde',minLinks:10},
 {path:'Menus/MenuSecondeEquations.html',label:'Équations',minLinks:8},
 {path:'Menus/Menu1ST.html',label:'Première',minLinks:1},
 {path:'Menus/MenuTaleSpe.html',label:'Terminale',minLinks:1}
];
async function inspect(browser,route,width) {
 const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 try {
  const response=await page.goto(base+'/'+route.path,{waitUntil:'domcontentloaded',timeout:30000});
  assert.ok(response && response.status()<400,'Unreachable menu: '+route.path);
  await page.waitForFunction(()=>Boolean(window.DesumathsHero&&window.DesumathsHero.instance),null,{timeout:18000});
  const hero=page.locator('#hero-compagnon');
  await hero.waitFor({state:'visible'});
  assert.equal(await hero.getAttribute('data-mode'),'menu','Menu-only calm state must be enabled');
  assert.equal(await hero.getAttribute('data-pose'),'idle');
  const photo=await page.locator('.hero-compagnon-sprite').evaluate(async el=>{
   const raw=getComputedStyle(el).backgroundImage.match(/url\(["']?(.+?)["']?\)/)?.[1];
   if(!raw)return {ok:false,reason:'No image URL'};
   const img=new Image();img.src=raw;try{await img.decode();return {ok:true,w:img.naturalWidth,h:img.naturalHeight};}catch(e){return {ok:false,error:String(e)}}
  });
  assert.equal(photo.ok,true,'Sprite not loaded: '+JSON.stringify(photo));
  assert.equal(photo.w,1086,'Unexpected original sprite width');
  assert.equal(photo.h,1448,'Unexpected original sprite height');
  const metrics=await page.evaluate(()=>{
   const get=selector=>{
     const el=document.querySelector(selector);if(!el)return null;
     const r=el.getBoundingClientRect();
     return {left:r.left,top:r.top,right:r.right,bottom:r.bottom,width:r.width,height:r.height};
   };
   return {
     viewport:innerWidth,pageWidth:document.documentElement.scrollWidth,
     card:get('.menu-compagnon'),sprite:get('.menu-compagnon .hero-compagnon-sprite'),
     menuLinks:document.querySelectorAll('main a.onglet,main a.lien-menu').length,
     list:get('#themes')||get('#sections'),
     chapter:document.querySelector('#titre-menu')?.textContent,
   };
  });
  assert.deepEqual(errors,[],'Menu JavaScript errors');
  assert.ok(metrics.pageWidth<=width+2,'Global horizontal overflow: '+JSON.stringify(metrics));
  assert.ok(metrics.card.right<=width+2 && metrics.card.left>=-2,'Guide outside screen');
  assert.ok(metrics.list.top>=metrics.card.bottom-3,'Menu cards overlap character');
  assert.ok(metrics.menuLinks>=route.minLinks,'Historic links missing: '+JSON.stringify(metrics));
  if(route.label==='Équations'){
   assert.equal(await page.locator('a[href*="EqsFacteurcommun.html"]').count(),1);
   assert.equal(await page.locator('a[href*="Equationsquotients.html"]').count(),1);
  }
  const before=await page.locator('[data-hero-message]').textContent();
  await page.getByRole('button',{name:'Un conseil'}).click();
  const after=await page.locator('[data-hero-message]').textContent();
  assert.notEqual(after,before,'Pedagogical tip did not change');
  if(route.label==='Équations') assert.match(after,/forme de l'équation/i);

  // One animation, shared motor: on small screens the menu stays usable during movement.
  await page.getByRole('button',{name:'Changer de vue'}).click();
  await page.waitForFunction(()=>document.querySelector('#hero-compagnon').dataset.direction==='dos',null,{timeout:3300});
  await page.waitForFunction(()=>document.querySelector('#hero-compagnon').dataset.busy==='false',null,{timeout:8500});
  await page.getByRole('button',{name:"Réduire l'animation"}).click();
  assert.equal(await hero.getAttribute('data-motion'),'off');
  await page.getByRole('button',{name:"Activer l'animation"}).click();
  assert.equal(await hero.getAttribute('data-motion'),'on');
  await page.getByRole('button',{name:'Masquer'}).click();
  assert.equal(await hero.evaluate(el=>el.hidden),true);
  await page.getByRole('button',{name:'Afficher Christophe'}).click();
  assert.equal(await hero.evaluate(el=>el.hidden),false);
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.waitForTimeout(160);
  await page.screenshot({path:path.join(evidence,route.label.toLowerCase().replace('é','e')+'-'+width+'.png'),fullPage:true});
  report.push({route:route.path,width,...metrics});
  console.log('G3.3 MENU CHROME OK',route.label,width,'px',metrics.menuLinks,'links preserved');
 }catch(e){
  await page.screenshot({path:path.join(evidence,'failure-'+route.path.split('/').pop()+'-'+width+'.png'),fullPage:true}).catch(()=>{});
  throw e;
 }finally {await page.close()}
}
async function reduced(browser) {
 const p=await browser.newPage({viewport:{width:375,height:820},reducedMotion:'reduce'});
 try {
  await p.goto(base+'/Menus/MenuSecondeEquations.html',{waitUntil:'domcontentloaded'});
  await p.waitForFunction(()=>Boolean(window.DesumathsHero&&window.DesumathsHero.instance));
  assert.equal(await p.locator('#hero-compagnon').getAttribute('data-motion'),'off');
  assert.equal(await p.locator('.hero-compagnon-sprite').evaluate(el=>getComputedStyle(el).animationName),'none');
  await p.getByRole('button',{name:'Un conseil'}).click();
  assert.match(await p.locator('[data-hero-message]').textContent(),/forme de l'équation/i);
  console.log('G3.3 MENU REDUCED MOTION OK');
 }finally{await p.close()}
}
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 try {
  for(const route of routes){for(const width of [375,768,1280]) await inspect(browser,route,width);}
  await reduced(browser);
 }finally{await browser.close()}
 fs.writeFileSync(path.join(evidence,'metrics.json'),JSON.stringify(report,null,2));
 console.log('G3.3 MENU REAL BROWSER TESTS: SUCCESS');
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
