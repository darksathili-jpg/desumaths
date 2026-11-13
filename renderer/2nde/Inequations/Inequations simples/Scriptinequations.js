function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

function positifnegatif(a) {
    let choix=nbrealéa(1,2);
    let rep;
    if (choix==1) {rep=a;} else {rep=-a;}
    return rep;
}

function supinf(choix,a) {
    let rep;
    if (choix==0 && a>0) {rep='<';}
    if (choix==0 && a<0) {rep='\\color{red}{>}';}
    if (choix==1 && a>0) {rep=`\\leqslant`;}
    if (choix==1 && a<0) {rep=`\\color{red}{\\geqslant}`;}
    if (choix==2 && a>0) {rep='>';}
    if (choix==2 && a<0) {rep='\\color{red}{<}';}
    if (choix==3 && a>0) {rep=`\\geqslant`;}
    if (choix==3 && a<0) {rep=`\\color{red}{\\leqslant}`;}
    return rep;
}

function signe(b) {
    let rep;
    if (b>=0) {rep='+';} else {rep='';}
    return rep;
}

function plusmoins(b) {
    let rep;
    if (b==``) {rep='+';} else {rep='-';}
    return rep;
}

function valabs(b) {
    let rep;
    if (b<0) {rep=-b;} else {rep=b;}
    return rep;
}

function solutions(choix,a,d) {
    let rep;
    if (choix==0 && a>0) {rep=`\\left] -\\infty~;~\\dfrac{${d}}{${a}} \\right[`;}
    if (choix==0 && a<0) {rep=`\\left] \\dfrac{${d}}{${a}}~;~+\\infty \\right[`;}
    if (choix==1 && a>0) {rep=`\\left] -\\infty~;~\\dfrac{${d}}{${a}} \\right]`;}
    if (choix==1 && a<0) {rep=`\\left[ \\dfrac{${d}}{${a}}~;~+\\infty \\right[`;}
    if (choix==2 && a>0) {rep=`\\left] \\dfrac{${d}}{${a}}~;~+\\infty \\right[`;}
    if (choix==2 && a<0) {rep=`\\left] -\\infty~;~\\dfrac{${d}}{${a}} \\right[`;}
    if (choix==3 && a>0) {rep=`\\left[ \\dfrac{${d}}{${a}}~;~+\\infty \\right[`;}
    if (choix==3 && a<0) {rep=`\\left] -\\infty~;~\\dfrac{${d}}{${a}} \\right]`;}
    return rep;
}

