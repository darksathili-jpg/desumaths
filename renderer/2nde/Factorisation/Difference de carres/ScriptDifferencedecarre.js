function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function signeinitial() {
    let a = nbrealéa(1,2);
    let signe;
    if (a==1) {signe='';} else {signe='-';}
    return signe;
}

function signe() {
    let a = nbrealéa(1,2);
    let sig;
    if (a==1) {sig='+';} else {sig='-';}
    return sig;
}

function signedeuxiemeparenthese(s1,s2) {
    let reponse;
    if (s1=='+' && s2=='') {reponse='+';}
    else if (s1=='+' && s2=='+') {reponse='+';}
    else if (s1=='-' && s2=='-') {reponse='+';}
    else {reponse='-';}
    return reponse;
}

function sommex(a,b,s1,s2) {
    let somx;
    if (s1=='' && s2=='+') {somx=a+b;}
    else if (s1=='' && s2=='-') {somx=a-b;}
    else if (s1=='+' && s2=='-') {somx=a-b;}
    else if (s1=='+' && s2=='+') {somx=a+b;}
    else if (s1=='-' && s2=='+') {somx=-a+b;}
    else {somx=-a-b;}
    return somx;
}

function sommenombres(a,b,s1,s2) {
    let somx;
    if (s1=='+' && s2=='+') {somx=a+b;}
    else if (s1=='+' && s2=='-') {somx=a-b;}
    else if (s1=='-' && s2=='+') {somx=-a+b;}
    else {somx=-a-b;}
    if (somx<0) {somx=-somx;}
    return somx;
}

function signefinal(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}


function test_réponse(a,b,c) {
    let test;
    let div=a/b;
    if (div==c) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

let a = nbrealéa(1,10);
let b = nbrealéa(1,10);
let c = nbrealéa(1,10);
let d = nbrealéa(1,10);
let signe1 = signeinitial();
let signe2 = signe();
let signe3 = signeinitial();
let signe4 = signe();
let signe5 = signedeuxiemeparenthese('+',signe3);
let signe6 = signedeuxiemeparenthese('+',signe4);
let signe7 = signedeuxiemeparenthese('-',signe3);
let signe8 = signedeuxiemeparenthese('-',signe4);
let somx1 = sommex(a,c,signe1,signe5);
let somreels1 = sommenombres(b,d,signe2,signe6);
let signe10 = signefinal(sommex(b,d,signe2,signe6));
let somx2 = sommex(a,c,signe1,signe7);
let somreels2 = sommenombres(b,d,signe2,signe8);
let signe11 = signefinal(sommex(b,d,signe2,signe8));
let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');
let num = document.getElementById('num');
let denom = document.getElementById('denom');
let saisie_num = document.getElementById('saisie_num');
let saisie_denom = document.getElementById('saisie_denom');


enonce.innerHTML = `Factoriser l'expression : $(${signe1} ${a} x ${signe2} ${b})^2 - (${signe3} ${c} x ${signe4} ${d})^2 $`;
solution.innerHTML = `Solution : $(${somx1} x ${signe10} ${somreels1}) \\times (${somx2} x ${signe11} ${somreels2})$`;
correctiond.innerHTML = `$\\begin{array}{rcl} \\underbrace{(${signe1} ${a} x ${signe2} ${b})^2}_{a^2} - \\underbrace{(${signe3} ${c} x ${signe4} ${d})^2}_{b^2} & = & [\\underbrace{(${signe1} ${a} x ${signe2} ${b})}_a + \\underbrace{(${signe3} ${c} x ${signe4} ${d})}_b] \\times [\\underbrace{(${signe1} ${a} x ${signe2} ${b})}_a - \\underbrace{(${signe3} ${c} x ${signe4} ${d})}_b] \\\\
& = & (${signe1} ${a} x ${signe2} ${b} ${signe5} ${c} x ${signe6} ${d}) \\times (${signe1} ${a} x ${signe2} ${b} ${signe7} ${c} x ${signe8} ${d}) \\\\
& = & (${somx1} x ${signe10} ${somreels1}) \\times (${somx2} x ${signe11} ${somreels2}) \\end{array}$`;

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
    location.href = "../../../Menus/MenuSecondeFactorisations.html";
})