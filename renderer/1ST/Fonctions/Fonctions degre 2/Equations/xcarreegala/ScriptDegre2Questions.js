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

function infousup(choix) {
  let rep;
  if (choix==1) {rep=`\\leqslant`;} else {rep=`\\geqslant`;}
  return rep;
}

function solq6(choix,x1,x2,a) {
  let rep;
  if (choix==1 && a<0) {
    if (x1<x2) {rep=`]-\\infty~;${x1}]\\cup [${x2}~;+\\infty[`;}
    if (x1>x2) {rep=`]-\\infty~;${x2}]\\cup [${x1}~;+\\infty[`;}
    if (x1==x2) {rep=`\\mathbb{R}`;}
  }
  if (choix==2 && a<0) {
    if (x1<x2) {rep=`[${x1}~;${x2}]`;}
    if (x1>x2) {rep=`[${x2}~;${x1}]`;}
    if (x1==x2) {rep=`\\left\\{${x1}\\right\\}`;}
  }
  if (choix==2 && a>0) {
    if (x1<x2) {rep=`]-\\infty~;${x1}]\\cup [${x2}~;+\\infty[`;}
    if (x1>x2) {rep=`]-\\infty~;${x2}]\\cup [${x1}~;+\\infty[`;}
    if (x1==x2) {rep=`\\mathbb{R}`;}
  }
  if (choix==1 && a>0) {
    if (x1<x2) {rep=`[${x1}~;${x2}]`;}
    if (x1>x2) {rep=`[${x2}~;${x1}]`;}
    if (x1==x2) {rep=`\\left\\{${x1}\\right\\}`;}
  }
  return rep;
}

let x1 = nbrealéa(-10,10);
let x2 = nbrealéa(-10,10);
let px2 = parenthesegd(x2);
let a = nbrealéa(2,9);
let opx1 = -x1;
let opx2 = -x2;
let sopx1 = rienplus(opx1);
let sopx2 = rienplus(opx2);
let opx1opx2 = opx1*opx2;
let sopx1opx2 = rienplus(opx1opx2);
let opx2opx1 = opx2+opx1;
let sopx2opx1 = rienplus(opx2opx1);
let coefx = a*opx2opx1;
let scoefx = rienplus(coefx);
let coefr = a*opx1opx2;
let scoefr = rienplus(coefr);
let x1x2 = x1+x2;
let alpha = (x1+x2)/2;
let alphav = avecVirgule(alpha);
let alphax1 = alpha-x1;
let palphax1 = parenthesegd(alphax1);
let alphax1v = avecVirgule(alphax1);
let alphax2 = alpha-x2;
let palphax2 = parenthesegd(alphax2);
let alphax2v = avecVirgule(alphax2);
let falpha = a*alphax1*alphax2;
let falphav = avecVirgule(falpha);
let choix = nbrealéa(1,2);
let infsup = infousup(choix);
let sq6 = solq6(choix,x1,x2,a);

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
  context.fillText(`f(x)`,35,170);
  context.font = '20px serif';
  context.fillText(`${alphav}`,x+200,70);
  if (a<0) {
  context.fillText(`${falphav}`,x+200,115);
  context.beginPath();
  context.moveTo(x+80,l+20);
  context.lineTo(x+200,120);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+240,120);
  context.lineTo(L+x-20,x+200);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+200,120);
  context.lineTo(x+180,125);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+200,120);
  context.lineTo(x+200,135);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(L+x-20,x+200);
  context.lineTo(L+x-30,x+180);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(L+x-20,x+200);
  context.lineTo(L+x-45,x+195);
  context.strokeStyle="black";
  context.stroke();
  }
  if (a>0) {
  context.fillText(`${falphav}`,x+200,220);
  context.beginPath();
  context.moveTo(x+80,l-100);
  context.lineTo(x+200,200);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+240,200);
  context.lineTo(L+x-20,l-100);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+200,200);
  context.lineTo(x+190,175);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+200,200);
  context.lineTo(x+180,200);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(L+x-20,l-100);
  context.lineTo(L+x-30,l-80);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(L+x-20,l-100);
  context.lineTo(L+x-40,l-100);
  context.strokeStyle="black";
  context.stroke();
  }
}

tabvar(20,30,400,200,"canvasC",a);
tabvar(20,30,400,200,"canvasS",a);

