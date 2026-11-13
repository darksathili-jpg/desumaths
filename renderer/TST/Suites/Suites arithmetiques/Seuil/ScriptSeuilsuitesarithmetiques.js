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

function parenthesegd(a) {
    let rep;
    let pg;
    let pd;
    if (a<0) {pg='(';} else {pg='';}
    if (a<0) {pd=')';} else {pd='';}
    return rep = [pg,pd];
}

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
}

function test_réponse(e,f) {
    let test;
    if (e==f) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

let u0 = nbreouoppose(nbrealéa(1,10));
let oppu0 = -u0;
let u0bis = nbrealéa(50,300);
let oppu0bis = -u0bis;
let soppu0 = rienplus(oppu0);
let r = nbrealéa(5,15);
let oppr = -r;
let r2 = nbrealéa(2,10);
let oppr2 = -r2;
let n = nbrealéa(15,35);
let un = u0+n*r;
let un1 =u0bis+n*oppr2;
let seuil = un-nbrealéa(1,r-1);
let seuilinf = un1+nbrealéa(1,r2-1);
let seuilplusoppu0 = seuil+oppu0;
let seuilinfplusoppu0 = seuilinf+oppu0bis;
let repvirgule = avecVirgule(Math.round(seuilplusoppu0/r*100)/100);
let rep2virgule = avecVirgule(Math.round(seuilinfplusoppu0/oppr2*100)/100);
let k = nbrealéa(0,1);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');
var Test;


let listeenonces = [`Soit $(u_n)$ la suite arithmétique de premier terme $u_0=${u0}$ et de raison $r=${r}$<br>
Déterminer le rang $n$ à partir duquel $u_n$ devient supérieur à $${seuil}$.`,
`Soit $(u_n)$ la suite arithmétique de premier terme $u_0=${u0bis}$ et de raison $r=${oppr2}$<br>
Déterminer le rang $n$ à partir duquel $u_n$ devient inférieur à $${seuilinf}$.`];

let listesolutions = [`À partir de $n=${n}$`,`À partir de $n=${n}$`];

let listecorrections =[`Il faut résoudre : $u_n\\geqslant ${seuil}$, ce qui donne :<br>
$\\begin{array}{rcl} \\underbrace{${u0}+n\\times ${r}}_{u_0~+~n~\\times~r} & \\geqslant & ${seuil} \\\\
n\\times ${r} & \\geqslant & ${seuil} ${soppu0} ${oppu0} \\\\
n\\times ${r} & \\geqslant & ${seuilplusoppu0} \\\\
n & \\geqslant & \\dfrac{${seuilplusoppu0}}{${r}} \\\\
n & \\geqslant & ${repvirgule}
\\end{array}$<br> donc à partir de $n=${n}$.`,
`Il faut résoudre : $u_n\\leqslant ${seuilinf}$, ce qui donne :<br>
$\\begin{array}{rcl} \\underbrace{${u0bis}+n\\times (${oppr2})}_{u_0~+~n~\\times~r} & \\leqslant & ${seuilinf} \\\\
n\\times (${oppr2}) & \\leqslant & ${seuilinf} - ${u0bis} \\\\
n\\times (${oppr2}) & \\leqslant & ${seuilinfplusoppu0} \\\\
n & \\geqslant & \\dfrac{${seuilinfplusoppu0}}{${oppr2}} \\\\
n & \\geqslant & ${rep2virgule}
\\end{array}$<br> donc à partir de $n=${n}$.`];

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
    location.href = "../../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../../Menus/MenuTaleTechno.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../Menus/MenuTSTSuites.html";
})

