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

let xK = nbrealéa(-10,10);
let yK = nbrealéa(-10,10);
let a = nbrealéa(1,5);
let b = a+nbrealéa(1,4);
let xA = xK-a;
let yA = yK+a;
let xB = xK+b;
let yB = yK+b;
let xC = xK-b;
let yC = yK-b;
let xBxC = xB+xC;
let yByC = yB+yC;
let xH = (xB+xC)/2;
let yH = (yB+yC)/2;
let pxC = parenthesegd(xC);
let pyC = parenthesegd(yC);
let pxA = parenthesegd(xA);
let pyA = parenthesegd(yA);
let pxB = parenthesegd(xB);
let pyB = parenthesegd(yB);
let xCxA = xC-xA;
let yCyA = yC-yA;
let pxCxA = parenthesegd(xCxA);
let pyCyA = parenthesegd(yCyA);
let xCxAcarre = (xC-xA)**2;
let yCyAcarre = (yC-yA)**2;
let raclongAC = xCxAcarre+yCyAcarre;
let xBxA = xB-xA;
let yByA = yB-yA;
let pxBxA = parenthesegd(xBxA);
let pyByA = parenthesegd(yByA);
let xBxAcarre = (xB-xA)**2;
let yByAcarre = (yB-yA)**2;
let raclongAB = xBxAcarre+yByAcarre;
let xCxB = xB-xC;
let yCyB = yB-yC;
let pxCxB = parenthesegd(xCxB);
let pyCyB = parenthesegd(yCyB);
let xCxBcarre = (xB-xC)**2;
let yCyBcarre = (yB-yC)**2;
let raclongBC = xCxBcarre+yCyBcarre;
let angleACH = avecVirgule(Math.round((Math.acos((Math.sqrt(raclongBC)/2)/Math.sqrt(raclongAC))*180/Math.PI)*10)/10);
let angleHAC = avecVirgule(Math.round((90-Math.acos((Math.sqrt(raclongBC)/2)/Math.sqrt(raclongAC))*180/Math.PI)*10)/10);
let angleBAC = avecVirgule(Math.round((90-Math.acos((Math.sqrt(raclongBC)/2)/Math.sqrt(raclongAC))*180/Math.PI)*10)/10*2);
let xHxA = xH-xA;
let yHyA = yH-yA;
let pxHxA = parenthesegd(xHxA);
let pyHyA = parenthesegd(yHyA);
let xHxAcarre = (xH-xA)**2;
let yHyAcarre = (yH-yA)**2;
let raclongAH = xHxAcarre+yHyAcarre;
let Aire = Math.round(Math.sqrt(raclongBC)*Math.sqrt(raclongAH)/2);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


