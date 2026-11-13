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

function Reponseq7(u0,q,seuil){
    let somme = u0;
    let n=0;
    while(somme<seuil) {u0=u0*q;somme=somme+u0;n=n+1;}
    return n;
}

function Reponseq6(u0,q,seuil){
    let terme = u0;
    let n=0;
    while(terme<seuil) {terme=terme*q;n=n+1;}
    return n;
}

let ChoixU0 = [500,600,700,800,900,1000,1100,1200,1300,1400,1500];
let u0 = ChoixU0[nbrealéa(0,10)];
let taux = nbrealéa(2,10);
let Moisq4 = nbrealéa(10,20);
let Seuilu = nbrealéa(2500,10000);
let SeuilSomme = nbrealéa(10000,50000);
let q = 1+taux/100;
let qv = avecVirgule(q);
let repq4 = Math.round(u0*q**Moisq4);
let NbreTermes = Moisq4+1;
let repq5 = Math.round(u0*(1-q**NbreTermes)/(1-q));
let nq6 = Reponseq6(u0,q,Seuilu);
let nq6M1 = nq6-1;
let unq6 = Math.round(u0*q**nq6);
let unq6M1 = Math.round(u0*q**nq6M1);
let nq7 = Reponseq7(u0,q,SeuilSomme);
let nq7M1 = nq7-1;
let Sq7 = Math.round(u0*(1-q**(nq7+1))/(1-q));
let Sq7M1 = Math.round(u0*(1-q**(nq7))/(1-q));



let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
let solution = document.getElementById('solution');
let solutions = document.getElementById('solutions');
var Test;

let listeenonces = [`Une entreprise a réussi à fabriquer ${u0} objets en un mois.</br>
Suite à une plus forte demande, elle décide de faire des efforts et d'augmenter sa production de ${taux} % par mois.</br>
On note $(u_n)$ le nombre d'objets fabriqués en un mois au bout de $n$ mois d'efforts.</br>
1) Déterminer la nature de la suite $(u_n)$ ainsi que son premier terme et sa raison.</br>
2) Exprimer $u_{n+1}$ en fonctionde $u_n$.</br>
3) Exprimer $u_n$ en fonction de $n$.</br>
4) Déterminer le nombre d'obets fabriqués le ${Moisq4}$^{\\text{ème}}$ mois après le début des efforts.</br>
5) Déterminer le nombre total d'objets fabriqués au bout de ${Moisq4} mois d'efforts.</br>
6) Déterminer, à l'aide de la calculatrice, à partir de quel mois après le début des efforts le nombre d'objets fabriqués par mois dépassera ${Seuilu} €.</br>
7) Déterminer, à l'aide de la calculatrice, au bout de combien de mois après le débutd des efforts le nombre total d'objets fabriqués deviendra supérieur à ${SeuilSomme}.
`];

let listesolutions = [`1) Géométrique. $u_0=${u0}$ et $q=${qv}$</br>
    2) $u_{n+1}=u_n\\times ${qv}$</br>
    3) $u_n=${u0}\\times ${qv}^n$</br>
    4) ${repq4}</br>
    5) ${repq5}</br> 
    6) à partir de $n=${nq6}$</br>
    7) C'est au bout de ${nq7} mois.`];

let listecorrections =[`1) $(u_n)$ est une suite géométrique car pour passer d'un terme au suivant on multiplie toujours par le même nombre : $q=${qv}$.</br>
    Le premier terme est donc $u_0=${u0}$ et la raison est $q=${qv}$</br>
    2) $u_{n+1}=u_n\\times q=u_n\\times ${qv}$</br>
    3) $u_n=u_0\\times q^n=${u0}\\times ${qv}^n$</br>
    4) $u_{${Moisq4}}=u_0\\times q^{${Moisq4}}=${u0}\\times ${qv}^{${Moisq4}}\\approx ${repq4}$</br>
    Donc l'entreprise fabriquera ${repq4} objets pendant le ${Moisq4}$^{\\text{ème}}$ mois d'efforts.</br>
    5) On doit en fait calculer $S=u_0+u_2+\\ldots+u_{${Moisq4}}$ </br>
    On va utiliser la formule de la somme des termes consécutifs d'une suite géométrique :</br>
    $S=\\text{premier terme de la somme}\\times\\dfrac{1-q^{\\text{nombre de termes de la somme}}}{1-q}$</br>
    Ce qui donne ici :</br>
    $S=u_0\\times \\dfrac{1-q^{${NbreTermes}}}{1-q}=${u0}\\times \\dfrac{1-${qv}^{${NbreTermes}}}{1-${qv}}\\approx ${repq5}$.</br>
    Donc, au total, l'netreprise aura fabriqué ${repq5} objets au bout de ${Moisq4} mois d'efforts.</br>
    6) On dépasse ${Seuilu} objets fabriqués par mois à partir de $n=${nq6}$ car $u_{${nq6}}\\approx ${unq6}$ et $u_{${nq6M1}}\\approx ${unq6M1}$ </br>
    7) On va exprimer $S_n=u_0+u_1+\\ldots+u_n$ en fonction de $n$ :</br>
    Cette somme possède $n+1$ termes.</br>
    Son premier terme est $u_0=${u0}$</br>
    $S_n=u_0\\times \\dfrac{1-q^{n+1}}{1-q}=${u0}\\times \\dfrac{1-${qv}^{n+1}}{1-${qv}}$</br>
    A l'aide de la calculatrice on trouve que $S_n$ dépasse ${SeuilSomme} à partir de $n=${nq7}$ car $S_{${nq7M1}}\\approx ${Sq7M1}$ et $S_{${nq7}}\\approx ${Sq7}$</br>
    C'est donc au bout de ${nq7} mois d'efforts que l'entreprise aura fabriqué plus de ${SeuilSomme} objets au total. `];

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
    location.href = "../../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../../Menus/MenuTaleTechno.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../Menus/MenuTSTSuites.html";
})
