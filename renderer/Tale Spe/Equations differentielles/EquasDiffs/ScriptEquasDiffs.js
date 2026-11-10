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

function coefdiff(a) {
  let rep = nbreouoppose(nbrealéa(1,10));
  while (a==rep) {rep = nbreouoppose(nbrealéa(1,10));}
  return rep;
}

function bzero(a,a1,b,c,opab) {
  let rep;
  let sa1 = rienplus(a);
  if (b==0) {rep=`=${c}\\text{e}^{${a1}x}`;} else {rep=`=${c}\\text{e}^{${opab}}\\text{e}^{${a1}x}=${c}\\text{e}^{${opab}${sa1}${a1}x}`;}
  return rep;
}

function dzero(a,seSura,eSura,a1) {
  let rep;
  let sa1 = rienplus(a);
  if (d==0) {rep=`=${seSura}${eSura}\\text{e}^{${a1}x}`;} else {rep=`=${seSura}${eSura} \\text{e}^{${opad}${sa1}${a1}x}`;}
  return rep;
}

function sol21(a2,b2,a12) {
  let rep;
  let b2sura2 = simplifierfraction(b2,a2);
  let b2Sura2 = simpfracmax(b2,a2);
  let sb2Sura2 = plusmoins(-b2/a2);
  let b2diva2 = -b2/a2;
  let sb2diva2 = rienplus(b2diva2);
  if (a2>0 && b2>0 && b2sura2[1]!=1) {rep=``;}
  else {
    if (a2==1) {rep=`donc les fonctions $x\\longmapsto k\\text{e}^{${a12}x} ${sb2diva2}${b2diva2}$`;} 
    else {
      if (a2==-1) {rep=`donc les fonctions $x\\longmapsto k\\text{e}^{${a12}x} ${sb2diva2}${b2diva2}$`;}
      else {rep=`donc les fonctions $x\\longmapsto k\\text{e}^{${a12}x} ${sb2Sura2}${b2Sura2}$`;}
    }
    }
  return rep;
}

function sol21fin(a2,b2,a12) {
  let rep;
  let b2sura2 = simplifierfraction(b2,a2);
  let b2Sura2 = simpfracmax(b2,a2);
  let sb2Sura2 = plusmoins(-b2/a2);
  let b2diva2 = -b2/a2;
  let sb2diva2 = rienplus(b2diva2);
  if (a2>0 && b2>0 && b2sura2[1]!=1) {rep=`k\\text{e}^{${a12}x}-\\dfrac{${b2}}{${a2}}`;}
  else {
    if (a2==1) {rep=`k\\text{e}^{${a12}x} ${sb2diva2}${b2diva2}`;} 
    else {
      if (a2==-1) {rep=`k\\text{e}^{${a12}x} ${sb2diva2}${b2diva2}`;}
      else {rep=`k\\text{e}^{${a12}x} ${sb2Sura2}${b2Sura2}`;}
    }
    }
  return rep;
}

let a = nbreouoppose(nbrealéa(1,10));
let pgda = parenthesegd(a);
let a1 = unoupasun(a);
let b = nbrealéa(-10,10);
let pgdb = parenthesegd(b);
let c = nbreouoppose(nbrealéa(1,10));
let d = nbrealéa(-10,10);
let pgdd = parenthesegd(d);
let e = nbreouoppose(nbrealéa(1,10));
let ab = a*b;
let opab = -ab;
let ad = a*d;
let eSura = simpfracmax(e,a);
let seSura = rienmoins(e/a);
let opad = -ad;
let bz = bzero(a,a1,b,c,opab);
let dz = dzero(a,seSura,eSura,a1);

