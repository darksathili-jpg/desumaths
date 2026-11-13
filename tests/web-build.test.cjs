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
