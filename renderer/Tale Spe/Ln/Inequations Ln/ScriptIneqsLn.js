function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function nbreouoppose(a) {
    let rep;
    let choix = nbrealéa(1,2);
    if (choix==1) {rep=a;} else {rep=-a;}
    return rep;
}

function rienplus(a) {
    let rep;
    if (a<0) {rep='';} else {rep='+';}
    return rep;
}

function plusmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}

function rienmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='';}
    return rep;
}

function parenthesegd(a) {
    let rep;
    let pg;
    let pd;
    if (a<0) {pg='(';} else {pg='';}
    if (a<0) {pd=')';} else {pd='';}
    return rep = [pg,pd];
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }

function fracsimp(num,denom) {
    let rep=[num,denom];
    if (num<0 && denom<0) {rep=[-num,-denom];}
    if (num>0 && denom<0) {rep=[num,-denom];}
    if (num<0 && denom>0) {rep=[-num,denom];}
    return rep; 
}

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
}

function simply(num,denom) {
    let rep;
    if (denom==1) {rep=`=${num}`;} else {rep='';}
    return rep;
}

function fracsimpmax(num,denom) {
    let rep;
    let signe;
    f1 = simplifierfraction(num,denom);
    f2 = fracsimp(f1[0],f1[1]);
    if (num/denom<0) {signe='-';} else {signe='';}
    return rep = [signe,f2[0],f2[1]];
}

function nbrediff(a) {
    let rep = nbrealéa(2,10);
    while (rep==a) {rep=nbrealéa(2,10);}
    return rep;
}

function valabs(a) {
    let rep;
    if (a<0) {rep=-a;} else {rep=a;}
    return rep;
}

function appnapp(a,b) {
    let rep;
    if (a>b) {rep=`$\\in$`;} else {rep=`$\\notin$`;}
    return rep;
}

function soluce(a,oppb,soppb,c,app) {
    let rep;
    if (app==`$\\in$`) {rep=`$\\left\\{\\dfrac{\\text{e}^{${c}}${soppb}${oppb}}{${a}}\\right\\}$`;} else {rep=`$\\varnothing$`;}
    return rep;
}

function ce(x1,x2) {
    let rep;
    if  (x1>x2) {rep=[x2,x1];}
    if  (x1<x2) {rep=[x1,x2];}
    return rep;
}

function bornes(s,num,denom) {
    let rep;
    if (denom==1) {rep=`${s}${num}`;} else {rep=`${s}\\dfrac{${num}}{${denom}}`;}
    return rep;
}

function plusgrand(a,b,ce1,ce2) {
    let rep;
    if (a>b) {rep=ce1;} else {rep=ce2;}
    return rep;
}

function infsup(a) {
    let rep;
    if (a<0) {rep=`\\geqslant`;} else {rep=`\\leqslant`;}
    return rep;
}

function intervalle(a,borne) {
    let rep;
    if (a<0) {rep=`\\left[${borne}~;+\\infty\\right[`;} else {rep=`\\left]-\\infty~;${borne}\\right]`;}
    return rep;
}

function solintervalle(borne1,borne2,signex,borne1simp,borne2simp) {
    let rep;
    if (signex>0 && borne1<borne2) {rep=`\\left]${borne1simp}~;${borne2simp}\\right]`;}
    if (signex>0 && borne1>= borne2) {rep=`\\varnothing`;}
    if (signex<0 && borne1<borne2) {rep=`\\left[${borne2simp}~;+\\infty\\right[`;}
    if (signex<0 && borne1>borne2) {rep=`\\left]${borne1simp}~;+\\infty\\right[`;}
    return rep;
}

function grandpetit(a,b) {
    let rep;
    if (a>b) {rep=a;} else {rep=b;}
    return rep;
}

let a = nbrealéa(2,10);
let b = nbreouoppose(nbrealéa(1,10));
let sb = rienplus(b);
let oppb = -b;
let soppb = rienplus(oppb);
let c = nbrediff(a);
let oppc = -c;
let soppc = rienplus(oppc);
let d = nbrediff(b);
let sd = rienplus(d);
let ac = a-c;
let db = d-b;
let bornesol = fracsimpmax(db,ac);
let bornesolsimp = bornes(bornesol[0],bornesol[1],bornesol[2]);
let ce1borne = fracsimpmax(-b,a);
let ce2borne = fracsimpmax(-d,c);
let ce1bornesimp = bornes(ce1borne[0],ce1borne[1],ce1borne[2]);
let ce2bornesimp = bornes(ce2borne[0],ce2borne[1],ce2borne[2]);
let cebornesimp = plusgrand(-b/a,-d/c,ce1bornesimp,ce2bornesimp);
let signe = infsup(ac);
let int = intervalle(ac,bornesolsimp);
let pg = grandpetit(-b/a,-d/c);
let sol = solintervalle(pg,db/ac,ac,cebornesimp,bornesolsimp);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');



let listeenonces = [`Résoudre dans $\\mathbb{R}$ l'inéquation suivante : $\\ln\\left(${a}x${sb}${b}\\right)\\leqslant \\ln\\left(${c}x${sd}${d}\\right).$`];

let listesolutions = [`$S=${sol}$`];

let listecorrections = [`$\\underline{\\text{Condition d'existence :}}$ il faut que $${a}x${sb}${b}>0$ et $${c}x${sd}${d}>0$<br><br>
$${a}x${sb}${b}>0\\iff x<${ce1bornesimp}$ et $${c}x${sd}${d}>0\\iff x>${ce2bornesimp} $<br>
Donc $x\\in I=\\left]${cebornesimp}~;+\\infty\\right[$<br>
$\\underline{\\text{On résout :}}$<br>
$\\begin{array}{lrcl} & \\ln\\left(${a}x${sb}${b}\\right) & \\leqslant & \\ln\\left(${c}x${sd}${d}\\right) \\\\
\\iff & \\text{e}^{\\ln\\left(${a}x${sb}${b}\\right)} & \\leqslant & \\text{e}^{\\ln\\left(${c}x${sd}${d}\\right)} ~\\text{car la fonction exponentielle est croissante}\\\\
\\iff & ${a}x${sb}${b} & \\leqslant & ${c}x${sd}${d} \\\\
\\iff & ${a}x${soppc}${oppc}x & \\leqslant & ${d}${soppb}${oppb} \\\\
\\iff & ${ac}x & \\leqslant & ${db} \\\\
\\iff & x & ${signe} & ${bornesolsimp}
\\end{array}$<br>
Donc $x\\in J=${int}$<br>
$\\underline{\\text{Conclusion :}}$ <br>
$S=I\\cap J=${sol}$`];

enonce.innerHTML = listeenonces[0];

solution.innerHTML = listesolutions[0];

correctiond.innerHTML = listecorrections[0];

enonce.addEventListener("load", function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

solutions.addEventListener('click', () => {
    solution.style.display = "block";
    })

correction.addEventListener('click', () => {
    correctiond.style.display = "block";
    correctiond.innerHTML ;
})

recommencer.addEventListener('click', () => {
    location.reload(true);
})


accueil.addEventListener('click', () => {
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTaleSpe.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTaleLN.html";
})