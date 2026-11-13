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
let yb = nbrealéa(-10,10);
let xc = nbrealéa(-10,10);
let yc = nbrealéa(-10,10);
let a = nbreouoppose(nbrealéa(2,10));
let b = nbreouoppose(nbrealéa(2,10));
let sb = rienplus(b);
let xab = xb-xa;
let pxab = parenthesegd(xab);
let yab = yb-ya;
let pyab = parenthesegd(yab);
let xac = xc-xa;
let pxac = parenthesegd(xac);
let yac = yc-ya;
let pyac = parenthesegd(yac);
let xg = a*xab+b*xac;
let yg = a*yab+b*yac;
let xd = xg+xa;
let yd = yg+ya;
let axab = a*xab;
let ayab = a*yab;
let bxac = b*xac;
let sbxac = rienplus(bxac);
let byac = b*yac;
let sbyac = rienplus(byac);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


let listenonces = [`Dans un repère $\\left(O~;\\overrightarrow{i},\\overrightarrow{j}\\right)$ on donne les points : $A\\left(${xa}~;${ya}\\right), B\\left(${xb}~;${yb}\\right)$ et $C\\left(${xc}~;${yc}\\right)$<br>
Déterminer les coordonnées du point $D$ tel que $\\overrightarrow{AD}=${a}\\overrightarrow{AB}${sb}${b}\\overrightarrow{AC}$.`]

let listesolutions = [`$D~(${xd}~;${yd})$`]

let listeCorrections =[`$\\begin{array}{ccccccl} \\overrightarrow{AD} & = & ${a} & \\overrightarrow{AB} & ${sb}${b} & \\overrightarrow{AC} & \\text{donc} \\\\
\\begin{pmatrix} x_D-x_A \\\\ y_D-y_A \\end{pmatrix} & = & ${a} & \\begin{pmatrix} x_B-x_A \\\\ y_B-y_A \\end{pmatrix} & ${sb}${b} & \\begin{pmatrix} x_C-x_A \\\\ y_C-y_A \\end{pmatrix} & \\text{donc} \\\\\\\\
\\begin{pmatrix} x_D-${pxa[0]}${xa}${pxa[1]} \\\\ y_D-${pya[0]}${ya}${pya[1]} \\end{pmatrix} & = & ${a} & \\begin{pmatrix} ${xb}-${pxa[0]}${xa}${pxa[1]} \\\\ ${yb}-${pya[0]}${ya}${pya[1]} \\end{pmatrix} & ${sb}${b} & \\begin{pmatrix} ${xc}-${pxa[0]}${xa}${pxa[1]} \\\\ ${yc}-${pya[0]}${ya}${pya[1]} \\end{pmatrix} & \\text{donc} \\\\\\\\
\\begin{pmatrix} x_D${sopxa}${opxa} \\\\ y_D${sopya}${opya} \\end{pmatrix} & = & ${a} & \\begin{pmatrix} ${xab} \\\\ ${yab} \\end{pmatrix} & ${sb}${b} & \\begin{pmatrix} ${xac} \\\\ ${yac} \\end{pmatrix} & \\text{donc on obtient les équations :} \\\\
\\end{array}$<br><br>
$\\begin{array}{rclcrcll} x_D${sopxa}${opxa} & = & ${a}\\times ${pxab[0]}${xab}${pxab[1]} ${sb}${b}\\times ${pxac[0]}${xac}${pxac[1]} & \\text{et} & y_D${sopya}${opya} & = & ${a}\\times ${pyab[0]}${yab}${pyab[1]} ${sb}${b}\\times ${pyac[0]}${yac}${pyac[1]} & \\text{donc} \\\\
x_D${sopxa}${opxa} & = & ${axab}${sbxac}${bxac} & \\text{et} & y_D${sopya}${opya} & = & ${ayab}${sbyac}${byac} & \\text{donc} \\\\
x_D${sopxa}${opxa} & = & ${xg} & \\text{et} & y_D${sopya}${opya} & = & ${yg} & \\text{donc} \\\\
x_D & = & ${xg}${sxa}${xa} & \\text{et} & y_D & = & ${yg}${sya}${ya} & \\text{donc} \\\\
x_D & = & ${xd} & \\text{et} & y_D & = & ${yd} &
\\end{array}$<br><br>
$\\underline{\\text{Conclusion :}} \\hspace{2cm} D~(${xd}~;${yd})$`]

enonce.innerHTML = listenonces[0];
solution.innerHTML = listesolutions[0];
correctiond.innerHTML = listeCorrections[0];

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