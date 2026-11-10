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


let t1 = nbrealéa(10,40);
let t2 = nbrealéa(20,50);
let tsolv = avecVirgule(t1*t2/100);
let t1t2v = avecVirgule(Math.round(t1/100*t2/100*10000)/10000);
let t1v = avecVirgule(t1/100);
let t2v = avecVirgule(t2/100);
let k = nbrealéa(0,2);

cercle(300,200,50,"canvasC");
cercle(520,160,20,"canvasC");
cercle2(300,200,100,"canvasC");
cercle2(520,100,20,"canvasC");
cercle3(300,200,150,"canvasC");
cercle3(520,50,20,"canvasC");



let enonce = document.getElementById('enonce');
let enonce2 = document.getElementById('enonce2');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
let correction1 = document.getElementById('correction1');
let correction2 = document.getElementById('correction2');

let listeenonces = [`La population d'un pays A représente $${t1}$ % de la population d'un continent C.<br>
Le continent C représensente $${t2}$ % de la population mondiale.<br>
Quelle proportion de la population mondiale le pays A représente-t-il ?`,
`La population d'un pays A représente $${t1}$ % de la population d'un continent C.<br>
La population de ce pays A représente également ${tsolv} % de la population mondiale.<br>
Quelle proportion de la population mondiale le continent C représente-t-il ?`,
`La population d'un pays A représente $${tsolv}$ % de la population mondiale.<br>
La population du continent C (auquel le pays A appartient) représente ${t2} % de la population mondiale.<br>
Quelle proportion de la population du continent C le pays A représente-t-il ?`];

let listecorrection2 = [`On a donc l'égalité :<br>
$\\begin{array}{rcl} P_{A/C}\\times P_{C/M} & = & P_{A/M} \\\\
${t1v}\\times ${t2v} & = & P_{A/M} \\\\
${t1t2v} & = & P_{A/M}
\\end{array}$<br>
Donc la population du pays A représente ${tsolv} % de la population mondiale ($${t1t2v}\\times 100$)`,
`On a donc l'égalité :<br>
$\\begin{array}{rcl} P_{A/C}\\times P_{C/M} & = & P_{A/M} \\\\
${t1v}\\times P_{C/M} & = & ${t1t2v} \\\\
P_{C/M} & = & \\dfrac{${t1t2v}}{${t1v}}=${t2v}
\\end{array}$<br>
Donc la population du continent C représente ${t2} % de la population mondiale ($${t2v}\\times 100$)`,
`On a donc l'égalité :<br>
$\\begin{array}{rcl} P_{A/C}\\times P_{C/M} & = & P_{A/M} \\\\
P_{A/C}\\times ${t2v} & = & ${t1t2v} \\\\
P_{C/M} & = & \\dfrac{${t1t2v}}{${t2v}}=${t1v}
\\end{array}$<br>
Donc la population du pays A représente ${t1} % de la population du continent C ($${t1v}\\times 100$)`];

listesolutions =[`$${tsolv}$ %`,`$${t2}$ %`,`$${t1}$ %`];

enonce.innerHTML = listeenonces[k];

solution.innerHTML = listesolutions[k];

correction1.innerHTML = `Nous sommes dans une situation de proportion échelonnée :`;
correction2.innerHTML = listecorrection2[k];

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