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

function tirages(listex) {
    let tirage;
    let tirage1 = `\\tau~(${listex[0]}~;${listex[1]})`;
    let tirage2 = `\\tau~(${listex[0]}~;${listex[2]})`;
    let tirage3 = `\\tau~(${listex[0]}~;${listex[3]})`;
    let tirage4 = `\\tau~(${listex[1]}~;${listex[2]})`;
    let tirage5 = `\\tau~(${listex[1]}~;${listex[3]})`;
    let tirage6 = `\\tau~(${listex[2]}~;${listex[3]})`;
    let tirage7 = `\\tau~(${listex[1]}~;${listex[0]})`;
    let tirage8 = `\\tau~(${listex[2]}~;${listex[0]})`;
    let tirage9 = `\\tau~(${listex[3]}~;${listex[0]})`;
    let tirage10 = `\\tau~(${listex[2]}~;${listex[1]})`;
    let tirage11 = `\\tau~(${listex[3]}~;${listex[1]})`;
    let tirage12 = `\\tau~(${listex[3]}~;${listex[2]})`;
    return tirage = [tirage1,tirage2,tirage3,tirage4,tirage5,tirage6,tirage7,tirage8,tirage9,tirage10,tirage11,tirage12];
}

function valeursdex(choix) {
    let rep;
    let a;
    let b;
    if (choix==0) {a=0;b=1;}
    if (choix==1) {a=0;b=2;}
    if (choix==2) {a=0;b=3;}
    if (choix==3) {a=1;b=2;}
    if (choix==4) {a=1;b=3;}
    if (choix==5) {a=2;b=3;}
    if (choix==6) {a=1;b=0;}
    if (choix==7) {a=2;b=0;}
    if (choix==8) {a=3;b=0;}
    if (choix==9) {a=2;b=1;}
    if (choix==10) {a=3;b=1;}
    if (choix==11) {a=3;b=2;}
    return rep=[a,b];
}

let a = nbrealéa(-20,20);
let atab = document.getElementById("A").innerHTML;
A.innerHTML = `$${a}$`;
let b = a+nbrealéa(1,3);
let btab = document.getElementById("B").innerHTML;
B.innerHTML = `$${b}$`;
let c = b+nbrealéa(1,4);
let ctab = document.getElementById("C").innerHTML;
C.innerHTML = `$${c}$`;
let d = c+nbrealéa(1,5);
let dtab = document.getElementById("D").innerHTML;
D.innerHTML = `$${d}$`;
let e = nbrealéa(-20,20);
let etab = document.getElementById("E").innerHTML;
E.innerHTML = `$${e}$`;
let f = e+nbrealéa(1,3);
let ftab = document.getElementById("F").innerHTML;
F.innerHTML = `$${f}$`;
let g = f+nbrealéa(1,4);
let gtab = document.getElementById("G").innerHTML;
G.innerHTML = `$${g}$`;
let h = g+nbrealéa(1,5);
let htab = document.getElementById("H").innerHTML;
H.innerHTML = `$${h}$`;
let listex = [a,b,c,d];
let listefx = [e,f,g,h];
let c1 = nbrealéa(0,3);
let c2 = c1+nbrealéa(1,3);
let c3 = c2+nbrealéa(1,3);
let c4 = c3+nbrealéa(1,2);
let choix = tirages(listex);
let choix1 = choix[c1];
let choix2 = choix[c2];
let choix3 = choix[c3];
let choix4 = choix[c4];
let x1x2 = valeursdex(c1);
let x1 = listex[x1x2[0]];
let px1 = parenthesegd(x1);
let x2 = listex[x1x2[1]];
let fx1 = listefx[x1x2[0]];
let pfx1 = parenthesegd(fx1);
let fx2 = listefx[x1x2[1]];
let fx2fx1 = fx2-fx1;
let x2x1 = x2-x1;
let taux1 = simplifierfraction(fx2fx1,x2x1);
let taux1s = fracsimp(taux1[0],taux1[1]);
let staux1s = rienmoins(fx2fx1/x2x1);
let simplyt1 = simply(taux1[0],taux1[1]);
let x3x4 = valeursdex(c2);
let x3 = listex[x3x4[0]];
let px3 = parenthesegd(x3);
let x4 = listex[x3x4[1]];
let fx3 = listefx[x3x4[0]];
let pfx3 = parenthesegd(fx3);
let fx4 = listefx[x3x4[1]];
let fx4fx3 = fx4-fx3;
let x4x3 = x4-x3;
let taux2 = simplifierfraction(fx4fx3,x4x3);
let taux2s = fracsimp(taux2[0],taux2[1]);
let staux2s = rienmoins(fx4fx3/x4x3);
let simplyt2 = simply(taux2[0],taux2[1]);
let x5x6 = valeursdex(c3);
let x5 = listex[x5x6[0]];
let px5 = parenthesegd(x5);
let x6 = listex[x5x6[1]];
let fx5 = listefx[x5x6[0]];
let pfx5 = parenthesegd(fx5);
let fx6 = listefx[x5x6[1]];
let fx6fx5 = fx6-fx5;
let x6x5 = x6-x5;
let taux3 = simplifierfraction(fx6fx5,x6x5);
let taux3s = fracsimp(taux3[0],taux3[1]);
let staux3s = rienmoins(fx6fx5/x6x5);
let simplyt3 = simply(taux3[0],taux3[1]);
let x7x8 = valeursdex(c4);
let x7 = listex[x7x8[0]];
let px7 = parenthesegd(x7);
let x8 = listex[x7x8[1]];
let fx7 = listefx[x7x8[0]];
let pfx7 = parenthesegd(fx7);
let fx8 = listefx[x7x8[1]];
let fx8fx7 = fx8-fx7;
let x8x7 = x8-x7;
let taux4 = simplifierfraction(fx8fx7,x8x7);
let taux4s = fracsimp(taux4[0],taux4[1]);
let staux4s = rienmoins(fx8fx7/x8x7);
let simplyt4 = simply(taux4[0],taux4[1]);


