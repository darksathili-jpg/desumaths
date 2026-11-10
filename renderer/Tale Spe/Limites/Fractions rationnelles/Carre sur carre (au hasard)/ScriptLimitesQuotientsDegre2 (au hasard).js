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

function imagenum(a,b,c,x1,x2) {
    let rep;
    let num1 = a*x1**2+b*x1+c;
    let num2 = a*x2**2+b*x2+c;
    if (num1==0 || num2==0) {rep=c+1;} else {rep=c};
    return rep;
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }

function signezero(a) {
    let rep;
    let sg;
    let sc;
    let sd;
    if (a<0) {sg='-';sc='+';sd='-';} else {sg='+';sc='-';sd='+';}
    rep = [sg,sc,sd];
    return rep;
}

function signequotient(a,b) {
    let rep;
    if (a<0 && b=='+') {rep='-';}
    if (a<0 && b=='-') {rep='+';}
    if (a>0 && b=='+') {rep='+';}
    if (a>0 && b=='-') {rep='-';}
    return rep;
}

function nbrediff(a) {
    let b = nbrealéa(-10,10);
    while (a==b) {b=nbrealéa(-10,10);}
    return b;
}

function pluspetit(a,b) {
    let rep;
    if (a<b) {rep=[a,b];} else {rep=[b,a];}
    return rep;
}

