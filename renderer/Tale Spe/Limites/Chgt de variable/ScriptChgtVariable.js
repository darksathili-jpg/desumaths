function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
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
function nbreouoppose(a) {
    let rep;
    let choix = nbrealéa(1,2);
    if (choix==1) {rep=a;} else {rep=-a;}
    return rep;
}

function infinis() {
    let rep;
    let choix = nbrealéa(1,2);
    if (choix==1) {rep='+\\infty';} else {rep='-\\infty';}
    return rep;
}

function diff(a) {
    let b = nbreouoppose(nbrealéa(2,10));
    while (a==b) {b=nbreouoppose(nbrealéa(2,10));}
    return b;
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }

function fracsimp(num,denom) {
    let rep;
    let num1;
    let denom1;
    if (denom<0 && num>0) {num1=num; denom1=-denom;}
    if (denom>0 && num>=0) {num1=num; denom1=denom;}
    if (denom>0 && num<=0) {num1=-num; denom1=denom;}
    if (denom<0 && num<0) {num1=-num; denom1=-denom;}
    return rep = [num1,denom1];
}

function parenthesesgd(a) {
    let rep;
    let parg;
    let pard;
    if (a<0) {parg='(';pard=')';} else {parg='';pard='';}
    return rep=[parg,pard];
  }

function inffinal(a,inf) {
    let rep;
    if (a<0 && inf=='+\\infty') {rep='-\\infty';}
    if (a<0 && inf=='-\\infty') {rep='+\\infty';}
    if (a>0 && inf=='+\\infty') {rep='+\\infty';}
    if (a>0 && inf=='-\\infty') {rep='-\\infty';}
    return rep;
}

function replim(a,inf2) {
    let rep;
    if (a>0 && inf2=='+\\infty') {rep='+\\infty';}
    if (a>0 && inf2=='-\\infty') {rep='0';}
    if (a<0 && inf2=='+\\infty') {rep='-\\infty';}
    if (a<0 && inf2=='-\\infty') {rep='0';}
    return rep;
}

function car(inf2) {
    let rep;
    if (inf2=='+\\infty') {rep='+\\infty';}
    else {rep='0';}
    return rep;
}

function test_réponse(a,b,c) {
    let test;
    let div=a/b;
    if (div==c) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

let a = nbreouoppose(nbrealéa(2,10));
let b = diff(a);
let inf = infinis();
let pgdb = parenthesesgd(b);
let asurb = simplifierfraction(a,b);
let asurbsimp = fracsimp(asurb[0],asurb[1]);
let sasurb = rienmoins(a/b);
let inf2 = inffinal(b,inf);
let limrep = replim(a/b,inf2);
let carrep = car(inf2); 

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


enonce.innerHTML = `Déterminer : $\\displaystyle{\\lim_{x\\to ${inf}} \\left(${a}x\\text{e}^{${b}x}\\right)}$`;
solution.innerHTML = `$\\displaystyle{\\lim_{x\\to ${inf}} \\left(${a}x\\text{e}^{${b}x}\\right)}=${limrep}$`;
correctiond.innerHTML = `$${a}x\\text{e}^{${b}x}=\\dfrac{${a}}{${b}}\\times ${pgdb[0]} ${b}x ${pgdb[1]} \\text{e}^{${b}x} = ${sasurb} \\dfrac{${asurbsimp[0]}}{${asurbsimp[1]}} \\times ${pgdb[0]} ${b}x ${pgdb[1]} \\text{e}^{${b}x}$<br><br>
En posant $X=${b}x$ on obtient donc $${a}x\\text{e}^{${b}x}=${sasurb} \\dfrac{${asurbsimp[0]}}{${asurbsimp[1]}} \\times X\\text{e}^X$ et donc :<br><br>
$\\displaystyle{\\lim_{x\\to ${inf}} \\left(${a}x\\text{e}^{${b}x}\\right)}=\\displaystyle{\\lim_{X\\to ${inf2}} \\left(${sasurb} \\dfrac{${asurbsimp[0]}}{${asurbsimp[1]}} \\times X\\text{e}^X\\right)}=${limrep}$ car $\\displaystyle{\\lim_{X\\to ${inf2}} \\left( X\\text{e}^X\\right)}=${carrep}$`;

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
    location.href = "../../../Menus/MenuTaleLimites.html";
})