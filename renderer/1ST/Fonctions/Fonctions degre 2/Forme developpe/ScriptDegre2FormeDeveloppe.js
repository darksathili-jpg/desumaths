// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (incluse).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function plusmoins() {
    let choix;
    let result;
    choix = nbrealéa(1,2);
    if (choix==1) {result='+';}
    else {result='-';}
    return result;
}

function sign1() {
    let sig1;
    sig1 = plusmoins();
    if (sig1=='+') {sig1='';}
    else {sig1='-';}
    return sig1;
}

function sign3() {
    let sig3;
    sig3 = plusmoins();
    if (sig3=='+') {sig3='';}
    else {sig3='-';}
    return sig3;
}

function abcd() {
    let abdc;
    let a1;
    let b1;
    let c1;
    let d1;
    if (signe1=='') {a1=a;} else {a1=-a;}
    if (signe2=='+') {b1=b;} else {b1=-b;}
    if (signe3=='') {c1=c;} else {c1=-c;}
    if (signe4=='+') {d1=d;} else {d1=-d;}
    abdc=a1*d1+b1*c1;
    return abdc;
}

function repsign1(a,b) {
    let repsigne1;
    if (a==b) {repsigne1='';}
    else {repsigne1='-';}
    return repsigne1; 
}

function repsign (a,b) {
    let repsign;
    if (a=='') {a='+';}
    if (b=='') {b='+';}
    if (a==b) {repsign='+';} else {repsign='-';}
    return repsign;
}

function repsign2() {
    let repsigne2;
    if (coef2>=0) {repsigne2='+';} else {repsigne2='';}
    return repsigne2;
}

function rep_sig2() {
    let rep_sig2;
    if (coef2>=0) {rep_sig2='+';} else {rep_sig2='-';}
    return rep_sig2;
}

function repsign3(a,b) {
    let repsigne3;
    if (a==b) {repsigne3='+';}
    else {repsigne3='-';}
    return repsigne3; 
}

function plus_moins(a) {
    let pm;
    if (a=='') {pm='+';} else {pm='-';}
    return pm;
}

function p_m(a) {
    let p_m;
    if (a=='+') {p_m='';} else {p_m='-';}
    return p_m;
}

function parg(a) {
    let parg;
    if (a=='+') {parg='';} else {parg='(';}
    return parg;
}

function pard(a) {
    let pard;
    if (a=='+') {pard='';} else {pard=')';}
    return pard;
}

function terme1(a,b) {
    let a1;
    if (a=='') {a1=b;} else {a1=-b;}
    return a1;
}

function terme2(a,b) {
    let a1;
    if (a=='+') {a1=b;} else {a1=-b;}
    return a1;
}

function positignegatif(a) {
    let rep;
    let choix=nbrealéa(1,2);
    if (choix==1) {rep=a;} else {rep=-a};
    return rep;
}

function posneg(signe,a) {
    let rep;
    if (signe=='+') {rep=a;} else {rep=-a;}
    return rep; 
}

function posneg1(signe,a) {
    let rep;
    if (signe=='-') {rep=-a;} else {rep=a;}
    return rep; 
}

function signepm(a) {
    let rep;
    if (a>=0) {rep='+';} else {rep=''};
    return rep;
}

function test_réponse(e,f,g,h,i,j,k,l,m,n) {
    let test;
    if (e==j && f==k && g==l && h==m && i==n) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;

}

let a = nbrealéa(1,9);
let b = nbrealéa(1,9);
let c = nbrealéa(1,9);
let d = nbrealéa(1,9);
let signe1 = sign1();
let signe2 = plusmoins();
let signe3 = sign3();
let signe4 = plusmoins();
let coef1 = a*c;
let coef2 = abcd();
let coef3 = b*d;
let repsig1 = repsign1(signe1,signe3);
let repsig2 = repsign2();
let rep_sig_2 = rep_sig2();
let repsig3 = repsign3(signe2,signe4);
let pm1 = plus_moins(signe1);
let pm2 = p_m(signe2);
let pm3 = plus_moins(signe3);
let pm_3 = p_m(pm3);
let pm4 = p_m(signe4);
let reps2 = repsign(signe1,signe4);
let reps3 = repsign(signe2,signe3);
let ad = a*d;
let bc = b*c;
let parg1 = parg(pm3);
let pard1 = pard(pm3);
let parg2 = parg(signe4);
let pard2 = pard(signe4);
let a1 = terme1(repsig1,coef1);
let a2 = terme2(repsig2,coef2);
let a3 = terme2(repsig3,coef3);
let coef = positignegatif(nbrealéa(1,9));
let coef_1 = posneg1(repsig1,coef1);
let coef_2 = posneg1(repsig2,coef2);
let coef_3 = posneg(repsig3,coef3);
let repcoefx2 = coef*coef_1;
let repcoefx = coef*coef_2;
let repcoefreel = coef*coef_3;
let srepcoefx = signepm(repcoefx);
let srepcoefreel = signepm(repcoefreel);

let enonce = document.getElementById('enonce');
let solution = document.getElementById('solution');
let correctiond = document.getElementById('correctiond');
var solutions = document.getElementById('solutions');
var correction = document.getElementById('correction');
var recommencer = document.getElementById('recommencer');
var accueil = document.getElementById('accueil');
var Test;
var test = document.getElementById('test');

enonce.innerHTML = `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=${coef}\\left(${signe1} ~ ${a}x ${signe2} ${b}\\right) \\left(${signe3} ~ ${c}x ${signe4} ${d}\\right)$<br>
Déterminer la forme développée de $f$.`;
solution.innerHTML = `Solution : $f(x) = ${repcoefx2}x^2 ${srepcoefx} ${repcoefx}x ${srepcoefreel} ${repcoefreel}$`;
correctiond.innerHTML = `$${coef}\\left(${signe1} ~ ${a}x ${signe2} ${b}\\right) \\left(${signe3} ~ ${c}x ${signe4} ${d}\\right) =${coef}\\times\\left( ${signe1} ~ ${a}x ~ \\times ${parg1} ${pm_3} ~ ${c}x ${pard1} 
  ${pm1} ${a}x ~ \\times ${parg2} ${pm4} ${d} ${pard2} ${signe2} ${b} ~ \\times ${parg1} ${pm_3} ${c}x ${pard1} ${signe2} ${b}~\\times ${parg2} ${pm4} ${d} ${pard2}\\right)$ </br>
  $\\phantom{${coef}\\left(${signe1} ~ ${a}x ${signe2} ${b}\\right) \\left(${signe3} ~ ${c}x ${signe4} ${d}\\right)} = ${coef}\\times\\left(${repsig1} ~ ${coef1}x^2 ${reps2} ${ad}x ${reps3} ${bc}x ${repsig3} ${coef3}\\right)$ </br>
  $\\phantom{${coef}\\left(${signe1} ~ ${a}x ${signe2} ${b}\\right) \\left(${signe3} ~ ${c}x ${signe4} ${d}\\right)} = ${coef}\\times\\left(${repsig1} ~ ${coef1}x^2 ${repsig2} ${coef2}x  ${repsig3} ${coef3}\\right)$<br>
  $\\phantom{${coef}\\left(${signe1} ~ ${a}x ${signe2} ${b}\\right) \\left(${signe3} ~ ${c}x ${signe4} ${d}\\right)} = ${repcoefx2}x^2 ${srepcoefx} ${repcoefx}x ${srepcoefreel} ${repcoefreel} $`;

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
    location.reload();
})

accueil.addEventListener('click', () => {
    location.href = "../../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../../Menus/Menu1ST.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../Menus/Menu1STfonctionsdegre2.html";
})

