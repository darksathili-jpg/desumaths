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

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
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
let xS = (x1+x2)/2;
let xSv = avecVirgule(xS);
let yS = a*(xS-x1)*(xS-x2);
let ySv = avecVirgule(yS);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solution = document.getElementById('solution');
var solutions = document.getElementById('solutions');

enonce.innerHTML = `Soit $f$ la fonction de degré 2 définie sur $\\mathbb{R}$ sous sa forme factorisée par $f(x)=${a}(x${s1}${x_1})(x${s2}${x_2})$.<br>
Déterminer les coordonnées du point $S$ sommet de sa courbe représentative dans un repère $\\left(O~;~\\overrightarrow{i}~,~\\overrightarrow{j}\\right)$.`;
solution.innerHTML = `Solution : $S\\left(${xSv}~;~${ySv}\\right)$`;
correctiond.innerHTML = `$\\underline{\\text{Étape} 1 :}$ Le sommet $S$ a pour abscisse $x_S=\\dfrac{\\alpha+\\beta}{2}$ où $\\alpha$ et $\\beta$ sont les deux racines de la fonction $f$. Or, comme $f(x)=a(x-\\alpha)(x-\\beta)$, on a donc ici : $\\alpha=${x1}$ et $\\beta=${x2}$ et donc $x_S=\\dfrac{${x1} + ${pgd2[0]} ${x2} ${pgd2[1]}}{2}=${xSv}$.<br>
$\\underline{\\text{Étape} 2 :}$ L'ordonnée de $S$ est $y_S=f\\left(x_S\\right)=f\\left(${xSv}\\right)$.<br>
$f\\left(${xSv}\\right)=${a}\\times \\left( ${xSv} ${s1} ${x_1} \\right) \\times \\left( ${xSv} ${s2} ${x_2} \\right)=${ySv}$<br>
$\\underline{\\text{Conclusion} :}$ Le point $S$ a pour coordonnées : $S\\left(${xSv}~;~${ySv}\\right)$.`;

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

