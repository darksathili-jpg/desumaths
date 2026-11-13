"use strict";
const {spawn} = require('node:child_process');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const MAX_SOURCE_BYTES = 512 * 1024;
const MAX_LOG_CHARS = 150000;
const TIMEOUT_MS = 45000;

function texPath() {
  const configured = process.env.DESUMATHS_PDFLATEX;
  if (configured) return configured;
  if (process.platform === 'win32') return 'C:\\texlive\\2024\\bin\\windows\\pdflatex.exe';
  return 'pdflatex';
}
function runPdfLatex(source, options = {}) {
  if (typeof source !== 'string' || Buffer.byteLength(source, 'utf8') > MAX_SOURCE_BYTES) {
    return Promise.resolve({status: 'invalid', log:'Source LaTeX absente ou trop volumineuse (max. 512 Kio).'});
  }
  const binary = options.binary || texPath();
  const timeout = options.timeout || TIMEOUT_MS;
  return (async () => {
    const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'desumaths-tex-'));
    try {
      await fs.writeFile(path.join(temp, 'main.tex'), source, {encoding:'utf8',flag:'wx'});
      return await new Promise(resolve => {
        const args=['-no-shell-escape','-interaction=nonstopmode','-halt-on-error','-file-line-error','-output-directory',temp,'main.tex'];
        let output=''; let settled=false; let timedOut=false;
        let child;
        const finish = async (status, extra='')=>{
          if(settled)return; settled=true; clearTimeout(timer);
          const log=(output+'\n'+extra).slice(-MAX_LOG_CHARS);
          try {
            const bytes=await fs.readFile(path.join(temp,'main.pdf'));
            if(status==='ok' && bytes.length>=8 && bytes.subarray(0,5).toString()==='%PDF-' && bytes.length<=30*1024*1024)
              return resolve({status,log,pdf:bytes.toString('base64')});
          } catch {} 
          resolve({status:status==='ok'?'failed':status,log});
        };
        try {child=spawn(binary,args,{cwd:temp, shell:false,windowsHide:true,env:{...process.env,openin_any:'p',openout_any:'p',shell_escape:'f'},stdio:['ignore','pipe','pipe']});}
        catch(error){resolve({status:'unavailable',log:String(error)});return;}
        child.stdout.on('data',b=>{output=(output+b.toString()).slice(-MAX_LOG_CHARS)});
        child.stderr.on('data',b=>{output=(output+b.toString()).slice(-MAX_LOG_CHARS)});
        child.on('error',error=>{void finish('unavailable',String(error));});
        child.on('close',code=>{void finish(timedOut?'timeout':code===0?'ok':'failed','Code de sortie : '+code);});
        const timer=setTimeout(()=>{timedOut=true;child.kill();},timeout);
      });
    } finally {await fs.rm(temp,{recursive:true,force:true,maxRetries:3,retryDelay:200});}
  })();
}
module.exports={runPdfLatex,texPath,MAX_SOURCE_BYTES};
