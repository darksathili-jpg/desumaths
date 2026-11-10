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

function valabs(a) {
    let rep;
    if (a<0) {rep=-a;} else {rep=a;}
    return rep;
}

function appnapp(a,b) {
    let rep;
    if (a>b) {rep=`$\\in$`;} else {rep=`$\\notin$`;}
    return rep;
}

function soluce(a,oppb,soppb,c,app) {
    let rep;
    if (app==`$\\in$`) {rep=`$\\left\\{\\dfrac{\\text{e}^{${c}}${soppb}${oppb}}{${a}}\\right\\}$`;} else {rep=`$\\varnothing$`;}
    return rep;
}

function soluce2(a,b,c,app) {
    let rep;
    if (app==`$\\in$`) {rep=`$\\left\\{\\dfrac{${b}-\\text{e}^{${c}}}{${a}}\\right\\}$`;} else {rep=`$\\varnothing$`;}
    return rep;
}

function soluce3(s,num,denom,app) {
    let rep;
    if (app==`$\\in$` && denom!=1) {rep=`$\\left\\{${s}\\dfrac{${num}}{${denom}}\\right\\}$`;}
    if (app==`$\\in$` && denom==1) {rep=`$\\left\\{${s}${num}\\right\\}$`;}
    if (app!=`$\\in$`) {rep=`$\\varnothing$`;}
    return rep;
}

function cas(denom1,denom2,denom3,denom4,k) {
    let rep;
    if (denom1==1 & k==0) {rep=2;}
    if (denom2==1 & k==1) {rep=3;}
    if (denom1!=1 & k==0) {rep=0;}
    if (denom2!=1 & k==1) {rep=1;}
    if (denom3==1 & k==2) {rep=6;}
    if (denom4==1 & k==3) {rep=7;}
    if (denom3!=1 & k==2) {rep=4;}
    if (denom4!=1 & k==3) {rep=5;}
    if (denom3==1 & k==2 & denom1==1) {rep=8;}
    if (denom4==1 & k==3 & denom2==1) {rep=9;}
    if (denom3!=1 & k==2 & denom1==1) {rep=10;}
    if (denom4!=1 & k==3 & denom2==1) {rep=11;}
    return rep;
}
let a = nbrealéa(2,10);
let oppa = -a;
let b = nbreouoppose(nbrealéa(1,10));
let sb = rienplus(b);
let oppb = -b;
let soppb = rienplus(oppb);
let c = nbreouoppose(nbrealéa(1,10));
let oppba = simplifierfraction(oppb,a);
let fsimpoppba = fracsimp(oppba[0],oppba[1]);
let sfsimpoppba = rienmoins(oppb/a);
let app = appnapp((Math.exp(c)-b)/a,-b/a);
let sol = soluce(a,oppb,soppb,c,app);
let oppboppa = simplifierfraction(oppb,oppa);
let fsimpoppboppa = fracsimp(oppboppa[0],oppboppa[1]);
let sfsimpoppboppa = rienmoins(oppb/oppa);
let app2 = appnapp(oppb/oppa,(Math.exp(c)-b)/oppa);
let sol2 = soluce2(a,b,c,app2);
let k = nbrealéa(0,3);
let f0 = simplifierfraction(1-b,a);
let f0simp = fracsimp(f0[0],f0[1]);
let sf0simp = rienmoins((1-b)/a);
let app3 = appnapp((1-b)/a,-b/a);
let sol3 = soluce3(sf0simp,f0simp[0],f0simp[1],app3);
let f0oppa = simplifierfraction(1-b,oppa);
let f0simpoppa = fracsimp(f0oppa[0],f0oppa[1]);
let sf0simpoppa = rienmoins((1-b)/oppa);
let app4 = appnapp(-b/oppa,(1-b)/oppa,);
let sol4 = soluce3(sf0simpoppa,f0simpoppa[0],f0simpoppa[1],app4);
let k2 = cas(fsimpoppba[1],fsimpoppboppa[1],f0simp[1],f0simpoppa[1],k);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');



let listeenonces = [`Résoudre dans $\\mathbb{R}$ l'équation : $\\ln\\left(${a}x${sb}${b}\\right)=${c}$.`,
`Résoudre dans $\\mathbb{R}$ l'équation : $\\ln\\left(${oppa}x${sb}${b}\\right)=${c}$.`,
`Résoudre dans $\\mathbb{R}$ l'équation : $\\ln\\left(${a}x${sb}${b}\\right)=0$.`,
`Résoudre dans $\\mathbb{R}$ l'équation : $\\ln\\left(${oppa}x${sb}${b}\\right)=0$.`];

