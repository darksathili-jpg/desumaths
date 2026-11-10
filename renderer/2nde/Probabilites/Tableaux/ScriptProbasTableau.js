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

function rq1(a,c9,c10,c11) {
    let rep;
    if (a==0) {rep=c9;}
    if (a==1) {rep=c10;}
    if (a==2) {rep=c11;}
    return rep;
}

function rq2(a,c9,c10,c11,c12) {
    let rep;
    if (a==0) {rep=[c9,c12-c9];}
    if (a==1) {rep=[c10,c12-c10];}
    if (a==2) {rep=[c11,c12-c11];}
    return rep;
}

function rq3(a,b,c1,c2,c3,c5,c6,c7) {
    let rep;
    if (a==0 && b==0) {rep=c1;}
    if (a==0 && b==1) {rep=c5;}
    if (a==1 && b==0) {rep=c2;}
    if (a==1 && b==1) {rep=c6;}
    if (a==2 && b==0) {rep=c3;}
    if (a==2 && b==1) {rep=c7;}
    return rep;
}

function rq4(a,b,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11) {
    let rep;
    if (a==0 && b==0) {rep=[c9,c4,c1];}
    if (a==0 && b==1) {rep=[c9,c8,c5];}
    if (a==1 && b==0) {rep=[c10,c4,c2];}
    if (a==1 && b==1) {rep=[c10,c8,c6];}
    if (a==2 && b==0) {rep=[c11,c4,c3];}
    if (a==2 && b==1) {rep=[c11,c8,c7];}
    return rep;
}

function rq5(a,b,c1,c2,c3,c5,c6,c7) {
    let rep;
    if (a==0 && b==0) {rep=[c2,c3];}
    if (a==0 && b==1) {rep=[c1,c3];}
    if (a==0 && b==2) {rep=[c1,c2];}
    if (a==1 && b==0) {rep=[c6,c7];}
    if (a==1 && b==1) {rep=[c5,c7];}
    if (a==1 && b==2) {rep=[c5,c6];}
    return rep; 
}

function rq6(a,b,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12) {
    let rep;
    if (a==0 && b==0) {rep=[c4,c12-c9,c2+c3];}
    if (a==0 && b==1) {rep=[c4,c12-c10,c1+c3];}
    if (a==0 && b==2) {rep=[c4,c12-c11,c1+c2];}
    if (a==1 && b==0) {rep=[c8,c12-c9,c6+c7];}
    if (a==1 && b==1) {rep=[c8,c12-c10,c5+c7];}
    if (a==1 && b==2) {rep=[c8,c12-c10,c5+c6];}
    return rep;
}

function rq7(a,b,c1,c2,c3,c5,c6,c7,c9,c10,c11) {
    let rep;
    if (a==0 && b==0) {rep=[c1,c9];}
    if (a==0 && b==1) {rep=[c5,c9];}
    if (a==1 && b==0) {rep=[c2,c10];}
    if (a==1 && b==1) {rep=[c6,c10];}
    if (a==2 && b==0) {rep=[c3,c11];}
    if (a==2 && b==1) {rep=[c7,c11];}
    return rep;
}

function rq8(a,b,c1,c2,c3,c4,c5,c6,c7,c8) {
    let rep;
    if (a==0 && b==0) {rep=[c1,c4];}
    if (a==0 && b==1) {rep=[c2,c4];}
    if (a==0 && b==2) {rep=[c3,c4];}
    if (a==1 && b==0) {rep=[c5,c8];}
    if (a==1 && b==1) {rep=[c6,c8];}
    if (a==1 && b==2) {rep=[c7,c8];}
    return rep;
}

function rq9(a,b,c1,c2,c3,c5,c6,c7,c9,c10,c11,c12) {
    let rep;
    if (a==0 && b==0) {rep=[c2,c3,c9,c2+c3,c12-c9];}
    if (a==0 && b==1) {rep=[c6,c7,c9,c6+c7,c12-c9];}
    if (a==1 && b==0) {rep=[c1,c3,c10,c1+c3,c12-c10];}
    if (a==1 && b==1) {rep=[c5,c7,c10,c5+c7,c12-c10];}
    if (a==2 && b==0) {rep=[c1,c2,c11,c1+c2,c12-c11];}
    if (a==2 && b==1) {rep=[c5,c6,c11,c5+c6,c12-c11];}
    return rep;
}

