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

function rienmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='';}
    return rep;
}

function plusmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}

function valabs(a) {
    let rep;
    if (a<0) {rep=-a;} else {rep=a;}
    return rep;
}

function parenthesesgd(a) {
    let rep;
    let parg;
    let pard;
    if (a<0) {parg='(';pard=')';} else {parg='';pard='';}
    return rep = [parg,pard];
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

function fracoupasfrac(num,denom) {
    let rep;
    if (denom==1) {rep=`${num}`;} else {rep=`\\dfrac{${num}}{${denom}}`;}
    return rep;
}

function simpfracmax(num,denom){
    let rep;
    let frac1 = simplifierfraction(num,denom);
    let frac2 = fracsimp(frac1[0],frac1[1]);
    let frac3 = fracoupasfrac(frac2[0],frac2[1]);
    return rep = frac3;
}

function unoupasun(a) {
    let rep;
    if (a==1) {rep=``;} else {
        if (a==-1) {rep=`-`;} else {rep=`${a}`;}}
    return rep;
}

function zerooupaszero(a) {
    let rep;
    let sa = rienplus(a);
    if (a==0) {rep=``;} else {rep=`${sa}${a}`;}
    return rep;
}

function unoupasunzerooupaszero(a) {
    let rep;
    let sa = rienplus(a);
    if (a==1) {rep=`+x`;} else {
        if (a==-1) {rep=`-x`;} else {
            if (a==0) {rep=``;} else {rep=`${sa}${a}x`;}
        }}
    return rep;
}

function nbrediff(a) {
    let rep = nbrealéa(-10,10);
    while (a==rep) {rep = nbrealéa(-10,10);}
    return rep;
}

function deltaneg() {
    let rep;
    let a = nbrealéa(-10,10);
    let b = nbrealéa(-10,10);
    let c = nbrealéa(-10,10);
    while (b*b-4*a*c>=0) {
        a=nbrealéa(-10,10);b=nbrealéa(-10,10);c=nbrealéa(-10,10);
    }
    return rep = [a,b,c];
}

function cas() {
    let rep;
    let choix = [0,0,0,0,0,0,0,1,1,2];
    return rep = choix[nbrealéa(0,9)];
}

let x1 = nbrealéa(-10,10);
let x2 = nbrediff(x1);
let a = nbreouoppose(nbrealéa(1,10));
let a1 = unoupasun(a);
let pgda = parenthesesgd(a);
let b = -a*x1-a*x2;
let b1 = unoupasunzerooupaszero(b);
let opb = -b;
let pgdb = parenthesesgd(b);
let c = a*x1*x2;
let c1 = zerooupaszero(c);
let pgdc = parenthesesgd(c);
let delta = b*b-4*a*c;
let rdelta = Math.sqrt(delta);
let a2 = 2*a;
let sol1 = (-b-rdelta)/(2*a);
let sol2 = (-b+rdelta)/(2*a);
let num1 = -b-rdelta;
let num2 = -b+rdelta;

let b2 = -2*a*x1;
let b21 = unoupasunzerooupaszero(b2);
let opb2 = -b2;
let pgdb2 = parenthesesgd(b2);
let c2 = a*x1*x1;
let c21 = zerooupaszero(c2);
let pgdc2 = parenthesesgd(c2);
let delta2 = b2*b2-4*a*c2;
let rdelta2 = Math.sqrt(delta2);
let sol21 = (-b2-rdelta2)/(2*a);

let coefs = deltaneg();
let a3 = coefs[0];
let pgda3 = parenthesesgd(a3);
let b3 = coefs[1];
let b31 = unoupasunzerooupaszero(b3);
let pgdb3 = parenthesesgd(b3);
let c3 = coefs[2];
let pgdc3 = parenthesesgd(c3);
let c31 = zerooupaszero(c3);
let delta3 = b3*b3-4*a3*c3;

let k = cas();

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');

let listenonces = [`Résoudre dans $\\mathbb{R}$ l'équation suivante : $${a1}x^2${b1}${c1}=0$.`,
`Résoudre dans $\\mathbb{R}$ l'équation suivante : $${a1}x^2${b21}${c21}=0$.`,
`Résoudre dans $\\mathbb{R}$ l'équation suivante : $${a3}x^2${b31}${c31}=0$.`];

let listeCorrections = [`On va tout d'abord calculer $\\Delta=b^2-4ac$ :<br>
$\\Delta = ${pgdb[0]} ${b} ${pgdb[1]} ^2-4\\times ${pgda[0]}${a}${pgda[1]}\\times ${pgdc[0]}${c}${pgdc[1]}=${delta}$<br>
$\\Delta>0$ donc l'équation admet deux solutions distinctes :<br><br>
$x_1=\\dfrac{-b-\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}-\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb}-${rdelta}}{${a2}}=\\dfrac{${num1}}{${a2}}=${sol1}$<br><br>
$x_2=\\dfrac{-b+\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}+\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb}+${rdelta}}{${a2}}=\\dfrac{${num2}}{${a2}}=${sol2}$<br><br>
$S=\\left\\{ ${sol1}~;${sol2} \\right\\}$`,
`On va tout d'abord calculer $\\Delta=b^2-4ac$ :<br>
$\\Delta = ${pgdb2[0]} ${b2} ${pgdb2[1]} ^2-4\\times ${pgda[0]}${a}${pgda[1]}\\times ${pgdc2[0]}${c2}${pgdc2[1]}=${delta2}$<br>
$\\Delta=0$ donc l'équation admet une seule solution :<br><br>
$x_1=\\dfrac{-b}{2a}=\\dfrac{${opb2}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb2}}{${a2}}=${sol21}$<br><br>
$S=\\left\\{ ${sol21} \\right\\}$`,
`On va tout d'abord calculer $\\Delta=b^2-4ac$ :<br>
$\\Delta = ${pgdb3[0]} ${b3} ${pgdb3[1]} ^2-4\\times ${pgda3[0]}${a3}${pgda3[1]}\\times ${pgdc3[0]}${c3}${pgdc3[1]}=${delta3}$<br>
$\\Delta<0$ donc l'équation n'admet pas de solution réelle.<br>
$S=\\varnothing$`];

let listeSolutions = [`$S=\\left\\{ ${sol1}~;${sol2} \\right\\}$`,
`$S=\\left\\{ ${sol21} \\right\\}$`,
`$S=\\varnothing$`];

enonce.innerHTML = listenonces[k];
solution.innerHTML = listeSolutions[k];
correctiond.innerHTML = listeCorrections[k];


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
    location.href = "../../../Menus/MenuSeconde.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSecondeEqsDroites.html";
})