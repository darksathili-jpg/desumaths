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

function dessintableau3(canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(10,50);context.lineTo(710,50);
  context.moveTo(10,150);context.lineTo(710,150);
  context.moveTo(10,250);context.lineTo(710,250);
  context.moveTo(10,350);context.lineTo(710,350);
  context.moveTo(10,50);context.lineTo(10,350);
  context.moveTo(610,50);context.lineTo(610,350);
  context.moveTo(210,50);context.lineTo(210,350);
  context.moveTo(310,50);context.lineTo(310,350);
  context.moveTo(410,50);context.lineTo(410,350);
  context.moveTo(510,50);context.lineTo(510,350);
  context.moveTo(610,50);context.lineTo(610,350);
  context.moveTo(710,50);context.lineTo(710,350);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.font = '20px serif';
  context.fillText(`Prix de vente xi`,30,85);context.fillText(`(en euros)`,50,115);context.fillText(`Nombre d'acheteurs yi`,20,200);context.fillText(`zi`,50,300);
  context.fillText(`${x1}`,245,105);context.fillText(`${x2}`,345,105);context.fillText(`${x3}`,445,105);context.fillText(`${x4}`,545,105);context.fillText(`${x5}`,645,105);
  context.fillText(`${y1}`,245,205);context.fillText(`${y2}`,345,205);context.fillText(`${y3}`,445,205);context.fillText(`${y4}`,545,205);context.fillText(`${y5}`,645,205);
  context.fillText(`${z1a}`,245,305);context.fillText(`${z2a}`,345,305);context.fillText(`${z3a}`,445,305);context.fillText(`${z4a}`,545,305);context.fillText(`${z5a}`,645,305);
}

function dessintableau2(canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(10,50);context.lineTo(710,50);
  context.moveTo(10,150);context.lineTo(710,150);
  context.moveTo(10,250);context.lineTo(710,250);
  context.moveTo(10,50);context.lineTo(10,250);
  context.moveTo(610,50);context.lineTo(610,250);
  context.moveTo(210,50);context.lineTo(210,250);
  context.moveTo(310,50);context.lineTo(310,250);
  context.moveTo(410,50);context.lineTo(410,250);
  context.moveTo(510,50);context.lineTo(510,250);
  context.moveTo(710,50);context.lineTo(710,250);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.font = '20px serif';
  context.fillText(`Prix de vente xi`,30,85);context.fillText(`(en euros)`,50,115);context.fillText(`Nombre d'acheteurs yi`,20,200);
  context.fillText(`${x1}`,245,105);context.fillText(`${x2}`,345,105);context.fillText(`${x3}`,445,105);context.fillText(`${x4}`,545,105);context.fillText(`${x5}`,645,105);
  context.fillText(`${y1}`,245,205);context.fillText(`${y2}`,345,205);context.fillText(`${y3}`,445,205);context.fillText(`${y4}`,545,205);context.fillText(`${y5}`,645,205);
}

function zsuivantlescas(k,y) {
  if (k==0) {z=Math.log10(y);}
  if (k==1) {z=750/(750-y);}
  return z;
}

function cas(k) {
  if (k==0) {ka=[0,1];}
  if (k==1) {ka=[2,3];}
  return ka;
}

let x1 = nbrealéa(200,300);
let x2 = x1+nbrealéa(20,70);
let x3 = x2+nbrealéa(20,70);
let x4 = x3+nbrealéa(20,70);
let x5 = x4+nbrealéa(20,70);
let m1 = nbrealéa(400,600);
let m2 = nbrealéa(400,600);
let m3 = nbrealéa(400,600);
let m4 = nbrealéa(400,600);
let m5 = nbrealéa(400,600);
let y1 = nbrealéa(500,700);
let y2 = y1-nbrealéa(20,50);
let y3 = y2-nbrealéa(20,50);
let y4 = y3-nbrealéa(20,50);
let y5 = y4-nbrealéa(20,50);
let yq3 = y4+nbrealéa(5,15);
let k = nbrealéa(0,1);
let ka1 = cas(k);
let z1 = zsuivantlescas(k,y1);
let z2 = zsuivantlescas(k,y2);
let z3 = zsuivantlescas(k,y3);
let z4 = zsuivantlescas(k,y4);
let z5 = zsuivantlescas(k,y5);
let z1a = arrondiv(z1,3);
let z2a = arrondiv(z2,3);
let z3a = arrondiv(z3,3);
let z4a = arrondiv(z4,3);
let z5a = arrondiv(z5,3);
let somx = x1+x2+x3+x4+x5;
let somz = z1+z2+z3+z4+z5;
let somxz = x1*z1+x2*z2+x3*z3+x4*z4+x5*z5;
let somxcarre = x1**2+x2**2+x3**2+x4**2+x5**2;
let somzcarre = z1**2+z2**2+z3**2+z4**2+z5**2;
let moyx = (x1+x2+x3+x4+x5)/5;
let moyz = (z1+z2+z3+z4+z5)/5;
let a = (5*somxz-somx*somz)/(5*somxcarre-somx**2);
let av = arrondiv(a,4);
let b = moyz-a*moyx;
let bv = arrondiv(b,4);
let zq3v = arrondiv(arrondi(a,4)*yq3+arrondi(b,4),4);
let zq3 = arrondi(arrondi(a,4)*yq3+arrondi(b,4),4);
let yrepq3 = arrondiv(10**zq3,0);
let zq3Fois750v = arrondiv(zq3*750,4);
let numyv = arrondiv(750-zq3*750,4);
let yv = arrondiv((750-zq3*750)/(-zq3),0);
let signezq3 = plusmoins(-zq3);
let zq3abs = valabs(zq3);
let zq3absv = arrondiv(zq3abs,4); 
let szq3 = rienmoins(-zq3);
let szq3Fois750 = plusmoins(-zq3);
let zq3Fois750abs = valabs(zq3*750);
let zq3Fois750absv = arrondiv(zq3Fois750abs,4);




