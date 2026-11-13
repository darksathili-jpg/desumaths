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

function choixa() {
    let choix = [nbrealéa(1,9),nbrealéa(11,99)];
    let k = nbrealéa(0,1);
    return rep=choix[k] ;
}

function supinf0(a) {
    let rep;
    if (a>1) {rep=`<`;} else {rep=`>`;}
    return rep;
}

function supinf1(a) {
    let rep;
    if (a>1) {rep=`\\leqslant`;} else {rep=`\\geqslant`;}
    return rep;
}

function supinf2(a) {
    let rep;
    if (a>1) {rep=`>`;} else {rep=`<`;}
    return rep;
}

function supinf3(a) {
    let rep;
    if (a>1) {rep=`\\geqslant`;} else {rep=`\\leqslant`;}
    return rep;
}

function sol0(a) {
    let rep;
    if (a/10>1) {rep=`\\left]-\\infty~;~\\dfrac{\\log(${b})}{\\log(${av})}\\right[`;} else {rep=`\\left]\\dfrac{\\log(${b})}{\\log(${av})}~;~+\\infty\\right[`;}
    return rep;
}

function sol1(a) {
    let rep;
    if (a/10>1) {rep=`\\left]-\\infty~;~\\dfrac{\\log(${b})}{\\log(${av})}\\right]`;} else {rep=`\\left[\\dfrac{\\log(${b})}{\\log(${av})}~;~+\\infty\\right[`;}
    return rep;
}

function sol2(a) {
    let rep;
    if (a/10>1) {rep=`\\left]\\dfrac{\\log(${b})}{\\log(${av})}~;~+\\infty\\right[`;} else {rep=`\\left]-\\infty~;~\\dfrac{\\log(${b})}{\\log(${av})}\\right[`;}
    return rep;
}

function sol3(a) {
    let rep;
    if (a/10>1) {rep=`\\left[\\dfrac{\\log(${b})}{\\log(${av})}~;~+\\infty\\right[`;} else {rep=`\\left]-\\infty~;~\\dfrac{\\log(${b})}{\\log(${av})}\\right]`;}
    return rep;
}

function sol4(a) {
    let rep;
    if (a/10>1) {rep=`\\left]-\\infty~;~\\dfrac{\\log \\left(\\dfrac{${b}}{${c}}\\right)}{\\log\\left(${av}\\right)}\\right[`;} else {rep=`\\left]\\dfrac{\\log \\left(\\dfrac{${b}}{${c}}\\right)}{\\log\\left(${av}\\right)}~;~+\\infty\\right[`;}
    return rep;
}

function sol5(a) {
    let rep;
    if (a/10>1) {rep=`\\left]-\\infty~;~\\dfrac{\\log \\left(\\dfrac{${b}}{${c}}\\right)}{\\log\\left(${av}\\right)}\\right]`;} else {rep=`\\left[\\dfrac{\\log \\left(\\dfrac{${b}}{${c}}\\right)}{\\log\\left(${av}\\right)}~;~+\\infty\\right[`;}
    return rep;
}

function sol6(a) {
    let rep;
    if (a/10>1) {rep=`\\left]\\dfrac{\\log \\left(\\dfrac{${b}}{${c}}\\right)}{\\log\\left(${av}\\right)}~;~+\\infty\\right[`;} else {rep=`\\left]-\\infty~;~\\dfrac{\\log \\left(\\dfrac{${b}}{${c}}\\right)}{\\log\\left(${av}\\right)}\\right[`;}
    return rep;
}

function sol7(a) {
    let rep;
    if (a/10>1) {rep=`\\left[\\dfrac{\\log \\left(\\dfrac{${b}}{${c}}\\right)}{\\log\\left(${av}\\right)}~;~+\\infty\\right[`;} else {rep=`\\left]-\\infty~;~\\dfrac{\\log \\left(\\dfrac{${b}}{${c}}\\right)}{\\log\\left(${av}\\right)}\\right]`;}
    return rep;
}

let a = choixa();
let av = arrondi(a/10,1);
let b = nbrealéa(1,99);
let sol = Math.log10(b)/Math.log10(a/10);
let solv = arrondi(sol,2);
let si0 = supinf0(a/10);
let s0 = sol0(a);
let si1 = supinf1(a/10);
let s1 = sol1(a);
let si2 = supinf2(a/10);
let s2 = sol2(a);
let si3 = supinf3(a/10);
let s3 = sol3(a);
let c = nbrealéa(2,25);
let s4 = sol4(a);
let s5 = sol5(a);
let s6 = sol6(a);
let s7 = sol7(a);


let k = nbrealéa(0,7);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');
var Test;

let listeenonces = [`Résoudre dans $\\mathbb{R}$ l'inéquation $${av}^x<${b}$`,
    `Résoudre dans $\\mathbb{R}$ l'inéquation $${av}^x\\leqslant ${b}$`,
    `Résoudre dans $\\mathbb{R}$ l'inéquation $${av}^x> ${b}$`,
    `Résoudre dans $\\mathbb{R}$ l'inéquation $${av}^x\\geqslant ${b}$`,
    `Résoudre dans $\\mathbb{R}$ l'inéquation $${c}\\times ${av}^x<${b}$`,
    `Résoudre dans $\\mathbb{R}$ l'inéquation $${c}\\times ${av}^x\\leqslant ${b}$`,
    `Résoudre dans $\\mathbb{R}$ l'inéquation $${c}\\times ${av}^x> ${b}$`,
    `Résoudre dans $\\mathbb{R}$ l'inéquation $${c}\\times ${av}^x\\geqslant ${b}$`
];

