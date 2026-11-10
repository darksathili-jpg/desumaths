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
    if (a<0) {rep='';} else {
        if(a==0) {rep='-'} else{rep='+';}}
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
  
  function fracsimpmax(num,denom) {
    let rep;
    let signe;
    f1 = simplifierfraction(num,denom);
    f2 = fracsimp(f1[0],f1[1]);
    if (num/denom<0) {signe='-';} else {signe='';}
    return rep = [signe,f2[0],f2[1]];
  }

function diff(a) {
    let rep = nbreouoppose(nbrealéa(2,10));
    while(a==rep) {rep = nbreouoppose(nbrealéa(2,10));}
    return rep;
}

function sol1(asurb,b) {
    let rep;
    if (asurb[2]==1) {rep=`${asurb[0]}${asurb[1]}~\\text{e}^{${b}x}`;}
    else {rep=`${asurb[0]}\\dfrac{${asurb[1]}}{${asurb[2]}}~\\text{e}^{${b}x}`;}
    return rep;
}

function sol2(bsuranplus1,a,c,nplus1) {
    let rep;
    if (bsuranplus1[2]==1) {rep=`${bsuranplus1[0]}${bsuranplus1[1]}\\times (${a}x${sc}${c})^{${nplus1}}`;}
    else {rep=`${bsuranplus1[0]}\\dfrac{${bsuranplus1[1]}}{${bsuranplus1[2]}}\\times (${a}x${sc}${c})^{${nplus1}}`;}
    return rep;
}

function sol3(c3sura3,a3,b3) {
  let rep;
  if (c3sura3[2]==1) {rep=`${c3sura3[0]}${c3sura3[1]}\\sqrt{${a3}x^2${sb3}${b3}}`;}
  else {rep=`${c3sura3[0]}\\dfrac{${c3sura3[1]}}{${c3sura3[2]}}\\sqrt{${a3}x^2${sb3}${b3}}`;}
  return rep;
}

function sol4(c3sur2a3,a3,b3) {
  let rep;
  if (c3sur2a3[2]==1) {rep=`${c3sur2a3[0]}${c3sur2a3[1]}~\\ln\\left(${a3}x^2${sb3}${b3}\\right)`;}
  else {rep=`${c3sur2a3[0]}\\dfrac{${c3sur2a3[1]}}{${c3sur2a3[2]}}~\\ln\\left(${a3}x^2${sb3}${b3}\\right)`;}
  return rep;
}

function sol6(moinsc3sura3,a3,b3) {
  let rep;
  if (moinsc3sura3[2]==1) {rep=`${moinsc3sura3[0]}${moinsc3sura3[1]}~\\cos(${a3}x${sb3}${b3})`;}
  else {rep=`${moinsc3sura3[0]}\\dfrac{${moinsc3sura3[1]}}{${moinsc3sura3[2]}}~\\cos(${a3}x${sb3}${b3})`;}
  return rep;
}

function sol7(c3sura3,a3,b3) {
  let rep;
  if (c3sura3==1) {rep=`${c3sur2a3[0]}${c3sura3[1]}~\\sin(${a3}x${sb3}${b3})`;}
  else {rep=`${c3sura3[0]}\\dfrac{${c3sura3[1]}}{${c3sura3[2]}}~\\sin(${a3}x${sb3}${b3})`;}
  return rep;
}

let a = nbreouoppose(nbrealéa(2,10));
let pgda = parenthesegd(a);
let b = diff(a);
let asurb = fracsimpmax(a,b);
let s1 = sol1(asurb,b);
let c = nbreouoppose(nbrealéa(1,10));
let sc = rienplus(c);
let n = nbrealéa(2,10);
let nplus1 = n+1;
let bsuranplus1 = fracsimpmax(b,a*nplus1);
let s2 = sol2(bsuranplus1,a,c,nplus1);
let a3 = nbrealéa(2,10);
let pgda3 = parenthesegd(a3);
let b3 = nbrealéa(1,10);
let sb3 = rienplus(b3);
let c3 = nbreouoppose(nbrealéa(2,10));
let a3fois2 = a3*2;
let c3sura3 = fracsimpmax(c3,a3);
let s3 = sol3(c3sura3,a3,b3);
let c3sur2a3 = fracsimpmax(c3,a3fois2);
let s4 = sol4(c3sur2a3,a3,b3);
let moinsc3sur2a3 = fracsimpmax(-c3,a3fois2);
let moinsc3sura3 = fracsimpmax(-c3,a3);
let s6 = sol6(moinsc3sura3,a3,b3);
let s7 = sol7(c3sura3,a3,b3);
let k = nbrealéa(0,6);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');

