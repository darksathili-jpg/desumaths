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
let xA = xK+a;
let yA = yK;
let xB = xK;
let yB = yK-a;
let xC = xK-a;
let yC = yK;
let xD = xK;
let yD = yK+a;
let xAxC = xA+xC;
let yAyC = yA+yC;
let xBxD = xB+xD;
let yByD = yB+yD;
let pxC = parenthesegd(xC);
let pyC = parenthesegd(yC);
let pxD = parenthesegd(xD);
let pyD = parenthesegd(yD);
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
let longAC = Math.sqrt(raclongAC);
let xDxB = xD-xB;
let yDyB = yD-yB;
let pxDxB = parenthesegd(xDxB);
let pyDyB = parenthesegd(yDyB);
let xDxBcarre = (xD-xB)**2;
let yDyBcarre = (yD-yB)**2;
let raclongBD = xDxBcarre+yDyBcarre;
let longBD = Math.sqrt(raclongBD);
let xBxA = xB-xA;
let yByA = yB-yA;
let pxBxA = parenthesegd(xBxA);
let pyByA = parenthesegd(yByA);
let xBxAcarre = (xB-xA)**2;
let yByAcarre = (yB-yA)**2;
let raclongAB = xBxAcarre+yByAcarre;
let xDxA = xD-xA;
let yDyA = yD-yA;
let pxDxA = parenthesegd(xDxA);
let pyDyA = parenthesegd(yDyA);
let xDxAcarre = (xD-xA)**2;
let yDyAcarre = (yD-yA)**2;
let raclongAD = xDxAcarre+yDyAcarre;

let xAr = nbrealéa(-10,10);
let yAr = nbrealéa(-10,10);
let xBr = xAr+a;
let yBr = yAr-a;
let b = a+nbrealéa(1,4);
let xCr = xBr-b;
let yCr = yBr-b;
let xDr = xCr-a;
let yDr = yCr+a;
let xAxCr = xAr+xCr;
let yAyCr = yAr+yCr;
let xBxDr = xBr+xDr;
let yByDr = yB+yDr;
let xKr = avecVirgule((xAr+xCr)/2);
let yKr = avecVirgule((yAr+yCr)/2);
let pxCr = parenthesegd(xCr);
let pyCr = parenthesegd(yCr);
let pxDr = parenthesegd(xDr);
let pyDr = parenthesegd(yDr);
let pxAr = parenthesegd(xAr);
let pyAr = parenthesegd(yAr);
let pxBr = parenthesegd(xBr);
let pyBr = parenthesegd(yBr);
let xCxAr = xCr-xAr;
let yCyAr = yCr-yAr;
let pxCxAr = parenthesegd(xCxAr);
let pyCyAr = parenthesegd(yCyAr);
let xCxAcarrer = (xCr-xAr)**2;
let yCyAcarrer = (yCr-yAr)**2;
let raclongACr = xCxAcarrer+yCyAcarrer;
let xDxBr = xDr-xBr;
let yDyBr = yDr-yBr;
let pxDxBr = parenthesegd(xDxBr);
let pyDyBr = parenthesegd(yDyBr);
let xDxBcarrer = (xDr-xBr)**2;
let yDyBcarrer = (yDr-yBr)**2;
let raclongBDr = xDxBcarrer+yDyBcarrer;
let xBxAr = xBr-xAr;
let yByAr = yBr-yAr;
let pxBxAr = parenthesegd(xBxAr);
let pyByAr = parenthesegd(yByAr);
let xBxAcarrer = (xBr-xAr)**2;
let yByAcarrer = (yBr-yAr)**2;
let raclongABr = xBxAcarrer+yByAcarrer;
let xDxAr = xDr-xAr;
let yDyAr = yDr-yAr;
let pxDxAr = parenthesegd(xDxAr);
let pyDyAr = parenthesegd(yDyAr);
let xDxAcarrer = (xDr-xAr)**2;
let yDyAcarrer = (yDr-yAr)**2;
let raclongADr = xDxAcarrer+yDyAcarrer;

