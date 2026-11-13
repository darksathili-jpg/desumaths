function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }

function nbreouoppose(a) {
    let rep;
    let choix = nbrealéa(1,2);
    if (choix==1) {rep=a;} else {rep=-a;}
    return rep;
}

function signe(a) {
    let rep;
    if (a<0) {rep='';} else {rep='+';}
    return rep;
}

function signefrac(c) {
    let rep;
    if (c<0) {rep='-';} else {rep='+';}
    return rep;
}

function fracsimp(num,denom) {
    let rep=[num,denom];
    if (num<0 && denom<0) {rep=[-num,-denom];}
    if (num>0 && denom<0) {rep=[num,-denom];}
    if (num<0 && denom>0) {rep=[-num,denom];}
    return rep; 
}

function signepm(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}

function signemoins(a) {
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

function simply(num,denom) {
    let rep='';
    let oppnum=-num;
    if (denom==1 && num<0) {rep='=u_n+'+oppnum;}
    if (denom==1 && num>0) {rep='=u_n-'+num;}
    return rep;
}

function sol2(a) {
    let rep;
    if (a=='') {rep=0;} else {rep=1;}
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
let s = signe(b);
let oppb = -b;
let a_1 = a-1;
let c = -b/(a-1);
let u0 = nbrealéa(-10,10);
let s1 = signefrac(-c);
let s_1 = signefrac(c);
let s_11 = signe(c);
let frac = simplifierfraction(oppb,a_1);
let fracs = fracsimp(frac[0],frac[1]);
let fs = fracs[0]/fracs[1];
let bc = b-c;
let v0=u0-c;
let signebc = signe(bc);
let d = b-c;
let sd = signepm(d);
let fracd = simplifierfraction(b*a_1+b,a_1);
let fracds = fracsimp(fracd[0],fracd[1]);
let e = u0-c;
let se = signemoins(e);
let frace = simplifierfraction(u0*a_1+b,a_1);
let fraces = fracsimp(frace[0],frace[1]);
let pgd = parenthesegd(a);
let entier = simply(frac[0],frac[1]);
let f = a*oppb/a_1;
let ffrac = simplifierfraction(a*oppb,a_1);
let ffracs = fracsimp(ffrac[0],ffrac[1]);
let sf = signepm(f);
let ssf = signe(f);
let k = sol2(entier);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');

let enonces = [`Soit $(u_n)$ la suite définie pour tout $n\\in\\mathbb{N}$ par $\\left\\{ \\begin{array} 1u_0&=&${u0} \\\\ u_{n+1}&=&${a}u_n${s}${b} \\end{array} \\right.$<br>
Démontrer par récurrence la propriété suivante :
$ \\forall n \\in \\mathbb{N}, u_n=${se} \\dfrac{${fraces[0]}}{${fraces[1]}}\\times ${pgd[0]} ${a} ${pgd[1]}^n ${s_1}\\dfrac{${fracs[0]}}{${fracs[1]}} $`,
`Soit $(u_n)$ la suite définie pour tout $n\\in\\mathbb{N}$ par $\\left\\{ \\begin{array} 1u_0&=&${u0} \\\\ u_{n+1}&=&${a}u_n${s}${b} \\end{array} \\right.$<br>
Démontrer par récurrence la propriété suivante :
$ \\forall n \\in \\mathbb{N}, u_n=${v0}\\times ${pgd[0]} ${a} ${pgd[1]}^n ${s_1}${fs}$`];

let soluce = [``,
``];

let corrections= [`$\\underline{\\text{Initialisation} :} n=0$<br>
$${se} \\dfrac{${fraces[0]}}{${fraces[1]}}\\times ${pgd[0]} ${a} ${pgd[1]}^0 ${s_1}\\dfrac{${fracs[0]}}{${fracs[1]}}=${se} \\dfrac{${fraces[0]}}{${fraces[1]}}\\times 1 ${s_1}\\dfrac{${fracs[0]}}{${fracs[1]}}=${u0}=u_0$<br>
L'initialisation est donc vérifée.<br><br>
$\\underline{\\text{Hérédité :}} \\text{But :} \\left\\{ \\begin{array}{lrcl} \\text{Si} & u_n & = &${se} \\dfrac{${fraces[0]}}{${fraces[1]}}\\times ${pgd[0]} ${a} ${pgd[1]}^n ${s_1}\\dfrac{${fracs[0]}}{${fracs[1]}} \\text{(HR)} \\\\
 \\text{Alors} & u_{n+1} & = & ${se} \\dfrac{${fraces[0]}}{${fraces[1]}}\\times ${pgd[0]} ${a} ${pgd[1]}^{n+1} ${s_1}\\dfrac{${fracs[0]}}{${fracs[1]}} \\end{array} \\right.$<br>
 $\\begin{array}{rcl} u_n & = & ${se} \\dfrac{${fraces[0]}}{${fraces[1]}}\\times ${pgd[0]} ${a} ${pgd[1]}^n ${s_1}\\dfrac{${fracs[0]}}{${fracs[1]}}~\\text{(HR) donc} \\\\
 ${a}u_n & = & ${a}\\times \\left( ${se} \\dfrac{${fraces[0]}}{${fraces[1]}}\\times ${pgd[0]} ${a} ${pgd[1]}^n ${s_1}\\dfrac{${fracs[0]}}{${fracs[1]}} \\right)=${se} \\dfrac{${fraces[0]}}{${fraces[1]}}\\times ${pgd[0]} ${a} ${pgd[1]}^{n+1} ${sf}\\dfrac{${ffracs[0]}}{${ffracs[1]}}~\\text{donc} \\\\
 \\underbrace{${a}u_n${s}${b}}_{u_{n+1}} & = & ${se} \\dfrac{${fraces[0]}}{${fraces[1]}}\\times ${pgd[0]} ${a} ${pgd[1]}^{n+1} ${sf}\\dfrac{${ffracs[0]}}{${ffracs[1]}} ${s}${b}= ${se} \\dfrac{${fraces[0]}}{${fraces[1]}}\\times ${pgd[0]} ${a} ${pgd[1]}^{n+1} ${s_1}\\dfrac{${fracs[0]}}{${fracs[1]}} \\end{array}$<br>
 L'hérédité est donc vérifée.<br><br>
 L'initialisation et l'hérédité sont vérifiées donc la propriété est toujours vraie : $\\forall n \\in \\mathbb{N}, u_n=${se} \\dfrac{${fraces[0]}}{${fraces[1]}}\\times ${pgd[0]} ${a} ${pgd[1]}^n ${s_1}\\dfrac{${fracs[0]}}{${fracs[1]}}$`,
`$\\underline{\\text{Initialisation} :} n=0$<br>
$${v0}\\times ${pgd[0]} ${a} ${pgd[1]}^0 ${s_1}${fs}=${v0}\\times 1 ${s_1}${fs}=${u0}=u_0$<br>
L'initialisation est donc vérifée.<br><br>
$\\underline{\\text{Hérédité :}} \\text{But :} \\left\\{ \\begin{array}{lrcl} \\text{Si} & u_n & = & ${v0}\\times ${pgd[0]} ${a} ${pgd[1]}^n ${s_1}${fs} \\text{(HR)} \\\\
 \\text{Alors} & u_{n+1} & = & ${v0}\\times ${pgd[0]} ${a} ${pgd[1]}^{n+1} ${s_1}${fs} \\end{array} \\right.$<br><br>
 $\\begin{array}{rcl} u_n & = & ${v0}\\times ${pgd[0]} ${a} ${pgd[1]}^n ${s_1}${fs}~\\text{(HR) donc} \\\\
 ${a}u_n & = & ${a}\\times \\left( ${v0}\\times ${pgd[0]} ${a} ${pgd[1]}^n ${s_1}${fs} \\right)= ${v0}\\times ${pgd[0]} ${a} ${pgd[1]} ^{n+1} ${ssf}${f} \\\\
 \\underbrace{${a}u_n${s}${b}}_{u_{n+1}} & = & ${v0}\\times ${pgd[0]} ${a} ${pgd[1]} ^{n+1} ${ssf}${f} ${s}${b}= ${v0}\\times ${pgd[0]} ${a} ${pgd[1]} ^{n+1} ${s_11}${c} \\end{array}$<br>
 L'hérédité est donc vérifée.<br><br>
 L'initialisation et l'hérédité sont vérifiées donc la propriété est toujours vraie : $\\forall n \\in \\mathbb{N}, u_n=${v0}\\times ${pgd[0]} ${a} ${pgd[1]}^n ${s_1}${fs}$`];

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
    location.reload(true);
})


accueil.addEventListener('click', () => {
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTaleSpe.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTaleSuites.html";
})