"use strict";
const fs=require('node:fs');
const path=require('node:path');
const src=path.resolve(__dirname,'../renderer');
const dest=path.resolve(__dirname,'../dist/web');
if (!fs.existsSync(path.join(src,'index.html')) || !fs.existsSync(path.join(src,'Menus/rendu-menu.js'))) {
  console.error('BLOQUE : sources renderer absentes.');process.exit(1);
}
fs.rmSync(dest,{recursive:true,force:true});
fs.mkdirSync(dest,{recursive:true});
fs.cpSync(src,dest,{recursive:true,force:true});
fs.copyFileSync(path.resolve(__dirname,'../web/manifest.webmanifest'),path.join(dest,'manifest.webmanifest'));
const index=path.join(dest,'index.html');
let html=fs.readFileSync(index,'utf8');
if (!html.includes('rel="manifest"')) html=html.replace('</head>', '    <link rel="manifest" href="manifest.webmanifest">\n    <meta name="theme-color" content="#FAF6EE">\n    <meta name="apple-mobile-web-app-capable" content="yes">\n</head>');
fs.writeFileSync(index,html);
fs.writeFileSync(path.join(dest,'.nojekyll'),'');
console.log(`Site web prêt : ${dest}; copie exacte des pages de renderer, hors métadonnées PWA.`);
