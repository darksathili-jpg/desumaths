function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function positignegatif(a) {
    let rep;
    let choix=nbrealéa(1,2);
    if (choix==1) {rep=a;} else {rep=-a};
    return rep;
}

function plusmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}

function rienplus(a) {
    let rep;
    if (a<0) {rep='';} else {rep='+';}
    return rep;
}

function parenthesegd(a) {
    let rep;
    let parg;
    let pard;
    if (a<0) {parg='(';} else {parg='';}
    if (a<0) {pard=')';} else {pard='';}
    return rep=[parg,pard];
}

function test_réponse(e,f,g,h,i,j,k,l,m,n) {
    let test;
    if (e==j && f==k && g==l && h==m && i==n) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;

}

let coef = positignegatif(nbrealéa(2,10));
let a = positignegatif(nbrealéa(1,9));
let b = positignegatif(nbrealéa(1,9));
let c = positignegatif(nbrealéa(1,9));
let d = positignegatif(nbrealéa(1,9));
let e = positignegatif(nbrealéa(1,9));
let f = positignegatif(nbrealéa(1,9));
let signecoef = rienplus(coef);
let signea = rienplus(a);
let signeb = rienplus(b);
let signec = rienplus(c);
let signed = rienplus(d);
let signee = rienplus(e);
let signef = rienplus(f);
let pgdc = parenthesegd(c);
let pgdd = parenthesegd(d);
let pgde = parenthesegd(e);
let pgdf = parenthesegd(f);
let ac = a*c;
let ad = a*d;
let bc = b*c;
let bd = b*d;
let signeac = rienplus(ac);
let signead = rienplus(ad);
let signebc = rienplus(bc);
let signebd = rienplus(bd);
let adbc = ad+bc;
let signeadbc = rienplus(adbc);
let ace = ac*e;
let pgdace = parenthesegd(ace);
let acf = ac*f;
let signeacf = rienplus(acf);
let adbce = adbc*e;
let signeadbce = rienplus(adbce);
let adbcf = adbc*f;
let signeadbcf = rienplus(adbcf);
let bde = bd*e;
let signebde = rienplus(bde);
let bdf = bd*f;
let signebdf = rienplus(bdf);
let pgdbdf = parenthesegd(bdf);
let parx2 = acf+adbce;
let pgdparx2 = parenthesegd(parx2);
let signeparx2 = rienplus(parx2);
let parx = adbcf+bde;
let signeparx = rienplus(parx);
let pgdparx = parenthesegd(parx);
let repx3 = coef*ace;
let repx2 = coef*parx2;
let signerepx2 = rienplus(repx2);
let repx = coef*parx;
let signerepx = rienplus(repx);
let repreels = coef*bdf;
let signerepreels = rienplus(repreels);


let enonce = document.getElementById('enonce');
let solution = document.getElementById('solution');
let correctiond = document.getElementById('correctiond');
var solutions = document.getElementById('solutions');
var correction = document.getElementById('correction');
var recommencer = document.getElementById('recommencer');
var accueil = document.getElementById('accueil');
var Test;
var test = document.getElementById('test');

enonce.innerHTML = `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=${coef}\\left(${a}x${signeb}${b}\\right)\\left(${c}x${signed}${d}\\right)\\left(${e}x${signef}${f}\\right)$<br>
Déterminer la forme développée de $f$.`;
solution.innerHTML = `Solution : $f(x) = ${repx3}x^3 ${signerepx2}${repx2}x^2 ${signerepx}${repx}x ${signerepreels}${repreels}$`;
correctiond.innerHTML = `$f(x)=${coef}\\left(${a}x${signeb}${b}\\right)\\left(${c}x${signed}${d}\\right)\\left(${e}x${signef}${f}\\right)$<br>
$\\phantom{f(x)}=${coef}\\times\\left( ${a}x\\times${pgdc[0]} ${c}x${pgdc[1]} ${signea}${a}x\\times ${pgdd[0]}${d}${pgdd[1]} ${signeb}${b}\\times ${pgdc[0]}${c}x${pgdc[1]} ${signeb}${b}\\times ${pgdd[0]}${d}${pgdd[1]}  \\right) \\times\\left(${e}x${signef}${f}\\right)$<br>
$\\phantom{f(x)}=${coef}\\times\\left( ${ac}x^2 ${signead}${ad}x ${signebc}${bc}x ${signebd}${bd} \\right) \\times\\left(${e}x${signef}${f}\\right)$<br>
$\\phantom{f(x)}=${coef}\\times\\left( ${ac}x^2 ${signeadbc}${adbc}x ${signebd}${bd}\\right)   \\times\\left(${e}x${signef}${f}\\right)$<br>
$\\phantom{f(x)}=${coef}\\times\\left( ${ac}x^2\\times ${pgde[0]}${e}x${pgde[1]} ${signeac}${ac}x^2\\times ${pgdf[0]}${f}${pgdf[1]} ${signeadbc}${adbc}x\\times ${pgde[0]}${e}x${pgde[1]} ${signeadbc}${adbc}x\\times ${pgdf[0]}${f}${pgdf[1]} ${signebd}${bd}\\times ${pgde[0]}${e}x${pgde[1]} ${signebd}${bd}\\times${pgdf[0]}${f}${pgdf[1]} \\right)$<br>
$\\phantom{f(x)}=${coef}\\times\\left( ${ace}x^3 ${signeacf}${acf}x^2 ${signeadbce}${adbce}x^2 ${signeadbcf}${adbcf}x ${signebde}${bde}x ${signebdf}${bdf} \\right)$<br>
$\\phantom{f(x)}=${coef}\\times\\left(${ace}x^3 ${signeparx2}${parx2}x^2 ${signeparx}${parx}x ${signebdf}${bdf} \\right)$<br>
$\\phantom{f(x)}=${coef}\\times ${pgdace[0]}${ace}x^3${pgdace[1]} ${signecoef}${coef}\\times ${pgdparx2[0]}${parx2}x^2${pgdparx2[1]} ${signecoef}${coef}\\times ${pgdparx[0]}${parx}x${pgdparx[1]} ${signecoef}${coef}\\times ${pgdbdf[0]}${bdf}${pgdbdf[1]}$<br>
$\\phantom{f(x)}=${repx3}x^3 ${signerepx2}${repx2}x^2 ${signerepx}${repx}x ${signerepreels}${repreels}$`;

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
    location.reload();
})

accueil.addEventListener('click', () => {
    location.href = "../../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../../Menus/Menu1ST.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../Menus/Menu1STfonctionsdegre3.html";
})

