function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }


function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
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

function unoupasun(a) {
    let rep;
    if (a==1) {rep=``;} else {
        if (a==-1) {rep=`-`;} else {rep=`${a}`;}}
    return rep;
}

function valabs(a) {
    let rep;
    if (a>0) {rep=a;} else {rep=-a;}
    return rep;
}

function arrondi(a,n) {
    let rep = avecVirgule(Math.round(a*10**n)/10**n);
    return rep;
  }

function sommedec(a,b) {
    let c=a+b;
    let rep=arrondi(c,1);
    return rep;
}

let a = nbrealéa(1,99);
let av = arrondi(a/10,1);
let b = nbrealéa(1,99);
let sol = 10**(Math.log10(b)/(a/10));
let solv = arrondi(sol,2);


let k = nbrealéa(0,2);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');
var Test;

let listeenonces = [`Résoudre dans $\\mathbb{R}$ l'équation $x^{${av}}=${b}$`
];

let listesolutions = [`$x=10^{\\frac{\\log(${b})}{${av}}}\\approx ${solv}$`
];

let listecorrections =[`$x^{${av}}=${b}\\iff \\log\\left(x^{${av}}\\right)=\\log (${b})$ <br>
$\\phantom{x^{${av}}=${b}}\\iff ${av}\\log(x)=\\log(${b})$ <br>
$\\phantom{x^{${av}}=${b}}\\iff \\log(x)=\\dfrac{\\log(${b})}{${av}}$ <br><br>
$\\phantom{x^{${av}}=${b}}\\iff 10^{\\log(x)}=10^{\\frac{\\log(${b})}{${av}}}$ <br>
$\\phantom{x^{${av}}=${b}}\\iff x=10^{\\frac{\\log(${b})}{${av}}}\\approx ${solv}$ `];

enonce.innerHTML = listeenonces[0];
solution.innerHTML = listesolutions[0];
correctiond.innerHTML = listecorrections[0];

enonce.addEventListener("load", function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

correction.addEventListener('click', () => {
    correctiond.style.display = "block";
    correctiond.innerHTML ;
})

solutions.addEventListener('click', () => {
    solution.style.display = "block";
    solution.innerHTML ;
})

recommencer.addEventListener('click', () => {
    location.reload();
})

accueil.addEventListener('click', () => {
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTaleTechno.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTSTExpos.html";
})
