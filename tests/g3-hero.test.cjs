'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const html=read('renderer/index.html');
const css=read('renderer/components/hero/hero.css');
const js=read('renderer/components/hero/hero.js');

test('G3.2 : les 12 poses viennent de la planche fournie, image conforme',()=>{
 const img=fs.readFileSync(path.join(root,'renderer/assets/mascotte/christophe-12-poses.avif'));
 assert.equal(img.subarray(4,12).toString('ascii'),'ftypavif');
 assert.equal(crypto.createHash('sha256').update(img).digest('hex'),'e4ed5383619b995aac1c5bc4a409f6c306dd6efb3914fb1c7dd81e692123310e');
 assert.ok(img.length<80000);
 assert.match(css,/background-size:300% 400%/);
});
test('G3.2 : les quatre directions ont chacune trois poses originales',()=>{
 for(const s of ['face: [0,1,2,1]','gauche: [3,4,5,4]','droite: [6,7,8,7]','dos: [9,10,11,10]'])assert.ok(js.includes(s),s);
 assert.match(js,/function marcher\(/);
 assert.match(js,/function tourner\(/);
 assert.match(js,/requestAnimationFrame|setTimeout/);
 assert.match(js,/function cancel\(/);
});
test('G3.2 : navigation Desumaths, pedagogie et vrais controles conserves',()=>{
 for(const id of ['hero-compagnon','demo-enonce','demo-solution'])assert.ok(html.includes('id="'+id+'"'));
 for(const hook of ['data-hero-walk','data-hero-turn','data-hero-motion','data-hero-hide','data-hero-return'])assert.ok(html.includes(hook),hook);
 for(const link of ['href="Menus/MenuSeconde.html"','href="#niveaux"','href="Menus/MenuTaleSpe.html"'])assert.ok(html.includes(link));
 assert.match(html,/components\/hero\/hero\.css/);
 assert.match(html,/components\/hero\/hero\.js/);
 assert.match(css,/position:relative/);
 assert.doesNotMatch(css,/position:\s*fixed/);
 assert.doesNotMatch(js,/innerHTML\s*=/);
 assert.match(js,/textContent=/);
});
test('G3.2 : animations reduites, accessibilite et performances',()=>{
 assert.match(css,/prefers-reduced-motion:reduce/);
 assert.match(js,/document\.hidden/);
 assert.match(js,/aria-pressed/);
 assert.match(js,/media\.matches/);
 assert.match(js,/chronos\.clear/);
 assert.match(js,/state\.busy/);
 assert.match(js,/state\.visible/);
});
