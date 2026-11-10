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

function rienplus(a) {
    let rep;
    if (a<0) {rep='';} else {rep='+';}
    return rep;
}

function signemoinsalpha(a) {
    let rep;
    let alpha;
    let signe;
    if (a<0) {signe='+';} else {signe='-';}
    if (a<0) {alpha=-a;} else {alpha=a;}
    return rep=[signe,alpha];
}

function betasigne(a) {
    let rep;
    if (a=='+') {rep='-';} else {rep='+';}
    return rep;
}

function test_réponse(e,f,g,h,i,j,k,l,m,n) {
    let test;
    if (e==j && f==k && g==l && h==m && i==n) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;

}

let a = nbreouoppose(nbrealéa(1,9));
let x1 = nbreouoppose(nbrealéa(1,9));
let x2 = nbreouoppose(nbrealéa(1,9));
let oppx1 = -x1;
let oppx2 = -x2;
let signex1 = rienplus(oppx1);
let signex2 = rienplus(oppx2);
let coefx = -a*x1-a*x2;
let signecoefx = rienplus(coefx);
let coefreels = a*x1*x2;
let signecoefreels = rienplus(coefreels);
let pgdx1 = parenthesesgd(x1);
let x1carre = x1*x1;
let ax1carre = a*x1carre;
let coefxx1 = coefx*x1;
let signecoefxx1 = rienplus(coefxx1);
let ax1carrecoefxx1 = ax1carre+coefxx1;
let alpha = signemoinsalpha(x1);
let signebeta = betasigne(alpha[0]);
let oppa = -a;
let signeoppa = rienplus(oppa);
let aoppx1 = a*oppx1;
let saoppx1 = rienplus(aoppx1);
let ax1 = a*x1;
let sax1 = rienplus(ax1);
 


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solution = document.getElementById('solution');
var solutions = document.getElementById('solutions');

enonce.innerHTML = `Soit $f$ la fonction de degré 2 définie sur $\\mathbb{R}$ par $f(x)=${a}x^2${signecoefx}${coefx}x${signecoefreels}${coefreels}$<br>
1) Vérifier que $\\alpha =${x1}$ est une racine de $f$.<br>
2) Déterminer la forme factorisée de $f$.`;
solution.innerHTML = `Solution : $f(x)=${a}(x${signex1}${oppx1})(x${signex2}${oppx2})$`;
correctiond.innerHTML = `1) $f(\\alpha)=f(${x1})=${a}\\times ${pgdx1[0]}${x1}${pgdx1[1]}^2 ${signecoefx}${coefx}\\times ${pgdx1[0]}${x1}${pgdx1[1]}${signecoefreels}${coefreels}$<br>
$\\phantom{1) f(\\alpha)=f(${x1})}=${a}\\times ${x1carre} ${signecoefx}${coefx}\\times ${pgdx1[0]}${x1}${pgdx1[1]}${signecoefreels}${coefreels}$<br>
$\\phantom{1) f(\\alpha)=f(${x1})}=${ax1carre}${signecoefxx1}${coefxx1}${signecoefreels}${coefreels}$<br>
$\\phantom{1) f(\\alpha)=f(${x1})}=${ax1carrecoefxx1}${signecoefreels}${coefreels}$<br>
$\\phantom{1) f(\\alpha)=f(${x1})}=0$ donc $\\alpha=${x1}$ est bien une racine de $f$.<br>
2) La forme factorisée de $f$ est de la forme $a(x-\\alpha)(x-\\beta)$ donc ici on obtient :<br>
$f(x)=${a}(x${alpha[0]}${alpha[1]})(x-\\beta)$ donc en développant cette forme on obtient :<br>
$f(x)=${a}\\left( x^2-\\beta x ${alpha[0]}${alpha[1]}x ${signebeta}${alpha[1]}\\beta \\right)$<br>
$\\phantom{f(x)}=${a}x^2 ${signeoppa}${oppa}\\beta x ${saoppx1}${aoppx1}x~\\boxed{${sax1}~${ax1}\\beta}$ or<br>
$f(x)=${a}x^2${signecoefx}${coefx}x~\\boxed{${signecoefreels}~${coefreels}}$ donc, par identification,<br>
$${sax1}~${ax1}\\beta=${signecoefreels}~${coefreels}$ et donc $\\beta=\\dfrac{${signecoefreels}~${coefreels}}{${sax1}~${ax1}}=${x2}$<br>
En conclusion, la forme factorisée de $f$ est donc $f(x)=\\underbrace{${a}}_{a}~\\underbrace{(x${signex1}${oppx1})}_{(x-\\alpha)}~\\underbrace{(x${signex2}${oppx2})}_{(x-\\beta)}$`;



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

