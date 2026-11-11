'use strict';
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const target=process.env.G3_BASE_URL || 'http://127.0.0.1:8765';
const evidence=path.resolve(process.env.G3_EVIDENCE_DIR || 'artifacts/g3-hero');
fs.mkdirSync(evidence,{recursive:true});
const sizes=[375,540,768,1280,1600];
const report=[];

async function examine(browser,width) {
  const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  try{
    await page.goto(target+'/',{waitUntil:'domcontentloaded',timeout:30000});
    await page.locator('#hero-compagnon[data-initialise="true"],#hero-compagnon').waitFor();
    await page.waitForFunction(()=>!!(window.DesumathsHero && window.DesumathsHero.instance),null,{timeout:12000});
    const image=await page.locator('.hero-compagnon-sprite').evaluate(async el=>{
      const style=getComputedStyle(el);
      const url=style.backgroundImage.match(/url\(["']?(.+?)["']?\)/)?.[1];
      if(!url)return {loaded:false,style:style.backgroundImage};
      const pic=new Image();pic.src=url;
      try{await pic.decode();return {loaded:true,width:pic.naturalWidth,height:pic.naturalHeight,url};}
      catch(e){return {loaded:false,error:String(e),url};}
    });
    assert.ok(image.loaded,'Sprite invisible: '+JSON.stringify(image));
    assert.equal(image.width,256,'Sprite width');
    assert.equal(image.height,128,'Sprite height');
    const metrics=await page.evaluate(()=>{
      const rect=e=>{const r=document.querySelector(e).getBoundingClientRect();return {x:r.x,y:r.y,left:r.left,right:r.right,top:r.top,bottom:r.bottom,width:r.width,height:r.height};};
      return {
        pageWidth:document.documentElement.scrollWidth,
        screenWidth:innerWidth,
        frame:rect('.hero-compagnon-sprite'),
        compagnon:rect('.hero-compagnon'),
        bubble:rect('.hero-bulle'),
        demo:rect('.carte-demo'),
        button:rect('.bouton-principal'),
        pages:document.querySelectorAll('.grille-niveaux .cahier').length,
      };
    });
    assert.deepEqual(errors,[],'Javascript error');
    assert.ok(metrics.pageWidth<=width+2,'Global horizontal overflow: '+JSON.stringify(metrics));
    assert.ok(metrics.bubble.left>=-2&&metrics.bubble.right<=width+2,'Bubble offscreen: '+JSON.stringify(metrics));
    assert.ok(metrics.frame.width>0&&metrics.frame.height>0,'Sprite has no visible dimensions');
    if (width <= 440) assert.ok(metrics.frame.height>=160, 'Companion too small on phone');
    assert.ok(metrics.demo.bottom <= metrics.compagnon.top+2,'Sprite overlays the live exercise');
    assert.ok(metrics.pages===3,'The historical three-level navigation is missing');
    const companion=page.locator('#hero-compagnon');
    await page.waitForTimeout(1350);
    assert.equal(await companion.getAttribute('data-pose'),'idle');
    await page.getByRole('button',{name:'Me saluer'}).click();
    assert.equal(await companion.getAttribute('data-pose'),'welcome');
    await page.waitForTimeout(1200);
    assert.equal(await companion.getAttribute('data-pose'),'idle');
    await page.getByRole('button',{name:"Réduire l'animation"}).click();
    assert.equal(await companion.getAttribute('data-motion'),'off');
    await page.getByRole('button',{name:"Activer l'animation"}).click();
    assert.equal(await companion.getAttribute('data-motion'),'on');
    await page.getByRole('button',{name:'Masquer'}).click();
    assert.ok(await companion.evaluate(el=>el.hidden),'Hero could not be hidden');
    await page.getByRole('button',{name:'Afficher Christophe, mon guide'}).click();
    assert.ok(!(await companion.evaluate(el=>el.hidden)),'Hero could not be restored');
    await page.evaluate(() => window.scrollTo(0,0));
    await page.waitForTimeout(120);
    await page.screenshot({path:path.join(evidence,'g3-hero-'+width+'.png'),fullPage:true});
    report.push({width,...metrics,imageWidth:image.width,imageHeight:image.height});
    console.log('G3 HERO VISUAL OK',width,'px; asset loaded; controls working; no overflow');
  }catch(e){
    await page.screenshot({path:path.join(evidence,'g3-hero-'+width+'-failure.png'),fullPage:true}).catch(()=>{});
    throw e;
  }finally{await page.close()}
}
async function reduced(browser){
  const p=await browser.newPage({viewport:{width:375,height:850},reducedMotion:'reduce'});
  try{
    await p.goto(target+'/',{waitUntil:'domcontentloaded'});
    await p.waitForFunction(()=>!!(window.DesumathsHero&&window.DesumathsHero.instance));
    assert.equal(await p.locator('#hero-compagnon').getAttribute('data-motion'),'off');
    assert.equal(await p.locator('#hero-compagnon').getAttribute('data-pose'),'idle');
    const animation=await p.locator('.hero-compagnon-sprite').evaluate(el=>getComputedStyle(el).animationName);
    assert.equal(animation,'none','Reduced motion animation not disabled');
    console.log('G3 HERO REDUCED-MOTION OK');
  }finally{await p.close()}
}
(async()=>{
  const browser=await chromium.launch({channel:'chrome',headless:true});
  try{for(const w of sizes)await examine(browser,w);await reduced(browser);}
  finally{await browser.close()}
  fs.writeFileSync(path.join(evidence,'metrics.json'),JSON.stringify(report,null,2));
  console.log('G3 HERO BROWSER TESTS: SUCCESS');
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
