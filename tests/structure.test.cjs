const test=require('node:test'), assert=require('node:assert/strict'), fs=require('node:fs'),path=require('node:path');
const base=path.join(__dirname,'../renderer');
for(const item of ['index.html','StylesIndex.css','script-index.js','Menus/rendu-menu.js','Menus/StyleMenus.css','Menus/MenuSeconde.html','Serveur Latex/PdfTeXEngine.js','Serveur Latex/swiftlatexpdftex.wasm'])test(item+' exists',()=>assert.ok(fs.existsSync(path.join(base,item))));
const s=fs.readFileSync(path.join(base,'index.html'),'utf8');test('original design intact',()=>{assert.match(s,/Penser\./);assert.match(s,/StylesIndex\.css/);});
