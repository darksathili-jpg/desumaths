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

let a = nbreouoppose(nbrealéa(1,10));
let sa = rienplus(a);
let asimp = unoupasun(a);
let pgda = parenthesesgd(a);
let b = nbreouoppose(nbrealéa(1,10));
let sb = rienplus(b);
let sb2 = plusmoins(b);
let pgdb = parenthesesgd(b);
let c = nbreouoppose(nbrealéa(1,10));
let pgdc = parenthesesgd(c);
let csimp = unoupasun(c);
let d = nbreouoppose(nbrealéa(1,10));
let sd = rienplus(d);
let sd2 = plusmoins(d);
let pagdd = parenthesesgd(d);
let svalint = rienmoins(-d/c);
let valintsimp = simpfracmax(-d,c);
let opc = -c;
let sopc = rienplus(opc);
let ac = a*c;
let ad = a*d;
let sad = rienplus(ad);
let opca = opc*a;
let sopca = rienplus(opca);
let opcb = opc*b;
let sopcb = rienplus(opcb);
let admoinsbc = a*d-b*c;

let e = nbreouoppose(nbrealéa(1,10));
let se = rienplus(e);
let se2 = plusmoins(e);
let pgde = parenthesesgd(e);
let bsimp = unoupasun(b);
let a2 = 2*a;
let coefcarre1 = a2*c;
let coefx1 = a2*d;
let scoefx1 = rienplus(coefx1);
let coefx2 = b*c;
let scoefx2 = rienplus(coefx2);
let coefreel1 = b*d;
let scoefreel1 = rienplus(coefreel1);
let coefcarre2 = opc*a;
let scoefcarre2 = rienplus(coefcarre2);
let coefx3 = opc*b;
let scoefx3 = rienplus(coefx3);
let coefreel2 = opc*e;
let scoefreel2 = rienplus(coefreel2);
let coefcarre = coefcarre1+coefcarre2;
let coefx = coefx1+coefx2+coefx3;
let scoefx = rienplus(coefx);
let coefreel = coefreel1+coefreel2;
let scoefreel = rienplus(coefreel);

let k = nbrealéa(0,1);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


let listenonces = [`Déterminer la fonction dérivée de la fonction définie sur $\\mathbb{R}~\\backslash \\left\\{ ${svalint}${valintsimp} \\right\\}$ par $f(x)=\\dfrac{${asimp}x${sb}${b}}{${csimp}x${sd}${d}}$.`,
`Déterminer la fonction dérivée de la fonction définie sur $\\mathbb{R}~\\backslash \\left\\{ ${svalint}${valintsimp} \\right\\}$ par $f(x)=\\dfrac{${asimp}x^2${sb}${bsimp}x${se}${e}}{${csimp}x${sd}${d}}$.`];

let listeCorrections = [`On va utiliser la formule : $\\left( \\dfrac{u}{v} \\right)^{'}=\\dfrac{u'v-v'u}{v^2} $<br><br>
$\\begin{array}{rl} u(x)= ${asimp}x${sb}${b} & \\color{blue}{u'(x)=${a}\\times 1${sb2}0=${a}} \\\\
\\color{green}{v(x)=${csimp}x${sd}${d}} & \\color{red}{v'(x)=${c}\\times 1${sd2}0=${c}}
\\end{array}$<br><br>
$\\begin{array}{rcl} f'(x) & = & \\dfrac{\\color{blue}{\\overbrace{${a}}^{u'}}\\times \\color{green}{\\overbrace{\\left(${csimp}x${sd}${d}\\right)}^{v}}-\\color{red}{\\overbrace{${pgdc[0]}${c}${pgdc[1]}}^{v'}}\\times \\overbrace{\\left(${asimp}x${sb}${b}\\right)}^{u}}{\\color{green}{\\underbrace{\\left(${csimp}x${sd}${d}\\right)^2}_{v^2}}} \\\\
& = & \\dfrac{${a}\\times ${pgdc[0]}${csimp}x${pgdc[1]} ${sa}${a}\\times ${pagdd[0]}${d}${pagdd[1]} ${sopc}${opc}\\times ${pgda[0]}${asimp}x${pgda[1]} ${sopc}${opc}\\times ${pgdb[0]}${b}${pgdb[1]}}{\\left(${csimp}x${sd}${d}\\right)^2} \\\\
& = & \\dfrac{${ac}x${sad}${ad}${sopca}${opca}x${sopcb}${opcb}}{\\left(${csimp}x${sd}${d}\\right)^2} \\\\
& = & \\dfrac{${admoinsbc}}{\\left(${csimp}x${sd}${d}\\right)^2}
\\end{array}$`,
`On va utiliser la formule : $\\left( \\dfrac{u}{v} \\right)^{'}=\\dfrac{u'v-v'u}{v^2} $<br><br>
$\\begin{array}{rl} u(x)= ${asimp}x^2${sb}${bsimp}x${se}${e} & \\color{blue}{u'(x)=${a}\\times 2x${sb}${b}\\times 1${se2}0=${a2}x${sb}${b}} \\\\
\\color{green}{v(x)=${csimp}x${sd}${d}} & \\color{red}{v'(x)=${c}\\times 1${sd2}0=${c}}
\\end{array}$<br><br>
$\\begin{array}{rcl} f'(x) & = & \\dfrac{\\color{blue}{\\overbrace{\\left(${a2}x${sb}${b}\\right)}^{u'}}\\times \\color{green}{\\overbrace{\\left(${csimp}x${sd}${d}\\right)}^{v}}-\\color{red}{\\overbrace{${pgdc[0]}${c}${pgdc[1]}}^{v'}}\\times \\overbrace{\\left(${asimp}x^2${sb}${bsimp}x${se}${e}\\right)}^{u}}{\\color{green}{\\underbrace{\\left(${csimp}x${sd}${d}\\right)^2}_{v^2}}} \\\\
& = & \\dfrac{${a2}x\\times ${pgdc[0]}${csimp}x${pgdc[1]} ${sa}${a2}x\\times ${pagdd[0]}${d}${pagdd[1]} ${sb}${b}\\times ${pgdc[0]}${csimp}x${pgdc[1]} ${sb}${b}\\times ${pagdd[0]}${d}${pagdd[1]} ${sopc}${opc}\\times ${pgda[0]}${asimp}x^2${pgda[1]} ${sopc}${opc}\\times ${pgdb[0]}${b}x${pgdb[1]} ${sopc}${opc}\\times ${pgde[0]}${e}${pgde[1]}}{\\left(${csimp}x${sd}${d}\\right)^2} \\\\
& = & \\dfrac{${coefcarre1}x^2${scoefx1}${coefx1}x${scoefx2}${coefx2}x${scoefreel1}${coefreel1}${scoefcarre2}${coefcarre2}x^2${scoefx3}${coefx3}x${scoefreel2}${coefreel2}}{\\left(${csimp}x${sd}${d}\\right)^2} \\\\
& = & \\dfrac{${coefcarre}x^2${scoefx}${coefx}x${scoefreel}${coefreel}}{\\left(${csimp}x${sd}${d}\\right)^2}
\\end{array}$`];

let listeSolutions = [`$f'(x)=\\dfrac{${admoinsbc}}{\\left(${csimp}x${sd}${d}\\right)^2}$`,
`$f'(x)=\\dfrac{${coefcarre}x^2${scoefx}${coefx}x${scoefreel}${coefreel}}{\\left(${csimp}x${sd}${d}\\right)^2}$`];

enonce.innerHTML = listenonces[k];
solution.innerHTML = listeSolutions[k];
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
    location.href = "../../../Menus/MenuSecondeEqsDroites.html";
})