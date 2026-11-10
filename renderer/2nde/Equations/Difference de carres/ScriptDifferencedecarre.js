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


function solsimp(num,denom) {
    let rep;
    let frac1 = simplifierfraction(num,denom);
    let frac2 = simpfracmax(num,denom);
    let ssol = rienmoins(num/denom);
    if (denom==frac1[1]) {rep=``;} else { if(denom==1) {rep=`=${ssol}${num}`} else {rep=`=${ssol} ${frac2}`}}
    return rep;
}

let a = nbreouoppose(nbrealéa(1,10));
let a1 = unoupasun(a);
let b = nbreouoppose(nbrealéa(1,10));
let sb = rienplus(b);
let c = a+nbreouoppose(nbrealéa(1,10));
let sc = rienplus(c);
let c1 = unoupasun(c);
let opc = -c;
let opc1 = unoupasun(opc);
let sopc = rienplus(opc);
let d = nbreouoppose(nbrealéa(1,10));
let sd = rienplus(d);
let opd = -d;
let sopd = rienplus(opd);
let aPlusc = a+c;
let aPlusc1 = unoupasun(aPlusc);
let bPlusd = b+d;
let sbPlusd = rienplus(bPlusd);
let aMoinsc = a-c;
let aMoinsc1 = unoupasun(aMoinsc);
let bMoinsd = b-d;
let sbMoinsd = rienplus(bMoinsd);
let opbPlusd = -bPlusd;
let opbMoinsd = -bMoinsd;
let sol1 = solsimp(opbPlusd,aPlusc);
let sol2 = solsimp(opbMoinsd,aMoinsc);
let sfin1 = simpfracmax(opbPlusd,aPlusc);
let ssfin1 = rienmoins(opbPlusd/aPlusc);
let sfin2 = simpfracmax(opbMoinsd,aMoinsc);
let ssfin2 = rienmoins(opbMoinsd/aMoinsc);


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');



enonce.innerHTML = `Factoriser l'expression : $(${a1} x ${sb} ${b})^2 - (${c1} x ${sd} ${d})^2 $`;
solution.innerHTML = `Solution : $S=\\left\\{${ssfin1}${sfin1}~;~${ssfin2}${sfin2} \\right\\}$`;
correctiond.innerHTML = `$\\begin{array}{rcl}
\\underbrace{(${a1} x ${sb} ${b})^2}_{a^2} - \\underbrace{(${c1} x ${sd} ${d})^2}_{b^2} & = & [\\underbrace{(${a1} x ${sb} ${b})}_a + \\underbrace{(${c1} x ${sd} ${d})}_b] \\times [\\underbrace{(${a1} x ${sb} ${b})}_a - \\underbrace{(${c1} x ${sd} ${d})}_b] \\\\
& = & (${a1} x ${sb} ${b} ${sc} ${c1} x ${sd} ${d}) \\times (${a1} x ${sb} ${b} ${sopc} ${opc1} x ${sopd} ${opd}) \\\\
& = & (${aPlusc1} x ${sbPlusd} ${bPlusd})\\times (${aMoinsc1} x ${sbMoinsd} ${bMoinsd})
\\end{array}$<br>
Produit de facteurs nul : <br>
$\\begin{array}{rclcrcl} 
${aPlusc1} x ${sbPlusd} ${bPlusd} & = & 0 & \\text{ou} & ${aMoinsc1} x ${sbMoinsd} ${bMoinsd} & = & 0 \\\\
${aPlusc1}x & = & ${opbPlusd} & \\text{ou} & ${aMoinsc1}x & = & ${opbMoinsd} \\\\
x & = & \\dfrac{${opbPlusd}}{${aPlusc}} ${sol1} & \\text{ou} & x & = & \\dfrac{${opbMoinsd}}{${aMoinsc}} ${sol2}
\\end{array}$ <br><br>
$S=\\left\\{${ssfin1}${sfin1}~;~${ssfin2}${sfin2} \\right\\}$`;

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