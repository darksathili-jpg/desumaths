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

function solsimplifiee(num,denom) {
    let rep;
    if (denom==1) {rep=`= ${num}`;}
    else {rep='';}
    return rep;
}

function nbresdiff(a) {
    let rep = nbrealéa(-10,10);
    while (rep==a) {rep=nbrealéa(-10,10);}
    return rep;
}

function nbrediff(a) {
    let rep = nbrealéa(-15,15);
    while (rep==a) {rep=nbrealéa(-15,15);}
    return rep;
}

function nbdiff(a) {
    let rep = nbrealéa(1,15);
    while (rep==a) {rep=nbrealéa(1,15);}
    return rep;
}

function diffvi(a) {
    let rep = nbrealéa(-10,10);
    while (rep==a) {rep=nbrealéa(-10,10);}
    return rep;
}

function diffvix1f(x1,vi) {
    let rep = nbrealéa(-10,10);
    while (rep==x1 || rep==vi) {rep=nbrealéa(-10,10);}
    return rep;
}

function denominateur(a,num) {
    let rep = nbrealéa(2,10);
    while (rep==num/a) {rep=nbrealéa(2,10);}
    return rep;
}

function ndiffaf(a) {
    let rep = nbreouoppose(nbrealéa(1,10));
    while (rep==a) {rep=nbreouoppose(nbrealéa(1,10));}
    return rep;
}

let a1 = nbreouoppose(nbrealéa(2,15));
let b1 = nbrealéa(-10,10);
let oppb1 = -b1;
let sb1 = rienplus(b1);
let soppb1 = rienplus(oppb1);
let im1 = nbrealéa(-10,10);
let pim1 = parenthesegd(im1);
let a1im1 = a1*im1;
let solim1 = a1*im1+b1;
let psolim1 = parenthesegd(solim1);
let ante1 = nbrealéa(-10,10);
let im2 = nbresdiff(im1);
let im3 = nbresdiff(im1);
let im4 = nbresdiff(im2);
let pim2 = parenthesegd(im2);
let a1im2 = a1*im2;
let solim2 = a1*im2+b1;
let diffsols = solim2-solim1;
let diffx = im2-im1;
let pim3 = parenthesegd(im3);
let pim4 = parenthesegd(im4);
let solim3 = a1*im3+b1;
let solim4 = a1*im4+b1;
let a1im3 = a1*im3;
let a1im4 = a1*im4;
let psolim3 = parenthesegd(solim3);
let diffsols2 = solim4-solim3;
let diffx2 = im4-im3;


let a11 = nbreouoppose(nbrealéa(1,15));
let sa11 = rienplus(a11);
let oppa11 = -a11;
let soppa11 = rienplus(oppa11);
let x1 = nbrealéa(-15,15);
let px1 = parenthesegd(x1);
let x1carre = x1**2;
let fx1 = x1carre+a11;
let pfx1 = parenthesegd(fx1);
let x11 = nbrealéa(1,15);
let b11 = x11**2+a11;
let x2 = nbrediff(x1);
let px2 = parenthesegd(x2);
let x2carre = x2**2;
let fx2 = x2carre+a11;
let fx2fx1 = fx2-fx1;
let x2x1 = x2-x1;
let t1 = fx2fx1/x2x1;
let x12 = nbdiff(x11);
let b12 = x12**2+a11;
let b11oppa11 = b11-a11;
let b12oppa11 = b12-a11;
let x3 = nbrediff(x1);
let x4 = nbrediff(x2);``
let x3carre = x3**2;
let fx3 = x3carre+a11;
let x4carre = x4**2;
let fx4 = x4carre+a11;
let px3 = parenthesegd(x3);
let px4 = parenthesegd(x4);
let pfx3 = parenthesegd(fx3);
let fx4fx3 = fx4-fx3;
let x4x3 = x4-x3;
let t2 = fx4fx3/x4x3;

let k=nbrealéa(0,1);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solution = document.getElementById('solution');
var solutions = document.getElementById('solutions');