function solutionssimplifiees(choix,a,d,simpfrac) {
    let rep;
    let frac=simpfrac[0]/simpfrac[1];
    let fracabs = fracsimp(simpfrac[0],simpfrac[1]);
    let sfrac = rienmoins(d/a); 
    if (choix==0 && a>0 && d!=simpfrac[0]) {rep=`=\\left] -\\infty~;~${sfrac}\\dfrac{${fracabs[0]}}{${fracabs[1]}} \\right[`;}
    if (choix==0 && a>0 && d!=simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] -\\infty~;~${frac} \\right[`;}
    if (choix==0 && a>0 && d==simpfrac[0]) {rep=``;}
    if (choix==0 && a>0 && d==simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] -\\infty~;~${frac} \\right[`;}
    if (choix==0 && a<0 && d!=simpfrac[0]) {rep=`=\\left] ${sfrac}\\dfrac{${fracabs[0]}}{${fracabs[1]}}~;~+\\infty \\right[`;}
    if (choix==0 && a<0 && d!=simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] ${frac}~;~+\\infty \\right[`;}
    if (choix==0 && a<0 && d==simpfrac[0]) {rep=``;}
    if (choix==0 && a<0 && d==simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] ${frac}~;~+\\infty \\right[`;}
    if (choix==1 && a>0 && d!=simpfrac[0]) {rep=`=\\left] -\\infty~;~${sfrac}\\dfrac{${fracabs[0]}}{${fracabs[1]}} \\right]`;}
    if (choix==1 && a>0 && d!=simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] -\\infty~;~${frac} \\right]`;}
    if (choix==1 && a>0 && d==simpfrac[0]) {rep=``;}
    if (choix==1 && a>0 && d==simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] -\\infty~;~${frac} \\right]`;}
    if (choix==1 && a<0 && d!=simpfrac[0]) {rep=`=\\left[ ${sfrac}\\dfrac{${fracabs[0]}}{${fracabs[1]}}~;~+\\infty \\right[`;}
    if (choix==1 && a<0 && d!=simpfrac[0] && simpfrac[1]==1) {rep=`=\\left[ ${frac}~;~+\\infty \\right[`;}
    if (choix==1 && a<0 && d==simpfrac[0]) {rep=``;}
    if (choix==1 && a<0 && d==simpfrac[0] && simpfrac[1]==1) {rep=`=\\left[ ${frac}~;~+\\infty \\right[`;}
    if (choix==2 && a>0 && d!=simpfrac[0]) {rep=`=\\left] ${sfrac}\\dfrac{${fracabs[0]}}{${fracabs[1]}}~;~+\\infty \\right[`;}
    if (choix==2 && a>0 && d!=simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] ${frac}~;~+\\infty \\right[`;}
    if (choix==2 && a>0 && d==simpfrac[0]) {rep=``;}
    if (choix==2 && a>0 && d==simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] ${frac}~;~+\\infty \\right[`;}
    if (choix==2 && a<0 && d!=simpfrac[0]) {rep=`=\\left] -\\infty~;~${sfrac}\\dfrac{${fracabs[0]}}{${fracabs[1]}} \\right[`;}
    if (choix==2 && a<0 && d!=simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] -\\infty~;~${frac} \\right[`;}
    if (choix==2 && a<0 && d==simpfrac[0]) {rep=``;}
    if (choix==2 && a<0 && d==simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] -\\infty~;~${frac} \\right[`;}
    if (choix==3 && a>0 && d!=simpfrac[0]) {rep=`=\\left[ ${sfrac}\\dfrac{${fracabs[0]}}{${fracabs[1]}}~;~+\\infty \\right[`;}
    if (choix==3 && a>0 && d!=simpfrac[0] && simpfrac[1]==1) {rep=`=\\left[ ${frac}~;~+\\infty \\right[`;}
    if (choix==3 && a>0 && d==simpfrac[0]) {rep=``;}
    if (choix==3 && a>0 && d==simpfrac[0] && simpfrac[1]==1) {rep=`=\\left[ ${frac}~;~+\\infty \\right[`;}
    if (choix==3 && a<0 && d!=simpfrac[0]) {rep=`=\\left] -\\infty~;~${sfrac}\\dfrac{${fracabs[0]}}{${fracabs[1]}} \\right]`;}
    if (choix==3 && a<0 && d!=simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] -\\infty~;~${frac} \\right]`;}
    if (choix==3 && a<0 && d==simpfrac[0]) {rep=``;}
    if (choix==3 && a<0 && d==simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] -\\infty~;~${frac} \\right]`;}
    return rep;
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

function aplusmoins(a) {
    let rep;
    let rep1;
    let rep2;
    let rep3;
    if (a<0) {rep1='';rep2='';rep3='<';}
    else {rep1='ne';rep2='pas';rep3='>';}
    return rep=[rep1,rep2,rep3];
}

function ajoutsoust(b) {
    let rep;
    if (b<0) {rep='ajoute';} else {rep='soustrait';}
    return rep;
}

let a = positifnegatif(nbrealéa(1,20));
let b = nbrealéa(-20,20);
let c = nbrealéa(-20,20);
let sig = signe(b);
let oppsig = plusmoins(sig);
let d = c-b;
let valabsb = valabs(b);
let choix = nbrealéa(0,3);
let infsup = supinf(choix,a);
let sol = solutions(choix,a,d);
let simpfrac = simplifierfraction(d,a);
let repsimp = solutionssimplifiees(choix,a,d,simpfrac);
let fracabs = fracsimp(simpfrac[0],simpfrac[1]);
let sfrac = rienmoins(d/a);
let mots = aplusmoins(a);
let ajso = ajoutsoust(b);

