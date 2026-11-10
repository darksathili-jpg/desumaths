function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function signe(a) {
    let s;
    if (a<0) {s='';} else {s='+';}
    return s;
}

function solutions(a,b,c,d,e,f) {
    let reponsenumx;
    let reponsedenomx;
    let reponsenumy;
    let reponsedenomy;
    let reponses;
    if (a*e-b*d != 0) {reponsenumx=c*e-f*b; reponsedenomx=a*e-d*b; reponsenumy=c*d-a*f; reponsedenomy=b*d-a*e;}
    return  reponses=[reponsenumx,reponsedenomx,reponsenumy,reponsedenomy];
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }

function signefraction(a,b) {
    let signe;
    let rep;
    if (a>=0 && b>0) {signe='';}
    if (a>0 && b<0) {signe='-';}
    if (a<=0 && b<0) {signe='';}
    if (a<0 && b>0) {signe='-';}
    if (a<0) {a=-a;}
    if (b<0) {b=-b;}
    return rep = [a,b,signe];
}

function cas(a,b,c,d,e,f) {
    let det = a*e-b*d;
    let conf = a*f-d*c;
    let rep;
    if (det !=0) {rep=0;}
    else if(conf==0) {rep=1;}
    else {rep=2;}
    return rep;
}

function plusmoins(a) {
    let rep;
    let b=nbrealéa(1,2);
    if (b==1) {rep=a;} else {rep=-a;}
    return rep;
}

function repsimple(a,b,c) {
    let rep;
    if (b==1) {rep='='+c+a;} else {rep='';}
    return rep;
}

