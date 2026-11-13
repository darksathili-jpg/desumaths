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

function imagenum(a,b,c,oppd) {
    let rep;
    let num = a*oppd**2+b*oppd+c;
    if (num==0) {rep=c+1;} else {rep=c};
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
    let sd;
    if (a<0) {sg='+';sd='-';} else {sg='-';sd='+';}
    rep = [sg,sd];
    return rep;
}

function signelimquotient(a,b) {
    let rep;
    if (a<0 && b=='+') {rep='-';}
    if (a<0 && b=='-') {rep='+';}
    if (a>0 && b=='+') {rep='+';}
    if (a>0 && b=='-') {rep='-';}
    return rep;
}

function test_réponse(a,b,c) {
    let test;
    let div=a/b;
    if (div==c) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

let a = nbreouoppose(nbrealéa(2,10));
let b = nbreouoppose(nbrealéa(1,10));
let c1 = nbreouoppose(nbrealéa(1,10));
let d = nbreouoppose(nbrealéa(2,10));
let f = nbreouoppose(nbrealéa(2,10));
let d1 = f*d;
let oppa = -a;
let oppd = -d;
let c = imagenum(a,b,c1,oppd);
let soppa = plusmoins(oppa);
let sa = plusmoins(a);
let sb = rienplus(b);
let sc = rienplus(c);
let sd = rienplus(d);
let sd1 = rienplus(d1);
let pgda = parenthesesgd(a);
let absa = valabs(a);
let absb = valabs(b);
let signeb = plusmoins(b);
let absc = valabs(c);
let signec= plusmoins(c);
let absd = valabs(d);
let absd1 = valabs(d1);
let absf = valabs(f);
let signed = plusmoins(d);
let signed1 = plusmoins(d1);
let num = a*oppd**2+b*oppd+c;
let slimg = plusmoins(-num);
let slimd = plusmoins(num);
let asurf = simplifierfraction(a,f);
let numasurf = valabs(asurf[0]);
let denomasurf = valabs(asurf[1]);
let signeasurf = rienmoins(a/f);
let pmasurf = plusmoins(a/f);
let signerepmoinsinf = plusmoins(-a/f);
let signerepplusinf = plusmoins(a/f);
let zeropmg = signezero(f);
let limg = signelimquotient(num,zeropmg[0]);
let limd = signelimquotient(num,zeropmg[1]);
let k =nbrealéa(0,3);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');

let listeenonces = [`Soit $f$ la fonction définie sur $\\mathbb{R}~\\backslash\\left\\{${oppd}\\right\\}$ par $f(x)=\\dfrac{${a}x^2${sb}${b}x${sc}${c}}{${f}x${sd1}${d1}}$<br>
Déterminer la limite de $f$ en $-\\infty$ et en déduire l'existence d'une éventuelle asymptote à la courbe représentative de $f$.`,
`Soit $f$ la fonction définie sur $\\mathbb{R}~\\backslash\\left\\{${oppd}\\right\\}$ par $f(x)=\\dfrac{${a}x^2${sb}${b}x${sc}${c}}{${f}x${sd1}${d1}}$<br>
Déterminer la limite de $f$ en $${oppd}^-$ et en déduire l'existence d'une éventuelle asymptote à la courbe représentative de $f$.`,
`Soit $f$ la fonction définie sur $\\mathbb{R}~\\backslash\\left\\{${oppd}\\right\\}$ par $f(x)=\\dfrac{${a}x^2${sb}${b}x${sc}${c}}{${f}x${sd1}${d1}}$<br>
Déterminer la limite de $f$ en $${oppd}^+$ et en déduire l'existence d'une éventuelle asymptote à la courbe représentative de $f$.`,
`Soit $f$ la fonction définie sur $\\mathbb{R}~\\backslash\\left\\{${oppd}\\right\\}$ par $f(x)=\\dfrac{${a}x^2${sb}${b}x${sc}${c}}{${f}x${sd1}${d1}}$<br>
Déterminer la limite de $f$ en $+\\infty$ et en déduire l'existence d'une éventuelle asymptote à la courbe représentative de $f$.`];

let listesolutions = [`$\\displaystyle{\\lim_{x\\to -\\infty} f(x) }=${signerepmoinsinf}\\infty$`,
`$\\displaystyle{\\lim_{x\\to ${oppd}^-} f(x)}= ${limg} \\infty$ (asymptote verticale $x=${oppd}$)`,
`$\\displaystyle{\\lim_{x\\to ${oppd}^+} f(x)}= ${limd} \\infty$ (asymptote verticale $x=${oppd}$)`,
`$\\displaystyle{\\lim_{x\\to +\\infty} f(x)}=${signerepplusinf}\\infty$`];

let listecorrections = [`$\\underline{\\text{En} -\\infty :}~\\textbf{Méthode 1 :}$ avec les termes de plus haut degré :<br>
$\\displaystyle{\\lim_{x\\to -\\infty} f(x)}=\\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{${a}x^2}{${f}x}}=\\displaystyle{\\lim_{x\\to -\\infty} \\left( ${signeasurf} \\dfrac{${numasurf}}{${denomasurf}}x \\right) }=${signerepmoinsinf}\\infty$.<br><br>
$\\textbf{Méthode 2 :}$ en factorisant le numérateur et le dénominateur :<br>
$\\displaystyle{\\lim_{x\\to -\\infty} f(x)}=\\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{x^2\\left( ${a}${signeb}\\frac{${absb}}{x}${signec}\\frac{${absc}}{x^2}\\right)}{x\\left( ${f} ${signed1}\\frac{${absd1}}{x} \\right)}}=\\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{x^2}{x}\\times\\dfrac{${a}${signeb}\\frac{${absb}}{x}${signec}\\frac{${absc}}{x^2}}{${f}${signed1}\\frac{${absd1}}{x}}}$<br><br>
$\\left.\\begin{array}\\phantom{}\\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{x^2}{x}}=\\displaystyle{\\lim_{x\\to -\\infty} x}=\\boxed{-}\\infty  \\\\ \\\\
\\left.\\begin{array} \\phantom{}
\\left.\\begin{array} \\phantom{}\\displaystyle{\\lim_{x\\to -\\infty} ${a}}=${a} \\\\ \\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{${b}}{x}}=0 \\\\ \\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{${c}}{x^2}}=0 \\end{array}\\right\\}\\stackrel{\\text{somme}}{\\implies} \\displaystyle{\\lim_{x\\to -\\infty} \\left( ${a}${signeb}\\dfrac{${absb}}{x}${signec}\\dfrac{${absc}}{x^2} \\right) }=${a}\\\\ \\\\
\\left.\\begin{array} \\phantom{}\\displaystyle{\\lim_{x\\to -\\infty} ${f}}=${f} \\\\ \\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{${d}}{x}}=0 \\end{array}\\right\\}\\stackrel{\\text{somme}}{\\implies} \\displaystyle{\\lim_{x\\to -\\infty} \\left( ${f} ${signed1}\\dfrac{${absd1}}{x} \\right)}=${f}
\\end{array}\\right\\} \\stackrel{\\text{quotient}}{\\implies} \\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{${a}${signeb}\\frac{${absb}}{x}${signec}\\frac{${absc}}{x^2}}{${f}${signed1}\\frac{${absd1}}{x}}}=\\boxed{${pmasurf}}\\dfrac{${absa}}{${absf}}
\\end{array} \\right\\} \\stackrel{\\text{produit}}{\\implies} \\displaystyle{\\lim_{x\\to -\\infty} f(x)}=\\boxed{${signerepmoinsinf}}\\infty$`,
`$\\underline{\\text{En}~${oppd}^-~:}$<br>
$\\left. \\begin{array} \\phantom{}\\displaystyle{\\lim_{x\\to ${oppd}} \\left( ${a}x^2${sb}${b}x${sc}${c} \\right)}= ${num} \\\\
\\displaystyle{\\lim_{x\\to ${oppd}^-} \\left( ${f}x${sd1}${d1} \\right)}= 0^{${zeropmg[0]}}
\\end{array} \\right\\} \\stackrel{\\text{quotient}}{\\implies} \\displaystyle{\\lim_{x\\to ${oppd}^-} f(x)}= ${limg} \\infty$<br>
Il y a donc une asymptote verticale d'équation $x=${oppd}$`,
`$\\underline{\\text{En}~${oppd}^+~:}$<br>
$\\left. \\begin{array} \\phantom{}\\displaystyle{\\lim_{x\\to ${oppd}} \\left( ${a}x^2${sb}${b}x${sc}${c} \\right)}= ${num} \\\\
\\displaystyle{\\lim_{x\\to ${oppd}^+} \\left(${f}x${sd1}${d1} \\right)}= 0^{${zeropmg[1]}}
\\end{array} \\right\\} \\stackrel{\\text{quotient}}{\\implies} \\displaystyle{\\lim_{x\\to ${oppd}^+} f(x)}= ${limd} \\infty$<br>
Il y a donc une asymptote verticale d'équation $x=${oppd}$`,
`$\\underline{\\text{En} +\\infty :}~\\textbf{Méthode 1 :}$ avec les termes de plus haut degré :<br>
$\\displaystyle{\\lim_{x\\to +\\infty} f(x)}=\\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{${a}x^2}{${f}x}}=\\displaystyle{\\lim_{x\\to +\\infty} \\left( ${signeasurf} \\dfrac{${numasurf}}{${denomasurf}}x \\right) }=${signerepplusinf}\\infty$.<br><br>
$\\textbf{Méthode 2 :}$ en factorisant le numérateur et le dénominateur :<br>
$\\displaystyle{\\lim_{x\\to +\\infty} f(x)}=\\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{x^2\\left( ${a}${signeb}\\frac{${absb}}{x}${signec}\\frac{${absc}}{x^2}\\right)}{x\\left( ${f}${signed1}\\frac{${absd1}}{x} \\right)}}=\\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{x^2}{x}\\times\\dfrac{${a}${signeb}\\frac{${absb}}{x}${signec}\\frac{${absc}}{x^2}}{${f}${signed1}\\frac{${absd1}}{x}}}$<br><br>
$\\left.\\begin{array}\\phantom{}\\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{x^2}{x}}=\\displaystyle{\\lim_{x\\to +\\infty} x}=\\boxed{+}\\infty  \\\\ \\\\
\\left.\\begin{array} \\phantom{}
\\left.\\begin{array} \\phantom{}\\displaystyle{\\lim_{x\\to +\\infty} ${a}}=${a} \\\\ \\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{${b}}{x}}=0 \\\\ \\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{${c}}{x^2}}=0 \\end{array}\\right\\}\\stackrel{\\text{somme}}{\\implies} \\displaystyle{\\lim_{x\\to +\\infty} \\left( ${a}${signeb}\\dfrac{${absb}}{x}${signec}\\dfrac{${absc}}{x^2} \\right) }=${a}\\\\ \\\\
\\left.\\begin{array} \\phantom{}\\displaystyle{\\lim_{x\\to +\\infty} ${f}}=${f} \\\\ \\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{${d}}{x}}=0 \\end{array}\\right\\}\\stackrel{\\text{somme}}{\\implies} \\displaystyle{\\lim_{x\\to +\\infty} \\left( ${f} ${signed1}\\dfrac{${absd1}}{x} \\right)}=${f}
\\end{array}\\right\\} \\stackrel{\\text{quotient}}{\\implies} \\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{${a}${signeb}\\frac{${absb}}{x}${signec}\\frac{${absc}}{x^2}}{${f}${signed1}\\frac{${absd1}}{x}}}=\\boxed{${pmasurf}}\\dfrac{${absa}}{${absf}}
\\end{array} \\right\\} \\stackrel{\\text{produit}}{\\implies} \\displaystyle{\\lim_{x\\to +\\infty} f(x)}=\\boxed{${signerepplusinf}}\\infty$
`];


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