let a2 = nbreouoppose(nbrealéa(1,10));
let sa2 = rienplus(a2);
let pgda2 = parenthesegd(a2);
let a12 = unoupasun(a2);
let b2 = nbreouoppose(nbrealéa(1,10));
let sb2 = rienplus(b2);
let c2 = nbrealéa(-10,10);
let pgdc2 = parenthesegd(c2);
let d2 = nbreouoppose(nbrealéa(1,10));
let e2 = nbrealéa(-10,10);
let pgde2 = parenthesegd(e2);
let f2 = nbreouoppose(nbrealéa(1,10));
let sol1 = sol21(a2,b2,a12);
let sol1fin = sol21fin(a2,b2,a12);
let mb2Sura2 = simpfracmax(-b2,a2);
let a2c2 = a2*c2;
let opa2c2 = -a2c2;
let smb2Sura2 = plusmoins(-b2/a2);
let opmb2Sura2 = simpfracmax(b2,a2);
let sopmb2Sura2 = plusmoins(b2/a2);
let d2Plusb2Sura2 = simpfracmax(d2*a2+b2,a2);
let sd2Plusb2Sura2 = rienmoins((d2*a2+b2)/a2);
let a2e2 = a2*e2;
let opa2e2 = -a2e2;
let f2Sura2 = simpfracmax(f2,a2);
let sf2Sura2 = rienmoins(f2/a2);

let k = nbrealéa(0,1);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');

let listeenonces = [`On considère l'équation différentielle (E) : $y'=${a1}y$. <br>
1) Déterminer l'ensemble des solutions de (E).<br>
2) Déterminer la solution $f$ de (E) telle que $f(${b})=${c}$. <br>
3) Déterminer la solution $g$ de (E) telle que $g'(${d})=${e}$.`,
`On considère l'équation différentielle (E) : $y'=${a12}y${sb2}${b2}$. <br>
1) Déterminer l'ensemble des solutions de (E).<br>
2) Déterminer la solution $f$ de (E) telle que $f(${c2})=${d2}$. <br>
3) Déterminer la solution $g$ de (E) telle que $g'(${e2})=${f2}$.`];

let listesolutions = [`1) Les fonctions $x\\longmapsto k\\text{e}^{${a1}x} $ avec $k\\in\\mathbb{R}$.<br><br>
2) $f(x)=\\dfrac{${c}}{\\text{e}^{${ab}}}\\text{e}^{${a1}x}${bz}$. <br><br>
3) $g(x)=${seSura}${eSura} \\text{e}^{${opad}}\\times \\text{e}^{${a1}x}${dz}$`,
`1) les fonctions $x\\longmapsto k\\text{e}^{${a12}x}-\\dfrac{${b2}}{${a2}}$ avec $k\\in\\mathbb{R}$ ${sol1}. <br><br>
2) $f(x)=${sd2Plusb2Sura2}${d2Plusb2Sura2}\\text{e}^{${opa2c2}${sa2}${a12}x}${smb2Sura2}${mb2Sura2}$ <br><br>
3) $g(x)=${sf2Sura2}${f2Sura2}\\text{e}^{${opa2e2}${sa2}${a12}x}${smb2Sura2}${mb2Sura2}$`];

