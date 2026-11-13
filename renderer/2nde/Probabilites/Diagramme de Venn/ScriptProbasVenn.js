function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function drawOval1(x, y, rw, rh,ts,bs,tetb,nitnib, canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.save();
  context.scale(1,  rh/rw);
  context.beginPath();
  context.arc(x, y, rw, 0, 2 * Math.PI);
  context.restore();
  context.lineWidth=4;
  context.strokeStyle="orange";
  context.stroke();  
  context.strokeStyle = 'black'; 
  context.strokeRect(10, 5, 600, 250);
  context.font = '30px serif';
  context.fillText(`${ts}`,140,130);
  context.fillText(`${bs}`,450,130);
  context.fillText(`${tetb}`,300,130);
  context.fillText(`${nitnib}`,560,220);
  context.font = '20px serif';
  context.fillText(`T`,44,36);
  context.fillText(`B`,564,36);
  context.fillText(`Total`,640,36);
  context.fillText(`(${total})`,640,76);
  context.fillText(`1`,175,176);
  context.fillText(`2`,305,176);
  context.fillText(`3`,455,176);
  context.fillText(`4`,530,216);
  context.fillStyle = "orange";
  context.fillText(`(${t})`,84,36);
  context.fillStyle = "blue";
  context.fillText(`(${b})`,494,36);
  context.beginPath();
  context.moveTo(65,71);
  context.lineTo(45,45);
  context.strokeStyle="orange";
  context.stroke();
  context.beginPath();
  context.moveTo(548,71);
  context.lineTo(568,45);
  context.strokeStyle="blue";
  context.stroke();
  context.beginPath();
  context.moveTo(610,71);
  context.lineTo(628,45);
  context.strokeStyle="black";
  context.stroke();
}

function drawOval2(x, y, rw, rh, canvas)
                {
                  var canvas = document.getElementById(canvas); 
                  var context = canvas.getContext("2d");
                  context.save();
                  context.scale(1,  rh/rw);
                  context.beginPath();
                  context.arc(x, y, rw, 0, 2 * Math.PI);
                  context.restore();
                  context.lineWidth=4;
                  context.strokeStyle="blue";
                  context.stroke();  
                }

function drawOval3(x, y, rw, rh, canvas)
                {
                  var canvas = document.getElementById(canvas); 
                  var context = canvas.getContext("2d");
                  context.save();
                  context.scale(1,  rh/rw);
                  context.beginPath();
                  context.arc(x, y, rw, 0, 2 * Math.PI);
                  context.restore();
                  context.lineWidth=4;
                  context.strokeStyle="orange";
                  context.stroke();  
                }

function drawOval4(x, y, rw, rh, canvas)
                {
                  var canvas = document.getElementById(canvas); 
                  var context = canvas.getContext("2d");
                  context.save();
                  context.scale(1,  rh/rw);
                  context.beginPath();
                  context.arc(x, y, rw, 0, 2 * Math.PI);
                  context.restore();
                  context.lineWidth=4;
                  context.strokeStyle="blue";
                  context.stroke();  
                }

function drawOval5(x, y, rw, rh, canvas)
                {
                  var canvas = document.getElementById(canvas); 
                  var context = canvas.getContext("2d");
                  context.save();
                  context.scale(1,  rh/rw);
                  context.beginPath();
                  context.arc(x, y, rw, 0, 2 * Math.PI);
                  context.restore();
                  context.lineWidth=4;
                  context.strokeStyle="black";
                  context.stroke();  
                }


function cercle(x, y,r,canvas)
                {
                  var canvas = document.getElementById(canvas); 
                  var context = canvas.getContext("2d");
                  context.save();
                  context.beginPath();
                  context.arc(x, y, r, 0, 2 * Math.PI);
                  context.restore();
                  context.lineWidth=4;
                  context.strokeStyle="black";
                  context.stroke();  
                }


let ts = nbrealéa(10,80);
let bs = nbrealéa(10,80);
let tetb = nbrealéa(10,50);
let nitnib = nbrealéa(10,40);
let total = ts+bs+tetb+nitnib;
let t = ts+tetb;
let b = bs+tetb;
let bbare = ts+nitnib;
let tbarre = bs+nitnib;
let toub = ts+bs+tetb;
let tetb2 = t+b+nitnib;
let k = nbrealéa(0,1);

