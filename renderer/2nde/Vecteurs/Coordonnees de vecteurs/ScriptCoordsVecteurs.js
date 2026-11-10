function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function parenthèsesgauchedraoite(a) {
    let rep;
    let pg;
    let pd;
    if (a<0) {pg='(';} else {pg='';}
    if (a<0) {pd=')';} else {pd='';}
    return rep=[pg,pd];
}

function simplifiactionsignes(xA,yA,xB,yB) {
    let rep;
    let xrep;
    let yrep;
    if (xA>0 && yA>0) {rep='';}
    if (xA<0) {xrep='${xB}+${-xA}';} else {xrep='${xB}-${xA}';}
    if (yA<0) {yrep='${yB}+${-yA}';} else {yrep='${yB}-${yA}';}
    if (xA<0 || yA<0) {rep='=\\begin{pmatrix}${xB} \\\\ 2 \\end{pmatrix}';} else {rep='';}
    return rep;
}

let xA = nbrealéa(-10,10);
let yA = nbrealéa(-10,10);
let xB = nbrealéa(-10,10);
let yB = nbrealéa(-10,10);
let pg1 = parenthèsesgauchedraoite(xA);
let pg2 = parenthèsesgauchedraoite(yA);
let repx = xB-xA;
let repy = yB-yA;
let repsimp = simplifiactionsignes(xA,yA,xB,yB);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


enonce.innerHTML = `Dans un repère $\\left(O;\\overrightarrow{i},\\overrightarrow{j}\\right)$ on donne les points $A(${xA}~;${yA})$ et $B(${xB}~;${yB})$. Déterminer les coordonnées du vecteur $\\overrightarrow{AB}$` ;
solution.innerHTML = `Solution : $\\overrightarrow{AB} \\begin{pmatrix} ${repx} \\\\ ${repy} \\end{pmatrix}$`;
correctiond.innerHTML = `$\\overrightarrow{AB} \\begin{pmatrix} x_B-x_A \\\\ y_B-y_A \\end{pmatrix}=\\begin{pmatrix} ${xB} - ${pg1[0]} ${xA} ${pg1[1]} \\\\ ${yB} - ${pg2[0]} ${yA} ${pg2[1]} \\end{pmatrix} = \\begin{pmatrix} ${repx} \\\\ ${repy} \\end{pmatrix}$`;

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
    location.href = "../../../Menus/MenuSecondeVecteurs.html";
})