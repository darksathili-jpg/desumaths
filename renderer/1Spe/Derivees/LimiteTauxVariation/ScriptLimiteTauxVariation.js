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

function avecVirgule(nombre){
  let nombreChaine = nombre.toString()
  nombreChaine = nombreChaine.replace('.', ',')
  return nombreChaine
}

function simplifierfraction(numerateur,denominateur){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerateur,denominateur);
  return [numerateur/gcd, denominateur/gcd];
}

function simpfracDenomPos(num,denom) {
  let rep;
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(num,denom);
  let num1=num/gcd;
  let denom1=denom/gcd;
  if (num1>0 && denom1>0) {rep=[num1,denom1];}
  if (num1>0 && denom1<0) {rep=[-num1,-denom1];}
  if (num1<0 && denom1>0) {rep=[num1,denom1];}
  if (num1<0 && denom1<0) {rep=[-num1,denom1];}
  return rep;
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

function unoupasun(a) {
  let rep;
  if (a==1) {rep=``;} else {
      if (a==-1) {rep=`-`;} else {rep=`${a}`;}}
  return rep;
}

let a = nbreouoppose(nbrealéa(1,10));
let a1 = unoupasun(a);
let sa = rienplus(a);
let opa = -a;
let opa1 = unoupasun(opa);
let sopa = rienplus(opa);
let a2 = 2*a;
let sa2 = rienplus(a2);
let a21 = unoupasun(a2);
let b = nbreouoppose(nbrealéa(1,10));
let b1 = unoupasun(b);
let sb = rienplus(b);
let opb = -b;
let opb1 = unoupasun(opb);
let sopb = rienplus(opb);
let c = nbreouoppose(nbrealéa(1,10));
let sc = rienplus(c);
let opc = -c;
let sopc = rienplus(opc);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');

let listeenonces = [`Déterminer la fonction dérivée de la fonction $f$ définie sur $\\mathbb{R}$ par $f(x)=${a1}x^2${sb}${b1}x${sc}${c}$ en déterminant la limite de son taux de variation.`];

let listecorrections = [`On va d'abord déterminer le taux de variation de $f$ entre $a$ et $a+h$ $(a\\in\\mathbb{R}~\\text{et}~h\\neq 0)$: <br>
$\\tau(h)=\\dfrac{f(a+h)-f(a)}{a+h-a}=\\dfrac{f(a+h)-f(a)}{h}$ donc : <br><br>
$\\begin{array}{rcl}  
\\tau(h) & = & \\dfrac{${a1}(a+h)^2${sb}${b1}(a+h)${sc}${c}-\\left(${a1}a^2${sb}${b1}a${sc}${c}\\right)}{h}\\\\
 & = & \\dfrac{${a1}\\left(a^2+2ah+h^2\\right)${sb}${b1}a${sb}${b1}h${sc}${c}${sopa}${opa1}a^2${sopb}${opb1}a${sopc}${opc}}{h}\\\\
\\require{cancel} & = & \\dfrac{\\color{green}{\\cancel{\\color{black}{${a1}a^2}}}${sa2}${a2}ah${sa}${a1}h^2\\color{blue}{\\cancel{\\color{black}{${sb}${b1}a}}}${sb}${b1}h\\color{red}{\\cancel{\\color{black}{${sc}${c}}}}\\color{green}{\\cancel{\\color{black}{${sopa}${opa1}a^2}}}\\color{blue}{\\cancel{\\color{black}{${sopb}${opb1}a}}}\\color{red}{\\cancel{\\color{black}{${sopc}${opc}}}}}{h}\\\\
 & = & \\dfrac{${a21}ah${sa}${a1}h^2${sb}${b1}h}{h}=${a21}a${sa}${a1}h${sb}${b1}
\\end{array}$ <br>
On a donc $\\displaystyle{\\lim_{h\\to 0} \\tau(h)}=\\displaystyle{\\lim_{h\\to 0} \\left(${a21}a${sa}${a1}h${sb}${b1}\\right)}=${a21}a${sb}${b1}$ <br>
Donc $f$ est dérivable en $a$ et $f'(a)=${a21}a${sb}${b1}$ et donc, pour tout réel $x$, $f'(x)=${a21}x${sb}${b1}$`];

let listesolutions = [`$f'(x)=${a21}x${sb}${b1}$`];

enonce.innerHTML = listeenonces[0];

solution.innerHTML = listesolutions[0];

correctiond.innerHTML = listecorrections[0];

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