let listecorrections = [`1) L'équation (E) est du type $y'=ay$ donc l'ensemble de ses solutions sont les fonctions $x\\longmapsto k\\text{e}^{ax}$ où $k\\in\\mathbb{R}$. <br>
L'ensemble des solutions de (E) sont donc les fonctions $x\\longmapsto k\\text{e}^{${a1}x} $ avec $k\\in\\mathbb{R}$. <br>
2) Grâce à la question précédente on sait que $f(x)=k\\text{e}^{${a1}x}$ et donc : <br>
$f(${b})=k\\text{e}^{${a}\\times ${pgdb[0]}${b}${pgdb[1]}}=k\\text{e}^{${ab}}=${c}$ donc $k=\\dfrac{${c}}{\\text{e}^{${ab}}}$ et donc $\\boxed{f(x)=\\dfrac{${c}}{\\text{e}^{${ab}}}\\text{e}^{${a1}x}${bz}}$  <br>
3) Grâce à la question initiale on sait que $g(x)=k\\text{e}^{${a1}x}$ donc $g'(x)=k\\times ${pgda[0]} ${a} ${pgda[1]} \\text{e}^{${a}x}$ et donc : <br>
$g'(${d})=k\\times ${pgda[0]} ${a} ${pgda[1]} \\text{e}^{${a}\\times ${pgdd[0]} ${d} ${pgdd[1]}}=k\\times ${pgda[0]} ${a} ${pgda[1]} \\text{e}^{${ad}}=${e}$ donc $k=\\dfrac{${e}}{${a1} \\text{e}^{${ad}}}$ <br>
et donc $\\boxed{g(x)=\\dfrac{${e}}{${a1} \\text{e}^{${ad}}}\\text{e}^{${a1}x}=${seSura}${eSura} \\text{e}^{${opad}}\\times \\text{e}^{${a1}x}${dz}}$`,
`1) L'équation (E) est du type $y'=ay+b$ donc l'ensemble de ses solutions sont les fonctions $x\\longmapsto k\\text{e}^{ax}-\\dfrac{b}{a}$ où $k\\in\\mathbb{R}$. <br>
L'ensemble des solutions de (E) sont donc les fonctions $x\\longmapsto k\\text{e}^{${a12}x}-\\dfrac{${b2}}{${a2}}$ avec $k\\in\\mathbb{R}$ ${sol1}. <br>
2) Grâce à la question précédente on sait que $f(x)=${sol1fin}$ et donc : <br><br>
$f(${c2})=k\\text{e}^{${a2}\\times ${pgdc2[0]}${c2}${pgdc2[1]}}${smb2Sura2}${mb2Sura2}=k\\text{e}^{${a2c2}}${smb2Sura2}${mb2Sura2}=${d2}$ donc $k\\text{e}^{${a2c2}}=${d2}${sopmb2Sura2}${opmb2Sura2}=${sd2Plusb2Sura2}${d2Plusb2Sura2}$ donc <br><br>
$k=\\dfrac{${sd2Plusb2Sura2}${d2Plusb2Sura2}}{\\text{e}^{${a2c2}}}=${sd2Plusb2Sura2}${d2Plusb2Sura2}\\text{e}^{${opa2c2}}$ et donc $\\boxed{f(x)=${sd2Plusb2Sura2}${d2Plusb2Sura2}\\text{e}^{${opa2c2}}\\text{e}^{${a12}x}${smb2Sura2}${mb2Sura2}=${sd2Plusb2Sura2}${d2Plusb2Sura2}\\text{e}^{${opa2c2}${sa2}${a12}x}${smb2Sura2}${mb2Sura2}}$ <br>
3) Grâce à la question initiale on sait que $g(x)=${sol1fin}$ et donc $g'(x)=k\\times ${pgda2[0]}${a2}${pgda2[1]}\\text{e}^{${a12}x}$. <br><br>
On a donc $g'(${e2})=k\\times ${pgda2[0]}${a2}${pgda2[1]}\\text{e}^{${a12}\\times ${pgde2[0]}${e2}${pgde2[1]}}=k\\times ${pgda2[0]}${a2}${pgda2[1]}\\text{e}^{${a2e2}}=${f2}$ donc <br>
$k=\\dfrac{${f2}}{${a2}\\text{e}^{${a2e2}}}=${sf2Sura2}${f2Sura2} \\text{e}^{${opa2e2}}$ et donc $\\boxed{g(x)=${sf2Sura2}${f2Sura2}\\text{e}^{${opa2e2}}\\text{e}^{${a12}x}${smb2Sura2}${mb2Sura2}=${sf2Sura2}${f2Sura2}\\text{e}^{${opa2e2}${sa2}${a12}x}${smb2Sura2}${mb2Sura2}}$`];

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