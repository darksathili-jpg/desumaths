function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function positifnegatif(a) {
    let rep;
    let choix = nbrealéa(1,2);
    if (choix==1) {rep=a;} else {rep=-a;}
    return rep;
}

function plusmoins() {
    let s = nbrealéa(1,2);
    let sig;
    if (s==1) {sig='+';} else {sig='-';}
    return sig;
}

function rienplus(a) {
    let rep
    if (a<0) {rep='';} else {rep='+';}
    return rep;
}

function rienmoins(a) {
    let rep
    if (a<0) {rep='-';} else {rep='';}
    return rep;
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }


function simply(num,denom) {
    let rep;
    if (denom==1) {rep='='+num;} else {rep='';}
    return rep;
}

function parenthesesgd(a) {
    let rep;
    let parg;
    let pard;
    if (a<0) {parg='(';pard=')';} else {parg='';pard='';}
    return rep=[parg,pard];
  }

function cas(num,denom) {
    let rep;
    if (denom==1) {rep=1;} else {rep=0;}
    return rep;
}

function signefrac(num,denom) {
    let rep;
    if (num>0 && denom>0) {rep='';}
    if (num>0 && denom<0) {rep='-';}
    if (num<0 && denom>0) {rep='-';}
    if (num<0 && denom<0) {rep='';}
    return rep;
}

function fracsimp(num,denom) {
    let rep=[num,denom];
    if (num<0 && denom<0) {rep=[-num,-denom];}
    if (num>0 && denom<0) {rep=[num,-denom];}
    if (num<0 && denom>0) {rep=[-num,denom];}
    return rep; 
}

function solsimpfin(num,denom) {
    let rep;
    let rep1;
    let signe = signefrac(num,denom);
    if (num==0) {signe=``;};
    let frac1 = simplifierfraction(num,denom);
    let frac2 = fracsimp(frac1[0],frac1[1]);
    if (frac2[1]==1) {rep1=[signe,frac2[0]];} else {rep1=[signe,frac2[0],frac2[1]];}
    if (num==frac2[0] && denom==frac2[1] && frac2[1]!=1) {rep=``;}  else {
    if (rep1.length==2) {rep=`=${rep1[0]}${rep1[1]}`;} else {rep=`=${rep1[0]}\\dfrac{${rep1[1]}}{${rep1[2]}}`;}
    }
    return rep;
}

function soluces(num,denom) {
    let rep;
    let rep1;
    let signe = signefrac(num,denom);
    if (num==0) {signe=``;};
    let frac1 = simplifierfraction(num,denom);
    let frac2 = fracsimp(frac1[0],frac1[1]);
    if (frac2[1]==1) {rep1=[signe,frac2[0]];} else {rep1=[signe,frac2[0],frac2[1]];}
    if (rep1.length==2) {rep=`${rep1[0]}${rep1[1]}`;} else {rep=`${rep1[0]}\\dfrac{${rep1[1]}}{${rep1[2]}}`;}
    return rep;
}

let a = positifnegatif(nbrealéa(1,10));
let b = nbrealéa(-20,20);
let c = positifnegatif(nbrealéa(1,10));
let d = nbrealéa(-20,20);
let e = positifnegatif(nbrealéa(1,10));
let f = nbrealéa(2,10);
let oppd = -d;
let valint = -d/c;
let valintsimp = simplifierfraction(-d,c);
let valintrepsimp = fracsimp(valintsimp[0],valintsimp[1]);
let signevalint = rienmoins(valint);
let simplyvalint = simply(valintsimp[0],valintsimp[1]);
let valintsimpegal = solsimpfin(-d,c);
let valintsimply = soluces(-d,c);
let signeb = rienplus(b);
let signed = rienplus(d);
let signee = rienplus(e);
let signef = rienplus(f);
let pgda = parenthesesgd(a);
let pgdb = parenthesesgd(b);
let pgdc = parenthesesgd(c);
let pgdd = parenthesesgd(d);
let ce = c*e;
let de = d*e;
let signede = rienplus(de);
let af = a*f;
let bf = b*f;
let signebf = rienplus(bf);
let opaf = -af;
let signeopaf = rienplus(opaf);
let opde = -de;
let signeopde = rienplus(opde);
let coefx = ce+opaf;
let reels = bf+opde;
let fracsimplifiee = simplifierfraction(reels,coefx); 
let repsimp = fracsimp(fracsimplifiee[0],fracsimplifiee[1]);
let signesol = rienmoins(reels/coefx);
let solsimpeagal = solsimpfin(reels,coefx);
let solsimp = soluces(reels,coefx);
let k = cas(repsimp[0],repsimp[1]);
let kenonce = cas(valintrepsimp[0],valintrepsimp[1]);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