let listesolutions = [`$S=${s0}$`,
                      `$S=${s1}$`,
                      `$S=${s2}$`,
                      `$S=${s3}$`,
                      `$S=${s4}$`,
                      `$S=${s5}$`,
                      `$S=${s6}$`,
                      `$S=${s7}$`
];

let listecorrections =[`$${av}^x<${b}\\iff \\log\\left(${av}^x\\right)<\\log (${b})$ <br>
$\\phantom{${av}^x<${b}}\\iff x\\log(${av})<\\log(${b})$ <br>
$\\phantom{${av}^x<${b}}\\iff x${si0}\\dfrac{\\log(${b})}{\\log(${av})}\\approx ${solv}$ <br>
$S=${s0}$`,
`$${av}^x<${b}\\iff \\log\\left(${av}^x\\right)\\leqslant\\log (${b})$ <br>
$\\phantom{${av}^x<${b}}\\iff x\\log(${av})\\leqslant\\log(${b})$ <br>
$\\phantom{${av}^x<${b}}\\iff x${si1}\\dfrac{\\log(${b})}{\\log(${av})}\\approx ${solv}$ <br>
$S=${s1}$`,
`$${av}^x<${b}\\iff \\log\\left(${av}^x\\right)>\\log (${b})$ <br>
$\\phantom{${av}^x<${b}}\\iff x\\log(${av})>\\log(${b})$ <br>
$\\phantom{${av}^x<${b}}\\iff x${si2}\\dfrac{\\log(${b})}{\\log(${av})}\\approx ${solv}$ <br>
$S=${s2}$`,
`$${av}^x<${b}\\iff \\log\\left(${av}^x\\right)\\geqslant\\log (${b})$ <br>
$\\phantom{${av}^x<${b}}\\iff x\\log(${av})\\geqslant\\log(${b})$ <br>
$\\phantom{${av}^x<${b}}\\iff x${si3}\\dfrac{\\log(${b})}{\\log(${av})}\\approx ${solv}$ <br>
$S=${s3}$`,
`$${c}\\times ${av}^x<${b}\\iff ${av}^x<\\dfrac{${b}}{${c}}$ <br>
$\\phantom{${c}\\times ${av}^x<${b}}\\iff\\log\\left(${av}^x\\right)<\\log \\left(\\dfrac{${b}}{${c}}\\right)$ <br>
$\\phantom{${c}\\times ${av}^x<${b}}\\iff x\\log\\left(${av}\\right) < \\log \\left(\\dfrac{${b}}{${c}}\\right)$ <br>
$\\phantom{${c}\\times ${av}^x<${b}}\\iff x ${si0} \\dfrac{\\log \\left(\\dfrac{${b}}{${c}}\\right)}{\\log\\left(${av}\\right)}$ <br>
$S=${s4}$`,
`$${c}\\times ${av}^x\\leqslant ${b}\\iff ${av}^x\\leqslant \\dfrac{${b}}{${c}}$ <br>
$\\phantom{${c}\\times ${av}^x<${b}}\\iff\\log\\left(${av}^x\\right)\\leqslant \\log \\left(\\dfrac{${b}}{${c}}\\right)$ <br>
$\\phantom{${c}\\times ${av}^x<${b}}\\iff x\\log\\left(${av}\\right) \\leqslant \\log \\left(\\dfrac{${b}}{${c}}\\right)$ <br>
$\\phantom{${c}\\times ${av}^x<${b}}\\iff x ${si1} \\dfrac{\\log \\left(\\dfrac{${b}}{${c}}\\right)}{\\log\\left(${av}\\right)}$ <br>
$S=${s5}$`,
`$${c}\\times ${av}^x>${b}\\iff ${av}^x>\\dfrac{${b}}{${c}}$ <br>
$\\phantom{${c}\\times ${av}^x<${b}}\\iff\\log\\left(${av}^x\\right)>\\log \\left(\\dfrac{${b}}{${c}}\\right)$ <br>
$\\phantom{${c}\\times ${av}^x<${b}}\\iff x\\log\\left(${av}\\right) >\\log \\left(\\dfrac{${b}}{${c}}\\right)$ <br>
$\\phantom{${c}\\times ${av}^x<${b}}\\iff x ${si2} \\dfrac{\\log \\left(\\dfrac{${b}}{${c}}\\right)}{\\log\\left(${av}\\right)}$ <br>
$S=${s6}$`,
`$${c}\\times ${av}^x\\geqslant ${b}\\iff ${av}^x\\geqslant \\dfrac{${b}}{${c}}$ <br>
$\\phantom{${c}\\times ${av}^x<${b}}\\iff\\log\\left(${av}^x\\right)\\geqslant \\log \\left(\\dfrac{${b}}{${c}}\\right)$ <br>
$\\phantom{${c}\\times ${av}^x<${b}}\\iff x\\log\\left(${av}\\right) \\geqslant \\log \\left(\\dfrac{${b}}{${c}}\\right)$ <br>
$\\phantom{${c}\\times ${av}^x<${b}}\\iff x ${si3} \\dfrac{\\log \\left(\\dfrac{${b}}{${c}}\\right)}{\\log\\left(${av}\\right)}$ <br>
$S=${s7}$`
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
