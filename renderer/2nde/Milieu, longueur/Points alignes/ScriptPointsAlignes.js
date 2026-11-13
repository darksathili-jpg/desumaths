function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function facteurs(a) {
    let rep=[1];
    let rep1;
    let facts=[];
    let facts1;
    let listeCarrés = [4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400,441,484,529,576,625,676,729,784,841,900,961,1024,1089,1156,1225,1296,1369,1444,1521,1600,1681,1764,1849,1936,2025,2116,2209,2304,2401,2500];
    for (let i=2; i<a+1;i++) {
        if (a/i-Math.floor(a/i)==0) {rep1=rep.push(i);}
    }
    for (let j=0;j<rep.length;j++) {
        for (let k=0;k<listeCarrés.length;k++) {
            if (rep[j]==listeCarrés[k]) {facts1=facts.push(rep[j]);}
        }
    }
    return facts;
}

function simpsousracine(facteur,a) {
    let rep;
    let b;
    if (facteur.length!=0) {b=facteur[facteur.length-1];} else {b=1;}
    rep=a/b;
    return rep;
}

function simplification(simpssrac,a) {
    let rep;
    if (simpssrac!=1) {rep='';} else {rep='='+Math.sqrt(a);}
    return rep;
}
 
function parenthèsesgauchedroite(a) {
    let rep;
    let pg;
    let pd;
    if (a<0) {pg='(';} else {pg='';}
    if (a<0) {pd=')';} else {pd='';}
    return rep=[pg,pd];
}

let a = nbrealéa(1,10);
let b = nbrealéa(-10,10);
let c = nbrealéa(1,6);
let d = nbrealéa(1,6);
let xA = nbrealéa(-10,10);
let yA = a*xA+b;
let xB = xA+c;
let yB = a*xB+b;
let xC = xA-d;
let yC=a*xC+b;
let pgd1 = parenthèsesgauchedroite(xA);
let pgd2 = parenthèsesgauchedroite(yA);
let pgd3 = parenthèsesgauchedroite(xB);
let pgd4 = parenthèsesgauchedroite(yB);
let xB_xA = xB-xA;
let yB_yA = yB-yA;
let xB_xAcarre = (xB-xA)**2;
let yB_yAcarre = (yB-yA)**2;
let racineAB = xB_xAcarre+yB_yAcarre;
let xC_xA = xC-xA;
let yC_yA = yC-yA;
let xC_xAcarre = (xC-xA)**2;
let yC_yAcarre = (yC-yA)**2;
let racineAC = xC_xAcarre+yC_yAcarre;
let xC_xB = xC-xB;
let yC_yB = yC-yB;
let xC_xBcarre = (xC-xB)**2;
let yC_yBcarre = (yC-yB)**2;
let racineBC = xC_xBcarre+yC_yBcarre;
let facteurAB = facteurs(racineAB);
let simpssracAB = simpsousracine(facteurAB,racineAB);
let devantracineAB = Math.sqrt(racineAB/simpssracAB);
let repsimpAB = simplification(simpssracAB,racineAB);
let facteurcarreAB = devantracineAB**2;
let facteurAC = facteurs(racineAC);
let simpssracAC = simpsousracine(facteurAC,racineAC);
let devantracineAC = Math.sqrt(racineAC/simpssracAC);
let repsimpAC = simplification(simpssracAC,racineAC);
let facteurcarreAC = devantracineAC**2;
let facteurBC = facteurs(racineBC);
let simpssracBC = simpsousracine(facteurBC,racineBC);
let devantracineBC = Math.sqrt(racineBC/simpssracBC);
let repsimpBC = simplification(simpssracBC,racineBC);
let facteurcarreBC = devantracineBC**2;


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


