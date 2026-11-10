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

function puissdiff(a,p) {
    let rep = p[nbrealéa(0,3)];
    while (rep==a) {rep=p[nbrealéa(0,3)];}
    return rep;    
}

function puissdiffs(a,b,p) {
    let rep = p[nbrealéa(0,3)];
    while (rep==a || rep==b) {rep=p[nbrealéa(0,3)];}
    return rep;    
}

function contrex(a,b,c,pi1,pp1,pi2) {
    let rep;
    let x = 1;
    let fx = a+b+c;
    let fmx = -a+b-c;
    while (fx==fmx) {x=x+1;fx=a*x**pi1+b*x**pp1+c*x**pi2;fmx=a*(-x)**pi1+b*(-x)**pp1+c*(-x)**pi2;}
    return rep = [x,fx,fmx];
}

function puis1(pi) {
    let rep;
    if (pi==1) {rep='';} else {rep=pi;}
    return rep;
}

function diff(a) {
    let rep;
    let b = nbrealéa(1,8);
    while (a==b) {b=nbrealéa(1,8);}
    return rep = -b;
}

let puisspaires = [2,4,6,8];
let puissimpaires = [1,3,5,7];
let a = nbreouoppose(nbrealéa(2,10));
let oppa = -a;
let b = nbreouoppose(nbrealéa(2,10));
let sb = rienplus(b);
let oppb = -b;
let soppb = rienplus(oppb);
let c = nbreouoppose(nbrealéa(2,10));
let sc = rienplus(c);
let oppc = -c;
let soppc = rienplus(oppc);
let d = nbreouoppose(nbrealéa(1,10));
let sd = rienplus(d);
let bsup = nbrealéa(1,8);
let binf = diff(bsup);

let pp1 = puisspaires[nbrealéa(0,3)];
let pp2 = puissdiff(pp1,puisspaires);
let pp3 = puissdiffs(pp1,pp2,puisspaires);
let pi1 = puissimpaires[nbrealéa(0,3)];
let pi1a = puis1(pi1);
let pi2 = puissdiff(pi1,puissimpaires);
let pi2a = puis1(pi2);
let pi3 = puissdiffs(pi1,pi2,puissimpaires);
let pi3a = puis1(pi3);
let ce = contrex(a,b,c,pi1,pp1,pi2);

let f11 = a*ce[0]**pi1;
let f12 = b*ce[0]**pp1;
let sf12 = rienplus(f12);
let f13 = c*ce[0]**pi2;
let sf13 = rienplus(f13);
let fm11 = a*(-ce[0])**pi1;
let fm12 = b*(-ce[0])**pp1;
let sfm12 = rienplus(fm12);
let fm13 = c*(-ce[0])**pi2;
let sfm13 = rienplus(fm13);

let a1 = nbreouoppose(nbrealéa(2,10));
let oppa1 = -a1;
let b1 = nbreouoppose(nbrealéa(2,10));
let sb1 = rienplus(b1);
let oppb1 = -b1;
let soppb1 = rienplus(oppb1);
let c1 = nbreouoppose(nbrealéa(2,10));
let sc1 = rienplus(c1);
let oppc1 = -c1;
let soppc1 = rienplus(oppc1);
let d1 = nbreouoppose(nbrealéa(1,10));
let sd1 = rienplus(d1);
let pp11 = puisspaires[nbrealéa(0,3)];
let pp21 = puissdiff(pp11,puisspaires);
let pp31 = puissdiffs(pp11,pp21,puisspaires);
let pi11 = puissimpaires[nbrealéa(0,3)];
let pi1a1 = puis1(pi11);
let pi21 = puissdiff(pi11,puissimpaires);
let pi2a1 = puis1(pi21);
let pi31 = puissdiffs(pi11,pi21,puissimpaires);
let pi3a1 = puis1(pi31);
let a2 = nbrealéa(2,10);
let b2 = nbrealéa(2,10);
let c2 = nbrealéa(2,10);

let k = nbrealéa(0,8);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');

