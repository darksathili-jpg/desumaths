function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }


function cazi(l,e) {
    let t = nbrealéa(4,6);
    let rep = l*t/10;
    while (rep<e) {t=nbrealéa(4,6);rep=l*t/10;}
    return rep;
}

function cases() {
    let rep = [];
    let c12 = nbrealéa(10,20)*1000;
    let c4 = nbrealéa(40,60)*c12/100;
    let c8 = c12-c4;
    let c5 = nbrealéa(6,8)*c8/10;
    let c9 = cazi(c12,c5);
    let c1 = c9-c5;
    let c11 = nbrealéa(1,1000);
    let c10 = c12-c9-c11;
    let c3 = nbrealéa(1,c11-1);
    let c7 = c11-c3;
    let c2 = c4-c1-c3;
    let c6 = c10-c2;
    while (c6<0) {
        c12 = nbrealéa(10,20)*1000;
        c4 = nbrealéa(40,06)*c12/100;
        c8 = c12-c4;
        c5 = nbrealéa(6,8)*c8/10;
        c9 = cazi(c12,c5);
        c1 = c9-c5;
        c11 = nbrealéa(1,1000);
        c10 = c12-c9-c11;
        c3 = nbrealéa(1,c11-1);
        c7 = c11-c3;
        c2 = c4-c1-c3;
        c6 = c10-c2;
    }
    return rep = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12];
}

function avecVirgule(nombre){
  let nombreChaine = nombre.toString()
  nombreChaine = nombreChaine.replace('.', ',')
  return nombreChaine
}

let caz = cases();
let c12tab = document.getElementById("C12").innerHTML;
C12.innerHTML = caz[11];
let c4tab = document.getElementById("C4").innerHTML;
C4.innerHTML = caz[3];
let c8tab = document.getElementById("C8").innerHTML;
C8.innerHTML = caz[7];
let c5tab = document.getElementById("C5").innerHTML;
C5.innerHTML = caz[4];
let c9tab = document.getElementById("C9").innerHTML;
C9.innerHTML = caz[8];
let c1tab = document.getElementById("C1").innerHTML;
C1.innerHTML = caz[0];
let c11tab = document.getElementById("C11").innerHTML;
C11.innerHTML = caz[10];
let c10tab = document.getElementById("C10").innerHTML;
C10.innerHTML = caz[9];
let c3tab = document.getElementById("C3").innerHTML;
C3.innerHTML = caz[2];
let c7tab = document.getElementById("C7").innerHTML;
C7.innerHTML = caz[6];
let c2tab = document.getElementById("C2").innerHTML;
C2.innerHTML = caz[1];
let c6tab = document.getElementById("C6").innerHTML;
C6.innerHTML = caz[5];

let fm0 = avecVirgule(Math.round(caz[0]/caz[11]*100*10)/10);
let fm1 = avecVirgule(Math.round(caz[1]/caz[11]*100*10)/10);
let fm2 = avecVirgule(Math.round(caz[2]/caz[11]*100*10)/10);
let fm3 = avecVirgule(Math.round(caz[3]/caz[11]*100*10)/10);
let fm4 = avecVirgule(Math.round(caz[4]/caz[11]*100*10)/10);
let fm5 = avecVirgule(Math.round(caz[5]/caz[11]*100*10)/10);
let fm6 = avecVirgule(Math.round(caz[6]/caz[11]*100*10)/10);
let fm7 = avecVirgule(Math.round(caz[7]/caz[11]*100*10)/10);
let fm8 = avecVirgule(Math.round(caz[8]/caz[11]*100*10)/10);
let fm9 = avecVirgule(Math.round(caz[9]/caz[11]*100*10)/10);
let fm10 = avecVirgule(Math.round(caz[10]/caz[11]*100*10)/10);
let fm11 = avecVirgule(Math.round(caz[11]/caz[11]*100*10)/10);

let fl0 = avecVirgule(Math.round(caz[0]/caz[3]*100*10)/10);
let fl1 = avecVirgule(Math.round(caz[1]/caz[3]*100*10)/10);
let fl2 = avecVirgule(Math.round(caz[2]/caz[3]*100*10)/10);
let fl3 = avecVirgule(Math.round(caz[3]/caz[3]*100*10)/10);
let fl4 = avecVirgule(Math.round(caz[4]/caz[7]*100*10)/10);
let fl5 = avecVirgule(Math.round(caz[5]/caz[7]*100*10)/10);
let fl6 = avecVirgule(Math.round(caz[6]/caz[7]*100*10)/10);
let fl7 = avecVirgule(Math.round(caz[7]/caz[7]*100*10)/10);