enonce.innerHTML = `Dans un repère orthonormé $\\left(O;~I,~J\\right)$ on donne les points $A(${xA}~;${yA})$, $B(${xB}~;${yB})$ et $C(${xC}~;${yC})$.<br>
1) Déterminer la nature du triangle $ABC$.<br>
2) On note $(AH)$ la hauteur issue du point $A$.<br>
$\\hspace{5mm}$ Déterminer les coordonnées du point $H$.<br>
3) a) Déterminer une mesure de l'angle $\\widehat{ACH}$ (arrondir à 0,1 degré près).<br>
$\\phantom{\\text{3)}}$ b) Déterminer une mesure de l'angle $\\widehat{BAC}$ (arrondir à 0,1 degré près).<br>
4) Déterminer l'aire du triangle $ABC$.` ;
solution.innerHTML = `1) $ABC$ est isocèle en $A$.<br><br>
2) $H(${xH}~;${yH})$<br><br>
3) a) $\\widehat{ACH}\\approx ${angleACH}°$<br><br>
$\\phantom{\\text{3)}}$b) $\\widehat{BAC}\\approx ${angleBAC}°$<br><br>
4) $\\mathscr{A}_{ABC}=${Aire}$` ;
correctiond.innerHTML = `1) $AB=\\sqrt{\\left(x_B-x_A\\right)^2+\\left(y_B-y_A\\right)^2}=\\sqrt{(${xB}- ${pxA[0]} ${xA} ${pxA[1]} )^2+(${yB}- ${pyA[0]} ${yA} ${pyA[1]} )^2}=\\sqrt{ ${pxBxA[0]} ${xBxA} ${pxBxA[1]} ^2+ ${pyByA[0]} ${yByA} ${pyByA[1]} ^2 }$<br>
$\\phantom{\\text{1)}}AB=\\sqrt{${xBxAcarre}+${yByAcarre}}=\\sqrt{${raclongAB}}$<br>
$\\phantom{\\text{1)}}AC=\\sqrt{\\left(x_C-x_A\\right)^2+\\left(y_C-y_A\\right)^2}=\\sqrt{(${xC}- ${pxA[0]} ${xA} ${pxA[1]} )^2+(${yC}- ${pyA[0]} ${yA} ${pyA[1]} )^2}=\\sqrt{ ${pxCxA[0]} ${xCxA} ${pxCxA[1]} ^2+ ${pyCyA[0]} ${yCyA} ${pyCyA[1]} ^2 }$<br>
$\\phantom{\\text{1)}}AC=\\sqrt{${xCxAcarre}+${yCyAcarre}}=\\sqrt{${raclongAC}}$<br>
$\\phantom{\\text{1)}}BC=\\sqrt{\\left(x_C-x_B\\right)^2+\\left(y_C-y_B\\right)^2}=\\sqrt{(${xC}- ${pxB[0]} ${xB} ${pxB[1]} )^2+(${yC}- ${pyB[0]} ${yB} ${pyB[1]} )^2}=\\sqrt{ ${pxCxB[0]} ${xCxB} ${pxCxB[1]} ^2+ ${pyCyB[0]} ${yCyB} ${pyCyB[1]} ^2 }$<br>
$\\phantom{\\text{1)}}BC=\\sqrt{${xCxBcarre}+${yCyBcarre}}=\\sqrt{${raclongBC}}$<br>
Donc $ABC$ est un triangle isocèle en $A$.<br>
2) Dans le triangle $ABC$ isocèle en $A$, la hauteur $(AH)$ est aussi la médiatrice du segment $[BC]$ donc $H$ est le milieu de $[BC]$ :<br>
$H\\left( \\dfrac{x_B+x_C}{2}~;~\\dfrac{y_B+y_C}{2} \\right)=\\left( \\dfrac{${xB}+ ${pxC[0]} ${xC} ${pxC[1]} }{2}~;~\\dfrac{${yB}+ ${pyC[0]} ${yC} ${pyC[1]} }{2} \\right)=\\left(\\dfrac{${xBxC}}{2}~;~\\dfrac{${yByC}}{2}\\right)$<br>
Donc $H(${xH}~;${yH})$<br>
3) a) Dans le triangle $ACH$ rectangle en $H$ on peut utiliser la trigonométrie :<br>
$\\phantom{\\text{3) a)}}\\cos\\left( \\widehat{ACH} \\right)=\\dfrac{CH}{AC}=\\dfrac{\\frac{BC}{2}}{AC}=\\dfrac{\\frac{\\sqrt{${raclongBC}}}{2}}{\\sqrt{${raclongAC}}}$ donc $\\widehat{ACH}=\\cos^{-1}\\left( \\dfrac{\\frac{\\sqrt{${raclongBC}}}{2}}{\\sqrt{${raclongAC}}} \\right)\\approx ${angleACH}° $<br>
$\\phantom{\\text{3) }}$b) Dans le triangle $ACH$ la somme des angles est égale à 180° donc :<br>
$\\phantom{\\text{3) b)}}\\widehat{HAC}=180°-\\widehat{AHC}-\\widehat{ACH}\\approx180-90-${angleACH}\\approx ${angleHAC}°$<br>
$\\phantom{\\text{3) b)}}$ Mais dans le triangle $ABC$ isocèle en $A$, la hauteur $(AH)$ est aussi la bissectrice de l'angle $\\widehat{BAC}$ donc : <br>
$\\phantom{\\text{3) b)}} \\widehat{BAC}=2\\times\\widehat{HAC}\\approx 2\\times ${angleHAC}\\approx ${angleBAC}°$<br>
4) $\\mathscr{A}_{ABC}=\\dfrac{\\text{Base}\\times \\text{Hauteur}}{2}=\\dfrac{BC\\times AH}{2}$<br><br>
$\\phantom{\\text{4)}} AH=\\sqrt{\\left(x_H-x_A\\right)^2+\\left(y_H-y_A\\right)^2}=\\sqrt{(${xH}- ${pxA[0]} ${xA} ${pxA[1]} )^2+(${yH}- ${pyA[0]} ${yA} ${pyA[1]} )^2}=\\sqrt{ ${pxHxA[0]} ${xHxA} ${pxHxA[1]} ^2+ ${pyHyA[0]} ${yHyA} ${pyHyA[1]} ^2 }$<br>
$\\phantom{\\text{4)}}AH=\\sqrt{${xHxAcarre}+${yHyAcarre}}=\\sqrt{${raclongAH}}$<br>
$\\phantom{\\text{4)}}$ Donc $\\mathscr{A}_{ABC}=\\dfrac{\\sqrt{${raclongBC}}\\times \\sqrt{${raclongAH}}}{2}=${Aire}$.` ;

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
    location.href = "../../../Menus/MenuSecondeMilieuLongueur.html";
})