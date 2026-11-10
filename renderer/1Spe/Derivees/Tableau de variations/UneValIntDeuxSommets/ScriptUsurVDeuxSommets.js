function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
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

function rienmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='';}
    return rep;
}

function plusmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}

function valabs(a) {
    let rep;
    if (a<0) {rep=-a;} else {rep=a;}
    return rep;
}

function parenthesesgd(a) {
    let rep;
    let parg;
    let pard;
    if (a<0) {parg='(';pard=')';} else {parg='';pard='';}
    return rep = [parg,pard];
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }

  function fracsimp(num,denom) {
    let rep=[num,denom];
    if (num<0 && denom<0) {rep=[-num,-denom];}
    if (num>0 && denom<0) {rep=[num,-denom];}
    if (num<0 && denom>0) {rep=[-num,denom];}
    return rep; 
}

function fracoupasfrac(num,denom) {
    let rep;
    if (denom==1) {rep=`${num}`;} else {rep=`\\dfrac{${num}}{${denom}}`;}
    return rep;
}

function simpfracmax(num,denom){
    let rep;
    let frac1 = simplifierfraction(num,denom);
    let frac2 = fracsimp(frac1[0],frac1[1]);
    let frac3 = fracoupasfrac(frac2[0],frac2[1]);
    return rep = frac3;
}

function unoupasun(a) {
    let rep;
    if (a==1) {rep=``;} else {
        if (a==-1) {rep=`-`;} else {rep=`${a}`;}}
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



let a = nbrealéa(1,9);
let a1 = unoupasun(a);
let b = nbrealéa(1,5);
let bcarre = b*b;
let a2 = 2*a;
let acarre = a*a;
let diffcarre = acarre-bcarre;
let sdiffcarre = rienplus(diffcarre);
let x1 = a-b;
let x2 = a+b;
let f1hd = rotation(260,256.25,270,250,30);
let f1hdx = f1hd[0];
let f1hdy = f1hd[1];
let f1hg = rotation(260,256.25,270,250,-30);
let f1hgx = f1hg[0];
let f1hgy = f1hg[1];
let f2hd = rotation(370,293.75,380,300,30);
let f2hdx = f2hd[0];
let f2hdy = f2hd[1];
let f2hg = rotation(370,293.75,380,300,-30);
let f2hgx = f2hg[0];
let f2hgy = f2hg[1];
let f3hd = rotation(490,293.75,500,300,30);
let f3hdx = f3hd[0];
let f3hdy = f3hd[1];
let f3hg = rotation(490,293.75,500,300,-30);
let f3hgx = f3hg[0];
let f3hgy = f3hg[1];
let f4hd = rotation(600,256.25,610,250,30);
let f4hdx = f4hd[0];
let f4hdy = f4hd[1];
let f4hg = rotation(600,256.25,610,250,-30);
let f4hgx = f4hg[0];
let f4hgy = f4hg[1];
let fx1 = (x1^2-a*x1+bcarre)/(x1-a);
let fx2 = (x2^2-a*x2+bcarre)/(x2-a);


function tabsignes(x,y,L,l,canvas) {
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
    context.moveTo(x+150,y);
    context.lineTo(x+150,l+20);
    context.strokeStyle="black";
    context.stroke();
    context.font = '20px serif';
    context.fillText(`x`,90,55);
    context.fillText(`- ∞`,180,55);
    context.fillText(`${a}`,390,55);
    context.fillText(`+ ∞`,570,55);
    context.fillText(`x^2-${a2}x${sdiffcarre}${diffcarre}`,50,100);
    context.fillText(`(x-${a})^2`,70,150);
    context.fillText(`f'(x)`,80,200)
    context.fillText(`f(x)`,80,275)
    context.beginPath();
    context.moveTo(x+262.5,y+50);
    context.lineTo(x+262.5,l-80);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+375,y+50);
    context.lineTo(x+375,l-130);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+370,l+20);
    context.lineTo(x+370,l-130);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+380,l+20);
    context.lineTo(x+380,l-130);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+487.5,y+50);
    context.lineTo(x+487.5,l-80);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+262.5, y+75, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+487.5, y+75, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+375, y+125, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+262.5, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+487.5, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();

    context.fillText(`${x1}`,280,55);
    context.fillText(`${x2}`,495,55);
    context.fillText(`+`,225,y+80);context.fillText(`-`,337,y+80);context.fillText(`-`,450,y+80);context.fillText(`+`,562,y+80);
    context.fillText(`+`,225,y+130);context.fillText(`+`,337,y+130);context.fillText(`+`,450,y+130);context.fillText(`+`,562,y+130);
    context.fillText(`+`,225,y+180);context.fillText(`-`,337,y+180);context.fillText(`-`,450,y+180);context.fillText(`+`,562,y+180);
    context.beginPath();
    context.moveTo(190,300);
    context.lineTo(270,250);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(300,250);
    context.lineTo(380,300);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(420,250);
    context.lineTo(500,300);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(530,300);
    context.lineTo(610,250);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(270,250);
    context.lineTo(f1hdx,f1hdy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(270,250);
    context.lineTo(f1hgx,f1hgy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(380,300);
    context.lineTo(f2hdx,f2hdy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(380,300);
    context.lineTo(f2hgx,f2hgy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(500,300);
    context.lineTo(f3hdx,f3hdy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(500,300);
    context.lineTo(f3hgx,f3hgy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(610,250);
    context.lineTo(f4hdx,f4hdy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(610,250);
    context.lineTo(f4hgx,f4hgy);
    context.strokeStyle="black";
    context.stroke();
    context.fillText(`${fx1}`,280,245);
    context.fillText(`${fx2}`,505,315);
}
  
tabsignes(20,20,600,300,"canvasC");


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
let correction1 = document.getElementById('correction1');
let correction2 = document.getElementById('correction2');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');



let listenonces = [`Soit $f$ la fonction définie sur $\\mathbb{R}~\\backslash \\left\\{ ${a} \\right\\}$ par $f(x)=\\dfrac{x^2-${a1}x+${bcarre}}{x-${a}}$<br>
Construire le tableau de variations de $f$.`];

let listeCorrections = [`On va d'abord calculer la fonction dérivée de $f$ en utilisant la formule : $\\left( \\dfrac{u}{v} \\right)^{'}=\\dfrac{u'v-v'u}{v^2} $<br><br>
$\\begin{array}{ll} u(x)=x^2-${a1}x+${bcarre} & u'(x)=2x-${a}\\times 1 + 0=2x-${a} \\\\
v(x)=x-${a} & v'(x)=1-0=1
\\end{array}$<br><br>
$\\begin{array}{rcl} f'(x) & = & \\dfrac{\\left(2x-${a}\\right)\\times \\left(x-${a}\\right)-1\\times\\left(x^2-${a1}x+${bcarre}\\right)}{\\left(x-${a}\\right)^2} \\\\
& = & \\dfrac{2x^2-${a2}x-${a}x+${acarre}-x^2+${a}x-${bcarre}}{\\left(x-${a}\\right)^2} \\\\
& = & \\dfrac{x^2-${a2}x${sdiffcarre}${diffcarre}}{\\left(x-${a}\\right)^2}
\\end{array}$`];

let listeSolutions = [``];

enonce.innerHTML = listenonces[0];
solution.innerHTML = listeSolutions[0];
correction1.innerHTML = listeCorrections[0];
correction2.innerHTML = ``;


enonce.addEventListener("load", function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

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
    location.href = "../../../Menus/MenuSecondeEqsDroites.html";
})