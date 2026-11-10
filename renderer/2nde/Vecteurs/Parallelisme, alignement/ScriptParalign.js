function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function nbreouoppose(a) {
    let rep;
    let alea = nbrealéa(1,2);
    if (alea==1) {rep=a;} else {rep=-a;}
    return rep;
}

function parenthesesgd(a) {
    let rep;
    let pg;
    let pd;
    if (a<0) {pg='(';} else {pg='';}
    if (a<0) {pd=')';} else {pd='';}
    return rep = [pg,pd];
}

let a = nbreouoppose(nbrealéa(1,9));
let b = nbreouoppose(nbrealéa(1,9));
let xalign = nbreouoppose(nbrealéa(1,9));
let yalign = a*xalign+b;
let xbalign = nbreouoppose(nbrealéa(1,9));
let ybalign = a*xbalign+b;
let xcalign = nbreouoppose(nbrealéa(1,9));
let ycalign = a*xcalign+b;
let xanonalign = nbreouoppose(nbrealéa(1,9));
let yanonalign = a*xalign+b+nbrealéa(1,9);
let xbnonalign = nbreouoppose(nbrealéa(1,9));
let ybnonalign = a*xbalign+b-nbrealéa(1,9);
let xcnonalign = nbreouoppose(nbrealéa(1,9));
let ycnonalign = a*xcalign+b;
let b1 = nbreouoppose(nbrealéa(1,5));
let b2 = nbreouoppose(nbrealéa(6,9));
let xapara = nbreouoppose(nbrealéa(1,9));
let yapara = a*xapara+b1;
let xbpara = nbreouoppose(nbrealéa(1,9));
let ybpara = a*xbpara+b1;
let xcpara = nbreouoppose(nbrealéa(1,9));
let ycpara = a*xcpara+b2;
let xdpara = nbreouoppose(nbrealéa(1,9));
let ydpara = a*xdpara+b2;
let xanonpara = nbreouoppose(nbrealéa(1,9));
let yanonpara = a*xanonpara+b1+nbrealéa(1,5);
let xbnonpara = nbreouoppose(nbrealéa(1,9));
let ybnonpara = a*xbnonpara+b1-nbrealéa(1,5);
let xcnonpara = nbreouoppose(nbrealéa(1,9));
let ycnonpara = a*xcnonpara+b2+nbrealéa(6,9);
let xdnonpara = nbreouoppose(nbrealéa(1,9));
let ydnonpara = a*xdnonpara+b2-nbrealéa(6,9);
let xabalign = xbalign-xalign;
let yabalign = ybalign-yalign;
let xacalign = xcalign-xalign;
let yacalign = ycalign-yalign;
let pg1 = parenthesesgd(yacalign);
let pg2 = parenthesesgd(xacalign);
let pg3 = parenthesesgd(yabalign);
let diag1 = xabalign*yacalign;
let diag2 = xacalign*yabalign;
let pg4 = parenthesesgd(diag2);
let det = diag1-diag2;
let xabnonalign = xbnonalign-xanonalign;
let yabnonalign = ybnonalign-yanonalign;
let xacnonalign = xcnonalign-xanonalign;
let yacnonalign = ycnonalign-yanonalign;
let pg1na = parenthesesgd(yacnonalign);
let pg2na = parenthesesgd(xacnonalign);
let pg3na = parenthesesgd(yabnonalign);
let diag1na = xabnonalign*yacnonalign;
let diag2na = xacnonalign*yabnonalign;
let pg4na = parenthesesgd(diag2na);
let detna = diag1na-diag2na;
let xabpara = xbpara-xapara;
let yabpara = ybpara-yapara;
let xcdpara = xdpara-xcpara;
let ycdpara = ydpara-ycpara;
let pg1para = parenthesesgd(ycdpara);
let pg2para = parenthesesgd(xcdpara);
let pg3para = parenthesesgd(yabpara);
let diag1para = xabpara*ycdpara;
let diag2para = xcdpara*yabpara;
let pg4para = parenthesesgd(diag2para);
let detpara = diag1para-diag2para;
let xabnonpara = xbnonpara-xanonpara;
let yabnonpara = ybnonpara-yanonpara;
let xcdnonpara = xdnonpara-xcnonpara;
let ycdnonpara = ydnonpara-ycnonpara;
let pg1nonpara = parenthesesgd(ycdnonpara);
let pg2nonpara = parenthesesgd(xcdnonpara);
let pg3nonpara = parenthesesgd(yabnonpara);
let diag1nonpara = xabnonpara*ycdnonpara;
let diag2nonpara = xcdnonpara*yabnonpara;
let pg4nonpara = parenthesesgd(diag2nonpara);
let detnonpara = diag1nonpara-diag2nonpara;
let choix = nbrealéa(0,3);
let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');
let num = document.getElementById('num');
let denom = document.getElementById('denom');
let saisie_num = document.getElementById('saisie_num');
let saisie_denom = document.getElementById('saisie_denom');

let listenonces = [`Les points $A(${xalign};${yalign}), B(${xbalign};${ybalign})$ et $C(${xcalign};${ycalign})$ sont-ils alignés ?`,
    `Les points $A(${xanonalign};${yanonalign}), B(${xbnonalign};${ybnonalign})$ et $C(${xcnonalign};${ycnonalign})$ sont-ils alignés ?`,
    `Les droites $(AB)$ et $(CD)$ sont-elles parallèles avec $A(${xapara};${yapara}), B(${xbpara};${ybpara}), C(${xcpara};${ycpara})$ et $D(${xdpara};${ydpara})$ ?`,
    `Les droites $(AB)$ et $(CD)$ sont-elles parallèles avec $A(${xanonpara};${yanonpara}), B(${xbnonpara};${ybnonpara}), C(${xcnonpara};${ycnonpara})$ et $D(${xdnonpara};${ydnonpara})$ ?`]

