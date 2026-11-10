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
  context.fillText(`p`,310,170);context.fillText(``,310,270);
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
let ebsb = a*d+c*f;
let ebsbv = avecVirgule(ebsb/10000);
let nump = a*d+b*e+c*f-ebsb;
let numpv = avecVirgule(nump/10000);

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
  On note : <br>
  E : &laquo Elle vient d'avoir un cours d'EPS &raquo ; <br>
  M : &laquo Elle vient d'avoir un cours de Maths &raquo ;<br>
  S : &laquo Elle vient d'avoir un cours de ST2S &raquo ;<br>
  B : &laquo Elle mange un mini BN &raquo ;<br>
  C : &laquo Elle mange un pancake &raquo .<br>
  L'arbre ci-dessous modélise les résultats de cette étude :
  
  `];

let listecorrection = [`1) ${dv} signifie que, après un cours d'EPS, elle mange un BN dans ${d} % des cas. <br>
  2) ${bv} signifie qu'elle a cours de Maths dans ${b} % des cas. <br>
  3) $P(B)=P\\left(E\\cap B\\right)+P\\left(M\\cap B\\right)+P\\left(S\\cap B\\right)$ <br>
  $\\phantom{3)~P(B)}=P(E)\\times P_E(B)+P(M)\\times P_M(B)+P(S)\\times P_S(B)$ <br>
  $\\phantom{3)~P(B)}=${av}\\times ${dv}+${bv}\\times p+${cv}\\times ${fv}$ <br>
  $\\phantom{3)~P(B)}=${bv}p+${ebsbv}$ <br>
  4) $P(B)=${bv}p+${ebsbv}=${sol2g}$ donc $${bv}p=${sol2g}-${ebsbv}=${numpv}$ donc <br>
  $p=\\dfrac{${numpv}}{${bv}}=${ev}$`];

let listesolutions = [`1) Après un cours d'EPS, elle mange un BN dans ${d} % des cas. <br>
  2) Elle a cours de Maths dans ${b} % des cas. <br>
  3) $P(B)=${bv}p+${ebsbv}$ <br>
  4) $p=${ev}$`]

enonce.innerHTML = listeenonces[0];
enonce2.innerHTML = `1) Interpréter le nombre ${dv} dans le contexte de l'exercice.<br>
  2) Interpréter le nombre ${bv} dans le contexte de l'exercice. <br>
  3) Montrer que $P(B)=${bv}p+${ebsbv}$ <br>
  4) Calculer p sachant que $P(B)=${sol2g}$`;


solution2.innerHTML = listesolutions[0];


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
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTaleTechno.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTSTProbasConditionnelles.html";
})