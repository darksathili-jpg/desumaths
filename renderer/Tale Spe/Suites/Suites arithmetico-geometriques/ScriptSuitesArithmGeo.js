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
let k = sol2(entier);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');

let enonces = [`Soit $(u_n)$ la suite définie pour tout $n\\in\\mathbb{N}$ par $\\left\\{ \\begin{array} 1u_0&=&${u0} \\\\ u_{n+1}&=&${a}u_n${s}${b} \\end{array} \\right.$<br>
Soit $(v_n)$ la suite définie pour tout $n\\in\\mathbb{N}$ par $v_n=u_n ${s1}\\dfrac{${fracs[0]}}{${fracs[1]}}$.<br>
1) Démontrer que la suite $(v_n)$ est une suite géométrique dont on précisera le permier terme et la raison.<br>
2) Exprimer $v_n$ en fonction de $n$.<br>
3) Exprimer $u_n$ en fonction de $n$.`,
`Soit $(u_n)$ la suite définie pour tout $n\\in\\mathbb{N}$ par $\\left\\{ \\begin{array} 1u_0&=&${u0} \\\\ u_{n+1}&=&${a}u_n${s}${b} \\end{array} \\right.$<br>
Soit $(v_n)$ la suite définie pour tout $n\\in\\mathbb{N}$ par $v_n${entier} $.<br>
1) Démontrer que la suite $(v_n)$ est une suite géométrique dont on précisera le permier terme et la raison.<br>
2) Exprimer $v_n$ en fonction de $n$.<br>
3) Exprimer $u_n$ en fonction de $n$.`];

let soluce = [`1) $(v_n)$ est une suite géométrique de raison $q=${a}$ et de premier terme $v_0=${se} \\dfrac{${fraces[0]}}{${fraces[1]}}$<br>
2) $v_n=${se} \\dfrac{${fraces[0]}}{${fraces[1]}}\\times ${pgd[0]} ${a} ${pgd[1]}^n$<br><br>
3) $u_n=${se} \\dfrac{${fraces[0]}}{${fraces[1]}}\\times ${pgd[0]} ${a} ${pgd[1]}^n ${s_1}\\dfrac{${fracs[0]}}{${fracs[1]}}$`,
`1) $(v_n)$ est une suite géométrique de raison $q=${a}$ et de premier terme $v_0=${v0}$<br>
2) $v_n=${v0}\\times ${pgd[0]} ${a} ${pgd[1]}^n$<br>
3) $u_n=${v0}\\times ${pgd[0]} ${a} ${pgd[1]}^n ${s_1}${fs}$`];

let corrections= [`1) $v_{n+1}=u_{n+1}${s1}\\dfrac{${fracs[0]}}{${fracs[1]}}=${a}u_n${s}${b}${s1}\\dfrac{${fracs[0]}}{${fracs[1]}}=${a}u_n${sd}\\dfrac{${fracds[0]}}{${fracds[1]}}=${a}\\left( u_n${sd}\\dfrac{\\frac{${fracds[0]}}{${fracds[1]}}}{${a}} \\right)$<br>
$\\phantom{1) v_{n+1}}=${a}~\\underbrace{\\left(u_n${s1}\\dfrac{${fracs[0]}}{${fracs[1]}}\\right)}_{v_n} =${a}v_n$ donc $(v_n)$ est une suite géométrique de raison $\\boxed{q=${a}}$<br>
Le premier terme de la suite $(v_n)$ est $v_0=u_0 ${s1}\\dfrac{${fracs[0]}}{${fracs[1]}}=${u0}${s1}\\dfrac{${fracs[0]}}{${fracs[1]}}=\\boxed{${se} \\dfrac{${fraces[0]}}{${fraces[1]}}=v_0}$<br>
2) $(v_n)$ est une suite géométrique donc $v_n=v_0\\times q^n=${se} \\dfrac{${fraces[0]}}{${fraces[1]}}\\times ${pgd[0]} ${a} ${pgd[1]}^n$<br>
3) $v_n=u_n${s1}\\dfrac{${fracs[0]}}{${fracs[1]}}$ donc $u_n=v_n${s_1}\\dfrac{${fracs[0]}}{${fracs[1]}}$ et donc $u_n=\\underbrace{${se} \\dfrac{${fraces[0]}}{${fraces[1]}}\\times ${pgd[0]} ${a} ${pgd[1]}^n}_{v_n} ${s_1}\\dfrac{${fracs[0]}}{${fracs[1]}}$`,
`1) $v_{n+1}=u_{n+1}${s1}${fs}=${a}u_n${s}${b}${s1}${fs}=${a}u_n ${signebc} ${bc}=${a}\\left(u_n +\\dfrac{${bc}}{${a}}\\right)=${a}\\underbrace{(u_n${s1}${fs})}_{v_n}$<br>
donc $(v_n)$ est une suite géométrique de raison $\\boxed{q=${a}}$<br>
Le premier terme de la suite $(v_n)$ est $v_0=u_0${s1}${fs}=${u0}${s1}${fs}=\\boxed{${v0}=v_0}$<br> 
2) $(v_n)$ est une suite géométrique donc $v_n=v_0\\times q^n=${v0}\\times ${pgd[0]} ${a} ${pgd[1]}^n$<br>
3) $v_n=u_n${s1}${fs}$ donc $u_n=v_n${s_1}${fs}$ et donc $u_n=\\underbrace{${v0}\\times ${pgd[0]} ${a} ${pgd[1]}^n}_{v_n} ${s_1}${fs}$`];

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