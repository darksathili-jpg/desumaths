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
  
  function parenthesesgd(a) {
    let rep;
    let pg;
    let pd;
    if (a<0) {pg='(';} else {pg='';}
    if (a<0) {pd=')';} else {pd='';}
    return rep = [pg,pd];
  }
  
  function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
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

let inf = nbrealéa(-10,10);
let sup = inf+nbrealéa(1,10);
let a = nbreouoppose(nbrealéa(1,10));
let a1 = unoupasun(a);
let b = nbreouoppose(nbrealéa(1,10));
let b1 = unoupasun(b);
let c = nbreouoppose(nbrealéa(1,10));
let signea = rienmoins(a);
let signeb = rienplus(b);
let sb = plusmoins(b);
let signec = rienplus(c);
let fracx3 = simpfracmax(a,3);
let fracx2 = simpfracmax(b,2);
let pgdinf = parenthesesgd(inf);
let pgdsup = parenthesesgd(sup);
let I = simpfracmax(2*a*sup**3+3*b*sup**2+6*c*sup-2*a*inf**3-3*b*inf**2-6*c*inf,6);
let sI = rienmoins(a*sup**3/3+b*sup**2/2+c*sup-a*inf**3/3-b*inf**2/2-c*inf);

let a2 = nbreouoppose(nbrealéa(1,10));
let a21 = unoupasun(a2);
let b2 = nbreouoppose(nbrealéa(1,10));
let b21 = unoupasun(b2);
let pgdb2 = parenthesesgd(b2);
let a2Surb2 = simpfracmax(a2,b2);
let sa2Surb2 = rienmoins(a2/b2);
let b2inf = b2*inf;
let b2sup = b2*sup;
let sopa2Surb2 = plusmoins(-a2/b2);
let envI2 = avecVirgule(Math.round((a2/b2)*(Math.exp(b2sup)-Math.exp(b2inf))*1000)/1000);

let inf3 = nbrealéa(1,10);
let sup3 = inf3+nbrealéa(1,5);
let c3 = nbrealéa(1,10);
let c31 = unoupasun(c3);
let d3 = nbrealéa(1,10);
let d31 = unoupasun(d3);
let e3 = nbrealéa(1,10);
let k = nbrealéa(2,9);
let a3 = 2*c3*k;
let a3bis = 2*c3;
let b3 = d3*k;
let b3bis = d3;
let grandln = c3*sup3**2+d3*sup3+e3;
let petitln = c3*inf3**2+d3*inf3+e3;
let envI3 = avecVirgule(Math.round((k*Math.log(grandln/petitln))*1000)/1000);

let cas = nbrealéa(0,2);

let enonce = document.getElementById('enonce');
let solution = document.getElementById('solution');
let correctiond = document.getElementById('correctiond');
var solutions = document.getElementById('solutions');
var correction = document.getElementById('correction');
var recommencer = document.getElementById('recommencer');
var accueil = document.getElementById('accueil');

let listeenonces = [`Calculer $I=\\displaystyle\\int_{${inf}}^{${sup}} \\left(${a1}x^2${signeb}${b1}x${signec}${c}\\right) {\\rm d}x$`,
`Calculer $I=\\displaystyle\\int_{${inf}}^{${sup}} \\left(${a21}\\text{e}^{${b21}x}\\right) {\\rm d}x$`,
`Calculer $I=\\displaystyle\\int_{${inf3}}^{${sup3}} \\left( \\dfrac{${a3}x+${b3}}{${c31}x^2+${d31}x+${e3}}\\right) {\\rm d}x$`];

let listesolutions = [`Solution : $I=${sI}${I} $`,
`$I=${sa2Surb2}${a2Surb2}\\left(\\text{e}^{${b2sup}}-\\text{e}^{${b2inf}} \\right)\\approx ${envI2} $`,
`$I=${k}\\ln\\left(\\dfrac{${grandln}}{${petitln}}\\right)\\approx ${envI3} $`];

