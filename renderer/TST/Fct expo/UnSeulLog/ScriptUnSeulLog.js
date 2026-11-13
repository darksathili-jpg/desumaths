function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }


function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
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

function unoupasun(a) {
    let rep;
    if (a==1) {rep=``;} else {
        if (a==-1) {rep=`-`;} else {rep=`${a}`;}}
    return rep;
}

function valabs(a) {
    let rep;
    if (a>0) {rep=a;} else {rep=-a;}
    return rep;
}

function arrondi(a,n) {
    let rep = avecVirgule(Math.round(a*10**n)/10**n);
    return rep;
  }

function sommedec(a,b) {
    let c=a+b;
    let rep=arrondi(c,1);
    return rep;
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }


function simply(num,denom) {
    let rep;
    if (denom==1) {rep='='+num;} else {rep='';}
    return rep;
}

function parenthesesgd(a) {
    let rep;
    let parg;
    let pard;
    if (a<0) {parg='(';pard=')';} else {parg='';pard='';}
    return rep=[parg,pard];
  }

function cas(num,denom) {
    let rep;
    if (denom==1) {rep=1;} else {rep=0;}
    return rep;
}

function signefrac(num,denom) {
    let rep;
    if (num>0 && denom>0) {rep='';}
    if (num>0 && denom<0) {rep='-';}
    if (num<0 && denom>0) {rep='-';}
    if (num<0 && denom<0) {rep='';}
    return rep;
}

function fracsimp(num,denom) {
    let rep=[num,denom];
    if (num<0 && denom<0) {rep=[-num,-denom];}
    if (num>0 && denom<0) {rep=[num,-denom];}
    if (num<0 && denom>0) {rep=[-num,denom];}
    return rep; 
}

function solsimpfin(num,denom) {
    let rep;
    let rep1;
    let signe = signefrac(num,denom);
    if (num==0) {signe=``;};
    let frac1 = simplifierfraction(num,denom);
    let frac2 = fracsimp(frac1[0],frac1[1]);
    if (frac2[1]==1) {rep1=[signe,frac2[0]];} else {rep1=[signe,frac2[0],frac2[1]];}
    if (num==frac2[0] && denom==frac2[1] && frac2[1]!=1) {rep=``;}  else {
    if (rep1.length==2) {rep=`=\\log\\left(${rep1[0]}${rep1[1]}\\right)`;} else {rep=`=${rep1[0]}\\log\\left(\\dfrac{${rep1[1]}}{${rep1[2]}}\\right)`;}
    }
    return rep;
}

let a = nbrealéa(2,9);
let b = nbrealéa(2,9);
let c = nbrealéa(2,9);
let ab = a*b;
let sol1 = solsimpfin(ab,c);
let p1 = nbrealéa(2,5);
let p2 = nbrealéa(2,5);
let p3 = nbrealéa(2,5);
let num2 = a**p1*b**p2;
let denom2 = c**p3;
let sol2 = solsimpfin(num2,denom2);

let k = nbrealéa(0,2);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');
var Test;

let listeenonces = [`Écrire le nombre suivant en utilisant un seul logarithme : $A=\\log(${a})+\\log(${b})-\\log(${c})$`,
    `Écrire le nombre suivant en utilisant un seul logarithme : $A=${p1}\\log(${a})+${p2}\\log(${b})-${p3}\\log(${c})$`
];

let listesolutions = [`$A=\\log\\left(\\dfrac{${ab}}{${c}}\\right)${sol1}$`,
    `$A=\\log\\left(\\dfrac{${num2}}{${denom2}}\\right)${sol2}$`
];

let listecorrections =[`$A=\\log(${a})+\\log(${b})-\\log(${c})=\\log\\left(${a}\\times ${b}\\right)-\\log(${c})=\\log\\left(\\dfrac{${a}\\times ${b}}{${c}}\\right)=\\log\\left(\\dfrac{${ab}}{${c}}\\right)${sol1}$`,
    `$A=${p1}\\log(${a})+${p2}\\log(${b})-${p3}\\log(${c})=\\log\\left(${a}^{${p1}}\\right)+\\log\\left(${b}^{${p2}}\\right)-\\log\\left(${c}^{${p3}}\\right)$ <br>
    $\\phantom{A}=\\log\\left(${a}^{${p1}}\\times ${b}^{${p2}}\\right)-\\log\\left(${c}^{${p3}}\\right)=\\log\\left(\\dfrac{${a}^{${p1}}\\times ${b}^{${p2}}}{${c}^{${p3}}}\\right)=\\log\\left(\\dfrac{${num2}}{${denom2}}\\right)${sol2}$`
    ];

enonce.innerHTML = listeenonces[1];
solution.innerHTML = listesolutions[1];
correctiond.innerHTML = listecorrections[1];

enonce.addEventListener("load", function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

correction.addEventListener('click', () => {
    correctiond.style.display = "block";
    correctiond.innerHTML ;
})

solutions.addEventListener('click', () => {
    solution.style.display = "block";
    solution.innerHTML ;
})

recommencer.addEventListener('click', () => {
    location.reload();
})

accueil.addEventListener('click', () => {
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTaleTechno.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTSTExpos.html";
})
