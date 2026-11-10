import { latex } from './latex.js';
const editor = document.getElementById('latex-source');
const compileBtn = document.getElementById('compilebtn');
const resetBtn = document.getElementById('resetbtn');
const consoleOutput = document.getElementById('console');
const pdfFrame = document.getElementById('pdfbox');
const downloadBtn = document.getElementById('downloadbtn');
const status = document.getElementById('etat');
let currentUrl = null;
editor.value = latex;
const nativeTex = Boolean(window.desumathsTeX?.compile);
const engine = nativeTex ? null : new PdfTeXEngine();
const showStatus = message => { status.textContent = message; };
function releasePreviousPdf() {
  downloadBtn.hidden = true;
  downloadBtn.removeAttribute('href');
  pdfFrame.removeAttribute('src');
  if (currentUrl) { URL.revokeObjectURL(currentUrl); currentUrl = null; }
}
resetBtn.addEventListener('click', () => { editor.value = latex; releasePreviousPdf(); consoleOutput.textContent = ''; showStatus('Exemple d’origine rétabli. Compiler pour obtenir un nouveau PDF.'); });
async function initialize() {
  try {
    if (!nativeTex) await engine.loadEngine();
    compileBtn.disabled = false;
    compileBtn.textContent = 'Compiler le document';
    showStatus(nativeTex ? 'TeX Live natif activé. Compilation locale avec pdflatex.' : 'SwiftLaTeX chargé. Certaines extensions TeX sont téléchargées à la demande.');
  } catch (err) {
    compileBtn.textContent = 'Compilateur indisponible';
    showStatus('Impossible de démarrer le moteur LaTeX : ' + String(err?.message || err));
  }
}
async function compile() {
  if (!nativeTex && !engine.isReady()) { showStatus('Compilateur non prêt.'); return; }
  compileBtn.disabled = true;
  compileBtn.textContent = 'Compilation en cours…';
  showStatus(nativeTex ? 'Compilation par TeX Live en cours…' : 'Compilation SwiftLaTeX en cours…');
  consoleOutput.textContent = '';
  releasePreviousPdf(); // Ne jamais présenter un ancien PDF comme résultat de la nouvelle compilation.
  try {
    let result;
    if (nativeTex) {
      const nativeResult = await window.desumathsTeX.compile(editor.value);
      let pdf = null;
      if (nativeResult?.pdf) {
        const binary = atob(nativeResult.pdf);
        pdf = Uint8Array.from(binary, ch => ch.charCodeAt(0));
      }
      result = {status:nativeResult?.status === 'ok' ? 0 : 1,log:nativeResult?.log || '',pdf, reason:nativeResult?.status};
    } else {
      engine.writeMemFSFile('main.tex', editor.value);
      engine.setEngineMainFile('main.tex');
      result = await engine.compileLaTeX();
    }
    consoleOutput.textContent = result.log || '';
    if (result.status !== 0 || !result.pdf) {
      const diagnostics = {busy:'Une compilation est déjà en cours.',timeout:'Temps maximal de compilation dépassé.',unavailable:'TeX Live est introuvable. Vérifier le chemin de pdflatex.',invalid:'Source LaTeX invalide ou trop volumineuse.',forbidden:'Autorisation de compilation refusée.'};
      showStatus(diagnostics[result.reason] || 'Échec de compilation. Consulter le journal pour la cause.');
      return;
    }
    const blob = new Blob([result.pdf], { type: 'application/pdf' });
    releasePreviousPdf();
    currentUrl = URL.createObjectURL(blob);
    pdfFrame.src = currentUrl;
    downloadBtn.href = currentUrl;
    downloadBtn.hidden = false;
    showStatus('PDF produit (' + Math.ceil(blob.size / 1024) + ' Ko).');
  } catch (err) {
    showStatus('Erreur du moteur : ' + String(err?.message || err));
    consoleOutput.textContent += '\n' + String(err?.stack || err);
  } finally {
    compileBtn.disabled = !nativeTex && !engine.isReady();
    compileBtn.textContent = 'Compiler le document';
  }
}
compileBtn.addEventListener('click', compile);
window.addEventListener('beforeunload', releasePreviousPdf);
initialize();
