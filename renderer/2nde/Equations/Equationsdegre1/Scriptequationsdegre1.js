"use strict";
(function(){
  const core=globalThis.DesumathsEquation;
  const $=id=>document.getElementById(id);
  const enonce=$('enonce'),solution=$('solution'),correctiond=$('correctiond');
  const solutions=$('solutions'),correction=$('correction'),recommencer=$('recommencer');
  const saisie=$('reponse-eleve'),verifier=$('verifier-reponse'),retour=$('retour-reponse');
  let eq;
  function compose(){
    // MathJax peut ne pas etre encore charge au moment du rendu initial.
    const mj=globalThis.MathJax;
    if(mj&&typeof mj.typesetPromise==='function'){
      mj.typesetClear?.([enonce,solution,correctiond]);
      mj.typesetPromise([enonce,solution,correctiond]).catch(()=>{});
    } else if(mj?.startup?.promise){
      mj.startup.promise.then(compose).catch(()=>{});
    }
  }
  function setRevele(btn,div,affiche){
    div.hidden=!affiche;
    btn.setAttribute('aria-expanded',String(affiche));
    btn.textContent=affiche?btn.dataset.masquer:btn.dataset.afficher;
  }
  function tableauCorrections(){
    // Restitution EXACTE des deux redactions pedagogiques du site historique.
    // Le balisage HTML est uniquement issu du gabarit historique fixe.
    // La saisie de l'eleve n'est jamais inseree dans le DOM comme du HTML.
    const rendu=globalThis.DesumathsCorrectionHistorique.correction(eq,core);
    const range=document.createRange();
    range.selectNode(correctiond);
    correctiond.replaceChildren(range.createContextualFragment(rendu.html));
    solution.replaceChildren(range.createContextualFragment(rendu.solution));
  }
  function nouveau(){
    eq=core.genere();
    enonce.textContent=`\\(${core.latexEquation(eq)}\\)`;
    tableauCorrections();
    saisie.value='';retour.textContent='';retour.className='retour-verification';
    setRevele(solutions,solution,false);
    setRevele(correction,correctiond,false);
    compose();
  }
  verifier.addEventListener('click',()=>{
    const resultat=core.estSolution(saisie.value,eq);
    if(!resultat.valide){
      retour.textContent='Saisis un entier, une fraction (par exemple 7/9) ou un nombre décimal (par exemple 0,5).';
      retour.className='retour-verification avertissement';
      return;
    }
    if(resultat.correct){
      retour.textContent='Bonne réponse ! Ta valeur est la solution exacte de cette équation.';
      retour.className='retour-verification succes';
    }else{
      retour.textContent='Ce n’est pas encore la bonne solution. Vérifie le regroupement des termes et le signe du résultat.';
      retour.className='retour-verification erreur';
    }
  });
  saisie.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();verifier.click();}});
  solutions.addEventListener('click',()=>{setRevele(solutions,solution,solution.hidden);compose();});
  correction.addEventListener('click',()=>{setRevele(correction,correctiond,correctiond.hidden);compose();});
  recommencer.addEventListener('click',nouveau);
  for(const [id,url] of [['accueil','../../../index.html'],['MenuSeconde','../../../Menus/MenuSeconde.html'],['MenuSecondeEquations','../../../Menus/MenuSecondeEquations.html']]){
    $(id).addEventListener('click',()=>{location.href=url;});
  }
  nouveau();
  globalThis.addEventListener('load',compose,{once:true});
})();
