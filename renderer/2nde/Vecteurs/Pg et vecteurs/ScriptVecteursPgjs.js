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
    let rep = nbrealéa(2,10);
    while (rep==a) {rep=nbrealéa(2,10);}
    return rep;
}

function valabs(a) {
    let rep;
    if (a<0) {rep=-a;} else {rep=a;}
    return rep;
}

let xa = nbrealéa(-10,10);
let sxa = rienplus(xa);
let pxa = parenthesegd(xa);
let opxa = -xa;
let sopxa = rienplus(opxa);
let ya = nbrealéa(-10,10);
let sya = rienplus(ya);
let pya = parenthesegd(ya);
let opya = -ya;
let sopya = rienplus(opya);
let xb = nbrealéa(-10,10);
let sxb = rienplus(xb);
let pxb = parenthesegd(xb);
let opxb = -xb;
let sopxb = rienplus(opxb);
let yb = nbrealéa(-10,10);
let syb = rienplus(yb);
let pyb = parenthesegd(yb);
let opyb = -yb;
let sopyb = rienplus(opyb);
let xc = nbrealéa(-10,10);
let sxc = rienplus(xc);
let pxc = parenthesegd(xc);
let opxc = -xc;
let sopxc = rienplus(opxc);
let yc = nbrealéa(-10,10);
let syc = rienplus(yc);
let pyc = parenthesegd(yc);
let opyc = -yc;
let sopyc = rienplus(opyc);
let xcxb = xc-xb;
let ycyb = yc-yb;
let xd = xcxb+xa;
let yd = ycyb+ya;
let xcxa = xc-xa;
let ycya = yc-ya;
let xd1 = xcxa+xb;
let yd1 = ycya+yb;
let xbxc = xb-xc;
let ybyc = yb-yc;
let xd2 = xbxc+xa;
let yd2 = ybyc+ya;
let k = nbrealéa(0,2);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


let listenonces = [`Dans un repère $\\left(O~;\\overrightarrow{i},\\overrightarrow{j}\\right)$ on donne les points : $A\\left(${xa}~;${ya}\\right), B\\left(${xb}~;${yb}\\right)$ et $C\\left(${xc}~;${yc}\\right)$<br>
Déterminer les coordonnées du point $D$ tel que $ABCD$ soit un parallélogramme.`,
`Dans un repère $\\left(O~;\\overrightarrow{i},\\overrightarrow{j}\\right)$ on donne les points : $A\\left(${xa}~;${ya}\\right), B\\left(${xb}~;${yb}\\right)$ et $C\\left(${xc}~;${yc}\\right)$<br>
Déterminer les coordonnées du point $D$ tel que $ABDC$ soit un parallélogramme.`,
`Dans un repère $\\left(O~;\\overrightarrow{i},\\overrightarrow{j}\\right)$ on donne les points : $A\\left(${xa}~;${ya}\\right), B\\left(${xb}~;${yb}\\right)$ et $C\\left(${xc}~;${yc}\\right)$<br>
Déterminer les coordonnées du point $D$ tel que $ADBC$ soit un parallélogramme.`]

let listesolutions = [`$D\\left(${xd}~;${yd}\\right)$`,`$D\\left(${xd1}~;${yd1}\\right)$`,`$D\\left(${xd2}~;${yd2}\\right)$`]