let listeenonces =[`Soit $f$ la fonction définie sur $\\left[-${bsup}~;${bsup} \\right]$ par $f(x)=${a}x^{${pp1}}${sb}${b}x^{${pp2}}${sc}${c}x^{${pp3}}${sd}${d}$.<br>
Étudier la parité de $f$.`,
`Soit $f$ la fonction définie sur $\\left[-${bsup}~;${bsup} \\right]$ par $f(x)=${a}x^{${pi1a}}${sb}${b}x^{${pi2a}}${sc}${c}x^{${pi3a}}$.<br>
Étudier la parité de $f$.`,
`Soit $f$ la fonction définie sur $\\left[-${bsup}~;${bsup} \\right]$ par $f(x)=${a}x^{${pi1a}}${sb}${b}x^{${pp1}}${sc}${c}x^{${pi2a}}$.<br>
Étudier la parité de $f$.`,
`Soit $f$ la fonction définie sur $\\left[${binf}~;${bsup} \\right]$ par $f(x)=${a}x^{${pp1}}${sb}${b}x^{${pp2}}${sc}${c}x^{${pp3}}${sd}${d}$.<br>
Étudier la parité de $f$.`,
`Soit $f$ la fonction définie sur $\\left[${binf}~;${bsup} \\right]$ par $f(x)=${a}x^{${pi1a}}${sb}${b}x^{${pi2a}}${sc}${c}x^{${pi3a}}$.<br>
Étudier la parité de $f$.`,
`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=\\dfrac{${a}x^{${pp1}}${sb}${b}x^{${pp2}}${sc}${c}x^{${pp3}}${sd}${d}}{${a1}x^{${pp11}}${sb1}${b1}x^{${pp21}}${sc1}${c1}x^{${pp31}}${sd1}${d1}} $<br>
Étudier la parité de $f$.`,
`Soit $f$ la fonction définie sur $\\mathbb{R}^*$ par $f(x)=\\dfrac{${a}x^{${pi1a}}${sb}${b}x^{${pi2a}}${sc}${c}x^{${pi3a}}}{${a2}x^{${pi1a1}}+${b2}x^{${pi2a1}}+${c2}x^{${pi3a1}}} $<br><br>
Étudier la parité de $f$.`,
`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=\\dfrac{${a}x^{${pi1a}}${sb}${b}x^{${pi2a}}${sc}${c}x^{${pi3a}}}{${a1}x^{${pp11}}${sb1}${b1}x^{${pp21}}${sc1}${c1}x^{${pp31}}${sd1}${d1}} $<br><br>
Étudier la parité de $f$.`,
`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=\\dfrac{${a1}x^{${pp11}}${sb1}${b1}x^{${pp21}}${sc1}${c1}x^{${pp31}}${sd1}${d1}}{${a}x^{${pi1a}}${sb}${b}x^{${pi2a}}${sc}${c}x^{${pi3a}}} $<br><br>
Étudier la parité de $f$.`];

let listesolutions = [`$f$ est paire.`,`$f$ est impaire.`,`$f$ n'est ni paire ni impaire.`,`$f$ n'est ni paire ni impaire.`,`$f$ n'est ni paire ni impaire.`,`$f$ est paire.`,`$f$ est paire.`,`$f$ est impaire`,`$f$ est impaire`];

