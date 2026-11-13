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

function solsimplifiee(num,denom) {
    let rep;
    if (denom==1) {rep=`= ${num}`;}
    else {rep='';}
    return rep;
}

function nbresdiff(a) {
    let rep = nbrealéa(-10,10);
    while (rep==a) {rep=nbrealéa(-10,10);}
    return rep;
}

function nbrediff(a) {
    let rep = nbrealéa(-15,15);
    while (rep==a) {rep=nbrealéa(-15,15);}
    return rep;
}

function nbdiff(a) {
    let rep = nbrealéa(1,15);
    while (rep==a) {rep=nbrealéa(1,15);}
    return rep;
}

function diffvi(a) {
    let rep = nbrealéa(-10,10);
    while (rep==a) {rep=nbrealéa(-10,10);}
    return rep;
}

function diffvix1f(x1,vi) {
    let rep = nbrealéa(-10,10);
    while (rep==x1 || rep==vi) {rep=nbrealéa(-10,10);}
    return rep;
}

function denominateur(a,num) {
    let rep = nbrealéa(2,10);
    while (rep==num/a) {rep=nbrealéa(2,10);}
    return rep;
}

function ndiffaf(a) {
    let rep = nbreouoppose(nbrealéa(1,10));
    while (rep==a) {rep=nbreouoppose(nbrealéa(1,10));}
    return rep;
}

function simply(num,denom) {
    let rep;
    if (denom==1) {rep=`=${num}`;} else {rep='';}
    return rep;
}

let a1 = nbreouoppose(nbrealéa(2,15));
let b1 = nbrealéa(-10,10);
let oppb1 = -b1;
let sb1 = rienplus(b1);
let soppb1 = rienplus(oppb1);
let im1 = nbrealéa(-10,10);
let pim1 = parenthesegd(im1);
let a1im1 = a1*im1;
let solim1 = a1*im1+b1;
let ante1 = nbrealéa(-10,10);
let im2 = nbresdiff(im1);
let pim2 = parenthesegd(im2);
let a1im2 = a1*im2;
let solim2 = a1*im2+b1;
let ante2 = nbresdiff(ante1);
let ante1b1 = ante1-b1;
let ante1frac = simplifierfraction(ante1b1,a1);
let ante1fracsimp = fracsimp(ante1frac[0],ante1frac[1]);
let sante1fracsimp = rienmoins(ante1b1/a1);
let solante1simp = solsimplifiee(ante1frac[0],ante1frac[1]);
let ante2b1 = ante2-b1;
let ante2frac = simplifierfraction(ante2b1,a1);
let ante2fracsimp = fracsimp(ante2frac[0],ante2frac[1]);
let sante2fracsimp = rienmoins(ante2b1/a1);
let solante2simp = solsimplifiee(ante2frac[0],ante2frac[1]);

let a11 = nbreouoppose(nbrealéa(1,15));
let sa11 = rienplus(a11);
let oppa11 = -a11;
let soppa11 = rienplus(oppa11);
let x1 = nbrealéa(-15,15);
let px1 = parenthesegd(x1);
let x1carre = x1**2;
let fx1 = x1carre+a11;
let x11 = nbrealéa(1,15);
let b11 = x11**2+a11;
let x2 = nbrediff(x1);
let px2 = parenthesegd(x2);
let x2carre = x2**2;
let fx2 = x2carre+a11;
let x12 = nbdiff(x11);
let b12 = x12**2+a11;
let b11oppa11 = b11-a11;
let b12oppa11 = b12-a11;