let xAl = xK-a;
let yAl = yK+a;
let xBl = xK+b;
let yBl = yK+b;
let xCl = xK+a;
let yCl = yK-a;
let xDl = xK-b;
let yDl = yK-b;
let xAxCl = xAl+xCl;
let yAyCl = yAl+yCl;
let xBxDl = xBl+xDl;
let yByDl = yBl+yDl;
let xKl = (xAl+xCl)/2;
let yKl = (yAl+yCl)/2;
let pxCl = parenthesegd(xCl);
let pyCl = parenthesegd(yCl);
let pxDl = parenthesegd(xDl);
let pyDl = parenthesegd(yDl);
let pxAl = parenthesegd(xAl);
let pyAl = parenthesegd(yAl);
let pxBl = parenthesegd(xBl);
let pyBl = parenthesegd(yBl);
let xCxAl = xCl-xAl;
let yCyAl = yCl-yAl;
let pxCxAl = parenthesegd(xCxAl);
let pyCyAl = parenthesegd(yCyAl);
let xCxAcarrel = (xCl-xAl)**2;
let yCyAcarrel = (yCl-yAl)**2;
let raclongACl = xCxAcarrel+yCyAcarrel;
let xDxBl = xDl-xBl;
let yDyBl = yDl-yBl;
let pxDxBl = parenthesegd(xDxBl);
let pyDyBl = parenthesegd(yDyBl);
let xDxBcarrel = (xDl-xBl)**2;
let yDyBcarrel = (yDl-yBl)**2;
let raclongBDl = xDxBcarrel+yDyBcarrel;
let xBxAl = xBl-xAl;
let yByAl = yBl-yAl;
let pxBxAl = parenthesegd(xBxAl);
let pyByAl = parenthesegd(yByAl);
let xBxAcarrel = (xBl-xAl)**2;
let yByAcarrel = (yBl-yAl)**2;
let raclongABl = xBxAcarrel+yByAcarrel;
let xDxAl = xDl-xAl;
let yDyAl = yDl-yAl;
let pxDxAl = parenthesegd(xDxAl);
let pyDyAl = parenthesegd(yDyAl);
let xDxAcarrel = (xDl-xAl)**2;
let yDyAcarrel = (yDl-yAl)**2;
let raclongADl = xDxAcarrel+yDyAcarrel;

let k = nbrealéa(0,2);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


let listeenonces = [`Dans un repère orthonormé $\\left(O;~I,~J\\right)$ on donne les points $A(${xA}~;${yA})$, $B(${xB}~;${yB})$, $C(${xC}~;${yC})$ et $D(${xD}~;${yD})$.<br>
1) $ABCD$ est-il un paralléogramme ?<br>
2) $ABCD$ est-il un rectangle ?<br>
3) $ABCD$ est-il un losange ?<br>
4) $ABCD$ est-il un carré ?`,
`Dans un repère orthonormé $\\left(O;~I,~J\\right)$ on donne les points $A(${xAr}~;${yAr})$, $B(${xBr}~;${yBr})$, $C(${xCr}~;${yCr})$ et $D(${xDr}~;${yDr})$.<br>
1) $ABCD$ est-il un paralléogramme ?<br>
2) $ABCD$ est-il un rectangle ?<br>
3) $ABCD$ est-il un losange ?<br>
4) $ABCD$ est-il un carré ?`,
`Dans un repère orthonormé $\\left(O;~I,~J\\right)$ on donne les points $A(${xAl}~;${yAl})$, $B(${xBl}~;${yBl})$, $C(${xCl}~;${yCl})$ et $D(${xDl}~;${yDl})$.<br>
1) $ABCD$ est-il un paralléogramme ?<br>
2) $ABCD$ est-il un rectangle ?<br>
3) $ABCD$ est-il un losange ?<br>
4) $ABCD$ est-il un carré ?`
];

let listesolutions = [`1) oui<br>
2) oui<br>
3) oui<br>
4) oui`,
`1) oui<br>
2) oui<br>
3) non<br>
4) non`,
`1) oui<br>
2) non<br>
3) oui<br>
4) non`];

