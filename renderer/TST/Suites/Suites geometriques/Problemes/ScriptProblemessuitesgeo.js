function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }


function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
}

function test_réponse(e,f) {
    let test;
    if (e==f) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

let mille = nbrealéa(1,10)*1000;
let taux = nbrealéa(10,40);
let n1 = nbrealéa(5,20);
let nseuil = nbrealéa(4,30);
let unseuilhausse = Math.round(mille*(1+taux/100)**(nseuil)*100)/100;
let unseuilbaisse = Math.round(mille*(1-taux/100)**(nseuil)*100)/100;
let unseuilhaussev = avecVirgule(unseuilhausse);
let unseuilbaissev = avecVirgule(unseuilbaisse);
let navseuil = nseuil-1;
let unavseuilhausse = avecVirgule(Math.round(mille*(1+taux/100)**(navseuil)*100)/100);
let unavseuilbaisse = Math.round(mille*(1-taux/100)**(navseuil)*100)/100;
let unavseuilbaissev = avecVirgule(Math.round(mille*(1-taux/100)**(navseuil)*100)/100);
let seuilhausse = Math.round(unseuilhausse-nbrealéa(1,10));
let seuilbaisse = avecVirgule(Math.round((unseuilbaisse+unavseuilbaisse)/2*100)/100);
let qhausse = 1+taux/100;
let qhaussev = avecVirgule(Math.round((1+taux/100)*100)/100);
let u1hausse = avecVirgule(Math.round(mille*(1+taux/100)*100)/100);
let qbaisse = 1-taux/100;
let qbaissev = avecVirgule(Math.round((1-taux/100)*100)/100);
let u1baisse = avecVirgule(Math.round(mille*(1-taux/100)*100)/100);
let un1hausse = avecVirgule(Math.round(mille*qhausse**n1*100)/100);
let un1baisse = avecVirgule(Math.round(mille*qbaisse**n1*100)/100);

let k = nbrealéa(0,1);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var Test;
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');

let listeenonces = [`On effectue un placement à haut risque en bourse.</br>
On place la somme de ${mille} €.</br>
Chaque mois, grâce au placement, on gagne ${taux} %.</br>
On note $u_n$ la somme que l'on possède après $n$ mois de placement.</br>
1) Calculer la somme possédée au bout d'un mois.</br>
2) Déterminer la nature de la suite $(u_n)$.</br>
3) Exprimer $u_{n+1}$ en fonction de $u_n$.</br>
4) Exprimer $u_n$ en fonction de $n$.</br>
5) Calculer $u_{${n1}}$.</br>
6) Déterminer à partir de combien de mois la somme possédée devient supérieure à ${seuilhausse} €.`,
`On effectue un placement à haut risque en bourse.</br>
On place la somme de ${mille} €.</br>
Chaque mois, grâce au placement, on perd ${taux} %.</br>
On note $u_n$ la somme que l'on possède après $n$ mois de placement.</br>
1) Calculer la somme possédée au bout d'un mois.</br>
2) Déterminer la nature de la suite $(u_n)$.</br>
3) Exprimer $u_{n+1}$ en fonction de $u_n$.</br>
4) Exprimer $u_n$ en fonction de $n$.</br>
5) Calculer $u_{${n1}}$.</br>
6) Déterminer à partir de combien de mois la somme possédée devient inférieure à ${seuilbaisse} €.`];

let listesolutions = [`1) $u_1=${u1hausse}$</br>
2) $(u_n)$ est une suite géométrique.</br>
3) $u_{n+1}=u_n\\times ${qhaussev} $</br>
4) $u_n=${mille}\\times ${qhaussev}^n $</br>
5) $u_{${n1}}=${un1hausse}$</br>
6) A partir de $n=${nseuil}$.`,
`1) $u_1=${u1baisse}$</br>
2) $(u_n)$ est une suite géométrique.</br>
3) $u_{n+1}=u_n\\times ${qbaissev} $</br>
4) $u_n=${mille}\\times ${qbaissev}^n $</br>
5) $u_{${n1}}=${un1baisse}$</br>
6) A partir de $n=${nseuil}$.`];

let listecorrections = [`1) $u_1=${mille}\\times ${qhaussev}= ${u1hausse}$</br>
2) $(u_n)$ est une suite géométrique car, pour passer d'un terme au suivant, on multiplie toujours par le même nombre : $q=1+\\dfrac{${taux}}{100}=${qhaussev} $.</br>
3) $u_{n+1}=u_n\\times q=u_n\\times ${qhaussev} $</br>
4) $u_n=u_0\\times q^n=${mille}\\times ${qhaussev}^n $</br>
5) $u_{${n1}}=u_0\\times q^{${n1}}=${mille}\\times ${qhaussev}^{${n1}}=${un1hausse}$</br>
6) A partir de $n=${nseuil}$ car $u_{${nseuil}}=${unseuilhaussev}$ et $u_{${navseuil}}=${unavseuilhausse}$`,
`1) $u_1=${mille}\\times ${qbaissev}= ${u1baisse}$</br>
2) $(u_n)$ est une suite géométrique car, pour passer d'un terme au suivant, on multiplie toujours par le même nombre : $q=1-\\dfrac{${taux}}{100}=${qbaissev} $.</br>
3) $u_{n+1}=u_n\\times q=u_n\\times ${qbaissev} $</br>
4) $u_n=u_0\\times q^n=${mille}\\times ${qbaissev}^n $</br>
5) $u_{${n1}}=u_0\\times q^{${n1}}=${mille}\\times ${qbaissev}^{${n1}}=${un1baisse}$</br>
6) A partir de $n=${nseuil}$ car $u_{${nseuil}}=${unseuilbaissev}$ et $u_{${navseuil}}=${unavseuilbaissev}$`];

enonce.innerHTML = listeenonces[k];
solution.innerHTML = listesolutions[k] ;
correctiond.innerHTML = listecorrections[k];

enonce.addEventListener("load", function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

correction.addEventListener('click', () => {
    correctiond.style.display = "block";
    correctiond.innerHTML ;
})

solutions.addEventListener('click', () => {
    solution.style.display = "block";
    solution.innerHTML ;
})

recommencer.addEventListener('click', () => {
    location.reload();
})

accueil.addEventListener('click', () => {
    location.href = "../../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../../Menus/MenuTaleTechno.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../Menus/MenuTSTSuites.html";
})

