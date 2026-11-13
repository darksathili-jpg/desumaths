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
  let rep = nbrealéa(-10,10);
  while (rep==a) {rep=nbrealéa(-10,10);}
  return rep;
}

function valabs(a) {
  let rep;
  if (a<0) {rep=-a;} else {rep=a;}
  return rep;
}

function simply2(num,denom) {
  let rep;
  if (denom==1) {rep=`${num}`;} else {rep='';}
  return rep;
}

function cas(choix) {
  let rep;
  if (choix==0) {rep=1};
  if (choix==1) {rep=1};
  if (choix==2) {rep=1};
  if (choix==3) {rep=0};
  if (choix==4) {rep=0};
  if (choix==5) {rep=0};
  if (choix==6) {rep=0};
  if (choix==7) {rep=0};
  if (choix==8) {rep=0};
  if (choix==9) {rep=0};
  if (choix==10) {rep=0};
  if (choix==11) {rep=0};
  if (choix==12) {rep=0};
  return rep;
}

function solsimp(rmb,oprmb,a) {
  let rep;
  let rep1;
  let rep2;
  let sol1simp1 = fracsimpmax(rmb,a);
  let s1fracsimp = simplifierfraction(rmb,a);
  let s1simp = simply2(s1fracsimp[0],s1fracsimp[1]);
  let sol2simp2 = fracsimpmax(oprmb,a);
  let s2fracsimp = simplifierfraction(oprmb,a);
  let s2simp = simply2(s2fracsimp[0],s2fracsimp[1]);
  if (s1simp=='') {rep1=`${sol1simp1[0]}\\dfrac{${sol1simp1[1]}}{${sol1simp1[2]}}`;}
  if (s1simp !='') {rep1=`${s1simp}`;}
  if (s2simp=='') {rep2=`${sol2simp2[0]}\\dfrac{${sol2simp2[1]}}{${sol2simp2[2]}}`;}
  if (s2simp !='') {rep2=`${s2simp}`;}
  return rep=[rep1,rep2]; 
}

let listecarrés = [-9,-4,-1,1,4,9,16,25,36,49,64,81,100];
let choix = nbrealéa(0,12);
let a = nbrealéa(2,10);
let b = nbreouoppose(nbrealéa(1,10));
let opb = -b;
let sopb = rienplus(opb);
let sb = rienplus(b);
let c = listecarrés[choix];
let racine = Math.sqrt(c);
let rmb = racine-b;
let oprmb = -racine-b;
let sol1simp1 = fracsimpmax(rmb,a);
let s1fracsimp = simplifierfraction(rmb,a);
let s1simp = simply(s1fracsimp[0],s1fracsimp[1]);
let sol2simp2 = fracsimpmax(oprmb,a);
let s2fracsimp = simplifierfraction(oprmb,a);
let s2simp = simply(s2fracsimp[0],s2fracsimp[1]);
let k = cas(choix);
let solutions1et2 = solsimp(rmb,oprmb,a);

let enonce = document.getElementById('enonce');
let enonce2 = document.getElementById('enonce2');
let correctiond = document.getElementById('correctiond');
let correction1 = document.getElementById('correction1');
let correction2 = document.getElementById('correction2');
let correction3 = document.getElementById('correction3');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
let solutionRB = document.getElementById('solutionRB');
let solutionRH = document.getElementById('solutionRH');

let listeenonces = [`Résoudre dans $\\mathbb{R}$ l'équation : $(${a}x${sb}${b})^2=${c}$.`];

let listecorrection = [`$(${a}x${sb}${b})^2=${c}$ donc :<br>
$\\begin{array}{rclcrcl} ${a}x${sb}${b} & = & \\sqrt{${c}}=${racine} & \\text{ou} & ${a}x${sb}${b} & = & -${racine}\\\\
${a}x & = & ${racine}${sopb}${opb} & \\text{ou} & ${a}x & = & -${racine}${sopb}${opb}\\\\
${a}x & = & ${rmb} & \\text{ou} & ${a}x & = & ${oprmb}\\\\
x & = & \\dfrac{${rmb}}{${a}}=${sol1simp1[0]}\\dfrac{${sol1simp1[1]}}{${sol1simp1[2]}}${s1simp}~\\text{(simplifiée)} & \\text{ou} & x & = & \\dfrac{${oprmb}}{${a}}=${sol2simp2[0]}\\dfrac{${sol2simp2[1]}}{${sol2simp2[2]}}${s2simp}~\\text{(simplifiée)}
\\end{array}$<br>
$S=\\left\\\{${solutions1et2[0]}~;${solutions1et2[1]} \\right\\\}$`,
`Impossible car $${c}<0$ donc $S=\\varnothing$.`];

let listesolutions = [`$S=\\left\\\{${solutions1et2[0]}~;${solutions1et2[1]}\\right\\\}$`,`$S=\\varnothing$`]

enonce.innerHTML = listeenonces[0];

solution.innerHTML = listesolutions[k];

correctiond.innerHTML = listecorrection[k];

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
    location.href = "../../../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../../../Menus/Menu1ST.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../../Menus/Menu1STfonctionsdegre2.html";
})