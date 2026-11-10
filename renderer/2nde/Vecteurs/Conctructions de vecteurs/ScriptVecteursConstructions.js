function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }




function cercle(x, y,r,canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.save();
  context.beginPath();
  context.arc(x, y, r, 0, 2 * Math.PI);
  context.restore();
  context.lineWidth=4;
  context.strokeStyle="black";
  context.stroke();
  context.font = '20px serif';
  context.fillText(`A`,511,165);
  context.beginPath();
  context.moveTo(390,160);
  context.lineTo(500,100);
  context.strokeStyle="blue";
  context.stroke();
  context.font = '20px serif';
  context.fillText(`C`,511,105);
  context.beginPath();
  context.moveTo(415,100);
  context.lineTo(500,50);
  context.strokeStyle="red";
  context.stroke();
  context.font = '20px serif';
  context.fillText(`M`,511,55);
  context.beginPath();
  context.moveTo(348,190);
  context.lineTo(500,160);
  context.strokeStyle="black";
  context.stroke();
}

function cercle2(x, y,r,canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.save();
  context.beginPath();
  context.arc(x, y, r, 0, 2 * Math.PI);
  context.restore();
  context.lineWidth=4;
  context.strokeStyle="blue";
  context.stroke();  
}

function cercle3(x, y,r,canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.save();
  context.beginPath();
  context.arc(x, y, r, 0, 2 * Math.PI);
  context.restore();
  context.lineWidth=4;
  context.strokeStyle="red";
  context.stroke();  
}

function avecVirgule(nombre){
  let nombreChaine = nombre.toString()
  nombreChaine = nombreChaine.replace('.', ',')
  return nombreChaine
}

var Grille = function(w,h,id) {
  var canvas = document.getElementById(id);
  var ctx = canvas.getContext('2d');
  ctx.canvas.width  = w;
  ctx.canvas.height = h;
  for (x=0;x<=w;x+=40) {
      for (y=0;y<=h;y+=40) {
          ctx.beginPath();
          ctx.setLineDash([5]);
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.strokeStyle="black";
          ctx.stroke();
      }
  }
};

function v1(xo,yo,xe,ye,id) {
  var canvas = document.getElementById(id);
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.moveTo(xo,yo);
  ctx.lineTo(xe,ye);
  ctx.lineWidth=2;
  ctx.strokeStyle="blue";
  ctx.stroke();
}

function v2(x1e,y1e,x2o,y2o,x2e,y2e,id) {
  var canvas = document.getElementById(id);
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.moveTo(x1e,y1e);
  ctx.lineTo(x1e+x2e-x2o,y1e+y2e-y2o);
  ctx.lineWidth=2;
  ctx.strokeStyle="green";
  ctx.stroke();
}

