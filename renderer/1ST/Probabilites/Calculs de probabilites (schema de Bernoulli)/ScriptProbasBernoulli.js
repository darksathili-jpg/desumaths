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

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
}

function fact(nbr){
    var i, nbr, f = 1;
    for(i = 1; i <= nbr; i++)  
    {
      f = f * i;   // ou f *= i;
    }  
    return f;
  }

function probegalegal(a,b,n,p) {
    let rep=0;
    let coefbin;
    for (i=a;i<=b;i++)
    {coefbin = (fact(n))/(fact(n-i)*fact(i));rep = rep + coefbin*Math.pow(p,i)*Math.pow(1-p,n-i);}
    return rep;
}  

function probinfegal(a,b,n,p) {
    let rep=0;
    let coefbin;
    for (i=a+1;i<=b;i++)
    {coefbin = (fact(n))/(fact(n-i)*fact(i));rep = rep + coefbin*Math.pow(p,i)*Math.pow(1-p,n-i);}
    return rep;
}

function probegalinf(a,b,n,p) {
    let rep=0;
    let coefbin;
    for (i=a;i<=b-1;i++)
    {coefbin = (fact(n))/(fact(n-i)*fact(i));rep = rep + coefbin*Math.pow(p,i)*Math.pow(1-p,n-i);}
    return rep;
}

function probinfinf(a,b,n,p) {
    let rep=0;
    let coefbin;
    for (i=a+1;i<=b-1;i++)
    {coefbin = (fact(n))/(fact(n-i)*fact(i));rep = rep + coefbin*Math.pow(p,i)*Math.pow(1-p,n-i);}
    return rep;
}

function borneinfsup(n) {
    let rep = [];
    let a = nbrealéa(2,n-7);
    let b = n-nbrealéa(2,n-7);
    while (a>= b) {
        b = n-nbrealéa(2,n-7);
    }
    return rep = [a,b];
}

function binomflu(n,p) {
    let listeproba=[]
    let proba = 0;
    let a = 0;
    let b = 0;
    let rep =[];
    for (i=0;i<=n;i++) {coefbin = (fact(n))/(fact(n-i)*fact(i));proba = proba + coefbin*Math.pow(p,i)*Math.pow(1-p,n-i);listeproba.push(proba);}
    let testa;
    let testb = listeproba[0];
    for (i=0;i<=n;i++) {
        testa=listeproba[i];
        if (testa<0.025) {a=a+1;};}
    for (i=0;i<=n;i++) {
            testb=listeproba[i];
            if (testb<0.975) {b=b+1;};}
    return rep = [a,b];
}

function testhyp(a,b,r) {
    let rep;
    if (r>=a && r<= b) {rep=`${retards} $\\in \\left[${ab[0]}~;~${ab[1]}\\right]$ donc l'hypothèse initiale est validée (Julien B. arrive bien en retard à ${ppourcent} % des cours).`;}
    else {rep=`${retards} $\\notin \\left[${ab[0]}~;~${ab[1]}\\right]$ donc l'hypothèse initiale n'est pas validée (Julien B. n'arrive pas en retard à ${ppourcent} % des cours (c'est sans doute bien pire encore !!!)).`;}
    return rep;
}

function reptesthyp(a,b,r) {
    let rep;
    if (r>=a && r<= b) {rep=`L'hypothèse initiale est validée (Julien B. arrive bien en retard à ${ppourcent} % des cours).`;}
    else {rep=`L'hypothèse initiale n'est pas validée (Julien B. n'arrive pas en retard à ${ppourcent} % des cours (c'est sans doute bien pire encore !!!)).`;}
    return rep;
}

