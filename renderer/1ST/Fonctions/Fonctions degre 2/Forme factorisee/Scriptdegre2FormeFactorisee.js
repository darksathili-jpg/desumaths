'use strict';
/* Migration du vrai exercice historique : deux racines, une image connue et le coefficient. */
(function(){
 const $=id=>document.getElementById(id);
 const enonce=$('enonce'),solution=$('solution'),correctiond=$('correctiond');
 const solutions=$('solutions'),correction=$('correction'),recommencer=$('recommencer');
 const entier=(min,max)=>Math.floor(Math.random()*(max-min+1))+min;
 const fr=x=>String(x).replace('.',',');
 const latex=s=>'\\('+s+'\\)';
 const sign=a=>a<0?'('+a+')':String(a);
 const factor=x=>x===0?'x':x<0?'(x+'+(-x)+')':'(x-'+x+')';
 const coeff=a=>a===1?'':a===-1?'-':String(a);
 let current=null;
 function visible(button,target,show){
   target.hidden=!show;
   button.setAttribute('aria-expanded',String(show));
   button.textContent=(show?'Masquer ':'Afficher ')+(target===solution?'la solution':'la correction détaillée');
 }
 function typeset(){
   const mj=window.MathJax;
   if(mj&&typeof mj.typesetPromise==='function'){
     mj.typesetClear?.([enonce,solution,correctiond]);
     mj.typesetPromise([enonce,solution,correctiond]).catch(()=>{});
   }
 }
 function step(title,formula){
   const paragraph=document.createElement('p');paragraph.className='methode-etape';
   const heading=document.createElement('strong');heading.textContent=title+' ';
   paragraph.append(heading,document.createTextNode(latex(formula)));
   correctiond.append(paragraph);
 }
 function newExercise(){
   // Paramètres de l'exercice original, sans imposer deux racines distinctes.
   const alpha=entier(-9,9),beta=entier(-9,9);
   let x0=entier(-9,9);
   while(x0===alpha||x0===beta)x0=entier(-9,9);
   const a=entier(1,9)*(entier(0,1)?1:-1);
   const image=a*(x0-alpha)*(x0-beta);
   const product=(x0-alpha)*(x0-beta);
   current=Object.freeze({alpha,beta,x0,a,image,product});
   enonce.textContent=latex('\\alpha='+alpha+'\\,,\\quad\\beta='+beta+'\\,,\\quad f('+x0+')='+image);
   solution.textContent=latex('f(x)='+coeff(a)+factor(alpha)+factor(beta));
   correctiond.replaceChildren();
   step('Étape 1 — Forme générale :','f(x)=a(x-\\alpha)(x-\\beta)');
   step('Étape 2 — Utiliser la valeur connue :',
     image+'=a\\times('+sign(x0)+'-'+sign(alpha)+')\\times('+sign(x0)+'-'+sign(beta)+')');
   step('Étape 3 — Déterminer le coefficient :',
     'a=\\dfrac{'+image+'}{'+sign(product)+'}='+a);
   step('Conclusion :','f(x)='+coeff(a)+factor(alpha)+factor(beta));
   visible(solutions,solution,false);
   visible(correction,correctiond,false);
   typeset();
 }
 solutions.addEventListener('click',()=>{visible(solutions,solution,solution.hidden);typeset();});
 correction.addEventListener('click',()=>{visible(correction,correctiond,correctiond.hidden);typeset();});
 recommencer.addEventListener('click',newExercise);
 window.DesumathsFormeFactorisee=Object.freeze({getExercise:()=>current});
 newExercise();
 window.addEventListener('load',typeset,{once:true});
})();