let listeenonces = [`Déterminer une primitive de la fonction $f$ définie sur $\\mathbb{R}$ par $f(x)=${a}~\\text{e}^{${b}x}$.`,
`Déterminer une primitive de la fonction $f$ définie sur $\\mathbb{R}$ par $f(x)=${b}~(${a}x${sc}${c})^{${n}}$.`,
`Déterminer une primitive de la fonction $f$ définie sur $\\mathbb{R}$ par $f(x)=\\dfrac{${c3}x}{\\sqrt{${a3}x^2${sb3}${b3}}}$.`,
`Déterminer une primitive de la fonction $f$ définie sur $\\mathbb{R}$ par $f(x)=\\dfrac{${c3}x}{${a3}x^2${sb3}${b3}}$.`,
`Déterminer une primitive de la fonction $f$ définie sur $\\mathbb{R}$ par $f(x)=\\dfrac{${c3}x}{\\left(${a3}x^2${sb3}${b3}\\right)^2}$.`,
`Déterminer une primitive de la fonction $f$ définie sur $\\mathbb{R}$ par $f(x)=${c3}\\sin(${a3}x${sb3}${b3})$.`,
`Déterminer une primitive de la fonction $f$ définie sur $\\mathbb{R}$ par $f(x)=${c3}\\cos(${a3}x${sb3}${b3})$.`];

let listesolutions = [`$F(x)=${s1}$`,`$F(x)=${s2}$`,`$F(x)=${s3}$`,`$F(x)=${s4}$`,`$F(x)=\\dfrac{${moinsc3sur2a3[0]}${moinsc3sur2a3[1]}}{${moinsc3sur2a3[2]}\\left(${a3}x^2${sb3}${b3}\\right)}$`,`$F(x)=${s6}$`,`$F(x)=${s7}$`];

