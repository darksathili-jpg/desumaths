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



accueil.addEventListener('click', () => {
    location.href = "../index.html";
})

MenuPrecedent.addEventListener('click', () => {
  location.href = "MenuTaleSpe.html";
})
