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

function nbrediff(x1) {
  let rep = nbrealéa(-10,10);
  while (rep==x1) {rep = nbrealéa(-10,10);}
  return rep;
}

function bornes(x1,x2) {
  let rep;
  let binf;
  let bsup;
  if (x1<x2) {binf=x1-nbrealéa(1,5);bsup=x2+nbrealéa(1,5);}
  else {binf=x2-nbrealéa(1,5);bsup=x1+nbrealéa(1,5);}
  return rep = [binf,bsup];
}

/*------------------------------------------------------------------------------
Retourne l'image d'un point par une rotation (repère X de gauche à droite, Y du
haut vers le bas).
ENTREE :
    M        Point à transformer
    O        Point centre de la rotation
    angle    Angle (en degrés)
SORTIE :
    Image de M par la rotation d'angle angle autour de O (les coordonnées ne
    sont pas entières).
------------------------------------------------------------------------------*/
function rotation(xM,yM,xO,yO,angle) {
  let rep;
  x = (xM-xO) * Math.cos (Math.PI*angle/180) + (yM-yO) * Math.sin (Math.PI*angle/180) + xO;
  y = - (xM-xO) * Math.sin (Math.PI*angle/180) + (yM-yO) * Math.cos (Math.PI*angle/180) + yO;
  return rep = [x,y];
}

let alpha = nbreouoppose(nbrealéa(1,10));
let a1 = 2*alpha;
let x1 = nbrealéa(-10,10);
let pgdx1 = parenthesegd(x1);
let x2 = nbrediff(x1);
let pgdx2 = parenthesegd(x2);
let b1 = -3*(alpha*x2+alpha*x1);
let sb1 = rienplus(b1);
let c1 = 6*alpha*x1*x2;
let sc1 = rienplus(c1);
let d1 = nbreouoppose(nbrealéa(1,10));
let sd1 = rienplus(d1);
let sprimed1 = plusmoins(d1);
let bornesdf = bornes(x1,x2);
let borneinf = bornesdf[0];
let pgdborneinf = parenthesegd(borneinf);
let bornesup = bornesdf[1];
let pgdbornesup = parenthesegd(bornesup);
let aprime1 = a1*3;
let bprime1 = b1*2;
let sbprime1 = rienplus(bprime1);
let alphaprime = 3*a1;
let opx1 = -x1;
let sopx1 = rienplus(opx1);
let opx2 = -x2;
let sopx2 = rienplus(opx2);
let pgdsopx2 = parenthesegd(opx2);
let opx1x2 = opx1+opx2;
let sopx1x2 = rienplus(opx1x2);
let opx1opx2 = opx1*opx2;
let sopx1opx2 = rienplus(opx1opx2);
let fborneinf = a1*borneinf**3+b1*borneinf**2+c1*borneinf+d1;
let fx1 = a1*x1**3+b1*x1**2+c1*x1+d1;
let fx2 = a1*x2**3+b1*x2**2+c1*x2+d1;
let fbornesup = a1*bornesup**3+b1*bornesup**2+c1*bornesup+d1;
let f1hd = rotation(225,308.75,235,295,30);
let f1hg = rotation(225,308.75,235,295,-30);
let f1hdx = f1hd[0];
let f1hdy = f1hd[1];
let f1hgx = f1hg[0];
let f1hgy = f1hg[1];
let f2bd = rotation(295,340.83,305,350,30);
let f2bg = rotation(295,340.83,305,350,-30);
let f2bdx = f2bd[0];
let f2bdy = f2bd[1];
let f2bgx = f2bg[0];
let f2bgy = f2bg[1];
let f3hd = rotation(365,308.33,375,300,30);
let f3hg = rotation(365,308.33,375,300,-30);
let f3hdx = f3hd[0];
let f3hdy = f3hd[1];
let f3hgx = f3hg[0];
let f3hgy = f3hg[1];
let f1bd = rotation(230,338.89,240,350,30);
let f1bg = rotation(230,338.89,240,350,-30);
let f1bdx = f1bd[0];
let f1bdy = f1bd[1];
let f1bgx = f1bg[0];
let f1bgy = f1bg[1];
let f2hd = rotation(295,309.09,305,300,30);
let f2hg = rotation(295,309.09,305,300,-30);
let f2hdx = f2hd[0];
let f2hdy = f2hd[1];
let f2hgx = f2hg[0];
let f2hgy = f2hg[1];
let f3bd = rotation(365,341.67,375,350,30);
let f3bg = rotation(365,341.67,375,350,-30);
let f3bdx = f3bd[0];
let f3bdy = f3bd[1];
let f3bgx = f3bg[0];
let f3bgy = f3bg[1];