let listeenonces = [`Résoudre dans $\\mathbb{R}$ l'inéquation suivante : $${a}x ${sig} ${b} < ${c}$`,
`Résoudre dans $\\mathbb{R}$ l'inéquation suivante : $${a}x ${sig} ${b} \\leqslant ${c}$`,
`Résoudre dans $\\mathbb{R}$ l'inéquation suivante : $${a}x ${sig} ${b} > ${c}$`,
`Résoudre dans $\\mathbb{R}$ l'inéquation suivante : $${a}x ${sig} ${b} \\geqslant ${c}$`];

let listeSolutions = [];

let listeCorrections = [`$\\begin{array}{lrcll} & ${a}x ${sig} ${b} & < & ${c} & \\\\
 \\iff & ${a}x & < & ${c} ${oppsig} ${valabsb} & \\text{(on ${ajso} ${valabsb} à chaque membre de l'inéquation)} \\\\
 \\iff & ${a}x & < & ${d} & \\\\
 \\iff & x & ${infsup} & \\dfrac{${d}}{${a}} & \\text{(on ${mots[0]} change ${mots[1]} le sens de l'inéquation car on divise par}~${a} ${mots[2]} 0) \\end{array}$  </br><br>`,
`$\\begin{array}{lrcll} & ${a}x ${sig} ${b} & \\leqslant & ${c} & \\\\
 \\iff & ${a}x & \\leqslant & ${c} ${oppsig} ${valabsb} & \\text{(on ${ajso} ${valabsb} à chaque membre de l'inéquation)} \\\\
 \\iff & ${a}x & \\leqslant & ${d} & \\\\
 \\iff & x & ${infsup} & \\dfrac{${d}}{${a}} & \\text{(on ${mots[0]} change ${mots[1]} le sens de l'inéquation car on divise par}~${a} ${mots[2]} 0) \\end{array}$  </br><br>`,
`$\\begin{array}{lrcll} & ${a}x ${sig} ${b} & > & ${c} & \\\\
 \\iff & ${a}x & > & ${c} ${oppsig} ${valabsb} & \\text{(on ${ajso} ${valabsb} à chaque membre de l'inéquation)} \\\\
 \\iff & ${a}x & > & ${d} & \\\\
 \\iff & x & ${infsup} & \\dfrac{${d}}{${a}} & \\text{(on ${mots[0]} change ${mots[1]} le sens de l'inéquation car on divise par}~${a} ${mots[2]} 0) \\end{array}$  </br><br>`,
`$\\begin{array}{lrcll} & ${a}x ${sig} ${b} & \\geqslant & ${c} & \\\\
 \\iff & ${a}x & \\geqslant & ${c} ${oppsig} ${valabsb} & \\text{(on ${ajso} ${valabsb} à chaque membre de l'inéquation)} \\\\
 \\iff & ${a}x & \\geqslant & ${d} & \\\\
 \\iff & x & ${infsup} & \\dfrac{${d}}{${a}} & \\text{(on ${mots[0]} change ${mots[1]} le sens de l'inéquation car on divise par}~${a} ${mots[2]} 0) \\end{array}$  </br><br>`];


