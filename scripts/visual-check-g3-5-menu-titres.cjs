'use strict';
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const folder=path.join(root,'renderer/Menus');
const base=process.env.G35_BASE_URL||'http://127.0.0.1:8765';
const evidence=path.resolve(process.env.G35_EVIDENCE_DIR||'artifacts/g3-5-menu-titres');
fs.mkdirSync(evidence,{recursive:true});
const entries=fs.readdirSync(folder).filter(f=>/^data-Menu.+\.js$/.test(f)).sort().map(f=>{
 const source=fs.readFileSync(path.join(folder,f),'utf8');
 const menu=vm.runInNewContext(source+';MENU',{}, {timeout:1000});
 return {file:f.replace(/^data-/,'').replace(/\.js$/,'')+'.html', title:menu.titre};
});
const snapshots=new Set([
 'Menu1ST.html','Menu1STprobabilitesproportions.html','Menu1STfonctionsdegre2.html',
 'MenuTSTProbasConditionnelles.html','MenuSecondeMilieuLongueur.html','MenuTaleEquasdiffs.html'
]);
const results=[];
async function inspect(page,menu,width,capture){
 const errors=[];
 const listener=e=>errors.push(e.message);
 page.on('pageerror',listener);
 try {
   const url=base+'/Menus/'+menu.file;
   const response=await page.goto(url,{waitUntil:'domcontentloaded',timeout:25000});
   assert.ok(response&&response.status()<400,menu.file+' not reachable');
   const heading=page.locator('#titre-menu');
   await heading.waitFor({state:'visible'});
   await page.waitForFunction(()=>document.querySelector('#titre-menu')?.textContent?.trim().length>0);
   const label=(await heading.textContent()).trim();
   assert.equal(label,menu.title,'Wrong heading '+menu.file);
   const pageTitle=await page.title();
   assert.ok(pageTitle.startsWith(menu.title+' —'),menu.file+' tab title is not normalized: '+pageTitle);
   const m=await page.evaluate(()=>{
     const el=document.querySelector('#titre-menu');
     const rect=el.getBoundingClientRect();
     const sections=document.querySelector('#sections')||document.querySelector('#themes');
     const sectionsRect=sections.getBoundingClientRect();
     return {viewportWidth:innerWidth,documentWidth:document.documentElement.scrollWidth,
       headingLeft:rect.left,headingRight:rect.right,headingBottom:rect.bottom,
       sectionsTop:sectionsRect.top,
       letters:el.textContent.length,
       fontSize:getComputedStyle(el).fontSize,
       links:sections.querySelectorAll('a').length};
   });
   assert.ok(m.documentWidth<=width+2,'Horizontal overflow '+menu.file+': '+JSON.stringify(m));
   assert.ok(m.headingLeft>=-2&&m.headingRight<=width+2,'Title offscreen '+menu.file+': '+JSON.stringify(m));
   assert.ok(m.headingBottom<=m.sectionsTop+4,'Title overlaps menu '+menu.file+': '+JSON.stringify(m));
   assert.deepEqual(errors,[],'JavaScript errors on '+menu.file);
   if(capture){
     await page.evaluate(()=>window.scrollTo(0,0));
     await page.waitForTimeout(110);
     const dest=path.join(evidence,menu.file.replace('.html','')+'-'+width+'.png');
     await page.screenshot({path:dest,fullPage:true});
   }
   results.push({file:menu.file,title:label,width,...m});
   console.log('G3.5 TITLE OK',width,menu.file,'- '+label);
 }finally{page.off('pageerror',listener)}
}
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 try {
  const page=await browser.newPage({viewport:{width:1280,height:900}});
  for(const e of entries) await inspect(page,e,1280,snapshots.has(e.file));
  await page.close();
  const mobile=await browser.newPage({viewport:{width:375,height:900}});
  for(const e of entries) await inspect(mobile,e,375,snapshots.has(e.file));
  await mobile.close();
  fs.writeFileSync(path.join(evidence,'all-menu-metrics.json'),JSON.stringify(results,null,2));
  assert.equal(entries.length,41);
  assert.equal(results.length,82);
  console.log('G3.5 MENU TITLES: 41 PAGES × 2 SIZES = 82 CHROME CHECKS SUCCESS');
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1;});
