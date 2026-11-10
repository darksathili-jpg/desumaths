function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
  }

  function arrondi(a,n) {
    let rep = Math.round(a*10**n)/10**n;
    return rep;
  }
  
  function arrondiv(a,n) {
    let rep = avecVirgule(Math.round(a*10**n)/10**n);
    return rep;
  }

  function plusmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}

function valabs(a) {
  let rep;
  if (a>0) {rep=a;} else {rep=-a;}
  return rep;
}

function rienmoins(a) {
  let rep;
  if (a<0) {rep='-';} else {rep='';}
  return rep;
}

function rienplus(a) {
  let rep;
  if (a<0) {rep='';} else {rep='+';}
  return rep;
}


function TrianglePascal(canvas,n,k,n2,k2,n3,k3) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(10,50);context.lineTo(610,50);context.moveTo(10,100);context.lineTo(610,100);context.moveTo(10,150);context.lineTo(610,150);
  context.moveTo(10,200);context.lineTo(610,200);context.moveTo(10,250);context.lineTo(610,250);context.moveTo(10,300);context.lineTo(610,300);
  context.moveTo(10,350);context.lineTo(610,350);context.moveTo(10,400);context.lineTo(610,400);context.moveTo(10,450);context.lineTo(610,450);
  context.moveTo(10,500);context.lineTo(610,500);context.moveTo(10,550);context.lineTo(610,550);context.moveTo(10,600);context.lineTo(610,600);
  context.moveTo(10,650);context.lineTo(610,650);
  context.moveTo(10,50);context.lineTo(10,650);context.moveTo(60,50);context.lineTo(60,650);context.moveTo(110,50);context.lineTo(110,650);
  context.moveTo(160,50);context.lineTo(160,650);context.moveTo(210,50);context.lineTo(210,650);context.moveTo(260,50);context.lineTo(260,650);
  context.moveTo(310,50);context.lineTo(310,650);context.moveTo(360,50);context.lineTo(360,650);context.moveTo(410,50);context.lineTo(410,650);
  context.moveTo(460,50);context.lineTo(460,650);context.moveTo(510,50);context.lineTo(510,650);context.moveTo(560,50);context.lineTo(560,650);
  context.moveTo(610,50);context.lineTo(610,650);
  context.moveTo(10,50);context.lineTo(60,100);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.font = '20px serif';context.fillStyle="blue";
  context.fillText(`k`,40,75);context.fillText(`n`,20,85);
  context.fillText(`0`,80,80);context.fillText(`1`,130,80);context.fillText(`2`,180,80);context.fillText(`3`,230,80);context.fillText(`4`,280,80);
  context.fillText(`5`,330,80);context.fillText(`6`,380,80);context.fillText(`7`,430,80);context.fillText(`8`,480,80);context.fillText(`9`,530,80);
  context.fillText(`10`,575,80);
  context.fillText(`0`,30,130);context.fillText(`1`,30,180);context.fillText(`2`,30,230);context.fillText(`3`,30,280);context.fillText(`4`,30,330);
  context.fillText(`5`,30,380);context.fillText(`6`,30,430);context.fillText(`7`,30,480);context.fillText(`8`,30,530);context.fillText(`9`,30,580);
  context.fillText(`10`,25,630);
  context.fillStyle="black";
  context.fillText(`1`,80,130);
  context.fillText(`1`,80,180);context.fillText(`1`,130,180);
  context.fillText(`1`,80,230);context.fillText(`2`,130,230);context.fillText(`1`,180,230);
  context.fillText(`1`,80,280);context.fillText(`3`,130,280);context.fillText(`3`,180,280);context.fillText(`1`,230,280);
  context.fillText(`1`,80,330);context.fillText(`4`,130,330);context.fillText(`6`,180,330);context.fillText(`4`,230,330);context.fillText(`1`,280,330);
  context.fillText(`1`,80,380);context.fillText(`5`,130,380);context.fillText(`10`,175,380);context.fillText(`10`,225,380);context.fillText(`5`,280,380);context.fillText(`1`,330,380);
  context.fillText(`1`,80,430);context.fillText(`6`,130,430);context.fillText(`15`,175,430);context.fillText(`20`,225,430);context.fillText(`15`,275,430);context.fillText(`6`,330,430);context.fillText(`1`,380,430);
  context.fillText(`1`,80,480);context.fillText(`7`,130,480);context.fillText(`21`,175,480);context.fillText(`35`,225,480);context.fillText(`35`,275,480);context.fillText(`21`,325,480);context.fillText(`7`,380,480);context.fillText(`1`,430,480);
  context.fillText(`1`,80,530);context.fillText(`8`,130,530);context.fillText(`28`,175,530);context.fillText(`56`,225,530);context.fillText(`70`,275,530);context.fillText(`56`,325,530);context.fillText(`28`,375,530);context.fillText(`8`,430,530);context.fillText(`1`,480,530);
  context.fillText(`1`,80,580);context.fillText(`9`,130,580);context.fillText(`36`,175,580);context.fillText(`84`,225,580);context.fillText(`126`,270,580);context.fillText(`126`,320,580);context.fillText(`84`,375,580);context.fillText(`36`,425,580);context.fillText(`9`,480,580);context.fillText(`1`,530,580);
  context.fillText(`1`,80,630);context.fillText(`10`,125,630);context.fillText(`45`,175,630);context.fillText(`120`,220,630);context.fillText(`210`,270,630);context.fillText(`252`,320,630);context.fillText(`210`,370,630);context.fillText(`120`,420,630);context.fillText(`45`,475,630);context.fillText(`10`,525,630);context.fillText(`1`,580,630);
  context.strokeStyle="red";
  context.strokeRect(67+50*k,107+50*n,35,35);
  context.strokeStyle="green";
  context.strokeRect(67+50*k2,107+50*n2,35,35);
  context.strokeStyle="violet";
  context.strokeRect(67+50*k3,107+50*n3,35,35);
}


