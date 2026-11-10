'use strict';
const {app,BrowserWindow,shell,ipcMain} = require('electron');
const {runPdfLatex} = require('./texlive.cjs');
const path = require('node:path');
const fs = require('node:fs');
const {fileURLToPath} = require('node:url');
const webRoot = path.resolve(__dirname,'../renderer');
function isLocal(url) {
  try {const u=new URL(url); if(u.protocol!=='file:')return false;
    const file=path.resolve(fileURLToPath(u));
    return (file===webRoot || file.startsWith(webRoot+path.sep)) && fs.existsSync(file);
  } catch{return false;}
}
function openExternally(url) {
  try {const u=new URL(url);if(['https:','mailto:'].includes(u.protocol))shell.openExternal(url);
    else if(isLocal(url) && u.pathname.toLowerCase().endsWith('.pdf'))shell.openPath(fileURLToPath(u));
  } catch { /* reject malformed URL */ }
}
function createWindow(){const win=new BrowserWindow({width:1440,height:960,minWidth:860,minHeight:600,
  title:'Desumaths',webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true,webSecurity:true,preload:path.join(__dirname,'preload.cjs')}});
  win.webContents.setWindowOpenHandler(({url})=>{openExternally(url);return {action:'deny'};});
  win.webContents.on('will-navigate',(event,url)=>{if(!isLocal(url)){event.preventDefault();openExternally(url);}});
  win.loadFile(path.join(webRoot,'index.html'));
}
let compilationActive = false;
app.whenReady().then(()=>{
  ipcMain.handle('desumaths:compile-tex',async(event,source)=>{
    const senderURL=event.senderFrame?.url;
    const expected=path.resolve(webRoot,'Serveur Latex','latex_javascript.html');
    let authorized=false;
    try {authorized=new URL(senderURL).protocol==='file:' && path.resolve(fileURLToPath(senderURL))===expected;} catch {}
    if(!authorized) return {status:'forbidden',log:'Accès à la compilation refusé.'};
    if(compilationActive) return {status:'busy',log:'Une compilation est déjà en cours. Réessayer après sa fin.'};
    compilationActive = true;
    try {return await runPdfLatex(source);}
    catch(error) {return {status:'failed',log:'Erreur de compilation : '+String(error)};}
    finally {compilationActive = false;}
  });
  createWindow();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow();});});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit();});
