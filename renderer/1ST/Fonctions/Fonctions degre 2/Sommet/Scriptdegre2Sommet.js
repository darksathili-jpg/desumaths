'use strict';
/* Migration du générateur historique Sommet : mêmes paramètres et même méthode. */
(function(){
  const $=id=>document.getElementById(id);
  const enonce=$('enonce'),solution=$('solution'),correctiond=$('correctiond');
  const solutions=$('solutions'),correction=$('correction'),recommencer=$('recommencer');
  let current=null;
  const entier=(min,max)=>Math.floor(Math.random()*(max-min+1))+min;
  const nombreFr=x=>String(x).replace('.',',');
  const facteur=r=>r<0?'(x+'+(-r)+')':r===0?'x':'(x-'+r+')';
  const ecritureSigne=a=>a<0?'('+a+')':String(a);
  const fois=a=>a===1?'':a===-1?'-':String(a);
  const latex=(s)=>'\\('+s+'\\)';
  const setVisible=(button,element,visible)=>{
    element.hidden=!visible;
    button.setAttribute('aria-expanded',String(visible));
    button.textContent=(visible?'Masquer ':'Afficher ')+(element===solution?'la solution':'la correction détaillée');
  };
  function typeset(){
    const mj=window.MathJax;
    if(mj&&typeof mj.typesetPromise==='function'){
      mj.typesetClear?.([enonce,solution,correctiond]);
      mj.typesetPromise([enonce,solution,correctiond]).catch(()=>{});
    }
  }
  function newExercise(){
    // Héritage conservé : 2 racines entières [-9,9], coefficient a non nul de module 1 à 9.
    const alpha=entier(-9,9),beta=entier(-9,9);
    const a=entier(1,9)*(entier(0,1)===0?-1:1);
    const xS=(alpha+beta)/2;
    const yS=a*(xS-alpha)*(xS-beta);
    current=Object.freeze({alpha,beta,a,xS,yS});
    const f=fois(a)+facteur(alpha)+facteur(beta);
    enonce.textContent=latex('f(x)='+f);
    solution.textContent=latex('S\\left('+nombreFr(xS)+'\\,;\\,'+nombreFr(yS)+'\\right)');
    correctiond.replaceChildren();
    const step=(heading,formula)=>{
      const p=document.createElement('p');p.className='methode-etape';
      const strong=document.createElement('strong');strong.textContent=heading+' ';
      p.append(strong,document.createTextNode(latex(formula)));
      correctiond.append(p);
    };
    step('Étape 1 — Lire les racines :','\\alpha='+alpha+'\\quad\\text{et}\\quad\\beta='+beta);
    step('Étape 2 — Calculer l’abscisse du sommet :',
      'x_S=\\dfrac{\\alpha+\\beta}{2}=\\dfrac{'+ecritureSigne(alpha)+'+'+ecritureSigne(beta)+'}{2}='+nombreFr(xS));
    step('Étape 3 — Calculer son ordonnée :',
      'y_S=f(x_S)='+ecritureSigne(a)+'\\times('+nombreFr(xS)+'-'+ecritureSigne(alpha)+')\\times('+nombreFr(xS)+'-'+ecritureSigne(beta)+')='+nombreFr(yS));
    step('Conclusion :','S\\left('+nombreFr(xS)+'\\,;\\,'+nombreFr(yS)+'\\right)');
    setVisible(solutions,solution,false);
    setVisible(correction,correctiond,false);
    typeset();
  }
  solutions.addEventListener('click',()=>{setVisible(solutions,solution,solution.hidden);typeset();});
  correction.addEventListener('click',()=>{setVisible(correction,correctiond,correctiond.hidden);typeset();});
  recommencer.addEventListener('click',newExercise);
  window.DesumathsSommet=Object.freeze({getExercise:()=>current});
  newExercise();
  window.addEventListener('load',typeset,{once:true});
})();