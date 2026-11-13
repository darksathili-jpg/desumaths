function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function nbreouoppose(a) {
    let rep;
    let choix = nbrealéa(1,2);
    if (choix==1) {rep=a;} else {rep=-a;}
    return rep;
}

function rienplus(a) {
    let rep;
    if (a<0) {rep='';} else {rep='+';}
    return rep;
}

function rienmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='';}
    return rep;
}

function plusmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}

function valabs(a) {
    let rep;
    if (a<0) {rep=-a;} else {rep=a;}
    return rep;
}

function parenthesesgd(a) {
    let rep;
    let parg;
    let pard;
    if (a<0) {parg='(';pard=')';} else {parg='';pard='';}
    return rep = [parg,pard];
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }



let a = nbreouoppose(nbrealéa(2,10));
let b = nbrealéa(-10,10);
let xa = nbrealéa(-15,15);
let ya = a*xa+b;
let xb = xa+nbreouoppose(nbrealéa(1,10));
let yb = a*xb+b;
let pgdya = parenthesesgd(ya);
let pgdxa = parenthesesgd(xa);
let ybmya = yb-ya;
let xbmxa = xb-xa;
let sb = rienplus(b);
let axa= a*xa;
let opaxa= -axa;
let sopaxa = rienplus(opaxa);



let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');

enonce.innerHTML = `Déterminer l'équation réduite de la droite $d$ passant par les points $A(${xa}~;${ya})$ et $B(${xb}~;~${yb})$.`;
solution.innerHTML = `$y=${a}x${sb}${b}$`;
correctiond.innerHTML = `$\\underline{\\text{Coefficient directeur :}}~~a=\\dfrac{y_B-y_A}{x_B-x_A}$<br>
$a=\\dfrac{${yb}-${pgdya[0]}${ya}${pgdya[1]}}{${xb}-${pgdxa[0]}${xa}${pgdxa[1]}}=\\dfrac{${ybmya}}{${xbmxa}}=${a}$<br>
$\\underline{\\text{Ordonnée à l'origine :}}$<br>
$\\begin{array}{lrcrclr} A\\in d~\\text{donc} & y_A & = & ax_A+b & = & ${ya} & \\text{donc :} \\\\
 & & & ${a}\\times ${pgdxa[0]} ${xa} ${pgdxa[1]} +b & = & ${ya} & \\text{donc :} \\\\
 & & & ${axa} + b & = & ${ya} & \\text{donc :} \\\\
 & & & b & = & ${ya} ${sopaxa} ${opaxa} & \\text{et donc :} \\\\
 & & & b & = & ${b} &  \\end{array}$<br>
 $\\underline{\\text{Équation réduite de}~d~:}~~y=${a}x${sb}${b}$`;


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
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSeconde.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSecondeEqsDroites.html";
})