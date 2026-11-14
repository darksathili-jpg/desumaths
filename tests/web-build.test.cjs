"use strict";
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),output=path.join(root,'dist/web');
const source=path.join(root,'renderer');
const {execFileSync}=require('node:child_process');
execFileSync(process.execPath,[path.join(root,'scripts/build-web.cjs')],{stdio:'pipe'});
test('web build carries original style and menus intact',()=>{
for(const file of ['index.html','StylesIndex.css','script-index.js','Menus/StyleMenus.css','Menus/rendu-menu.js','Serveur Latex/compilateur.js']) {
 assert.equal(fs.existsSync(path.join(output,file)),true,file);
 if(file!=='index.html')assert.deepEqual(fs.readFileSync(path.join(output,file)),fs.readFileSync(path.join(source,file)));
}
});
test('PWA manifest uses relative start url and scoped path',()=>{
const m=JSON.parse(fs.readFileSync(path.join(output,'manifest.webmanifest')));
assert.equal(m.start_url,'./index.html');assert.equal(m.scope,'./');
assert.match(fs.readFileSync(path.join(output,'index.html'),'utf8'),/rel="manifest"/);
});
test('web bundle excludes privileged Electron modules',()=>{
for(const f of ['main.cjs','preload.cjs','texlive.cjs'])assert.equal(fs.existsSync(path.join(output,'electron',f)),false);
});
test('web build carries real exercise pages',()=>{
assert.ok(fs.readdirSync(path.join(output,'2nde'),{recursive:true}).length>10);
});


test('legacy exercises gain common responsive styling without modifying historical sources or scripts',()=>{
  const report=JSON.parse(fs.readFileSync(path.join(output,'legacy-modernization-report.json'),'utf8'));
  assert.ok(report.styled_exercises>=20,'too few historical exercises restyled');
  assert.equal(report.files.length,report.styled_exercises);
  assert.equal(report.source_files_untouched,true);
  for(const relative of report.files) {
    const modern=fs.readFileSync(path.join(output,relative),'utf8');
    const original=fs.readFileSync(path.join(source,relative),'utf8');
    assert.match(modern,/<body class="dm-vintage">/);
    assert.match(modern,/href="[^"]*StylesLegacy\.css\?v=20261114-fix3"/);
    const cssLink=modern.match(/href="([^"]*StylesLegacy\.css)\?v=20261114-fix3"/)[1];
    assert.ok(fs.existsSync(path.resolve(path.dirname(path.join(output,relative)),cssLink)),relative);
    const scripts=txt=>Array.from(txt.matchAll(/<script[^>]+src=["']([^"']+)["']/g),m=>m[1]);
    assert.deepEqual(scripts(modern),scripts(original),'script references changed: '+relative);
    assert.ok(!original.includes('class="dm-vintage"'),'original HTML has been modified: '+relative);
  }
  for(const name of ['1ST/Fonctions/Fonctions degre 2/Sommet/Degre2Sommet.html',
    '2nde/Equations/Equationsdegre1/Equationsdegre1.html']) {
    assert.equal(fs.readFileSync(path.join(output,name),'utf8'),fs.readFileSync(path.join(source,name),'utf8'),
      'Modern native page should not be restyled: '+name);
  }
});

test('review page links to every restyled historical exercise',()=>{
  const report=JSON.parse(fs.readFileSync(path.join(output,'legacy-modernization-report.json'),'utf8'));
  const page=fs.readFileSync(path.join(output,'verification-refonte.html'),'utf8');
  assert.match(page,/Vérification de la refonte/);
  assert.equal((page.match(/class="review-link"/g)||[]).length,report.styled_exercises);
  for(const original of report.files) {
    const url=original.split('/').map(encodeURIComponent).join('/');
    assert.ok(page.includes('href="'+url+'"'),'Missing review link for '+original);
  }
});

test('legacy template removes image badges and typesets LaTeX after deferred generators',()=>{
  const css=fs.readFileSync(path.join(output,'StylesLegacy.css'),'utf8');
  assert.match(css,/button\.btn::before/);
  assert.match(css,/text-shadow:none!important/);
  assert.match(css,/content:none!important/);
  const pageName='Tale Spe/Equations differentielles/EquasDiffs/EquasDiffs.html';
  const built=fs.readFileSync(path.join(output,pageName),'utf8');
  const sourceHtml=fs.readFileSync(path.join(source,pageName),'utf8');
  assert.match(built,/window\.addEventListener\("load"/);
  assert.match(built,/math\.Hub\.Queue\(\["Typeset"/);
  assert.match(built,/id==="solutions"\?"solution":"correctiond"/);
  assert.match(built,/mathjax@3\.2\.2\/es5\/tex-chtml\.js/);
  assert.doesNotMatch(sourceHtml,/typesetPatch|dm-vintage/);
  assert.match(built,/ScriptEquasDiffs\.js/);
  const section=sourceHtml.match(/<div id='enonce'><\/div>/);
  assert.ok(section,'original mathematical exercise container must be retained');
});

test('MathJax fallback distinguishes inline and display delimiters',()=>{
  const code=fs.readFileSync(path.join(root,'scripts/modernize-legacy-web.cjs'),'utf8');
  assert.match(code,/String\.fromCharCode\(36,36\)/);
  const report=JSON.parse(fs.readFileSync(path.join(output,'legacy-modernization-report.json'),'utf8'));
  const page=fs.readFileSync(path.join(output,report.files[0]),'utf8');
  assert.match(page,/displayMath:\[\[String\.fromCharCode\(36,36\)/);
});
