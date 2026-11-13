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

let a = nbreouoppose(nbrealéa(1,15));
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






let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');
var Test;

let listeenonces = [`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=${a1}x${sc}${c}${sfrac}\\dfrac{${absnum}}{x}$.<br>
    1) Calculer $f'(x)$.<br>
    2) Montrer que $f'(x)=\\dfrac{${a}(x-${b})(x+${b})}{x^2}$.`];

let listesolutions = [`1) $f'(x)=${a}${opsfrac}\\dfrac{${absnum}}{x^2}$ <br><br>
    2) $f'(x)=\\dfrac{${a}(x-${b})(x+${b})}{x^2}$`];

let listecorrections =[`1) $f(x)=${a1}x${sc}${c}${sfrac}\\dfrac{${absnum}}{x}=${a1}x${sc}${c}${sfrac}${absnum}\\times \\dfrac{1}{x}$ <br>
    $\\begin{array}{rcl}
    f'(x) & = & ${a}\\times 1${sc1}0${sfrac}${absnum}\\times \\left(\\dfrac{-1}{x^2}\\right) \\\\
    f'(x) & = & ${a}${opsfrac}\\dfrac{${absnum}}{x^2} \\end{array}$ <br>
    2) <br>
    $\\begin{array}{rcl}
    f'(x) & = & \\dfrac{${a}}{\\color{red}{1}}${opsfrac}\\dfrac{${absnum}}{x^2} \\\\
    & = & \\dfrac{${a}\\times\\color{blue}{x^2}}{\\color{red}{1}\\times\\color{blue}{x^2}}${opsfrac}\\dfrac{${absnum}}{x^2} \\\\
    & = & \\dfrac{${a} x^2${opsfrac}${absnum}}{x^2} \\\\
    & = & \\dfrac{${a}\\left(x^2${opsfrac}\\frac{${absnum}}{${a}}\\right)}{x^2} \\\\
    & = & \\dfrac{${a}\\left(x^2-${bcarré}\\right)}{x^2} \\\\
    & = & \\dfrac{${a}\\left(x^2-${b}^2\\right)}{x^2} \\\\
    f'(x) & = & \\dfrac{${a}(x-${b})(x+${b})}{x^2} \\\\
    \\end{array}$ `];

enonce.innerHTML = listeenonces[0];
solution.innerHTML = listesolutions[0];

correctiond.innerHTML = listecorrections[0];

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
