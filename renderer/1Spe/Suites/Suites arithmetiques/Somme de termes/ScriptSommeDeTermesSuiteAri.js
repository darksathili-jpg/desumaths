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



let ranginit = nbrealéa(0,5);
let uranginit = nbrealéa(1,10);
let r = nbrealéa(1,10);
let ninit = uranginit+nbrealéa(0,10);
let ninitplusun = ninit+1;
let nfinal = ninit+nbrealéa(5,30);
let nbretermes = nfinal-ninit+1;
let diffninit = ninit-ranginit;
let uinit = uranginit+diffninit*r;
let diffnfinal = nfinal-ranginit;
let ufinal = uranginit+diffnfinal*r;
let s = nbretermes*(uinit+ufinal)/2;

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


let listenonces = [`Soit $(u_n)$ la suite arithmétique de premier terme $u_{${ranginit}}=${uranginit}$ et de raison $r=${r}$.<br>
Calculer la somme suivante : $S=u_{${ninit}}+u_{${ninitplusun}}+\\ldots +u_{${nfinal}}$.`];

let listeCorrections = [`On va utiliser la formule : $S=\\text{nombre de termes de la somme}\\times~\\dfrac{\\text{premier terme de la somme}+\\text{dernier terme de la somme}}{2}$.<br>
$S=u_{\\color{blue}{${ninit}}}+u_{${ninitplusun}}+\\ldots +u_{\\color{green}{${nfinal}}}$ donc :<br>
$\\bullet\\hspace{5mm} \\text{nombre de termes de la somme} = \\color{green}{${nfinal}}-\\color{blue}{${ninit}}+1=${nbretermes}$<br>
$\\bullet\\hspace{5mm} \\text{premier terme de la somme} = u_{${ninit}}=u_{${ranginit}}+${diffninit}\\times r=${uranginit}+${diffninit}\\times ${r}=${uinit}$<br>
$\\bullet\\hspace{5mm} \\text{dernier terme de la somme}= u_{${nfinal}}=u_{${ranginit}}+${diffnfinal}\\times r=${uranginit}+${diffnfinal}\\times ${r}=${ufinal}$<br><br>
On a donc : $S=${nbretermes}\\times\\dfrac{${uinit}+${ufinal}}{2}=${s} $`];

let listeSolutions = [`$S=${s}$`];

enonce.innerHTML = listenonces[0];
solution.innerHTML = listeSolutions[0];
correctiond.innerHTML = listeCorrections[0];


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