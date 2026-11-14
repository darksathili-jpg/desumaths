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
    assert.match(modern,/href="[^"]*StylesLegacy\.css"/);
    const cssLink=modern.match(/href="([^"]*StylesLegacy\.css)"/)[1];
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
