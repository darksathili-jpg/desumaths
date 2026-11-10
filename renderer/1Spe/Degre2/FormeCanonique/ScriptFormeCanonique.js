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

function cas(denom1,denom2) {
    let rep;
    if (denom1==1 && denom2 !=1) {rep=0;}
    if (denom1!=1 && denom2 !=1) {rep=1;}
    if (denom1==1 && denom2 ==1) {rep=2;}
    return rep;
}

function lala(num,denom) {
    let rep;
    if (denom==1) {rep=`${num}`;} else {rep=`\\dfrac{${num}}{${denom}}`;}
    return rep;
}

let a = nbreouoppose(nbrealéa(2,10));
let valabsa = valabs(a);
let sopa = plusmoins(-a);
let b = nbreouoppose(nbrealéa(2,10));
let sb = rienplus(b);
let sbfrac = plusmoins(b);
let valabsb = valabs(b);
let c = nbreouoppose(nbrealéa(2,10));
let sc = rienplus(c);
let bsura = simplifierfraction(valabsb,valabsa);
let sfracbsura = plusmoins(b/a);
let bsur2acarre = (b/(2*a))**2;
let bsur2a = simplifierfraction(valabsb,valabsa*2);
let numcarre = bsur2a[0]*bsur2a[0];
let denomcarre = bsur2a[1]*bsur2a[1];
let afoisfraccarrée = simplifierfraction(valabsa*numcarre,denomcarre);
let fin = simplifierfraction(-1*b**2+4*a*c,4*a);
let finsimp = fracsimp(fin[0],fin[1]);
let sfin = plusmoins((-1*b**2+4*a*c)/(4*a));
let k = cas(bsura[1],bsur2a[1]);

let numessai = nbrealéa(1,3);
let denomessai = nbrealéa(1,2);
let x412d58f = lala(numessai,denomessai);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


let listeCorrections = [`$\\begin{array}{rcl} ${a}x^2${sb}${b}x${sc}${c} & = & ${a}\\left( x^2${sbfrac}\\dfrac{${valabsb}}{${a}}x\\right)${sc}${c} \\\\
& = & ${a}\\left( x^2${sfracbsura}${bsura[0]}x\\right)${sc}${c} \\hspace{5mm} (simplifiée) \\\\
& = & ${a}\\left(\\underbrace{x^2${sfracbsura}${bsura[0]}x+\\color{blue}{\\overbrace{\\color{black}{\\dfrac{${numcarre}}{${denomcarre}}}}^{\\color{blue}{\\left(\\frac{${bsura[0]}}{2}\\right)^2}}}}_{(a~${sfracbsura}~b)^2}-\\dfrac{${numcarre}}{${denomcarre}} \\right)${sc}${c} \\\\
& = & ${a} \\left[\\left(x${sfracbsura}\\dfrac{${bsur2a[0]}}{${bsur2a[1]}}\\right)^2-\\dfrac{${numcarre}}{${denomcarre}} \\right]${sc}${c} \\\\
& = & ${a}\\left(x${sfracbsura}\\dfrac{${bsur2a[0]}}{${bsur2a[1]}}\\right)^2${sopa}\\dfrac{${afoisfraccarrée[0]}}{${afoisfraccarrée[1]}}${sc}${c} \\\\
& = & ${a}\\left(x${sfracbsura}\\dfrac{${bsur2a[0]}}{${bsur2a[1]}}\\right)^2${sfin}\\dfrac{${finsimp[0]}}{${finsimp[1]}}
\\end{array}$`,
`$\\begin{array}{rcl} ${a}x^2${sb}${b}x${sc}${c} & = & ${a}\\left( x^2${sbfrac}\\dfrac{${valabsb}}{${a}}x\\right)${sc}${c} \\\\
& = & ${a}\\left( x^2${sfracbsura}\\dfrac{${bsura[0]}}{${bsura[1]}}x\\right)${sc}${c} \\hspace{5mm} (simplifiée) \\\\
& = & ${a}\\left(\\underbrace{x^2${sfracbsura}\\dfrac{${bsura[0]}}{${bsura[1]}}x+\\color{blue}{\\overbrace{\\color{black}{\\dfrac{${numcarre}}{${denomcarre}}}}^{\\color{blue}{\\left(\\frac{${bsura[0]}}{${bsura[1]}}~\\div~2\\right)^2}}}}_{(a~${sfracbsura}~b)^2}-\\dfrac{${numcarre}}{${denomcarre}} \\right)${sc}${c} \\\\
& = & ${a} \\left[\\left(x${sfracbsura}\\dfrac{${bsur2a[0]}}{${bsur2a[1]}}\\right)^2-\\dfrac{${numcarre}}{${denomcarre}} \\right]${sc}${c} \\\\
& = & ${a}\\left(x${sfracbsura}\\dfrac{${bsur2a[0]}}{${bsur2a[1]}}\\right)^2${sopa}\\dfrac{${afoisfraccarrée[0]}}{${afoisfraccarrée[1]}}${sc}${c} \\\\
& = & ${a}\\left(x${sfracbsura}\\dfrac{${bsur2a[0]}}{${bsur2a[1]}}\\right)^2${sfin}\\dfrac{${finsimp[0]}}{${finsimp[1]}}
\\end{array}$`,
`$\\begin{array}{rcl} ${a}x^2${sb}${b}x${sc}${c} & = & ${a}\\left( x^2${sbfrac}\\dfrac{${valabsb}}{${a}}x\\right)${sc}${c} \\\\
& = & ${a}\\left( x^2${sfracbsura}${bsura[0]}x\\right)${sc}${c} \\hspace{5mm} (simplifiée) \\\\
& = & ${a}\\left(\\underbrace{x^2${sfracbsura}${bsura[0]}x+\\color{blue}{\\overbrace{\\color{black}{${numcarre}}}^{\\color{blue}{\\left(\\frac{${bsura[0]}}{2}\\right)^2}}}}_{(a~${sfracbsura}~b)^2}-${numcarre} \\right)${sc}${c} \\\\
& = & ${a} \\left[\\left(x${sfracbsura}${bsur2a[0]}\\right)^2-${numcarre} \\right]${sc}${c} \\\\
& = & ${a}\\left(x${sfracbsura}${bsur2a[0]}\\right)^2${sopa}${afoisfraccarrée[0]}${sc}${c} \\\\
& = & ${a}\\left(x${sfracbsura}${bsur2a[0]}\\right)^2${sfin}${finsimp[0]}
\\end{array}$`];

let listeSolutions = [`$${a}\\left(x${sfracbsura}\\dfrac{${bsur2a[0]}}{${bsur2a[1]}}\\right)^2${sfin}\\dfrac{${finsimp[0]}}{${finsimp[1]}}$`,
`$${a}\\left(x${sfracbsura}\\dfrac{${bsur2a[0]}}{${bsur2a[1]}}\\right)^2${sfin}\\dfrac{${finsimp[0]}}{${finsimp[1]}}$`,
`$${a}\\left(x${sfracbsura}${bsur2a[0]}\\right)^2${sfin}${finsimp[0]}$`];

enonce.innerHTML = `Déterminer la forme canonique de l'expression : $${a}x^2${sb}${b}x${sc}${c}$.<br>
Essai : $\\begin{array}{rcl}  reponse & = & ${x412d58f} \\end{array}$`;
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