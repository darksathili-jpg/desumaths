function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function plusmoins() {
    let s = nbrealéa(1,2);
    let sig;
    if (s==1) {sig='+';} else {sig='-';}
    return sig;
}

function rienmoins() {
    let s = nbrealéa(1,2);
    let sig;
    if (s==1) {sig='';} else {sig='-';}
    return sig;
}

function reponse(a,b,c,d,e) {
    let rep;
    if (d=='-') {a=-a;}
    if (e=='-') {b=-b;}
    rep = (c-b)/a;
    return rep;
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }

function numerateursimplifie(a,b,c,d,e) {
    let num;
    let denom;
    let rep;
    if (d=='-') {a=-a;}
    if (e=='-') {b=-b;}
    num = c-b;
    denom = a;
    rep = simplifierfraction(num,denom);
    if (rep[0]<0) {return -rep[0];} else {return rep[0];}
    }

function denominateursimplifie(a,b,c,d,e) {
    let num;
    let denom;
    let rep;
    if (d=='-') {a=-a;}
    if (e=='-') {b=-b;}
    num = c-b;
    denom = a;
    rep = simplifierfraction(num,denom);
    if (rep[1]<0) {return -rep[1];} else {return rep[1];}
    }

function changesigne(a) {
      let signe;
      if (a=='+') {signe='-';} else {signe='+';}
      return signe;
  }

function cplusb(a,b,c) {
    let cetb;
    if (c=='+') {cetb = a+b;} else {cetb = b-a;}
    return cetb;
}

function asigne(a,b) {
    let asig;
    if (b=='-') {asig=-a;} else {asig=a;}
    return asig;
}

function signerep(a) {
    let signreponse;
    if(a<0) {signreponse='-';} else {signreponse='';}
    return signreponse;
}

function repsimple(a,b,c) {
    let rep;
    if (b==1) {rep='='+c+a;} else {rep='';}
    return rep;
}

function num1(s1,n1,d1,s2,n2,d2){
    if(d1==1 & d2 !=1){
        return `$S=\\left\\{${s1} ${n1}~;~${s2} \\dfrac{${numsimp2}}{${denomsimp2}}\\right\\}$`
    }
    if(d1!=1 & d2==1){
        return `$S=\\left\\{${s1} \\dfrac{${n1}}{${d1}}~;~${s2} ${n2}\\right\\}$`
    }
    if(d1!=1 & d2!=1){
        return `$S=\\left\\{${s1} \\dfrac{${n1}}{${d1}}~;~${s2} \\dfrac{${n2}}{${d2}}\\right\\}$`
    }
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

let a = nbrealéa(1,15);
let b = nbrealéa(1,20);
let c = nbrealéa(1,15);
let d = nbrealéa(1,20);
let s1 = rienmoins();
let s2 = plusmoins();
let s3 = rienmoins();
let s4 = plusmoins();
let rep1 = reponse(a,b,0,s1,s2);
let numsimp1 = numerateursimplifie(a,b,0,s1,s2);
let denomsimp1 = denominateursimplifie(a,b,0,s1,s2);
let rep2 = reponse(c,d,0,s3,s4);
let numsimp2 = numerateursimplifie(c,d,0,s3,s4);
let denomsimp2 = denominateursimplifie(c,d,0,s3,s4);
let s_3 = changesigne(s2);
let cetb1 = cplusb(b,0,s_3);
let s_4 = changesigne(s4);
let cetb2 = cplusb(d,0,s_4);
let aavecsigne = asigne(a,s1);
let bavecsigne = asigne(c,s3);
let signereponse1 = signerep(rep1);
let signereponse2 = signerep(rep2);
let reponsesimplifiee1 = solsimpfin(cetb1,aavecsigne);
let reponsesimplifiee2 = solsimpfin(cetb2,bavecsigne);
let sol1 = soluces(cetb1,aavecsigne);
let sol2 = soluces(cetb2,bavecsigne);

const enonce = document.getElementById('enonce');
const correctiond = document.getElementById('correctiond');
const correction = document.getElementById('correction');
const solutions = document.getElementById('solutions');
const solution = document.getElementById('solution');
const recommencer = document.getElementById('recommencer');
const accueil = document.getElementById('accueil');
const MenuSeconde = document.getElementById('MenuSeconde');
const MenuSecondeEquations = document.getElementById('MenuSecondeEquations');

// Enoncé et rédaction pédagogique repris sans modification du contenu mathématique.
enonce.innerHTML = `<span class="enonce-texte">Résoudre dans $\\mathbb{R}$ l’équation :</span><span class="enonce-expression">$(${s1} ${a}x ${s2} ${b}) (${s3} ${c}x ${s4} ${d})= 0$</span>`;
solution.innerHTML = `$S=\\left\\{${sol1} ~;~${sol2} \\right\\}$`;
correctiond.innerHTML = `$\\begin{array}{rclcrcl}${s1} ${a}x ${s2} ${b} & = & 0 & \\text{ou} & ${s3} ${c}x ${s4} ${d} & = & 0 \\\\
${s1} ${a}x & = & 0 ${s_3} ${b} = ${cetb1} & \\text{ou} & ${s3} ${c}x & = & 0 ${s_4} ${d} = ${cetb2} \\\\
x & = & \\dfrac{${cetb1}}{${aavecsigne}} ${reponsesimplifiee1} & \\text{ou} & x & = & \\dfrac{${cetb2}}{${bavecsigne}} ${reponsesimplifiee2} \\end{array}$ `;

// Les formules initiales sont composées par MathJax au chargement de la page.
// Les sections cachées sont recomposées lors de leur première ouverture.
function composerMaths(element) {
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        window.MathJax.typesetPromise([element]).catch(function (erreur) {
            console.warn('MathJax :', erreur);
        });
    }
}
function basculer(bouton, panneau) {
    const ouvrir = panneau.hidden;
    panneau.hidden = !ouvrir;
    bouton.setAttribute('aria-expanded', String(ouvrir));
    bouton.textContent = ouvrir ? bouton.dataset.masquer : bouton.dataset.afficher;
    if (ouvrir) composerMaths(panneau);
}
solutions.addEventListener('click', function () { basculer(solutions, solution); });
correction.addEventListener('click', function () { basculer(correction, correctiond); });
recommencer.addEventListener('click', function () { window.location.reload(); });
accueil.addEventListener('click', function () { window.location.href = '../../../index.html'; });
MenuSeconde.addEventListener('click', function () { window.location.href = '../../../Menus/MenuSeconde.html'; });
MenuSecondeEquations.addEventListener('click', function () { window.location.href = '../../../Menus/MenuSecondeEquations.html'; });
