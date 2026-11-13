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


function facteurspremiers(n) {
    let rep1 = [];
    let liste = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
    let i = 0;
    while (i<liste.length) {
        while (Math.trunc(n/liste[i])==n/liste[i]) {rep1.push(liste[i]);n=n/liste[i]};
        i=i+1;
    }
    return rep1;
}

function facteurs(n) {
    let rep=[];
    let i = 1;
    while (i<=n) {
        if (Math.trunc(n/i)==n/i) {rep.push(n/i);}
        i=i+1;
    }
    return rep;
}

function gcd(a,b){
    return b ? gcd(b, a%b) : a;
}

function decompfacteurs(num) {
    let rep1 = [];
    let liste = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
    let i = 0;
    while (i<liste.length) {
        while (Math.trunc(num/liste[i])==num/liste[i]) {rep1.push(liste[i]);num=num/liste[i]};
        i=i+1;
    }
    let j = 1;
    let rep=`${rep1[0]}`;
    while (j<rep1.length) {rep=rep+`~\\times ${rep1[j]}`;j=j+1;}
    return rep;
}


function encouleurbleu(num,denom) {
    let rep1;
    i=0;
    while (i<num.length) {
        j=0;
        while (j<denom.length) {
            if (num[i]==denom[j]) {rep1=num[i];}
            j=j+1;
        }
        i=i+1;
    }
    return rep1;
}

function facteurbleuhaut(num,denom) {
    let rep1 = [];
    let liste = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
    let i = 0;
    while (i<liste.length) {
        while (Math.trunc(num/liste[i])==num/liste[i]) {rep1.push(liste[i]);num=num/liste[i]};
        i=i+1;
    }
    let rep2 = [];
    let j = 0;
    while (j<liste.length) {
        while (Math.trunc(denom/liste[j])==denom/liste[j]) {rep2.push(liste[j]);denom=denom/liste[j]};
        j=j+1;
    }
    let rep3 = [];
    for (let l=0;l<rep1.length;l++) {
        for (let m=0;m<rep2.length;m++) {
            if (rep1[l]==rep2[m]) {rep3.push(rep1[l]);rep1.splice(l+1,1);rep2.splice(m+1,1);}
        }
    }
    let n = 1;
    let p = 0;
    let rep;
    if (rep1[0]==rep3[0]) {rep=`\\color{blue}{${rep1[0]}}`;rep3.splice(1,1);} else {rep=`${rep1[0]}`;}
    while (n<rep1.length) {
        if (rep1[n]==rep3[p]) {rep=rep+`~\\times\\color{blue}{${rep1[n]}}`;rep3.splice(1,1);} else {rep=rep+`~\\times ${rep1[n]}`;p=p+1;}
        n=n+1;
    }
    return rep;
}

function facteurbleubas(num,denom) {
    let rep1 = [];
    let liste = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
    let i = 0;
    while (i<liste.length) {
        while (Math.trunc(num/liste[i])==num/liste[i]) {rep1.push(liste[i]);num=num/liste[i]};
        i=i+1;
    }
    let rep2 = [];
    let j = 0;
    while (j<liste.length) {
        while (Math.trunc(denom/liste[j])==denom/liste[j]) {rep2.push(liste[j]);denom=denom/liste[j]};
        j=j+1;
    }
    let rep3 = [];
    for (let l=0;l<rep1.length;l++) {
        for (let m=0;m<rep2.length;m++) {
            if (rep1[l]==rep2[m]) {rep3.push(rep1[l]);rep1.splice(l+1,1);rep2.splice(m+1,1);}
        }
    }
    let n = 1;
    let p = 0;
    let rep;
    if (rep2[0]==rep3[0]) {rep=`\\color{blue}{${rep2[0]}}`;rep3.splice(1,1);} else {rep=`${rep2[0]}`;}
    while (n<rep2.length) {
        if (rep2[n]==rep3[p]) {rep=rep+`~\\times\\color{blue}{${rep2[n]}}`;rep3.splice(1,1);} else {rep=rep+`~\\times ${rep2[n]}`;p=p+1;}
        n=n+1;
    }
    return rep;
}

function facteurscommuns(facta,factb) {
    let rep = [];
    for (let i=0;i<facta.length;i++) {
        for (let j=0;j<factb.length;j++) {
            if (facta[i]==factb[j]) {rep.push(facta[i]);facta.splice(i+1,1);factb.splice(j+1,1);}
        }
    }
    return rep;
}

let a = nbrealéa(2,100);
let b = nbrealéa(2,100);
let facta = facteurspremiers(a);
let factb = facteurspremiers(b);
let prodnum = decompfacteurs(a);
let proddenom = decompfacteurs(b);
let factcom = facteurscommuns(facta,factb);
let numbleu = facteurbleuhaut(a,b);
let denombleu = facteurbleubas(a,b);




let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');

let listenonces = [`Simplifier au maximum la fraction suivante : $\\dfrac{${a}}{${b}}$.`];

let listeCorrections = [`$\\dfrac{${a}}{${b}}=\\dfrac{${facta}}{${factb}}=\\dfrac{${prodnum}}{${proddenom}}=\\dfrac{${numbleu}}{${denombleu}} $<br>
facteurs communs ${factcom} facteurs num ${facta} facteurs denom ${factb}`];

let listeSolutions = [`$$`];

enonce.innerHTML = listenonces[0];
solution.innerHTML = listeSolutions[0];
correctiond.innerHTML = listeCorrections[0];


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