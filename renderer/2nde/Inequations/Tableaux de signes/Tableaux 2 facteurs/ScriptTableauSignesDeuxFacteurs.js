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
  let rep = nbreouoppose(nbrealéa(1,10));
  while (rep==a) {rep=nbreouoppose(nbrealéa(1,10));}
  return rep;
}

function infousup(choix) {
  let rep;
  if (choix==1) {rep=`\\leqslant`;}
  if (choix==2) {rep=`<`;}
  if (choix==3) {rep=`\\geqslant`;}
  if (choix==4) {rep='>';}
  return rep;
}

function coef1() {
  let rep;
  let nbre = nbreouoppose(nbrealéa(1,10));
  let coef;
  if (nbre==1) {coef='';} else {
    if (nbre==-1) {coef=`-`;} else {
      {coef=`${nbre}`;}
    }
  }
  return rep = [nbre,coef];
}

function soluce(x1,x2,a1,a2,choix) {
  let rep;
  if (a1>0 && a2>0 && x1<x2 && choix==1) {rep=`[${x1}~;${x2}]`;}
  if (a1>0 && a2>0 && x1<x2 && choix==2) {rep=`]${x1}~;${x2}[`;}
  if (a1>0 && a2>0 && x1<x2 && choix==3) {rep=`]-\\infty~;${x1}]\\cup [${x2}~;+\\infty[`;}
  if (a1>0 && a2>0 && x1<x2 && choix==4) {rep=`]-\\infty~;${x1}[\\cup ]${x2}~;+\\infty[`;}

  if (a1>0 && a2>0 && x1>x2 && choix==1) {rep=`[${x2}~;${x1}]`;}
  if (a1>0 && a2>0 && x1>x2 && choix==2) {rep=`]${x2}~;${x1}[`;}
  if (a1>0 && a2>0 && x1>x2 && choix==3) {rep=`]-\\infty~;${x2}]\\cup [${x1}~;+\\infty[`;}
  if (a1>0 && a2>0 && x1>x2 && choix==4) {rep=`]-\\infty~;${x2}[\\cup ]${x1}~;+\\infty[`;}

  if (a1>0 && a2<0 && x1<x2 && choix==1) {rep=`]-\\infty~;${x1}]\\cup [${x2}~;+\\infty[`;}
  if (a1>0 && a2<0 && x1<x2 && choix==2) {rep=`]-\\infty~;${x1}[\\cup ]${x2}~;+\\infty[`;}
  if (a1>0 && a2<0 && x1<x2 && choix==3) {rep=`[${x1}~;${x2}]`;}
  if (a1>0 && a2<0 && x1<x2 && choix==4) {rep=`]${x1}~;${x2}[`;}

  if (a1>0 && a2<0 && x1>x2 && choix==1) {rep=`]-\\infty~;${x2}]\\cup [${x1}~;+\\infty[`;}
  if (a1>0 && a2<0 && x1>x2 && choix==2) {rep=`]-\\infty~;${x2}[\\cup ]${x1}~;+\\infty[`;}
  if (a1>0 && a2<0 && x1>x2 && choix==3) {rep=`[${x2}~;${x1}]`;}
  if (a1>0 && a2<0 && x1>x2 && choix==4) {rep=`]${x2}~;${x1}[`;}

  if (a1<0 && a2>0 && x1<x2 && choix==1) {rep=`]-\\infty~;${x1}]\\cup [${x2}~;+\\infty[`;}
  if (a1<0 && a2>0 && x1<x2 && choix==2) {rep=`]-\\infty~;${x1}[\\cup ]${x2}~;+\\infty[`;}
  if (a1<0 && a2>0 && x1<x2 && choix==3) {rep=`[${x1}~;${x2}]`;}
  if (a1<0 && a2>0 && x1<x2 && choix==4) {rep=`]${x1}~;${x2}[`;}

  if (a1<0 && a2>0 && x1>x2 && choix==1) {rep=`]-\\infty~;${x2}]\\cup [${x1}~;+\\infty[`;}
  if (a1<0 && a2>0 && x1>x2 && choix==2) {rep=`]-\\infty~;${x2}[\\cup ]${x1}~;+\\infty[`;}
  if (a1<0 && a2>0 && x1>x2 && choix==3) {rep=`[${x2}~;${x1}]`;}
  if (a1<0 && a2>0 && x1>x2 && choix==4) {rep=`]${x2}~;${x1}[`;}

  if (a1<0 && a2<0 && x1<x2 && choix==1) {rep=`[${x1}~;${x2}]`;}
  if (a1<0 && a2<0 && x1<x2 && choix==2) {rep=`]${x1}~;${x2}[`;}
  if (a1<0 && a2<0 && x1<x2 && choix==3) {rep=`]-\\infty~;${x1}]\\cup [${x2}~;+\\infty[`;}
  if (a1<0 && a2<0 && x1<x2 && choix==4) {rep=`]-\\infty~;${x1}[\\cup ]${x2}~;+\\infty[`;}

  if (a1<0 && a2<0 && x1>x2 && choix==1) {rep=`[${x2}~;${x1}]`;}
  if (a1<0 && a2<0 && x1>x2 && choix==2) {rep=`]${x2}~;${x1}[`;}
  if (a1<0 && a2<0 && x1>x2 && choix==3) {rep=`]-\\infty~;${x2}]\\cup [${x1}~;+\\infty[`;}
  if (a1<0 && a2<0 && x1>x2 && choix==4) {rep=`]-\\infty~;${x2}[\\cup ]${x1}~;+\\infty[`;}

  return rep;
}