let listecorrections = [`$\\left[-${bsup}~;${bsup} \\right]$ est symétrique par rapport à $0$.<br>
$\\begin{array}{rcl} f(-x) & = & ${a}\\times (-x)^{${pp1}}${sb}${b}\\times (-x)^{${pp2}}${sc}${c}\\times (-x)^{${pp3}}${sd}${d}\\\\
 & = & ${a}x^{${pp1}}${sb}${b}x^{${pp2}}${sc}${c}x^{${pp3}}${sd}${d} \\\\
 & = & f(x)
\\end{array}$<br>
Donc $f$ est paire.`,
`$\\left[-${bsup}~;${bsup} \\right]$ est symétrique par rapport à $0$.<br>
$\\begin{array}{rcl} f(-x) & = & ${a}\\times (-x)^{${pi1a}}${sb}${b}\\times (-x)^{${pi2a}}${sc}${c}\\times (-x)^{${pi3a}}\\\\
 & = & ${oppa}x^{${pi1a}}${soppb}${oppb}x^{${pi2a}}${soppc}${oppc}x^{${pi3a}} \\\\
 & = & -~f(x)
\\end{array}$<br>
Donc $f$ est impaire.`,
`$\\left[-${bsup}~;${bsup} \\right]$ est symétrique par rapport à $0$.<br>
Contre exemple : <br>
$f(${ce[0]}) = ${a}\\times ${ce[0]}^{${pi1a}}${sb}${b}\\times ${ce[0]}^{${pp1}}${sc}${c}\\times ${ce[0]}^{${pi2a}}=${f11}${sf12}${f12}${sf13}${f13}=${ce[1]}$<br>
$f(-${ce[0]}) = ${a}\\times (-${ce[0]})^{${pi1a}}${sb}${b}\\times (-${ce[0]})^{${pp1}}${sc}${c}\\times (-${ce[0]})^{${pi2a}}=${fm11}${sfm12}${fm12}${sfm13}${fm13}=${ce[2]}$<br>
$f(${ce[0]})\\neq f(-${ce[0]})$ donc $f$ n'est pas paire.<br>
$f(${ce[0]})\\neq f(-${ce[0]})$ donc $f$ n'est pas impaire.<br>
Conclusion : $~f$ n'est ni paire ni impaire.`,
`$\\left[${binf}~;${bsup} \\right]$ n'est pas symétrique par rapport à $0$ donc $f$ n'est ni paire ni impaire.`,
`$\\left[${binf}~;${bsup} \\right]$ n'est pas symétrique par rapport à $0$ donc $f$ n'est ni paire ni impaire.`,
`$\\mathbb{R}$ est symétrique par rapport à zéro.<br>
$\\begin{array}{rcl} f(-x) & = & \\dfrac{${a}\\times (-x)^{${pp1}}${sb}${b}\\times (-x)^{${pp2}}${sc}${c}\\times (-x)^{${pp3}}${sd}${d}}{${a1}\\times (-x)^{${pp11}}${sb1}${b1}\\times (-x)^{${pp21}}${sc1}${c1}\\times (-x)^{${pp31}}${sd1}${d1}}\\\\
& = & \\dfrac{${a}x^{${pp1}}${sb}${b}x^{${pp2}}${sc}${c}x^{${pp3}}${sd}${d}}{${a1}x^{${pp11}}${sb1}${b1}x^{${pp21}}${sc1}${c1}x^{${pp31}}${sd1}${d1}}\\\\
& = & f(x)
\\end{array}$<br>
Donc $f$ est paire.`,
`$\\mathbb{R}^*$ est symétrique par rapport à zéro.<br>
$\\begin{array}{rcl} f(-x) & = & \\dfrac{${a}\\times (-x)^{${pi1a}}${sb}${b}\\times (-x)^{${pi2a}}${sc}${c}\\times (-x)^{${pi3a}}}{${a2}\\times (-x)^{${pi1a1}}+${b2}\\times (-x)^{${pi2a1}}+${c2}\\times (-x)^{${pi3a1}}}\\\\
& = & \\dfrac{${oppa}x^{${pi1a}}${soppb}${oppb}x^{${pi2a}}${soppc}${oppc}x^{${pi3a}}}{-${a2}x^{${pi1a1}}-${b2}x^{${pi2a1}}-${c2}x^{${pi3a1}}}\\\\
& = & \\dfrac{-\\left(${a}x^{${pi1a}}${sb}${b}x^{${pi2a}}${sc}${c}x^{${pi3a}} \\right)}{-\\left(${a2}x^{${pi1a1}}+${b2}x^{${pi2a1}}+${c2}x^{${pi3a1}} \\right)}\\\\
& = & f(x)
\\end{array}$<br>
Donc $f$ est paire.`,
`$\\mathbb{R}$ est symétrique par rapport à zéro.<br>
$\\begin{array}{rcl} f(-x) & = & \\dfrac{${a}\\times (-x)^{${pi1a}}${sb}${b}\\times (-x)^{${pi2a}}${sc}${c}\\times (-x)^{${pi3a}}}{${a1}\\times (-x)^{${pp11}}${sb1}${b1}\\times (-x)^{${pp21}}${sc1}${c1}\\times (-x)^{${pp31}}${sd1}${d1}}\\\\
& = & \\dfrac{${oppa}x^{${pi1a}}${soppb}${oppb}x^{${pi2a}}${soppc}${oppc}x^{${pi3a}}}{${a1}x^{${pp11}}${sb1}${b1}x^{${pp21}}${sc1}${c1}x^{${pp31}}${sd1}${d1}}\\\\
& = & \\dfrac{-\\left(${a}x^{${pi1a}}${sb}${b}x^{${pi2a}}${sc}${c}x^{${pi3a}}\\right)}{+\\left(${a1}x^{${pp11}}${sb1}${b1}x^{${pp21}}${sc1}${c1}x^{${pp31}}${sd1}${d1}\\right)}\\\\
& = & -~f(x)
\\end{array}$<br>
Donc $f$ est impaire.`,
`$\\mathbb{R}$ est symétrique par rapport à zéro.<br>
$\\begin{array}{rcl} f(-x) & = & \\dfrac{${a1}\\times (-x)^{${pp11}}${sb1}${b1}\\times (-x)^{${pp21}}${sc1}${c1}\\times (-x)^{${pp31}}${sd1}${d1}}{${a}\\times (-x)^{${pi1a}}${sb}${b}\\times (-x)^{${pi2a}}${sc}${c}\\times (-x)^{${pi3a}}}\\\\
& = & \\dfrac{${a1}x^{${pp11}}${sb1}${b1}x^{${pp21}}${sc1}${c1}x^{${pp31}}${sd1}${d1}}{${oppa}x^{${pi1a}}${soppb}${oppb}x^{${pi2a}}${soppc}${oppc}x^{${pi3a}}}\\\\
& = & \\dfrac{+\\left(${a1}x^{${pp11}}${sb1}${b1}x^{${pp21}}${sc1}${c1}x^{${pp31}}${sd1}${d1}\\right)}{-\\left(${a}x^{${pi1a}}${sb}${b}x^{${pi2a}}${sc}${c}x^{${pi3a}}\\right)}\\\\
& = & -~f(x)
\\end{array}$<br>
Donc $f$ est impaire.`];


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
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSeconde.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSecondeFonctions.html";
})