let valint = nbreouoppose(nbrealéa(1,5));
let oppvalint = -valint;
let soppvalint = rienplus(oppvalint);
let af = nbreouoppose(2,10);
let oppaf = -af;
let soppaf = rienplus(oppaf);
let bf = nbrealéa(-10,10);
let sbf = rienplus(bf);
let x1f = diffvi(valint);
let px1f = parenthesegd(x1f);
let x2f = diffvix1f(x1f,valint);
let px2f = parenthesegd(x2f);
let afx1f = af*x1f;
let x1foppvalint = x1f-valint;
let afx1fbf = afx1f+bf;
let x1frac = simplifierfraction(afx1fbf,x1foppvalint);
let x1fracsimp = fracsimp(x1frac[0],x1frac[1]);
let sx1fracsimp = rienmoins(afx1fbf/x1foppvalint);
let simply1 = simply(x1frac[0],x1frac[1]);
let afx2f = af*x2f;
let x2foppvalint = x2f-valint;
let afx2fbf = afx2f+bf;
let x2frac = simplifierfraction(afx2fbf,x2foppvalint);
let x2fracsimp = fracsimp(x2frac[0],x2frac[1]);
let sx2fracsimp = rienmoins(afx2fbf/x2foppvalint);
let simply2 = simply(x2frac[0],x2frac[1]);
let num = nbreouoppose(nbrealéa(1,10));
let denom = denominateur(af,num);
let frac1 = simplifierfraction(num,denom);
let frac1s = fracsimp(frac1[0],frac1[1]);
let frac1s0valint = frac1s[0]*oppvalint;
let sfrac1s0valint = rienplus(frac1s0valint);
let frac1s1af = frac1s[1]*af;
let frac1sbf = frac1s[1]*bf;
let sfrac1sbf = rienplus(frac1sbf);
let oppfrac1s1af = -frac1s1af;
let soppfrac1s1af = rienplus(oppfrac1s1af);
let oppfrac1s0valint = -frac1s0valint;
let soppfrac1s0valint = rienplus(oppfrac1s0valint);
let somx = frac1s[0]+oppfrac1s1af;
let somreeel = frac1sbf+oppfrac1s0valint;
let solfrac1 = simplifierfraction(somreeel,somx);
let solfrac1s = fracsimp(solfrac1[0],solfrac1[1]);
let ssolfrac1s = rienmoins(somreeel/somx);
let simply3 = simply(solfrac1[0],solfrac1[1]);
let num2 = ndiffaf(af);
let num2valint = num2*oppvalint;
let snum2valint = rienplus(num2valint);
let oppnum2valint = -num2valint;
let soppnum2valint = rienplus(oppnum2valint);
let somx2 = num2+oppaf;
let somreeel2 = bf+oppnum2valint;
let solnum2 = simplifierfraction(somreeel2,somx2);
let solnum2s = fracsimp(solnum2[0],solnum2[1]);
let ssolnum2s = rienmoins(somreeel2/somx2);
let simply4 = simply(solnum2[0],solnum2[1]);

let k =nbrealéa(0,2);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solution = document.getElementById('solution');
var solutions = document.getElementById('solutions');

let enonces = [`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=${a1}x ${sb1} ${b1}$.<br>
1) Déterminer l'image de $${im1}$ par $f$.<br>
2) Déterminer l'antécédent de $${ante1}$ par $f$.<br>
3) Déterminer l'image de $${im2}$ par $f$.<br>
4) Déterminer l'image de $${ante2}$ par $f$.<br>`,
`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=x^2 ${sa11} ${a11}.$<br>
1) Déterminer l'image de $${x1}$ par $f$.<br>
2) Déterminer les antécédents de $${b11}$ par $f$.<br>
3) Déterminer l'image de $${x2}$ par $f$.<br>
4) Déterminer les antécédents de $${b12}$ par $f$.<br>`,
`Soit $f$ la fonction définie sur $\\mathbb{R}\\backslash \\left\\{${valint} \\right\\}$ par $f(x)=\\dfrac{${af}x${sbf}${bf}}{x${soppvalint}${oppvalint}}$.<br><br>
1) Déterminer l'image de $${x1f}$ par $f$.<br><br>
2) Déterminer l'antécédent de $\\dfrac{${frac1s[0]}}{${frac1s[1]}}$<br><br>
3) Déterminer l'image de $${x2f}$ par $f$.<br><br>
4) Déterminer l'antécédent de $${num2}$ par $f$.`];

