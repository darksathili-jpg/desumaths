function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function signe(b) {
    let rep;
    if (b<0) {rep='';} else {rep='+';}
    return rep;
}

function par(u) {
    let pargd=[];
    let parg;
    let pard;
    if (u<0) {parg='(';} else {parg='';}
    if (u<0) {pard=')';} else {pard='';}
    pargd=[parg,pard];
    return pargd;
}

let a = nbrealéa(2,10);
let b = nbrealéa(-10,10);
let u0 = nbrealéa(-10,10);
let s = signe(b);
let d = nbrealéa(2,7);
let u1 = a*u0+b;
let u2 = a*u1+b;
let u3 = a*u2+b;
let u4 = a*u3+b;
let u5 = a*u4+b;
let u6 = a*u5+b;
let u7 = a*u6+b;
let parentheses0 = par(u0);
let parentheses1 = par(u1);
let parentheses2 = par(u2);
let parentheses3 = par(u3);
let parentheses4 = par(u4);
let parentheses5 = par(u5);
let parentheses6 = par(u6);
let un = [u2,u3,u4,u5,u6,u7]
let corrections = [`$u_1 = ${a} u_0 ${s} ${b} = ${a}\\times ${parentheses0[0]} ${u0} ${parentheses0[1]} ${s} ${b} = ${u1}$<br>$u_2 = ${a} u_1 ${s} ${b} = ${a}\\times ${parentheses1[0]} ${u1} ${parentheses1[1]} ${s} ${b} = ${u2}$`,
`$u_1 = ${a} u_0 ${s} ${b} = ${a}\\times ${parentheses0[0]} ${u0} ${parentheses0[1]} ${s} ${b} = ${u1}$<br>$u_2 = ${a} u_1 ${s} ${b} = ${a}\\times ${parentheses1[0]} ${u1} ${parentheses1[1]} ${s} ${b} = ${u2}$ <br>$u_3 = ${a} u_2 ${s} ${b} = ${a}\\times ${parentheses2[0]} ${u2} ${parentheses2[1]} ${s} ${b} = ${u3}$`,
`$u_1 = ${a} u_0 ${s} ${b} = ${a}\\times ${parentheses0[0]} ${u0} ${parentheses0[1]} ${s} ${b} = ${u1}$<br>$u_2 = ${a} u_1 ${s} ${b} = ${a}\\times ${parentheses1[0]} ${u1} ${parentheses1[1]} ${s} ${b} = ${u2}$ <br>$u_3 = ${a} u_2 ${s} ${b} = ${a}\\times ${parentheses2[0]} ${u2} ${parentheses2[1]} ${s} ${b} = ${u3}$<br>$u_4 = ${a} u_3 ${s} ${b} = ${a}\\times ${parentheses3[0]} ${u3} ${parentheses3[1]} ${s} ${b} = ${u4}$`,
`$u_1 = ${a} u_0 ${s} ${b} = ${a}\\times ${parentheses0[0]} ${u0} ${parentheses0[1]} ${s} ${b} = ${u1}$<br>$u_2 = ${a} u_1 ${s} ${b} = ${a}\\times ${parentheses1[0]} ${u1} ${parentheses1[1]} ${s} ${b} = ${u2}$ <br>$u_3 = ${a} u_2 ${s} ${b} = ${a}\\times ${parentheses2[0]} ${u2} ${parentheses2[1]} ${s} ${b} = ${u3}$<br>$u_4 = ${a} u_3 ${s} ${b} = ${a}\\times ${parentheses3[0]} ${u3} ${parentheses3[1]} ${s} ${b} = ${u4}$<br>$u_5 = ${a} u_4 ${s} ${b} = ${a}\\times ${parentheses4[0]} ${u4} ${parentheses4[1]} ${s} ${b} = ${u5}$`,
`$u_1 = ${a} u_0 ${s} ${b} = ${a}\\times ${parentheses0[0]} ${u0} ${parentheses0[1]} ${s} ${b} = ${u1}$<br>$u_2 = ${a} u_1 ${s} ${b} = ${a}\\times ${parentheses1[0]} ${u1} ${parentheses1[1]} ${s} ${b} = ${u2}$ <br>$u_3 = ${a} u_2 ${s} ${b} = ${a}\\times ${parentheses2[0]} ${u2} ${parentheses2[1]} ${s} ${b} = ${u3}$<br>$u_4 = ${a} u_3 ${s} ${b} = ${a}\\times ${parentheses3[0]} ${u3} ${parentheses3[1]} ${s} ${b} = ${u4}$<br>$u_5 = ${a} u_4 ${s} ${b} = ${a}\\times ${parentheses4[0]} ${u4} ${parentheses4[1]} ${s} ${b} = ${u5}$<br>$u_6 = ${a} u_5 ${s} ${b} = ${a}\\times ${parentheses5[0]} ${u5} ${parentheses5[1]} ${s} ${b} = ${u6}$`,
`$u_1 = ${a} u_0 ${s} ${b} = ${a}\\times ${parentheses0[0]} ${u0} ${parentheses0[1]} ${s} ${b} = ${u1}$<br>$u_2 = ${a} u_1 ${s} ${b} = ${a}\\times ${parentheses1[0]} ${u1} ${parentheses1[1]} ${s} ${b} = ${u2}$ <br>$u_3 = ${a} u_2 ${s} ${b} = ${a}\\times ${parentheses2[0]} ${u2} ${parentheses2[1]} ${s} ${b} = ${u3}$<br>$u_4 = ${a} u_3 ${s} ${b} = ${a}\\times ${parentheses3[0]} ${u3} ${parentheses3[1]} ${s} ${b} = ${u4}$<br>$u_5 = ${a} u_4 ${s} ${b} = ${a}\\times ${parentheses4[0]} ${u4} ${parentheses4[1]} ${s} ${b} = ${u5}$<br>$u_6 = ${a} u_5 ${s} ${b} = ${a}\\times ${parentheses5[0]} ${u5} ${parentheses5[1]} ${s} ${b} = ${u6}$<br>$u_7 = ${a} u_6 ${s} ${b} = ${a}\\times ${parentheses6[0]} ${u5} ${parentheses6[1]} ${s} ${b} = ${u7}$`];
let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solution = document.getElementById('solution');
var solutions = document.getElementById('solutions');


enonce.innerHTML = `La suite $(u_n)$ est la suite définie pour tout $n\\in \\mathbb{N}$ par : <br>
$\\left\\{ \\begin{array} 1u_0 & = & ${u0} \\\\ u_{n+1} & = & ${a}u_n ${s} ${b} \\end{array} \\right.$ <br>
Calculer $u_{${d}}$.`;
solution.innerHTML = `Solution : $u_{${d}}=${un[d-2]}$`;
correctiond.innerHTML = corrections[d-2];

enonce.addEventListener("load", function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

correction.addEventListener('click', () => {
    correctiond.style.display = "block";
    correctiond.innerHTML ;
})

solutions.addEventListener('click', () => {
    solution.style.display = "block";
    })

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
