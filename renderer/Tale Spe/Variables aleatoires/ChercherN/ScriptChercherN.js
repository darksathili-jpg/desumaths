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
    let a = nbrealéa(0,n-9);
    let b = n-nbrealéa(0,n-20);
    while (a>= b) {
        b = n-nbrealéa(0,n-20);
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

function arrondi(a,n) {
    let rep = Math.round(a*10**n)/10**n;
    return rep;
  }
  
function arrondiv(a,n) {
    let rep = avecVirgule(Math.round(a*10**n)/10**n);
    return rep;
  }


let p = nbrealéa(60,80);
let pv = avecVirgule(p/100);
let UnMoinsP = 100-p;
let UnMoinsPv = avecVirgule(UnMoinsP/100);
let pUnMoinsP = p*UnMoinsP;
let pUnMoinsPv = avecVirgule(pUnMoinsP/10000);
let RayonEnonce = nbrealéa(1,15);
let RayonEnoncev = avecVirgule(RayonEnonce/100);
let InfEnonce = p-RayonEnonce;
let InfEnoncev = avecVirgule(InfEnonce/100);
let SupEnonce = p+RayonEnonce;
let SupEnoncev = avecVirgule(SupEnonce/100);
let pEnonce = nbrealéa(90,99);
let pEnoncev = avecVirgule(pEnonce/100);
let UnMoinsPEnonce = 100-pEnonce;
let UnMoinsPEnoncev = avecVirgule(UnMoinsPEnonce/100);
let soln = (pUnMoinsP/10000)/((RayonEnonce/100)**2*(UnMoinsPEnonce/100));
let solna = arrondiv(soln,2);
let sole = Math.trunc(soln)+1;


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');




enonce.innerHTML = `Soit $S_n$ une variable aléatoire suivant une loi binomiale de paramètres $n$ et $p=${pv}$ comptant le nombre de jouets d'une entreprise ayant réussi un test de fabrication dans un lot de $n$ jouets. <br>
Soit $F_n$ la variable aléatoire définie par $F_n=\\dfrac{S_n}{n}$. <br>
1) Déterminer $E\\left(F_n\\right)$ et $V\\left(F_n\\right)$. <br>
2) On s'intéresse à l'évènement $I$ : " la proportion de jouets qui réussissent le test de fabrication dans un lot de $n$ jouets est strictement comprise entre $${InfEnonce} \\%$ et $${SupEnonce} \\%$ " <br>
En utilisant l'inégalité de Bienaymé-Tchebychev, déterminer une valeur $n$ de la taille du lot de jouets à prélever, à partir duquel la probabilité de l'évènement $I$ est supérieure ou égale à ${pEnoncev}. `;

solution.innerHTML = `1) 
`;

correctiond.innerHTML = `1) $F_n$ représente la proportion des jouets qui réussissent le test de fabrication dans un lot de $n$ jouets prélevés. <br>
$E\\left(F_n\\right)=E\\left(\\dfrac{S_n}{n}\\right)=\\dfrac{E\\left(S_n\\right)}{n}=\\dfrac{n\\times p}{n}=\\dfrac{n\\times ${pv}}{n}=${pv}$ <br>
$V\\left(F_n\\right)=v\\left(\\dfrac{S_n}{n}\\right)=\\dfrac{V\\left(S_n\\right)}{n^2}=\\dfrac{np(1-p)}{n^2}=\\dfrac{p(1-p)}{n}=\\dfrac{${pv}\\times ${UnMoinsPv}}{n}=\\dfrac{${pUnMoinsPv}}{n}$ <br>
2) $I$ est en fait l'évènement : $${InfEnoncev} < F_n < ${SupEnoncev}$, ce qui se traduit par $\\left|F_n-${pv}\\right|<${RayonEnoncev}$. <br>
On veut donc résoudre : $P\\left(\\left|F_n-${pv}\\right|<${RayonEnoncev}\\right)\\geqslant ${pEnoncev}$ <br>
$\\begin{array}{rcrcl}
P\\left(\\left|F_n-${pv}\\right|<${RayonEnoncev}\\right)\\geqslant ${pEnoncev} & \\iff & 1-P\\left(\\left|F_n-${pv}\\right|<${RayonEnoncev}\\right) & \\leqslant & 1-${pEnoncev} \\\\
 & \\iff & P\\left(\\left|F_n-${pv}\\right|\\geqslant ${RayonEnoncev}\\right) & \\leqslant & ${UnMoinsPEnoncev}
\\end{array}$ <br><br>
L'inégalité de Bienaymé-Tchebychev donne $P\\left(\\left|F_n-E\\left(F_n\\right)\\right|\\geqslant \\delta\\right)\\leqslant \\dfrac{V\\left(F_n\\right)}{\\delta ^2}$ <br>
Ce qui donne ici $P\\left(\\left|F_n-${pv}\\right|\\geqslant ${RayonEnoncev} \\right)\\leqslant \\dfrac{${pUnMoinsPv}}{n\\times ${RayonEnoncev}^2}$ <br>
Il faut donc que : $\\dfrac{${pUnMoinsPv}}{n\\times ${RayonEnoncev}^2}\\leqslant ${UnMoinsPEnoncev}$ <br>
$\\begin{array}{rcrcl}
\\dfrac{${pUnMoinsPv}}{n\\times ${RayonEnoncev}^2} \\leqslant ${UnMoinsPEnoncev} & \\iff & n\\times ${RayonEnoncev}^2\\times ${UnMoinsPEnoncev} & \\geqslant & ${pUnMoinsPv} \\\\
 & \\iff & n & \\geqslant & \\dfrac{${pUnMoinsPv}}{${RayonEnoncev}^2\\times {${UnMoinsPEnoncev}}} \\\\
 & \\iff & n & \\geqslant & ${solna}
\\end{array}$ <br>
Donc c'est à partir de $n=${sole}$.
`;


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
    location.href = "../../../Menus/MenuTaleSpe.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTaleProbabilites.html";
})