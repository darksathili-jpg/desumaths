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

function posneg(a) {
    let rep;
    if (a<0) {rep=['négatif','décroissante'];}
    else {rep=['positif','croissante'];}
    return rep;
}



function test_réponse(e,f) {
    let test;
    if (e==f) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

let a = nbreouoppose(nbrealéa(1,10));
let b = nbreouoppose(nbrealéa(1,10));
let sb = rienplus(b);
let sa = rienplus(a);
let oppa = -a;
let soppa = rienplus(oppa);
let oppb = -b;
let soppb = rienplus(oppb);
let pn = posneg(a);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');
var Test;

let listeenonces = [`Déterminer le sens de variation de la suite $(u_n)$ définie pour tout $n\\in\\mathbb{N}$ par : $u_n=${a}n ${sb}${b}$.`];

let listesolutions = [`La suite $(u_n)$ est ${pn[1]}.`];

let listecorrections = [`$u_{n+1}-u_n=\\underbrace{${a}(n+1)${sb}${b}}_{u_{n+1}}-(\\underbrace{${a}n${sb}${b}}_{u_n})=${a}n${sa}${a}${sb}${b} ${soppa}${oppa}n${soppb}${oppb}=${a}$<br>
$u_{n+1}-u_n=${a}$ est ${pn[0]} donc la suite $(u_n)$ est ${pn[1]}.`];

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
    location.href = "../../../Menus/MenuTSTSuites.html";
})

