function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function parentheses(r) {
    let rep;
    let parg;
    let pard;
    if (r<0) {parg='(';} else {parg='';}
    if (r<0) {pard=')';} else {pard='';}
    rep=[parg,pard];
    return rep;
}

function test_réponse(a,b) {
    let test;
    if (a==b) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

let u0 = nbrealéa(1,10);
let r = nbrealéa(-20,20);
let n1 = nbrealéa(1,20);
let rep = u0+n1*r;
let par = parentheses(r);
let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


enonce.innerHTML = `Soit $(u_n)$ une suite arithmétique de premier terme $u_0=${u0}$ et de raison $r=${r}$. </br>
Calculer $u_{${n1}}$.`;
solution.innerHTML = `Solution : $u_{${n1}}=${rep}$ `;
correctiond.innerHTML = `$u_{${n1}}=u_0+ ${n1}\\times r=${u0}+${n1}\\times ${par[0]} ${r} ${par[1]} =${rep} $`;

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