function test_réponse(a,b,c) {
    let test;
    let div=a/b;
    if (div==c) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
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

let n = nbrealéa(8,15);
let k = nbrealéa(1,n);
let kinf = nbrealéa(1,n-1);
let kinfegal =nbrealéa(1,n-1);
let ksup = nbrealéa(1,n-1);
let ksupegal = nbrealéa(1,n-1);
let p = nbrealéa(30,70)/100;
let pv = avecVirgule(p);
let ppourcent = Math.round(p*100);
let coefbin = (fact(n))/(fact(n-k)*fact(k));
let repproba = coefbin*Math.pow(p,k)*Math.pow(1-p,n-k);
let repprobav = avecVirgule(repproba);
let p1 = 1-p;
let nmk = n-k;
let p1v = avecVirgule(Math.round(p1*100)/100);
let bornes1 = borneinfsup(n);
let repegalegal = probegalegal(bornes1[0],bornes1[1],n,p);
let repegalegalarrondi = avecVirgule(Math.round(repegalegal*1000)/1000);
let borneinfegalegal = bornes1[0]-1;
let bornes2 = borneinfsup(n);
let repinfegal = probinfegal(bornes2[0],bornes2[1],n,p);
let repeinfegalarrondi = avecVirgule(Math.round(repinfegal*1000)/1000);
let bornes3 = borneinfsup(n);
let repegalinf = probegalinf(bornes3[0],bornes3[1],n,p);
let repegalinfarrondi = avecVirgule(Math.round(repegalinf*1000)/1000);
let bornesupegalinf = bornes3[1]-1;
let borneinfegalinf = bornes3[0]-1;
let bornes4 = borneinfsup(n);
let repinfinf = probinfinf(bornes4[0],bornes4[1],n,p);
let repinfinfarrondi = avecVirgule(Math.round(repinfinf*1000)/1000);
let bornesupinfinf = bornes4[1]-1;
let ab = binomflu(n,p);
let retards = nbrealéa(1,n-1);
let th = testhyp(ab[0],ab[1],retards);
let threp = reptesthyp(ab[0],ab[1],retards);
let rep3a = probegalegal(0,kinfegal,n,p);
let rep3av = avecVirgule(Math.round(rep3a*1000)/1000);
let kinf1 = kinf-1;
let rep3b = probegalegal(0,kinf1,n,p);
let rep3bv = avecVirgule(Math.round(rep3b*1000)/1000);
let ksupegal1 = ksupegal-1;
let rep4a = 1-probegalegal(0,ksupegal1,n,p);
let rep4av = avecVirgule(Math.round(rep4a*1000)/1000);
let rep4b = 1-probegalegal(0,ksup,n,p);
let rep4bv = avecVirgule(Math.round(rep4b*1000)/1000);
let f1h = rotation(30,100,20,100,30);
let f1hx = f1h[0];
let f1hy = f1h[1];
let f1b = rotation(30,100,20,100,-30);
let f1bx = f1b[0];
let f1by = f1b[1];
let f2h = rotation(10+bornes1[1]*50,100,20+bornes1[1]*50,100,30);
let f2hx = f2h[0];
let f2hy = f2h[1];
let f2b = rotation(10+bornes1[1]*50,100,20+bornes1[1]*50,100,-30);
let f2bx = f2b[0];
let f2by = f2b[1];
let fb = rotation(10+n*50+50,30,20+n*50+50,30,30)
let fbx = fb[0];
let fby = fb[1];
let fh = rotation(10+n*50+50,30,20+n*50+50,30,-30)
let fhx = fh[0];
let fhy = fh[1];

function droitesol(x,y,borne1,borne2,canvas) {
    var canvas = document.getElementById(canvas); 
    var context = canvas.getContext("2d");
    let longueur = n*50+50;
    let f2h = rotation(10+borne2*50,100,20+borne2*50,100,30);
    let f2hx = f2h[0];
    let f2hy = f2h[1];
    let f2b = rotation(10+borne2*50,100,20+borne2*50,100,-30);
    let f2bx = f2b[0];
    let f2by = f2b[1];
    context.save();
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x+longueur,y);
    context.moveTo(x+n*50+50,y);
    context.lineTo(fbx,fby);
    context.moveTo(x+n*50+50,y);
    context.lineTo(fhx,fhy);
    for (let i=0;i<n+1;i++) {
        context.moveTo(x+50*i,y+10);
        context.lineTo(x+50*i,y-10);
        context.font = '20px serif';
        context.fillText(i,x+50*i-5,y+30);
    }
    context.strokeStyle="black";
    context.moveTo(x+borne2*50,100);
    context.lineTo(f2hx,f2hy);
    context.moveTo(x+borne2*50,100);
    context.lineTo(f2hx,f2hy);
    context.stroke();
    context.beginPath();
    context.strokeStyle="red";
    context.strokeRect(x+borne1*50-10,10,x+(borne2-borne1)*50+10,60);
    context.stroke();
    context.beginPath();
    context.strokeStyle="green";
    context.strokeRect(x-10,10,x+(borne1-1)*50+10,60);
    context.stroke();
    context.beginPath();
    context.strokeStyle="blue";
    context.moveTo(x,100);
    context.lineTo(x+borne2*50,100);
    context.moveTo(x,100);
    context.lineTo(f1hx,f1hy);
    context.moveTo(x,100);
    context.lineTo(f1bx,f1by);
    context.moveTo(x+borne2*50,100);
    context.lineTo(f2hx,f2hy);
    context.moveTo(x+borne2*50,100);
    context.lineTo(f2bx,f2by);
    context.stroke();
}
  
