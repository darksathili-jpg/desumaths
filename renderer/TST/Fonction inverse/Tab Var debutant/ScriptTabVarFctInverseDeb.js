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

function nbreouoppose(a) {
    let rep;
    let choix = nbrealéa(1,2);
    if (choix==1) {rep=a;} else {rep=-a;}
    return rep;
}

function rienplus(a) {
    let rep;
    if (a<0) {rep='';} else {rep='+';}
    return rep;
}

function plusmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}

function rienmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='';}
    return rep;
}

function parenthesegd(a) {
    let rep;
    let pg;
    let pd;
    if (a<0) {pg='(';} else {pg='';}
    if (a<0) {pd=')';} else {pd='';}
    return rep = [pg,pd];
}

function unoupasun(a) {
    let rep;
    if (a==1) {rep=``;} else {
        if (a==-1) {rep=`-`;} else {rep=`${a}`;}}
    return rep;
}

function valabs(a) {
    let rep;
    if (a>0) {rep=a;} else {rep=-a;}
    return rep;
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
function rotation(xM,yM,xO,yO,angle) {
    let rep;
    x = (xM-xO) * Math.cos (Math.PI*angle/180) + (yM-yO) * Math.sin (Math.PI*angle/180) + xO;
    y = - (xM-xO) * Math.sin (Math.PI*angle/180) + (yM-yO) * Math.cos (Math.PI*angle/180) + yO;
    return rep = [x,y];
  }

function choixNom() {
    let rep;
    let listeeleves = ['Camille','Eva','Eolia','Axelle','Romane','Léa','Célia','Marie','Emma','Juliette','Romain','Elsa','Benoît','Clara','Aarone','Sarah-Elyse','Colline',`Manon`,`Luna`,`Aïcha`,`Samuel`];
    return rep = listeeleves[nbrealéa(0,20)];
}

let a = 1;
let a1 = unoupasun(a);
let b = nbrealéa(1,10);
let bcarré = b*b;
let abcarré = a*bcarré;
let absnum = valabs(abcarré);
let sfrac = plusmoins(abcarré);
let opsfrac = plusmoins(-abcarré);
let c = nbreouoppose(nbrealéa(1,10));
let sc = rienplus(c);
let sc1 = plusmoins(c);
let inf = b-nbrealéa(1,10)/10;
let infv = avecVirgule(Math.round(10*inf)/10);
let sup = b+nbrealéa(1,10);
let finf = a*inf+c+abcarré/inf;
let fb = a*b+c+abcarré/b;
let fsup = a*sup+c+abcarré/sup;
let finfv = avecVirgule(Math.round(100*finf)/100);
let fbv = avecVirgule(Math.round(100*fb)/100);
let fsupv = avecVirgule(Math.round(100*fsup)/100);
let prenom = choixNom();
let f1hd = rotation(215,295.7,220,290,30);
let f1hg = rotation(215,295.7,220,290,-30);
let f1hdx = f1hd[0];
let f1hdy = f1hd[1];
let f1hgx = f1hg[0];
let f1hgy = f1hg[1];
let f2hd = rotation(265,323.3,270,330,30);
let f2hg = rotation(265,323.3,270,330,-30);
let f2hdx = f2hd[0];
let f2hdy = f2hd[1];
let f2hgx = f2hg[0];
let f2hgy = f2hg[1];
let f3hd = rotation(335,325,340,330,30);
let f3hg = rotation(335,325,340,330,-30);
let f3hdx = f3hd[0];
let f3hdy = f3hd[1];
let f3hgx = f3hg[0];
let f3hgy = f3hg[1];
let f4hd = rotation(395,295,400,290,30);
let f4hg = rotation(395,295,400,290,-30);
let f4hdx = f4hd[0];
let f4hdy = f4hd[1];
let f4hgx = f4hg[0];
let f4hgy = f4hg[1];
let f1hdi2 = rotation(325,177.3,330,180,30);
let f1hgi2 = rotation(325,177.3,330,180,-30);
let f1hdxi2 = f1hdi2[0];
let f1hdyi2 = f1hdi2[1];
let f1hgxi2 = f1hgi2[0];
let f1hgyi2 = f1hgi2[1];
let f2hdi2 = rotation(475,112.9,480,110,30);
let f2hgi2 = rotation(475,112.9,480,110,-30);
let f2hdxi2 = f2hdi2[0];
let f2hdyi2 = f2hdi2[1];
let f2hgxi2 = f2hgi2[0];
let f2hgyi2 = f2hgi2[1];


function tabvar(x,y,L,l,canvas,a,b) {
    var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.save();
  context.beginPath();
  context.strokeRect(x,y,L,l);
  context.beginPath();
  context.moveTo(x,x+50);
  context.lineTo(L+x,x+50);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x,x+100);
  context.lineTo(L+x,x+100);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x,x+150);
  context.lineTo(L+x,x+150);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x,x+200);
  context.lineTo(L+x,x+200);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x,x+250);
  context.lineTo(L+x,x+250);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+150,y);
  context.lineTo(x+150,l+30);
  context.strokeStyle="black";
  context.stroke();
  context.font = '20px serif';
  context.fillText(`x`,90,55);
  context.fillText(`- ∞`,180,55);
  context.fillText(`+ ∞`,385,55);
  context.fillText(`-${b}`,230,55);
  context.fillText(`0`,280,55);
  context.fillText(`${b}`,340,55);
  context.fillText(`x-${b}`,80,100);
  context.fillText(`x+${b}`,80,150);
  context.fillText(`x^2`,80,200);
  context.fillText(`f '(x)`,80,250)
  context.fillText(`f(x)`,80,310)
  context.fillText(`-`,205,100);context.fillText(`-`,260,100);context.fillText(`-`,320,100);context.fillText(`+`,385,100);
  context.fillText(`-`,205,150);context.fillText(`+`,260,150);context.fillText(`+`,320,150);context.fillText(`+`,385,150);
  context.fillText(`+`,205,200);context.fillText(`+`,260,200);context.fillText(`+`,320,200);context.fillText(`+`,385,200);
  context.beginPath();
  context.arc(x+210, y+115, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+265, y+165, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+330, y+65, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+210,y+40);
  context.lineTo(x+210,l-50);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+265,y+40);
  context.lineTo(x+265,l-100);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+260,y+190);
  context.lineTo(x+260,l+30);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+270,y+190);
  context.lineTo(x+270,l+30);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+330,y+40);
  context.lineTo(x+330,l-50);
  context.strokeStyle="black";
  context.stroke();
    if (a>0) {
        context.beginPath();
        context.arc(x+210, y+215, 5, 0, 2 * Math.PI);
        context.strokeStyle="black";
        context.stroke();
        context.beginPath();
        context.arc(x+330, y+215, 5, 0, 2 * Math.PI);
        context.strokeStyle="black";
        context.stroke();
        context.fillText(`+`,205,255);context.fillText(`-`,260,255);context.fillText(`-`,310,255);context.fillText(`+`,365,255);
        context.beginPath();
        context.moveTo(185,330);
        context.lineTo(220,290);
        context.strokeStyle="black";
        context.stroke();context.beginPath();
        context.moveTo(220,290);
        context.lineTo(f1hdx,f1hdy);
        context.strokeStyle="black";
        context.stroke();
        context.beginPath();
        context.moveTo(220,290);
        context.lineTo(f1hgx,f1hgy);
        context.strokeStyle="black";
        context.stroke();
        context.beginPath();
        context.moveTo(240,290);
        context.lineTo(270,330);
        context.strokeStyle="black";
        context.stroke();
        context.beginPath();
        context.moveTo(270,330);
        context.lineTo(f2hdx,f2hdy);
        context.strokeStyle="black";
        context.stroke();
        context.beginPath();
        context.moveTo(270,330);
        context.lineTo(f2hgx,f2hgy);
        context.strokeStyle="black";
        context.stroke();
        context.beginPath();
        context.moveTo(300,290);
        context.lineTo(340,330);
        context.strokeStyle="black";
        context.stroke();
        context.beginPath();
        context.moveTo(340,330);
        context.lineTo(f3hdx,f3hdy);
        context.strokeStyle="black";
        context.stroke();
        context.beginPath();
        context.moveTo(340,330);
        context.lineTo(f3hgx,f3hgy);
        context.strokeStyle="black";
        context.stroke();
        context.beginPath();
        context.moveTo(360,330);
        context.lineTo(400,290);
        context.strokeStyle="black";
        context.stroke();
        context.beginPath();
        context.moveTo(400,290);
        context.lineTo(f4hdx,f4hdy);
        context.strokeStyle="black";
        context.stroke();
        context.beginPath();
        context.moveTo(400,290);
        context.lineTo(f4hgx,f4hgy);
        context.strokeStyle="black";
        context.stroke();
  }
}

