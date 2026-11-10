function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function sol(a) {
    let rep;
    if (a<0) {rep=0;}
	if (a==0) {rep=2;}
	if (a>0) {rep=1;}
    return rep;
}

function facteurs(a) {
    let rep=[1];
    let rep1;
    let facts=[];
    let facts1;
    let listeCarrés = [4,9,16,25,36,49,64,81];
    for (let i=2; i<a+1;i++) {
        if (a/i-Math.floor(a/i)==0) {rep1=rep.push(i);}
    }
    for (let j=0;j<rep.length;j++) {
        for (let k=0;k<listeCarrés.length;k++) {
            if (rep[j]==listeCarrés[k]) {facts1=facts.push(rep[j]);}
        }
    }
    return facts;
}


function tombejuste(a) {
    let carres = [1,4,9,16,25,36,49,64,81,100];
    let b;
    let c=0;
    if (a>0) {b=Math.sqrt(a);}
    if (a==0) {return `$S=\\left\\\{0\\right\\\}$`}
    if (a<0) {return `$S=\\varnothing$`}
    for (let i=0;i<carres.length;i++) {
        if (a==carres[i]) {c=1;}
    }
    if (c==0 & a>0) {return `$S=\\left\\\{\\sqrt{${a}}~;~-\\sqrt{${a}}\\right\\\}$`}
    if (c==1 & a>0) {return `$S=\\left\\\{-${b}~;~${b}\\right\\\}$`}
}

function test_réponse(a,b,c) {
    let test;
    let div=a/b;
    if (div==c) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

let a = nbrealéa(-10,100);
let videoupas = sol(a);
let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


let listeCorrections = [`$${a}$ est négatif donc il n'y a pas de solution`,`$${a}$ est positif ou nul donc $x=\\sqrt{${a}}$ ou $x=-\\sqrt{${a}}$`,`$${a}$ est nul donc il n'y a qu'une solution : $x=0$`];

enonce.innerHTML = `Résoudre dans $\\mathbb{R}$ l'équation : $x^2 = ${a}$`;
solution.innerHTML = tombejuste(a);
correctiond.innerHTML = listeCorrections[videoupas];

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
    location.href = "../../../../Menus/MenuSeconde.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../Menus/MenuSecondeEquations.html";
})