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

function parenthesesgd(a) {
    let rep;
    let pg;
    let pd;
    if (a<0) {pg='(';} else {pg='';}
    if (a<0) {pd=')';} else {pd='';}
    return rep=[pg,pd];
}

function signeplusrien(a) {
    let rep;
    if (a<0) {rep='';} else {rep='+';}
    return rep;
}

function signemoinsrien(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}

function signeproduit(a,b) {
    let rep;
    if (a<=0 && b<0) {rep='+';}
    if (a<0 && b>0) {rep='';}
    if (a>0 && b<0) {rep='';}
    if (a>=0 && b>0) {rep='+';}
    return rep;
}

function test_réponse(e,f,g,h,i,j,k,l,m,n) {
    let test;
    if (e==j && f==k && g==l && h==m && i==n) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;

}

let a = nbreouoppose(nbrealéa(1,9));
let b = nbreouoppose(nbrealéa(1,9));
let c = nbreouoppose(nbrealéa(1,9));
let d = nbreouoppose(nbrealéa(1,9));
let sb = signeplusrien(b);
let sc = signeplusrien(c);
let sd = signeplusrien(d);
let x0 = nbrealéa(-10,10);
let pgdx0 = parenthesesgd(x0);
let fx0 = a*x0**3+b*x0**2+c*x0+d;
let sfx0 = signeplusrien(fx0);
let pgdfx0 = parenthesesgd(fx0);
let f2x0 = b*x0**2+c*x0+d;
let sf2x0 = signeplusrien(f2x0);
let pgdf2x0 = parenthesesgd(f2x0);
let a3 = a*3;
let b2 = b*2;
let fprimex0 = a3*x0**2+b2*x0+c;
let oppfprimex0 = -fprimex0;
let soppfprimex0 = signeplusrien(oppfprimex0);
let f2primex0 = b2*x0+c;
let oppf2primex0 = -f2primex0;
let soppf2primex0 = signeplusrien(oppf2primex0);
let ordorig = fx0-fprimex0*x0;
let ordorig2 = f2x0-f2primex0*x0;
let sordorig = signeplusrien(ordorig);
let s2ordorig = signeplusrien(ordorig2);
let sproduit = signeproduit(fprimex0,-x0);
let produit = fprimex0*(-x0);
let sproduit2 = signeproduit(f2primex0,-x0);
let produit2 = f2primex0*(-x0);
let k = nbrealéa(0,1);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solution = document.getElementById('solution');
var solutions = document.getElementById('solutions');

let enonces = [`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=${a}x^3${sb}${b}x^2${sc}${c}x${sd}${d}$ dont la courbe représentative sera notée $\\mathscr{C}_f$.<br>
Déterminer une équation de la tangente $T$ à $\\mathscr{C}_f$ au point d'abscisse $x_0=${x0}$.`,
`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=${b}x^2${sc}${c}x${sd}${d}$ dont la courbe représentative sera notée $\\mathscr{C}_f$.<br>
Déterminer une équation de la tangente $T$ à $\\mathscr{C}_f$ au point d'abscisse $x_0=${x0}$.`];