function rq10(a,b,c1,c2,c3,c4,c5,c6,c7,c8) {
    let rep;
    if (a==0 && b==0) {rep=[c2,c3,c4,c2+c3];}
    if (a==0 && b==1) {rep=[c1,c3,c4,c1+c3];}
    if (a==0 && b==2) {rep=[c1,c2,c4,c1+c2];}
    if (a==1 && b==0) {rep=[c6,c7,c8,c6+c7];}
    if (a==1 && b==1) {rep=[c5,c7,c8,c5+c7];}
    if (a==1 && b==2) {rep=[c5,c6,c8,c5+c6];}
    return rep;
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
let listelangues = ["A","E","I"];
let listesexe = ["F","G"];
let langues = ["allemand","espagnol","italien"];
let genre = ["filles","garçons"];
let ununegenre = ["une fille","un garçon"];
let q1 = nbrealéa(0,2);
let lq1 = listelangues[q1];
let q1l = langues[q1];
let q2 = nbrealéa(0,2);
let lq2 = listelangues[q2];
let q2l = langues[q2];
let q31 = nbrealéa(0,2);
let q32 = nbrealéa(0,1);
let lq3 = listelangues[q31];
let q3l = langues[q31];
let q3g = ununegenre[q32];
let sq3 = listesexe[q32];
let q41 = nbrealéa(0,2);
let q42 = nbrealéa(0,1);
let lq4 = listelangues[q41];
let sq4 = listesexe[q42];
let q4l = langues[q41];
let q4g = ununegenre[q42];
let q51 = nbrealéa(0,1);
let q52 = nbrealéa(0,2);
let sq5 = listesexe[q51];
let lq5 = listelangues[q52];
let q5l = langues[q52];
let q5g = ununegenre[q51];
let q61 = nbrealéa(0,1);
let q62 = nbrealéa(0,2);
let sq6 = listesexe[q61];
let lq6 = listelangues[q62];
let q6l = langues[q62];
let q6g = ununegenre[q61];
let q71 = nbrealéa(0,2);
let q72 = nbrealéa(0,1);
let lq7 = listelangues[q71];
let sq7 = listesexe[q72];
let q7l = langues[q71];
let q7g = ununegenre[q72];
let q81 = nbrealéa(0,1);
let q82 = nbrealéa(0,2);
let sq8 = listesexe[q81];
let lq8 = listelangues[q82];
let q8l = langues[q82];
let q8g = genre[q81];
let q91 = nbrealéa(0,2);
let q92 = nbrealéa(0,1);
let lq9 = listelangues[q91];
let sq9 = listesexe[q92];
let q9l = langues[q91];
let q9g = ununegenre[q92];
let q101 = nbrealéa(0,1);
let q102 = nbrealéa(0,2);
let sq10 = listesexe[q101];
let lq10 = listelangues[q102];
let q10l = langues[q102];
let q10g = genre[q101];
let repq1 = rq1(q1,caz[8],caz[9],caz[10]);
let repq2 = rq2(q2,caz[8],caz[9],caz[10],caz[11]);
let repq3 = rq3(q31,q32,caz[0],caz[1],caz[2],caz[4],caz[5],caz[6]);
let repq4 = rq4(q41,q42,caz[0],caz[1],caz[2],caz[3],caz[4],caz[5],caz[6],caz[7],caz[8],caz[9],caz[10]);
let numq4 = repq4[0]+repq4[1]-repq4[2];
let repq5 = rq5(q51,q52,caz[0],caz[1],caz[2],caz[4],caz[5],caz[6]);
let numq5 = repq5[0]+repq5[1];
let repq6 = rq6(q61,q62,caz[0],caz[1],caz[2],caz[3],caz[4],caz[5],caz[6],caz[7],caz[8],caz[9],caz[10],caz[11]);
let numq6 = repq6[0]+repq6[1]-repq6[2];
let repq7 = rq7(q71,q72,caz[0],caz[1],caz[2],caz[4],caz[5],caz[6],caz[8],caz[9],caz[10]);
let repq8 = rq8(q81,q82,caz[0],caz[1],caz[2],caz[3],caz[4],caz[5],caz[6],caz[7]);
let repq9 = rq9(q91,q92,caz[0],caz[1],caz[2],caz[4],caz[5],caz[6],caz[8],caz[9],caz[10],caz[11]);
let repq10 = rq10(q101,q102,caz[0],caz[1],caz[2],caz[3],caz[4],caz[5],caz[6],caz[7]);

let enonce = document.getElementById('enonce');
let enonce2 = document.getElementById('enonce2');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


enonce.innerHTML = `On donne la répartition des élèves d'une ville suivant leur sexe et leur choix de langue :<br><br>`;
enonce2.innerHTML = `<br>Calculer les probabilités suivantes et traduire les résultats à l'aide d'une phrase :<br><br>
1) $P\\left(${lq1}\\right)$<br><br>
2) $P\\left(\\overline{${lq2}} \\right)$<br><br>
3) $P\\left(${lq3}\\cap ${sq3} \\right)$<br><br>
4) $P\\left(${lq4} \\cup ${sq4} \\right)$<br><br>
5) $P\\left(${sq5} \\cap \\overline{${lq5}} \\right)$<br></br>
6) $P\\left(${sq6} \\cup\\overline{${lq6}}\\right)$`;

solution.innerHTML = `1) $P\\left(${lq1}\\right)=\\dfrac{${repq1}}{${caz[11]}} $<br>
C'est la probabilité que l'élève pratique l'${q1l}.<br><br>
2) $P\\left(\\overline{${lq2}}\\right)=\\dfrac{${repq2[1]}}{${caz[11]}} $<br>
C'est la probabilité que l'élève ne pratique pas l'${q2l}.<br><br>
3) $P\\left(${lq3}\\cap ${sq3} \\right)=\\dfrac{${repq3}}{${caz[11]}}$<br>
C'est la probabilité que l'élève pratique l'${q3l}  et soit ${q3g}.<br><br>
4) $P\\left(${lq4} \\cup ${sq4} \\right)=\\dfrac{${numq4}}{${caz[11]}}$<br>
C'est la probabilité que l'élève pratique l'${q4l} ou soit ${q4g}.<br><br>
5) $P\\left(${sq5} \\cap \\overline{${lq5}}\\right)=\\dfrac{${numq5}}{${caz[11]}} $<br>
C'est la probailité que l'élève soit ${q5g} et ne pratique pas l'${q5l}.<br><br>
6) $P\\left(${sq6} \\cup\\overline{${lq6}}\\right)=\\dfrac{${numq6}}{${caz[11]}}$<br>
C'est la probabilité que l'élève soit ${q6g} ou ne pratique pas l'${q6l}.<br><br>`;

correctiond.innerHTML = `1) $P\\left(${lq1}\\right)=\\dfrac{${repq1}}{${caz[11]}} $<br>
C'est la probabilité que l'élève pratique l'${q1l}.<br><br>
2) $P\\left(\\overline{${lq2}}\\right)=\\dfrac{${caz[11]}-${repq2[0]}}{${caz[11]}}=\\dfrac{${repq2[1]}}{${caz[11]}} $<br>
C'est la probabilité que l'élève ne pratique pas l'${q2l}.<br><br>
3) $P\\left(${lq3}\\cap ${sq3} \\right)=\\dfrac{${repq3}}{${caz[11]}}$<br>
C'est la probabilité que l'élève pratique l'${q3l}  et soit ${q3g}.<br><br>
4) $P\\left(${lq4} \\cup ${sq4} \\right)=P\\left(${lq4}\\right)+P\\left(${sq4}\\right)-P\\left(${lq4}\\cap ${sq4}\\right)=\\dfrac{${repq4[0]}+${repq4[1]}-${repq4[2]}}{${caz[11]}}=\\dfrac{${numq4}}{${caz[11]}}$<br>
C'est la probabilité que l'élève pratique l'${q4l} ou soit ${q4g}.<br><br>
5) $P\\left(${sq5} \\cap \\overline{${lq5}}\\right)=\\dfrac{${repq5[0]}+${repq5[1]}}{${caz[11]}}=\\dfrac{${numq5}}{${caz[11]}} $<br>
C'est la probailité que l'élève soit ${q5g} et ne pratique pas l'${q5l}.<br><br>
6) $P\\left(${sq6} \\cup\\overline{${lq6}}\\right)=P\\left(${sq6}\\right)+P\\left(\\overline{${lq6}}\\right)-P\\left(${sq6}\\cap \\overline{${lq6}}\\right)=\\dfrac{${repq6[0]}+${repq6[1]}-${repq6[2]}}{${caz[11]}}=\\dfrac{${numq6}}{${caz[11]}}$<br>
C'est la probabilité que l'élève soit ${q6g} ou ne pratique pas l'${q6l}.<br><br>`;


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
    location.href = "../../../Menus/MenuSecondeProbabilites.html";
})