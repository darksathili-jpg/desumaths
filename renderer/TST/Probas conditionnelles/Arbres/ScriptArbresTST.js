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


function dessinarbre(av,b1v,b2v,abarrev,b1barrev,b2barrev,canvas) {
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
  context.fillText(`${b1v}`,310,70);context.fillText(`${b1barrev}`,310,160);context.fillText(`${b2v}`,310,280);context.fillText(`${b2barrev}`,310,370);
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


dessinarbre(av,b1v,b2v,abarrev,b1barrev,b2barrev,"canvasS");
dessinarbre(av,b1v,b2v,abarrev,b1barrev,b2barrev,"canvasC");

let enonce = document.getElementById('enonce');
let enonce2 = document.getElementById('enonce2');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
let solutionRB = document.getElementById('solutionRB');
let solutionRH = document.getElementById('solutionRH');

let listeenonces = [`Un service de programmes à la demande propose des films et des séries.<br>
  On sait que, parmi les abonnés, ${a} % des abonnés préférent les séries.<br>
  Parmi les abonnés qui préfèrent les séries, ${b1} % les regardent en version originale.<br>
  Parmi les abonnés préférant les films, ${b2} % les regardent en version originale.<br>
  On note S : &laquo l'abonné préfère les séries &raquo ; <br>
  F : &laquo l'abonné préfère les films &raquo ;<br>
  V : &laquo l'abonné regarde son programme en version originale &raquo ;<br>
  T : &laquo l'abonné regarde son programme en version traduite &raquo .<br>
  1) Construire un arbre pondéré représentant la situation.<br>
  2) Calculer les probabilités suivantes à l'aide de l'arbre pondére : <br>
  a) $P\\left(S\\cap V \\right)$ <br>
  b) $P\\left(F\\cap T \\right)$ <br>
  c) $P\\left(V \\right)$ <br>
  d) $P\\left(T \\right)$ <br>
  e) $P_{V}\\left(S \\right)$ <br>
  f) $P_{T}\\left(F \\right)$ <br>`];

let listecorrection = [`2) a) $P\\left(S\\cap V \\right)=P(S)\\times P_S(V)=${av}\\times ${b1v}=${sol2a} $ <br>
  b) $P\\left(F\\cap T \\right)=P(F)\\times P_F(T)=${abarrev}\\times ${b2barrev}=${sol2b} $ <br>
  c) $P\\left(V \\right)=P\\left(S\\cap V\\right)+P\\left(F\\cap V\\right) $ <br>
  $\\phantom{c)~P\\left(V \\right)}=P(S)\\times P_S(V)+P(F)\\times P_F(V)$ <br>
  $\\phantom{c)~P\\left(V \\right)}=${av}\\times ${b1v}+${abarrev}\\times ${b2v}$ <br>
  $\\phantom{c)~P\\left(V \\right)}=${sol2c}$ <br>
  d) $P\\left(T \\right)=P\\left(S\\cap T\\right)+P\\left(F\\cap T\\right) $ <br>
  $\\phantom{d)~P\\left(T \\right)}=P(S)\\times P_S(T)+P(F)\\times P_F(T)$ <br>
  $\\phantom{d)~P\\left(T \\right)}=${av}\\times ${b1barrev}+${abarrev}\\times ${b2barrev}$ <br>
  $\\phantom{d)~P\\left(T \\right)}=${sol2d}$ <br><br>
  e) $P_{V}\\left(S \\right)=\\dfrac{P\\left(V\\cap S\\right)}{P(V)}=\\dfrac{${sol2a}}{${sol2c}}\\approx ${sol2e}$ <br><br>
  f) $P_{T}\\left(F \\right)=\\dfrac{P\\left(F\\cap T\\right)}{P(T)}=\\dfrac{${sol2b}}{${sol2d}}\\approx ${sol2f}$ <br>`];

let listesolutions = [`2) a) $P\\left(S\\cap V \\right)=${sol2a} $ <br>
  b) $P\\left(F\\cap T \\right)=${sol2b} $ <br>
  c) $P\\left(V \\right)=${sol2c}$ <br>
  d) $P\\left(T \\right)=${sol2d}$ <br><br>
  e) $P_{V}\\left(S \\right)\\approx ${sol2e}$ <br><br>
  f) $P_{T}\\left(F \\right)\\approx ${sol2f}$ <br>`]

enonce.innerHTML = listeenonces[0];
enonce2.innerHTML = ``;

solution1.innerHTML = `1)`;
solution2.innerHTML = listesolutions[0];

correction1.innerHTML = `1)`;
correction2.innerHTML = listecorrection[0];


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
    location.href = "../../../Menus/MenuTSTProbasConditionnelles.html";
})