function signmulti(a,d) {
    let rep;
    if (a>0 && d>0) {rep=[-d,a];}
    if (a<0 && d<0) {rep=[-d,a];}
    if (a>0 && d<0) {rep=[d,-a];}
    if (a<0 && d>0) {rep=[d,-a];}
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

let a = plusmoins(nbrealéa(1,9));
let b = nbrealéa(-9,9);
let c = nbrealéa(-9,9);
let d = plusmoins(nbrealéa(1,9));
let e = nbrealéa(-9,9);
let f = nbrealéa(-9,9);
let s1 = signe(b);
let s2 = signe(e);
let det = a*e-b*d;
let rep = solutions(a,b,c,d,e,f);
let xsimpl = simplifierfraction(rep[0],rep[1]);
let ysimpl = simplifierfraction(rep[2],rep[3]);
let signex = signefraction(xsimpl[0],xsimpl[1]);
let signey = signefraction(ysimpl[0],ysimpl[1],)
let k = cas(a,b,c,d,e,f);
let reponsesimplifieex = repsimple(signex[0],signex[1],signex[2]);
let reponsesimplifieey = repsimple(signey[0],signey[1],signey[2]);
let multi = signmulti(a,d);
let s_1 = signe(b*multi[0]);
let s_2 = signe(e*multi[1]);
let coefy = b*multi[0]+e*multi[1];
let r = c*multi[0]+f*multi[1];
let sopp1 = signe(-b);
let sopp2 = signe(-a);
let s3 = signe(c);
let presquexnum = a*c*e-a*b*f;
let presquexdenom = a*e-b*d;
let presquex = simplifierfraction(presquexnum,presquexdenom);
let pgd1 = parenthesesgd(multi[0]);
let pgd2 = parenthesesgd(multi[1]);
let pgd3 = parenthesesgd(a);

let listeSolutions = [`$x=\\dfrac{${signex[2]} ${signex[0]}}{${signex[1]}} ${reponsesimplifieex}$ et $y=\\dfrac{${signey[2]} ${signey[0]}}{${signey[1]}} ${reponsesimplifieey}$`,
`Les droites sont confondues`,
`Pas de solution. $S = \\varnothing$`];

let listeCorrections = [`$\\left\\{ \\begin{array}{rcl} ${a}x ${s1} ${b}y & = & ${c} ~(L_1) \\\\ ${d}x ${s2} ${e}y & = & ${f}~(L_2) \\end{array} \\right. \\iff \\left\\{ \\begin{array}{rcl} ${a*multi[0]}x ${s_1} ${b*multi[0]}y & = & ${c*multi[0]} \\hspace{1cm} \\left(L'_1=L_1\\times ${pgd1[0]} ${multi[0]} ${pgd1[1]}\\right) \\\\ ${d*[multi[1]]}x ${s_2} ${e*multi[1]}y & = & ${f*multi[1]} \\hspace{1cm} \\left(L'_2=L_2\\times ${pgd2[0]} ${multi[1]} ${pgd2[1]} \\right) \\end{array} \\right.$</br></br>
En additionnant $L'_1$ et $L'_2$ on obtient : $${coefy}y = ${r}$ donc $\\boxed{y=\\dfrac{${r}}{${coefy}}=\\dfrac{${signey[2]} ${signey[0]}}{${signey[1]}} ${reponsesimplifieey}}$</br></br>
Ensuite on remplace $y$ par $\\dfrac{${signey[2]} ${signey[0]}}{${signey[1]}} ${reponsesimplifieey}$ dans $L_1$ : $${a}x ${s1} ${b} \\times \\dfrac{${signey[2]} ${signey[0]}}{${signey[1]}} = ${c}$</br></br>
Donc $${a}x  = ${c} ${sopp1} ${-b} \\times \\dfrac{${signey[2]} ${signey[0]}}{${signey[1]}}=\\dfrac{${presquex[0]}}{${presquex[1]}}$ donc $x=\\dfrac{${presquex[0]}}{${presquex[1]}} : ${pgd3[0]} ${a} ${pgd3[1]} = \\boxed{\\dfrac{${signex[2]} ${signex[0]}}{${signex[1]}} ${reponsesimplifieex}=x}$`,
`$\\left\\{ \\begin{array}{rcl} ${a}x ${s1} ${b}y & = & ${c}~(L_1) \\\\ ${d}x ${s2} ${e}y & = & ${f}~(L_2) \\end{array} \\right. \\iff \\left\\{ \\begin{array}{rcl} ${a*multi[0]}x ${s_1} ${b*multi[0]}y & = & ${c*multi[0]} \\hspace{1cm} \\left(L'_1=L_1\\times (${multi[0]})\\right) \\\\ ${d*[multi[1]]}x ${s_2} ${e*multi[1]}y & = & ${f*multi[1]} \\hspace{1cm} \\left(L'_2=L_2\\times (${multi[1]})\\right) \\end{array} \\right.}$</br></br>
En additionnant $L'_1$ et $L'_2$ on obtient : ${coefy}y = ${r} donc les droites sont confondues.</br>
On isole alors $y$ dans $L_1$ : $${a}x ${s1} ${b}y = ${c} \\iff ${s1} ${b}y = ${sopp2} ${a}x ${s3} ${c} \\iff y = \\dfrac{${sopp2} ${a}x ${s3} ${c}}{${s1} ${b}}$</br>
$S = \\left\\{\\left( x~;~\\dfrac{${sopp2} ${a}x ${s3} ${c}}{${s1} ${b}} \\right) / x \\in \\mathbb{R} \\right\\}$`,
`$\\left\\{ \\begin{array}{rcl} ${a}x ${s1} ${b}y & = & ${c}~(L_1) \\\\ ${d}x ${s2} ${e}y & = & ${f}~(L_2) \\end{array} \\right. \\iff \\left\\{ \\begin{array}{rcl} ${a*multi[0]}x ${s_1} ${b*multi[0]}y & = & ${c*multi[0]} \\hspace{1cm} \\left(L'_1=L_1\\times (${multi[0]})\\right) \\\\ ${d*[multi[1]]}x ${s_2} ${e*multi[1]}y & = & ${f*multi[1]} \\hspace{1cm} \\left(L'_2=L_2\\times (${multi[1]})\\right) \\end{array} \\right.$</br></br>
En additionnant $L'_1$ et $L'_2$ on obtient : $${coefy}y = ${r}$ ce qui est impossible. $\\boxed{S = \\varnothing}$`]
                                
let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


enonce.innerHTML = `Résoudre le système d'équations suivant : $\\left\\{ \\begin{array}{rcl} ${a}x ${s1} ${b}y & = & ${c} \\\\ ${d}x ${s2} ${e}y & = & ${f} \\end{array} \\right.$`
solution.innerHTML = listeSolutions[k]
correctiond.innerHTML = listeCorrections[k]

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
    location.href = "../../../Menus/MenuSecondeSystemes.html";
})