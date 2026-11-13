function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }


function test_réponse(e,f) {
    let test;
    if (e==f) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

let mille = nbrealéa(1,10)*1000;
let r = nbrealéa(10,100);
let u1 = mille+r;
let u2 = mille+2*r;
let u1b = mille-r;
let u2b = mille-2*r;
let n1 = nbrealéa(3,12);
let n1u1 = n1-1;
let nseuil = nbrealéa(4,30);
let seuilhausse = mille+nseuil*r-nbrealéa(1,r-1);
let seuilbaisse = mille-nseuil*r+nbrealéa(1,r-1);
let un1 = mille+n1*r;
let un1b = mille-n1*r;
let navseuil = nseuil-1;
let unseuil = mille+nseuil*r;
let unavseuil = mille+navseuil*r;
let n_avseuil = nseuil-1;
let un_seuil = mille-nseuil*r;
let un_avseuil = mille-navseuil*r;
let k = nbrealéa(0,1);
let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');
var Test;


let listeenonces = [`Un cinéma ouvre ses portes.</br>
Le premier mois il acceuille ${u1} spectateurs</br>
Chaque mois, il gagne ${r} spectateurs.</br>
On note $u_n$ le nombre de spectateurs au bout de $n$ mois.</br>
1) Calculer le nombre de specteurs le deuxième mois.</br>
2) Déterminer la nature de la suite $(u_n)$.</br>
3) Exprimer $u_{n+1}$ en fonction de $u_n$.</br>
4) Exprimer $u_n$ en fonction de $n$.</br>
5) Calculer $u_{${n1}}$.</br>
6) Déterminer à partir de combien de mois le nombre de spectateurs devient supérieure à ${seuilhausse}.`,
`Un cinéma ouvre ses portes.</br>
Le premier mois il acceuille ${u1b} spectateurs</br>
Chaque mois, il perd ${r} spectateurs.</br>
On note $u_n$ le nombre de spectateurs au bout de $n$ mois.</br>
1) Calculer le nombre de specteurs le deuxième mois.</br>
2) Déterminer la nature de la suite $(u_n)$.</br>
3) Exprimer $u_{n+1}$ en fonction de $u_n$.</br>
4) Exprimer $u_n$ en fonction de $n$.</br>
5) Calculer $u_{${n1}}$.</br>
6) Déterminer à partir de combien de mois le nombre de spectateurs devient inférieure à ${seuilbaisse}.`];

let listesolutions = [`1) $u_2=${u2}$</br>
2) $(u_n)$ est une suite arithmétique.</br>
3) $u_{n+1}=u_n +${r}$</br>
4) $u_n=${u1}+(n-1)\\times ${r} $</br>
5) $u_{${n1}}=${un1} $</br>
6) À partir de $n=${nseuil}$.`,
`1) $u_2=${u2b}$</br>
2) $(u_n)$ est une suite arithmétique.</br>
3) $u_{n+1}=u_n -${r}$</br>
4) $u_n=${u1b}+(n-1)\\times(-${r})$</br>
5) $u_{${n1}}=${un1b} $</br>
6) À partir de $n=${nseuil}$.`];

let listecorrections =[`1) $u_2=${u1}+${r}=${u2}$</br>
2) $(u_n)$ est une suite arithmétique car, pour passer d'un terme au suivant, on ajoute toujours le même nombre : $r=${r}$ .</br>
3) $u_{n+1}=u_n+r=u_n +${r}$</br>
4) $u_n=u_1+(n-1)\\times r=${u1}+(n-1)\\times ${r} $</br>
5) $u_{${n1}}=u_1+${n1u1}\\times r=${u1}+${n1u1}\\times ${r}=${un1} $</br>
6) À partir de $n=${nseuil}$ car $u_{${nseuil}}=${unseuil}$ et $u_{${navseuil}}=${unavseuil}$`,
`1) $u_2=${u1b}-${r}=${u2b}$</br>
2) $(u_n)$ est une suite arithmétique car, pour passer d'un terme au suivant, on ajoute toujours le même nombre : $r=-${r}$ .</br>
3) $u_{n+1}=u_n+r=u_n -${r}$</br>
4) $u_n=u_1+(n-1)\\times r=${u1b}+(n-1)\\times (-${r})$</br>
5) $u_{${n1}}=u_1+${n1u1}\\times r=${u1b}+${n1u1}\\times (-${r})=${un1b} $</br>
6) À partir de $n=${nseuil}$ car $u_{${nseuil}}=${un_seuil}$ et $u_{${n_avseuil}}=${un_avseuil}$`];

enonce.innerHTML = listeenonces[k];
solution.innerHTML = listesolutions[k];
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

