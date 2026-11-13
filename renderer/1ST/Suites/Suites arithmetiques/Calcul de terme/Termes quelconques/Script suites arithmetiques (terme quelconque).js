function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function termeinitial() {
    let u0 = nbrealéa(-10,10);
    return u0;
}

function raison(a) {
    let choix = nbrealéa(1,10);
    let r;
    if (a==1) {r=choix;} else {r=-choix;}
    return r;
}

function indiceterme1() {
    let n1 = nbrealéa(0,20);
    return n1;
}

function indiceterme2(a) {
    let n2 = nbrealéa(0,20);
    while (a == n2) {n2 = nbrealéa(0,20);};
    return n2;
}

function petitindice(a,b) {
    let petitn;
    if (a<b) {petitn=a;} else {petitn=b;}
    return petitn;
}

function grandindice(a,b) {
    let grandn;
    if (a<b) {grandn=b;} else {grandn=a;}
    return grandn;
}

function parg(a) {
    let pg;
    if (a<0) {pg='(';} else {pg='';}
    return pg;
}

function pard(a) {
    let pd;
    if (a<0) {pd=')';} else {pd='';}
    return pd;
}

function plusmoins(a,b) {
    let pm;
    if (a<b) {pm='+';} else {pm='-';}
    return pm
}

function test_réponse(a,b) {
    let test;
    if (a==b) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

let a = nbrealéa(1,2);
let u0 = termeinitial();
let r = raison(a);
let n1 = indiceterme1();
let n2 = indiceterme2(n1);
let un1 = u0+n1*r;
let un2 = u0+n2*r;
let petitn = petitindice(n1,n2);
let grandn = grandindice(n1,n2);
let ecart = grandn-petitn;
let signe = plusmoins(n1,n2);
let parenthesegauche = parg(r);
let parenthesedroite = pard(r);
let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


enonce.innerHTML = `Soit $(u_n)$ une suite arithmétique de raison $r=${r}$ et telle que $u_{${n1}}=${un1}$. </br>
Calculer $u_{${n2}}$.`;
solution.innerHTML = `Solution : $u_{${n2}}=${un2}$`;
correctiond.innerHTML = `$u_{${n2}}=u_{${n1}}${signe} ${ecart}\\times r$ </br>
$\\phantom{u_{${n2}}}=${un1}${signe}${ecart}\\times ${parenthesegauche}${r}${parenthesedroite}$ </br>
$\\phantom{u_{${n2}}}=${un2}$`;

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
    location.href = "../../../../../Menus/Menu1ST.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../../Menus/Menu1STsuitesarithmetiques.html";
})