droitesol(20,30,bornes1[0],bornes1[1],"canvasC5");
droitesol(20,30,bornes2[0]+1,bornes2[1],"canvasC6");
droitesol(20,30,bornes3[0],bornes3[1]-1,"canvasC7");
droitesol(20,30,bornes4[0]+1,bornes4[1]-1,"canvasC8");

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
let correction = document.getElementById('correction');
let correction1 = document.getElementById('correction1');
let correction2 = document.getElementById('correction2');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');




enonce.innerHTML = `Pour s'entraîner en vue d'un tournoi, un joueur de baskets effectue une série de lancers-francs.<br>
Il effectue ${n} lancers-francs consécutifs.<br>
On sait qu'il réussit ses lancers-francs dans ${ppourcent} % des cas.<br>
On note $X$ la variabla aléatoire assocée au nombre de lancers-francs qu'il réussit.<br>
1) Justifier que $X$ suit un schéma de Bernoulli dont on précisera les paramètres.<br>
2) Calculer $P\\left(X=${k}\\right)$<br>
3) a) Calculer $P\\left(X\\leqslant ${kinfegal}\\right)$ (arrondir à $10^{-3}$ près)<br>
$\\phantom{3) }$b) Calculer $P\\left(X< ${kinf}\\right)$ (arrondir à $10^{-3}$ près)<br>
4) a) Calculer $P\\left(X\\geqslant ${ksupegal}\\right)$ (arrondir à $10^{-3}$ près)<br>
$\\phantom{4) }$b) Calculer $P\\left(X> ${ksup}\\right)$ (arrondir à $10^{-3}$ près)<br>
5) Calculer $P\\left(${bornes1[0]}\\leqslant X\\leqslant ${bornes1[1]} \\right)$ (arrondir à $10^{-3}$ près)<br>
6) Calculer $P\\left(${bornes2[0]} < X \\leqslant ${bornes2[1]} \\right)$ (arrondir à $10^{-3}$ près)<br>
7) Calculer $P\\left(${bornes3[0]}\\leqslant X < ${bornes3[1]} \\right)$ (arrondir à $10^{-3}$ près)<br>
8) Calculer $P\\left(${bornes4[0]} < X < ${bornes4[1]} \\right)$ (arrondir à $10^{-3}$ près)<br>`;

