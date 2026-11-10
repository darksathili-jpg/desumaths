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

let a = nbrealéa(1,99);
let av = arrondi(a/10,1);
let b = nbrealéa(21,99);
let sol = Math.log10(b)/Math.log10(a/10);
let solv = arrondi(sol,2);
let c = nbrealéa(2,20);
let bmoinsc = b-c;
let d = nbrealéa(2,25);
let sol1 = Math.log10(bmoinsc)/Math.log10(a/10);
let solv1 = arrondi(sol1,2);
let sol2 = Math.log10(b/c)/Math.log10(a/10);
let solv2 = arrondi(sol2,2);
let sol3 = Math.log10(bmoinsc/d)/Math.log10(a/10);
let solv3 = arrondi(sol3,2);

let k = nbrealéa(0,4);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');
var Test;

let listeenonces = [`Résoudre dans $\\mathbb{R}$ l'équation $${av}^x=${b}$`,
    `Résoudre dans $\\mathbb{R}$ l'équation $${c}+${av}^x=${b}$`,
    `Résoudre dans $\\mathbb{R}$ l'équation $${c}\\times${av}^x=${b}$`,
    `Résoudre dans $\\mathbb{R}$ l'équation $${c}+${d}\\times${av}^x=${b}$`,
    `Résoudre dans $\\mathbb{R}$ l'équation $${av}^{x+${c}}=${b}$`
];

let listesolutions = [`$S=\\left\\{\\dfrac{\\log(${b})}{\\log(${av})}\\right\\}$`,
    `$S=\\left\\{\\dfrac{\\log(${bmoinsc})}{\\log(${av})}\\right\\}$`,
    `$S=\\left\\{\\dfrac{\\log \\left(\\dfrac{${b}}{${c}}\\right)}{\\log(${av})}\\right\\}$`,
    `$S=\\left\\{\\dfrac{\\log\\left(\\dfrac{${bmoinsc}}{${d}}\\right)}{\\log\\left(${av}\\right)}\\right\\}$`,
    `$S=\\left\\{\\dfrac{\\log(${b})-${c}\\log(${av})}{\\log(${av})}\\right\\}$`
];

let listecorrections =[`$${av}^x=${b}\\iff \\log\\left(${av}^x\\right)=\\log (${b})$ <br>
$\\phantom{${av}^x=${b}}\\iff x\\log(${av})=\\log(${b})$ <br>
$\\phantom{${av}^x=${b}}\\iff x=\\dfrac{\\log(${b})}{\\log(${av})}\\approx ${solv} $`,
`$${c}+${av}^x=${b}\\iff ${av}^x=${b}-${c}=${bmoinsc}$ <br>
$\\phantom{${c}+${av}^x=${b}}\\iff \\log\\left(${av}^x\\right)=\\log (${bmoinsc})$ <br>
$\\phantom{${c}+${av}^x=${b}}\\iff x\\log\\left(${av}\\right)=\\log (${bmoinsc})$ <br>
$\\phantom{${c}+${av}^x=${b}}\\iff x=\\dfrac{\\log (${bmoinsc})}{\\log(${av})}\\approx ${solv1} $`,
`$${c}\\times ${av}^x=${b}\\iff ${av}^x=\\dfrac{${b}}{${c}} $ <br>
$\\phantom{${c}\\times ${av}^x=${b}}\\iff \\log\\left(${av}^x\\right)=\\log \\left(\\dfrac{${b}}{${c}}\\right)$ <br>
$\\phantom{${c}\\time ${av}^x=${b}}\\iff x\\log\\left(${av}\\right)=\\log \\left(\\dfrac{${b}}{${c}}\\right)$ <br><br>
$\\phantom{${c}\\times ${av}^x=${b}}\\iff x=\\dfrac{\\log \\left(\\dfrac{${b}}{${c}}\\right)}{\\log(${av})}\\approx ${solv2} $`,
`$${c}+${d}\\times ${av}^x=${b}\\iff ${d}\\times ${av}^x=${b}-${c}=${bmoinsc} $ <br>
$\\phantom{${c}+${d}\\times ${av}^x=${b}}\\iff ${av}^x=\\dfrac{${bmoinsc}}{${d}}$ <br>
$\\phantom{${c}+${d}\\times ${av}^x=${b}}\\iff \\log\\left(${av}^x\\right)=\\log\\left(\\dfrac{${bmoinsc}}{${d}}\\right)$ <br>
$\\phantom{${c}+${d}\\times ${av}^x=${b}}\\iff x\\log\\left(${av}\\right)=\\log\\left(\\dfrac{${bmoinsc}}{${d}}\\right)$ <br><br>
$\\phantom{${c}+${d}\\times ${av}^x=${b}}\\iff x=\\dfrac{\\log\\left(\\dfrac{${bmoinsc}}{${d}}\\right)}{\\log\\left(${av}\\right)}\\approx ${solv3}$`,
`$${av}^{x+${c}}=${b}\\iff \\log\\left(${av}^{x+${c}}\\right)=\\log(${b})$ <br>
$\\phantom{${av}^{x+${c}}=${b}}\\iff (x+${c})\\times \\log(${av})=\\log(${b})$ <br>
$\\phantom{${av}^{x+${c}}=${b}}\\iff x\\times \\log(${av})+${c}\\log(${av}) =\\log(${b})$ <br>
$\\phantom{${av}^{x+${c}}=${b}}\\iff x\\times \\log(${av})=\\log(${b})-${c}\\log(${av}) $ <br><br>
$\\phantom{${av}^{x+${c}}=${b}}\\iff x=\\dfrac{\\log(${b})-${c}\\log(${av})}{\\log(${av})} $ <br>
`
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
