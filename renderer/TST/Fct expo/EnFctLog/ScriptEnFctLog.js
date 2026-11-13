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

let p2 = nbrealéa(0,5);
let p3 = nbrealéa(1,5);
let p10 = nbrealéa(1,4);
let a = 2**p2*3**p3*10**p10;
let num1 = 2**p2*10**p10;
let denom1 = 3**p3;
let num2 = 2**p2;
let denom2 = 3**p3*10**p10;

let k = nbrealéa(0,2);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');
var Test;

let listeenonces = [`Écrire le nombre suivant en fonction de $\\log(2)$ et $\\log(3)$ : $A=\\log(${a})$`,
    `Écrire le nombre suivant en fonction de $\\log(2)$ et $\\log(3)$ : $A=\\log\\left(\\dfrac{${num1}}{${denom1}}\\right)$`,
     `Écrire le nombre suivant en fonction de $\\log(2)$ et $\\log(3)$ : $A=\\log\\left(\\dfrac{${num2}}{${denom2}}\\right)$`
];

let listesolutions = [`$A=${p2}\\log(2)+${p3}\\log(3)+${p10}$`,
    `$A=${p2}\\log(2)-${p3}\\log(3)+${p10}$`,
    `$A=${p2}\\log(2)-${p3}\\log(3)-${p10}$`
];

let listecorrections =[`$A=\\log(${a})=\\log\\left(2^{${p2}}\\times 3^{${p3}}\\times 10^{${p10}}\\right)=\\log\\left(2^{${p2}}\\right)+\\log\\left(3^{${p3}}\\right)+\\log\\left(10^{${p10}}\\right)$<br>
    $\\phantom{A}=${p2}\\log(2)+${p3}\\log(3)+${p10}\\log(10)=${p2}\\log(2)+${p3}\\log(3)+${p10}\\times 1=${p2}\\log(2)+${p3}\\log(3)+${p10}$`,
    `$A=\\log\\left(\\dfrac{${num1}}{${denom1}}\\right)=\\log(${num1})-\\log(${denom1})=\\log\\left(2^{${p2}}\\times 10^{${p10}}\\right)-\\log\\left(3^{${p3}}\\right)$<br>
    $\\phantom{A}=\\log\\left(2^{${p2}}\\right)+\\log\\left(10^{${p10}}\\right)-\\log\\left(3^{${p3}}\\right)=${p2}\\log(2)+${p10}\\log(10)-${p3}\\log(3)$ <br>
    $\\phantom{A}=${p2}\\log(2)+${p10}\\times 1-${p3}\\log(3)=${p2}\\log(2)-${p3}\\log(3)+${p10}$`,
    `$A=\\log\\left(\\dfrac{${num2}}{${denom2}}\\right)=\\log(${num2})-\\log(${denom2})=\\log\\left(2^{${p2}}\\right)-\\log\\left(3^{${p3}}\\times 10^{${p10}}\\right)$<br>
    $\\phantom{A}=\\log\\left(2^{${p2}}\\right)-\\left(\\log\\left(3^{${p3}}\\right)+\\log\\left(10^{${p10}}\\right)\\right)=${p2}\\log(2)-${p3}\\log(3)-${p10}\\log(10)$ <br>
    $\\phantom{A}=${p2}\\log(2)-${p3}\\log(3)-${p10}\\times 1=${p2}\\log(2)-${p3}\\log(3)-${p10}$`
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
