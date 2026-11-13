function u0() {
    return Math.floor(Math.random() * 10);
}

let liste = ["z", "-", "+"]

function choisirListe(liste) {
    let longueur = liste.length;
    let choix = Math.floor(Math.random() * longueur);
    return liste[choix];
}

function raison() {
    return Math.floor(Math.random() * 20);
}

function indice() {
    return Math.floor(Math.random() * 20) + 1;
}

function indice1() {
    return Math.floor(Math.random() * 20) + 1;
}

function indice2(a) {
    let ind2;
    ind2 = Math.floor(Math.random() * 20) + 1;
    while (ind2 == a) {
        ind2 = Math.floor(Math.random() * 20) + 1;
    }
    return ind2;
}

function rép(u_0, n, r) {
    return u_0 + n * r;
}


function controle(saisie) {
    document.getElementById("pp").innerHTML = `La réponse proposée est ${saisie}`;
}

function différence(a, b) {
    let diff;
    if (a > b) {
        diff = a - b;
    } else {
        diff = b - a;
    }
    return diff;
}

function mini(a, b) {
    let min;
    if (a > b) {
        min = b;
    } else {
        min = a;
    }
    return min;
}

function maxi(a, b) {
    let max;
    if (a > b) {
        max = a;
    } else {
        max = b;
    }
    return max;
}

function test(saisie, r) {
    let result;
    if (saisie == r) {
        result = 'correcte';
    } else {
        result = 'fausse';
    }
    return "est une proposition " + result;

}

var valider = document.getElementById('valider');
var solutions = document.getElementById('solutions');
var recommencer = document.getElementById('recommencer');
var accueil = document.getElementById('accueil');
var saisie;
let TEST;
let enonce = document.getElementById('enonce');
let enonce2 = document.getElementById('enonce2');
let enonce3 = document.getElementById('enonce3');
let solution = document.getElementById('solution');
let correction = document.getElementById('correction');
let u_0 = u0();
let un1 = indice1();
let un2 = indice2(un1);
let r = raison();
let n = indice();
let rep = raison();
let u_n1 = rép(u_0, un1, r);
let u_n2 = rép(u_0, un2, r);
let dif = différence(un1, un2);
let Max = maxi(un1, un2);
let Min = mini(un1, un2);
let uMax = rép(u_0, Max, r);
let uMin = rép(u_0, Min, r);
let difftermes = uMax - uMin;

console.log(TEST)
enonce.innerHTML = `$(u_n)$ est la suite arithmétique telle que \\(u_{${un1}}=\\) ${u_n1} et \\(u_{${un2}}=\\) ${u_n2}</br>
Calculer  la raison $r$ de la suite $(u_n)$`;
solution.innerHTML = `$r= ${r} $`;
correctiond.innerHTML =  `$\\begin{array}{rcl} u_{${Min}} + ${dif} \\times~r  & =  & u_{${Max}} \\\\ 
${uMin} + ${dif} \\times~r & = & ${uMax} \\\\
${dif} \\times~r & = & ${uMax} - ${uMin} = ${difftermes} \\\\
r & = & \\dfrac{${difftermes}}{${dif}} = ${r} \\end{array}$`;


enonce.addEventListener("load", function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

correction.addEventListener('click', () => {
    correctiond.style.display = "block";
    correctiond.innerHTML ;
})

solutions.addEventListener('click', () => {
    solution.style.display = "block"
});

recommencer.addEventListener('click', () => {
    location.reload();
})

accueil.addEventListener('click', () => {
    location.href = "../../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../../Menus/MenuTaleTechno.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../Menus/MenuTSTSuites.html";
})