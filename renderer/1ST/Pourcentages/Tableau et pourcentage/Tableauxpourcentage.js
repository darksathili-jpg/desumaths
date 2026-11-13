function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


enonce.innerHTML = `$\\begin{array}{c}\\phantom{cellule41}\\end{array} \\left|\\begin{array}{c}cellule1\\end{array}\\right| \\left.\\begin{array}{c}cellule2\\end{array}\\right| \\left.\\begin{array}{c}cellule3\\end{array}\\right|$<br>
$\\left|\\begin{array}{c}cellule4\\end{array}\\right. \\left|\\begin{array}{c}cellule5\\end{array}\\right| \\left.\\begin{array}{c}cellule6\\end{array}\\right| \\left.\\begin{array}{c}cellule7\\end{array}\\right|$`;
solution.innerHTML = `Solution : `;
correctiond.innerHTML = ``;


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

valider.addEventListener('click', () => {
    saisie_nbre = document.getElementById('saisie_nbre').value;
    test.style.display = "block";
    Test = test_réponse(saisie_nbre,un2);
    test.innerHTML = `${Test}`;
})

accueil.addEventListener('click', () => {
    location.href = "index.html";
})