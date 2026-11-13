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

function nbrediff(a) {
    let rep = nbrealéa(-10,10);
    while (rep==a) {rep=nbrealéa(-10,10);}
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

let a = nbrealéa(2,10);
let x1 = nbrealéa(-10,10);
let x2 = nbrediff(x1);
let coefx = -a*x1-a*x2;
let oppcoefx = -coefx;
let scoefx = rienplus(coefx);
let coefr = a*x1*x2;
let scoefr = rienplus(coefr);
let b = nbrealéa(2,10);
let delta = coefx**2-4*a*coefr;
let cebornes = ce(x1,x2);
let rb = coefr-b;
let srb = rienplus(rb);
let delta2 = coefx**2-4*a*rb;
let a2 = 2*a;
let sol1v = avecVirgule(Math.round((oppcoefx-Math.sqrt(delta2))/a2*100)/100);
let sol2v = avecVirgule(Math.round((oppcoefx+Math.sqrt(delta2))/a2*100)/100);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');



let listeenonces = [`Résoudre dans $\\mathbb{R}$ l'équation suivante : $\\ln\\left(${a}x^2${scoefx}${coefx}x${scoefr}${coefr}\\right)=\\ln(${b}).$`];

let listesolutions = [];

let listecorrections = [`$\\underline{\\text{Condition d'existence :}}$ il faut que $${a}x^2${scoefx}${coefx}x${scoefr}${coefr}>0$<br>
$\\Delta=${delta}$, ce qui donne $x_1=${x1}$ et $x_2=${x2}$ et donc $x\\in I=]-\\infty~;${cebornes[0]}[\\cup ]${cebornes[1]}~;+\\infty[$.<br><br>
$\\underline{\\text{On résout :}}$<br>
$\\begin{array}{lrcl} & \\ln\\left(${a}x^2${scoefx}${coefx}x${scoefr}${coefr}\\right) & = & \\ln(${b}) \\\\
\\iff & \\text{e}^{\\ln\\left(${a}x^2${scoefx}${coefx}x${scoefr}${coefr}\\right)} & = & \\text{e}^{\\ln(${b})} \\\\
\\iff & ${a}x^2${scoefx}${coefx}x${scoefr}${coefr} & = & ${b} \\\\
\\iff & ${a}x^2${scoefx}${coefx}x${srb}${rb} & = & 0
\\end{array}$<br><br>
$\\Delta=${delta2}$, $~x_1=\\dfrac{${oppcoefx}-\\sqrt{${delta2}}}{${a2}}\\approx ${sol1v}$ et $x_2=\\dfrac{${oppcoefx}+\\sqrt{${delta2}}}{${a2}}\\approx ${sol2v} $`];

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
    location.href = "../../../Menus/MenuTaleEspace.html";
})