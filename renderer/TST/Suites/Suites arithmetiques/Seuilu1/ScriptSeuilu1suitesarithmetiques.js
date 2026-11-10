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
let u1 = u0+r;
let oppu1 = -u1;
let u1bis = u0bis+oppr2;
let oppu1bis = -u1bis;
let soppu1 = rienplus(oppu1);
let seuilplusoppu1 = seuil+oppu1;
let repvirguleu1 = avecVirgule(Math.round(seuilplusoppu1/r*100)/100+1);
let seuilinfplusoppu1 = seuilinf+oppu1bis;
let rep2virguleu1 = avecVirgule(Math.round(seuilinfplusoppu1/oppr2*100)/100+1);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');
var Test;


let listeenonces = [`Soit $(u_n)$ la suite arithmétique de premier terme $u_1=${u1}$ et de raison $r=${r}$<br>
Déterminer le rang $n$ à partir duquel $u_n$ devient supérieur à $${seuil}$.`,
`Soit $(u_n)$ la suite arithmétique de premier terme $u_1=${u1bis}$ et de raison $r=${oppr2}$<br>
Déterminer le rang $n$ à partir duquel $u_n$ devient inférieur à $${seuilinf}$.`];

let listesolutions = [`À partir de $n=${n}$`,`À partir de $n=${n}$`];

let listecorrections =[`Il faut résoudre : $u_n\\geqslant ${seuil}$, ce qui donne :<br>
$\\begin{array}{rcl} \\underbrace{${u1}+(n-1)\\times ${r}}_{u_1~+~(n-1)~\\times~r} & \\geqslant & ${seuil} \\\\
(n-1)\\times ${r} & \\geqslant & ${seuil} ${soppu1} ${oppu1} \\\\
(n-1)\\times ${r} & \\geqslant & ${seuilplusoppu1} \\\\
n-1 & \\geqslant & \\dfrac{${seuilplusoppu1}}{${r}} \\\\
n & \\geqslant & \\dfrac{${seuilplusoppu1}}{${r}}+1 \\\\
n & \\geqslant & ${repvirguleu1}
\\end{array}$<br> donc à partir de $n=${n}$.`,
`Il faut résoudre : $u_n\\leqslant ${seuilinf}$, ce qui donne :<br>
$\\begin{array}{rcl} \\underbrace{${u1bis}+(n-1)\\times (${oppr2})}_{u_1~+~(n-1)~\\times~r} & \\leqslant & ${seuilinf} \\\\
(n-1)\\times (${oppr2}) & \\leqslant & ${seuilinf} - ${u1bis} \\\\
(n-1)\\times (${oppr2}) & \\leqslant & ${seuilinfplusoppu1} \\\\
n-1 & \\geqslant & \\dfrac{${seuilinfplusoppu1}}{${oppr2}} \\\\
n & \\geqslant & \\dfrac{${seuilinfplusoppu1}}{${oppr2}}+1 \\\\
n & \\geqslant & ${rep2virguleu1}
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