drawOval1(210,250,180,90,ts,bs,tetb,nitnib, "canvasS");
drawOval2(400,250,180,90, "canvasS");
drawOval3(50,58,30,15, "canvasS");
drawOval4(570,58,30,15, "canvasS");
drawOval5(660,60,40,20, "canvasS");
cercle(180,170,15,"canvasS");
cercle(310,170,15,"canvasS");
cercle(460,170,15,"canvasS");
cercle(535,210,15,"canvasS");

let enonce = document.getElementById('enonce');
let enonce2 = document.getElementById('enonce2');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
let solutionRB = document.getElementById('solutionRB');
let solutionRH = document.getElementById('solutionRH');

let listeenonces = [`Dans un club de sport on sait que :<br>
il y a $${total}$ adhérents au total ;<br>
$${t}$ adhérents pratiquent le tennis ;<br>
$${b}$ adhérents pratiquent le basket ;<br>
$${tetb}$ adhérents pratiquent le tennis et le basket.<br><br>
1) Construire un diagramme de Venn représentant la situation.<br>
2) Traduire cette situation sous la forme d'un tableau.<br>
3) Calculer les probabilités suivantes :<br>
$\\hspace{5mm}$ a) $P\\left(T\\cap B \\right)$<br><br>
$\\hspace{5mm}$ b) $P\\left(T\\cap \\overline{B} \\right)$<br><br>
$\\hspace{5mm}$ c) $P\\left(\\overline{T}\\cap B \\right)$<br><br>
$\\hspace{5mm}$ d) $P\\left(\\overline{T}\\cap \\overline{B} \\right)$<br><br>
$\\hspace{5mm}$ e) $P\\left(T\\cup B \\right)$<br><br>`,
`Dans un club de sport on sait que :<br>
il y a $${total}$ adhérents au total ;<br>
$${t}$ adhérents pratiquent le tennis ;<br>
$${b}$ adhérents pratiquent le basket ;<br>
$${nitnib}$ adhérents ne pratiquent ni le tennis ni le basket.<br><br>
1) Construire un diagramme de Venn représentant la situation.<br>
2) Traduire cette situation sous la forme d'un tableau.<br>
3) Calculer les probabilités suivantes :<br>
$\\hspace{5mm}$ a) $P\\left(T\\cap B \\right)$<br><br>
$\\hspace{5mm}$ b) $P\\left(T\\cap \\overline{B} \\right)$<br><br>
$\\hspace{5mm}$ c) $P\\left(\\overline{T}\\cap B \\right)$<br><br>
$\\hspace{5mm}$ d) $P\\left(\\overline{T}\\cap \\overline{B} \\right)$<br><br>
$\\hspace{5mm}$ e) $P\\left(T\\cup B \\right)$<br><br>`];