function test_réponse(a,b,c) {
    let test;
    let div=a/b;
    if (div==c) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

let x1 = nbrealéa(-10,10);
let x2 = nbrediff(x1);
let a = nbreouoppose(nbrealéa(1,10));
let b = nbreouoppose(nbrealéa(1,10));
let sb = rienplus(b);
let signeb = plusmoins(b);
let absb = valabs(b);
let c1 = nbreouoppose(nbrealéa(1,10));
let c = imagenum(a,b,c1,x1,x2);
let sc = rienplus(c);
let signec = plusmoins(c);
let absc = valabs(c);
let d = nbreouoppose(nbrealéa(1,10));
let e= -d*x2-d*x1;
let se = rienplus(e);
let signee = plusmoins(e);
let abse = valabs(e);
let f = d*x1*x2;
let sf = rienplus(f);
let signef = plusmoins(f);
let absf = valabs(f);
let pg = pluspetit(x1,x2);
let sasurd = rienmoins(a/d);
let simpasurd = simplifierfraction(valabs(a),valabs(d));
let numx1 = a*pg[0]**2+b*pg[0]+c;
let numx2 = a*pg[1]**2+b*pg[1]+c;
let signesx1x2 = signezero(d);
let slim1 = signequotient(numx1,signesx1x2[0]);
let slim2 = signequotient(numx1,signesx1x2[1]);
let slim3 = signequotient(numx2,signesx1x2[1]);
let slim4 = signequotient(numx2,signesx1x2[2]);
let k =nbrealéa(0,5);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');

let listeenonces = [`Soit $f$ la fonction définie sur $\\mathbb{R}~\\backslash\\left\\{${pg[0]}~;~${pg[1]}\\right\\}$ par $f(x)=\\dfrac{${a}x^2${sb}${b}x${sc}${c}}{${d}x^2${se}${e}x${sf}${f}}$<br>
Déterminer la limite de $f$ en $-\\infty$ et en déduire l'existence d'une éventuelle asymptote à la courbe représentative de $f$.`,
`Soit $f$ la fonction définie sur $\\mathbb{R}~\\backslash\\left\\{${pg[0]}~;~${pg[1]}\\right\\}$ par $f(x)=\\dfrac{${a}x^2${sb}${b}x${sc}${c}}{${d}x^2${se}${e}x${sf}${f}}$<br>
Déterminer la limite de $f$ en $${pg[0]}^-$ et en déduire l'existence d'une éventuelle asymptote à la courbe représentative de $f$.`,
`Soit $f$ la fonction définie sur $\\mathbb{R}~\\backslash\\left\\{${pg[0]}~;~${pg[1]}\\right\\}$ par $f(x)=\\dfrac{${a}x^2${sb}${b}x${sc}${c}}{${d}x^2${se}${e}x${sf}${f}}$<br>
Déterminer la limite de $f$ en $${pg[0]}^+$ et en déduire l'existence d'une éventuelle asymptote à la courbe représentative de $f$.`,
`Soit $f$ la fonction définie sur $\\mathbb{R}~\\backslash\\left\\{${pg[0]}~;~${pg[1]}\\right\\}$ par $f(x)=\\dfrac{${a}x^2${sb}${b}x${sc}${c}}{${d}x^2${se}${e}x${sf}${f}}$<br>
Déterminer la limite de $f$ en $${pg[1]}^-$ et en déduire l'existence d'une éventuelle asymptote à la courbe représentative de $f$.`,
`Soit $f$ la fonction définie sur $\\mathbb{R}~\\backslash\\left\\{${pg[0]}~;~${pg[1]}\\right\\}$ par $f(x)=\\dfrac{${a}x^2${sb}${b}x${sc}${c}}{${d}x^2${se}${e}x${sf}${f}}$<br>
Déterminer la limite de $f$ en $${pg[1]}^+$ et en déduire l'existence d'une éventuelle asymptote à la courbe représentative de $f$.`,
`Soit $f$ la fonction définie sur $\\mathbb{R}~\\backslash\\left\\{${pg[0]}~;~${pg[1]}\\right\\}$ par $f(x)=\\dfrac{${a}x^2${sb}${b}x${sc}${c}}{${d}x^2${se}${e}x${sf}${f}}$<br>
Déterminer la limite de $f$ en $+\\infty$ et en déduire l'existence d'une éventuelle asymptote à la courbe représentative de $f$.`];

let listesolutions = [`$\\displaystyle{\\lim_{x\\to -\\infty} f(x) }=${sasurd}\\dfrac{${simpasurd[0]}}{${simpasurd[1]}}$<br> Il y a donc une asymptote horizontale d'équation $y=${sasurd}\\dfrac{${simpasurd[0]}}{${simpasurd[1]}}$`,
`$\\displaystyle{\\lim_{x\\to ${pg[0]}^-} f(x)}= ${slim1} \\infty$ (asymptote verticale $x=${pg[0]}$)`,
`$\\displaystyle{\\lim_{x\\to ${pg[0]}^+} f(x)}= ${slim2} \\infty$ (asymptote verticale $x=${pg[0]}$)`,
`$\\displaystyle{\\lim_{x\\to ${pg[1]}^-} f(x)}= ${slim3} \\infty$ (asymptote verticale $x=${pg[1]}$)`,
`$\\displaystyle{\\lim_{x\\to ${pg[1]}^+} f(x)}= ${slim4} \\infty$ (asymptote verticale $x=${pg[1]}$)`,
`$\\displaystyle{\\lim_{x\\to +\\infty} f(x)}=${sasurd}\\dfrac{${simpasurd[0]}}{${simpasurd[1]}}$<br> Il y a donc une asymptote horizontale d'équation $y=${sasurd}\\dfrac{${simpasurd[0]}}{${simpasurd[1]}}$`];

let listecorrections = [`$\\underline{\\text{En} -\\infty :}~\\textbf{Méthode 1 :}$ avec les termes de plus haut degré :<br>
$\\displaystyle{\\lim_{x\\to -\\infty} f(x)}=\\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{${a}x^2}{${d}x^2}}=\\displaystyle{\\lim_{x\\to -\\infty} \\left( ${sasurd} \\dfrac{${simpasurd[0]}}{${simpasurd[1]}} \\right) }=${sasurd} \\dfrac{${simpasurd[0]}}{${simpasurd[1]}}$.<br><hr>
$\\textbf{Méthode 2 :}$ en factorisant le numérateur et le dénominateur :<br>
$\\displaystyle{\\lim_{x\\to -\\infty} f(x)}=\\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{x^2\\left( ${a}${signeb}\\frac{${absb}}{x}${signec}\\frac{${absc}}{x^2}\\right)}{x^2\\left( ${d} ${signee}\\frac{${abse}}{x}${signef}\\frac{${absf}}{x^2} \\right)}}=\\displaystyle{\\lim_{x\\to -\\infty} \\left(\\dfrac{x^2}{x^2}\\times\\dfrac{${a}${signeb}\\frac{${absb}}{x}${signec}\\frac{${absc}}{x^2}}{${d}${signee}\\frac{${abse}}{x}${signef}\\frac{${absf}}{x^2}}\\right)} $<br><br>
$\\left.\\begin{array}\\phantom{}\\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{x^2}{x^2}}=\\displaystyle{\\lim_{x\\to -\\infty} 1}=1  \\\\ \\\\
\\left.\\begin{array} \\phantom{}
\\left.\\begin{array} \\phantom{}\\displaystyle{\\lim_{x\\to -\\infty} ${a}}=${a} \\\\ \\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{${b}}{x}}=0 \\\\ \\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{${c}}{x^2}}=0 \\end{array}\\right\\}\\stackrel{\\text{somme}}{\\implies} \\displaystyle{\\lim_{x\\to -\\infty} \\left( ${a}${signeb}\\dfrac{${absb}}{x}${signec}\\dfrac{${absc}}{x^2} \\right) }=${a}\\\\ \\\\
\\left.\\begin{array} \\phantom{}\\displaystyle{\\lim_{x\\to -\\infty} ${d}}=${d} \\\\ \\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{${e}}{x}}=0 \\\\ \\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{${f}}{x^2}}=0 \\end{array}\\right\\}\\stackrel{\\text{somme}}{\\implies} \\displaystyle{\\lim_{x\\to -\\infty} \\left( ${d} ${signee}\\dfrac{${abse}}{x}${signef}\\dfrac{${absf}}{x^2} \\right)}=${d}
\\end{array}\\right\\} \\stackrel{\\text{quotient}}{\\implies} \\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{${a}${signeb}\\frac{${absb}}{x}${signec}\\frac{${absc}}{x^2}}{${d}${signee}\\frac{${abse}}{x}${signef}\\frac{${absf}}{x^2}}}=${sasurd}\\dfrac{${simpasurd[0]}}{${simpasurd[1]}}
\\end{array} \\right\\} \\stackrel{\\text{produit}}{\\implies} \\displaystyle{\\lim_{x\\to -\\infty} f(x)}=${sasurd}\\dfrac{${simpasurd[0]}}{${simpasurd[1]}}$<br> Il y a donc une asymptote horizontale d'équation $y=${sasurd}\\dfrac{${simpasurd[0]}}{${simpasurd[1]}}$`,
`$\\underline{\\text{En}~${pg[0]}^-~:}$<br>
$\\left. \\begin{array} \\phantom{}\\displaystyle{\\lim_{x\\to ${pg[0]}} \\left( ${a}x^2${sb}${b}x${sc}${c} \\right)}= ${numx1} \\\\
\\displaystyle{\\lim_{x\\to ${pg[0]}^-} \\left( ${d}x^2${se}${e}x${sf}${f} \\right)}= 0^{${signesx1x2[0]}}
\\end{array} \\right\\} \\stackrel{\\text{quotient}}{\\implies} \\displaystyle{\\lim_{x\\to ${pg[0]}^-} f(x)}=${slim1}  \\infty$<br>
Il y a donc une asymptote verticale d'équation $x=${pg[0]}$`,
`$\\underline{\\text{En}~${pg[0]}^+~:}$<br>
$\\left. \\begin{array} \\phantom{}\\displaystyle{\\lim_{x\\to ${pg[0]}} \\left( ${a}x^2${sb}${b}x${sc}${c} \\right)}= ${numx1} \\\\
\\displaystyle{\\lim_{x\\to ${pg[0]}^+} \\left( ${d}x^2${se}${e}x${sf}${f} \\right)}= 0^{${signesx1x2[1]}}
\\end{array} \\right\\} \\stackrel{\\text{quotient}}{\\implies} \\displaystyle{\\lim_{x\\to ${pg[0]}^+} f(x)}=${slim2}  \\infty$<br>
Il y a donc une asymptote verticale d'équation $x=${pg[0]}$`,
`$\\underline{\\text{En}~${pg[1]}^-~:}$<br>
$\\left. \\begin{array} \\phantom{}\\displaystyle{\\lim_{x\\to ${pg[1]}} \\left( ${a}x^2${sb}${b}x${sc}${c} \\right)}= ${numx2} \\\\
\\displaystyle{\\lim_{x\\to ${pg[1]}^-} \\left( ${d}x^2${se}${e}x${sf}${f} \\right)}= 0^{${signesx1x2[1]}}
\\end{array} \\right\\} \\stackrel{\\text{quotient}}{\\implies} \\displaystyle{\\lim_{x\\to ${pg[1]}^-} f(x)}=${slim3}  \\infty$<br>
Il y a donc une asymptote verticale d'équation $x=${pg[1]}$`,
`$\\underline{\\text{En}~${pg[1]}^+~:}$<br>
$\\left. \\begin{array} \\phantom{}\\displaystyle{\\lim_{x\\to ${pg[1]}} \\left( ${a}x^2${sb}${b}x${sc}${c} \\right)}= ${numx2} \\\\
\\displaystyle{\\lim_{x\\to ${pg[1]}^+} \\left( ${d}x^2${se}${e}x${sf}${f} \\right)}= 0^{${signesx1x2[2]}}
\\end{array} \\right\\} \\stackrel{\\text{quotient}}{\\implies} \\displaystyle{\\lim_{x\\to ${pg[1]}^+} f(x)}=${slim4}  \\infty$<br>
Il y a donc une asymptote verticale d'équation $x=${pg[1]}$`,
`$\\underline{\\text{En} +\\infty :}~\\textbf{Méthode 1 :}$ avec les termes de plus haut degré :<br>
$\\displaystyle{\\lim_{x\\to +\\infty} f(x)}=\\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{${a}x^2}{${d}x^2}}=\\displaystyle{\\lim_{x\\to +\\infty} \\left( ${sasurd} \\dfrac{${simpasurd[0]}}{${simpasurd[1]}} \\right) }=${sasurd} \\dfrac{${simpasurd[0]}}{${simpasurd[1]}}$.<br><hr>
$\\textbf{Méthode 2 :}$ en factorisant le numérateur et le dénominateur :<br>
$\\displaystyle{\\lim_{x\\to +\\infty} f(x)}=\\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{x^2\\left( ${a}${signeb}\\frac{${absb}}{x}${signec}\\frac{${absc}}{x^2}\\right)}{x^2\\left( ${d} ${signee}\\frac{${abse}}{x}${signef}\\frac{${absf}}{x^2} \\right)}}=\\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{x^2}{x^2}\\times\\dfrac{${a}${signeb}\\frac{${absb}}{x}${signec}\\frac{${absc}}{x^2}}{${d}${signee}\\frac{${abse}}{x}${signef}\\frac{${absf}}{x^2}}} $<br><br>
$\\left.\\begin{array}\\phantom{}\\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{x^2}{x^2}}=\\displaystyle{\\lim_{x\\to -\\infty} 1}=1  \\\\ \\\\
\\left.\\begin{array} \\phantom{}
\\left.\\begin{array} \\phantom{}\\displaystyle{\\lim_{x\\to +\\infty} ${a}}=${a} \\\\ \\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{${b}}{x}}=0 \\\\ \\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{${c}}{x^2}}=0 \\end{array}\\right\\}\\stackrel{\\text{somme}}{\\implies} \\displaystyle{\\lim_{x\\to +\\infty} \\left( ${a}${signeb}\\dfrac{${absb}}{x}${signec}\\dfrac{${absc}}{x^2} \\right) }=${a}\\\\ \\\\
\\left.\\begin{array} \\phantom{}\\displaystyle{\\lim_{x\\to +\\infty} ${d}}=${d} \\\\ \\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{${e}}{x}}=0 \\\\ \\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{${f}}{x^2}}=0 \\end{array}\\right\\}\\stackrel{\\text{somme}}{\\implies} \\displaystyle{\\lim_{x\\to +\\infty} \\left( ${d} ${signee}\\dfrac{${abse}}{x}${signef}\\dfrac{${absf}}{x^2} \\right)}=${d}
\\end{array}\\right\\} \\stackrel{\\text{quotient}}{\\implies} \\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{${a}${signeb}\\frac{${absb}}{x}${signec}\\frac{${absc}}{x^2}}{${d}${signee}\\frac{${abse}}{x}${signef}\\frac{${absf}}{x^2}}}=${sasurd}\\dfrac{${simpasurd[0]}}{${simpasurd[1]}}
\\end{array} \\right\\} \\stackrel{\\text{produit}}{\\implies} \\displaystyle{\\lim_{x\\to +\\infty} f(x)}=${sasurd}\\dfrac{${simpasurd[0]}}{${simpasurd[1]}}$<br> Il y a donc une asymptote horizontale d'équation $y=${sasurd}\\dfrac{${simpasurd[0]}}{${simpasurd[1]}}$`]


enonce.innerHTML = listeenonces[k];
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
    location.href = "../../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../../Menus/MenuTaleSpe.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../Menus/MenuTaleLimites.html";
})