function droitereelle(canvas) {
    var canvas = document.getElementById(canvas); 
    var context = canvas.getContext("2d");
    context.save();
    context.beginPath();
    context.lineWidth=3;
    context.strokeStyle = 'black'; 
    context.font = '20px serif';
    context.moveTo(50,50);
    context.lineTo(650,50);
    context.moveTo(650,50);
    context.lineTo(640,40);
    context.moveTo(650,50);
    context.lineTo(640,60);
    context.fillText(`- ∞`,50,80);
    context.fillText(`+ ∞`,630,80);
    context.fillText(`${sfrac} ${fracabs[0]}/${fracabs[1]}`,330,90);
    context.stroke();
    if (a>0 && choix==0) 
    {   context.beginPath();
        context.lineWidth=3;
        context.strokeStyle = 'red'; 
        context.font = '20px serif';
        context.moveTo(50,50);
        context.lineTo(350,50);
        context.moveTo(350,30);
        context.lineTo(350,70);
        context.moveTo(350,30);
        context.lineTo(360,30);
        context.moveTo(350,70);
        context.lineTo(360,70);
        context.stroke();}
    if (a>0 && choix==1) 
    {   context.beginPath();
        context.lineWidth=3;
        context.strokeStyle = 'red'; 
        context.font = '20px serif';
        context.moveTo(50,50);
        context.lineTo(350,50);
        context.moveTo(350,30);
        context.lineTo(350,70);
        context.moveTo(350,30);
        context.lineTo(340,30);
        context.moveTo(350,70);
        context.lineTo(340,70);
        context.stroke();}
    if (a>0 && choix==2) 
    {   context.beginPath();
        context.lineWidth=3;
        context.strokeStyle = 'red'; 
        context.font = '20px serif';
        context.moveTo(650,50);
        context.lineTo(350,50);
        context.moveTo(350,30);
        context.lineTo(350,70);
        context.moveTo(350,30);
        context.lineTo(340,30);
        context.moveTo(350,70);
        context.lineTo(340,70);
        context.stroke();}
    if (a>0 && choix==3) 
    {   context.beginPath();
        context.lineWidth=3;
        context.strokeStyle = 'red'; 
        context.font = '20px serif';
        context.moveTo(650,50);
        context.lineTo(350,50);
        context.moveTo(350,30);
        context.lineTo(350,70);
        context.moveTo(350,30);
        context.lineTo(360,30);
        context.moveTo(350,70);
        context.lineTo(360,70);
        context.stroke();}
    if (a<0 && choix==0) 
    {   context.beginPath();
        context.lineWidth=3;
        context.strokeStyle = 'red'; 
        context.font = '20px serif';
        context.moveTo(650,50);
        context.lineTo(350,50);
        context.moveTo(350,30);
        context.lineTo(350,70);
        context.moveTo(350,30);
        context.lineTo(340,30);
        context.moveTo(350,70);
        context.lineTo(340,70);
        context.stroke();}
    if (a<0 && choix==1) 
    {   context.beginPath();
        context.lineWidth=3;
        context.strokeStyle = 'red'; 
        context.font = '20px serif';
        context.moveTo(650,50);
        context.lineTo(350,50);
        context.moveTo(350,30);
        context.lineTo(350,70);
        context.moveTo(350,30);
        context.lineTo(360,30);
        context.moveTo(350,70);
        context.lineTo(360,70);
        context.stroke();}
    if (a<0 && choix==2) 
    {   context.beginPath();
        context.lineWidth=3;
        context.strokeStyle = 'red'; 
        context.font = '20px serif';
        context.moveTo(50,50);
        context.lineTo(350,50);
        context.moveTo(350,30);
        context.lineTo(350,70);
        context.moveTo(350,30);
        context.lineTo(360,30);
        context.moveTo(350,70);
        context.lineTo(360,70);
        context.stroke();}
    if (a<0 && choix==3) 
    {   context.beginPath();
        context.lineWidth=3;
        context.strokeStyle = 'red'; 
        context.font = '20px serif';
        context.moveTo(50,50);
        context.lineTo(350,50);
        context.moveTo(350,30);
        context.lineTo(350,70);
        context.moveTo(350,30);
        context.lineTo(340,30);
        context.moveTo(350,70);
        context.lineTo(340,70);
        context.stroke();}
}

droitereelle("canvasS");

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
let correction1 = document.getElementById('correction1');
let correction2 = document.getElementById('correction2');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


enonce.innerHTML = listeenonces[choix];
solution.innerHTML = `$S=${sol} ${repsimp}$`;
correction1.innerHTML = listeCorrections[choix];
correction2.innerHTML = `$S=${sol} ${repsimp}$`;

enonce.addEventListener("load", function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

correction.addEventListener('click', () => {
    correctiond.style.display = "block";
})

recommencer.addEventListener('click', () => {
    location.reload(true);
})

solutions.addEventListener('click', () => {
    solution.style.display = "block";
})

accueil.addEventListener('click', () => {
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSeconde.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSecondeInequations.html";
})