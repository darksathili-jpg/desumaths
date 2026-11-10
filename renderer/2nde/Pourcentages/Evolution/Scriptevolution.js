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

function haussebaisse(cm) {
    let a;
    if (cm<1) {a='baisse';} else {a='hausse';}
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

function reponse(a,prix1,cm) {
    let rep;
    if (a==1) {rep=prix1;} else {rep=Math.round(prix1*cm*100)/100;}
    return rep;
}

function foisdiv(a) {
    let b;
    if (a==2) {b='\\times';} else {b=':';}
    return b;
}

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
}

let a = nbrealéa(1,2);
let prix1 = nbrealéa(100,1000);
let taux = nbrealéa(10,60);
let cm = coefficientmultiplicateur(taux);
let cmvirgule = avecVirgule(cm);
let hb = haussebaisse(cm);
let sub = subitasubit(a);
let p = prix(a,prix1,cm);
let pvirgule = avecVirgule(p);
let rep = reponse(a,prix1,cm);
let repvirgule = avecVirgule(rep);
let fd = foisdiv(a);
let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


enonce.innerHTML = `Un article ${sub[0]} ${pvirgule} € ${sub[1]} une ${hb} de ${taux} %.</br> Quel ${sub[2]} son prix ${sub[3]} ?`;
solution.innerHTML = `Solution : ${repvirgule} €`;
correctiond.innerHTML = `$${pvirgule}${fd} ${cmvirgule} = ${repvirgule}$`;

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