let listeCorrections =[`Pour que $ABCD$ soit un parallélogramme il faut que $\\overrightarrow{AD}=\\overrightarrow{BC}$.<br>
$\\begin{array}{cccc} \\overrightarrow{AD} & = & \\overrightarrow{BC} & \\text{donc} \\\\
\\begin{pmatrix} x_D-x_A \\\\ y_D-y_A \\end{pmatrix} & = & \\begin{pmatrix} x_C-x_B \\\\ y_C-y_B \\end{pmatrix} & \\text{donc} \\\\\\\\
\\begin{pmatrix} x_D-${pxa[0]}${xa}${pxa[1]} \\\\ y_D-${pya[0]}${ya}${pya[1]} \\end{pmatrix} & = & \\begin{pmatrix} ${xc}-${pxb[0]}${xb}${pxb[1]} \\\\ ${yc}-${pyb[0]}${yb}${pyb[1]} \\end{pmatrix} & \\text{donc on obtient les équations :} \\\\\\\\
\\end{array}$<br>
$\\begin{array}{rclcrclc} x_D${sopxa}${opxa} & = & ${xc}${sopxb}${opxb} & \\text{et} & y_D${sopya}${opya} & = & ${yc}${sopyb}${opyb} & \\text{donc} \\\\
x_D${sopxa}${opxa} & = & ${xcxb} & \\text{et} & y_D${sopya}${opya} & = & ${ycyb} & \\text{donc} \\\\
x_D & = & ${xcxb}${sxa}${xa} & \\text{et} & y_D & = & ${ycyb}${sya}${ya} & \\text{donc} \\\\
x_D & = & ${xd} & \\text{et} & y_D & = & ${yd} &
\\end{array}$<br><br>
$\\underline{\\text{Conclusion :}} \\hspace{1cm}D\\left(${xd}~;${yd}\\right)$`,
`Pour que $ABDC$ soit un parallélogramme il faut que $\\overrightarrow{BD}=\\overrightarrow{AC}$.<br>
$\\begin{array}{cccc} \\overrightarrow{BD} & = & \\overrightarrow{AC} & \\text{donc} \\\\
\\begin{pmatrix} x_D-x_B \\\\ y_D-y_B \\end{pmatrix} & = & \\begin{pmatrix} x_C-x_A \\\\ y_C-y_A \\end{pmatrix} & \\text{donc} \\\\\\\\
\\begin{pmatrix} x_D-${pxb[0]}${xb}${pxb[1]} \\\\ y_D-${pyb[0]}${yb}${pyb[1]} \\end{pmatrix} & = & \\begin{pmatrix} ${xc}-${pxa[0]}${xa}${pxa[1]} \\\\ ${yc}-${pya[0]}${ya}${pya[1]} \\end{pmatrix} & \\text{donc on obtient les équations :} \\\\\\\\
\\end{array}$<br>
$\\begin{array}{rclcrclc} x_D${sopxb}${opxb} & = & ${xc}${sopxa}${opxa} & \\text{et} & y_D${sopyb}${opyb} & = & ${yc}${sopya}${opya} & \\text{donc} \\\\
x_D${sopxb}${opxb} & = & ${xcxa} & \\text{et} & y_D${sopyb}${opyb} & = & ${ycya} & \\text{donc} \\\\
x_D & = & ${xcxa}${sxb}${xb} & \\text{et} & y_D & = & ${ycya}${syb}${yb} & \\text{donc} \\\\
x_D & = & ${xd1} & \\text{et} & y_D & = & ${yd1} &
\\end{array}$<br><br>
$\\underline{\\text{Conclusion :}} \\hspace{1cm}D\\left(${xd1}~;${yd1}\\right)$`,
`Pour que $ADBC$ soit un parallélogramme il faut que $\\overrightarrow{AD}=\\overrightarrow{CB}$.<br>
$\\begin{array}{cccc} \\overrightarrow{AD} & = & \\overrightarrow{CB} & \\text{donc} \\\\
\\begin{pmatrix} x_D-x_A \\\\ y_D-y_A \\end{pmatrix} & = & \\begin{pmatrix} x_B-x_C \\\\ y_B-y_C \\end{pmatrix} & \\text{donc} \\\\\\\\
\\begin{pmatrix} x_D-${pxa[0]}${xa}${pxa[1]} \\\\ y_D-${pya[0]}${ya}${pya[1]} \\end{pmatrix} & = & \\begin{pmatrix} ${xb}-${pxc[0]}${xc}${pxc[1]} \\\\ ${yb}-${pyc[0]}${yc}${pyc[1]} \\end{pmatrix} & \\text{donc on obtient les équations :} \\\\\\\\
\\end{array}$<br>
$\\begin{array}{rclcrclc} x_D${sopxa}${opxa} & = & ${xb}${sopxc}${opxc} & \\text{et} & y_D${sopya}${opya} & = & ${yb}${sopyc}${opyc} & \\text{donc} \\\\
x_D${sopxa}${opxa} & = & ${xbxc} & \\text{et} & y_D${sopya}${opya} & = & ${ybyc} & \\text{donc} \\\\
x_D & = & ${xbxc}${sxa}${xa} & \\text{et} & y_D & = & ${ybyc}${sya}${ya} & \\text{donc} \\\\
x_D & = & ${xd2} & \\text{et} & y_D & = & ${yd2} &
\\end{array}$<br><br>
$\\underline{\\text{Conclusion :}} \\hspace{1cm}D\\left(${xd2}~;${yd2}\\right)$`]

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