let fc0 = avecVirgule(Math.round(caz[0]/caz[8]*100*10)/10);
let fc1 = avecVirgule(Math.round(caz[1]/caz[9]*100*10)/10);
let fc2 = avecVirgule(Math.round(caz[2]/caz[10]*100*10)/10);
let fc4 = avecVirgule(Math.round(caz[4]/caz[8]*100*10)/10);
let fc5 = avecVirgule(Math.round(caz[5]/caz[9]*100*10)/10);
let fc6 = avecVirgule(Math.round(caz[6]/caz[10]*100*10)/10);
let fc8 = avecVirgule(Math.round(caz[8]/caz[8]*100*10)/10);
let fc9 = avecVirgule(Math.round(caz[9]/caz[9]*100*10)/10);
let fc10 = avecVirgule(Math.round(caz[10]/caz[10]*100*10)/10);



let enonce = document.getElementById('enonce');
let enonce2 = document.getElementById('enonce2');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


enonce.innerHTML = `On donne la répartition des élèves d'une ville suivant leur sexe et leur choix de langue :<br><br>`;
enonce2.innerHTML = `<br> Construire les tableaux suivants (on arrondira si besoin les résultats à 0,1 % près):<br>
1) le tableau des fréquences marginales ;<br>
2) le tableau des fréquences conditionnelles en ligne ;<br>
3) le tableau des fréquences conditionnelles en colonne.`;

solution.innerHTML = `<style>
table,th,td{text-align: center;border:1px solid #cccccc;width: 35vw;}
</style>
1) <table >
<tr>
    <th></th>
    <th>Allemand<br>(A)</th>
    <th>Espagnol<br>(E)</th>
    <th>Italien<br>(I)</th>
    <th>Total</th>
</tr>
<tr>
  <th>Filles<br>(F)</th>
  <td> ${fm0} % </td>
  <td> ${fm1} % </td>
  <td> ${fm2} % </td>
  <td> ${fm3} % </td>
</tr>
<tr>
  <th>Garçons<br>(G)</th>
  <td> ${fm4} % </td>
  <td> ${fm5} % </td>
  <td> ${fm6} % </td>
  <td> ${fm7} % </td>
</tr>
<tr>
    <th>Total</th>
    <td> ${fm8} % </td>
    <td> ${fm9} % </td>
    <td> ${fm10} % </td>
    <td> ${fm11} % </td>
  </tr>
</table><br>
2) <table >
<tr>
    <th></th>
    <th>Allemand<br>(A)</th>
    <th>Espagnol<br>(E)</th>
    <th>Italien<br>(I)</th>
    <th>Total</th>
</tr>
<tr>
  <th>Filles<br>(F)</th>
  <td> ${fl0} % </td>
  <td> ${fl1} % </td>
  <td> ${fl2} % </td>
  <td> ${fl3} % </td>
</tr>
<tr>
  <th>Garçons<br>(G)</th>
  <td> ${fl4} % </td>
  <td> ${fl5} % </td>
  <td> ${fl6} % </td>
  <td> ${fl7} % </td>
</tr>
</table><br>
3) <table >
<tr>
    <th></th>
    <th>Allemand<br>(A)</th>
    <th>Espagnol<br>(E)</th>
    <th>Italien<br>(I)</th>
</tr>
<tr>
  <th>Filles<br>(F)</th>
  <td> ${fc0} % </td>
  <td> ${fc1} % </td>
  <td> ${fc2} % </td>
</tr>
<tr>
  <th>Garçons<br>(G)</th>
  <td> ${fc4} % </td>
  <td> ${fc5} % </td>
  <td> ${fc6} % </td>
</tr>
<tr>
    <th>Total</th>
    <td> ${fc8} % </td>
    <td> ${fc9} % </td>
    <td> ${fc10} % </td>
  </tr>
</table>`;

correctiond.innerHTML = `1) On divise les effectifs de chaque case par l'effectif total ($${caz[11]}$)<br>
2) On divise les effectifs de chaque case par le total de la ligne correspondante.<br>
3) On divise les effectifs de chaque case par le total de la colonne correspondante.`;


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
    location.href = "../../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../../Menus/Menu1ST.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../Menus/Menu1STprobabilitesproportions.html";
})