let listecorrections = [`$I=\\left[ ${a}\\times\\dfrac{1}{3}x^3${signeb}${b}\\times\\dfrac{1}{2}x^2${signec}${c}x \\right]_{${inf}}^{${sup}}=\\left[${signea}${fracx3}x^3${sb}${fracx2}x^2${signec}${c}x\\right]_{${inf}}^{${sup}}$<br><br>
$\\phantom{I}=\\left(${signea} ${fracx3}\\times ${pgdsup[0]} ${sup} ${pgdsup[1]}^3 ${sb}${fracx2}\\times ${pgdsup[0]} ${sup} ${pgdsup[1]}^2${signec}${c}\\times ${pgdsup[0]} ${sup} ${pgdsup[1]} \\right) - \\left(${signea} ${fracx3}\\times ${pgdinf[0]} ${inf} ${pgdinf[1]}^3 ${sb}${fracx2}\\times ${pgdinf[0]} ${inf} ${pgdinf[1]}^2${signec}${c}\\times ${pgdinf[0]} ${inf} ${pgdinf[1]} \\right)$ <br><br>
$\\phantom{I}=${sI}${I} $`,
`$I=\\displaystyle\\int_{${inf}}^{${sup}} \\left(${a21}\\text{e}^{${b21}x}\\right) {\\rm d}x=\\displaystyle\\int_{${inf}}^{${sup}} \\left(\\dfrac{${a2}}{${b2}}\\times ${pgdb2[0]} ${b2} ${pgdb2[1]} \\text{e}^{${b21}x}\\right) {\\rm d}x=\\displaystyle\\int_{${inf}}^{${sup}} \\left(${sa2Surb2}${a2Surb2} \\times \\color{blue}{\\underbrace{\\color{black}{${pgdb2[0]} ${b2} ${pgdb2[1]}}}_{u'}}~\\color{blue}{\\underbrace{\\color{black}{\\text{e}^{${b21}x}}}_{\\text{e}^{u}}}\\right) {\\rm d}x$ <br>
$\\phantom{I}=\\left[${sa2Surb2}${a2Surb2}\\text{e}^{${b21}x} \\right]_{${inf}}^{${sup}}=\\left(${sa2Surb2}${a2Surb2}\\text{e}^{${b2}\\times ${pgdsup[0]}${sup}${pgdsup[1]}} \\right)-\\left(${sa2Surb2}${a2Surb2}\\text{e}^{${b2}\\times ${pgdinf[0]}${inf}${pgdinf[1]}} \\right)=${sa2Surb2}${a2Surb2}\\text{e}^{${b2sup}}${sopa2Surb2}${a2Surb2}\\text{e}^{${b2inf}}=${sa2Surb2}${a2Surb2}\\left(\\text{e}^{${b2sup}}-\\text{e}^{${b2inf}} \\right)$ <br>
$\\phantom{I}\\approx ${envI2}$`,
`$I=\\displaystyle\\int_{${inf3}}^{${sup3}} \\left( \\dfrac{${a3}x+${b3}}{${c31}x^2+${d31}x+${e3}}\\right) {\\rm d}x=\\displaystyle\\int_{${inf3}}^{${sup3}} \\left( \\dfrac{${k}\\times\\left(${a3bis}x+${b3bis}\\right)}{${c31}x^2+${d31}x+${e3}}\\right) {\\rm d}x=\\displaystyle\\int_{${inf3}}^{${sup3}} \\left(${k}\\times \\dfrac{\\color{blue}{\\overbrace{\\color{black}{${a3bis}x+${b3bis}}}^{u'}}}{\\color{blue}{\\underbrace{\\color{black}{${c31}x^2+${d31}x+${e3}}}_{u}}}\\right) {\\rm d}x$ <br>
$\\phantom{I}=\\left[${k}\\ln\\left(${c31}x^2+${d31}x+${e3} \\right) \\right]_{${inf3}}^{${sup3}}=${k}\\ln(${grandln})-${k}\\ln(${petitln})=${k}\\left(\\ln(${grandln})-\\ln(${petitln})\\right)$ <br><br>
$\\phantom{I}=${k}\\ln\\left(\\dfrac{${grandln}}{${petitln}}\\right)\\approx ${envI3} $`];

enonce.innerHTML = listeenonces[cas];
solution.innerHTML = listesolutions[cas];
correctiond.innerHTML = listecorrections[cas];



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
    location.href = "../../../Menus/MenuTaleSpe.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTaleIntegration.html";
})
