function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function indice2(a) {
    let ind2;
    ind2 = Math.floor(Math.random() * 20) + 1;
    while (ind2 == a) {
        ind2 = Math.floor(Math.random() * 20) + 1;
    }
    return ind2;
}

function mini(a, b) {
    let min;
    if (a > b) {
        min = b;
    } else {
        min = a;
    }
    return min;
}

function maxi(a, b) {
    let max;
    if (a > b) {
        max = a;
    } else {
        max = b;
    }
    return max;
}

function test_réponse(a,b) {
    let test;
    if (a==b) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

let u0 = nbrealéa(1,10);
let q = nbrealéa(2,7);
let n1 = nbrealéa(1,10);
let n2 = indice2(n1);
let un1 = u0*q**n1;
let un2 = u0*q**n2;
let miniindice = mini(n1,n2);
let maxiindice = maxi(n1,n2);
let min = mini(un1,un2);
let max = maxi(un1,un2);
let resultatfraction = max/min;
let diff = maxiindice-miniindice;
let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


enonce.innerHTML = `Soit $(u_n)$ une suite géométrique telle que $u_{${n1}}=${un1}$ et $u_{${n2}}=${un2}$. </br>
Calculer la raison $q$ de cette suite.`;
solution.innerHTML = `Solution : $q=${q}$`;
correctiond.innerHTML = `$\\begin{array}{rcl} u_{${maxiindice}}=u_{${miniindice}}\\times q^{${diff}} & = & ${max} \\\\
${min}\\times q^{${diff}} & = & ${max} \\\\
q^{${diff}} & = & \\dfrac{${max}}{${min}}=${resultatfraction}\\\\
q & = & ${resultatfraction}^{\\frac{1}{${diff}}}=\\sqrt[${diff}]{${resultatfraction}}=${q}\\end{array}$`;

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
    location.href = "../../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../../Menus/Menu1ST.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../Menus/Menu1STsuitesgeometriques.html";
})