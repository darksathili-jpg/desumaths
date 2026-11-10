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

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
}


let xA = nbrealéa(-20,20);
let yA = nbrealéa(-20,20);
let xB = nbrealéa(-20,20);
let yB = nbrealéa(-20,20);
let xB2 = 2*xB;
let yB2 = 2*yB;
let pgd1 = parenthèsesgauchedroite(xA);
let pgd2 = parenthèsesgauchedroite(yA);
let xC = 2*xB-xA;
let yC = 2*yB-yA;


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


enonce.innerHTML = `Dans un repère orthonormé $\\left(O;\\overrightarrow{i},\\overrightarrow{j}\\right)$ on donne les points $A(${xA}~;${yA})$ et $B(${xB}~;${yB})$.<br>Déterminer les coordonnées du point $C$ symétrique du point $A$ par rapport au point $B$.` ;
solution.innerHTML = `Solution : $C(${xC}~;~${yC})$`;
correctiond.innerHTML = `$B$ doit être le milieu de $[AC]$ donc on doit avoir : $B\\left(\\dfrac{x_A+x_C}{2}~;~\\dfrac{y_A+y_C}{2}\\right)$ et donc :<br>
$\\dfrac{x_A+x_C}{2}=x_B$ et $\\dfrac{y_A+y_C}{2}=y_B$ ce qui donne :<br><br>
$\\dfrac{${xA}+x_C}{2}=\\dfrac{${xB}}{1}$ et $\\dfrac{${yA}+y_C}{2}=\\dfrac{${yB}}{1}$ et donc, par produits en croix, on obtient :<br><br>
$${xA}+x_C=${xB}\\times 2=${xB2}$ et $${yA}+y_C=${yB}\\times 2=${yB2}$ et donc :<br>
$x_C=${xB2} - ${pgd1[0]} ${xA} ${pgd1[1]} = \\boxed{${xC}=x_C} $ et $y_C=${yB2} - ${pgd2[0]} ${yA} ${pgd2[1]}= \\boxed{${yC}=y_C} $ `;

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