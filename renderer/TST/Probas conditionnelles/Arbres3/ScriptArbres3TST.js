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
  context.moveTo(230,60);context.lineTo(410,10);context.moveTo(230,60);context.lineTo(410,110);
  context.moveTo(230,210);context.lineTo(410,160);context.moveTo(230,210);context.lineTo(410,260);
  context.moveTo(230,360);context.lineTo(410,310);context.moveTo(230,360);context.lineTo(410,410);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(30,210);context.lineTo(200,60);context.moveTo(30,210);context.lineTo(200,210);context.moveTo(30,210);context.lineTo(200,360);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.font = '20px serif';
  context.fillText(`E`,210,60);context.fillText(`M`,210,210);context.fillText(`S`,210,360);
  context.fillText(`B`,420,20);context.fillText(`C`,420,120);
  context.fillText(`B`,420,170);context.fillText(`C`,420,270);
  context.fillText(`B`,420,320);context.fillText(`C`,420,420);
  context.fillText(`${av}`,110,100);context.fillText(`${bv}`,110,200);context.fillText(`${cv}`,140,300);
  context.fillText(`${dv}`,310,20);context.fillText(`${dbarrev}`,310,120);
  context.fillText(`${ev}`,310,170);context.fillText(`${ebarrev}`,310,270);
  context.fillText(`${fv}`,310,320);context.fillText(`${fbarrev}`,310,410);
}

let a = nbrealéa(1,49);
let av = avecVirgule(a/100);
let b = nbrealéa(1,49);
let bv = avecVirgule(b/100);
let c = 100-a-b;
let cv = avecVirgule(c/100);
let d = nbrealéa(1,99);
let dv = avecVirgule(d/100);
let e = nbrealéa(1,99);
let ev = avecVirgule(e/100);
let f = nbrealéa(1,99);
let fv = avecVirgule(f/100);
let dbarre = Math.round((1-d/100)*100)/100;
let dbarrev = avecVirgule(dbarre);
let ebarre = Math.round((1-e/100)*100)/100;
let ebarrev = avecVirgule(ebarre);
let fbarre = Math.round((1-f/100)*100)/100;
let fbarrev = avecVirgule(fbarre);
let sol2a = avecVirgule((a*d)/10000);
let sol2b = avecVirgule((b*(100-e))/10000);
let sol2c = avecVirgule((c*f)/10000);
let sol2d = avecVirgule((b*e)/10000);
let sol2e = avecVirgule((a*(100-d))/10000);
let sol2f = avecVirgule((c*(100-f))/10000);
let sol2g = avecVirgule((a*d+b*e+c*f)/10000);
let sol2h = avecVirgule((a*(100-d)+b*(100-e)+c*(100-f))/10000);
let sol2i = avecVirgule(Math.round((b*e)/(a*d+b*e+c*f)*10000)/10000);
let sol2j = avecVirgule(Math.round((c*(100-f))/(a*(100-d)+b*(100-e)+c*(100-f))*10000)/10000);
let sol2k = avecVirgule(Math.round((a*d)/(a*d+b*e+c*f)*10000)/10000);

dessinarbre(av,bv,bv,dv,ev,fv,"canvasS");
dessinarbre(av,bv,bv,dv,ev,fv,"canvasC");

let enonce = document.getElementById('enonce');
let enonce2 = document.getElementById('enonce2');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
let solutionRB = document.getElementById('solutionRB');
let solutionRH = document.getElementById('solutionRH');