function tabsignes(x,y,L,l,canvas,x1,x2,a) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.save();
  context.beginPath();
  context.strokeRect(x,y,L,l);
  context.beginPath();
  context.moveTo(x,x+40);
  context.lineTo(L+x,x+40);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x,x+80);
  context.lineTo(L+x,x+80);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x,x+120);
  context.lineTo(L+x,x+120);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x,x+160);
  context.lineTo(L+x,x+160);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+70,y);
  context.lineTo(x+70,l+30);
  context.strokeStyle="black";
  context.stroke();
  context.font = '20px serif';
  context.fillText(`x`,47,50);
  context.fillText(`f(x)`,35,210);
  context.fillText(`${a}`,47,90);
  context.fillText(`x${sopx1}${opx1}`,40,130);
  context.fillText(`x${sopx2}${opx2}`,40,170);
  if (x1<x2 && a<0) {
  context.font = '20px serif';
  context.fillText(`${x1}`,x+170,50);
  context.fillText(`${x2}`,x+270,50);
  context.fillText(`-`,140,130);
  context.fillText(`+`,240,130);
  context.fillText(`+`,350,130);
  context.fillText(`-`,140,170);
  context.fillText(`-`,240,170);
  context.fillText(`+`,350,170);
  context.fillText(`-`,140,210);
  context.fillText(`+`,240,210);
  context.fillText(`-`,350,210);
  context.fillText(`-`,140,90);
  context.fillText(`-`,240,90);
  context.fillText(`-`,350,90);
  context.beginPath();
  context.moveTo(x+175,y+30);
  context.lineTo(x+175,l+30);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+275,y+30);
  context.lineTo(x+275,l+30);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+175, y+90, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+275, y+130, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+175, y+175, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+275, y+175, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  }
  if (x1>x2 && a<0) {
    context.font = '20px serif';
    context.fillText(`${x2}`,x+170,50);
    context.fillText(`${x1}`,x+270,50);
    context.fillText(`-`,140,130);
    context.fillText(`-`,240,130);
    context.fillText(`+`,350,130);
    context.fillText(`-`,140,170);
    context.fillText(`+`,240,170);
    context.fillText(`+`,350,170);
    context.fillText(`-`,140,210);
    context.fillText(`+`,240,210);
    context.fillText(`-`,350,210);
    context.fillText(`-`,140,90);
    context.fillText(`-`,240,90);
    context.fillText(`-`,350,90);
    context.beginPath();
    context.moveTo(x+175,y+30);
    context.lineTo(x+175,l+30);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+275,y+30);
    context.lineTo(x+275,l+30);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+275, y+90, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+175, y+130, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+175, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+275, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
  }
  if (x1==x2 && a<0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+220,50);
    context.fillText(`-`,170,90);
    context.fillText(`-`,320,90);
    context.fillText(`-`,170,130);
    context.fillText(`+`,320,130);
    context.fillText(`-`,170,170);
    context.fillText(`+`,320,170);
    context.fillText(`-`,170,210);
    context.fillText(`-`,320,210);
    context.beginPath();
    context.moveTo(x+225,y+30);
    context.lineTo(x+225,l+30);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+225, y+90, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+225, y+130, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+225, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+225, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
  }
  if (x1<x2 && a>0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+170,50);
    context.fillText(`${x2}`,x+270,50);
    context.fillText(`-`,140,130);
    context.fillText(`+`,240,130);
    context.fillText(`+`,350,130);
    context.fillText(`-`,140,170);
    context.fillText(`-`,240,170);
    context.fillText(`-`,350,170);
    context.fillText(`+`,140,210);
    context.fillText(`-`,240,210);
    context.fillText(`+`,350,210);
    context.fillText(`+`,140,90);
    context.fillText(`+`,240,90);
    context.fillText(`+`,350,90);
    context.beginPath();
    context.moveTo(x+175,y+30);
    context.lineTo(x+175,l+30);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+275,y+30);
    context.lineTo(x+275,l+30);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+175, y+90, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+275, y+130, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+175, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+275, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    }
    if (x1>x2 && a>0) {
      context.font = '20px serif';
      context.fillText(`${x2}`,x+170,50);
      context.fillText(`${x1}`,x+270,50);
      context.fillText(`-`,140,130);
      context.fillText(`-`,240,130);
      context.fillText(`+`,350,130);
      context.fillText(`-`,140,170);
      context.fillText(`+`,240,170);
      context.fillText(`+`,350,170);
      context.fillText(`+`,140,210);
      context.fillText(`-`,240,210);
      context.fillText(`+`,350,210);
      context.fillText(`+`,140,90);
      context.fillText(`+`,240,90);
      context.fillText(`+`,350,90);
      context.beginPath();
      context.moveTo(x+175,y+30);
      context.lineTo(x+175,l+30);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.moveTo(x+275,y+30);
      context.lineTo(x+275,l+30);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+275, y+90, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+175, y+130, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+175, y+175, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+275, y+175, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
    }
    if (x1==x2 && a>0) {
      context.font = '20px serif';
      context.fillText(`${x1}`,x+220,50);
      context.fillText(`+`,170,90);
      context.fillText(`+`,320,90);
      context.fillText(`-`,170,130);
      context.fillText(`+`,320,130);
      context.fillText(`-`,170,170);
      context.fillText(`+`,320,170);
      context.fillText(`+`,170,210);
      context.fillText(`+`,320,210);
      context.beginPath();
      context.moveTo(x+225,y+30);
      context.lineTo(x+225,l+30);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+225, y+90, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+225, y+130, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+225, y+175, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+225, y+175, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
    }
}

