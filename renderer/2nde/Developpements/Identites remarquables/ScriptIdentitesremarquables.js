function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function plusmoins() {
    let choix;
    let result;
    choix = nbrealéa(1, 2);
    if (choix == 1) {
        result = '+';
    } else {
        result = '-';
    }
    return result;
}

function sign1() {
    let sig1;
    sig1 = plusmoins();
    if (sig1 == '+') {
        sig1 = '';
    } else {
        sig1 = '-';
    }
    return sig1;
}


function signe() {
    let a = nbrealéa(1,2);
    let sig;
    if (a==1) {sig='+';} else {sig='-';}
    return sig;
}

function signedeuxiemeparenthese(s1,s2) {
    let reponse;
    if (s1=='+' && s2=='') {reponse='+';}
    else if (s1=='+' && s2=='+') {reponse='+';}
    else if (s1=='-' && s2=='-') {reponse='+';}
    else {reponse='-';}
    return reponse;
}

function unoupasun(a) {
    let rep;
    if (a==1) {rep=``;} else {
        if (a==-1) {rep=`-`;} else {rep=`${a}`;}}
    return rep;
}

function parenthesesgd(a) {
    let rep;
    let parg;
    let pard;
    if (a=='-') {parg='(';pard=')';} else {parg='';pard='';}
    return rep = [parg,pard];
}

let a = nbrealéa(1, 9);
let a1 = unoupasun(a);
let b = nbrealéa(1, 9);
let identite = nbrealéa(0,2);
let signe1 = sign1();
let pgd = parenthesesgd(signe1);
let acarre = a * a;
let acarre1 = unoupasun(acarre);
let ab2 = 2 * a * b;
let bcarre = b * b;
let sig1 = signedeuxiemeparenthese('+',signe1);
let sig2 = signedeuxiemeparenthese('-',signe1);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


let listenonces = [`Développer : $\\left(${signe1} ~ ${a1}x + ${b}\\right)^2$`,
    `Développer : $\\left(${signe1} ~ ${a1}x - ${b}\\right)^2$`,
    `Développer : $\\left(${a1}x + ${b}\\right) \\left(${a1}x - ${b}\\right)$`
]

let listeSolutions = [`Solution : $${acarre1}x^2 ${sig1} ${ab2}x + ${bcarre}$`,
    `Solution : $${acarre1}x^2 ${sig2} ${ab2}x + ${bcarre}$`,
    `Solution : $${acarre1}x^2 - ${bcarre}$`
]

let listeCorrections = [`On va utiliser l'identité remarquable $(a+b)^2=a^2+2ab+b^2$ avec $\\color{blue}{a=${signe1}${a1}x}$ et $\\color{green}{b=${b}}$ : <br><br>
$\\begin{array}{rcl} \\underbrace{\\left(\\color{blue}{${signe1} ~ ${a1}x} + \\color{green}{${b}}\\right)^2}_{(\\color{blue}{a}+\\color{green}{b})^2} & = & \\underbrace{(\\color{blue}{${signe1} ${a1}x})^2}_{\\color{blue}{a}^2} + \\underbrace{2\\times ${pgd[0]}\\color{blue}{${signe1}${a1}x}${pgd[1]} \\times \\color{green}{${b}}}_{2\\color{blue}{a}\\color{green}{b}} + \\underbrace{\\color{green}{${b}}^2}_{\\color{green}{b}^2} \\\\
& = & ${acarre1}x^2 ${sig1} ${ab2}x + ${bcarre} \\end{array}$`,
`On va utiliser l'identité remarquable $(a-b)^2=a^2-2ab+b^2$ avec $\\color{blue}{a=${signe1}${a1}x}$ et $\\color{green}{b=${b}}$ : <br><br>
$\\begin{array}{rcl} \\underbrace{\\left(\\color{blue}{${signe1} ~ ${a1}x} - \\color{green}{${b}}\\right)^2}_{(\\color{blue}{a}-\\color{green}{b})^2}  & = & \\underbrace{(\\color{blue}{${signe1} ${a1}x})^2}_{\\color{blue}{a}^2} - \\underbrace{2\\times ${pgd[0]}\\color{blue}{${signe1}${a1}x}${pgd[1]} \\times \\color{green}{${b}}}_{2\\color{blue}{a}\\color{green}{b}} + \\underbrace{\\color{green}{${b}}^2}_{\\color{green}{b}^2} \\\\
& = & ${acarre1}x^2 ${sig2} ${ab2}x + ${bcarre} \\end{array}$`,
`On va utiliser l'identité remarquable $(a+b)(a-b)=a^2-b^2$ avec $\\color{blue}{a=${signe1}${a1}x}$ et $\\color{green}{b=${b}}$ : <br><br>
$\\begin{array}{rcl} \\underbrace{\\left(\\color{blue}{${a1}x} + \\color{green}{${b}}\\right)}_{\\color{blue}{a}+\\color{green}{b}}~\\underbrace{\\left(\\color{blue}{${a1}x} - \\color{green}{${b}}\\right)}_{\\color{blue}{a}-\\color{green}{b}} & = & \\underbrace{(\\color{blue}{${a1}x})^2}_{\\color{blue}{a}^2} - \\underbrace{\\color{green}{${b}}^2}_{\\color{green}{b}^2} \\\\
& = & ${acarre1}x^2 - ${bcarre} \\end{array}$`
]

enonce.innerHTML = listenonces[identite];
solution.innerHTML = listeSolutions[identite];
correctiond.innerHTML = listeCorrections[identite];

enonce.addEventListener("load", function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

correction.addEventListener('click', () => {
    correctiond.style.display = "block";
})

recommencer.addEventListener('click', () => {
    location.reload(true);
})

solutions.addEventListener('click', () => {
    solution.style.display = "block";
})

accueil.addEventListener('click', () => {
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSeconde.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSecondeDeveloppements.html";
})