let corrections = [`1) $f(${im1})=${a1}\\times ${pim1[0]} ${im1} ${pim1[1]} ${sb1} ${b1} = ${a1im1} ${sb1} ${b1} = ${solim1}$<br>
L'image de $${im1}$ est $${solim1}$.<br><br>
$\\begin{array}{lrcl} 2) & f(x) & = & ${ante1} \\\\
&${a1}x ${sb1} ${b1} & = & ${ante1} \\\\ 
&${a1}x & = & ${ante1} ${soppb1} ${oppb1} = ${ante1b1} \\\\
&x & = & \\dfrac{${ante1b1}}{${a1}}=${sante1fracsimp} \\dfrac{${ante1fracsimp[0]}}{${ante1fracsimp[1]}}${solante1simp} \\end{array}$<br><br>
L'antécédent de $${ante1}$ est $${sante1fracsimp} \\dfrac{${ante1fracsimp[0]}}{${ante1fracsimp[1]}}${solante1simp}$.<br><br>
3) $f(${im2})=${a1}\\times ${pim2[0]} ${im2} ${pim2[1]} ${sb1} ${b1} = ${a1im2} ${sb1} ${b1} = ${solim2}$<br>
L'image de $${im2}$ est $${solim2}$.<br><br>
$\\begin{array}{lrcl} 4) & f(x) & = & ${ante2} \\\\
&${a1}x ${sb1} ${b1} & = & ${ante2} \\\\ 
&${a1}x & = & ${ante2} ${soppb1} ${oppb1} = ${ante2b1} \\\\
&x & = & \\dfrac{${ante2b1}}{${a1}}=${sante2fracsimp} \\dfrac{${ante2fracsimp[0]}}{${ante2fracsimp[1]}}${solante2simp} \\end{array}$<br><br>
L'antécédent de $${ante2}$ est $${sante2fracsimp} \\dfrac{${ante2fracsimp[0]}}{${ante2fracsimp[1]}}${solante2simp}$.`,
`1) $f(${x1})=${px1[0]} ${x1} ${px1[1]}^2 ${sa11} ${a11} = ${x1carre} ${sa11} ${a11} = ${fx1}$.<br>
L'image de $${x1}$ est $${fx1}$.<br><br>
$\\begin{array}{lrcl} 2) & f(x) & = & ${b11} \\\\
& x^2 ${sa11} ${a11} & = & ${b11} \\\\
& x^2 & = & ${b11} ${soppa11} ${oppa11}\\\\
& x^2 & = & ${b11oppa11} \\\\
& x & = & \\sqrt{${b11oppa11}}=${x11}~\\text{ou}~x=-\\sqrt{${b11oppa11}}=-${x11}
\\end{array}$<br>
Les antécédents de $${b11}$ sont $${x11}$ et $-${x11}$.<br><br>
3) $f(${x2})=${px2[0]} ${x2} ${px2[1]}^2 ${sa11} ${a11} = ${x2carre} ${sa11} ${a11} = ${fx2}$.<br>
L'image de $${x2}$ est $${fx2}$.<br><br>
$\\begin{array}{lrcl} 4) & f(x) & = & ${b12} \\\\
& x^2 ${sa11} ${a11} & = & ${b12} \\\\
& x^2 & = & ${b12} ${soppa11} ${oppa11}\\\\
& x^2 & = & ${b12oppa11} \\\\
& x & = & \\sqrt{${b12oppa11}}=${x12}~\\text{ou}~x=-\\sqrt{${b12oppa11}}=-${x12}
\\end{array}$<br>
Les antécédents de $${b12}$ sont $${x12}$ et $-${x12}$.<br><br>`,
`1) $f(${x1f})=\\dfrac{${af}\\times${px1f[0]}${x1f}${px1f[1]} ${sbf}${bf}}{${x1f}${soppvalint}${oppvalint}}=\\dfrac{${afx1f}${sbf}${bf}}{${x1foppvalint}}=\\dfrac{${afx1fbf}}{${x1foppvalint}}=${sx1fracsimp}\\dfrac{${x1fracsimp[0]}}{${x1fracsimp[1]}}$<br><br>
L'image de $${x1f}$ est $${sx1fracsimp}\\dfrac{${x1fracsimp[0]}}{${x1fracsimp[1]}}${simply1}$.<br><br>
$\\begin{array}{lrcl}2) & f(x) & = & \\dfrac{${frac1s[0]}}{${frac1s[1]}}\\\\
&\\dfrac{${af}x${sbf}${bf}}{x${soppvalint}${oppvalint}} & = & \\dfrac{${frac1s[0]}}{${frac1s[1]}}\\end{array}$<br>
Produit en croix :<br>
$\\begin{array}{rcl}  ${frac1s[0]}\\times \\left(x${soppvalint}${oppvalint} \\right) & = & ${frac1s[1]}\\times \\left(${af}x${sbf}${bf} \\right)\\\\
${frac1s[0]}x ${sfrac1s0valint}${frac1s0valint} & = & ${frac1s1af}x${sfrac1sbf}${frac1sbf}\\\\
${frac1s[0]}x${soppfrac1s1af} ${oppfrac1s1af}x & = & ${frac1sbf} ${soppfrac1s0valint}${oppfrac1s0valint}\\\\
${somx}x & = & ${somreeel}\\\\
x & = & \\dfrac{${somreeel}}{${somx}}=${ssolfrac1s}\\dfrac{${solfrac1s[0]}}{${solfrac1s[1]}}
\\end{array}$<br><br>
L'antécédent de $\\dfrac{${frac1s[0]}}{${frac1s[1]}}$ est $${ssolfrac1s}\\dfrac{${solfrac1s[0]}}{${solfrac1s[1]}}${simply3}$.<br><br>
3) $f(${x2f})=\\dfrac{${af}\\times${px2f[0]}${x2f}${px2f[1]} ${sbf}${bf}}{${x2f}${soppvalint}${oppvalint}}=\\dfrac{${afx2f}${sbf}${bf}}{${x2foppvalint}}=\\dfrac{${afx2fbf}}{${x2foppvalint}}=${sx2fracsimp}\\dfrac{${x2fracsimp[0]}}{${x2fracsimp[1]}}$<br><br>
L'image de $${x2f}$ est $${sx2fracsimp}\\dfrac{${x2fracsimp[0]}}{${x2fracsimp[1]}}${simply2}$<br><br>
$\\begin{array}{lrcl}4) & f(x) & = & ${num2}\\\\
&\\dfrac{${af}x${sbf}${bf}}{x${soppvalint}${oppvalint}} & = & \\dfrac{${num2}}{1}\\end{array}$<br>
Produit en croix :<br>
$\\begin{array}{rcl}  ${num2}\\times \\left(x${soppvalint}${oppvalint} \\right) & = & 1\\times \\left(${af}x${sbf}${bf} \\right)\\\\
${num2}x ${snum2valint}${num2valint} & = & ${af}x${sbf}${bf}\\\\
${num2}x${soppaf} ${oppaf}x & = & ${bf} ${soppnum2valint}${oppnum2valint}\\\\
${somx2}x & = & ${somreeel2}\\\\
x & = & \\dfrac{${somreeel2}}{${somx2}}=${ssolnum2s}\\dfrac{${solnum2s[0]}}{${solnum2s[1]}}
\\end{array}$<br><br>
L'antécédent de $${num2}$ est $${ssolnum2s}\\dfrac{${solnum2s[0]}}{${solnum2s[1]}}${simply4}$.`];

