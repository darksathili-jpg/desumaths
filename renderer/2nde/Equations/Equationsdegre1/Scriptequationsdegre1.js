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

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
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

function fracoupasfrac(num,denom) {
    let rep;
    if (denom==1) {rep=`${num}`;} else {rep=`\\dfrac{${num}}{${denom}}`;}
    return rep;
}

function simpfracmax(num,denom){
    let rep;
    let frac1 = simplifierfraction(num,denom);
    let frac2 = fracsimp(frac1[0],frac1[1]);
    let frac3 = fracoupasfrac(frac2[0],frac2[1]);
    return rep = frac3;
}

function unoupasun(a) {
    let rep;
    if (a==1) {rep=``;} else {
        if (a==-1) {rep=`-`;} else {rep=`${a}`;}}
    return rep;
}

function coefdiff(a) {
    let rep = nbreouoppose(nbrealéa(1,10));
    while (a==rep) {rep = nbreouoppose(nbrealéa(1,10));}
    return rep;
}

function cas(denom) {
    let k;
    if (denom==1) {k=1;}
    else {k=0;}
    return k;
}

function repfrac(num1,denom1,num2,denom2,signe) {
    let rep;
    if (num1==num2 && denom1==denom2) {rep=``;} else {rep=`=${signe}\\dfrac{${num2}}{${denom2}}`;}
    return rep;
}

let a = nbreouoppose(nbrealéa(1,10));
let a1 = unoupasun(a);
let b = nbreouoppose(nbrealéa(1,10));
let sb = rienplus(b);
let c = coefdiff(a);
let c1 = unoupasun(c);
let d = nbreouoppose(nbrealéa(1,10));
let sd = rienplus(d);
let oppc = -c;
let soppc = rienplus(oppc);
let oppc1 = unoupasun(oppc);
let oppb = -b;
let soppb = rienplus(oppb);
let coeffx = a-c;
let coeffreels = d-b;
let scoefreels = rienplus(coeffreels);
let rep = simplifierfraction(coeffreels,coeffx);
let repsimp = fracsimp(rep[0],rep[1]);
let srepsimple = rienmoins(coeffreels/coeffx);
let k = cas(rep[1]);
let rep2 = coeffreels/coeffx;
let fracfinale = repfrac(coeffreels,coeffx,repsimp[0],repsimp[1],srepsimple);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');

let listecorrections = [`$\\underline{\\text{Méthode &laquo collège &raquo :}}$<br><br>
$\\begin{array}{lrcl} & ${a1}x${sb}${b} & = & ${c1}x${sd}${d} \\\\
\\iff & ${a1}x~\\underbrace{${sb}${b} \\color{blue}{${soppb}${oppb}}}_{=~0} & = & ${c1}x${sd}${d} \\color{blue}{${soppb}${oppb}} \\\\
\\iff & ${a1}x & = & ${c1}x${scoefreels}${coeffreels} \\\\
\\iff & ${a1}x~\\color{green}{${soppc}${oppc1}x} & = & \\underbrace{${c1}x~\\color{green}{${soppc}${oppc1}x}}_{=~0}${scoefreels}${coeffreels} \\\\
\\iff & ${coeffx}x & = & ${coeffreels} \\\\
\\iff & \\dfrac{${coeffx}~x}{\\color{red}{${coeffx}}} & = & \\dfrac{${coeffreels}}{\\color{red}{${coeffx}}} \\\\
\\iff & x & = & \\dfrac{${coeffreels}}{${coeffx}}${fracfinale}
\\end{array}$<br><br>
$\\underline{\\text{Méthode &laquo lycée &raquo :}}$<br><br>
$\\begin{array}{lrcl} & ${a1}x${sb}${b} & = & ${c1}x${sd}${d} \\\\
\\iff & ${a1}x ${soppc}${oppc1}x & = & ${d}${soppb}${oppb} \\\\
\\iff & ${coeffx}x & = & ${coeffreels} \\\\
\\iff & x & = & \\dfrac{${coeffreels}}{${coeffx}}${fracfinale}
\\end{array}$`,
`$\\underline{\\text{Méthode &laquo collège &raquo :}}$<br><br>
$\\begin{array}{lrcl} & ${a1}x${sb}${b} & = & ${c1}x${sd}${d} \\\\
\\iff & ${a1}x~\\underbrace{${sb}${b} \\color{blue}{${soppb}${oppb}}}_{=~0} & = & ${c1}x${sd}${d} \\color{blue}{${soppb}${oppb}} \\\\
\\iff & ${a1}x & = & ${c1}x${scoefreels}${coeffreels} \\\\
\\iff & ${a1}x~\\color{green}{${soppc}${oppc1}x} & = & \\underbrace{${c1}x~\\color{green}{${soppc}${oppc1}x}}_{=~0}${scoefreels}${coeffreels} \\\\
\\iff & ${coeffx}x & = & ${coeffreels} \\\\
\\iff & \\dfrac{${coeffx}~x}{\\color{red}{${coeffx}}} & = & \\dfrac{${coeffreels}}{\\color{red}{${coeffx}}} \\\\
\\iff & x & = & \\dfrac{${coeffreels}}{${coeffx}}=${rep2}
\\end{array}$<br><br>
$\\underline{\\text{Méthode &laquo lycée &raquo :}}$<br><br>
$\\begin{array}{lrcl} & ${a1}x${sb}${b} & = & ${c1}x${sd}${d} \\\\
\\iff & ${a1}x ${soppc}${oppc1}x & = & ${d}${soppb}${oppb} \\\\
\\iff & ${coeffx}x & = & ${coeffreels} \\\\
\\iff & x & = & \\dfrac{${coeffreels}}{${coeffx}}=${rep2}
\\end{array}$`];

let listesolutions = [`$S=\\left\\{ ${srepsimple}\\dfrac{${repsimp[0]}}{${repsimp[1]}} \\right\\}$`,
`$S=\\left\\{${rep2}\\right\\}$`];

enonce.innerHTML = `Résoudre dans $\\mathbb{R}$ l'équation : $${a1}x${sb}${b}=${c1}x${sd}${d}$`;
solution.innerHTML = listesolutions[k];
correctiond.innerHTML = listecorrections[k];

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
    location.href = "../../../Menus/MenuSecondeEquations.html";
})