let listecorrection = [`1) La partie centrale du diagramme correspond aux personnes qui pratiquent le tennis et le basket donc ils sont $${tetb}$ (case 2).<br>
Il y a $${t}$ personnes qui pratiquent le tennis au total donc ceux qui ne pratiquent QUE le tennis sont $${t}-${tetb}=${ts}$ (case 1)<br>
Il y a $${b}$ personnes qui pratiquent le basket au total donc ceux qui ne pratiquent QUE le basket sont $${b}-${tetb}=${bs}$ (case 3)<br>
Ceux qui ne pratiquent ni le tennis ni le basket sont donc $${total}-${ts}-${tetb}-${bs}=${nitnib}$ (case 4)<br>
2) $B\\cap T$ coorespond à ceux qui partiquent le tennis et le basket (c'est la partie centrale du diagramme de Venn)<br>
$B\\cap \\overline{T}$ correspond à ceux qui ne pratiquent que le basket (nombre de droite dans la partie bleue du diagramme)<br>
$\\overline{B}\\cap T$ correspond à ceux qui ne pratiquent que le tennis (nombre de gauche dans la partie orange du diagramme)<br>
$\\overline{B}\\cap\\overline{T}$ correspond à ceux qui ne pratiquent ni le tennis ni le basket (nombre en dehors des parties orange et bleues du diagramme)<br>
3) a) $P\\left(T\\cap B \\right)=\\dfrac{${tetb}}{${total}}$<br><br>
$\\hspace{5mm}$ b) $P\\left(T\\cap \\overline{B} \\right)=\\dfrac{${ts}}{${total}} $<br><br>
$\\hspace{5mm}$ c) $P\\left(\\overline{T}\\cap B \\right)=\\dfrac{${bs}}{${total}}$<br><br>
$\\hspace{5mm}$ d) $P\\left(\\overline{T}\\cap \\overline{B} \\right)=\\dfrac{${nitnib}}{${total}}$<br><br>
$\\hspace{5mm}$ e) $P\\left(T\\cup B \\right)=P\\left(T\\right)+P\\left(B\\right)-P\\left(T\\cap B\\right)=\\dfrac{${t}+${b}-${tetb}}{${total}}=\\dfrac{${toub}}{${total}}$<br><br>`,
`1) $${t}+${b}+${nitnib}=${tetb2}$ et $${tetb2}-${total}=${tetb}$.<br>
Cela correspond donc à la partie centrale du diagramme (les personnes qui pratiquent le tennis et le basket en case 2)).<br>
Il y a $${t}$ personnes qui pratiquent le tennis au total donc ceux qui ne pratiquent QUE le tennis sont $${t}-${tetb}=${ts}$ (case 1)<br>
Il y a $${b}$ personnes qui pratiquent le basket au total donc ceux qui ne pratiquent QUE le basket sont $${b}-${tetb}=${bs}$ (case 3)<br>
Ceux qui ne pratiquent ni le tennis ni le basket sont $${nitnib}$ (case 4)<br>
2) $B\\cap T$ coorespond à ceux qui partiquent le tennis et le basket (c'est la partie centrale du diagramme de Venn)<br>
$B\\cap \\overline{T}$ correspond à ceux qui ne pratiquent que le basket (nombre de droite dans la partie bleue du diagramme)<br>
$\\overline{B}\\cap T$ correspond à ceux qui ne pratiquent que le tennis (nombre de gauche dans la partie orange du diagramme)<br>
$\\overline{B}\\cap\\overline{T}$ correspond à ceux qui ne pratiquent ni le tennis ni le basket (nombre en dehors des parties orange et bleues du diagramme)<br>
3) a) $P\\left(T\\cap B \\right)=\\dfrac{${tetb}}{${total}}$<br><br>
$\\hspace{5mm}$ b) $P\\left(T\\cap \\overline{B} \\right)=\\dfrac{${ts}}{${total}} $<br><br>
$\\hspace{5mm}$ c) $P\\left(\\overline{T}\\cap B \\right)=\\dfrac{${bs}}{${total}}$<br><br>
$\\hspace{5mm}$ d) $P\\left(\\overline{T}\\cap \\overline{B} \\right)=\\dfrac{${nitnib}}{${total}}$<br><br>
$\\hspace{5mm}$ e) $P\\left(T\\cup B \\right)=P\\left(T\\right)+P\\left(B\\right)-P\\left(T\\cap B\\right)=\\dfrac{${t}+${b}-${tetb}}{${total}}=\\dfrac{${toub}}{${total}}$<br><br>`];

enonce.innerHTML = listeenonces[k];
enonce2.innerHTML = ``;

solution1.innerHTML = `1)`;
solution2.innerHTML = `2) <style>
table,th,td{text-align: center;border:1px solid #cccccc;width: 35vw;}
</style> <table >
<tr>
    <th></th>
    <th> $T$ </th>
    <th> $\\overline{T}$ </th>
    <th>Total</th>
</tr>
<tr>
  <th> $B$ </th>
  <td> ${tetb} </td>
  <td> ${bs} </td>
  <td> ${b} </td>
</tr>
<tr>
  <th> $\\overline{B}$ </th>
  <td> ${ts} </td>
  <td> ${nitnib} </td>
  <td> ${bbare} </td>
</tr>
<tr>
    <th>Total</th>
    <td> ${t} </td>
    <td> ${tbarre} </td>
    <td> ${total} </td>
  </tr>
</table><br>
3) a) $P\\left(T\\cap B \\right)=\\dfrac{${tetb}}{${total}}$<br><br>
$\\hspace{5mm}$ b) $P\\left(T\\cap \\overline{B} \\right)=\\dfrac{${ts}}{${total}} $<br><br>
$\\hspace{5mm}$ c) $P\\left(\\overline{T}\\cap B \\right)=\\dfrac{${bs}}{${total}}$<br><br>
$\\hspace{5mm}$ d) $P\\left(\\overline{T}\\cap \\overline{B} \\right)=\\dfrac{${nitnib}}{${total}}$<br><br>
$\\hspace{5mm}$ e) $P\\left(T\\cup B \\right)=\\dfrac{${toub}}{${total}}$<br><br>`

correctiond.innerHTML = listecorrection[k];


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
    location.href = "../../../Menus/MenuSecondeProbabilites.html";
})