function tabsignes(x,y,L,l,canvas,x1,x2,alphaprime,f1hdx,f1hdy,f1hgx,f1hgy,f2bdx,f2bdy,f2bgx,f2bgy,f3hdx,f3hdy,f3hgx,f3hgy,f1bdx,f1bdy,f1bgx,f1bgy,f2hdx,f2hdy,f2hgx,f2hgy,f3bdx,f3bdy,f3bgx,f3bgy) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.save();
  context.beginPath();
  context.strokeRect(x,y,L,l);
  context.beginPath();
  context.moveTo(x,x+50);
  context.lineTo(L+x,x+50);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x,x+100);
  context.lineTo(L+x,x+100);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x,x+150);
  context.lineTo(L+x,x+150);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x,x+200);
  context.lineTo(L+x,x+200);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x,x+250);
  context.lineTo(L+x,x+250);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+150,y);
  context.lineTo(x+150,l+30);
  context.strokeStyle="black";
  context.stroke();
  context.font = '20px serif';
  context.fillText(`x`,90,55);
  context.fillText(`${borneinf}`,180,55);
  context.fillText(`${bornesup}`,390,55);
  context.fillText(`${aprime1}`,80,105);
  context.fillText(`x${sopx1}${opx1}`,80,150);
  context.fillText(`x${sopx2}${opx2}`,80,200);
  context.fillText(`f'(x)`,80,250)
  context.fillText(`f(x)`,80,325)
  context.beginPath();
  context.moveTo(x+230,y+40);
  context.lineTo(x+230,l-80);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+300,y+40);
  context.lineTo(x+300,l-80);
  context.strokeStyle="black";
  context.stroke();

  if (x1<x2 && alphaprime>0) {
  context.font = '20px serif';
  context.fillText(`${x1}`,x+230,55);
  context.fillText(`${x2}`,x+300,55);
  context.fillText(`+`,205,105);context.fillText(`+`,280,105);context.fillText(`+`,365,105);
  context.fillText(`-`,205,145);context.fillText(`+`,280,145);context.fillText(`+`,365,145);
  context.fillText(`-`,205,200);context.fillText(`-`,280,200);context.fillText(`+`,365,200);
  context.fillText(`+`,205,250);context.fillText(`-`,280,250);context.fillText(`+`,365,250);
  context.fillText(`${fborneinf}`,180,y+340);
  context.fillText(`${fx1}`,230,y+260);
  context.fillText(`${fx2}`,300,y+340);
  context.fillText(`${fbornesup}`,370,y+260);
  context.beginPath();
  context.arc(x+230, y+115, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+300, y+165, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+230, y+215, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+300, y+215, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(195,y+320);
  context.lineTo(235,y+265);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(245,y+265);
  context.lineTo(305,y+320);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(315,y+320);
  context.lineTo(375,y+270);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(235,295);
  context.lineTo(f1hdx,f1hdy);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(235,295);
  context.lineTo(f1hgx,f1hgy);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(305,350);
  context.lineTo(f2bdx,f2bdy);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(305,350);
  context.lineTo(f2bgx,f2bgy);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(375,300);
  context.lineTo(f3hdx,f3hdy);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(375,300);
  context.lineTo(f3hgx,f3hgy);
  context.strokeStyle="black";
  context.stroke();
  }

  if (x1<x2 && alphaprime<0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+230,55);
    context.fillText(`${x2}`,x+300,55);
    context.fillText(`-`,205,105);context.fillText(`-`,280,105);context.fillText(`-`,365,105);
    context.fillText(`-`,205,145);context.fillText(`+`,280,145);context.fillText(`+`,365,145);
    context.fillText(`-`,205,200);context.fillText(`-`,280,200);context.fillText(`+`,365,200);
    context.fillText(`-`,205,250);context.fillText(`+`,280,250);context.fillText(`-`,365,250);
    context.fillText(`${fborneinf}`,180,y+260);
    context.fillText(`${fx1}`,230,y+340);
    context.fillText(`${fx2}`,300,y+260);
    context.fillText(`${fbornesup}`,370,y+340);
    context.beginPath();
    context.arc(x+230, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+300, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+230, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+300, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(195,y+270);
    context.lineTo(240,y+320);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(250,y+320);
    context.lineTo(305,y+270);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(315,y+270);
    context.lineTo(375,y+320);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(240,y+320);
    context.lineTo(f1bdx,f1bdy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(240,y+320);
    context.lineTo(f1bgx,f1bgy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(305,y+270);
    context.lineTo(f2hdx,f2hdy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(305,y+270);
    context.lineTo(f2hgx,f2hgy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(375,y+320);
    context.lineTo(f3bdx,f3bdy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(375,y+320);
    context.lineTo(f3bgx,f3bgy);
    context.strokeStyle="black";
    context.stroke();
    }

    if (x1>x2 && alphaprime>0) {
      context.font = '20px serif';
      context.fillText(`${x1}`,x+300,55);
      context.fillText(`${x2}`,x+230,55);
      context.fillText(`+`,205,105);context.fillText(`+`,280,105);context.fillText(`+`,365,105);
      context.fillText(`-`,205,145);context.fillText(`-`,280,145);context.fillText(`+`,365,145);
      context.fillText(`-`,205,200);context.fillText(`+`,280,200);context.fillText(`+`,365,200);
      context.fillText(`+`,205,250);context.fillText(`-`,280,250);context.fillText(`+`,365,250);
      context.fillText(`${fborneinf}`,180,y+340);
      context.fillText(`${fx1}`,300,y+340);
      context.fillText(`${fx2}`,230,y+260);
      context.fillText(`${fbornesup}`,370,y+260);
      context.beginPath();
      context.arc(x+300, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+230, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+230, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+300, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.moveTo(195,y+320);
      context.lineTo(235,y+265);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.moveTo(245,y+265);
      context.lineTo(305,y+320);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.moveTo(315,y+320);
      context.lineTo(375,y+270);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.moveTo(235,295);
      context.lineTo(f1hdx,f1hdy);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.moveTo(235,295);
      context.lineTo(f1hgx,f1hgy);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.moveTo(305,350);
      context.lineTo(f2bdx,f2bdy);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.moveTo(305,350);
      context.lineTo(f2bgx,f2bgy);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.moveTo(375,300);
      context.lineTo(f3hdx,f3hdy);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.moveTo(375,300);
      context.lineTo(f3hgx,f3hgy);
      context.strokeStyle="black";
      context.stroke();
      }

  if (x1>x2 && alphaprime<0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+300,55);
    context.fillText(`${x2}`,x+230,55);
    context.fillText(`-`,205,105);context.fillText(`-`,280,105);context.fillText(`-`,350,105);
    context.fillText(`-`,205,145);context.fillText(`-`,280,145);context.fillText(`+`,350,145);
    context.fillText(`-`,205,200);context.fillText(`+`,280,200);context.fillText(`+`,350,200);
    context.fillText(`-`,205,250);context.fillText(`+`,280,250);context.fillText(`-`,350,250);
    context.fillText(`${fborneinf}`,180,y+260);
    context.fillText(`${fx1}`,300,y+260);
    context.fillText(`${fx2}`,230,y+340);
    context.fillText(`${fbornesup}`,370,y+340);
    context.beginPath();
    context.arc(x+300, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+230, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+230, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+300, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(195,y+270);
    context.lineTo(240,y+320);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(250,y+320);
    context.lineTo(305,y+270);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(315,y+270);
    context.lineTo(375,y+320);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(240,y+320);
    context.lineTo(f1bdx,f1bdy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(240,y+320);
    context.lineTo(f1bgx,f1bgy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(305,y+270);
    context.lineTo(f2hdx,f2hdy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(305,y+270);
    context.lineTo(f2hgx,f2hgy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(375,y+320);
    context.lineTo(f3bdx,f3bdy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(375,y+320);
    context.lineTo(f3bgx,f3bgy);
    context.strokeStyle="black";
    context.stroke();
  }

}

tabsignes(20,30,400,350,"canvasC",x1,x2,alphaprime,f1hdx,f1hdy,f1hgx,f1hgy,f2bdx,f2bdy,f2bgx,f2bgy,f3hdx,f3hdy,f3hgx,f3hgy,f1bdx,f1bdy,f1bgx,f1bgy,f2hdx,f2hdy,f2hgx,f2hgy,f3bdx,f3bdy,f3bgx,f3bgy);
tabsignes(20,30,400,350,"canvasS",x1,x2,alphaprime,f1hdx,f1hdy,f1hgx,f1hgy,f2bdx,f2bdy,f2bgx,f2bgy,f3hdx,f3hdy,f3hgx,f3hgy,f1bdx,f1bdy,f1bgx,f1bgy,f2hdx,f2hdy,f2hgx,f2hgy,f3bdx,f3bdy,f3bgx,f3bgy);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
let correction1 = document.getElementById('correction1');
let correction2 = document.getElementById('correction2');
var correction = document.getElementById('correction');
var solution = document.getElementById('solution');
var solution1 = document.getElementById('solution1');
var solutions = document.getElementById('solutions');

let listeenonces = [`Soit $f$ la fonction définie sur $[${borneinf}~;${bornesup}]$ par $f(x)=${a1}x^3${sb1}${b1}x^2${sc1}${c1}x${sd1}${d1}$<br>
1) Déterminer $f'(x)$.<br>
2) Montrer que $f'(x)=${alphaprime}(x${sopx1}${opx1})(x${sopx2}${opx2}) $<br>
3) Dresser le tableau de variations de $f$ sur son ensemble de définition.`];

let listecorrections = [`$\\begin{array}{rrcl} 1) & f(x) & = & ${a1}x^3${sb1}${b1}x^2${sc1}${c1}x${sd1}${d1} \\\\
& f'(x) & = & ${a1}\\times 3x^2${sb1}${b1}\\times 2x${sc1}${c1}\\times 1${sprimed1} 0 \\\\
& f'(x) & = & ${aprime1}x^2${sbprime1}${bprime1}x${sc1}${c1}
\\end{array}$<br><br>
$\\begin{array}{rrcl} 2) & ${alphaprime}(x${sopx1}${opx1})(x${sopx2}${opx2}) & = & ${alphaprime}~(x^2${sopx2}${opx2}x${sopx1}${opx1}x${sopx1}${opx1}\\times ${pgdsopx2[0]}${sopx2}${opx2}${pgdsopx2[1]}) \\\\
& & = & ${alphaprime}\\times (x^2${sopx1x2}${opx1x2}x${sopx1opx2}${opx1opx2}) \\\\
& & = & \\color{red}{\\underbrace{\\color{black}{${aprime1}x^2${sbprime1}${bprime1}x${sc1}${c1}}}_{f'(x)}}
\\end{array}$<br>
3)`];

let listesolutions = [``];

enonce.innerHTML = listeenonces[0];
solution1.innerHTML = `1) $f'(x)=${aprime1}x^2${sbprime1}${bprime1}x${sc1}${c1}$<br>
2) $${alphaprime}(x${sopx1}${opx1})(x${sopx2}${opx2})=\\color{red}{\\underbrace{\\color{black}{${aprime1}x^2${sbprime1}${bprime1}x${sc1}${c1}}}_{f'(x)}}$<br>
3)`;
correction1.innerHTML = listecorrections[0];

correction2.innerHTML = `$\\bullet~f(${borneinf})=${a1}\\times${pgdborneinf[0]}${borneinf}${pgdborneinf[1]}^3${sb1}${b1}\\times${pgdborneinf[0]}${borneinf}${pgdborneinf[1]}^2${sc1}${c1}\\times${pgdborneinf[0]}${borneinf}${pgdborneinf[1]}${sd1}${d1}=${fborneinf}$<br>
$\\bullet~f(${x1})=${a1}\\times${pgdx1[0]}${x1}${pgdx1[1]}^3${sb1}${b1}\\times${pgdx1[0]}${x1}${pgdx1[1]}^2${sc1}${c1}\\times${pgdx1[0]}${x1}${pgdx1[1]}${sd1}${d1}=${fx1}$<br>
$\\bullet~f(${x2})=${a1}\\times${pgdx2[0]}${x2}${pgdx2[1]}^3${sb1}${b1}\\times${pgdx2[0]}${x2}${pgdx2[1]}^2${sc1}${c1}\\times${pgdx2[0]}${x2}${pgdx2[1]}${sd1}${d1}=${fx2}$<br>
$\\bullet~f(${bornesup})=${a1}\\times${pgdbornesup[0]}${bornesup}${pgdbornesup[1]}^3${sb1}${b1}\\times${pgdbornesup[0]}${bornesup}${pgdbornesup[1]}^2${sc1}${c1}\\times${pgdbornesup[0]}${bornesup}${pgdbornesup[1]}${sd1}${d1}=${fbornesup}$`;

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