let listesolutions = [`$S=$ ${sol}`,
`$S=$ ${sol2}`];

let listecorrections = [`$\\underline{\\text{Condition d'existence :}}$ il faut que $${a}x${sb}${b}>0$<br><br>
$\\begin{array}{lrcl} & ${a}x${sb}${b} & > & 0 \\\\
\\iff & ${a}x & > & ${oppb}\\\\
\\iff & x & > & \\dfrac{${oppb}}{${a}}
\\end{array}$<br>
Donc $x$ doit appartenir à $I=\\left]${sfsimpoppba}\\dfrac{${fsimpoppba[0]}}{${fsimpoppba[1]}} ~;+\\infty\\right[ $<br>
$\\underline{\\text{On résout :}}$<br><br>
$\\begin{array}{lrcl} & \\ln\\left(${a}x${sb}${b}\\right) & = & ${c}\\\\
\\iff & \\text{e}^{\\ln\\left(${a}x${sb}${b}\\right)} & = & \\text{e}^{${c}}\\\\
\\iff & ${a}x${sb}${b} & = & \\text{e}^{${c}}\\\\
\\iff & ${a}x & = & \\text{e}^{${c}}${soppb}${oppb}\\\\
\\iff & x & = & \\dfrac{\\text{e}^{${c}}${soppb}${oppb}}{${a}}
\\end{array}$<br>
$\\underline{\\text{Conclusion :}}$<br><br>
$\\dfrac{\\text{e}^{${c}}${soppb}${oppb}}{${a}}$ ${app} $I$ donc $S=$ ${sol}`,
`$\\underline{\\text{Condition d'existence :}}$ il faut que $${oppa}x${sb}${b}>0$<br><br>
$\\begin{array}{lrcl} & ${oppa}x${sb}${b} & > & 0 \\\\
\\iff & ${oppa}x & > & ${oppb}\\\\
\\iff & x & < & \\dfrac{${oppb}}{${oppa}}
\\end{array}$<br>
Donc $x$ doit appartenir à $I=\\left]-\\infty~;${sfsimpoppboppa}\\dfrac{${fsimpoppboppa[0]}}{${fsimpoppboppa[1]}}\\right[ $<br>
$\\underline{\\text{On résout :}}$<br><br>
$\\begin{array}{lrcl} & \\ln\\left(${oppa}x${sb}${b}\\right) & = & ${c}\\\\
\\iff & \\text{e}^{\\ln\\left(${oppa}x${sb}${b}\\right)} & = & \\text{e}^{${c}}\\\\
\\iff & ${oppa}x${sb}${b} & = & \\text{e}^{${c}}\\\\
\\iff & ${oppa}x & = & \\text{e}^{${c}}${soppb}${oppb}\\\\
\\iff & x & = & \\dfrac{\\text{e}^{${c}}${soppb}${oppb}}{${oppa}}=\\dfrac{${b}-\\text{e}^{${c}}}{${a}}
\\end{array}$<br>
$\\underline{\\text{Conclusion :}}$<br><br>
$\\dfrac{${b}-\\text{e}^{${c}}}{${a}}$ ${app2} $I$ donc $S=$ ${sol2}`,
`$\\underline{\\text{Condition d'existence :}}$ il faut que $${a}x${sb}${b}>0$<br><br>
$\\begin{array}{lrcl} & ${a}x${sb}${b} & > & 0 \\\\
\\iff & ${a}x & > & ${oppb}\\\\
\\iff & x & > & \\dfrac{${oppb}}{${a}}
\\end{array}$<br>
Donc $x$ doit appartenir à $I=\\left]${sfsimpoppba}${fsimpoppba[0]} ~;+\\infty\\right[ $<br>
$\\underline{\\text{On résout :}}$<br><br>
$\\begin{array}{lrcl} & \\ln\\left(${a}x${sb}${b}\\right) & = & ${c}\\\\
\\iff & \\text{e}^{\\ln\\left(${a}x${sb}${b}\\right)} & = & \\text{e}^{${c}}\\\\
\\iff & ${a}x${sb}${b} & = & \\text{e}^{${c}}\\\\
\\iff & ${a}x & = & \\text{e}^{${c}}${soppb}${oppb}\\\\
\\iff & x & = & \\dfrac{\\text{e}^{${c}}${soppb}${oppb}}{${a}}
\\end{array}$<br>
$\\underline{\\text{Conclusion :}}$<br><br>
$\\dfrac{\\text{e}^{${c}}${soppb}${oppb}}{${a}}$ ${app} $I$ donc $S=$ ${sol}`,
`$\\underline{\\text{Condition d'existence :}}$ il faut que $${oppa}x${sb}${b}>0$<br><br>
$\\begin{array}{lrcl} & ${oppa}x${sb}${b} & > & 0 \\\\
\\iff & ${oppa}x & > & ${oppb}\\\\
\\iff & x & < & \\dfrac{${oppb}}{${oppa}}
\\end{array}$<br>
Donc $x$ doit appartenir à $I=\\left]-\\infty~;${sfsimpoppboppa}${fsimpoppboppa[0]}\\right[ $<br>
$\\underline{\\text{On résout :}}$<br><br>
$\\begin{array}{lrcl} & \\ln\\left(${oppa}x${sb}${b}\\right) & = & ${c}\\\\
\\iff & \\text{e}^{\\ln\\left(${oppa}x${sb}${b}\\right)} & = & \\text{e}^{${c}}\\\\
\\iff & ${oppa}x${sb}${b} & = & \\text{e}^{${c}}\\\\
\\iff & ${oppa}x & = & \\text{e}^{${c}}${soppb}${oppb}\\\\
\\iff & x & = & \\dfrac{\\text{e}^{${c}}${soppb}${oppb}}{${oppa}}=\\dfrac{${b}-\\text{e}^{${c}}}{${a}}
\\end{array}$<br>
$\\underline{\\text{Conclusion :}}$<br><br>
$\\dfrac{${b}-\\text{e}^{${c}}}{${a}}$ ${app2} $I$ donc $S=$ ${sol2}`,
`$\\underline{\\text{Condition d'existence :}}$ il faut que $${a}x${sb}${b}>0$<br><br>
$\\begin{array}{lrcl} & ${a}x${sb}${b} & > & 0 \\\\
\\iff & ${a}x & > & ${oppb}\\\\
\\iff & x & > & \\dfrac{${oppb}}{${a}}
\\end{array}$<br>
Donc $x$ doit appartenir à $I=\\left]${sfsimpoppba}\\dfrac{${fsimpoppba[0]}}{${fsimpoppba[1]}} ~;+\\infty\\right[ $<br>
$\\underline{\\text{On résout :}}$<br><br>
$\\begin{array}{lrcl} & \\ln\\left(${a}x${sb}${b}\\right) & = & 0\\\\
\\iff & \\text{e}^{\\ln\\left(${a}x${sb}${b}\\right)} & = & \\text{e}^{0}\\\\
\\iff & ${a}x${sb}${b} & = & 1\\\\
\\iff & ${a}x & = & 1${soppb}${oppb}\\\\
\\iff & x & = & \\dfrac{1${soppb}${oppb}}{${a}}=${sf0simp}\\dfrac{${f0simp[0]}}{${f0simp[1]}}
\\end{array}$<br>
$\\underline{\\text{Conclusion :}}$<br><br>
$${sf0simp}\\dfrac{${f0simp[0]}}{${f0simp[1]}}$ ${app3} $I$ donc $S=$ ${sol3}`,
`$\\underline{\\text{Condition d'existence :}}$ il faut que $${oppa}x${sb}${b}>0$<br><br>
$\\begin{array}{lrcl} & ${oppa}x${sb}${b} & > & 0 \\\\
\\iff & ${oppa}x & > & ${oppb}\\\\
\\iff & x & < & \\dfrac{${oppb}}{${oppa}}
\\end{array}$<br>
Donc $x$ doit appartenir à $I=\\left]-\\infty~;${sfsimpoppboppa}\\dfrac{${fsimpoppboppa[0]}}{${fsimpoppboppa[1]}}\\right[ $<br>
$\\underline{\\text{On résout :}}$<br><br>
$\\begin{array}{lrcl} & \\ln\\left(${oppa}x${sb}${b}\\right) & = & 0\\\\
\\iff & \\text{e}^{\\ln\\left(${oppa}x${sb}${b}\\right)} & = & \\text{e}^{0}\\\\
\\iff & ${oppa}x${sb}${b} & = & 1\\\\
\\iff & ${oppa}x & = & 1${soppb}${oppb}\\\\
\\iff & x & = & \\dfrac{1${soppb}${oppb}}{${oppa}}=${sf0simpoppa}\\dfrac{${f0simpoppa[0]}}{${f0simpoppa[1]}}
\\end{array}$<br>
$\\underline{\\text{Conclusion :}}$<br><br>
$${sf0simpoppa}\\dfrac{${f0simpoppa[0]}}{${f0simpoppa[1]}}$ ${app4} $I$ donc $S=$ ${sol4}`,
`$\\underline{\\text{Condition d'existence :}}$ il faut que $${a}x${sb}${b}>0$<br><br>
$\\begin{array}{lrcl} & ${a}x${sb}${b} & > & 0 \\\\
\\iff & ${a}x & > & ${oppb}\\\\
\\iff & x & > & \\dfrac{${oppb}}{${a}}
\\end{array}$<br>
Donc $x$ doit appartenir à $I=\\left]${sfsimpoppba}\\dfrac{${fsimpoppba[0]}}{${fsimpoppba[1]}} ~;+\\infty\\right[ $<br>
$\\underline{\\text{On résout :}}$<br><br>
$\\begin{array}{lrcl} & \\ln\\left(${a}x${sb}${b}\\right) & = & 0\\\\
\\iff & \\text{e}^{\\ln\\left(${a}x${sb}${b}\\right)} & = & \\text{e}^{0}\\\\
\\iff & ${a}x${sb}${b} & = & 1\\\\
\\iff & ${a}x & = & 1${soppb}${oppb}\\\\
\\iff & x & = & \\dfrac{1${soppb}${oppb}}{${a}}=${sf0simp}${f0simp[0]}
\\end{array}$<br>
$\\underline{\\text{Conclusion :}}$<br><br>
$${sf0simp}${f0simp[0]}$ ${app3} $I$ donc $S=$ ${sol3}`,
`$\\underline{\\text{Condition d'existence :}}$ il faut que $${oppa}x${sb}${b}>0$<br><br>
$\\begin{array}{lrcl} & ${oppa}x${sb}${b} & > & 0 \\\\
\\iff & ${oppa}x & > & ${oppb}\\\\
\\iff & x & < & \\dfrac{${oppb}}{${oppa}}
\\end{array}$<br>
Donc $x$ doit appartenir à $I=\\left]-\\infty~;${sfsimpoppboppa}\\dfrac{${fsimpoppboppa[0]}}{${fsimpoppboppa[1]}}\\right[ $<br>
$\\underline{\\text{On résout :}}$<br><br>
$\\begin{array}{lrcl} & \\ln\\left(${oppa}x${sb}${b}\\right) & = & 0\\\\
\\iff & \\text{e}^{\\ln\\left(${oppa}x${sb}${b}\\right)} & = & \\text{e}^{0}\\\\
\\iff & ${oppa}x${sb}${b} & = & 1\\\\
\\iff & ${oppa}x & = & 1${soppb}${oppb}\\\\
\\iff & x & = & \\dfrac{1${soppb}${oppb}}{${oppa}}=${sf0simpoppa}${f0simpoppa[0]}
\\end{array}$<br>
$\\underline{\\text{Conclusion :}}$<br><br>
$${sf0simpoppa}${f0simpoppa[0]}$ ${app4} $I$ donc $S=$ ${sol4}`,
`$\\underline{\\text{Condition d'existence :}}$ il faut que $${a}x${sb}${b}>0$<br><br>
$\\begin{array}{lrcl} & ${a}x${sb}${b} & > & 0 \\\\
\\iff & ${a}x & > & ${oppb}\\\\
\\iff & x & > & \\dfrac{${oppb}}{${a}}
\\end{array}$<br>
Donc $x$ doit appartenir à $I=\\left]${sfsimpoppba}${fsimpoppba[0]} ~;+\\infty\\right[ $<br>
$\\underline{\\text{On résout :}}$<br><br>
$\\begin{array}{lrcl} & \\ln\\left(${a}x${sb}${b}\\right) & = & 0\\\\
\\iff & \\text{e}^{\\ln\\left(${a}x${sb}${b}\\right)} & = & \\text{e}^{0}\\\\
\\iff & ${a}x${sb}${b} & = & 1\\\\
\\iff & ${a}x & = & 1${soppb}${oppb}\\\\
\\iff & x & = & \\dfrac{1${soppb}${oppb}}{${a}}=${sf0simp}${f0simp[0]}
\\end{array}$<br>
$\\underline{\\text{Conclusion :}}$<br><br>
$${sf0simp}${f0simp[0]}$ ${app3} $I$ donc $S=$ ${sol3}`,
`$\\underline{\\text{Condition d'existence :}}$ il faut que $${oppa}x${sb}${b}>0$<br><br>
$\\begin{array}{lrcl} & ${oppa}x${sb}${b} & > & 0 \\\\
\\iff & ${oppa}x & > & ${oppb}\\\\
\\iff & x & < & \\dfrac{${oppb}}{${oppa}}
\\end{array}$<br>
Donc $x$ doit appartenir à $I=\\left]-\\infty~;${sfsimpoppboppa}${fsimpoppboppa[0]}\\right[ $<br>
$\\underline{\\text{On résout :}}$<br><br>
$\\begin{array}{lrcl} & \\ln\\left(${oppa}x${sb}${b}\\right) & = & 0\\\\
\\iff & \\text{e}^{\\ln\\left(${oppa}x${sb}${b}\\right)} & = & \\text{e}^{0}\\\\
\\iff & ${oppa}x${sb}${b} & = & 1\\\\
\\iff & ${oppa}x & = & 1${soppb}${oppb}\\\\
\\iff & x & = & \\dfrac{1${soppb}${oppb}}{${oppa}}=${sf0simpoppa}${f0simpoppa[0]}
\\end{array}$<br>
$\\underline{\\text{Conclusion :}}$<br><br>
$${sf0simpoppa}${f0simpoppa[0]}$ ${app4} $I$ donc $S=$ ${sol4}`,
`$\\underline{\\text{Condition d'existence :}}$ il faut que $${a}x${sb}${b}>0$<br><br>
$\\begin{array}{lrcl} & ${a}x${sb}${b} & > & 0 \\\\
\\iff & ${a}x & > & ${oppb}\\\\
\\iff & x & > & \\dfrac{${oppb}}{${a}}
\\end{array}$<br>
Donc $x$ doit appartenir à $I=\\left]${sfsimpoppba}${fsimpoppba[0]} ~;+\\infty\\right[ $<br>
$\\underline{\\text{On résout :}}$<br><br>
$\\begin{array}{lrcl} & \\ln\\left(${a}x${sb}${b}\\right) & = & 0\\\\
\\iff & \\text{e}^{\\ln\\left(${a}x${sb}${b}\\right)} & = & \\text{e}^{0}\\\\
\\iff & ${a}x${sb}${b} & = & 1\\\\
\\iff & ${a}x & = & 1${soppb}${oppb}\\\\
\\iff & x & = & \\dfrac{1${soppb}${oppb}}{${a}}=${sf0simp}\\dfrac{${f0simp[0]}}{${f0simp[1]}}
\\end{array}$<br>
$\\underline{\\text{Conclusion :}}$<br><br>
$${sf0simp}\\dfrac{${f0simp[0]}}{${f0simp[1]}}$ ${app3} $I$ donc $S=$ ${sol3}`,
`$\\underline{\\text{Condition d'existence :}}$ il faut que $${oppa}x${sb}${b}>0$<br><br>
$\\begin{array}{lrcl} & ${oppa}x${sb}${b} & > & 0 \\\\
\\iff & ${oppa}x & > & ${oppb}\\\\
\\iff & x & < & \\dfrac{${oppb}}{${oppa}}
\\end{array}$<br>
Donc $x$ doit appartenir à $I=\\left]-\\infty~;${sfsimpoppboppa}${fsimpoppboppa[0]}\\right[ $<br>
$\\underline{\\text{On résout :}}$<br><br>
$\\begin{array}{lrcl} & \\ln\\left(${oppa}x${sb}${b}\\right) & = & 0\\\\
\\iff & \\text{e}^{\\ln\\left(${oppa}x${sb}${b}\\right)} & = & \\text{e}^{0}\\\\
\\iff & ${oppa}x${sb}${b} & = & 1\\\\
\\iff & ${oppa}x & = & 1${soppb}${oppb}\\\\
\\iff & x & = & \\dfrac{1${soppb}${oppb}}{${oppa}}=${sf0simpoppa}\\dfrac{${f0simpoppa[0]}}{${f0simpoppa[1]}}
\\end{array}$<br>
$\\underline{\\text{Conclusion :}}$<br><br>
$${sf0simpoppa}\\dfrac{${f0simpoppa[0]}}{${f0simpoppa[1]}}$ ${app4} $I$ donc $S=$ ${sol4}`];

enonce.innerHTML = listeenonces[k];

solution.innerHTML = listesolutions[1];

correctiond.innerHTML = listecorrections[k2];

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
    location.href = "../../../Menus/MenuTaleLN.html";
})