enonce.innerHTML = `Dans un repère orthonormé $\\left(O~;~\\overrightarrow{i}~,~\\overrightarrow{j}\\right)$ on donne les points $A(${xA}~;~${yA})$, $B(${xB}~;~${yB})$ et $C(${xC}~;~${yC})$.<br>
Montrer que les points $A$, $B$ et $C$ sont alignés.`;
solution.innerHTML = `$AB+AC=BC$ donc les points $A$, $B$ et $C$ sont alignés (cas particulier de l'inégalité triangulaire)`;
correctiond.innerHTML = `$\\begin{array}{rcl}AB & = & \\sqrt{\\left(x_B-x_A\\right)^2+\\left(y_B-y_A\\right)^2} \\\\
& = & \\sqrt{\\left(${xB} - ${pgd1[0]} ${xA} ${pgd1[1]} \\right)^2 + \\left( ${yB} - ${pgd2[0]} ${yA} ${pgd2[1]} \\right)^2 } \\\\
& = & \\sqrt{(${xB_xA})^2+(${yB_yA})^2} \\\\
& = & \\sqrt{${xB_xAcarre}+${yB_yAcarre}} \\\\
& = & \\sqrt{${racineAB}} \\\\
& = & \\sqrt{${facteurcarreAB}\\times${simpssracAB}} \\\\
& = & \\sqrt{${facteurcarreAB}}\\times\\sqrt{${simpssracAB}} \\\\
& = & ${devantracineAB}\\sqrt{${simpssracAB}} ${repsimpAB}\\end{array}$<br><br>
$\\begin{array}{rcl} AC & = & \\sqrt{\\left(x_C-x_A\\right)^2+\\left(y_C-y_A\\right)^2} \\\\
& = & \\sqrt{\\left(${xC} - ${pgd1[0]} ${xA} ${pgd1[1]} \\right)^2 + \\left( ${yC} - ${pgd2[0]} ${yA} ${pgd2[1]} \\right)^2 } \\\\
& = & \\sqrt{(${xC_xA})^2+(${yC_yA})^2} \\\\
& = & \\sqrt{${xC_xAcarre}+${yC_yAcarre}} \\\\
& = & \\sqrt{${racineAC}} \\\\
& = & \\sqrt{${facteurcarreAC}\\times${simpssracAC}} \\\\
& = & \\sqrt{${facteurcarreAC}}\\times\\sqrt{${simpssracAC}} \\\\
& = & ${devantracineAC}\\sqrt{${simpssracAC}} ${repsimpAC} \\end{array}$<br><br>
$\\begin{array}{rcl} BC & = & \\sqrt{\\left(x_C-x_B\\right)^2+\\left(y_C-y_B\\right)^2} \\\\
& = & \\sqrt{\\left(${xC} - ${pgd3[0]} ${xB} ${pgd3[1]} \\right)^2 + \\left( ${yC} - ${pgd4[0]} ${yB} ${pgd4[1]} \\right)^2 } \\\\
& = & \\sqrt{(${xC_xB})^2+(${yC_yB})^2} \\\\
& = & \\sqrt{${xC_xBcarre}+${yC_yBcarre}} \\\\
& = & \\sqrt{${racineBC}} \\\\
& = & \\sqrt{${facteurcarreBC}\\times${simpssracBC}} \\\\
& = & \\sqrt{${facteurcarreBC}}\\times\\sqrt{${simpssracBC}} \\\\
& = & ${devantracineBC}\\sqrt{${simpssracBC}} ${repsimpBC} \\end{array}$<br><br>
Donc $AB+AC=${devantracineAB}\\sqrt{${simpssracAB}} ${repsimpAB}+${devantracineAC}\\sqrt{${simpssracAC}} ${repsimpAC}=\\underbrace{${devantracineBC}\\sqrt{${simpssracBC}} ${repsimpBC}}_{BC}$ et donc les points $A$, $B$ et $C$ sont alignés (cas particulier de l'inégalité triangulaire)`;

enonce.addEventListener("load", function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

correction.addEventListener('click', () => {
    correctiond.style.display = "block";
})

recommencer.addEventListener('click', () => {
    location.reload(true);
})

solutions.addEventListener('click', () => {
    solution.style.display = "block";
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