function tabvar2(x,y,L,l,canvas,a,b) {
    var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.save();
  context.beginPath();
  context.strokeRect(x,y,L,l);
  context.beginPath();
  context.moveTo(x,x+50);
  context.lineTo(L+x,x+50);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x,x+200);
  context.lineTo(L+x,x+200);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+150,y);
  context.lineTo(x+150,l+30);
  context.strokeStyle="black";
  context.stroke();
  context.font = '20px serif';
  context.fillText(`x`,90,55);
  context.fillText(`${infv}`,180,55);
  context.fillText(`${sup}`,490,55);
  context.fillText(`f(x)`,80,150)
    if (a>0) {
        context.beginPath();
        context.moveTo(200,110);
        context.lineTo(330,180);
        context.strokeStyle="black";
        context.stroke();context.beginPath();
        context.moveTo(330,180);
        context.lineTo(f1hdxi2,f1hdyi2);
        context.strokeStyle="black";
        context.stroke();
        context.beginPath();
        context.moveTo(330,180);
        context.lineTo(f1hgxi2,f1hgyi2);
        context.strokeStyle="black";
        context.stroke();
        context.beginPath();
        context.moveTo(360,180);
        context.lineTo(480,110);
        context.strokeStyle="black";
        context.stroke();
        context.beginPath();
        context.moveTo(480,110);
        context.lineTo(f2hdxi2,f2hdyi2);
        context.strokeStyle="black";
        context.stroke();
        context.beginPath();
        context.moveTo(480,110);
        context.lineTo(f2hgxi2,f2hgyi2);
        context.strokeStyle="black";
        context.stroke();
        context.fillText(`${finfv}`,190,100);
        context.fillText(`${fbv}`,330,200);
        context.fillText(`${fsupv}`,450,100);
  }
}

