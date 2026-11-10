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
    if (a<0) {rep='';} else {
        if(a==0) {rep='-'} else{rep='+';}}
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

function fracsimpmax(num,denom) {
    let rep;
    let signe;
    f1 = simplifierfraction(num,denom);
    f2 = fracsimp(f1[0],f1[1]);
    if (num/denom<0) {signe='-';} else {signe='';}
    return rep = [signe,f2[0],f2[1]];
}

function nbrediff(a) {
    let rep = nbrealéa(-10,10);
    while (rep==a) {rep=nbrealéa(-10,10);}
    return rep;
}

function valabs(a) {
    let rep;
    if (a<0) {rep=-a;} else {rep=a;}
    return rep;
}

let a = nbreouoppose(nbrealéa(1,10));
let b = nbrealéa(-10,10);
let c = b+nbrealéa(1,5);
let xa = nbrealéa(-10,10);
let pxa = parenthesegd(xa);
let opxa = -xa;
let sopxa = rienplus(opxa);
let ya = a*xa+b;
let pya = parenthesegd(ya);
let xb = xa+nbrealéa(1,5);
let yb = a*xb+b;
let xc = nbrealéa(-10,10);
let pxc = parenthesegd(xc);
let opxc = -xc;
let sopxc = rienplus(opxc);
let yc = a*xc+c;
let pyc = parenthesegd(yc);
let xd = xc-nbrealéa(1,5);
let yd = a*xd+c;
let ydyc = yd-yc;
let pydyc = parenthesegd(ydyc);
let xbxa = xb-xa;
let ybya = yb-ya;
let pybya = parenthesegd(ybya);
let opybya = -ybya;
let sopybya = rienplus(opybya);
let xbxaydyc = xbxa*ydyc;
let opxbxaydyc = -xbxaydyc;
let ybyaxc = ybya*xc;
let sybyaxc = rienplus(ybyaxc);
let opybyaxc = -ybyaxc;
let sopybyaxc = rienplus(opybyaxc);
let eqdte = opxbxaydyc+opybyaxc;
let eqg = -eqdte;
let seqg = rienplus(eqg);

let xdxc = xd-xc;
let pxdxc = parenthesegd(xdxc);
let opyc = -yc;
let sopyc = rienplus(opyc);
let opxbxayc = xbxa*opyc;
let sopxbxayc = rienplus(opxbxayc);
let opybyaxdxc = -ybya*xdxc;
let sopybyaxdxc = rienplus(opybyaxdxc);
let reelsg = opxbxayc+opybyaxdxc;
let sreelsg = rienplus(reelsg);
let reelsd = -reelsg;

let k = nbrealéa(0,1);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


let listenonces = [`Dans un repère $\\left(O~;\\overrightarrow{i},\\overrightarrow{j}\\right)$ on donne les points : $A\\left(${xa}~;${ya}\\right), B\\left(${xb}~;${yb}\\right)$,$C\\left(${xc}~;${yc}\\right)$ et $D\\left(x_D~;${yd}\\right)$<br>
Déterminer $x_D$ pour que les droites $(AB)$ et $(CD)$ soient parallèles.`,
`Dans un repère $\\left(O~;\\overrightarrow{i},\\overrightarrow{j}\\right)$ on donne les points : $A\\left(${xa}~;${ya}\\right), B\\left(${xb}~;${yb}\\right)$,$C\\left(${xc}~;${yc}\\right)$ et $D\\left(${xd}~;y_D\\right)$<br>
Déterminer $y_D$ pour que les droites $(AB)$ et $(CD)$ soient parallèles.`]

let listesolutions = [`$x_D=${xd}$`,`$y_D=${yd}$`]