let corrections = [`$\\underline{\\text{Méthode 1 :}}$ À l'aide du point de contact<br>
Le point de contact entre $T$ et $\\mathscr{C}_f$ est le point $A\\left(x_0~;~f(x_0)\\right)$<br>
$f(x_0)=f(${x0})=${a}\\times${pgdx0[0]}${x0}${pgdx0[1]}^3${sb}${b}\\times${pgdx0[0]}${x0}${pgdx0[1]}^2${sc}${c}\\times${pgdx0[0]}${x0}${pgdx0[1]}${sd}${d}=${fx0}$<br>
Donc le point de contact est le point $A\\left(${x0}~;~${fx0}\\right).$<br>
Le coefficient directeur de $T$ est égal à $f'(x_0)=f'(${x0})$<br>
$f'(x)=${a}\\times 3x^2${sb}${b}\\times 2x${sc}${c}\\times 1${sd}${d}\\times 0=${a3}x^2${sb}${b2}x${sc}${c}$ donc<br>
$f'(${x0})=${a3}\\times${pgdx0[0]}${x0}${pgdx0[1]}^2${sb}${b2}\\times${pgdx0[0]}${x0}${pgdx0[1]}${sc}${c}=${fprimex0}$<br>
La droite $T$ a donc une équation de la forme $y=ax+b=${fprimex0}x+b$<br>
Or $A\\in T$ donc $y_{A}=a\\times x_A+b$ et donc $y_{A}=${fprimex0}\\times${pgdx0[0]}${x0}${pgdx0[1]}+b=${fx0}$ et donc<br>
$b=${fx0}${soppfprimex0}${oppfprimex0}\\times${pgdx0[0]}${x0}${pgdx0[1]}=${ordorig}$<br>
En conclusion, une équation de $T$ est donc $\\boxed{y=${fprimex0}x${sordorig}${ordorig}}$<br>
$\\underline{\\text{Méthode 2 :}}~~$Avec la formule $y=f'\\left(x_0\\right)\\times\\left(x-x_0\\right)+f\\left(x_0\\right)$<br>
$f'(x)=${a}\\times 3x^2${sb}${b}\\times 2x${sc}${c}\\times 1${sd}${d}\\times 0=${a3}x^2${sb}${b2}x${sc}${c}$ donc<br>
$f'\\left(x_0\\right)=f'(${x0})=${a3}\\times${pgdx0[0]}${x0}${pgdx0[1]}^2${sb}${b2}\\times${pgdx0[0]}${x0}${pgdx0[1]}${sc}${c}=${fprimex0}$<br>
et $~f(x_0)=f(${x0})=${a}\\times${pgdx0[0]}${x0}${pgdx0[1]}^3${sb}${b}\\times${pgdx0[0]}${x0}${pgdx0[1]}^2${sc}${c}\\times${pgdx0[0]}${x0}${pgdx0[1]}${sd}${d}=${fx0}~$ donc on obtient :<br>
$y=\\underbrace{${fprimex0}}_{f'\\left(x_0\\right)}\\times \\underbrace{\\left( x-${pgdx0[0]} ${x0} ${pgdx0[1]}\\right)}_{\\left(x-x_0\\right)} + \\underbrace{${pgdfx0[0]} ${fx0} ${pgdfx0[1]}}_{f\\left(x_0\\right)}=${fprimex0}x ${sproduit}${produit} ${sfx0}  ${fx0}  =\\boxed{${fprimex0}x${sordorig}${ordorig}=y}$`,
`$\\underline{\\text{Méthode 1 :}}$ À l'aide du point de contact<br>
Le point de contact entre $T$ et $\\mathscr{C}_f$ est le point $A\\left(x_0~;~f(x_0)\\right)$<br>
$f(x_0)=f(${x0})=${b}\\times${pgdx0[0]}${x0}${pgdx0[1]}^2${sc}${c}\\times${pgdx0[0]}${x0}${pgdx0[1]}${sd}${d}=${f2x0}$<br>
Donc le point de contact est le point $A\\left(${x0}~;~${f2x0}\\right).$<br>
Le coefficient directeur de $T$ est égal à $f'(x_0)=f'(${x0})$<br>
$f'(x)=${b}\\times 2x${sc}${c}\\times 1${sd}${d}\\times 0=${b2}x${sc}${c}$ donc<br>
$f'(${x0})=${b2}\\times${pgdx0[0]}${x0}${pgdx0[1]}${sc}${c}=${f2primex0}$<br>
La droite $T$ a donc une équation de la forme $y=ax+b=${f2primex0}x+b$<br>
Or $A\\in T$ donc $y_{A}=a\\times x_A+b$ et donc $y_{A}=${f2primex0}\\times${pgdx0[0]}${x0}${pgdx0[1]}+b=${f2x0}$ et donc<br>
$b=${f2x0}${soppf2primex0}${oppf2primex0}\\times${pgdx0[0]}${x0}${pgdx0[1]}=${ordorig2}$<br>
En conclusion, une équation de $T$ est donc $\\boxed{y=${f2primex0}x${s2ordorig}${ordorig2}}$<br>
$\\underline{\\text{Méthode 2 :}}~~$Avec la formule $y=f'\\left(x_0\\right)\\times\\left(x-x_0\\right)+f\\left(x_0\\right)$<br>
$f'(x)=${b}\\times 2x${sc}${c}\\times 1${sd}${d}\\times 0=${b2}x${sc}${c}$ donc<br>
$f'\\left(x_0\\right)=f'(${x0})=${b2}\\times${pgdx0[0]}${x0}${pgdx0[1]}${sc}${c}=${f2primex0}$<br>
et $~f(x_0)=f(${x0})=${b}\\times${pgdx0[0]}${x0}${pgdx0[1]}^2${sc}${c}\\times${pgdx0[0]}${x0}${pgdx0[1]}${sd}${d}=${f2x0}~$ donc on obtient :<br>
$y=\\underbrace{${f2primex0}}_{f'\\left(x_0\\right)}\\times \\underbrace{\\left( x-${pgdx0[0]} ${x0} ${pgdx0[1]}\\right)}_{\\left(x-x_0\\right)} + \\underbrace{${pgdf2x0[0]} ${f2x0} ${pgdf2x0[1]}}_{f\\left(x_0\\right)}=${f2primex0}x ${sproduit2}${produit2} ${sf2x0}  ${f2x0}  =\\boxed{${f2primex0}x${s2ordorig}${ordorig2}=y}$`];

let soluce = [`Solution : $y=${fprimex0}x${sordorig}${ordorig}$`,`Solution : $y=${f2primex0}x${s2ordorig}${ordorig2}$`];

enonce.innerHTML = enonces[k];
solution.innerHTML = soluce[k];
correctiond.innerHTML = corrections[k];

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
    location.reload();
})

accueil.addEventListener('click', () => {
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/Menu1ST.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/Menu1STfonctionsderivees.html";
})

