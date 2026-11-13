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

function nbrediff(a) {
    let rep = nbrealéa(2,10);
    while (rep==a) {rep=nbrealéa(2,10);}
    return rep;
}

function valabs(a) {
    let rep;
    if (a<0) {rep=-a;} else {rep=a;}
    return rep;
}

let lettres1 = [`A`,`B`,`C`,`D`,`E`,`F`,`G`];
let lettres2 = [`H`,`I`,`J`,`K`,`L`,`M`,`N`];
let lettres3 = [`O`,`P`,`Q`,`R`,`S`,`T`,`U`];
let lettres4 = [`V`,`W`,`X`,`Y`,`Z`];
let k1q1 = nbrealéa(0,6);
let k2q1 = nbrealéa(0,6);
let k3q1 = nbrealéa(0,6);
let l1q1 = lettres1[k1q1];
let l2q1 = lettres2[k2q1];
let l3q1 = lettres3[k3q1];
let k1q2 = nbrealéa(0,6);
let k2q2 = nbrealéa(0,6);
let k3q2 = nbrealéa(0,6);
let l1q2 = lettres1[k1q2];
let l2q2 = lettres2[k2q2];
let l3q2 = lettres3[k3q2];
let k1q3 = nbrealéa(0,6);
let k2q3 = nbrealéa(0,6);
let k3q3 = nbrealéa(0,6);
let l1q3 = lettres1[k1q3];
let l2q3 = lettres2[k2q3];
let l3q3 = lettres3[k3q3];
let k1q4 = nbrealéa(0,6);
let k2q4 = nbrealéa(0,6);
let k3q4 = nbrealéa(0,6);
let k4q4 = nbrealéa(0,4);
let l1q4 = lettres1[k1q4];
let l2q4 = lettres2[k2q4];
let l3q4 = lettres3[k3q4];
let l4q4 = lettres4[k4q4];
let k1q5 = nbrealéa(0,6);
let k2q5 = nbrealéa(0,6);
let k3q5 = nbrealéa(0,6);
let l1q5 = lettres1[k1q5];
let l2q5 = lettres2[k2q5];
let l3q5 = lettres3[k3q5];



let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


let listenonces = [`Compléter les égalités suivantes à l'aide de la relation de Chasles :<br>
1) $\\overrightarrow{${l1q1}\\ldots}+\\overrightarrow{${l2q1}\\ldots}=\\overrightarrow{\\ldots ${l3q1}}$<br><br>
2) $\\overrightarrow{\\ldots ${l1q2}}+\\overrightarrow{\\ldots ${l2q2}}=\\overrightarrow{${l3q2}\\ldots}$<br><br>
3) $\\overrightarrow{${l1q3}\\ldots}-\\overrightarrow{\\ldots ${l2q3}}=\\overrightarrow{\\ldots ${l3q3}}$<br><br>
4) $\\overrightarrow{\\ldots\\phantom{I}\\ldots}+\\overrightarrow{${l1q4}\\ldots}+\\overrightarrow{${l2q4}\\ldots}=\\overrightarrow{${l3q4}${l4q4}}$<br><br>
5) $\\overrightarrow{\\ldots ${l1q5}}-\\overrightarrow{${l2q5}\\ldots}=\\overrightarrow{${l3q5}\\ldots}$<br><br>`]

let listesolutions = [`1) $\\overrightarrow{${l1q1}${l2q1}}+\\overrightarrow{${l2q1}${l3q1}}=\\overrightarrow{${l1q1}${l3q1}}$<br><br>
2) $\\overrightarrow{${l3q2}${l1q2}}+\\overrightarrow{${l1q2}${l2q2}}=\\overrightarrow{${l3q2}${l2q2}}$<br><br>
3) $\\overrightarrow{${l1q3}${l2q3}}-\\overrightarrow{${l3q3}${l2q3}}=\\overrightarrow{${l1q3}${l3q3}}$<br><br>
4) $\\overrightarrow{${l3q4}${l1q4}}+\\overrightarrow{${l1q4}${l2q4}}+\\overrightarrow{${l2q4}${l4q4}}=\\overrightarrow{${l3q4}${l4q4}}$<br><br>
5) $\\overrightarrow{${l3q5}${l1q5}}-\\overrightarrow{${l2q5}${l1q5}}=\\overrightarrow{${l3q5}${l2q5}}$`]

let listeCorrections =[`1) $\\overrightarrow{${l1q1}${l2q1}}+\\overrightarrow{${l2q1}${l3q1}}=\\overrightarrow{${l1q1}${l3q1}}$<br><br>
2) $\\overrightarrow{${l3q2}${l1q2}}+\\overrightarrow{${l1q2}${l2q2}}=\\overrightarrow{${l3q2}${l2q2}}$<br><br>
3) $\\overrightarrow{${l1q3}\\ldots}-\\overrightarrow{\\ldots ${l2q3}}=\\overrightarrow{\\ldots ${l3q3}}$ donc <br><br>
$\\phantom{3) }\\overrightarrow{${l1q3}\\ldots}+\\overrightarrow{${l2q3}\\ldots }=\\overrightarrow{\\ldots ${l3q3}}$ donc <br><br>
$\\phantom{3) }\\overrightarrow{${l1q3}${l2q3}}+\\overrightarrow{${l2q3}${l3q3}}=\\overrightarrow{${l1q3}${l3q3}}$ donc <br><br>
$\\phantom{3) }\\overrightarrow{${l1q3}${l2q3}}-\\overrightarrow{${l3q3}${l2q3}}=\\overrightarrow{${l1q3}${l3q3}}$<br><br>
4) $\\overrightarrow{${l3q4}${l1q4}}+\\overrightarrow{${l1q4}${l2q4}}+\\overrightarrow{${l2q4}${l4q4}}=\\overrightarrow{${l3q4}${l4q4}}$<br><br>
5) $\\overrightarrow{\\ldots ${l1q5}}-\\overrightarrow{${l2q5}\\ldots}=\\overrightarrow{${l3q5}\\ldots}$ donc<br><br>
$\\phantom{5) }\\overrightarrow{\\ldots ${l1q5}}+\\overrightarrow{\\ldots ${l2q5}}=\\overrightarrow{${l3q5}\\ldots}$ donc<br><br>
$\\phantom{5) }\\overrightarrow{${l3q5}${l1q5}}+\\overrightarrow{${l1q5}${l2q5}}=\\overrightarrow{${l3q5}${l2q5}}$ donc<br><br>
$\\phantom{5) }\\overrightarrow{${l3q5}${l1q5}}-\\overrightarrow{${l2q5}${l1q5}}=\\overrightarrow{${l3q5}${l2q5}}$`]

enonce.innerHTML = listenonces[0];
solution.innerHTML = listesolutions[0];
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
    location.href = "../../../Menus/MenuSecondeVecteurs.html";
})