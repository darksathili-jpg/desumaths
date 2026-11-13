function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function xdifferent(x1,x2) {
    let rep=nbrealéa(-9,9);
    while (rep==x1 || rep==x2) {rep=nbrealéa(-9,9);}
    return rep;
}

function nbreouoppose(a) {
    let rep;
    let choix = nbrealéa(1,2);
    if (choix==1) {rep=a;} else {rep=-a;}
    return rep;
}

function parenthesesgd(a) {
    let rep;
    let pg;
    let pd;
    if (a<0) {pg='(';} else {pg='';}
    if (a<0) {pd=')';} else {pd='';}
    return rep=[pg,pd];
}

function signedansparentheses(a) {
    let rep;
    if (a<0) {rep='+';} else {rep='-';}
    return rep;
}

function valabs(a) {
    let rep;
    if (a<0) {rep=-a;} else {rep=a;}
    return rep;
}

function test_réponse(e,f,g,h,i,j,k,l,m,n) {
    let test;
    if (e==j && f==k && g==l && h==m && i==n) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;

}

let x1 = nbrealéa(-9,9);
let x2 = nbrealéa(-9,9);
let x3 = xdifferent(x1,x2);
let a = nbreouoppose(nbrealéa(1,9));
let image = a*(x3-x1)*(x3-x2);
let pgd1 = parenthesesgd(x1);
let pgd2 = parenthesesgd(x2);
let s1 = signedansparentheses(x1);
let s2 = signedansparentheses(x2);
let x_1 = valabs(x1);
let x_2 = valabs(x2);
let par1 = x3-x1;
let pgd3 = parenthesesgd(par1);
let par2 = x3-x2;
let pgd4 = parenthesesgd(par2);
let produitpar = par1*par2;
let pgd5 = parenthesesgd(produitpar);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solution = document.getElementById('solution');
var solutions = document.getElementById('solutions');

enonce.innerHTML = `Soit $f$ la fonction de degré 2 ayant pour racines $\\alpha=${x1}$ et $\\beta=${x2}$ et telle que $f(${x3})=${image}$.<br>
Déterminer la forme factorisée de $f$.`;
solution.innerHTML = `Solution : $f(x)=${a}(x${s1}${x_1})(x${s2}${x_2}) $`;
correctiond.innerHTML = `$f(x)=a\\times (x-\\alpha)\\times (x-\\beta)=a\\times (x-${pgd1[0]} ${x1} ${pgd1[1]})\\times (x-${pgd2[0]}${x2}${pgd2[1]})=a\\times (x${s1}${x_1})\\times (x${s2}${x_2})$<br>
Or $f(${x3})=${image}$ donc on obtient :<br>
$f(${x3})=a\\times (${x3}${s1}${x_1})\\times (${x3}${s2}${x_2})=a\\times ${pgd3[0]} ${par1} ${pgd3[1]} \\times ${pgd4[0]} ${par2} ${pgd4[1]} = a\\times ${pgd5[0]} ${produitpar} ${pgd5[1]} = ${image}$<br>
Donc $a=\\dfrac{${image}}{${produitpar}}=${a}$`;

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
    location.reload();
})

accueil.addEventListener('click', () => {
    location.href = "../../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../../Menus/Menu1ST.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../Menus/Menu1STfonctionsdegre2.html";
})

