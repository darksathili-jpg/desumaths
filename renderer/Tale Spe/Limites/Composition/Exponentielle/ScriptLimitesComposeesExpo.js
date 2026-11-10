function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function infinis() {
    let rep;
    let choix = nbrealéa(1,2);
    if (choix==1) {rep='+\\infty';} else {rep='-\\infty';}
    return rep;
}

function nbreouoppose(a) {
    let rep;
    let choix = nbrealéa(1,2);
    if (choix==1) {rep=a;} else {rep=-a;}
    return rep;
}

function limpolyinf(a,infini) {
    let rep;
    if (a<0 && infini=='+\\infty') {rep='-\\infty';}
    if (a<0 && infini=='-\\infty') {rep='+\\infty';}
    if (a>0 && infini=='+\\infty') {rep='+\\infty';}
    if (a>0 && infini=='-\\infty') {rep='-\\infty';}
    return rep;
}

function limexpo(lim) {
    let rep;
    if (lim=='-\\infty') {rep='0';} else {rep='+\\infty';}
    return rep;
}

function test_réponse(a,b,c) {
    let test;
    let div=a/b;
    if (div==c) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

let infini = infinis();
let a = nbreouoppose(nbrealéa(2,10));
let limpoly = limpolyinf(a,infini);
let limexp = limexpo(limpoly);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


enonce.innerHTML = `Déterminer la limite en $${infini}$ de la fonction $x\\mapsto\\text{e}^{${a}x}$`;
solution.innerHTML = `$\\displaystyle{\\lim_{x\\to ${infini}} \\text{e}^{${a}x}}=${limexp} $`;
correctiond.innerHTML = `$x\\mapsto\\text{e}^{${a}x}$ est la composée de $x\\mapsto ${a}x$ suivie de $x\\mapsto\\text{e}^x$<br>
$\\left. \\begin{array} 0\\displaystyle{\\lim_{x\\to ${infini}} \\left(${a}x\\right)}=${limpoly} \\\\ \\displaystyle{\\lim_{x\\to ${limpoly}} \\text{e}^x}=${limexp} \\end{array} \\right\\}  \\stackrel{\\text{composition}}{\\implies} \\displaystyle{\\lim_{x\\to ${infini}} \\text{e}^{${a}x}}=${limexp} $`

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
    location.href = "../../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../../Menus/MenuTaleSpe.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../Menus/MenuTaleLimites.html";
})