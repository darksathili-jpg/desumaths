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
let xa = nbrealéa(-10,10);
let pxa = parenthesegd(xa);
let opxa = -xa;
let sopxa = rienplus(opxa);
let ya = a*xa+b;
let pya = parenthesegd(ya);
let xb = xa+nbrealéa(1,5);
let yb = a*xb+b;
let xc = xa-nbrealéa(1,5);
let yc = a*xc+b;
let xbxa = xb-xa;
let ybya = yb-ya;
let ycya = yc-ya;
let pybya = parenthesegd(ybya);
let pycya = parenthesegd(ycya);
let xbxaycya = xbxa*ycya;
let opxbxaycya = - xbxaycya;
let opybya = -ybya;
let sopybya = rienplus(opybya);
let ybyaxa = ybya*xa;
let sybyaxa = rienplus(ybyaxa);
let opybyaxa = -ybyaxa;
let sopybyaxa = rienplus(opybyaxa);
let eqdte = opxbxaycya+opybyaxa;

let xcxa = xc-xa;
let opya = -ya;
let sopya = rienplus(opya);
let opxbxaya = xbxa*opya;
let sopxbxaya = rienplus(opxbxaya);
let opybyaxcxa = -ybya*xcxa;
let sopybyaxcxa = rienplus(opybyaxcxa);
let eqreelsg = opxbxaya+opybyaxcxa;
let seqreelsg = rienplus(eqreelsg);
let eqreelsd = -eqreelsg;

let k = nbrealéa(0,1);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


let listenonces = [`Dans un repère $\\left(O~;\\overrightarrow{i},\\overrightarrow{j}\\right)$ on donne les points : $A\\left(${xa}~;${ya}\\right), B\\left(${xb}~;${yb}\\right)$ et $C\\left(x_C~;${yc}\\right)$<br>
Déterminer $x_C$ pour que les points $A$, $B$ et $C$ soient alignés.`,
`Dans un repère $\\left(O~;\\overrightarrow{i},\\overrightarrow{j}\\right)$ on donne les points : $A\\left(${xa}~;${ya}\\right), B\\left(${xb}~;${yb}\\right)$ et $C\\left(${xc}~;y_C\\right)$<br>
Déterminer $y_C$ pour que les points $A$, $B$ et $C$ soient alignés.`]

let listesolutions = [`$x_C=${xc}$`,`$y_C=${yc}$`]

let listeCorrections =[`Les points $A$, $B$ et $C$ sont alignés si les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires donc si $\\text{dét}\\left(\\overrightarrow{AB}~;\\overrightarrow{AC}\\right)=0$.<br><br>
$\\overrightarrow{AB}\\begin{pmatrix}x_B-x_A\\\\y_B-y_A\\end{pmatrix}=\\begin{pmatrix} ${xb}-${pxa[0]}${xa}${pxa[1]} \\\\ ${yb}-${pya[0]}${ya}${pya[1]} \\end{pmatrix}=\\begin{pmatrix} ${xbxa} \\\\ ${ybya} \\end{pmatrix}$ et $\\overrightarrow{AC}\\begin{pmatrix}x_C-x_A\\\\y_C-y_A\\end{pmatrix}=\\begin{pmatrix} x_C-${pxa[0]}${xa}${pxa[1]} \\\\ ${yc}-${pya[0]}${ya}${pya[1]} \\end{pmatrix}=\\begin{pmatrix} x_C${sopxa}${opxa} \\\\ ${ycya} \\end{pmatrix}$<br><br>
$\\text{dét}\\left(\\overrightarrow{AB}~;\\overrightarrow{AC}\\right)=\\left|\\begin{array}{cc} ${xbxa} & x_C${sopxa}${opxa} \\\\ ${ybya} & ${ycya} \\end{array}\\right|=${xbxa}\\times ${pycya[0]}${ycya}${pycya[1]}-${pybya[0]}${ybya}${pybya[1]}\\times \\left(x_C${sopxa}${opxa} \\right)$<br><br>
Donc il faut résoudre l'équation :<br>
$\\begin{array}{rcl} ${xbxa}\\times ${pycya[0]}${ycya}${pycya[1]}-${pybya[0]}${ybya}${pybya[1]}\\times \\left(x_C${sopxa}${opxa} \\right) & = & 0 \\\\
${xbxaycya}${sopybya}${opybya}x_C${sybyaxa}${ybyaxa} & = & 0 \\\\
${sopybya}${opybya}x_C & = & ${opxbxaycya}${sopybyaxa}${opybyaxa} \\\\
${sopybya}${opybya}x_C & = & ${eqdte} \\\\
x_C & = & \\dfrac{${eqdte}}{${opybya}}=${xc}
\\end{array}$`,
`Les points $A$, $B$ et $C$ sont alignés si les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires donc si $\\text{dét}\\left(\\overrightarrow{AB}~;\\overrightarrow{AC}\\right)=0$.<br><br>
$\\overrightarrow{AB}\\begin{pmatrix}x_B-x_A\\\\y_B-y_A\\end{pmatrix}=\\begin{pmatrix} ${xb}-${pxa[0]}${xa}${pxa[1]} \\\\ ${yb}-${pya[0]}${ya}${pya[1]} \\end{pmatrix}=\\begin{pmatrix} ${xbxa} \\\\ ${ybya} \\end{pmatrix}$ et $\\overrightarrow{AC}\\begin{pmatrix}x_C-x_A\\\\y_C-y_A\\end{pmatrix}=\\begin{pmatrix} ${xc}-${pxa[0]}${xa}${pxa[1]} \\\\ y_C-${pya[0]}${ya}${pya[1]} \\end{pmatrix}=\\begin{pmatrix} ${xcxa} \\\\ y_C${sopya}${opya} \\end{pmatrix}$<br><br>
$\\text{dét}\\left(\\overrightarrow{AB}~;\\overrightarrow{AC}\\right)=\\left|\\begin{array}{cc} ${xbxa} & ${xcxa} \\\\ ${ybya} & y_C${sopya}${opya} \\end{array}\\right|=${xbxa}\\times (y_C${sopya}${opya})-${pybya[0]}${ybya}${pybya[1]}\\times \\left(${xcxa} \\right)$<br><br>
Donc il faut résoudre l'équation :<br>
$\\begin{array}{rcl} ${xbxa}\\times (y_C${sopya}${opya})-${pybya[0]}${ybya}${pybya[1]}\\times \\left(${xcxa} \\right) & = & 0 \\\\
${xbxa}y_C${sopxbxaya}${opxbxaya}${sopybyaxcxa}${opybyaxcxa} & = & 0 \\\\
${xbxa}y_C${seqreelsg}${eqreelsg} & = & 0 \\\\
${xbxa}y_C & = & ${eqreelsd} \\\\
y_C & = & \\dfrac{${eqreelsd}}{${xbxa}}=${yc}
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