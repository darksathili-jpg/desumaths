'use strict';
/* G4.2 : Chromium acceptance of the actual Premiere -> quadratic lesson. */
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const base=(process.env.G42_BASE_URL||'http://127.0.0.1:8765').replace(/\/$/,'');
const output=path.resolve(process.env.G42_EVIDENCE_DIR||'artifacts/g4-2-premiere');
fs.mkdirSync(output,{recursive:true});

async function inspect(browser,width){
  const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  try{
    let response=await page.goto(base+'/Menus/Menu1STfonctionsdegre2.html',{waitUntil:'domcontentloaded',timeout:30000});
    assert.equal(response?.status(),200,'Menu Première inaccessible');
    await page.locator('#sections a').first().waitFor({state:'visible'});
    const oldCount=await page.locator('#sections a').count();
    assert.ok(oldCount>=8,'Liens des exercices historiques absents');
    assert.match((await page.locator('#titre-menu').textContent())||'',/Fonctions de degré 2/);
    const gateway=page.locator('.g41-figures');
    assert.equal(await gateway.count(),1);
    const style=await gateway.evaluate(el=>{
      const link=el.querySelector('.g41-links a'),panel=getComputedStyle(el),button=getComputedStyle(link);
      const rect=link.getBoundingClientRect();
      return {border:parseFloat(panel.borderLeftWidth),buttonBackground:button.backgroundColor,
        display:button.display,buttonHeight:rect.height,
        pageWidth:document.documentElement.scrollWidth};
    });
    assert.ok(style.border>=4,'Encadrement du laboratoire non stylisé');
    assert.ok(style.buttonHeight>=40,'Bouton pédagogique trop petit');
    assert.ok(['flex','inline-flex'].includes(style.display),'Bouton non stylisé');
    assert.notEqual(style.buttonBackground,'rgba(0, 0, 0, 0)');
    assert.ok(style.pageWidth<=width+2,'Débordement du menu Première');
    await page.screenshot({path:path.join(output,'menu-'+width+'.png'),fullPage:true});
    await gateway.locator('a[href$="premiere-degre2.html"]').click();
    await page.waitForURL(url=>url.pathname.endsWith('/Laboratoire/FiguresTikZ/premiere-degre2.html'),{timeout:30000});
    assert.equal(await page.locator('[data-tikz-example]').count(),1);
    const activity=page.locator('.g41-activity');
    assert.equal(await activity.count(),1);
    const answer=activity.locator('details.g41-activity-answer');
    assert.ok(!(await answer.evaluate(el=>el.open)),'Solution affichée trop tôt');
    await answer.locator('summary').click();
    assert.ok(await answer.evaluate(el=>el.open),'Impossible de révéler le corrigé');
    assert.match(await answer.textContent(),/racines sont −2 et 2/);
    await page.waitForFunction(()=>{
      const el=document.querySelector('[data-tikz-example="courbe"]');
      return el?.dataset.status==='ok'||el?.dataset.status==='error';
    },null,{timeout:170000});
    const card=page.locator('[data-tikz-example="courbe"]');
    assert.equal(await card.getAttribute('data-status'),'ok','Figure TikZ non produite');
    const diagram=await card.evaluate(el=>{
      const svg=el.querySelector('svg.tikzjax');
      if(!svg)return null;
      const rect=svg.getBoundingClientRect(),bounds=svg.getBBox();
      return {width:rect.width,height:rect.height,
        drawingWidth:bounds.width,drawingHeight:bounds.height,
        shapes:svg.querySelectorAll('path,line,rect,circle,text,polyline,polygon').length,
        accessibleTitle:svg.querySelector('title')?.textContent||'',
        pageWidth:document.documentElement.scrollWidth};
    });
    assert.ok(diagram,'SVG manquant');
    assert.ok(diagram.width>80&&diagram.height>60,'SVG invisible');
    assert.ok(diagram.drawingWidth>20&&diagram.drawingHeight>20,'SVG sans courbe');
    assert.ok(diagram.shapes>5,'SVG sans géométrie');
    assert.ok(diagram.accessibleTitle.length>12,'Description de figure absente');
    assert.ok(diagram.pageWidth<=width+2,'Débordement horizontal');
    assert.equal(await page.locator('a[href="../../Menus/Menu1STfonctionsdegre2.html"]').count(),2);
    assert.deepEqual(errors,[],'Erreurs JavaScript');
    const result={width,oldCount,style,diagram,errors};
    fs.writeFileSync(path.join(output,'metrics-'+width+'.json'),JSON.stringify(result,null,2));
    await page.screenshot({path:path.join(output,'premiere-degre2-'+width+'.png'),fullPage:true});
    console.log('G4.2 PREMIERE CHROME OK',width,'px',oldCount,'historical links, valid SVG');
  }catch(e){
    fs.writeFileSync(path.join(output,'error-'+width+'.json'),JSON.stringify({error:String(e),errors},null,2));
    await page.screenshot({path:path.join(output,'failure-'+width+'.png'),fullPage:true}).catch(()=>{});
    throw e;
  }finally{await page.close();}
}
(async()=>{
  const browser=await chromium.launch({channel:'chrome',headless:true});
  try{
    await inspect(browser,375);
    await inspect(browser,1280);
  }finally{await browser.close();}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1;});
