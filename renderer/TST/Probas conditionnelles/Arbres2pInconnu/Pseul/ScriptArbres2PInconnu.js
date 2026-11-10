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


function dessinarbre(av,b1v,abarrev,b1barrev,canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(230,107.5);context.lineTo(410,55);context.moveTo(230,107.5);context.lineTo(410,160);
  context.moveTo(230,317.5);context.lineTo(410,265);context.moveTo(230,317.5);context.lineTo(410,370);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(30,212.5);context.lineTo(210,107.5);context.moveTo(30,212.5);context.lineTo(210,317.5);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.font = '20px serif';
  context.fillText(`S`,214,112);context.fillText(`F`,214,322);
  context.fillText(`V`,412.5,59.5);context.fillText(`T`,412.5,164.5);context.fillText(`V`,412.5,269.5);context.fillText(`T`,412.5,374.5);
  context.fillText(`${av}`,110,140);context.fillText(`${abarrev}`,110,300);
  context.fillText(`${b1v}`,310,70);context.fillText(`${b1barrev}`,310,160);context.fillText(`p`,310,280);context.fillText(``,310,370);
}

function arrondi(a,n) {
  let rep = avecVirgule(Math.round(a*10**n)/10**n);
  return rep;
}

let a = nbrealéa(1,99);
let av = avecVirgule(a/100);
let b1 = nbrealéa(1,99);
let b1v = avecVirgule(b1/100);
let b2 = nbrealéa(1,99);
let b2v = avecVirgule(b2/100);
let abarre = Math.round((1-a/100)*100)/100;
let abarrev = avecVirgule(abarre);
let b1barre = Math.round((1-b1/100)*100)/100;
let b1barrev = avecVirgule(b1barre);
let b2barre = Math.round((1-b2/100)*100)/100;
let b2barrev = avecVirgule(b2barre);
let sol2a = avecVirgule((a*b1)/10000);
let sol2b = avecVirgule((100-a)*(100-b2)/10000);
let sol2c = avecVirgule((a*b1+(100-a)*b2)/10000);
let sol2d = avecVirgule((a*(100-b1)+(100-a)*(100-b2))/10000);
let sol2e = avecVirgule(Math.round((a*b1)/(a*b1+(100-a)*b2)*10000)/10000);
let sol2f = avecVirgule(Math.round(((100-a)*(100-b2))/(a*(100-b1)+(100-a)*(100-b2))*10000)/10000);
let pv = avecVirgule(Math.round((a*b1+(100-a)*b2))/100);
let nump = (a*b1+(100-a)*b2)/10000-(a*b1)/10000;
let numpv = avecVirgule(Math.round(nump*10000)/10000);
let num = nbrealéa(1,100);
let denom = nbrealéa(1,100);
let arron = arrondi(num/denom,4);


dessinarbre(av,b1v,abarrev,b1barrev,"canvasS");
dessinarbre(av,b1v,abarrev,b1barrev,"canvasC");

let enonce = document.getElementById('enonce');
let enonce2 = document.getElementById('enonce2');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
let solutionRB = document.getElementById('solutionRB');
let solutionRH = document.getElementById('solutionRH');

let listeenonces = [`Un service de programmes à la demande propose des films et des séries.<br>
  Une étude a été réalisée sur les habitudes de ses abonnés.
  On note <br>
  S : &laquo l'abonné préfère les séries &raquo ; <br>
  F : &laquo l'abonné préfère les films &raquo ;<br>
  V : &laquo l'abonné regarde son programme en version originale &raquo ;<br>
  T : &laquo l'abonné regarde son programme en version traduite &raquo .<br>
  L'arbre ci-dessous modélise les résultats de cette étude :
 `];

let listecorrection = [`1) ${b1v} signifie que, parmi les personnes qui préfèrent les séries, ${b1} % les regarde en version originale.<br>
  2) ${av} signifie que ${a} % des abonnés préfèrent les séries.<br>
  3) $P(V)=P\\left(S \\cap V\\right)+P\\left(F\\cap V\\right)$ <br>
  $\\phantom{3)~P(V)}=P(S)\\times P_S(V)+P(F)\\times P_F(V)$ <br>
  $\\phantom{3)~P(V)}=${av}\\times ${b1v}+${abarrev}\\times p$ <br>
  $\\phantom{3)~P(V)}=${sol2a}+${abarrev}p$ <br>
  4) $P(V)=${sol2a}+${abarrev}p=${sol2c}$ donc <br>
  $${abarrev}p=${sol2c}-${sol2a}=${numpv}$ et donc $p=\\dfrac{${numpv}}{${abarrev}}=${b2v}$`];

let listesolutions = [`1) Parmi les personnes qui préfèrent les séries, ${b1} % les regarde en version originale.<br>
  2) ${a} % des abonnés préfèrent les séries.<br>
  3) $P(V)=${sol2a}+${abarrev}p$ <br>
  4) $p=${b2v}$`]

enonce.innerHTML = listeenonces[0];
enonce2.innerHTML = ` 1) Interpréter le nombre ${b1v} dans le contexte de l'exercice.<br>
  2) Interpréter le nombre ${av} dans le contexte de l'exercice. <br>
  3) Montrer que $P(V)=${sol2a}+${abarrev}p$<br>
  4) Selon l'étude, ${pv} % des abonnés préfèrent regarder son programme en version originale.<br>
  En déduire la valeur de p.<br>
  `;


solution.innerHTML = listesolutions[0];

correctiond.innerHTML = listecorrection[0];



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
    location.href = "../../../../Menus/MenuTaleTechno.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../Menus/MenuTSTProbasConditionnelles.html";
})