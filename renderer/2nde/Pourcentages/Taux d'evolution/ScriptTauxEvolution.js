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

function subitasubit(a) {
    let b;
    let c;
    let d;
    let e;
    let f;
    if (a==1) {b='coûtant au final';} else {b='coûte initialement';}
    if (a==1) {c='a subit';} else {c='et subit';}
    if (a==1) {d='était';} else {d='sera';}
    if (a==1) {e='initial';} else {e='final';}
    f=[b,c,d,e];
    return f;
} 

function prix(a,p1,cm) {
    let p;
    if (a==1) {p=Math.round(p1*cm*100)/100;} else {p=p1;}
    return p;
}

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
}

function plusrien(cm) {
    let rep;
    if (cm>1) {rep='+';} else {rep='-';}
    return rep;
}

function haussebaisse(cm) {
    let rep;
    if (cm>1) {rep='hausse';} else {rep='baisse';}
    return rep;
}

let a = nbrealéa(1,2);
let prix1 = nbrealéa(100,1000);
let taux = nbrealéa(10,60);
let cm = coefficientmultiplicateur(taux);
let cmvirgule = avecVirgule(cm);
let prix2 = prix1*cm;
let prix2virgule = avecVirgule(Math.round(prix2*100)/100);
let plusmoins = plusrien(cm);
let hb = haussebaisse(cm);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


enonce.innerHTML = `Un article qui coûtait ${prix1} € coûte maintenant ${prix2virgule} € </br>
Quel est le taux d'évolution entre ces deux valeurs ?` ;
solution.innerHTML = `Solution : ${plusmoins} ${taux} %`;
correctiond.innerHTML = `Méthode 1 : $\\left( \\dfrac{V_A}{V_D}-1 \\right) \\times 100= \\left(\\dfrac{${prix2virgule}}{${prix1}}-1\\right)\\times 100=${plusmoins} ${taux}$ ce qui correspond à une ${hb} de ${taux} %</br></br>
Méthode 2 : $\\left(\\dfrac{V_A-V_D}{V_D}\\right)\\times 100=\\left(\\dfrac{${prix2virgule}-${prix1}}{${prix1}}\\right)\\times 100=${plusmoins} ${taux}$ ce qui correspond à une ${hb} de ${taux} %`;

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