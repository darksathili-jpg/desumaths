'use strict';
/* G4.1: verifies the Seconde -> TikZ paths in a real browser. */
const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const base=(process.env.G41_BASE_URL || 'http://127.0.0.1:8765').replace(/\/$/,'');
const output=path.resolve(process.env.G41_EVIDENCE_DIR || 'artifacts/g4-1-seconde');
fs.mkdirSync(output,{recursive:true});
const scenarios=[
  {label:'variations',id:'variations'},
  {label:'parabole',id:'courbe'}
];

async function inspect(browser,width){
  const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
  const pageErrors=[];
  page.on('pageerror',error=>pageErrors.push(error.message));
  const observations={width,menu:{},figures:[]};
  try{
    const response=await page.goto(base+'/Menus/MenuSeconde.html',{waitUntil:'domcontentloaded',timeout:30000});
    assert.equal(response?.status(),200,'Menu Seconde inaccessible');
    await page.locator('#themes a').first().waitFor({state:'visible'});
    const menu=await page.evaluate(()=>{
      const section=document.querySelector('.g41-figures');
      const box=section?.getBoundingClientRect();
      return {title:document.querySelector('#titre-menu')?.textContent?.trim(),
        documentWidth:document.documentElement.scrollWidth,
        links:document.querySelectorAll('#themes a').length,
        x:box?.x,width:box?.width,sectionVisible:!!section};
    });
    assert.equal(menu.title,'Seconde');
    assert.ok(menu.links>=10,'Liste des thèmes originaux manquante');
    assert.ok(menu.sectionVisible,'Passerelle G4.1 absente');
    assert.ok(menu.documentWidth<=width+2,'Débordement horizontal menu');
    assert.ok(menu.x>=-2 && menu.x+menu.width<=width+2,'Passerelle hors écran');
    observations.menu=menu;
    // G4.1-R5 : le HTML peut etre recent tandis que StyleMenus.css reste en cache.
    // Refuser un bloc laboratoire sans fond, bordure ni vrais boutons.
    const graphicStyle=await page.evaluate(()=>{
      const section=document.querySelector('.g41-figures');
      const button=document.querySelector('.g41-links a');
      const panel=getComputedStyle(section);
      const link=getComputedStyle(button);
      const rect=button.getBoundingClientRect();
      return {background:panel.backgroundColor,border:panel.borderLeftWidth,
        display:link.display,buttonBackground:link.backgroundColor,
        buttonHeight:rect.height,stylesheet:[...document.styleSheets].some(s=>
          s.href?.includes('StyleMenus.css?v=g41-r5'))};
    });
    assert.ok(graphicStyle.stylesheet,'Version CSS G4.1 non chargee');
    assert.ok(parseFloat(graphicStyle.border)>=4,'Bordure du laboratoire absente');
    assert.equal(graphicStyle.display,'inline-flex','Liens du laboratoire sans style');
    assert.ok(graphicStyle.buttonHeight>=40,'Boutons du laboratoire trop petits');
    assert.notEqual(graphicStyle.buttonBackground,'rgba(0, 0, 0, 0)','Boutons sans fond');
    observations.graphicStyle=graphicStyle;
    await page.screenshot({path:path.join(output,'seconde-'+width+'.png'),fullPage:true});
    // Regression : un theme historique doit toujours rester accessible.
    const legacy=page.locator('#themes a[href*="MenuSecondeFonctions.html"]');
    assert.equal(await legacy.count(),1,'Lien historique Fonctions absent');
    await legacy.click();
    await page.waitForURL(/\/Menus\/MenuSecondeFonctions\.html$/,{timeout:30000});
    const legacyHeading=page.locator('#titre-menu');
    await legacyHeading.waitFor({state:'visible'});
    assert.ok((await legacyHeading.textContent()).trim().length>0,'Titre du theme historique vide');
    observations.historicalFunctionRoute=page.url();
    for(const scenario of scenarios){
      await page.goto(base+'/Menus/MenuSeconde.html',{waitUntil:'domcontentloaded'});
      await page.locator('#themes a').first().waitFor({state:'visible'});
      const link=page.locator('.g41-links a[href$="#'+scenario.id+'"]');
      assert.equal(await link.count(),1,'Lien manquant '+scenario.id);
      await link.click();
      await page.waitForURL(new RegExp('/Laboratoire/FiguresTikZ/index\\.html#'+scenario.id+'$'),{timeout:30000});
      const card=page.locator('#'+scenario.id);
      await card.waitFor({state:'visible'});
      await page.waitForFunction(id=>{
        const article=document.getElementById(id);
        return article?.dataset.status==='ok' || article?.dataset.status==='error';
      },scenario.id,{timeout:170000});
      assert.equal(await card.getAttribute('data-status'),'ok','TikZ échoué : '+scenario.id);
      const metrics=await card.evaluate(el=>{
        const svg=el.querySelector('svg.tikzjax');
        if(!svg)return {error:'SVG absent'};
        const rect=svg.getBoundingClientRect(),draw=svg.getBBox();
        const article=el.getBoundingClientRect();
        return {width:rect.width,height:rect.height,
          drawingWidth:draw.width,drawingHeight:draw.height,
          title:svg.querySelector('title')?.textContent,
          articleTop:article.top,articleBottom:article.bottom,
          documentWidth:document.documentElement.scrollWidth,
          url:location.href};
      });
      assert.ok(metrics.width>80 && metrics.height>60,'Figure invisible : '+scenario.id);
      assert.ok(metrics.drawingWidth>20 && metrics.drawingHeight>20,'Figure vide : '+scenario.id);
      assert.ok(metrics.title?.length>12,'Titre accessible manquant : '+scenario.id);
      assert.ok(metrics.documentWidth<=width+2,'Débordement laboratoire '+scenario.id);
      // Hash navigation must place the target near the visible viewport.
      assert.ok(metrics.articleTop<900 && metrics.articleBottom>0,'Ancre non atteinte '+scenario.id);
      observations.figures.push({id:scenario.id,...metrics});
      await page.screenshot({path:path.join(output,scenario.label+'-'+width+'.png'),fullPage:true});
    }
    assert.deepEqual(pageErrors,[],'Erreurs JavaScript : '+pageErrors.join('; '));
    fs.writeFileSync(path.join(output,'result-'+width+'.json'),JSON.stringify(observations,null,2));
    console.log('G4.1 OK',width,'px',observations.figures.map(f=>f.id).join(', '));
  }catch(error){
    fs.writeFileSync(path.join(output,'failure-'+width+'.json'),
      JSON.stringify({message:String(error),pageErrors,observations},null,2));
    await page.screenshot({path:path.join(output,'failure-'+width+'.png'),fullPage:true}).catch(()=>{});
    throw error;
  }finally{await page.close();}
}

(async()=>{
  const browser=await chromium.launch({channel:'chrome',headless:true});
  try{
    await inspect(browser,375);
    await inspect(browser,1280);
    console.log('G4.1 : 2 figures × 2 largeurs, navigation réelle vérifiée');
  }finally{await browser.close();}
})().catch(err=>{console.error(err.stack||err);process.exitCode=1;});