tabsignes(20,30,400,200,"canvasC2",x1,x2,a);
tabsignes(20,30,400,200,"canvasS2",x1,x2,a);

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

let listeenonces = [`Soit $f$ la fonctions définie sur $\\mathbb{R}$ par sa forme factorisée : $f(x)=${a}(x${sopx1}${opx1})(x${sopx2}${opx2})$.<br>
1) Déterminer les racines de $f$.<br>
2) Déterminer une équation de l'axe de symétrie de $f$.<br>
3) Déterminer les coordonnées du sommet $S$ de la courbe représentative de $f$.<br>
4) Dresser le tableau de variations de $f$.<br>
5) Dresser le tableau de signes de $f$.<br>
6) Résoudre $f(x) ${infsup} 0$.<br>
7) Déterminer la forme développée de $f$.`];

let listecorrection = [``];

enonce.innerHTML = listeenonces[0];
enonce2.innerHTML = ``;

solution1.innerHTML = `1) $x_1=${x1}$ et $x_2=${x2}$.<br>
2) $x=${alphav}$<br>
3) $S~(${alphav}~;${falphav})$<br>
4)`;
solution2.innerHTML = `5)`;
solution3.innerHTML = `6) $S=${sq6}$<br>
7) $f(x)=${a}x^2${scoefx}${coefx}x${scoefr}${coefr}$`;

correction1.innerHTML = `1) $x_1=${x1}$ et $x_2=${x2}$.<br>
2) $x=\\dfrac{x_1+x_2}{2}=\\dfrac{${x1}+${px2[0]}${x2}${px2[1]}}{2}=\\dfrac{${x1x2}}{2}=${alphav}$<br>
3) $S\\left(\\alpha~;f\\left(\\alpha\\right)\\right)$<br><br>
$\\hspace{5mm} \\alpha=\\dfrac{x_1+x_2}{2}=${alphav}$<br><br>
$\\hspace{5mm} f\\left(\\alpha\\right)=f(${alphav})=${a}\\times (${alphav}${sopx1}${opx1})\\times (${alphav}${sopx2}${opx2})=${a}\\times ${palphax1[0]}${alphax1v}${palphax1[1]}\\times ${palphax2[0]}${alphax2v}${palphax2[1]}=${falphav}$<br><br>
$\\underline{\\text{Conclusion :}}\\hspace{1cm} S~(${alphav}~;${falphav})$<br>
4)`;
correction2.innerHTML = `5)`;
correction3.innerHTML = `6) $S=${sq6}$<br>
7) <br> $\\begin{array}{rcl} f(x) & = & ${a}(x${sopx1}${opx1})(x${sopx2}${opx2}) \\\\
& = & ${a}(x^2${sopx2}${opx2}x${sopx1}${opx1}x${sopx1opx2}${opx1opx2}) \\\\
& = & ${a}(x^2${sopx2opx1}${opx2opx1}x${sopx1opx2}${opx1opx2}) \\\\
f(x) & = & ${a}x^2${scoefx}${coefx}x${scoefr}${coefr}
\\end{array}$`;

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
    location.href = "../../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../../Menus/Menu1ST.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../Menus/Menu1STfonctionsdegre2.html";
})