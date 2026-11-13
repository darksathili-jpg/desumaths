'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const base=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(base,p),'utf8');

test('G4.2: Premiere topic keeps original resources and adds dedicated page',()=>{
 const menu=read('renderer/Menus/Menu1STfonctionsdegre2.html');
 const data=read('renderer/Menus/data-Menu1STfonctionsdegre2.js');
 assert.match(menu,/data-Menu1STfonctionsdegre2\.js/);
 assert.match(menu,/id="sections"/);
 assert.match(menu,/StyleMenus\.css\?v=g42-p1/);
 assert.match(menu,/href="\.\.\/Laboratoire\/FiguresTikZ\/premiere-degre2\.html"/);
 assert.match(data,/Degre2FormeFactorisee\.html/);
 assert.match(data,/Degre2Sommet\.html/);
 assert.match(data,/EqsDegre2\.html/);
});

test('G4.2: dedicated page presents one real TikZ curve and a correct quadratic task',()=>{
 const page=read('renderer/Laboratoire/FiguresTikZ/premiere-degre2.html');
 assert.equal((page.match(/data-tikz-example="courbe"/g)||[]).length,1);
 assert.doesNotMatch(page,/data-tikz-example="variations"/);
 assert.match(page,/\\begin\{axis\}/);
 assert.match(page,/\{x\*x-4\}/);
 assert.match(page,/Les racines sont −2 et 2 car f\(x\) = \(x − 2\)\(x \+ 2\)/);
 assert.match(page,/sommet est S\(0 ; −4\)/);
 assert.match(page,/<details class="g41-activity-answer">/);
 assert.match(page,/href="\.\.\/\.\.\/Menus\/Menu1STfonctionsdegre2\.html"/);
 assert.match(page,/figures-tikz\.js/);
 assert.match(page,/tikzjax\.js/);
});

test('G4.2: exported website includes both old lesson and new lesson',()=>{
 const root=path.join(base,'dist/web');
 if(!fs.existsSync(root))return;
 assert.ok(fs.existsSync(path.join(root,'Menus/Menu1STfonctionsdegre2.html')));
 const page=fs.readFileSync(path.join(root,'Laboratoire/FiguresTikZ/premiere-degre2.html'),'utf8');
 assert.match(page,/Relier graphique et calcul/);
});

test('G4.2: Chromium script syntax is valid and publication stays isolated',()=>{
 const {spawnSync}=require('node:child_process');
 const scriptPath=path.join(base,'scripts/visual-check-g4-2-premiere.cjs');
 const status=spawnSync(process.execPath,['--check',scriptPath],{encoding:'utf8'});
 assert.equal(status.status,0,'Syntaxe Chromium invalide: '+status.stderr);
 const script=read('scripts/visual-check-g4-2-premiere.cjs');
 const workflow=read('.github/workflows/g4-2-premiere.yml');
 assert.match(script,/premiere-degre2\.html/);
 assert.match(script,/getBBox\(\)/);
 assert.match(script,/g41-activity-answer/);
 assert.match(workflow,/node scripts\/visual-check-g4-2-premiere\.cjs/);
 assert.match(workflow,/node scripts\/visual-check-g4-1-seconde\.cjs/);
 assert.match(workflow,/node scripts\/visual-check-g4-tikz\.cjs/);
 assert.match(workflow,/desumaths-g4-2-premiere-preuves/);
 assert.doesNotMatch(workflow,/actions\/deploy-pages|pages: write|actions\/upload-pages-artifact/);
});