dessintableau3("canvasS");
dessintableau2("canvasE");
dessintableau3("canvasC");

let enonce = document.getElementById('enonce');
let enonce2 = document.getElementById('enonce2');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


let listeenonces = [`On donne ci-dessous le tableau donnant le nombre de personnes intéressées par un produit en fonction de son prix de vente :`,
`On effectue le changement de variable $z_i=\\log\\left(y_i\\right)$.<br>
1) Représenter sous forme de tableau la série statistique $\\left(x_i~;~z_i\\right)$ (les valeurs de $z_i$ seront arrondies à $10^{-3}$ près).<br>
2) Déterminer la droite d'ajustement $d$ de $z$ en $x$ par la méthode des moindres carrés. On arrondira les coefficients à $10^{-4}$ près. <br>
3) Utiliser cette estimation pour déterminer le nombre d'acheteurs potentiels si le prix de vente est fixé à ${yq3} euros ? 
`,
`On donne ci-dessous le tableau donnant le nombre de personnes intéressées par un produit en fonction de son prix de vente :`,
`On effectue le changement de variable $z_i=\\dfrac{750}{750-y_i} $.<br>
1) Représenter sous forme de tableau la série statistique $\\left(x_i~;~z_i\\right)$ (les valeurs de $z_i$ seront arrondies à $10^{-3}$ près).<br>
2) Déterminer la droite d'ajustement $d$ de $z$ en $x$ par la méthode des moindres carrés. On arrondira les coefficients à $10^{-4}$ près. <br>
3) Utiliser cette estimation pour déterminer le nombre d'acheteurs potentiels si le prix de vente est fixé à ${yq3} euros ? 
`
];

let listecorrection = [`1)`,`2) $z=${av}x+${bv}$ <br>
  3) On remplace $x$ par ${yq3} dans l'équation obtenue à la quetion précédente :<br>
  $z=${av}\\times ${yq3}+${bv}=${zq3v}$<br>
  Et donc, comme $z=\\log(y)$ alors $y=10^z$ et donc $y=10^{${zq3v}}\\approx ${yrepq3}$ `,
`1)`,`2) $z=${av}x+${bv}$ <br>
  3) On remplace $x$ par ${yq3} dans l'équation obtenue à la quetion précédente :<br>
  $z=${av}\\times ${yq3}+${bv}=${zq3v}$<br>
  Et donc, comme $z=\\dfrac{750}{750-y}$ alors on doit résoudre $\\dfrac{750}{750-y}=${zq3v}$ <br>
  $\\begin{array}{rcl}
  ${zq3v}\\times (750-y) & = & 750 \\\\
  ${zq3v}\\times 750 ${signezq3} ${zq3absv}y & = & 750 \\\\
  ${zq3Fois750v} ${signezq3} ${zq3absv}y & = & 750 \\\\
  ${szq3} ${zq3absv}y & = & 750 ${szq3Fois750} ${zq3Fois750absv} \\\\
  ${szq3} ${zq3absv}y & = & ${numyv} \\\\
  y & = & \\dfrac{${numyv}}{${szq3} ${zq3absv}} \\\\
  y & \\approx & ${yv}
  \\end{array}$`];

let listesolutions = [`1)<br>`,
 ` 2) $z=${av}x+${bv}$ <br>
  3) Environ ${yrepq3}`,
`1)<br>`,
 ` 2) $z=${av}x+${bv}$ <br>
  3) Environ ${yv}`]

enonce.innerHTML = listeenonces[ka1[0]];
enonce2.innerHTML = listeenonces[ka1[1]];


solution1.innerHTML = listesolutions[ka1[0]];
solution2.innerHTML = listesolutions[ka1[1]];

correctiond1.innerHTML = listecorrection[ka1[0]];
correctiond2.innerHTML = listecorrection[ka1[1]];



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