let listecorrections = [`1) On cherche à savoir si ses diagonales ont le même milieu :<br>
$\\hspace{5mm}$ a) Soit $K_1$ le milieu de $[AC]$ :<br>
$K_1\\left( \\dfrac{x_A+x_C}{2}~;~\\dfrac{y_A+y_C}{2} \\right)=\\left( \\dfrac{${xA}+ ${pxC[0]} ${xC} ${pxC[1]} }{2}~;~\\dfrac{${yA}+ ${pyC[0]} ${yC} ${pyD[1]} }{2} \\right)=\\left(\\dfrac{${xAxC}}{2}~;~\\dfrac{${yAyC}}{2}\\right)$<br>
Donc $K_1(${xK}~;${yK})$<br>
$\\hspace{5mm}$ b) Soit $K_2$ le milieu de $[BD]$ :<br>
$K_2\\left( \\dfrac{x_B+x_D}{2}~;~\\dfrac{y_B+y_D}{2} \\right)=\\left( \\dfrac{${xB}+ ${pxD[0]} ${xD} ${pxD[1]} }{2}~;~\\dfrac{${yB}+ ${pyD[0]} ${yD} ${pyD[1]} }{2} \\right)=\\left(\\dfrac{${xBxD}}{2}~;~\\dfrac{${yByD}}{2}\\right)$<br>
Donc $K_2(${xK}~;${yK})$<br>
$\\hspace{5mm}$ c) Conclusion : $ABCD$ est un parallélogramme car c'est un quadrilatère dont les diagonales ont le même milieu ($K_1=K_2$).<br><br>
2) On cherche à savoir si ses diagonales ont la même longueur :<br>
$\\hspace{5mm}$ a) On calcule la longueur $AC$ :<br>
$AC=\\sqrt{\\left(x_C-x_A\\right)^2+\\left(y_C-y_A\\right)^2}=\\sqrt{(${xC}- ${pxA[0]} ${xA} ${pxA[1]} )^2+(${yC}- ${pyA[0]} ${yA} ${pyA[1]} )^2}=\\sqrt{ ${pxCxA[0]} ${xCxA} ${pxCxA[1]} ^2+ ${pyCyA[0]} ${yCyA} ${pyCyA[1]} ^2 } $<br>
$AC=\\sqrt{${xCxAcarre}+${yCyAcarre}}=\\sqrt{${raclongAC}}=${longAC} $<br>
$\\hspace{5mm}$ b) On calcule la longueur $BD$ :<br>
$BD=\\sqrt{\\left(x_D-x_B\\right)^2+\\left(y_D-y_B\\right)^2}=\\sqrt{(${xD}- ${pxB[0]} ${xB} ${pxB[1]} )^2+(${yD}- ${pyB[0]} ${yB} ${pyB[1]} )^2}=\\sqrt{ ${pxDxB[0]} ${xDxB} ${pxDxB[1]} ^2+ ${pyDyB[0]} ${yDyB} ${pyDyB[1]} ^2 } $<br>
$BD=\\sqrt{${xDxBcarre}+${yDyBcarre}}=\\sqrt{${raclongBD}}=${longBD} $<br>
$\\hspace{5mm}$ c) Conclusion : $ABCD$ est un rectangle car c'est un parallélogramme qui a ses diagonales de même longueur ($AC=BD$).<br><br>
3) On cherche à savoir si le quadrilatère a deux côtés consécutifs de même longueur :<br>
$\\hspace{5mm}$ a) On calcule la longueur $AB$ :<br>
$AB=\\sqrt{\\left(x_B-x_A\\right)^2+\\left(y_B-y_A\\right)^2}=\\sqrt{(${xB}- ${pxA[0]} ${xA} ${pxA[1]} )^2+(${yB}- ${pyA[0]} ${yA} ${pyA[1]} )^2}=\\sqrt{ ${pxBxA[0]} ${xBxA} ${pxBxA[1]} ^2+ ${pyByA[0]} ${yByA} ${pyByA[1]} ^2 } $<br>
$AB=\\sqrt{${xBxAcarre}+${yByAcarre}}=\\sqrt{${raclongAB}} $<br>
$\\hspace{5mm}$ b) On calcule la longueur $AD$ :<br>
$AD=\\sqrt{\\left(x_D-x_A\\right)^2+\\left(y_D-y_A\\right)^2}=\\sqrt{(${xD}- ${pxA[0]} ${xA} ${pxA[1]} )^2+(${yD}- ${pyA[0]} ${yA} ${pyA[1]} )^2}=\\sqrt{ ${pxDxA[0]} ${xDxA} ${pxDxA[1]} ^2+ ${pyDyA[0]} ${yDyA} ${pyDyA[1]} ^2 } $<br>
$AD=\\sqrt{${xDxAcarre}+${yDyAcarre}}=\\sqrt{${raclongAD}} $<br>
$\\hspace{5mm}$ c) Conclusion : $ABCD$ est un losange car c'est un parallélogramme qui a deux côtés consécutifs de même longueur ($AB=AD$).<br><br>
4) $ABCD$ est un carré car c'est à la fois un parallélogramme, un rectangle et un losange.`,

`1) On cherche à savoir si ses diagonales ont le même milieu :<br>
$\\hspace{5mm}$ a) Soit $K_1$ le milieu de $[AC]$ :<br>
$K_1\\left( \\dfrac{x_A+x_C}{2}~;~\\dfrac{y_A+y_C}{2} \\right)=\\left( \\dfrac{${xAr}+ ${pxCr[0]} ${xCr} ${pxCr[1]} }{2}~;~\\dfrac{${yAr}+ ${pyCr[0]} ${yCr} ${pyDr[1]} }{2} \\right)=\\left(\\dfrac{${xAxCr}}{2}~;~\\dfrac{${yAyCr}}{2}\\right)$<br>
Donc $K_1(${xKr}~;${yKr})$<br>
$\\hspace{5mm}$ b) Soit $K_2$ le milieu de $[BD]$ :<br>
$K_2\\left( \\dfrac{x_B+x_D}{2}~;~\\dfrac{y_B+y_D}{2} \\right)=\\left( \\dfrac{${xBr}+ ${pxDr[0]} ${xDr} ${pxDr[1]} }{2}~;~\\dfrac{${yBr}+ ${pyDr[0]} ${yDr} ${pyDr[1]} }{2} \\right)=\\left(\\dfrac{${xBxDr}}{2}~;~\\dfrac{${yByDr}}{2}\\right)$<br>
Donc $K_2(${xKr}~;${yKr})$<br>
$\\hspace{5mm}$ c) Conclusion : $ABCD$ est un parallélogramme car c'est un quadrilatère dont les diagonales ont le même milieu ($K_1=K_2$).<br><br>
2) On cherche à savoir si ses diagonales ont la même longueur :<br>
$\\hspace{5mm}$ a) On calcule la longueur $AC$ :<br>
$AC=\\sqrt{\\left(x_C-x_A\\right)^2+\\left(y_C-y_A\\right)^2}=\\sqrt{(${xCr}- ${pxAr[0]} ${xAr} ${pxAr[1]} )^2+(${yCr}- ${pyAr[0]} ${yAr} ${pyAr[1]} )^2}=\\sqrt{ ${pxCxAr[0]} ${xCxAr} ${pxCxAr[1]} ^2+ ${pyCyAr[0]} ${yCyAr} ${pyCyAr[1]} ^2 } $<br>
$AC=\\sqrt{${xCxAcarrer}+${yCyAcarrer}}=\\sqrt{${raclongACr}} $<br>
$\\hspace{5mm}$ b) On calcule la longueur $BD$ :<br>
$BD=\\sqrt{\\left(x_D-x_B\\right)^2+\\left(y_D-y_B\\right)^2}=\\sqrt{(${xDr}- ${pxBr[0]} ${xBr} ${pxBr[1]} )^2+(${yDr}- ${pyBr[0]} ${yBr} ${pyBr[1]} )^2}=\\sqrt{ ${pxDxBr[0]} ${xDxBr} ${pxDxBr[1]} ^2+ ${pyDyBr[0]} ${yDyBr} ${pyDyBr[1]} ^2 } $<br>
$BD=\\sqrt{${xDxBcarrer}+${yDyBcarrer}}=\\sqrt{${raclongBDr}} $<br>
$\\hspace{5mm}$ c) Conclusion : $ABCD$ est un rectangle car c'est un parallélogramme qui a ses diagonales de même longueur ($AC=BD$).<br><br>
3) On cherche à savoir si le quadrilatère a deux côtés consécutifs de même longueur :<br>
$\\hspace{5mm}$ a) On calcule la longueur $AB$ :<br>
$AB=\\sqrt{\\left(x_B-x_A\\right)^2+\\left(y_B-y_A\\right)^2}=\\sqrt{(${xBr}- ${pxAr[0]} ${xAr} ${pxAr[1]} )^2+(${yBr}- ${pyAr[0]} ${yAr} ${pyAr[1]} )^2}=\\sqrt{ ${pxBxAr[0]} ${xBxAr} ${pxBxAr[1]} ^2+ ${pyByAr[0]} ${yByAr} ${pyByAr[1]} ^2 } $<br>
$AB=\\sqrt{${xBxAcarrer}+${yByAcarrer}}=\\sqrt{${raclongABr}} $<br>
$\\hspace{5mm}$ b) On calcule la longueur $AD$ :<br>
$AD=\\sqrt{\\left(x_D-x_A\\right)^2+\\left(y_D-y_A\\right)^2}=\\sqrt{(${xDr}- ${pxAr[0]} ${xAr} ${pxAr[1]} )^2+(${yDr}- ${pyAr[0]} ${yAr} ${pyAr[1]} )^2}=\\sqrt{ ${pxDxAr[0]} ${xDxAr} ${pxDxAr[1]} ^2+ ${pyDyAr[0]} ${yDyAr} ${pyDyAr[1]} ^2 } $<br>
$AD=\\sqrt{${xDxAcarrer}+${yDyAcarrer}}=\\sqrt{${raclongADr}} $<br>
$\\hspace{5mm}$ c) Conclusion : $ABCD$ n'est pas un losange car c'est un parallélogramme qui n'a pas deux côtés consécutifs de même longueur ($AB\\neq AD$).<br><br>
4) $ABCD$ n'est pas un carré car ce n'est pas un losange.`,

`1) On cherche à savoir si ses diagonales ont le même milieu :<br>
$\\hspace{5mm}$ a) Soit $K_1$ le milieu de $[AC]$ :<br>
$K_1\\left( \\dfrac{x_A+x_C}{2}~;~\\dfrac{y_A+y_C}{2} \\right)=\\left( \\dfrac{${xAl}+ ${pxCl[0]} ${xCl} ${pxCl[1]} }{2}~;~\\dfrac{${yAl}+ ${pyCl[0]} ${yCl} ${pyDl[1]} }{2} \\right)=\\left(\\dfrac{${xAxCl}}{2}~;~\\dfrac{${yAyCl}}{2}\\right)$<br>
Donc $K_1(${xKl}~;${yKl})$<br>
$\\hspace{5mm}$ b) Soit $K_2$ le milieu de $[BD]$ :<br>
$K_2\\left( \\dfrac{x_B+x_D}{2}~;~\\dfrac{y_B+y_D}{2} \\right)=\\left( \\dfrac{${xBl}+ ${pxDl[0]} ${xDl} ${pxDl[1]} }{2}~;~\\dfrac{${yBl}+ ${pyDl[0]} ${yDl} ${pyDl[1]} }{2} \\right)=\\left(\\dfrac{${xBxDl}}{2}~;~\\dfrac{${yByDl}}{2}\\right)$<br>
Donc $K_2(${xKl}~;${yKl})$<br>
$\\hspace{5mm}$ c) Conclusion : $ABCD$ est un parallélogramme car c'est un quadrilatère dont les diagonales ont le même milieu ($K_1=K_2$).<br><br>
2) On cherche à savoir si ses diagonales ont la même longueur :<br>
$\\hspace{5mm}$ a) On calcule la longueur $AC$ :<br>
$AC=\\sqrt{\\left(x_C-x_A\\right)^2+\\left(y_C-y_A\\right)^2}=\\sqrt{(${xCl}- ${pxAl[0]} ${xAl} ${pxAl[1]} )^2+(${yCl}- ${pyAl[0]} ${yAl} ${pyAl[1]} )^2}=\\sqrt{ ${pxCxAl[0]} ${xCxAl} ${pxCxAl[1]} ^2+ ${pyCyAl[0]} ${yCyAl} ${pyCyAl[1]} ^2 } $<br>
$AC=\\sqrt{${xCxAcarrel}+${yCyAcarrel}}=\\sqrt{${raclongACl}} $<br>
$\\hspace{5mm}$ b) On calcule la longueur $BD$ :<br>
$BD=\\sqrt{\\left(x_D-x_B\\right)^2+\\left(y_D-y_B\\right)^2}=\\sqrt{(${xDl}- ${pxBl[0]} ${xBl} ${pxBl[1]} )^2+(${yDl}- ${pyBl[0]} ${yBl} ${pyBl[1]} )^2}=\\sqrt{ ${pxDxBl[0]} ${xDxBl} ${pxDxBl[1]} ^2+ ${pyDyBl[0]} ${yDyBl} ${pyDyBl[1]} ^2 } $<br>
$BD=\\sqrt{${xDxBcarrel}+${yDyBcarrel}}=\\sqrt{${raclongBDl}} $<br>
$\\hspace{5mm}$ c) Conclusion : $ABCD$ n'est pas un rectangle car c'est un parallélogramme qui n'a pas ses diagonales de même longueur ($AC\\neq BD$).<br><br>
3) On cherche à savoir si le quadrilatère a deux côtés consécutifs de même longueur :<br>
$\\hspace{5mm}$ a) On calcule la longueur $AB$ :<br>
$AB=\\sqrt{\\left(x_B-x_A\\right)^2+\\left(y_B-y_A\\right)^2}=\\sqrt{(${xBl}- ${pxAl[0]} ${xAl} ${pxAl[1]} )^2+(${yBl}- ${pyAl[0]} ${yAl} ${pyAl[1]} )^2}=\\sqrt{ ${pxBxAl[0]} ${xBxAl} ${pxBxAl[1]} ^2+ ${pyByAl[0]} ${yByAl} ${pyByAl[1]} ^2 } $<br>
$AB=\\sqrt{${xBxAcarrel}+${yByAcarrel}}=\\sqrt{${raclongABl}} $<br>
$\\hspace{5mm}$ b) On calcule la longueur $AD$ :<br>
$AD=\\sqrt{\\left(x_D-x_A\\right)^2+\\left(y_D-y_A\\right)^2}=\\sqrt{(${xDl}- ${pxAl[0]} ${xAl} ${pxAl[1]} )^2+(${yDl}- ${pyAl[0]} ${yAl} ${pyAl[1]} )^2}=\\sqrt{ ${pxDxAl[0]} ${xDxAl} ${pxDxAl[1]} ^2+ ${pyDyAl[0]} ${yDyAl} ${pyDyAl[1]} ^2 } $<br>
$AD=\\sqrt{${xDxAcarrel}+${yDyAcarrel}}=\\sqrt{${raclongADl}} $<br>
$\\hspace{5mm}$ c) Conclusion : $ABCD$ est un losange car c'est un parallélogramme qui a deux côtés consécutifs de même longueur ($AB=AD$).<br><br>
4) $ABCD$ n'est pas un carré car ce n'est pas un rectangle.`];

enonce.innerHTML = listeenonces[k] ;
solution.innerHTML = listesolutions[k] ;
correctiond.innerHTML = listecorrections[k] ;

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