"use strict";
/* G2-R15-R1 : la consigne demande uniquement une factorisation.
   Le bloc LaTeX de factorisation reste identique à la source historique. */
function nbrealéa(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
function nbreouoppose(n){return Math.random()<0.5?n:-n;}
function rienplus(n){return n<0?'':'+';}
function unoupasun(n){return n===1?'':n===-1?'-':String(n);}

let a=nbreouoppose(nbrealéa(1,10));
let b=nbreouoppose(nbrealéa(1,10));
let c=a+nbreouoppose(nbrealéa(1,10));
let d=nbreouoppose(nbrealéa(1,10));
// Eviter le facteur de degré zéro pour conserver deux facteurs affines.
while(a+c===0){c=a+nbreouoppose(nbrealéa(1,10));}
let a1=unoupasun(a),sb=rienplus(b),sc=rienplus(c),c1=unoupasun(c);
let opc=-c,opc1=unoupasun(opc),sopc=rienplus(opc);
let sd=rienplus(d),opd=-d,sopd=rienplus(opd);
let aPlusc=a+c,aPlusc1=unoupasun(aPlusc),bPlusd=b+d,sbPlusd=rienplus(bPlusd);
let aMoinsc=a-c,aMoinsc1=unoupasun(aMoinsc),bMoinsd=b-d,sbMoinsd=rienplus(bMoinsd);

const enonce=document.getElementById('enonce');
const correctiond=document.getElementById('correctiond');
const solution=document.getElementById('solution');
const formuleFactorisee=`(${aPlusc1}x ${sbPlusd} ${bPlusd})\\times(${aMoinsc1}x ${sbMoinsd} ${bMoinsd})`;
enonce.innerHTML=`$(${a1}x ${sb} ${b})^2 - (${c1}x ${sd} ${d})^2$`;
solution.innerHTML=`$${formuleFactorisee}$`;
correctiond.innerHTML=`$\\begin{array}{rcl}
\\underbrace{(${a1} x ${sb} ${b})^2}_{a^2} - \\underbrace{(${c1} x ${sd} ${d})^2}_{b^2} & = & [\\underbrace{(${a1} x ${sb} ${b})}_a + \\underbrace{(${c1} x ${sd} ${d})}_b] \\times [\\underbrace{(${a1} x ${sb} ${b})}_a - \\underbrace{(${c1} x ${sd} ${d})}_b] \\\\
& = & (${a1} x ${sb} ${b} ${sc} ${c1} x ${sd} ${d}) \\times (${a1} x ${sb} ${b} ${sopc} ${opc1} x ${sopd} ${opd}) \\\\
& = & (${aPlusc1} x ${sbPlusd} ${bPlusd})\\times (${aMoinsc1} x ${sbMoinsd} ${bMoinsd})
\\end{array}$`;

// L'affichage d'une correction ne doit jamais dependre du CDN MathJax.
function composer(element){
  const mj = window.MathJax;
  if (!mj) return;
  const demarrer = () => {
    if (typeof mj.typesetPromise !== 'function') return;
    Promise.resolve(mj.typesetPromise([element])).catch((erreur) => {
      console.warn('Desumaths : rendu MathJax indisponible, source LaTeX visible.', erreur);
    });
  };
  if (mj.startup && mj.startup.promise) {
    Promise.resolve(mj.startup.promise).then(demarrer).catch((erreur) => {
      console.warn('Desumaths : initialisation MathJax indisponible.', erreur);
    });
  } else demarrer();
}
function basculer(bouton,panneau){
  const ouvrir = panneau.hidden;
  panneau.hidden = !ouvrir;
  // Force le comportement meme si une ancienne feuille CSS persiste en cache.
  panneau.style.display = ouvrir ? 'block' : 'none';
  panneau.setAttribute('aria-hidden', String(!ouvrir));
  bouton.setAttribute('aria-expanded', String(ouvrir));
  bouton.textContent = ouvrir ? bouton.dataset.masquer : bouton.dataset.afficher;
  if (ouvrir) composer(panneau);
}
const boutonSolutions=document.getElementById('solutions');
const boutonCorrection=document.getElementById('correction');
boutonSolutions.addEventListener('click',()=>basculer(boutonSolutions,solution));
boutonCorrection.addEventListener('click',()=>basculer(boutonCorrection,correctiond));
document.getElementById('recommencer').addEventListener('click',()=>window.location.reload());
for(const [id,route] of [['accueil','../../../index.html'],['MenuSeconde','../../../Menus/MenuSeconde.html'],['MenuSecondeEquations','../../../Menus/MenuSecondeEquations.html']]){
 document.getElementById(id).addEventListener('click',()=>{window.location.href=route;});
}
window.addEventListener('load',()=>{composer(enonce);});