let enonce = document.getElementById('enonce');
let enonce2 = document.getElementById('enonce2');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solution = document.getElementById('solution');
var solutions = document.getElementById('solutions');

enonce.innerHTML = `On donne le tableau de valeurs d'une fonction $f$ :<br><br>`;
enonce2.innerHTML = `Calculer les taux de variation suivants :<br>
1) $${choix1}$<br>
2) $${choix2}$<br>
3) $${choix3}$<br>
4) $${choix4}$<br>`
solution.innerHTML = `1) $${choix1}=${staux1s}\\dfrac{${taux1s[0]}}{${taux1s[1]}}${simplyt1}$ (simplifiée)<br><br>
2) $${choix2}=${staux2s}\\dfrac{${taux2s[0]}}{${taux2s[1]}}${simplyt2}$ (simplifiée)<br><br>
3) $${choix3}=${staux3s}\\dfrac{${taux3s[0]}}{${taux3s[1]}}${simplyt3}$ (simplifiée)<br><br>
4) $${choix4}=${staux4s}\\dfrac{${taux4s[0]}}{${taux4s[1]}}${simplyt4}$ (simplifiée)`;
correctiond.innerHTML = `1) $${choix1}=\\dfrac{f(${x2})-f(${x1})}{${x2}-${px1[0]} ${x1} ${px1[1]}}=\\dfrac{${fx2}-${pfx1[0]}${fx1}${pfx1[1]}}{${x2}-${px1[0]} ${x1} ${px1[1]}}=\\dfrac{${fx2fx1}}{${x2x1}}=${staux1s}\\dfrac{${taux1s[0]}}{${taux1s[1]}}${simplyt1}$ (simplifiée)<br><br>
2) $${choix2}=\\dfrac{f(${x4})-f(${x3})}{${x4}-${px3[0]} ${x3} ${px3[1]}}=\\dfrac{${fx4}-${pfx3[0]}${fx3}${pfx3[1]}}{${x4}-${px3[0]} ${x3} ${px3[1]}}=\\dfrac{${fx4fx3}}{${x4x3}}=${staux2s}\\dfrac{${taux2s[0]}}{${taux2s[1]}}${simplyt2}$ (simplifiée)<br><br>
3) $${choix3}=\\dfrac{f(${x6})-f(${x5})}{${x6}-${px5[0]} ${x5} ${px5[1]}}=\\dfrac{${fx6}-${pfx5[0]}${fx5}${pfx5[1]}}{${x6}-${px5[0]} ${x5} ${px5[1]}}=\\dfrac{${fx6fx5}}{${x6x5}}=${staux3s}\\dfrac{${taux3s[0]}}{${taux3s[1]}}${simplyt3}$ (simplifiée)<br><br>
4) $${choix4}=\\dfrac{f(${x8})-f(${x7})}{${x8}-${px7[0]} ${x7} ${px7[1]}}=\\dfrac{${fx8}-${pfx7[0]}${fx7}${pfx7[1]}}{${x8}-${px7[0]} ${x7} ${px7[1]}}=\\dfrac{${fx8fx7}}{${x8x7}}=${staux4s}\\dfrac{${taux4s[0]}}{${taux4s[1]}}${simplyt4}$ (simplifiée)`;



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
    location.href = "../../../../Menus/Menu1STfonctions.html";
})