let soluce = [`1) $${solim1}$.<br><br>
2) $${sante1fracsimp} \\dfrac{${ante1fracsimp[0]}}{${ante1fracsimp[1]}}${solante1simp}$.<br><br>
3) $${solim2}$.<br><br>
4) $${sante2fracsimp} \\dfrac{${ante2fracsimp[0]}}{${ante2fracsimp[1]}}${solante2simp}$.`,
`1) $${fx1}$.<br><br>
2) $x=${x11}~\\text{ou}~x=-${x11}$.<br><br>
3) $${fx2}$.<br><br>
4) $x=${x12}~\\text{ou}~x=-${x12}$.`,
`1) $${sx1fracsimp}\\dfrac{${x1fracsimp[0]}}{${x1fracsimp[1]}}${simply1}$<br><br>
2) $${ssolfrac1s}\\dfrac{${solfrac1s[0]}}{${solfrac1s[1]}}${simply3}$<br><br>
3) $${sx2fracsimp}\\dfrac{${x2fracsimp[0]}}{${x2fracsimp[1]}}${simply2}$<br><br>
4) $${ssolnum2s}\\dfrac{${solnum2s[0]}}{${solnum2s[1]}}${simply4}$`];

enonce.innerHTML = enonces[k];
solution.innerHTML = soluce[k];
correctiond.innerHTML = corrections[k];

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
    location.reload();
})

accueil.addEventListener('click', () => {
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSeconde.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSecondeFonctions.html";
})