let listesolutions = [`Les points sont alignés`,`Les points ne sont pas alignés`,`Les droites sont parallèles`,`Les droites ne sont pas parallèles`]

let listeCorrections =[`$\\overrightarrow{AB} \\begin{pmatrix} x_B-x_A \\\\ y_B-y_A \\end{pmatrix} = \\begin{pmatrix} ${xabalign} \\\\ ${yabalign} \\end{pmatrix}$ et $\\overrightarrow{AC} \\begin{pmatrix} x_C-x_A \\\\ y_C-y_A \\end{pmatrix} = \\begin{pmatrix} ${xacalign} \\\\ ${yacalign} \\end{pmatrix}$</br></br>
det$\\left(\\overrightarrow{AB},\\overrightarrow{AC} \\right)=\\left|\\begin{array}{cc} ${xabalign} & ${xacalign} \\\\ ${yabalign} & ${yacalign} \\end{array}\\right|=${xabalign}\\times ${pg1[0]} ${yacalign} ${pg1[1]} - ${pg2[0]} ${xacalign} ${pg2[1]} \\times ${pg3[0]} ${yabalign} ${pg3[1]} = ${diag1} - ${pg4[0]} ${diag2} ${pg4[1]} = ${det}$</br>
Le déterminant est nul donc les points sont alignés.`,
`$\\overrightarrow{AB} \\begin{pmatrix} x_B-x_A \\\\ y_B-y_A \\end{pmatrix} = \\begin{pmatrix} ${xabnonalign} \\\\ ${yabnonalign} \\end{pmatrix}$ et $\\overrightarrow{AC} \\begin{pmatrix} x_C-x_A \\\\ y_C-y_A \\end{pmatrix} = \\begin{pmatrix} ${xacnonalign} \\\\ ${yacnonalign} \\end{pmatrix}$</br></br>
det$\\left(\\overrightarrow{AB},\\overrightarrow{AC} \\right)=\\left|\\begin{array}{cc} ${xabnonalign} & ${xacnonalign} \\\\ ${yabnonalign} & ${yacnonalign} \\end{array}\\right|=${xabnonalign}\\times ${pg1na[0]} ${yacnonalign} ${pg1na[1]} - ${pg2na[0]} ${xacnonalign} ${pg2na[1]} \\times ${pg3na[0]} ${yabnonalign} ${pg3na[1]} = ${diag1na} - ${pg4na[0]} ${diag2na} ${pg4na[1]} = ${detna}\\neq 0$</br>
Le déterminant n'est pas nul donc les points ne sont pas alignés.`,
`$\\overrightarrow{AB} \\begin{pmatrix} x_B-x_A \\\\ y_B-y_A \\end{pmatrix} = \\begin{pmatrix} ${xabpara} \\\\ ${yabpara} \\end{pmatrix}$ et $\\overrightarrow{CD} \\begin{pmatrix} x_D-x_C \\\\ y_D-y_C \\end{pmatrix} = \\begin{pmatrix} ${xcdpara} \\\\ ${ycdpara} \\end{pmatrix}$</br></br>
det$\\left(\\overrightarrow{AB},\\overrightarrow{CD} \\right)=\\left|\\begin{array}{cc} ${xabpara} & ${xcdpara} \\\\ ${yabpara} & ${ycdpara} \\end{array}\\right|=${xabpara}\\times ${pg1para[0]} ${ycdpara} ${pg1para[1]} - ${pg2para[0]} ${xcdpara} ${pg2para[1]} \\times ${pg3para[0]} ${yabpara} ${pg3para[1]} = ${diag1para} - ${pg4para[0]} ${diag2para} ${pg4para[1]} = ${detpara}$</br>
Le déterminant est nul donc les droites sont parallèles.`,
`$\\overrightarrow{AB} \\begin{pmatrix} x_B-x_A \\\\ y_B-y_A \\end{pmatrix} = \\begin{pmatrix} ${xabnonpara} \\\\ ${yabnonpara} \\end{pmatrix}$ et $\\overrightarrow{CD} \\begin{pmatrix} x_D-x_C \\\\ y_D-y_C \\end{pmatrix} = \\begin{pmatrix} ${xcdnonpara} \\\\ ${ycdnonpara} \\end{pmatrix}$</br></br>
det$\\left(\\overrightarrow{AB},\\overrightarrow{CD} \\right)=\\left|\\begin{array}{cc} ${xabnonpara} & ${xcdnonpara} \\\\ ${yabnonpara} & ${ycdnonpara} \\end{array}\\right|=${xabnonpara}\\times ${pg1nonpara[0]} ${ycdnonpara} ${pg1nonpara[1]} - ${pg2nonpara[0]} ${xcdnonpara} ${pg2nonpara[1]} \\times ${pg3nonpara[0]} ${yabnonpara} ${pg3nonpara[1]} = ${diag1nonpara} - ${pg4nonpara[0]} ${diag2nonpara} ${pg4nonpara[1]} = ${detnonpara}\\neq 0$</br>
Le déterminant n'est pas nul donc les droites ne sont pas parallèles.`]

enonce.innerHTML = listenonces[choix];
solution.innerHTML = listesolutions[choix];
correctiond.innerHTML = listeCorrections[choix];

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
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSeconde.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSecondeVecteurs.html";
})