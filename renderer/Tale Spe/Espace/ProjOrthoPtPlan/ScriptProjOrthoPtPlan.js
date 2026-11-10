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
let xp = nbreouoppose(nbrealéa(1,10));
let sxp = rienplus(xp);
let yp = nbreouoppose(nbrealéa(1,10));
let syp = rienplus(yp);
let zp = nbreouoppose(nbrealéa(1,10));
let szp = rienplus(zp);
let dp = nbreouoppose(nbrealéa(1,10));
let sdp = rienplus(dp);
let xaxp = xa*xp;
let xpcarre = xp**2;
let yayp = ya*yp;
let syayp = rienplus(yayp);
let ypcarre = yp**2;
let zazp = za*zp;
let szazp = rienplus(zazp);
let zpcarre = zp**2;
let sommeth = xpcarre+ypcarre+zpcarre;
let somreels = xaxp+yayp+zazp+dp;
let ssomrrels = rienplus(somreels);
let oppsomreels = -somreels;
let th = simplifierfraction(oppsomreels,sommeth);
let ths = fracsimp(th[0],th[1]);
let sths = rienmoins(oppsomreels/sommeth);
let xh = simplifierfraction(xa*sommeth+xp*oppsomreels,sommeth);
let xhs = fracsimp(xh[0],xh[1]);
let sxhs = rienmoins(xa*sommeth+xp*oppsomreels/sommeth);
let yh = simplifierfraction(ya*sommeth+yp*oppsomreels,sommeth);
let yhs = fracsimp(yh[0],yh[1]);
let syhs = rienmoins(ya*sommeth+yp*oppsomreels/sommeth);
let zh = simplifierfraction(za*sommeth+zp*oppsomreels,sommeth);
let zhs = fracsimp(zh[0],zh[1]);
let szhs = rienmoins(za*sommeth+zp*oppsomreels/sommeth);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


enonce.innerHTML = `On se place dans un repère orthonormé de l'espace $\\left(O~;\\overrightarrow{i},\\overrightarrow{j},\\overrightarrow{k}\\right).$<br>
Soit $A(${xa}~;${ya}~;${za})$ un point de l'espace et $\\mathscr{P}$ le plan d'équation $${xp}x${syp}${yp}y${szp}${zp}z${sdp}${dp}=0$.<br>
Déterminer les coordonnées du point $H$, projeté orthogonal du point $A$ sur le plan $\\mathscr{P}$.`

solution.innerHTML = `$H\\left(${sxhs}\\dfrac{${xhs[0]}}{${xhs[1]}}~;${syhs}\\dfrac{${yhs[0]}}{${yhs[1]}}~;${szhs}\\dfrac{${zhs[0]}}{${zhs[1]}}\\right)$`

correctiond.innerHTML = `Le point $H$ est l'intersection de $\\mathscr{P}$ et de $(AH)$ qui est perpendiculaire à $\\mathscr{P}$.<br>
$\\overrightarrow{n}\\left(\\begin{array}{c}${xp}\\\\${yp}\\\\${zp}\\end{array}\\right)$ est un vecteur normal à $\\mathscr{P}$ donc c'est un vecteur directeur de $(AH)$.<br>
Une représentation paramétrique de $(AH)$ est donc : $\\left\\{\\begin{array}{rcl}
x & = & ${xa}${sxp}${xp}t\\\\
y & = & ${ya}${syp}${yp}t\\\\
z & = & ${za}${szp}${zp}t
\\end{array}\\right. (t\\in\\mathbb{R})$<br><br>
Et comme $H\\in (AH)$ alors il existe un réel $t_H$ tel que $\\left\\{\\begin{array}{rcl}
x_H & = & ${xa}${sxp}${xp}t_H\\\\
y_H & = & ${ya}${syp}${yp}t_H\\\\
z_H & = & ${za}${szp}${zp}t_H
\\end{array}\\right.$<br><br>
Mais comme $H\\in\\mathscr{P}$ alors $${xp}x_H${syp}${yp}y_H${szp}${zp}z_H${sdp}${dp}=0$ et on obtient alors l'équation :<br>
$${xp}\\times\\underbrace{\\left(${xa}${sxp}${xp}t_H\\right)}_{x_H}${syp}${yp}\\times\\underbrace{\\left(${ya}${syp}${yp}t_H\\right)}_{y_H}${szp}${zp}\\times\\underbrace{\\left(${za}${szp}${zp}t_H \\right)}_{z_H}${sdp}${dp}=0$<br>
$\\iff ${xaxp}+${xpcarre}t_H${syayp}${yayp}+${ypcarre}t_H${szazp}${zazp}+${zpcarre}t_H${sdp}${dp}=0$<br>
$\\iff ${sommeth}t_H${ssomrrels}${somreels}=0$<br>
$\\iff ${sommeth}t_H=${oppsomreels}$<br>
$\\iff t_H=\\dfrac{${oppsomreels}}{${sommeth}}=${sths}\\dfrac{${ths[0]}}{${ths[1]}}$ (simplifiée)<br>
Donc on obtient :<br>
$x_H=${xa}${sxp}${xp}t_H=${xa}${sxp}${xp}\\times\\left(${sths}\\dfrac{${ths[0]}}{${ths[1]}}\\right)=${sxhs}\\dfrac{${xhs[0]}}{${xhs[1]}} $<br><br>
$y_H=${ya}${syp}${yp}t_H=${ya}${syp}${yp}\\times\\left(${sths}\\dfrac{${ths[0]}}{${ths[1]}}\\right)=${syhs}\\dfrac{${yhs[0]}}{${yhs[1]}} $<br><br>
$z_H=${za}${szp}${zp}t_H=${za}${szp}${zp}\\times\\left(${sths}\\dfrac{${ths[0]}}{${ths[1]}}\\right)=${szhs}\\dfrac{${zhs[0]}}{${zhs[1]}} $<br><br>
Donc $H\\left(${sxhs}\\dfrac{${xhs[0]}}{${xhs[1]}}~;${syhs}\\dfrac{${yhs[0]}}{${yhs[1]}}~;${szhs}\\dfrac{${zhs[0]}}{${zhs[1]}}\\right) $`;

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