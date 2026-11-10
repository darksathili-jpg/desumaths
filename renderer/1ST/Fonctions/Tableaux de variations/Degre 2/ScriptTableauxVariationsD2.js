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


function tabvar(x,y,L,l,canvas,a) {
    var canvas = document.getElementById(canvas); 
    var context = canvas.getContext("2d");
    context.save();
    context.beginPath();
    context.strokeRect(x,y,L,l);
    context.beginPath();
    context.moveTo(x,x+70);
    context.lineTo(L+x,x+70);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+70,y);
    context.lineTo(x+70,l+30);
    context.strokeStyle="black";
    context.stroke();
    context.font = '30px serif';
    context.fillText(`x`,47,70);
    context.fillText(`f '(x)`,25,120);
    context.fillText(`f(x)`,35,200);
    context.font = '20px serif';
    context.fillText(`${x1}`,x+200,70);
    context.fillText(`${borneinf}`,x+80,70);
    context.fillText(`${bornesup}`,L+x-40,70);
    context.beginPath();
    context.moveTo(x,x+120);
    context.lineTo(L+x,x+120);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+210,x+70);
    context.lineTo(x+210,x+120);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+210, x+95, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    if (a<0) {
    context.fillText(`${fx1}`,x+200,x+140);
    context.fillText(`${fborneinf}`,x+80,x+200);
    context.fillText(`${fbornesup}`,L+x-40,x+200);
    context.fillText(`+`,150,x+95);
    context.fillText(`-`,300,x+95);
    context.beginPath();
    context.moveTo(x+100,l);
    context.lineTo(x+180,160);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+240,160);
    context.lineTo(L+x-40,x+180);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+180,160);
    context.lineTo(x+160,160);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+180,160);
    context.lineTo(x+180,180);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(L+x-40,x+180);
    context.lineTo(L+x-50,x+160);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(L+x-40,x+180);
    context.lineTo(L+x-60,x+180);
    context.strokeStyle="black";
    context.stroke();
    }
    if (a>0) {
    context.fillText(`${fx1}`,x+200,220);
    context.fillText(`${fborneinf}`,x+80,160);
    context.fillText(`${fbornesup}`,L+x-40,160);
    context.fillText(`+`,300,x+95);
    context.fillText(`-`,150,x+95);
    context.beginPath();
    context.moveTo(x+100,l-30);
    context.lineTo(x+200,200);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+240,200);
    context.lineTo(L+x-40,l-30);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+200,200);
    context.lineTo(x+185,180);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+200,200);
    context.lineTo(x+180,200);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(L+x-40,l-30);
    context.lineTo(L+x-50,l-40);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(L+x-40,l-30);
    context.lineTo(L+x-45,l-15);
    context.strokeStyle="black";
    context.stroke();
    }
  }
  
tabvar(20,30,400,200,"canvasC",a[0]);
tabvar(20,30,400,200,"canvasS",a[0]);

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
    location.href = "../../../../Menus/Menu1STfonctionsderivees.html";
})

