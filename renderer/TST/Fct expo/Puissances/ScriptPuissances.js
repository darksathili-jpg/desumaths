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

let a = nbrealéa(2,9);
let n = nbrealéa(1,99);
let nv = arrondi(n/10,1);
let n2 = nbrealéa(1,99);
let n2v = arrondi(n2/10,1);
let n3 = nbrealéa(1,99);
let n3v = arrondi(n3/10,1);
let m = nbrealéa(1,99);
let mv = arrondi(m/10,1);
let nplusm = arrondi((n+m)/10,1);
let nmoinsm = arrondi((n-m)/10,1);
let mentier = nbrealéa(2,10);
let nfoismentier = arrondi(n*mentier/10,1);
let nmmoinsn2 = arrondi((n+m-n2)/10,1);
let ncas4 = arrondi((n-n2)*mentier/10,1);
let nmoinsn2 = arrondi((n-n2)/10,1);
let ncas5 = arrondi((n-n2-n3)/10,1);
let n2plusn3 = arrondi((n2+n3)/10,1);
let k = nbrealéa(0,5);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');
var Test;

let listeenonces = [`Simplifier au maximum : $A=${a}^{${nv}}\\times ${a}^{${mv}}$`,
`Simplifier au maximum : $A=\\dfrac{${a}^{${nv}}}{${a}^{${mv}}}$`,
`Simplifier au maximum : $A=\\left(${a}^{${nv}}\\right)^{${mentier}} $`,
`Simplifier au maximum : $A=${a}^{${nv}}\\times\\dfrac{${a}^{${mv}}}{${a}^{${n2v}}} $`,
`Simplifier au maximum : $A=\\left(\\dfrac{${a}^{${nv}}}{${a}^{${n2v}}} \\right)^{${mentier}} $`,
`Simplifier au maximum : $A=\\dfrac{${a}^{${nv}}}{${a}^{${n2v}}\\times ${a}^{${n3v}}} $`
];

let listesolutions = [`$A=${a}^{${nplusm}}$`,
    `$A=${a}^{${nmoinsm}}$`,
    `$A=${a}^{${nfoismentier}}$`,
    `$A=${a}^{${nmmoinsn2}}$`,
    `$A=${a}^{${ncas4}}$`,
    `$A=${a}^{${ncas5}}$`
];

let listecorrections =[`$A=${a}^{${nv}+${mv}}=${a}^{${nplusm}}$`,
    `$A=${a}^{${nv}-${mv}}=${a}^{${nmoinsm}}$`,
    `$A=${a}^{${nv}\\times ${mentier}}=${a}^{${nfoismentier}}$`,
    `$A=${a}^{${nv}}\\times ${a}^{${mv}-${n2v}}=${a}^{${nv}+${mv}-${n2v}}=${a}^{${nmmoinsn2}}$`,
    `$A=\\left(${a}^{${nv}-${n2v}}\\right)^{${mentier}}=\\left(${a}^{${nmoinsn2}}\\right)^{${mentier}}=${a}^{${nmoinsn2}\\times ${mentier}}=${a}^{${ncas4}}$`,
    `$A=\\dfrac{${a}^{${nv}}}{${a}^{${n2v}+${n3v}}}=\\dfrac{${a}^{${nv}}}{${a}^{${n2plusn3}}}=${a}^{${nv}-${n2plusn3}}=${a}^{${ncas5}}$`
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