let listeCorrections =[`Les droites $(AB)$ et $(CD)$ sont parallèles si les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{CD}$ sont colinéaires donc si $\\text{dét}\\left(\\overrightarrow{AB}~;\\overrightarrow{CD}\\right)=0$.<br><br>
$\\overrightarrow{AB}\\begin{pmatrix}x_B-x_A\\\\y_B-y_A\\end{pmatrix}=\\begin{pmatrix} ${xb}-${pxa[0]}${xa}${pxa[1]} \\\\ ${yb}-${pya[0]}${ya}${pya[1]} \\end{pmatrix}=\\begin{pmatrix} ${xbxa} \\\\ ${ybya} \\end{pmatrix}$ et $\\overrightarrow{CD}\\begin{pmatrix}x_D-x_C\\\\y_D-y_C\\end{pmatrix}=\\begin{pmatrix} x_D-${pxc[0]}${xc}${pxc[1]} \\\\ ${yd}-${pyc[0]}${yc}${pyc[1]} \\end{pmatrix}=\\begin{pmatrix} x_D${sopxc}${opxc} \\\\ ${ydyc} \\end{pmatrix}$<br><br>
$\\text{dét}\\left(\\overrightarrow{AB}~;\\overrightarrow{CD}\\right)=\\left|\\begin{array}{cc} ${xbxa} & x_D${sopxc}${opxc} \\\\ ${ybya} & ${ydyc} \\end{array}\\right|=${xbxa}\\times ${pydyc[0]}${ydyc}${pydyc[1]}-${pybya[0]}${ybya}${pybya[1]}\\times \\left(x_D${sopxc}${opxc} \\right)$<br><br>
Donc il faut résoudre l'équation :<br>
$\\begin{array}{rcl} ${xbxa}\\times ${pydyc[0]}${ydyc}${pydyc[1]}-${pybya[0]}${ybya}${pybya[1]}\\times \\left(x_D${sopxc}${opxc} \\right) & = & 0 \\\\
${xbxaydyc}${sopybya}${opybya}x_D${sybyaxc}${ybyaxc} & = & 0 \\\\
${sopybya}${opybya}x_D${seqg}${eqg} & = & 0 \\\\
${sopybya}${opybya}x_D & = & ${eqdte} \\\\
x_D & = & \\dfrac{${eqdte}}{${opybya}}=${xd}
\\end{array}$`,
`Les droites $(AB)$ et $(CD)$ sont parallèles si les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{CD}$ sont colinéaires donc si $\\text{dét}\\left(\\overrightarrow{AB}~;\\overrightarrow{CD}\\right)=0$.<br><br>
$\\overrightarrow{AB}\\begin{pmatrix}x_B-x_A\\\\y_B-y_A\\end{pmatrix}=\\begin{pmatrix} ${xb}-${pxa[0]}${xa}${pxa[1]} \\\\ ${yb}-${pya[0]}${ya}${pya[1]} \\end{pmatrix}=\\begin{pmatrix} ${xbxa} \\\\ ${ybya} \\end{pmatrix}$ et $\\overrightarrow{CD}\\begin{pmatrix}x_D-x_C\\\\y_D-y_C\\end{pmatrix}=\\begin{pmatrix} ${xd}-${pxc[0]}${xc}${pxc[1]} \\\\ y_D-${pyc[0]}${yc}${pyc[1]} \\end{pmatrix}=\\begin{pmatrix} ${xdxc} \\\\ y_D${sopyc}${opyc} \\end{pmatrix}$<br><br>
$\\text{dét}\\left(\\overrightarrow{AB}~;\\overrightarrow{CD}\\right)=\\left|\\begin{array}{cc} ${xbxa} & ${xdxc} \\\\ ${ybya} & y_D${sopyc}${opyc} \\end{array}\\right|=${xbxa}\\times (y_D${sopyc}${opyc})-${pybya[0]}${ybya}${pybya[1]}\\times ${pxdxc[0]}${xdxc}${pxdxc[1]}$<br><br>
Donc il faut résoudre l'équation :<br>
$\\begin{array}{rcl} ${xbxa}\\times (y_D${sopyc}${opyc})-${pybya[0]}${ybya}${pybya[1]}\\times ${pxdxc[0]}${xdxc}${pxdxc[1]} & = & 0 \\\\
${xbxa}y_D${sopxbxayc}${opxbxayc}${sopybyaxdxc}${opybyaxdxc} & = & 0 \\\\
${xbxa}y_D${sreelsg}${reelsg} & = & 0 \\\\
${xbxa}y_D & = & ${reelsd} \\\\
y_D & = & \\dfrac{${reelsd}}{${xbxa}}=${yd}
\\end{array}$`]

enonce.innerHTML = listenonces[k];
solution.innerHTML = listesolutions[k];
correctiond.innerHTML = listeCorrections[k];

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
    location.href = "../../../Menus/MenuSecondeVecteurs.html";
})