let listecorrrections = [`$\\begin{array}{rcrcl} \\dfrac{${a}x${signeb}${b}}{${c}x${signed}${d}}=\\dfrac{${e}}{${f}} & \\iff & ${e}\\times (${c}x${signed}${d}) & = &${f}\\times (${a}x${signeb}${b}) \\left(\\text{produit en croix avec}~x\\neq \\dfrac{${oppd}}{${c}} ${valintsimpegal} \\right) \\\\
& \\iff & ${e}\\times ${pgdc[0]}${c}x${pgdc[1]} ${signee}${e}\\times ${pgdd[0]}${d}${pgdd[1]} & = & ${f}\\times ${pgda[0]}${a}x${pgda[1]} ${signef}${f}\\times ${pgdb[0]}${b}${pgdb[1]} \\\\
& \\iff & ${ce}x ${signede}${de} & = & ${af}x ${signebf}${bf} \\\\
& \\iff & ${ce}x ${signeopaf}${opaf}x & = & ${bf} ${signeopde}${opde} \\\\
& \\iff & ${coefx}x & = & ${reels} \\\\
& \\iff & x & = & \\dfrac{${reels}}{${coefx}} ${solsimpeagal} \\end{array}$ `,
`$\\begin{array}{rcrcl} \\dfrac{${a}x${signeb}${b}}{${c}x${signed}${d}}=\\dfrac{${e}}{${f}} & \\iff & ${e}\\times (${c}x${signed}${d}) & = & ${f}\\times (${a}x${signeb}${b}) \\left(\\text{produit en croix avec}~x\\neq \\dfrac{${oppd}}{${c}} ${valintsimpegal} \\right) \\\\
& \\iff & ${e}\\times ${pgdc[0]}${c}x${pgdc[1]} ${signee}${e}\\times ${pgdd[0]}${d}${pgdd[1]} & = & ${f}\\times ${pgda[0]}${a}x${pgda[1]} ${signef}${f}\\times ${pgdb[0]}${b}${pgdb[1]} \\\\
& \\iff & ${ce}x ${signede}${de} & = & ${af}x ${signebf}${bf} \\\\
& \\iff & ${ce}x ${signeopaf}${opaf}x & = & ${bf} ${signeopde}${opde} \\\\
& = & \\dfrac{${e}}{${f}}\\iff ${coefx}x & = & ${reels} \\\\
& \\iff & x & = & \\dfrac{${reels}}{${coefx}} ${solsimpeagal} \\end{array}$ `];

let listesolutions = [`Solution : $S=\\left\\{ ${solsimp} \\right\\} $`,`Solution : $S=\\left\\{ ${solsimp} \\right\\} $`];

let listenonces = [`Résoudre dans $\\mathbb{R}~\\backslash \\left\\{ ${valintsimply} \\right\\} $ l'équation : $\\dfrac{${a}x${signeb}${b}}{${c}x${signed}${d}}=\\dfrac{${e}}{${f}}$`,
`Résoudre dans $\\mathbb{R}~\\backslash \\left\\{ ${valintsimply} \\right\\} $ l'équation : $\\dfrac{${a}x${signeb}${b}}{${c}x${signed}${d}}=\\dfrac{${e}}{${f}}$`];

enonce.innerHTML = listenonces[kenonce] ;
solution.innerHTML = listesolutions[k];
correctiond.innerHTML = listecorrrections[k];

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
    location.href = "../../../Menus/MenuSecondeEquations.html";
})