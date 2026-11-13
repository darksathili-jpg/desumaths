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
    if (cm>1) {rep="+";} else {rep="-";}
    return rep;
}

function plusrien(a) {
    let rep;
    if (a<0) {rep='';} else {rep='+';}
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
let pm = plusmoins(cm);
let cm1 = reppositive(cm);
let signecm1 = plusmoins(cm);
let k = nbrealéa(0,1);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');

let listeenonces = [`On multiplie une quantité par ${cmvirgule}.<br>
À quelle évolution en pourcentage cela correspond-il ?`,`Une quantité subit une ${hb} de ${taux} %.<br>
Quel est le coefficient multiplicateur associé à cette évolution ?`];

let listesolutions = [`Solution : cela correspond à une ${hb} de ${taux} %.`,`Solution : $\\text{CM}=${cmvirgule}$ `]

let listecorrections = [`Le coefficient multiplicateur CM est égal à ${cmvirgule}.<br>
$(\\text{CM}-1)\\times 100=(${cmvirgule}-1)\\times 100=${signecm1}~${cm1}$<br>
Donc cela correspond à une ${hb} de ${taux} %.`,`$\\text{CM}=\\left(1 ${pm} \\dfrac{${taux}}{100} \\right)=${cmvirgule}$`];

enonce.innerHTML = listeenonces[k];
solution.innerHTML = listesolutions[k];
correctiond.innerHTML = listecorrections[k];

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