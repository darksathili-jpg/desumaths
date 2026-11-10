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

function plusmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}

function rienmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='';}
    return rep;
}

function parenthesegd(a) {
    let rep;
    let pg;
    let pd;
    if (a<0) {pg='(';} else {pg='';}
    if (a<0) {pd=')';} else {pd='';}
    return rep = [pg,pd];
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }

function fracsimp(num,denom) {
    let rep=[num,denom];
    if (num<0 && denom<0) {rep=[-num,-denom];}
    if (num>0 && denom<0) {rep=[num,-denom];}
    if (num<0 && denom>0) {rep=[-num,denom];}
    return rep; 
}

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
}

function simply(num,denom) {
    let rep;
    if (denom==1) {rep=`=${num}`;} else {rep='';}
    return rep;
}

function valabs(a) {
    let rep;
    if (a<0) {rep=-a;} else {rep=a;}
    return rep;
}

let xa = nbrealéa(-15,15);
let ya = nbrealéa(-15,15);
let za = nbrealéa(-15,15);
let xb = nbrealéa(-15,15);
let yb = nbrealéa(-15,15);
let zb = nbrealéa(-15,15);
let xu = nbrealéa(-15,15);
let yu = nbrealéa(-15,15);
let zu = nbrealéa(-15,15);
let sxu = rienplus(xu);
let syu = rienplus(yu);
let szu = rienplus(zu);
let absxb = valabs(xb);
let absyb = valabs(yb);
let abszb = valabs(zb);
let sxb = plusmoins(-xb);
let syb = plusmoins(-yb);
let szb = plusmoins(-zb);
let xaxb = xa-xb;
let yayb = ya-yb;
let zazb = za-zb;
let xuxaxb = xu*xaxb;
let xucarre = xu**2;
let yuyayb = yu*yayb;
let syuyayb = rienplus(yuyayb);
let yucarre = yu**2;
let zuzazb = zu*zazb;
let szuzazb = rienplus(zuzazb);
let zucarre = zu**2;
let th = xucarre+yucarre+zucarre;
let reels = xuxaxb+yuyayb+zuzazb;
let sreels = rienplus(reels);
let oppreels = -reels;
let repth = simplifierfraction(oppreels,th);
let repths = fracsimp(repth[0],repth[1]);
let srepths = rienmoins(oppreels/th);
let simplyrepths = simply(repth[0],repth[1]);
let xh = simplifierfraction(xa*th+xu*oppreels,th);
let xhs = fracsimp(xh[0],xh[1]);
let sxhs = rienmoins(xa+xu*oppreels/th);
let yh = simplifierfraction(ya*th+yu*oppreels,th);
let yhs = fracsimp(yh[0],yh[1]);
let syhs = rienmoins(ya+yu*oppreels/th);
let zh = simplifierfraction(za*th+zu*oppreels,th);
let zhs = fracsimp(zh[0],zh[1]);
let szhs = rienmoins(za+zu*oppreels/th);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


enonce.innerHTML = `On se place dans un repère orthonormé de l'espace $\\left(O~;\\overrightarrow{i},\\overrightarrow{j},\\overrightarrow{k}\\right).$<br>
Soit $d$ la droite passant par le point $A(${xa}~;${ya}~;${za})$ et de vecteur directeur $\\overrightarrow{u}\\left(\\begin{array}{c}${xu}\\\\${yu}\\\\${zu}\\end{array}\\right)$.<br>
Déterminer les coordonnées du point $H$, projeté orthogonal du point $B(${xb}~;${yb}~;${zb})$ sur la droite $d$.`

solution.innerHTML = `$H\\left(${sxhs}\\dfrac{${xhs[0]}}{${xhs[1]}}~;${syhs}\\dfrac{${yhs[0]}}{${yhs[1]}}~; ${sxhs}\\dfrac{${zhs[0]}}{${zhs[1]}}\\right)$`

correctiond.innerHTML = `Une représentation paramétrique de la droite $d$ est 
$\\left\\{\\begin{array}{rcl} x & = & ${xa}${sxu}${xu}t \\\\
y & = & ${ya}${syu}${yu}t \\\\
z & = & ${za}${szu}${zu}t
\\end{array}\\right. (t\\in\\mathbb{R})$<br><br>
Le point $H$ est situé sur $d$ donc il existe un réel $t_H$ tel que : $\\left\\{\\begin{array}{rcl} x_H & = & ${xa}${sxu}${xu}t_H \\\\
y_H & = & ${ya}${syu}${yu}t_H \\\\
z_H & = & ${za}${szu}${zu}t_H
\\end{array}\\right.$<br><br>
Les coordonnées de $\\overrightarrow{BH}$ sont donc $\\overrightarrow{BH}\\left(\\begin{array}{c} x_H-x_B\\\\y_H-y_B\\\\z_H-z_B \\end{array}\\right)=
\\left(\\begin{array}{c} ${xa}${sxu}${xu}t_H${sxb}${absxb}\\\\${ya}${syu}${yu}t_H${syb}${absyb}\\\\${za}${szu}${zu}t_H${szb}${abszb} \\end{array}\\right)=
\\left(\\begin{array}{c} ${xaxb}${sxu}${xu}t_H \\\\${yayb}${syu}${yu}t_H \\\\${zazb}${szu}${zu}t_H \\end{array}\\right)$.<br><br>
Les vecteurs $\\overrightarrow{BH}$ et $\\overrightarrow{u}$ sont orthogonaux donc $\\overrightarrow{BH}.\\overrightarrow{u}=0$, ce qui donne :<br>
$${xu}\\times\\left(${xaxb}${sxu}${xu}t_H \\right)${syu}${yu}\\times\\left(${yayb}${syu}${yu}t_H \\right)${szu}${zu}\\times\\left(${zazb}${szu}${zu}t_H \\right)=0$<br>
$\\iff ${xuxaxb}+${xucarre}t_H ${syuyayb}${yuyayb}+${yucarre}t_H ${szuzazb}${zuzazb}+${zucarre}t_H=0$<br>
$\\iff ${th}t_h${sreels}${reels}=0$<br>
$\\iff ${th}t_h=${oppreels}$<br><br>
$\\iff t_H=\\dfrac{${oppreels}}{${th}}=${srepths}\\dfrac{${repths[0]}}{${repths[1]}}${simplyrepths}$ (simplifiée)<br><br>
on obtient donc :<br>
$x_H=${xa}${sxu}${xu}t_H=${xa}${sxu}${xu}\\times \\left( ${srepths}\\dfrac{${repths[0]}}{${repths[1]}}\\right)=${sxhs}\\dfrac{${xhs[0]}}{${xhs[1]}}$<br><br>
$y_H=${ya}${syu}${yu}t_H=${ya}${syu}${yu}\\times \\left( ${srepths}\\dfrac{${repths[0]}}{${repths[1]}}\\right)=${syhs}\\dfrac{${yhs[0]}}{${yhs[1]}}$<br><br>
$z_H=${za}${szu}${zu}t_H=${za}${szu}${zu}\\times \\left( ${srepths}\\dfrac{${repths[0]}}{${repths[1]}}\\right)=${sxhs}\\dfrac{${zhs[0]}}{${zhs[1]}}$<br><br>
Donc $H\\left(${sxhs}\\dfrac{${xhs[0]}}{${xhs[1]}}~;${syhs}\\dfrac{${yhs[0]}}{${yhs[1]}}~; ${sxhs}\\dfrac{${zhs[0]}}{${zhs[1]}}\\right)$`;

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
    location.href = "../../../Menus/MenuTaleSpe.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTaleEspace.html";
})