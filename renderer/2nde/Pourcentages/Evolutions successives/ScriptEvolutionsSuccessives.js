function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function coefficientmultiplicateur(t) {
    let haussebaisse=nbrealéa(1,2);
    let a;
    if (haussebaisse==1) {a=Math.round((1+t/100)*100)/100;} else {a=Math.round((1-t/100)*100)/100;}
    return a;
}

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
}

function haussebaisse(cm) {
    let rep;
    if (cm>1) {rep='hausse';} else {rep='baisse';}
    return rep;
}

function plusmoins(cm) {
    let rep;
    if (cm>1) {rep='+';} else {rep='-';}
    return rep;
}

function reppositive(cm) {
    let rep;
    let taux = (cm-1)*100;
    if (taux>0) {rep=Math.round(taux*10000)/10000;} else {rep=-Math.round(taux*10000)/10000;}
    return rep;
}

let prix1 = nbrealéa(1,10000);
let taux1 = nbrealéa(5,40);
let cm1 = coefficientmultiplicateur(taux1);
let cm1v = avecVirgule(cm1);
let taux2 = nbrealéa(5,40);
let cm2 = coefficientmultiplicateur(taux2);
let cm2v = avecVirgule(cm2);
let taux3 = nbrealéa(5,40);
let cm3 = coefficientmultiplicateur(taux3);
let cm3v = avecVirgule(cm3);
let hb1 = haussebaisse(cm1);
let hb2 = haussebaisse(cm2);
let hb3 = haussebaisse(cm3);
let s1 = plusmoins(cm1);
let s2 = plusmoins(cm2);
let s3 = plusmoins(cm3);
let cm = Math.round(cm1*cm2*cm3*1000000)/1000000;
let prix2 = Math.round(prix1*cm1*cm2*cm3*100)/100;
let prix2v = avecVirgule(prix2);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


enonce.innerHTML = `Un article coûte initialement ${prix1} €.<br>
Il subit une ${hb1} de ${taux1} % puis une ${hb2} de ${taux2} % et enfin une ${hb3} de ${taux3} %.<br>
Quel est son prix final (arrondi au centime d'euro) ?` ;
solution.innerHTML = `Le prix final est d'environ ${prix2v} €`;
correctiond.innerHTML = `$\\text{Prix final} = ${prix1} \\times \\left(1 ${s1} \\dfrac{${taux1}}{100}\\right) \\times \\left(1 ${s2} \\dfrac{${taux2}}{100}\\right) \\times \\left(1 ${s3} \\dfrac{${taux3}}{100}\\right)$<br>
$\\phantom{\\text{Prix final}} =${prix1}\\times ${cm1v} \\times ${cm2v} \\times ${cm3v} \\approx ${prix2v}$`;

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
    location.href = "../../../Menus/MenuSecondePourcentages.html";
})