let listeenonces = [`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=${a1}x ${sb1} ${b1}$.<br>
1) Calculer $\\tau~(${im1}~;${im2})$<br>
2) Calculer $\\tau~(${im3}~;${im4})$`,
`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=x^2 ${sa11} ${a11}.$<br>
1) Calculer $\\tau~(${x1}~;${x2})$<br>
2) Calculer $\\tau~(${x3}~;${x4})$`];

let listecorrections = [`1) $f(${im1})=${a1}\\times ${pim1[0]} ${im1} ${pim1[1]} ${sb1} ${b1} = ${a1im1} ${sb1} ${b1} = ${solim1}$<br>
$\\phantom{1) }f(${im2})=${a1}\\times ${pim2[0]} ${im2} ${pim2[1]} ${sb1} ${b1} = ${a1im2} ${sb1} ${b1} = ${solim2}$<br><br>
$\\phantom{1) }\\tau~(${im1}~;${im2})=\\dfrac{f(${im2})-f(${im1})}{${im2}-${pim1[0]}${im1}${pim1[0]}}=\\dfrac{${solim2}-${psolim1[0]}${solim1}${psolim1[1]}}{${im2}-${pim1[0]}${im1}${pim1[1]}}=\\dfrac{${diffsols}}{${diffx}}=${a1}$<br><br>
2) $f(${im3})=${a1}\\times ${pim3[0]} ${im3} ${pim3[1]} ${sb1} ${b1} = ${a1im3} ${sb1} ${b1} = ${solim3}$<br>
$\\phantom{1) }f(${im4})=${a1}\\times ${pim4[0]} ${im4} ${pim4[1]} ${sb1} ${b1} = ${a1im4} ${sb1} ${b1} = ${solim4}$<br><br>
$\\phantom{1) }\\tau~(${im3}~;${im4})=\\dfrac{f(${im4})-f(${im3})}{${im4}-${pim3[0]}${im3}${pim3[0]}}=\\dfrac{${solim4}-${psolim3[0]}${solim3}${psolim3[1]}}{${im4}-${pim3[0]}${im3}${pim3[1]}}=\\dfrac{${diffsols2}}{${diffx2}}=${a1}$`,
`1) $f(${x1})=${px1[0]} ${x1} ${px1[1]}^2 ${sa11} ${a11} = ${x1carre} ${sa11} ${a11} = ${fx1}$.<br>
$\\phantom{1 )}f(${x2})=${px2[0]} ${x2} ${px2[1]}^2 ${sa11} ${a11} = ${x2carre} ${sa11} ${a11} = ${fx2}$.<br><br>
$\\phantom{1 )}\\tau~(${x1}~;${x2})=\\dfrac{f(${x2})-f(${x1})}{${x2}-${px1[0]}${x1}${px1[1]}}=\\dfrac{${fx2}-${pfx1[0]}${fx1}${pfx1[1]}}{${x2}-${px1[0]}${x1}${px1[1]}}=\\dfrac{${fx2fx1}}{${x2x1}}=${t1}$<br><br>
2) $f(${x3})=${px3[0]} ${x3} ${px3[1]}^2 ${sa11} ${a11} = ${x3carre} ${sa11} ${a11} = ${fx3}$.<br>
$\\phantom{1 )}f(${x4})=${px4[0]} ${x4} ${px4[1]}^2 ${sa11} ${a11} = ${x4carre} ${sa11} ${a11} = ${fx4}$.<br><br>
$\\phantom{1 )}\\tau~(${x3}~;${x4})=\\dfrac{f(${x4})-f(${x3})}{${x4}-${px3[0]}${x3}${px3[1]}}=\\dfrac{${fx4}-${pfx3[0]}${fx3}${pfx3[1]}}{${x4}-${px3[0]}${x3}${px3[1]}}=\\dfrac{${fx4fx3}}{${x4x3}}=${t2}$`];

let listesolutions =[`1) $\\tau~(${im1}~;${im2})=${a1}$<br><br>
2) $\\tau~(${im3}~;${im4})=${a1}$`,
`1) $\\tau~(${x1}~;${x2})=${t1}$<br><br>
2) $\\tau~(${x3}~;${x4})=${t2}$`];

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