let listeenonces = [`Romane C. (l'anonymat c'est important !), élève de TST2S, a souvent faim en sortant de cours. <br>
  Elle mange soit des mini BN soit des pancakes.<br>
  On a effectué des statistiques à l'issue des cours d'EPS, de Maths et de ST2S :<br>
  Elle a cours d'EPS dans ${a} % des cas où elle mange, cours de Maths dans ${b} % des cas et cours de ST2S dans ${c} % des cas.<br>
  Elle mange des mini BN dans ${d} % des cas après les cours d'EPS, dans ${e} % des cas après les cours de Maths et dans ${f}% des cas après les cours de ST2S.<br>
  On note E : &laquo Elle vient d'avoir un cours d'EPS &raquo ; <br>
  M : &laquo Elle vient d'avoir un cours de Maths &raquo ;<br>
  S : &laquo Elle vient d'avoir un cours de ST2S &raquo ;<br>
  B : &laquo Elle mange un mini BN &raquo ;<br>
  C : &laquo Elle mange un pancake &raquo .<br>
  1) Construire un arbre pondéré représentant la situation.<br>
  2) Calculer les probabilités suivantes à l'aide de l'arbre pondére : <br>
  a) $P\\left(E\\cap B \\right)$ <br>
  b) $P\\left(M\\cap C \\right)$ <br>
  c) $P\\left(S\\cap B \\right)$ <br>
  d) $P\\left(M\\cap B \\right)$ <br>
  e) $P\\left(E\\cap C \\right)$ <br>
  f) $P\\left(S\\cap C \\right)$ <br>
  g) $P\\left(B \\right)$ <br>
  h) $P\\left(C \\right)$ <br>
  i) $P_{B}\\left(M \\right)$ <br>
  j) $P_{C}\\left(S \\right)$ <br>
  k) $P_{B}\\left(E \\right)$ <br>`];

let listecorrection = [`2) a) $P\\left(E\\cap B \\right)=P(E)\\times P_E(B)=${av}\\times ${dv}=${sol2a} $ <br>
b) $P\\left(M\\cap C \\right)=P(M)\\times P_M(C)=${bv}\\times ${ebarrev}=${sol2b} $ <br>
c) $P\\left(S\\cap B \\right)=P(S)\\times P_S(B)=${cv}\\times ${fv}=${sol2c} $ <br>
d) $P\\left(M\\cap B \\right)=P(M)\\times P_M(B)=${bv}\\times ${ev}=${sol2d} $ <br>
e) $P\\left(E\\cap C \\right)=P(E)\\times P_E(C)=${av}\\times ${dbarrev}=${sol2e} $ <br>
f) $P\\left(S\\cap C \\right)=P(S)\\times P_S(C)=${cv}\\times ${fbarrev}=${sol2f} $ <br>
g) $P\\left(B\\right)=P\\left(E\\cap B\\right)+P\\left(M\\cap B\\right)+P\\left(S\\cap B\\right)$ <br>
$\\phantom{\\text{g) }P\\left(B\\right)}=${sol2a}+${sol2d}+${sol2c}=${sol2g}$ <br>
h) $P\\left(C\\right)=P\\left(E\\cap C\\right)+P\\left(M\\cap C\\right)+P\\left(S\\cap C\\right)$ <br>
$\\phantom{\\text{h) }P\\left(C\\right)}=${sol2e}+${sol2b}+${sol2f}=${sol2h}$ <br><br>
i) $P_{B}\\left(M \\right)=\\dfrac{P\\left(M\\cap B\\right)}{P(B)}=\\dfrac{${sol2d}}{${sol2g}}\\approx ${sol2i}$ <br><br>
j) $P_{C}\\left(S \\right)=\\dfrac{P\\left(S\\cap C\\right)}{P(C)}=\\dfrac{${sol2f}}{${sol2h}}\\approx ${sol2j}$ <br><br>
k) $P_{B}\\left(E \\right)=\\dfrac{P\\left(E\\cap B\\right)}{P(B)}=\\dfrac{${sol2a}}{${sol2g}}\\approx ${sol2k}$
`];

let listesolutions = [`2) a) $P\\left(E\\cap B \\right)=${sol2a} $ <br>
b) $P\\left(M\\cap C \\right)=P(M)\\times P_M(C)=${sol2b} $ <br>
c) $P\\left(S\\cap B \\right)=P(S)\\times P_S(B)=${sol2c} $ <br>
d) $P\\left(M\\cap B \\right)=P(M)\\times P_M(B)=${sol2d} $ <br>
e) $P\\left(E\\cap C \\right)=P(E)\\times P_E(C)=${sol2e} $ <br>
f) $P\\left(S\\cap C \\right)=P(S)\\times P_S(C)=${sol2f} $ <br>
g) $P\\left(B\\right)=${sol2g}$ <br>
h) $P\\left(C\\right)=${sol2h}$ <br>
i) $P_{B}\\left(M \\right)\\approx ${sol2i}$ <br>
j) $P_{C}\\left(S \\right)\\approx ${sol2j}$ <br>
k) $P_{B}\\left(E \\right)\\approx ${sol2k}$ `]

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