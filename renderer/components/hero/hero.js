/* Desumaths G3.1 - compagnon reutilisable (sans dependance).
 * Deux poses issues de la planche fournie : repos / mouvement d'accueil.
 * Aucun acces aux corrections, aucune donnee eleve.
 */
(function (global) {
  'use strict';
  function createHero(options = {}) {
    const root = typeof options.container === 'string'
      ? document.querySelector(options.container) : options.container;
    if (!root) return null;
    const texte = root.querySelector('[data-hero-message]');
    const saluer = root.querySelector('[data-hero-saluer]');
    const mouvement = root.querySelector('[data-hero-motion]');
    const masquer = root.querySelector('[data-hero-hide]');
    const retour = document.querySelector('[data-hero-return]');
    const media = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)');
    const state = { pose: 'idle', motion: !(media && media.matches), visible: true };
    let timeout = null;

    function setState(pose) {
      if (!['idle', 'welcome'].includes(pose)) return false;
      state.pose = pose;
      root.dataset.pose = pose;
      return true;
    }
    function say(message) {
      if (typeof message !== 'string' || !texte) return;
      texte.textContent = message;
    }
    function clearTimer() { if (timeout !== null) { clearTimeout(timeout); timeout = null; } }
    function welcome() {
      clearTimer();
      say('Bienvenue dans Desumaths ! Choisis un niveau et avance à ton rythme.');
      if (!state.motion) { setState('idle'); return; }
      setState('welcome');
      timeout = global.setTimeout(() => { setState('idle'); timeout = null; }, 1150);
    }
    function setMotion(enabled) {
      state.motion = !!enabled;
      root.dataset.motion = state.motion ? 'on' : 'off';
      if (mouvement) {
        mouvement.textContent = state.motion ? "Réduire l'animation" : "Activer l'animation";
        mouvement.setAttribute('aria-pressed', String(!state.motion));
      }
      if (!state.motion) { clearTimer(); setState('idle'); }
    }
    function show() {
      state.visible = true; root.hidden = false;
      if (retour) retour.hidden = true;
    }
    function hide() {
      clearTimer();
      state.visible = false; root.hidden = true;
      if (retour) retour.hidden = false;
    }
    if (saluer) saluer.addEventListener('click', welcome);
    if (mouvement) mouvement.addEventListener('click', () => setMotion(!state.motion));
    if (masquer) masquer.addEventListener('click', hide);
    if (retour) retour.addEventListener('click', show);
    if (media && typeof media.addEventListener === 'function') {
      media.addEventListener('change', event => setMotion(!event.matches));
    }
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { clearTimer(); setState('idle'); }
    });
    setMotion(state.motion);
    show();
    welcome();
    return { show, hide, setState, say, clearMessage: () => say(''), setMotion, welcome, state };
  }
  global.DesumathsHero = {createHero, instance: null};
  const init = () => {
    const root = document.querySelector('#hero-compagnon');
    if (root && !root.dataset.initialise) {
      root.dataset.initialise = 'true';
      global.DesumathsHero.instance = createHero({container:root});
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})(window);
