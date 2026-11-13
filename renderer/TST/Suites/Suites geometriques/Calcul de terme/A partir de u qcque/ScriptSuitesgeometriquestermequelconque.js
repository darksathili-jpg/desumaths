function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function indiceterme1() {
    let n1 = nbrealéa(0,15);
    return n1;
}

function indiceterme2(a) {
    let n2 = nbrealéa(0,15);
    while (a == n2) {n2 = nbrealéa(0,15);};
    return n2;
}

function test_réponse(a,b) {
    let test;
    if (a==b) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

function cas(ecart) {
    let k;
    if (ecart>0) {k=0;} else {k=1;}
    return k;
}

let a = nbrealéa(1,2);
let u0 = nbrealéa(1,10);
let q = nbrealéa(2,7);
let n1 = indiceterme1();
let n2 = indiceterme2(n1);
let un1 = u0*q**n1;
let un2 = u0*q**n2;
let ecart = n2-n1;
let oppecart = n1-n2;
let k = cas(ecart);
let soluce = [`$u_{${n2}}=u_{${n1}}\\times q^{${ecart}}$ <br>
$\\phantom{u_{${n2}}}=${un1}\\times ${q}^{${ecart}}$ <br>
$\\phantom{u_{${n2}}}=${un2}$`,`$\\underline{\\text{Méthode 1 :}}$<br>
$u_{${n2}}=u_{${n1}}\\times q^{${ecart}}$ <br>
$\\phantom{u_{${n2}}}=${un1}\\times ${q}^{${ecart}}$ <br>
$\\phantom{u_{${n2}}}=${un2}$ <br>
$\\underline{\\text{Méthode 2 :}}$ <br>
$u_{${n2}}=\\dfrac{u_{${n1}}}{q^{${oppecart}}}$  <br> <br>
$\\phantom{u_{${n2}}}=\\dfrac{${un1}}{${q}^{${oppecart}}}$ <br>
$\\phantom{u_{${n2}}}=${un2}$`];
let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


enonce.innerHTML = `Soit $(u_n)$ une suite géométrique de raison $q=${q}$ et telle que $u_{${n1}}=${un1}$. </br>
Calculer $u_{${n2}}$.`;
solution.innerHTML = `Solution : $u_{${n2}}=${un2}$`;
correctiond.innerHTML = soluce[k];

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
    location.href = "../../../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../../../Menus/MenuTaleTechno.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../../Menus/MenuTSTSuites.html";
})