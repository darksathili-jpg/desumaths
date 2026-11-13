function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function parenthèsesgauchedroite(a) {
    let rep;
    let pg;
    let pd;
    if (a<0) {pg='(';} else {pg='';}
    if (a<0) {pd=')';} else {pd='';}
    return rep=[pg,pd];
}

function simplificationsignes(a) {
    let rep;
    let gauche;
    if (a<0) {gauche='+';} else {gauche='';}
    return rep;
}

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
}


let xA = nbrealéa(-20,20);
let yA = nbrealéa(-20,20);
let xB = nbrealéa(-20,20);
let yB = nbrealéa(-20,20);
let pgd1 = parenthèsesgauchedroite(xB);
let pgd2 = parenthèsesgauchedroite(yB);
let simp1 = simplificationsignes(xA);
let simp2 = simplificationsignes(xB);
let xK = avecVirgule((xA+xB)/2);
let yK = avecVirgule((yA+yB)/2);
let xKnum = xA+xB;
let yKnum = yA+yB;


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


enonce.innerHTML = `Dans un repère orthonormé $\\left(O;\\overrightarrow{i},\\overrightarrow{j}\\right)$ on donne les points $A(${xA}~;${yA})$ et $B(${xB}~;${yB})$.<br>Déterminer les coordonnées du point $K$ milieu du segment $[AB]$` ;
solution.innerHTML = `Solution : $K(${xK}~;~${yK})$`;
correctiond.innerHTML = `$K\\left( \\dfrac{x_A+x_B}{2}~;~\\dfrac{y_A+y_B}{2} \\right) = \\left( \\dfrac{${xA} + ${pgd1[0]} ${xB} ${pgd1[1]}}{2}~;~\\dfrac{${yA} + ${pgd2[0]} ${yB} ${pgd2[1]}}{2}\\right) = \\left( \\dfrac{${xKnum}}{2}~;~\\dfrac{${yKnum}}{2} \\right) = (${xK}~;~${yK}) $`;

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