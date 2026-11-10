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

function baissehausse(cm) {
    let rep;
    if (cm>1) {rep='baisse';} else {rep='hausse';}
    return rep;
}

function plusmoins(cm) {
    let rep;
    if (cm>1) {rep="+";} else {rep="-";}
    return rep;
}

function cmreciproque(cm) {
    let rep=Math.round((1/cm)*10000)/10000;
    return rep;
}

function reppositive(cm) {
    let rep;
    let taux = (cm-1)*100;
    if (taux>0) {rep=Math.round(taux*100)/100;} else {rep=-Math.round(taux*100)/100;}
    return rep;
}

let taux = nbrealéa(5,60);
let cm = coefficientmultiplicateur(taux);
let cmvirgule = avecVirgule(cm);
let hb = haussebaisse(cm);
let bh = baissehausse(cm);
let pm = plusmoins(cm);
let cm2 = cmreciproque(cm);
let cm2v = avecVirgule(cm2);
let cm3 = avecVirgule(Math.round((cm2-1)*100*100)/100);
let rep = avecVirgule(reppositive(cm2));
let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


enonce.innerHTML = `Un prix subit une ${hb} de ${taux} %.<br>Quelle ${bh} faut-il appliquer au prix final pour qu'il revienne à son prix initial ? (on arrondira le résultat à 0,01 % près)` ;
solution.innerHTML = `Solution : il faut appliquer une ${bh} d'environ ${rep} %`;
correctiond.innerHTML = `Le coefficient multiplicateur correspondant à une ${hb} de ${taux} % est CM = 1 ${pm} $\\dfrac{${taux}}{100}$= ${cmvirgule}.<br>
On a donc : Prix initital $\\times$ ${cmvirgule} = Prix final<br>
Et donc : Prix initial = $\\dfrac{\\text{Prix final}}{${cmvirgule}}=\\text{Prix final}\\times \\dfrac{1}{${cmvirgule}}$<br>
Donc le prix final doit être multiplié par le coefficient multiplicateur CM'=$\\dfrac{1}{\\text{CM}}=\\dfrac{1}{${cmvirgule}}$ pour revenir au prix initial.<br>
Or CM'=$\\dfrac{1}{${cmvirgule}}\\approx ${cm2v}$, ce qui correspond à une ${bh} d'environ ${rep} % car $\\left(${cm2v}-1\\right)\\times 100=${cm3} $`;

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