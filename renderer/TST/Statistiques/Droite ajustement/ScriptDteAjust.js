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
    let rep = avecVirgule(Math.round(a*10**n)/10**n);
    return rep;
  }


function dessintableau(canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(10,50);context.lineTo(610,50);
  context.moveTo(10,150);context.lineTo(610,150);
  context.moveTo(10,250);context.lineTo(610,250);
  context.moveTo(10,350);context.lineTo(610,350);
  context.moveTo(10,50);context.lineTo(10,350);
  context.moveTo(610,50);context.lineTo(610,350);
  context.moveTo(110,50);context.lineTo(110,350);
  context.moveTo(210,50);context.lineTo(210,350);
  context.moveTo(310,50);context.lineTo(310,350);
  context.moveTo(410,50);context.lineTo(410,350);
  context.moveTo(510,50);context.lineTo(510,350);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.font = '20px serif';
  context.fillText(`Année`,30,105);context.fillText(`Rang de`,20,190);context.fillText(`l'année xi`,20,220);context.fillText(`Nombre de`,15,290);context.fillText(`malades yi`,15,320);
  context.fillText(`${a1}`,140,105);context.fillText(`${a2}`,240,105);context.fillText(`${a3}`,340,105);context.fillText(`${a4}`,440,105);context.fillText(`${a5}`,540,105);
  context.fillText(`1`,155,205);context.fillText(`2`,255,205);context.fillText(`3`,355,205);context.fillText(`4`,455,205);context.fillText(`5`,555,205);
  context.fillText(`${m1}`,145,305);context.fillText(`${m2}`,245,305);context.fillText(`${m3}`,345,305);context.fillText(`${m4}`,445,305);context.fillText(`${m5}`,545,305);
}

let a1 = nbrealéa(2000,2010);
let a2 = a1+1;
let a3 = a1+2;
let a4 = a1+3;
let a5 = a1+4;
let m1 = nbrealéa(400,600);
let m2 = nbrealéa(400,600);
let m3 = nbrealéa(400,600);
let m4 = nbrealéa(400,600);
let m5 = nbrealéa(400,600);
let somx = 1+2+3+4+5;
let somy = m1+m2+m3+m4+m5;
let somxy = 1*m1+2*m2+3*m3+4*m4+5*m5;
let somxcarre = 1**2+2**2+3**2+4**2+5**2;
let somycarre = m1**2+m2**2+m3**2+m4**2+m5**2;
let moyx = (1+2+3+4+5)/5;
let moyy = (m1+m2+m3+m4+m5)/5;
let a = (5*somxy-somx*somy)/(5*somxcarre-somx**2);
let av = arrondi(a,2);
let b = moyy-a*moyx;
let bv = arrondi(b,2);
let q2 = a5+nbrealéa(10,15);
let q2m = q2-a5+5;
let q3 = m5+nbrealéa(210,400);
let repq2 = a*q2m+b;
let repq2v = arrondi(repq2,0);
let q3moinsb = q3-b;
let q3moinsbv = arrondi(q3moinsb,2);
let repq3 = q3moinsb/a;
let repq3v = arrondi(repq3,0);
let anneeq3 = arrondi(repq3+a1-1,0);



dessintableau("canvasE");

let enonce = document.getElementById('enonce');
let enonce2 = document.getElementById('enonce2');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


let listeenonces = [`On donne ci-dessous le tableau donnant le nombre de personnes d'une région ayant contracté la grippe :`,
  `Déterminer la droite d'ajustement $d$ de $y$ en $x$ par la méthode des moindres carrés. On arrondira les coefficients au centième.`];

let listecorrection = [`1) $y=${av}x+${bv}$ <br>
  2) ${q2} correspond à $x=${q2m}$ donc $y=${av}\\times ${q2m}+${bv}\\approx ${repq2v}$ <br>
  Donc on peut prévoir ${repq2v} cas en ${q2}. <br>
  3) Il faut résoudre l'équation $y=${av}x+${bv}=${q3}$ <br>
  On obtient donc : $${av}x=${q3}-${bv}=${q3moinsbv}$ <br>
  Et donc : $x=\\dfrac{${q3moinsbv}}{${av}}\\approx ${repq3v}$, ce qui correpond à l'année ${anneeq3}. `];

let listesolutions = [`1) $y=${av}x+${bv}$ <br>
  2) On peut prévoir ${repq2v} cas en ${q2} <br>
  3) En ${anneeq3}.`]

enonce.innerHTML = `On donne ci-dessous le tableau donnant le nombre de personnes d'une région ayant contracté la grippe :`;
enonce2.innerHTML = `1) Déterminer la droite d'ajustement $d$ de $y$ en $x$ par la méthode des moindres carrés. On arrondira les coefficients au centième. <br>
2) Si la tendance se poursuit ainsi, combien peut-on prévoir de cas en ${q2} ? <br>
3) Si la tendance se pousuit ainsi, en quelle année peut-on prévoir qu'il y aura ${q3} cas ?
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
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTaleTechno.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTSTStats.html";
})