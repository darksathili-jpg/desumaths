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
let b = nbrealéa(1,99);
let bv = arrondi(b/10,1);
let c = nbrealéa(1,99);
let cv = arrondi(c/10,1);
let d = nbrealéa(1,99);
let dv = arrondi(d/10,1);
let e = nbrealéa(1,99);
let ev = arrondi(e/10,1);
let bplusd = arrondi((b+d)/10,1);
let cpluse = arrondi((c+e)/10,1);
let bmoinsd = arrondi((b-d)/10,1);
let cmoinse = arrondi((c-e)/10,1);
let scmoinse =rienplus(c-e);
let mentier = nbrealéa(2,10);
let bfoismentier = arrondi((b*mentier)/10,1);
let cfoismentier = arrondi((c*mentier)/10,1);

let k = nbrealéa(0,2);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');
var Test;

let listeenonces = [`Simplifier au maximum : $A=${a}^{${bv}~x~+~${cv}}\\times ${a}^{${dv}~x~+~${ev}}$`,
`Simplifier au maximum : $A=\\dfrac{${a}^{${bv}~x~+~${cv}}}{${a}^{${dv}~x~+~${ev}}}$`,
`Simplifier au maximum : $A=\\left(${a}^{${bv}~x~+~${cv}}\\right)^{${mentier}} $`
];

let listesolutions = [`$A=${a}^{${bplusd}~x~+~${cpluse}}$`,
    `$A=${a}^{${bmoinsd}~x~${scmoinse}~${cmoinse}}$`,
    `$A=${a}^{${bfoismentier}~x~+~${cfoismentier}}$`
];

let listecorrections =[`$A=${a}^{${bv}~x~+~${cv}~+~${dv}~x~+~${ev}}=${a}^{${bplusd}~x~+~${cpluse}}$`,
    `$A=${a}^{${bv}~x~+~${cv}~-~(${dv}~x~+~${ev})}=${a}^{${bv}~x~+~${cv}~-~${dv}~x~-~${ev}}=${a}^{${bmoinsd}~x~${scmoinse}~${cmoinse}}$`,
    `$A=${a}^{(${bv}~x~+~${cv})\\times ${mentier}}=${a}^{${bv}~x~\\times~${mentier}~+~${cv}~\\times~${mentier}}=${a}^{${bfoismentier}~x~+~${cfoismentier}}$`
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