function fact(nbr){
  var i, nbr, f = 1;
  for(i = 1; i <= nbr; i++)  
  {
    f = f * i;   // ou f *= i;
  }  
  return f;
}

let n = nbrealéa(0,10);
let k = nbrealéa(0,n);
let n2 = nbrealéa(0,10);
let k2 = nbrealéa(0,n2);
let n3 = nbrealéa(0,10);
let k3 = nbrealéa(0,n3);
let repq2 = fact(n)/(fact(n-k)*fact(k));
let repq3 = fact(n2)/(fact(n2-k2)*fact(k2));
let repq4 = fact(n3)/(fact(n3-k3)*fact(k3));





TrianglePascal("canvasS",n,k,n2,k2,n3,k3);
TrianglePascal("canvasC",n,k,n2,k2,n3,k3);


let enonce = document.getElementById('enonce');
let enonce2 = document.getElementById('enonce2');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


let listeenonces = [`1) Construire le triangle de Pascal jusqu'à $n=10$.<br>
  2) À l'aide du triangle de Pascal, déterminer $\\color{red}{\\binom{${n}}{${k}}}$ <br><br>
  3) À l'aide du triangle de Pascal, déterminer $\\color{green}{\\binom{${n2}}{${k2}}}$ <br><br>
  4) À l'aide du triangle de Pascal, déterminer $\\color{violet}{\\binom{${n3}}{${k3}}}$ <br>`];

let listecorrection = [`1)`,`2) 2) $\\binom{${n}}{${k}}=${repq2}$ <br><br>
   3) $\\binom{${n2}}{${k2}}=${repq3}$ <br><br>
   4) $\\binom{${n3}}{${k3}}=${repq4}$`];

let listesolutions = [`1)`,
  `2) $\\binom{${n}}{${k}}=${repq2}$ <br><br>
   3) $\\binom{${n2}}{${k2}}=${repq3}$ <br><br>
   4) $\\binom{${n3}}{${k3}}=${repq4}$`]

enonce.innerHTML = listeenonces[0];



solution1.innerHTML = listesolutions[0];
solution2.innerHTML = listesolutions[1];

correctiond1.innerHTML = listecorrection[0];
correctiond2.innerHTML = listecorrection[1];



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
    location.href = "../../../Menus/MenuTaleTechno.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTSTVariablesAleatoires.html";
})