let listecorrections = [`$f(x)=${a}~\\text{e}^{${b}x}=\\color{blue}{\\underbrace{\\color{black}{\\dfrac{${a}}{${b}}}}_{k}}\\times \\color{red}{\\underbrace{\\color{black}{${b}~\\text{e}^{${b}x}}}_{u'\\text{e}^{u}}}$ donc :<br>
$F(x)=\\color{blue}{\\underbrace{\\color{black}{\\dfrac{${a}}{${b}}}}_{k}}\\times \\color{red}{\\underbrace{\\color{black}{\\text{e}^{${b}x}}}_{\\text{e}^{u}}}=${s1} $`,
`$f(x)=${b}~(${a}x${sc}${c})^{${n}}=\\color{blue}{\\underbrace{\\color{black}{\\dfrac{${b}}{${a}}}}_{k}}\\times \\color{red}{\\underbrace{\\color{black}{${pgda[0]}${a}${pgda[1]}\\times (${a}x${sc}${c})^{${n}}}}_{u'u^{n}}}$ donc :<br><br>
$\\begin{array}{rcl} F(x) & = &\\color{blue}{\\underbrace{\\color{black}{\\dfrac{${b}}{${a}}}}_{k}}\\times \\color{red}{\\underbrace{\\color{black}{\\dfrac{(${a}x${sc}${c})^{${n}+1}}{${n}+1}}}_{\\frac{u^{n+1}}{n+1}}}=\\color{blue}{\\underbrace{\\color{black}{\\dfrac{${b}}{${a}}}}_{k}}\\times \\color{red}{\\underbrace{\\color{black}{\\dfrac{(${a}x${sc}${c})^{${nplus1}}}{${nplus1}}}}_{\\frac{u^{n+1}}{n+1}}}\\\\
& = &\\dfrac{${b}}{${a}\\times ${nplus1}}\\times (${a}x${sc}${c})^{${nplus1}}=${s2}\\end{array}$`,
`$f(x)=\\dfrac{${c3}x}{\\sqrt{${a3}x^2${sb3}${b3}}}=\\color{blue}{\\underbrace{\\color{black}{\\dfrac{${c3}}{${a3fois2}}}}_{k}}\\times\\dfrac{\\color{red}{\\overbrace{\\color{black}{{${a3fois2}x}}}^{u'}}}{\\color{red}{\\underbrace{\\color{black}{\\sqrt{${a3}x^2${sb3}${b3}}}}_{\\sqrt{u}}}}$ donc :<br><br>
$F(x)=\\color{blue}{\\underbrace{\\color{black}{\\dfrac{${c3}}{${a3fois2}}}}_{k}}\\times\\color{red}{\\underbrace{\\color{black}{2\\sqrt{${a3}x^2${sb3}${b3}}}}_{2\\sqrt{u}}}=${s3}$`,
`$f(x)=\\dfrac{${c3}x}{${a3}x^2${sb3}${b3}}=\\color{blue}{\\underbrace{\\color{black}{\\dfrac{${c3}}{${a3fois2}}}}_{k}}\\times\\dfrac{\\color{red}{\\overbrace{\\color{black}{{${a3fois2}x}}}^{u'}}}{\\color{red}{\\underbrace{\\color{black}{${a3}x^2${sb3}${b3}}}_{u}}}$ donc :<br><br>
$F(x)=\\color{blue}{\\underbrace{\\color{black}{\\dfrac{${c3}}{${a3fois2}}}}_{k}}\\times\\color{red}{\\underbrace{\\color{black}{\\ln\\left(${a3}x^2${sb3}${b3}\\right)}}_{\\ln(u)}}=${s4}$`,
`$f(x)=\\dfrac{${c3}x}{\\left(${a3}x^2${sb3}${b3}\\right)^2}=\\color{blue}{\\underbrace{\\color{black}{\\dfrac{${c3}}{${a3fois2}}}}_{k}}\\times\\dfrac{\\color{red}{\\overbrace{\\color{black}{{${a3fois2}x}}}^{u'}}}{\\color{red}{\\underbrace{\\color{black}{\\left(${a3}x^2${sb3}${b3}\\right)^2}}_{u^2}}}$ donc :<br><br>
$F(x)=\\color{blue}{\\underbrace{\\color{black}{\\dfrac{${c3}}{${a3fois2}}}}_{k}}\\times\\color{red}{\\underbrace{\\color{black}{\\dfrac{-1}{${a3}x^2${sb3}${b3}}}}_{-\\frac{1}{u}}}=\\dfrac{${moinsc3sur2a3[0]}${moinsc3sur2a3[1]}}{${moinsc3sur2a3[2]}\\left(${a3}x^2${sb3}${b3}\\right)}$`,
`$f(x)=${c3}\\sin(${a3}x${sb3}${b3})=\\color{blue}{\\underbrace{\\color{black}{\\dfrac{${c3}}{${a3}}}}_{k}}\\times\\color{red}{\\underbrace{\\color{black}{${pgda3[0]}${a3}${pgda3[1]}}}_{u'}}~\\color{red}{\\underbrace{\\color{black}{\\sin(${a3}x${sb3}${b3})}}_{\\sin(u)}}$ donc :<br><br>
$F(x)=\\color{blue}{\\underbrace{\\color{black}{\\dfrac{${c3}}{${a3}}}}_{k}}\\times\\color{red}{\\underbrace{\\color{black}{(-\\cos(${a3}x${sb3}${b3}))}}_{-\\cos(u)}}=${s6}$`,
`$f(x)=${c3}\\cos(${a3}x${sb3}${b3})=\\color{blue}{\\underbrace{\\color{black}{\\dfrac{${c3}}{${a3}}}}_{k}}\\times\\color{red}{\\underbrace{\\color{black}{${pgda3[0]}${a3}${pgda3[1]}}}_{u'}}~\\color{red}{\\underbrace{\\color{black}{\\sin(${a3}x${sb3}${b3})}}_{\\cos(u)}}$ donc :<br><br>
$F(x)=\\color{blue}{\\underbrace{\\color{black}{\\dfrac{${c3}}{${a3}}}}_{k}}\\times\\color{red}{\\underbrace{\\color{black}{\\sin(${a3}x${sb3}${b3})}}_{\\sin(u)}}=${s7}$`];

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
    location.href = "../../../Menus/MenuTaleSpe.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTaleEquasdiffs.html";
})