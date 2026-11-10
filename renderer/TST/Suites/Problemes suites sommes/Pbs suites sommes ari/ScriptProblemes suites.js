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

function Reponseq5(u1,r,seuil){
    let somme = u1;
    let n=1;
    while(somme<seuil*1000) {u1=u1+r;somme=somme+u1;n=n+1;}
    return n;
}

function Reponseq6(u1,r,seuil){
    let terme = u1;
    let n=1;
    while(terme<seuil) {terme=terme+r;n=n+1;}
    return n;
}

let choixMois1 = [100,200,300,400,500,600,700,800,900,1000];
let mois1 = choixMois1[nbrealéa(0,9)];
let choixr = [10,20,30,40,50,60,70,80,90];
let r = choixr[nbrealéa(0,8)];
let choixMoisq3 = [5,6,7,8,9,10,11,12,13,14,15];
let Moisq3 = choixMoisq3[nbrealéa(0,10)];
let choixSeuil = [10,20,30,40,50,60,70,80,90,100];
let Seuil = choixSeuil[nbrealéa(0,9)];
let choixSeuilu = [1505,1535,1565,1595,1605];
let Seuilu = choixSeuilu[nbrealéa(0,4)];
let indiceq3 = Moisq3-1;
let repq3 = mois1+indiceq3*r;
let repq4 = Moisq3*(mois1+repq3)/2;
let nq5 = Reponseq5(mois1,r,Seuil);
let nq5M1 = nq5-1;
let Sq5 = nq5*(mois1+mois1+(nq5-1)*r)/2;
let Sq5M1 = nq5M1*(mois1+mois1+(nq5M1-1)*r)/2;
let nq6 = Reponseq6(mois1,r,Seuilu);
let nq6M1 = nq6-1;
let unq6 = mois1+(nq6-1)*r;
let unq6M1 = mois1+(nq6-2)*r;

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');
var Test;

let listeenonces = [`Une personne doit effectuer le remboursement d'un prêt.</br>
Le premier mois elle rembourse ${mois1} €.</br>
Ensuite, chaque mois, elle rembourse ${r} € de plus que le mois précédent. </br>
on note $(u_n)$ la somme que la personne doit rembourser le n-ième mois.</br>
1) Déterminer la nature de la suite $(u_n)$ ainsi que son premier terme et sa raison.</br>
2) Exprimer $u_{n+1}$ en fonctionde $u_n$.</br>
3) Exprimer $u_n$ en fonction de $n$.</br>
4) Déterminer la somme que la personne doit rembourser le ${Moisq3}$^{\\text{ème}}$ mois.</br>
5) Déterminer la somme totale que la personne aura remboursé au bout du ${Moisq3}$^{\\text{ème}}$ mois.</br>
6) Déterminer, à l'aide de la calculatrice, à partir de quel mois la mensualité remboursée dépassera ${Seuilu} €.</br>
7) Déterminer, à l'aide de la calculatrice, au bout de combien de mois la somme totale remboursée aura dépassé ${Seuil} 000 €.
`];

let listesolutions = [`1) Arithmétique. $u_1=${mois1}$ et $r=${r}$</br>
    2) $u_{n+1}=u_n+${r}$</br>
    3) $u_n=${mois1}+(n-1)\\times ${r}$</br>
    4) La personne remboursera ${repq3} € le ${Moisq3}$^{\\text{ème}}$ mois.</br>
    5) La personne aura remboursé ${repq4} € au bout de ${Moisq3} mois.</br> 
    6) à partir de $n=${nq6}$</br>
    7) C'est au bout de ${nq5} mois que la personne aura remboursé plus de ${Seuil} 000 € au total.`];

let listecorrections =[`1) $(u_n)$ est une suite arithmétique car pour passer d'un terme au suivant on ajoute toujours le même nombre : $r=${r}$.</br>
    Le premier terme est donc $u_1=${mois1}$ et la raison est $r=${r}$</br>
    2) $u_{n+1}=u_n+r=u_n+${r}$</br>
    3) $u_n=u_1+(n-1)\\times r=${mois1}+(n-1)\\times ${r}$</br>
    4) $u_{${Moisq3}}=u_1+${indiceq3}\\times r=${mois1}+${indiceq3}\\times ${r}=${repq3}$</br>
    Donc la personne remboursera ${repq3} € le ${Moisq3}$^{\\text{ème}}$ mois.</br>
    5) On doit en fait calculer $S=u_1+u_2+\\ldots +u_{${Moisq3}}$ </br>
    On va utiliser la formule de la somme des termes consécutifs d'une suite arithmétique :</br>
    $S=\\text{nombre de termes de la somme}\\times \\dfrac{\\text{premier terme de la somme + dernier terme de la somme}}{2}$</br>
    Ce qui donne ici :</br>
    $S=${Moisq3}\\times \\dfrac{u_1+u_{${Moisq3}}}{2}=${Moisq3}\\times \\dfrac{${mois1}+${repq3}}{2}=${repq4}$.</br>
    Donc, au total, la personne aura remboursé ${repq4} € au bout de ${Moisq3} mois.</br>
    6) On dépasse ${Seuilu} € à partir de $n=${nq6}$ car $u_{${nq6}}=${unq6}$ et $u_{${nq6M1}}=${unq6M1}$ </br>
    7) On va exprimer $S_n=u_1+u_2+\\ldots+u_n$ en fonction de $n$ :</br>
    Cette somme possède $n$ termes.</br>
    Son premier terme est $u_1=${mois1}$</br>
    Son dernier terme est $u_n=u_1+(n-1)\\times r=${mois1}+(n-1)\\times ${r}$
    $S_n=n\\times \\dfrac{u_1+u_n}{2}=n\\times \\dfrac{${mois1}+${mois1}+(n-1)\\times ${r}}{2}$</br>
    A l'aide de la calculatrice on trouve que $S_n$ dépasse ${Seuil} 000 à partir de $n=${nq5}$ car $S_{${nq5M1}}=${Sq5M1}$ et $S_{${nq5}}=${Sq5}$</br>
    C'est donc au bout de ${nq5} mois que la personne aura remboursé plus de ${Seuil} 000 € au total. `];

enonce.innerHTML = listeenonces[0];
solution.innerHTML = listesolutions[0];
correctiond.innerHTML = listecorrections[0];

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
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTaleTechno.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTSTSuites.html";
})
