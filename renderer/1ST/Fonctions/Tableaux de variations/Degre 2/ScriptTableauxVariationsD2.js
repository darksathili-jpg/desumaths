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

let paires = [2,4,6,8,10,12,14,16];
let choixpaire = nbrealéa(0,7);
let a = coef1();
let a1 = a[1];
let b1 = a[0]*paires[choixpaire];
let sb1 = rienplus(b1);
let opb1 = -b1;
let c1 = nbreouoppose(nbrealéa(1,10));
let sc1 = rienplus(c1);
let sc1prime = plusmoins(c1);
let x1 = -b1/(2*a[0]);
let pgdx1 = parenthesegd(x1);
let borneinf = x1-nbrealéa(1,10);
let pgdborneinf = parenthesegd(borneinf);
let bornesup = x1+nbrealéa(1,10);
let pgdbornesup = parenthesegd(bornesup);
let aprime1 = 2*a[0];
let fx1 = a[0]*x1**2+b1*x1+c1;
let fborneinf = a[0]*borneinf**2+b1*borneinf+c1;
let fbornesup = a[0]*bornesup**2+b1*bornesup+c1;


const tableauVariations = DesumathsTableauxLatex.variationsDegreDeux({
  bornes: [borneinf, x1, bornesup],
  images: [fborneinf, fx1, fbornesup],
  coefficient: a[0],
});
for (const id of ["tableauSolution", "tableauCorrection"]) {
  DesumathsTableauxLatex.afficher(document.getElementById(id), tableauVariations);
}

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
let correction1 = document.getElementById('correction1');
let correction2 = document.getElementById('correction2');
var correction = document.getElementById('correction');
var solution = document.getElementById('solution');
var solution1 = document.getElementById('solution1');
var solutions = document.getElementById('solutions');

let listeenonces = [`Soit $f$ la fonction définie sur $[${borneinf}~;${bornesup}]$ par $f(x)=${a1}x^2${sb1}${b1}x${sc1}${c1}$<br>
1) Déterminer $f'(x)$.<br>
2) Dresser le tableau de variations de $f$ sur son ensemble de définition.`];

let listecorrections = [`$\\begin{array}{rrcl} 1) & f(x) & = & ${a1}x^2${sb1}${b1}x${sc1}${c1} \\\\
& f'(x) & = & ${a[0]}\\times 2x${sb1}${b1}\\times 1${sc1prime} 0 \\\\
& f'(x) & = & ${aprime1}x${sb1}${b1}
\\end{array}$<br>
2)`];

let listesolutions = [``];

enonce.innerHTML = listeenonces[0];
solution1.innerHTML = `1) $f'(x)=${aprime1}x${sb1}${b1}$<br>
2)`;
correction1.innerHTML = listecorrections[0];

correction2.innerHTML = `$\\bullet$<br1></br1> $\\begin{array}{rrcl}  & ${aprime1}x${sb1}${b1} & = & 0 \\\\
\\iff & ${aprime1}x & = & ${opb1} \\\\
\\iff & x & = & \\dfrac{${opb1}}{${aprime1}}=${x1}
\\end{array}$<br><br>
$\\bullet\\hspace{5mm} f(${borneinf})=${a[0]}\\times (${borneinf})^2${sb1}${b1}\\times ${pgdborneinf[0]}${borneinf}${pgdborneinf[1]} ${sc1}${c1}=${fborneinf}$<br>
$\\bullet\\hspace{5mm} f(${x1})=${a[0]}\\times (${x1})^2${sb1}${b1}\\times ${pgdx1[0]}${x1}${pgdx1[1]} ${sc1}${c1}=${fx1} $<br>
$\\bullet\\hspace{5mm} f(${bornesup})=${a[0]}\\times (${bornesup})^2${sb1}${b1}\\times ${pgdbornesup[0]}${bornesup}${pgdbornesup[1]} ${sc1}${c1}=${fbornesup} $`;

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
    location.href = "../../../../Menus/Menu1STfonctionsderivees.html";
})

