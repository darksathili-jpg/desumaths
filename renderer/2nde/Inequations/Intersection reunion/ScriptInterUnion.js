function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function crochets() {
    let rep;
    let crochetg;
    let crochetd;
    let choix1 = nbrealéa(1,2);
    let choix2 = nbrealéa(1,2);
    if (choix1==1) {crochetg='[';} else {crochetg=']';}
    if (choix2==1) {crochetd=']';} else {crochetd='[';}
    return rep = [crochetg,crochetd];
}



let crochets1 = crochets();
let crochets2 = crochets();
let a = nbrealéa(-15,15);
let b = a + nbrealéa(1,5);
let c = b + nbrealéa(1,3);
let d = c + nbrealéa(1,4);
let a1 = nbrealéa(-15,15);
let b1 = a1 + nbrealéa(5,10);
let c1 = b1 - nbrealéa(1,4);
let d1 = c1 + nbrealéa(5,10);
let a2 = nbrealéa(-10,10);
let b2 = a2 + nbrealéa(7,10);
let c2 = b2 - nbrealéa(4,6);
let d2 = c2 + nbrealéa(1,3);
let k = nbrealéa(0,26);

let listeenonces = [`On donne les intervalles $I=~${crochets1[0]}${a}~;~${b}${crochets1[1]} $ et $J=~${crochets2[0]}${c}~;~${d}${crochets2[1]} $<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~${crochets1[0]}${a}~;~${b}]$ et $J~=[${b}~;~${d}${crochets2[1]}$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~${crochets1[0]}${a}~;~${b}[$ et $J=~[${b}~;~${d}${crochets2[1]}$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~${crochets1[0]}${a}~;~${b}]$ et $J=~]${b}~;~${d}${crochets2[1]}$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~${crochets1[0]}${a}~;~${b}[$ et $J=~]${b}~;~${d}${crochets2[1]}$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~${crochets1[0]}${a1}~;~${b1}${crochets1[1]} $ et $J=~${crochets2[0]}${c1}~;~${d1}${crochets2[1]}$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~]-\\infty~;~${b}${crochets1[1]} $ et $J=~${crochets2[0]}${c}~;~${d}${crochets2[1]} $<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~${crochets1[0]}${a}~;~${b}${crochets1[1]} $ et $J=~${crochets2[0]}${c}~;~+\\infty[$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~]-\\infty~;~${b}${crochets1[1]} $ et $J=~${crochets2[0]}${c}~;~+\\infty[ $<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~]-\\infty~;~${b}]$ et $J=~[${b}~;~${d}${crochets2[1]}$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~${crochets1[0]}${a}~;~${b}]$ et $J=~[${b}~;~+\\infty[$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~]-\\infty~;~${b}]$ et $J=~[${b}~;~+\\infty[$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~]-\\infty~;~${b}[$ et $J=~[${b}~;~${d}${crochets2[1]}$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~${crochets1[0]}${a}~;~${b}[$ et $J=~[${b}~;~+\\infty[$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~]-\\infty~;~${b}[$ et $J=~[${b}~;~+\\infty[$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~]-\\infty~;~${b}]$ et $J=~]${b}~;~${d}${crochets2[1]}$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~${crochets1[0]}${a}~;~${b}]$ et $J=~]${b}~;~+\\infty[$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~]-\\infty~;~${b}]$ et $J=~]${b}~;~+\\infty[$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~]-\\infty~;~${b}[$ et $J=~]${b}~;~${d}${crochets2[1]}$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~${crochets1[0]}${a}~;~${b}[$ et $J=~]${b}~;~+\\infty[$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~]-\\infty~;~${b}[$ et $J=~]${b}~;~+\\infty[$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~]-\\infty~;~${b1}${crochets1[1]} $ et $J=~${crochets2[0]}${c1}~;~${d1}${crochets2[1]}$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~${crochets1[0]}${a1}~;~${b1}${crochets1[1]} $ et $J=~${crochets2[0]}${c1}~;~+\\infty[$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~]-\\infty~;~${b1}${crochets1[1]} $ et $J=~${crochets2[0]}${c1}~;~+\\infty[$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~${crochets1[0]}${a2};~${b2}${crochets1[1]}$ et $J=~${crochets2[0]}${c2}~;~${d2}${crochets2[1]}$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~]-\\infty;~${b2}${crochets1[1]}$ et $J=~${crochets2[0]}${c2}~;~${d2}${crochets2[1]}$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`,
`On donne les intervalles $I=~${crochets1[0]}${a2}~;~+\\infty[$ et $J=~${crochets2[0]}${c2}~;~${d2}${crochets2[1]}$<br>
1) Déterminer $I\\cap J$<br>
2) Déterminer $I\\cup J$`];

