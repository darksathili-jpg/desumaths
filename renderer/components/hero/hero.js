/* Desumaths G3.2 — Christophe, 12 poses originales, quatre directions.
 * Deux dimensions: frame (colonne 0..2) et direction (ligne 0..3).
 * Aucune pose inventee : on anime les sequences coherentes de la planche.
 * Animations ponctuelles, sans boucle permanente ni mouvement sur place.
 */
(function (global) {
  'use strict';
  const FRAMES = Object.freeze({
    face: [0,1,2,1],
    gauche: [3,4,5,4],
    droite: [6,7,8,7],
    dos: [9,10,11,10]
  });
  const IDLES = Object.freeze({face:1,gauche:4,droite:7,dos:10});
  const PAUSE = 130;

  function createHero({container} = {}) {
    const root = typeof container === 'string' ? document.querySelector(container) : container;
    if (!root) return null;
    const sprite = root.querySelector('.hero-compagnon-sprite');
    const marche = root.querySelector('[data-hero-walk]');
    const tourne = root.querySelector('[data-hero-turn]');
    const mouvement = root.querySelector('[data-hero-motion]');
    const masquer = root.querySelector('[data-hero-hide]');
    const message = root.querySelector('[data-hero-message]');
    const figure = root.querySelector('.hero-compagnon-visuel');
    const retour = document.querySelector('[data-hero-return]');
    if (!sprite || !figure) return null;
    const media = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)');
    const state = {mode:'idle', direction:'face', frame:1, motion:!(media && media.matches),visible:true,busy:false};
    let generation=0;
    let chronos=new Set();

    function frame(index) {
      if (!Number.isInteger(index) || index<0 || index>=12) return false;
      state.frame=index;
      sprite.dataset.frame=String(index);
      const col=index%3, row=Math.floor(index/3);
      sprite.style.backgroundPosition=(col*50)+'% '+(row*100/3)+'%';
      return true;
    }
    function setDirection(direction) {
      if (!Object.hasOwn(IDLES,direction)) return false;
      state.direction=direction;
      root.dataset.direction=direction;
      frame(IDLES[direction]);
      return true;
    }
    function say(text) {
      if (message && typeof text==='string') message.textContent=text;
    }
    function position(x=0) {
      figure.style.setProperty('--hero-dx',Math.round(x)+'px');
    }
    function cancel() {
      generation++;
      for(const entry of chronos){clearTimeout(entry.timer);entry.resolve();}
      chronos.clear();
      state.busy=false;
      root.dataset.busy='false';
      if(marche)marche.disabled=false;
      if(tourne)tourne.disabled=false;
      position(0);
    }
    function wait(ms){
      return new Promise(resolve=>{
        const entry={timer:null,resolve};
        entry.timer=setTimeout(()=>{chronos.delete(entry);resolve();},ms);
        chronos.add(entry);
      });
    }
    function setState(mode) {
      if(!['idle','walk','turn'].includes(mode))return false;
      state.mode=mode;root.dataset.pose=mode;return true;
    }
    function setMotion(yes) {
      state.motion=!!yes && !(media&&media.matches);
      root.dataset.motion=state.motion?'on':'off';
      if(mouvement){
        mouvement.textContent=state.motion?"Réduire l'animation":"Activer l'animation";
        mouvement.setAttribute('aria-pressed',String(!state.motion));
      }
      if(!state.motion){cancel();setState('idle');setDirection('face');}
    }
    async function sequence(steps,mode){
      if(!state.visible||state.busy||!state.motion)return false;
      const ticket=++generation;
      state.busy=true;root.dataset.busy='true';
      setState(mode);
      if(marche)marche.disabled=true;
      if(tourne)tourne.disabled=true;
      for(const step of steps){
        if(ticket!==generation||!state.visible||!state.motion)break;
        state.direction=step.direction;
        root.dataset.direction=step.direction;
        frame(step.frame);
        position(step.x??0);
        await wait(step.ms??PAUSE);
      }
      if(ticket===generation){
        state.busy=false;root.dataset.busy='false';
        setState('idle');setDirection('face');position(0);
        if(marche)marche.disabled=false;
        if(tourne)tourne.disabled=false;
      }
      return ticket===generation;
    }
    function debut() {
      if(!state.motion){setDirection('face');return;}
      say('Salut ! Je suis Christophe. Prêt à t’entraîner en maths ?');
      return sequence([
        {direction:'droite',frame:6,x:-50,ms:160},
        {direction:'droite',frame:7,x:-37,ms:155},
        {direction:'droite',frame:8,x:-23,ms:155},
        {direction:'droite',frame:7,x:-10,ms:155},
        {direction:'face',frame:1,x:0,ms:350}
      ],'walk');
    }
    async function marcher() {
      if(!state.motion){say('Active les animations pour me voir marcher.');return false;}
      say('Je marche vraiment, avec les poses de profil de ma planche !');
      const steps=[];
      for(let i=0;i<7;i++)steps.push({direction:'droite',frame:FRAMES.droite[i%4],x:-52+i*16,ms:145});
      for(let i=0;i<7;i++)steps.push({direction:'gauche',frame:FRAMES.gauche[i%4],x:44-i*15,ms:145});
      steps.push({direction:'face',frame:0,x:-6,ms:170},{direction:'face',frame:1,x:0,ms:210});
      return sequence(steps,'walk');
    }
    async function tourner() {
      if(!state.motion){setDirection(state.direction==='dos'?'face':'dos');return true;}
      say('Regarde : face, profil gauche, dos et profil droit !');
      const steps=[
        {direction:'face',frame:1,ms:420},
        {direction:'gauche',frame:4,ms:470},
        {direction:'dos',frame:10,ms:490},
        {direction:'droite',frame:7,ms:470},
        {direction:'face',frame:1,ms:400}
      ];
      return sequence(steps,'turn');
    }
    function show() {
      state.visible=true;root.hidden=false;
      if(retour)retour.hidden=true;
      if(marche)marche.disabled=false;
      if(tourne)tourne.disabled=false;
      setDirection('face');
    }
    function hide() {
      cancel();state.visible=false;root.hidden=true;
      if(retour)retour.hidden=false;
    }
    if(marche)marche.addEventListener('click',marcher);
    if(tourne)tourne.addEventListener('click',tourner);
    if(mouvement)mouvement.addEventListener('click',()=>{
      if(media&&media.matches){say('Le système préfère réduire les animations.');return;}
      setMotion(!state.motion);
    });
    if(masquer)masquer.addEventListener('click',hide);
    if(retour)retour.addEventListener('click',show);
    if(media&&media.addEventListener)media.addEventListener('change',ev=>setMotion(!ev.matches));
    document.addEventListener('visibilitychange',()=>{
      if(document.hidden){cancel();setState('idle');setDirection('face');}
    });
    frame(1);position(0);setMotion(state.motion);show();
    // Animation d'accueil unique, jamais une animation de marche infinie.
    if(state.motion && !['menu','exercise'].includes(root.dataset.mode))debut();
    return {show,hide,setState,setDirection,frame,say,clearMessage:()=>say(''),setMotion,walk:marcher,turn:tourner,welcome:debut,state};
  }
  global.DesumathsHero={createHero,instance:null};
  function init(){
    const root=document.querySelector('#hero-compagnon');
    if(root&&!root.dataset.initialise){
      root.dataset.initialise='true';
      global.DesumathsHero.instance=createHero({container:root});
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})(window);
