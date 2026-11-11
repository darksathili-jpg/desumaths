/* G4 — Observation de vrais SVG TikZJax (et non seulement du chargement JS).
 * Les deux gabarits LaTeX sont figés : le code visible est celui compilé.
 * Le moteur est chargé exclusivement sur la page laboratoire.
 */
(function () {
  'use strict';
  function start() {
    const cards = Array.from(document.querySelectorAll('[data-tikz-example]'));
    if (!cards.length) return;
    const globalStatus = document.querySelector('#g4-global-status');
    const globalLine = globalStatus?.closest('.g4-statusline');
    const done = new Set();
    const failed = new Set();
    const timers = [];

    function updateOverall() {
      if (!globalStatus) return;
      const finished = done.size + failed.size;
      if (finished === cards.length && failed.size === 0) {
        globalStatus.textContent = '2 figures SVG générées dans le navigateur. MathJax et TikZJax sont opérationnels.';
        if (globalLine) globalLine.dataset.state = 'ok';
      } else if (failed.size) {
        globalStatus.textContent = failed.size + ' figure(s) non générée(s). Voir le code LaTeX et le diagnostic.';
        if (globalLine) globalLine.dataset.state = 'error';
      } else {
        globalStatus.textContent = 'Calcul des figures : ' + done.size + ' / ' + cards.length + ' terminé(s).';
      }
    }
    function inspect(card) {
      const key = card.dataset.tikzExample;
      if (done.has(key) || failed.has(key)) return;
      const container = card.querySelector('.g4-figure');
      const svg = container?.querySelector('svg.tikzjax');
      const message = card.querySelector('[data-figure-status]');
      // Un conteneur SVG seul ne prouve pas que TikZ a produit une figure.
      // Attendre une taille utilisable et une géométrie réellement dessinée.
      let complete = false;
      if (svg) {
        try {
          const visible = svg.getBoundingClientRect();
          const drawing = svg.getBBox();
          complete = visible.width > 80 && visible.height > 60 &&
            drawing.width > 20 && drawing.height > 20 &&
            svg.querySelectorAll('path,line,rect,circle,text,polyline,polygon').length > 5;
        } catch (_) {
          // Le SVG peut encore être en cours de construction.
        }
      }
      if (complete) {
        if (!svg.querySelector('title')) {
          const title = document.createElementNS('http://www.w3.org/2000/svg','title');
          title.textContent = key === 'variations'
            ? 'Tableau de variations de la fonction x au carré moins quatre'
            : 'Courbe de la fonction x au carré moins quatre';
          svg.prepend(title);
        }
        svg.setAttribute('role','img');
        done.add(key);
        card.dataset.status = 'ok';
        if (message) message.textContent = 'Figure vectorielle SVG calculée avec succès.';
        updateOverall();
      } else if(container?.querySelector('img[src*="invalid.site"]')) {
        failed.add(key);
        card.dataset.status = 'error';
        if (message) message.textContent = 'Échec du rendu TikZ. Le code original reste accessible ci-dessous.';
        updateOverall();
      }
    }

    for (const card of cards) {
      const source = card.querySelector('script[type="text/tikz"]');
      const code = card.querySelector('[data-source-code]');
      // Copier AVANT le chargement de TikZJax : celui-ci remplace le <script> par un <svg>.
      if (source && code) code.textContent = source.textContent.trim();
      const copy = card.querySelector('[data-copy-source]');
      if (copy) copy.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(code?.textContent || '');
          const before = copy.textContent;
          copy.textContent = 'Code copié';
          window.setTimeout(() => {copy.textContent = before;},1500);
        } catch (_) {
          copy.textContent = 'Sélectionner le code ci-dessous';
          card.querySelector('details').open = true;
        }
      });
      const area = card.querySelector('.g4-figure');
      if (area) {
        const observer = new MutationObserver(() => inspect(card));
        observer.observe(area,{childList:true,subtree:true});
        area.addEventListener('tikzjax-load-finished',() => inspect(card));
      }
      timers.push(window.setTimeout(() => {
        const key = card.dataset.tikzExample;
        if (done.has(key) || failed.has(key)) return;
        failed.add(key);
        card.dataset.status = 'error';
        const message = card.querySelector('[data-figure-status]');
        if (message) message.textContent = 'La génération n’a pas abouti. Vérifier la console ou réessayer après actualisation.';
        updateOverall();
      },150000));
    }
    window.addEventListener('pagehide', () => {for(const id of timers) clearTimeout(id);},{once:true});
    updateOverall();
    window.DesumathsTikzLab = Object.freeze({version:'G4',source:'latex_tikz',getState:()=>({done:[...done],failed:[...failed]})});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();