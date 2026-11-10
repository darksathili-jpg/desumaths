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

function rienplus(a) {
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

function num1(u0,num,denom,pgd,sasurb,num2,denom2,scsurd) {
    if (denom==1 && denom2==1) {return `Soit $(u_n)$ la suite définie pour tout $n\\in \\mathbb{N}$ par $u_n=${u0}\\times ${pgd[0]} ${sasurb} ${num} ${pgd[1]} ^n ${scsurd} ${num2}  $<br>
    Déterminer la limite de la suite $(u_n)$.`}
    if (denom!=1 && denom2!=1) {return `Soit $(u_n)$ la suite définie pour tout $n\\in \\mathbb{N}$ par $u_n=${u0}\\times \\left( ${sasurb} \\dfrac{${num}}{${denom}}\\right)^n ${scsurd} \\dfrac{${num2}}{${denom2}} $<br>
    Déterminer la limite de la suite $(u_n)$.`}
    if (denom==1 && denom2!=1) {return `Soit $(u_n)$ la suite définie pour tout $n\\in \\mathbb{N}$ par $u_n=${u0}\\times ${pgd[0]} ${sasurb} ${num} ${pgd[1]} ^n ${scsurd} \\dfrac{${num2}}{${denom2}}  $<br>
    Déterminer la limite de la suite $(u_n)$.`}
    if (denom!=1 && denom2==1) {return `Soit $(u_n)$ la suite définie pour tout $n\\in \\mathbb{N}$ par $u_n=${u0}\\times \\left( ${sasurb} \\dfrac{${num}}{${denom}}\\right)^n ${scsurd} ${num2} $<br>
    Déterminer la limite de la suite $(u_n)$.`}
}

function cas(adivb) {
    let rep;
    if (adivb<=-1) {rep=0;}
    if (adivb>-1 && adivb<1) {rep=1;}
    if (adivb==1) {rep=2;}
    if (adivb>1) {rep=3;}
    return rep;
}

function correctionsd(k,u0,num,denom,pgd,sasurb,num2,denom2,scsurd,scsurdrep,e,sefrac,nume,denome) {
    if (k==0 && denom==1) {return `$${sasurb} ${num} \\leqslant -1$ donc $\\left( ${sasurb} ${num} \\right)^n$ n'a pas de limite et donc la suite $(u_n)$ n'a pas de limite.`}
    if (k==0 && denom!=1) {return `$${sasurb}\\dfrac{${num}}{${denom}} \\leqslant -1$ donc $\\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n$ n'a pas de limite et donc la suite $(u_n)$ n'a pas de limite.`}
    if (k==1 && denom==1 && denom2==1) {return `$-1<${num}<1$ donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left( ${sasurb} ${num} \\right)^n}=0$ et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(${u0} \\times \\left( ${sasurb} ${num} \\right)^n\\right)}=0$<br><br>
    et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(\\underbrace{${u0} \\times \\left( ${sasurb} ${num} \\right)^n ${scsurd} ${num2}}_{u_n}\\right}= ${scsurdrep} ${num2} $`}
    if (k==1 && denom!=1 && denom2==1) {return `$-1<${sasurb}\\dfrac{${num}}{${denom}}<1$ donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n}=0$ et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(${u0} \\times \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n\\right)}=0$<br><br>
    et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(\\underbrace{${u0} \\times \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n ${scsurd} ${num2}}_{u_n}\\right)}= ${scsurdrep} ${num2} $`}
    if (k==1 && denom==1 && denom2!=1) {return `$-1<${num}<1$ donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left( ${sasurb} ${num} \\right)^n}=0$ et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(${u0} \\times \\left( ${sasurb} ${num} \\right)^n\\right)}=0$<br><br>
    et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(\\underbrace{${u0} \\times \\left( ${sasurb} ${num} \\right)^n ${scsurd} \\dfrac{${num2}}{${denom2}}}_{u_n}\\right)}= ${scsurdrep} \\dfrac{${num2}}{${denom2}} $`}
    if (k==1 && denom!=1 && denom2!=1) {return `$-1<${sasurb}\\dfrac{${num}}{${denom}}<1$ donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n}=0$ et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(${u0} \\times \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n\\right)}=0$<br><br>
    et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(\\underbrace{${u0} \\times \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n ${scsurd} \\dfrac{${num2}}{${denom2}}}_{u_n}\\right)}= ${scsurdrep} \\dfrac{${num2}}{${denom2}} $`}
    if (k==2 && denom==1 && denom2==1) {return `$q=1$ donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left( ${sasurb} ${num} \\right)^n}=1$ et donc $\\displaystyle{\\lim_{x\\to +\\infty} ${u0} \\times ${pgd[0]} ${sasurb} ${num} ${pgd[1]}^n}=${u0}$<br><br>
    et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\underbrace{${u0} \\times \\left( ${sasurb} ${num}\\right)^n ${scsurd} ${num2}}_{u_n}}= ${u0} ${scsurd} ${num2} = ${e} $`}
    if (k==2 && denom==1 && denom2!=1) {return `$q=1$ donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left( ${sasurb} ${num} \\right)^n}=1$ et donc $\\displaystyle{\\lim_{x\\to +\\infty} ${u0} \\times ${pgd[0]} ${sasurb} ${num} ${pgd[1]}^n}=${u0}$<br><br>
    et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\underbrace{${u0} \\times \\left( ${sasurb} ${num} \\right)^n ${scsurd} \\dfrac{${num2}}{${denom2}}}_{u_n}}= ${u0} ${scsurd} \\dfrac{${num2}}{${denom2}} = ${sefrac} \\dfrac{${nume}}{${denome}} $`}
    if (k==3 && denom==1 && denom2==1 && u0<0) {return `$${num}>1$ donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left( ${sasurb} ${num} \\right)^n}=+\\infty$ et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(${u0} \\times \\left( ${sasurb} ${num} \\right)^n\\right)}=-\\infty$<br><br>
    et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(\\underbrace{${u0} \\times \\left( ${sasurb} ${num} \\right)^n ${scsurd} ${num2}}_{u_n}\\right)}= -\\infty $`}
    if (k==3 && denom==1 && denom2!=1 && u0<0) {return `$${num}>1$ donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left( ${sasurb} ${num} \\right)^n}=+\\infty$ et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(${u0} \\times \\left( ${sasurb} ${num} \\right)^n\\right)}=-\\infty$<br><br>
    et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(\\underbrace{${u0} \\times \\left( ${sasurb} ${num} \\right)^n ${scsurd} \\dfrac{${num2}}{${denom2}}}_{u_n}\\right)}= -\\infty $`}
    if (k==3 && denom!=1 && denom2==1 && u0<0) {return `$${sasurb}\\dfrac{${num}}{${denom}}>1$ donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n}=+\\infty$ et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(${u0} \\times \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n\\right)}=-\\infty$<br><br>
    et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(\\underbrace{${u0} \\times \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n ${scsurd} ${num2}}_{u_n}\\right)}= -\\infty $`}
    if (k==3 && denom!=1 && denom2!=1 && u0<0) {return `$${sasurb}\\dfrac{${num}}{${denom}}>1$ donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n}=+\\infty$ et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(${u0} \\times \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n\\right)}=-\\infty$<br><br>
    et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(\\underbrace{${u0} \\times \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n ${scsurd} \\dfrac{${num2}}{${denom2}}}_{u_n}\\right)}= -\\infty $`}
    if (k==3 && denom==1 && denom2==1 && u0>0) {return `$${num}>1$ donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left( ${sasurb} ${num} \\right)^n}=+\\infty$ et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(${u0} \\times \\left( ${sasurb} ${num} \\right)^n\\right)}=+\\infty$<br><br>
    et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(\\underbrace{${u0} \\times \\left( ${sasurb} ${num} \\right)^n ${scsurd} ${num2}}_{u_n}\\right)}= +\\infty $`}
    if (k==3 && denom==1 && denom2!=1 && u0>0) {return `$${num}>1$ donc $\\displaystyle{\\lim_{x\\to +\\infty}\\left( ${sasurb} ${num} \\right)^n}=+\\infty$ et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(${u0} \\times \\left( ${sasurb} ${num} \\right)^n\\right)}=+\\infty$<br>v
    et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(\\underbrace{${u0} \\times\\left( ${sasurb} ${num} \\right)^n ${scsurd} \\dfrac{${num2}}{${denom2}}}_{u_n}\\right)}= +\\infty $`}
    if (k==3 && denom!=1 && denom2==1 && u0>0) {return `$${sasurb}\\dfrac{${num}}{${denom}}>1$ donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n}=+\\infty$ et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(${u0} \\times \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n\\right)}=+\\infty$<br><br>
    et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(\\underbrace{${u0} \\times \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n ${scsurd} ${num2}}_{u_n}\\right)}= +\\infty $`}
    if (k==3 && denom!=1 && denom2!=1 && u0>0) {return `$${sasurb}\\dfrac{${num}}{${denom}}>1$ donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left( ${sasurb} \\dfrac{${num}}{${denom}}\\right)^n}=+\\infty$ et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(${u0} \\times \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n\\right)}=+\\infty$<br><br>
    et donc $\\displaystyle{\\lim_{x\\to +\\infty} \\left(\\underbrace{${u0} \\times \\left( ${sasurb} \\dfrac{${num}}{${denom}} \\right)^n ${scsurd} \\dfrac{${num2}}{${denom2}}}_{u_n}\\right)}= +\\infty $`}
}

function soluce(k,u0,denom,num2,denom2,scsurdrep,e,nume,denome) {
    if (k==0 && denom==1) {return `La suite $(u_n)$ n'a pas de limite.`}
    if (k==0 && denom!=1) {return `La suite $(u_n)$ n'a pas de limite.`}
    if (k==1 && denom==1 && denom2==1) {return `$\\displaystyle{\\lim_{x\\to +\\infty} u_n}= ${scsurdrep} ${num2} $`}
    if (k==1 && denom!=1 && denom2==1) {return `$\\displaystyle{\\lim_{x\\to +\\infty} u_n}= ${scsurdrep} ${num2} $`}
    if (k==1 && denom==1 && denom2!=1) {return `$\\displaystyle{\\lim_{x\\to +\\infty} u_n}= ${scsurdrep} \\dfrac{${num2}}{${denom2}} $`}
    if (k==1 && denom!=1 && denom2!=1) {return `$\\displaystyle{\\lim_{x\\to +\\infty} u_n}= ${scsurdrep} \\dfrac{${num2}}{${denom2}} $`}
    if (k==2 && denom==1 && denom2==1) {return `$\\displaystyle{\\lim_{x\\to +\\infty} u_n}= ${e} $`}
    if (k==2 && denom==1 && denom2!=1) {return `$\\displaystyle{\\lim_{x\\to +\\infty} u_n}= ${sefrac} \\dfrac{${nume}}{${denome}}$`}
    if (k==3 && denom==1 && denom2!=1 && u0<0) {return `$\\displaystyle{\\lim_{x\\to +\\infty} u_n}= -\\infty $`}
    if (k==3 && denom==1 && denom2==1 && u0<0) {return `$\\displaystyle{\\lim_{x\\to +\\infty} u_n}= -\\infty $`}
    if (k==3 && denom!=1 && denom2==1 && u0<0) {return `$\\displaystyle{\\lim_{x\\to +\\infty} u_n}= -\\infty $`}
    if (k==3 && denom!=1 && denom2!=1 && u0<0) {return `$\\displaystyle{\\lim_{x\\to +\\infty} u_n}= -\\infty $`}
    if (k==3 && denom==1 && denom2==1 && u0>0) {return `$\\displaystyle{\\lim_{x\\to +\\infty} u_n}= +\\infty $`}
    if (k==3 && denom==1 && denom2!=1 && u0>0) {return `$\\displaystyle{\\lim_{x\\to +\\infty} u_n}= +\\infty $`}
    if (k==3 && denom!=1 && denom2==1 && u0>0) {return `$\\displaystyle{\\lim_{x\\to +\\infty} u_n}= +\\infty $`}
    if (k==3 && denom!=1 && denom2!=1 && u0>0) {return `$\\displaystyle{\\lim_{x\\to +\\infty} u_n}= +\\infty $`}
}

function test_réponse(a,b,c) {
    let test;
    let div=a/b;
    if (div==c) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

let a = nbreouoppose(nbrealéa(1,10));
let b = nbrealéa(2,10);
let adivb = a/b;
let u0 = nbreouoppose(nbrealéa(1,10));
let asurb = simplifierfraction(a,b);
let asurbsimp = fracsimp(asurb[0],asurb[1]);
let pgda = parenthesegd(a);
let sasurb = rienmoins(a);
let c = nbreouoppose(nbrealéa(1,10));
let d = nbrealéa(2,10);
let csurd = simplifierfraction(c,d);
let csurdsimp = fracsimp(csurd[0],csurd[1]);
let scsurd = plusmoins(c);
let csurdrep = rienmoins(c);
let k = cas(adivb);
let e = u0+c/d;
let efrac = simplifierfraction(u0*d+c,d);
let efracsimp = fracsimp(efrac[0],efrac[1]);
let sefrac = rienmoins(e);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


enonce.innerHTML = num1(u0,asurbsimp[0],asurbsimp[1],pgda,sasurb,csurdsimp[0],csurdsimp[1],scsurd);
solution.innerHTML = soluce(k,u0,asurbsimp[1],csurdsimp[0],csurdsimp[1],csurdrep,e,efracsimp[0],efracsimp[1]);
correctiond.innerHTML = correctionsd(k,u0,asurbsimp[0],asurbsimp[1],pgda,sasurb,csurdsimp[0],csurdsimp[1],scsurd,csurdrep,e,sefrac,efracsimp[0],efracsimp[1]);

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