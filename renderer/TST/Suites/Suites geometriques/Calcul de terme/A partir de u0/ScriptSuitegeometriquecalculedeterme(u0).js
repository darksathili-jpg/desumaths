function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }


function test_réponse(a,b) {
    let test;
    if (a==b) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

let u0 = nbrealéa(1,10);
let q = nbrealéa(2,7);
let n1 = nbrealéa(1,10);
let rep = u0*q**n1;
let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


enonce.innerHTML = `Soit $(u_n)$ une suite géométrique de premier terme $u_0=${u0}$ et de raison $q=${q}$. </br>
Calculer $u_{${n1}}$.`;
solution.innerHTML = `Solution : $u_{${n1}}=${rep}$ `;
correctiond.innerHTML = `$u_{${n1}}=u_0\\times q^{${n1}}=${u0}\\times ${q}^{${n1}}=${rep} $`;

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