"use strict";
// Source de reference : Desusite.zip / 2nde/Equations/Equationsdegre1/Scriptequationsdegre1.js.
// Ces gabarits de correction (methode college/lycee, couleurs, sous-accolades)
// sont reproduits integralement du document valide par les enseignants.
// Autorise : fiabiliser les calculs et l'interface. Interdit : reformuler les preuves.
(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  if(root)root.DesumathsCorrectionHistorique=api;
})(typeof globalThis!=='undefined'?globalThis:null,function(){
  function unoupasun(a){return a===1?'':a===-1?'-':String(a);}
  function rienplus(a){return a<0?'':'+';}
  function rienmoins(a){return a<0?'-':'';}
  function formatHistorique(num,den){
    if(den===1n)return String(num);
    return (num<0n?'-':'')+`\\dfrac{${num<0n?-num:num}}{${den}}`;
  }
  function correction(eq, core){
    const {a,b,c,d}=eq;
    const a1=unoupasun(a),c1=unoupasun(c);
    const sb=rienplus(b),sd=rienplus(d);
    const oppb=-b,oppc=-c;
    const soppb=rienplus(oppb),soppc=rienplus(oppc);
    const oppc1=unoupasun(oppc);
    const coeffx=a-c,coeffreels=d-b;
    const scoefreels=rienplus(coeffreels);
    const r=core.solution(eq);
    const rep=[coeffreels,coeffx];
    // Conservation du rendu historique ; correction d'un defaut de signe
    // dans la normalisation des fractions du code de 2024.
    const repsimp=[Number(r.num<0n?-r.num:r.num),Number(r.den)];
    const srepsimple=r.num<0n?'-':'';
    const rep2=coeffreels/coeffx;
    const k=r.den===1n?1:0;
    const fractionBrute=`\\dfrac{${coeffreels}}{${coeffx}}`;
    const fractionCanonique=formatHistorique(r.num,r.den);
    const fracfinale=fractionBrute===fractionCanonique?'':`=${fractionCanonique}`;
let listecorrections = [`$\\underline{\\text{Méthode &laquo collège &raquo :}}$<br><br>
$\\begin{array}{lrcl} & ${a1}x${sb}${b} & = & ${c1}x${sd}${d} \\\\
\\iff & ${a1}x~\\underbrace{${sb}${b} \\color{blue}{${soppb}${oppb}}}_{=~0} & = & ${c1}x${sd}${d} \\color{blue}{${soppb}${oppb}} \\\\
\\iff & ${a1}x & = & ${c1}x${scoefreels}${coeffreels} \\\\
\\iff & ${a1}x~\\color{green}{${soppc}${oppc1}x} & = & \\underbrace{${c1}x~\\color{green}{${soppc}${oppc1}x}}_{=~0}${scoefreels}${coeffreels} \\\\
\\iff & ${coeffx}x & = & ${coeffreels} \\\\
\\iff & \\dfrac{${coeffx}~x}{\\color{red}{${coeffx}}} & = & \\dfrac{${coeffreels}}{\\color{red}{${coeffx}}} \\\\
\\iff & x & = & \\dfrac{${coeffreels}}{${coeffx}}${fracfinale}
\\end{array}$<br><br>
$\\underline{\\text{Méthode &laquo lycée &raquo :}}$<br><br>
$\\begin{array}{lrcl} & ${a1}x${sb}${b} & = & ${c1}x${sd}${d} \\\\
\\iff & ${a1}x ${soppc}${oppc1}x & = & ${d}${soppb}${oppb} \\\\
\\iff & ${coeffx}x & = & ${coeffreels} \\\\
\\iff & x & = & \\dfrac{${coeffreels}}{${coeffx}}${fracfinale}
\\end{array}$`,
`$\\underline{\\text{Méthode &laquo collège &raquo :}}$<br><br>
$\\begin{array}{lrcl} & ${a1}x${sb}${b} & = & ${c1}x${sd}${d} \\\\
\\iff & ${a1}x~\\underbrace{${sb}${b} \\color{blue}{${soppb}${oppb}}}_{=~0} & = & ${c1}x${sd}${d} \\color{blue}{${soppb}${oppb}} \\\\
\\iff & ${a1}x & = & ${c1}x${scoefreels}${coeffreels} \\\\
\\iff & ${a1}x~\\color{green}{${soppc}${oppc1}x} & = & \\underbrace{${c1}x~\\color{green}{${soppc}${oppc1}x}}_{=~0}${scoefreels}${coeffreels} \\\\
\\iff & ${coeffx}x & = & ${coeffreels} \\\\
\\iff & \\dfrac{${coeffx}~x}{\\color{red}{${coeffx}}} & = & \\dfrac{${coeffreels}}{\\color{red}{${coeffx}}} \\\\
\\iff & x & = & \\dfrac{${coeffreels}}{${coeffx}}=${rep2}
\\end{array}$<br><br>
$\\underline{\\text{Méthode &laquo lycée &raquo :}}$<br><br>
$\\begin{array}{lrcl} & ${a1}x${sb}${b} & = & ${c1}x${sd}${d} \\\\
\\iff & ${a1}x ${soppc}${oppc1}x & = & ${d}${soppb}${oppb} \\\\
\\iff & ${coeffx}x & = & ${coeffreels} \\\\
\\iff & x & = & \\dfrac{${coeffreels}}{${coeffx}}=${rep2}
\\end{array}$`];

let listesolutions = [`$S=\\left\\{ ${srepsimple}\\dfrac{${repsimp[0]}}{${repsimp[1]}} \\right\\}$`,
`$S=\\left\\{${rep2}\\right\\}$`];

    // Pas d'interpretation de la saisie eleve : seulement coefficients entiers
    // de l'exercice produits localement et gabarit historique fixe.
    return {html:listecorrections[k],solution:listesolutions[k],version:'DESUSITE-ORIGINAL'};
  }
  return {correction};
});