let x1 = nbreouoppose(nbrealéa(1,10));
let x2 = nbrediff(x1);
let coeff1 = coef1();
let a1 = coeff1[1];
let b1 = -coeff1[0]*x1;
let sb1 = rienplus(b1);
let coeff2 = coef1();
let a2 = coeff2[1];
let b2 = -coeff2[0]*x2;
let sb2 = rienplus(b2);
let choix = nbrealéa(1,4);
let signe = infousup(choix);
let sol = soluce(x1,x2,coeff1[0],coeff2[0],choix);
let opb1 = -b1;
let opb2 = -b2;

const tableauSignes = DesumathsTableauxLatex.signesDeuxFacteurs([
  { racine: x1, pente: coeff1[0], expression: `${a1}x${sb1}${b1}` },
  { racine: x2, pente: coeff2[0], expression: `${a2}x${sb2}${b2}` },
]);
DesumathsTableauxLatex.afficher(document.getElementById("tableauCorrection"), tableauSignes);

let listeenonces = [`Résoudre dans $\\mathbb{R}$ l'inéquation : $(${a1}x${sb1}${b1})(${a2}x${sb2}${b2})${signe}0$`];

document.getElementById('enonce').innerHTML = listeenonces[0];

document.getElementById('solution').textContent = `$S=${sol}$`;

document.getElementById('correction1').innerHTML = `On cherche d'abord les nombres qui seront inscrits sur la première ligne :<br>
$\\dfrac{${opb1}}{${coeff1[0]}}=${x1}$ et $\\dfrac{${opb2}}{${coeff2[0]}}=${x2} $`;
document.getElementById('correction2').textContent = `$S=${sol}$`;

for (const id of ['solutions', 'correction']) {
    const bouton = document.getElementById(id);
    const panneau = document.getElementById(bouton.getAttribute('aria-controls'));
    const libelle = bouton.textContent;
    bouton.addEventListener('click', () => {
        panneau.hidden = !panneau.hidden;
        bouton.setAttribute('aria-expanded', String(!panneau.hidden));
        bouton.textContent = panneau.hidden ? libelle : libelle.replace('Afficher', 'Masquer');
    });
}

document.getElementById('recommencer').addEventListener('click', () => location.reload());
