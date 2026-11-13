"use strict";
const {contextBridge,ipcRenderer} = require('electron');
contextBridge.exposeInMainWorld('desumathsTeX', Object.freeze({
  compile: source => ipcRenderer.invoke('desumaths:compile-tex', source)
}));