solution.innerHTML = `1) $X$ suit un schéma de Bernoulli de paramètres $n=${n}$ et $p=${pv}$<br>
2) $P\\left(X=${k}\\right)\\approx${repprobav}$<br>
3) a) $P\\left(X\\leqslant ${kinfegal}\\right)\\approx ${rep3av}$ <br>
$\\phantom{3) }$b) $P\\left(X< ${kinf}\\right)\\approx ${rep3bv}$ <br>
4) a) $P\\left(X\\geqslant ${ksupegal}\\right)\\approx ${rep4av}$ <br>
$\\phantom{4) }$b) $P\\left(X> ${ksup}\\right)\\approx ${rep4bv} $ <br>
5) $P\\left(${bornes1[0]}\\leqslant X\\leqslant ${bornes1[1]} \\right)\\approx ${repegalegalarrondi}$<br>
6) $P\\left(${bornes2[0]} < X \\leqslant ${bornes2[1]} \\right)\\approx ${repeinfegalarrondi}$<br>
7) $P\\left(${bornes3[0]}\\leqslant X < ${bornes3[1]} \\right)\\approx ${repegalinfarrondi}$<br>
8) $P\\left(${bornes4[0]} < X < ${bornes4[1]} \\right)\\approx ${repinfinfarrondi}$<br>`;

correction1.innerHTML = `1) $X$ suit un schéma de Bernoulli de paramètres $n=${n}$ et $p=${pv}$ car il y a répétition,<br> de manière indépendante, de la même expérience n'ayant que 2 issues possibles (il réussit son lancer ou il ne le réussit pas).<br>
2) $P\\left(X=${k}\\right)\\approx ${repprobav}$<br>
3) a) $P\\left(X\\leqslant ${kinfegal}\\right)\\approx ${rep3av}$<br>
$\\phantom{3) }$b) $P\\left(X< ${kinf}\\right)=P\\left(X\\leqslant ${kinf1}\\right)\\approx ${rep3bv} $<br>
4) a) $P\\left(X\\geqslant ${ksupegal}\\right)=1-P\\left(X\\leqslant ${ksupegal1} \\right)\\approx ${rep4av} $<br>
$\\phantom{4) }$b) $P\\left(X> ${ksup}\\right)=1-P\\left(X\\leqslant ${ksup}\\right)\\approx ${rep4bv} $<br>
5) $\\color{red}{P\\left(${bornes1[0]}\\leqslant X\\leqslant ${bornes1[1]} \\right)}=\\color{blue}{P\\left(X\\leqslant ${bornes1[1]} \\right)}-\\color{green}{P\\left(X\\leqslant ${borneinfegalegal} \\right)}\\approx ${repegalegalarrondi}$`;


correction2.innerHTML = `6) $\\color{red}{P\\left(${bornes2[0]} < X \\leqslant ${bornes2[1]} \\right)}=\\color{blue}{P\\left(X\\leqslant ${bornes2[1]}\\right)}-\\color{green}{P\\left(X\\leqslant ${bornes2[0]} \\right)}\\approx ${repeinfegalarrondi}$`;

correction3.innerHTML = `7) $\\color{red}{P\\left(${bornes3[0]}\\leqslant X < ${bornes3[1]} \\right)}=\\color{blue}{P\\left(X\\leqslant ${bornesupegalinf} \\right)}-\\color{green}{P\\left(X\\leqslant ${borneinfegalinf} \\right)}\\approx ${repegalinfarrondi}$`;

correction4.innerHTML = `8) $\\color{red}{P\\left(${bornes4[0]} < X < ${bornes4[1]} \\right)}=\\color{blue}{P\\left(X\\leqslant ${bornesupinfinf} \\right)}-\\color{green}{P\\left(X\\leqslant ${bornes4[0]} \\right)}\\approx ${repinfinfarrondi}$`;

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
    location.href = "../../../Menus/Menu1ST.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/Menu1STprobabilitesarbresvariablesaleatoires.html";
})