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

function arrondi(a,n) {
    let rep = Math.round(a*10**n)/10**n;
    return rep;
  }
  
  function arrondiv(a,n) {
    let rep = avecVirgule(Math.round(a*10**n)/10**n);
    return rep;
  }

function listen(n) {
    let liste =[];
    i=0;
    liste.push(i);
    while (i<n) {i=i+1;liste.push(i);}
    return liste;
}

function listenq(n) {
    let liste = listen(n);
    let n1 = nbrealéa(0,n);
    let choix1 = liste[n1];
    liste.splice(n1,1);
    let n2 = nbrealéa(0,n-1);
    let choix2 = liste[n2];
    liste.splice(n2,1);
    let n3 = nbrealéa(0,n-2);
    let choix3 = liste[n3];
    return rep = [choix1,choix2,choix3,n,liste,n1,n2,n3];

}

function combinaison(n,k) {
    let rep;
    let factn = fact(n);
    let factk = fact(k);
    let factnmk = fact(n-k);
    return rep = factn/(factnmk*factk);
}

let n = nbrealéa(3,8);
let p = nbrealéa(55,95);
let pv = avecVirgule(p/100);
let liste = listen(n);
let lq = listenq(n);
let k1 = lq[0];
let k2 = lq[1];
let k3 = lq[2];
let UnMoinsP = 100-p;
let UnMoinsPv = avecVirgule(UnMoinsP/100);
let nMoinsk1 = n-k1;
let combi1 = combinaison(n,k1);
let rep1 = arrondiv(combi1*(p/100)**(k1)*(UnMoinsP/100)**(nMoinsk1),3);
let nMoinsk2 = n-k2;
let combi2 = combinaison(n,k2);
let rep2 = arrondiv(combi2*(p/100)**(k2)*(UnMoinsP/100)**(nMoinsk2),3);
let nMoinsk3 = n-k3;
let combi3 = combinaison(n,k3);
let rep3 = arrondiv(combi3*(p/100)**(k3)*(UnMoinsP/100)**(nMoinsk3),3);



let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');




enonce.innerHTML = `Une personnes lance $${n}$ lancers francs lors d'un match de Basket-Ball. <br>
La probabilité qu'il réussisse un lancer est égal à ${pv}. <br>
On note $X$ la variable aléatoire associée aux nombres de lancers francs réussis lors du match. <br>
1) Justifier que $X$ suit une loi binomiale dont on précisera les paramètres. <br>
2) Calculer $P(X=${k1})$ (arrondir à $10^{-3}$ près) <br>
3) Calculer $P(X=${k2})$ (arrondir à $10^{-3}$ près) <br>
4) Calculer $P(X=${k3})$ (arrondir à $10^{-3}$ près) <br>`;

solution.innerHTML = `1) $X$ suit une loi binomiale car il y a répétition, de manière indépendante, de la même expréience n'ayant que deux issues possibles. <br>
Les paramètres sont $n=${n}$ et $p=${pv}$. <br>
2) $P(X=${k1})\\approx ${rep1}$ <br><br>
3) $P(X=${k2})\\approx ${rep2}$ <br><br>
4) $P(X=${k3})\\approx ${rep3}$`;

correctiond.innerHTML = `1) $X$ suit une loi binomiale car il y a répétition, de manière indépendante, de la même expréience n'ayant que deux issues possibles. <br>
Les paramètres sont $n=${n}$ et $p=${pv}$. <br>
2) $P(X=${k1})=\\binom{${n}}{${k1}}\\times ${pv}^{${k1}}\\times ${UnMoinsPv}^{${nMoinsk1}}=${combi1}\\times ${pv}^{${k1}}\\times ${UnMoinsPv}^{${nMoinsk1}}\\approx ${rep1}$ <br><br>
3) $P(X=${k2})=\\binom{${n}}{${k2}}\\times ${pv}^{${k2}}\\times ${UnMoinsPv}^{${nMoinsk2}}=${combi2}\\times ${pv}^{${k2}}\\times ${UnMoinsPv}^{${nMoinsk2}}\\approx ${rep2}$ <br><br>
4) $P(X=${k3})=\\binom{${n}}{${k3}}\\times ${pv}^{${k3}}\\times ${UnMoinsPv}^{${nMoinsk3}}=${combi3}\\times ${pv}^{${k3}}\\times ${UnMoinsPv}^{${nMoinsk3}}\\approx ${rep3}$ 
`


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
    location.href = "../../../Menus/MenuTaleTechno.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTSTVariablesAleatoires.html";
})