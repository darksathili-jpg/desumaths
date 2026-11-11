import { latex } from './latex.js';
import { latexWeb } from './latex-web-exemple.js';

const editor = document.getElementById('latex-source');
const compileBtn = document.getElementById('compilebtn');
const resetBtn = document.getElementById('resetbtn');
const webBtn = document.getElementById('exemple-web');
const historiqueBtn = document.getElementById('exemple-historique');
const consoleOutput = document.getElementById('console');
const pdfFrame = document.getElementById('pdfbox');
const downloadBtn = document.getElementById('downloadbtn');
const status = document.getElementById('etat');
const info = document.getElementById('compatibilite');
const nativeTex = Boolean(window.desumathsTeX?.compile);
const engine = nativeTex ? null : new PdfTeXEngine();
const defaultSource = nativeTex ? latex : latexWeb;
let currentUrl = null;
let compilation = false;
let failure = false;

editor.value = defaultSource;
const showStatus = message => { status.textContent = message; };
const showLog = message => { consoleOutput.textContent = String(message || ''); };
function releasePreviousPdf() {
  downloadBtn.hidden = true;
  downloadBtn.removeAttribute('href');
  pdfFrame.removeAttribute('src');
  if (currentUrl) { URL.revokeObjectURL(currentUrl); currentUrl = null; }
}
function selectSample(source, note) {
  if (compilation) return;
  editor.value = source;
  releasePreviousPdf();
  showLog('');
  showStatus(note);
}
resetBtn.addEventListener('click', () => selectSample(defaultSource, 'Exemple de démarrage rétabli.'));
if (webBtn) webBtn.addEventListener('click', () => selectSample(latexWeb, 'Exemple compatible avec le compilateur Web chargé.'));
if (historiqueBtn) historiqueBtn.addEventListener('click', () => {
  selectSample(latex, nativeTex
    ? 'Source historique complète. TeX Live natif permet de tester ses extensions.'
    : 'Source historique chargée. Attention : TikZ, PSTricks et certaines extensions ne sont pas disponibles dans ce moteur Web.');
});

async function withTimeout(promise, ms, label) {
  let timer;
  try {
    return await Promise.race([
      promise,
      new Promise((_, reject) => {timer = setTimeout(() => reject(new Error(label)), ms);})
    ]);
  } finally {clearTimeout(timer);}
}
async function initialize() {
  compileBtn.disabled = true;
  try {
    if (!nativeTex) {
      showStatus('Chargement du moteur PDFLaTeX local au site…');
      await withTimeout(engine.loadEngine(), 30000, 'Délai de chargement dépassé. Actualiser la page.');
      // We serve TeX packages from our own GitHub Pages origin (not SwiftLaTeX's outage-prone mirror).
      engine.setTexliveEndpoint(new URL('../texlive/', window.location.href).href);
    }
    if (info) info.textContent = nativeTex
      ? 'Electron : TeX Live installé sur votre ordinateur. Le modèle historique complet reste accessible.'
      : 'Web : PDFLaTeX fonctionne dans ce navigateur. Les fichiers TeX sont hébergés avec Desumaths ; aucun document n’est envoyé à un serveur de compilation. TikZ/PSTricks restent non pris en charge.';
    compileBtn.disabled = false;
    compileBtn.textContent = 'Compiler le document';
    showStatus(nativeTex
      ? 'TeX Live natif prêt.'
      : 'Moteur Web prêt. Le premier PDF peut nécessiter le chargement du format et des polices.');
  } catch(err) {
    failure = true;
    if (!nativeTex) engine.closeWorker();
    compileBtn.textContent = 'Moteur indisponible';
    showStatus('Le compilateur n’a pas démarré : ' + String(err?.message || err));
  }
}
async function compile() {
  if (compilation || failure || (!nativeTex && !engine.isReady())) {
    showStatus(failure ? 'Moteur arrêté. Actualiser cette page pour réessayer.' : 'Compilateur non prêt.');
    return;
  }
  const size = new TextEncoder().encode(editor.value).length;
  if (!size || size > 512 * 1024) {
    showStatus('Le document doit contenir du code LaTeX et ne pas dépasser 512 Kio.');
    return;
  }
  compilation = true;
  compileBtn.disabled = true;
  compileBtn.textContent = 'Compilation en cours…';
  showStatus(nativeTex ? 'Compilation locale par TeX Live…' : 'Production du PDF dans le navigateur…');
  showLog('');
  releasePreviousPdf(); // No stale PDF from a previous compilation.
  try {
    let result;
    if (nativeTex) {
      const nativeResult = await window.desumathsTeX.compile(editor.value);
      let pdf = null;
      if (nativeResult?.pdf) {
        const binary = atob(nativeResult.pdf);
        pdf = Uint8Array.from(binary, ch => ch.charCodeAt(0));
      }
      result = {status:nativeResult?.status === 'ok' ? 0 : 1,log:nativeResult?.log || '',pdf,reason:nativeResult?.status};
    } else {
      engine.flushCache();
      engine.writeMemFSFile('main.tex', editor.value);
      engine.setEngineMainFile('main.tex');
      result = await withTimeout(engine.compileLaTeX(), 120000, 'Compilation trop longue (120 secondes). Recharger la page.');
    }
    showLog(result.log || '');
    const pdf = result.pdf;
    const validPdf = pdf && pdf.length > 5 &&
      String.fromCharCode(...pdf.slice(0,5)) === '%PDF-';
    if (result.status !== 0 || !validPdf) {
      const diagnostics = {
        busy:'Une compilation est déjà en cours.',
        timeout:'Délai de compilation dépassé.',
        unavailable:'TeX Live natif est introuvable.',
        invalid:'Document invalide ou trop volumineux.',
        forbidden:'Autorisation de compilation refusée.'
      };
      showStatus(diagnostics[result.reason] || 'Échec de compilation : lire le journal. Un package ou une commande peut être absent du moteur Web.');
      return;
    }
    const blob = new Blob([pdf],{type:'application/pdf'});
    currentUrl = URL.createObjectURL(blob);
    pdfFrame.src = currentUrl;
    downloadBtn.href = currentUrl;
    downloadBtn.hidden = false;
    showStatus('PDF créé avec succès (' + Math.ceil(blob.size / 1024) + ' Ko).');
  } catch (err) {
    const msg = String(err?.message || err);
    showStatus('Erreur du compilateur : ' + msg);
    showLog(String(err?.stack || err));
    if (/120 secondes|trop longue/i.test(msg)) {
      failure = true;
      if (!nativeTex) engine.closeWorker();
    }
  } finally {
    compilation = false;
    compileBtn.disabled = failure || (!nativeTex && !engine.isReady());
    compileBtn.textContent = failure ? 'Actualiser pour réessayer' : 'Compiler le document';
  }
}
compileBtn.addEventListener('click', compile);
window.addEventListener('beforeunload', () => {
  releasePreviousPdf();
  if (!nativeTex) engine.closeWorker();
});
initialize();