tabvar(20,30,400,320,"canvasR",a,b);
tabvar2(20,30,500,190,"canvasI",a,b);





let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
let correction1 = document.getElementById('correction1');
let correction2 = document.getElementById('correction2');
var correction = document.getElementById('correction');
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');
var Test;

let listeenonces = [`Soit $f$ la fonction définie sur $[${infv}~;~${sup}]$ par $f(x)=${a1}x${sc}${c}${sfrac}\\dfrac{${absnum}}{x}$.<br>
    1) Calculer $f'(x)$ et montrer que $f'(x)=\\dfrac{(x-${b})(x+${b})}{x^2}$. <br><br>
    2) Construire le tableau de variations de $f$ sur $\\mathbb{R}$. <br>
    3) En déduire le tableau de variations de $f$ sur I.
    `];

let listesolutions = [``];

let listecorrections =[`$\\hspace{1cm}$ Courage $\\color{red}{\\text{${prenom}}}$ !!! <br>
    1) $f(x)=${a1}x${sc}${c}${sfrac}\\dfrac{${absnum}}{x}=${a1}x${sc}${c}${sfrac}${absnum}\\times \\dfrac{1}{x}$ <br>
    $\\begin{array}{rcl}
    f'(x) & = & 1${sc1}0${sfrac}${absnum}\\times \\left(\\dfrac{-1}{x^2}\\right) \\\\
    & = & ${a}${opsfrac}\\dfrac{${absnum}}{x^2} \\\\
    & = & \\dfrac{${a}}{\\color{red}{1}}${opsfrac}\\dfrac{${absnum}}{x^2} \\\\
    & = & \\dfrac{${a}\\times\\color{blue}{x^2}}{\\color{red}{1}\\times\\color{blue}{x^2}}${opsfrac}\\dfrac{${absnum}}{x^2} \\\\
    & = & \\dfrac{x^2${opsfrac}${absnum}}{x^2} \\\\
    & = & \\dfrac{x^2-${b}^2}{x^2} \\\\
    f'(x) & = & \\dfrac{(x-${b})(x+${b})}{x^2} \\\\
    \\end{array}$ <br>
    2)`,`3)`];

enonce.innerHTML = listeenonces[0];
solution.innerHTML = listesolutions[0];

correction1.innerHTML = listecorrections[0];
correction2.innerHTML = listecorrections[1];

enonce.addEventListener("load", function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

correction.addEventListener('click', () => {
    correctiond.style.display = "block";
    correctiond.innerHTML ;
})

solutions.addEventListener('click', () => {
    solution.style.display = "block";
    solution.innerHTML ;
})

recommencer.addEventListener('click', () => {
    location.reload();
})

accueil.addEventListener('click', () => {
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTaleTechno.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTSTInverse.html";
})