let listeSolutions = [`1) $I\\cap J =~\\varnothing$<br>
2) $I\\cup J =~${crochets1[0]}${a}~;~${b}${crochets1[1]}~\\cup~${crochets2[0]}${c}~;~${d}${crochets2[1]}$`,
`1) $I\\cap J =~\\left\\{${b}\\right\\} $<br>
2) $I\\cup J =~${crochets1[0]}${a}~;~${d}${crochets2[1]}$`,
`1) $I\\cap J =~\\varnothing $<br>
2) $I\\cup J =~${crochets1[0]}${a}~;~${d}${crochets2[1]}$`,
`1) $I\\cap J =~\\varnothing $<br>
2) $I\\cup J =~${crochets1[0]}${a}~;~${d}${crochets2[1]}$`,
`1) $I\\cap J =~\\varnothing $<br>
2) $I\\cup J =~${crochets1[0]}${a}~;~${b}[~\\cup~]${b}~;~${d}${crochets2[1]}$`,
`1) $I\\cap J =~${crochets2[0]}${c1}~;~${b1}${crochets1[1]} $<br>
2) $I\\cup J =~${crochets1[0]}${a1}~;~${d1}${crochets2[1]}$`,
`1) $I\\cap J =~\\varnothing$<br>
2) $I\\cup J =~]-\\infty~;~${b}${crochets1[1]}~\\cup~${crochets2[0]}${c}~;~${d}${crochets2[1]}$`,
`1) $I\\cap J =~\\varnothing$<br>
2) $I\\cup J =~${crochets1[0]}${a}~;~${b}${crochets1[1]}~\\cup~${crochets2[0]}${c}~;~+\\infty[$`,
`1) $I\\cap J =~\\varnothing$<br>
2) $I\\cup J =~]-\\infty~;~${b}${crochets1[1]}~\\cup~${crochets2[0]}${c}~;~+\\infty[$`,
`1) $I\\cap J =~\\left\\{${b}\\right\\} $<br>
2) $I\\cup J =~]-\\infty~;~${d}${crochets2[1]}$`,
`1) $I\\cap J =~\\left\\{${b}\\right\\} $<br>
2) $I\\cup J =~${crochets1[0]}${a}~;~+\\infty[$`,
`1) $I\\cap J =~\\left\\{${b}\\right\\} $<br>
2) $I\\cup J =~]-\\infty~;~+\\infty[~=~\\mathbb{R}$`,
`1) $I\\cap J =~\\varnothing $<br>
2) $I\\cup J =~]-\\infty~;~${d}${crochets2[1]}$`,
`1) $I\\cap J =~\\varnothing $<br>
2) $I\\cup J =~${crochets1[0]}${a}~;~+\\infty[$`,
`1) $I\\cap J =~\\varnothing $<br>
2) $I\\cup J =~]-\\infty~;~+\\infty[~=~\\mathbb{R}$`,
`1) $I\\cap J =~\\varnothing $<br>
2) $I\\cup J =~]-\\infty~;~${d}${crochets2[1]}$`,
`1) $I\\cap J =~\\varnothing $<br>
2) $I\\cup J =~${crochets1[0]}${a}~;~+\\infty[$`,
`1) $I\\cap J =~\\varnothing $<br>
2) $I\\cup J =~]-\\infty~;~+\\infty[~=~\\mathbb{R}$`,
`1) $I\\cap J =~\\varnothing $<br>
2) $I\\cup J =~]-\\infty~;~${b}[~\\cup~]${b}~;~${d}${crochets2[1]}$`,
`1) $I\\cap J =~\\varnothing $<br>
2) $I\\cup J =~${crochets1[0]}${a}~;~${b}[~\\cup~]${b}~;~+\\infty[$`,
`1) $I\\cap J =~\\varnothing $<br>
2) $I\\cup J =~]-\\infty~;~${b}[~\\cup~]${b}~;~+\\infty[~=~\\mathbb{R}~\\backslash \\left\\{${b}\\right\\}$`,
`1) $I\\cap J =~${crochets2[0]}${c1}~;~${b1}${crochets1[1]} $<br>
2) $I\\cup J =~]-\\infty~;~${d1}${crochets2[1]}$`,
`1) $I\\cap J =~${crochets2[0]}${c1}~;~${b1}${crochets1[1]} $<br>
2) $I\\cup J =~${crochets1[0]}${a1}~;~+\\infty[$`,
`1) $I\\cap J =~${crochets2[0]}${c1}~;~${b1}${crochets1[1]} $<br>
2) $I\\cup J =~]-\\infty~;~+\\infty[~=~\\mathbb{R}$`,
`1) $I\\cap J =~${crochets2[0]}${c2}~;~${d2}${crochets2[1]} $<br>
2) $I\\cup J =~${crochets1[0]}${a2};~${b2}${crochets1[1]}$`,
`1) $I\\cap J =~${crochets2[0]}${c2}~;~${d2}${crochets2[1]} $<br>
2) $I\\cup J =~]-\\infty~;~${b2}${crochets1[1]}$`,
`1) $I\\cap J =~${crochets2[0]}${c2}~;~${d2}${crochets2[1]} $<br>
2) $I\\cup J =~${crochets1[0]}${a2}~;~+\\infty[$`];

let listeCorrections = [];
                                
let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


enonce.innerHTML = listeenonces[k];
solution.innerHTML = listeSolutions[k];
correctiond.innerHTML = ``;

enonce.addEventListener("load", function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

correction.addEventListener('click', () => {
    correctiond.style.display = "block";
})

recommencer.addEventListener('click', () => {
    location.reload(true);
})

solutions.addEventListener('click', () => {
    solution.style.display = "block";
})

accueil.addEventListener('click', () => {
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSeconde.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSecondeInequations.html";
})