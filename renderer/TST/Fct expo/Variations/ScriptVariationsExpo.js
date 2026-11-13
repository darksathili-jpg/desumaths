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

let a = nbrealéa(2,9);
let b1 = nbrealéa(11,99);
let bv1 = arrondi(b1/10,1);
let b2 = nbrealéa(2,9);
let bv2 = arrondi(b2/10,1);


let k = nbrealéa(0,3);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');
var Test;

let listeenonces = [`Déterminer le sens de variation de la fonction $f$ définie sur $\\mathbb{R}$ par $f(x)=${a}\\times ${bv1}^x$`,
`Déterminer le sens de variation de la fonction $f$ définie sur $\\mathbb{R}$ par $f(x)=-~${a}\\times ${bv1}^x$`,
`Déterminer le sens de variation de la fonction $f$ définie sur $\\mathbb{R}$ par $f(x)=${a}\\times ${bv2}^x$`,
`Déterminer le sens de variation de la fonction $f$ définie sur $\\mathbb{R}$ par $f(x)=-~${a}\\times ${bv2}^x$`
];

let listesolutions = [`$f$ est croissante sur $\\mathbb{R}$`,
`$f$ est décroissante sur $\\mathbb{R}$`,
`$f$ est décroissante sur $\\mathbb{R}$`,
`$f$ est croissante sur $\\mathbb{R}$`
];

let listecorrections =[`$\\bullet$ $${bv1}^x$ est croissant car $${bv1}>1$ <br>
    $\\bullet$ Multiplier par un nombre positif (${a}) ne change pas les variations donc  $f$ est croissante sur $\\mathbb{R}$.`,
    `$\\bullet$ $${bv1}^x$ est croissant car $${bv1}>1$ <br>
    $\\bullet$ Multiplier par un nombre négatif ($-~${a}$) change les variations donc  $f$ est décroissante sur $\\mathbb{R}$.`,
    `$\\bullet$ $${bv2}^x$ est décroissant car $0<${bv2}<1$ <br>
    $\\bullet$ Multiplier par un nombre positif (${a}) ne change pas les variations donc  $f$ est décroissante sur $\\mathbb{R}$.`,
    `$\\bullet$ $${bv2}^x$ est décroissant car $0<${bv2}<1$ <br>
    $\\bullet$ Multiplier par un nombre négatif ($-~${a}$) change les variations donc  $f$ est croissante sur $\\mathbb{R}$.`,
];

enonce.innerHTML = listeenonces[k];
solution.innerHTML = listesolutions[k];
correctiond.innerHTML = listecorrections[k];

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