function vsomme(x1o,y1o,x1e,y1e,x2o,y2o,x2e,y2e,id) {
  var canvas = document.getElementById(id);
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.moveTo(x1o,y1o);
  ctx.lineTo(x1e+x2e-x2o,y1e+y2e-y2o);
  ctx.lineWidth=2;
  ctx.strokeStyle="red";
  ctx.stroke();
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
function rotate (M, O, angle) {
  var xM, yM, x, y;
  angle *= Math.PI / 180;
  xM = M.x - O.x;
  yM = M.y - O.y;
  x = xM * Math.cos (angle) + yM * Math.sin (angle) + O.x;
  y = - xM * Math.sin (angle) + yM * Math.cos (angle) + O.y;
  return ({x:Math.round (x), y:Math.round (y)});
}

function rotation(xM,yM,xO,yO,angle) {
  let rep;
  x = (xM-xO) * Math.cos (Math.PI*angle/180) + (yM-yO) * Math.sin (Math.PI*angle/180) + xO;
  y = - (xM-xO) * Math.sin (Math.PI*angle/180) + (yM-yO) * Math.cos (Math.PI*angle/180) + yO;
  return rep = [x,y];
}

function flechebleue(x1e,y1e,a,b,c,d,id) {
  var canvas = document.getElementById(id);
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.moveTo(x1e,y1e);
  ctx.lineTo(a,b);
  ctx.moveTo(x1e,y1e);
  ctx.lineTo(c,d);
  ctx.lineWidth=2;
  ctx.strokeStyle="blue";
  ctx.stroke();
}

function flecheverte(x1e,y1e,a,b,c,d,id) {
  var canvas = document.getElementById(id);
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.moveTo(x1e,y1e);
  ctx.lineTo(a,b);
  ctx.moveTo(x1e,y1e);
  ctx.lineTo(c,d);
  ctx.lineWidth=2;
  ctx.strokeStyle="green";
  ctx.stroke();
}

function flecherouge(x1e,y1e,a,b,c,d,id) {
  var canvas = document.getElementById(id);
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.moveTo(x1e,y1e);
  ctx.lineTo(a,b);
  ctx.moveTo(x1e,y1e);
  ctx.lineTo(c,d);
  ctx.lineWidth=2;
  ctx.strokeStyle="red";
  ctx.stroke();
}

let x1o = nbrealéa(1,5)*40;
let y1o = nbrealéa(1,5)*40;
let x1e = x1o+nbrealéa(1,5)*40;
let y1e = y1o+nbrealéa(1,5)*40;
let x2o = nbrealéa(1,5)*40;
let y2o = nbrealéa(1,5)*40;
let x2e = x2o+nbrealéa(1,5)*40;
let y2e = y2o+nbrealéa(1,5)*40;
let xoriv = x1e;
let yoriv = y1e;
let xextrev = x1e+x2e-x2o;
let yextrev = y1e+y2e-y2o;
let coefdirb = (y1e-y1o)/(x1e-x1o);
let ordorib = y1o-coefdirb*x1o; 
let xptinitb = x1e-10;
let yptinitb = coefdirb*xptinitb+ordorib;
let flechedb = rotation(xptinitb,yptinitb,x1e,y1e,-30);
let flechegb = rotation(xptinitb,yptinitb,x1e,y1e,30);
let coefdirv = (y2e-y2o)/(x2e-x2o);
let ordoriv = yextrev-coefdirv*xextrev; 
let xptinitv = x1e+x2e-x2o-15;
let yptinitv = coefdirv*xptinitv+ordoriv;
let flechedv = rotation(xptinitv,yptinitv,x1e+x2e-x2o,y1e+y2e-y2o,-30);
let flechegv = rotation(xptinitv,yptinitv,x1e+x2e-x2o,y1e+y2e-y2o,30);
let coefdirr = (yextrev-y1o)/(xextrev-x1o);
let ordorir = yextrev-coefdirr*xextrev; 
let xptinitr = x1e+x2e-x2o-10;
let yptinitr = coefdirr*xptinitr+ordorir;
let flechedr = rotation(xptinitr,yptinitr,x1e+x2e-x2o,y1e+y2e-y2o,-30);
let flechegr = rotation(xptinitr,yptinitr,x1e+x2e-x2o,y1e+y2e-y2o,30);





Grille(600,600,"grid");
v1(x1o,y1o,x1e,y1e,"grid");
v2(x1e,y1e,x2o,y2o,x2e,y2e,"grid");
vsomme(x1o,y1o,x1e,y1e,x2o,y2o,x2e,y2e,"grid");
flechebleue(x1e,y1e,flechedb[0],flechedb[1],flechegb[0],flechegb[1],"grid");
flecheverte(x1e+x2e-x2o,y1e+y2e-y2o,flechedv[0],flechedv[1],flechegv[0],flechegv[1],"grid");
flecherouge(x1e+x2e-x2o,y1e+y2e-y2o,flechedr[0],flechedr[1],flechegr[0],flechegr[1],"grid");


let enonce = document.getElementById('enonce');
let enonce2 = document.getElementById('enonce2');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
let correction1 = document.getElementById('correction1');
let correction2 = document.getElementById('correction2');

let listeenonces = [`xorib=${x1o}, yorib=${y1o}, xextreb=${x1e} et yextreb=${y1e}<br>
xoriv=${xoriv} et yoriv=${yoriv}<br>
xextrev=${xextrev} et yextrev=${yextrev}<br>
droite verte $y=${coefdirv}x+${ordoriv} $<br>
coef dir dte rouge = ${coefdirr}`];

let listecorrection2 = [``];

listesolutions =[``];

enonce.innerHTML = listeenonces[0];

solution.innerHTML = listesolutions[0];

correction1.innerHTML = ``;
correction2.innerHTML = ``;

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
    location.href = "../../../Menus/MenuSeconde.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSecondePourcentages.html";
})