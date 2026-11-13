function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function nbreouoppose(a) {
    let rep;
    let choix = nbrealéa(1,2);
    if (choix==1) {rep=a;} else {rep=-a;}
    return rep;
}

function rienplus(a) {
    let rep;
    if (a<0) {rep='';} else {rep='+';}
    return rep;
}

function plusmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}

function rienmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='';}
    return rep;
}

function parenthesegd(a) {
    let rep;
    let pg;
    let pd;
    if (a<0) {pg=`\\left(`;} else {pg='';}
    if (a<0) {pd=`\\right)`;} else {pd='';}
    return rep = [pg,pd];
}

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }

function fracsimp(num,denom) {
    let rep=[num,denom];
    if (num<0 && denom<0) {rep=[-num,-denom];}
    if (num>0 && denom<0) {rep=[num,-denom];}
    if (num<0 && denom>0) {rep=[-num,denom];}
    return rep; 
}

function fracoupasfrac(num,denom) {
    let rep;
    if (denom==1) {rep=`${num}`;} else {rep=`\\dfrac{${num}}{${denom}}`;}
    return rep;
}

function simpfracmax(num,denom){
    let rep;
    let frac1 = simplifierfraction(num,denom);
    let frac2 = fracsimp(frac1[0],frac1[1]);
    let frac3 = fracoupasfrac(frac2[0],frac2[1]);
    return rep = frac3;
}

function unoupasun(a) {
    let rep;
    if (a==1) {rep=``;} else {
        if (a==-1) {rep=`-`;} else {rep=`${a}`;}}
    return rep;
}

function coefdiff(a) {
    let rep = nbreouoppose(nbrealéa(1,10));
    while (a==rep) {rep = nbreouoppose(nbrealéa(1,10));}
    return rep;
}

function cas(denom) {
    let k;
    if (denom==1) {k=1;}
    else {k=0;}
    return k;
}

function repfrac(num1,denom1,num2,denom2) {
    let rep;
    if (num1==num2 && denom1==denom2) {rep=``;} else {rep=`=\\dfrac{${num2}}{${denom2}}`;}
    return rep;
}


const REGEX_GROUPS = /(\d)(?=(\d\d\d)+(?!\d))/g
// Le délimiteur FR est le _Narrow No-Break Space_, eh oui !
function useGrouping(int, delimiter = '\u202f') {
  return int.toString().replace(REGEX_GROUPS, `$1${delimiter}`)
}

let xA1 = nbrealéa(-10,10);
let yA1 = nbreouoppose(nbrealéa(1,10));
let zA1 = nbreouoppose(nbrealéa(1,10));
let xu = nbreouoppose(nbrealéa(1,10));
let opxu = -xu;
let sopxu = rienplus(opxu);
let sxu = rienplus(xu);
let xuf = unoupasun(xu);
let yu = nbreouoppose(nbrealéa(1,10));
let syu = rienplus(yu);
let yuf = unoupasun(yu);
let zu = nbreouoppose(nbrealéa(1,10));
let szu = rienplus(zu);
let zuf = unoupasun(zu);
let t = nbreouoppose(nbrealéa(1,10));
let pgdt = parenthesegd(t);
let xB = xA1+xu*t;
let yB = yA1+yu*t;
let zB = zA1+zu*t;
let xA2 = nbreouoppose(nbrealéa(1,10));
let yA2 = nbreouoppose(nbrealéa(1,10));
let zA2 = nbreouoppose(nbrealéa(1,10));
let xvi = nbreouoppose(nbrealéa(1,10));
let xv = Math.round(xvi*(xB-xA2));
let sxv = rienplus(xv);
let xvf = unoupasun(xv);
let opxvi = -xv;
let opxv = Math.round(opxvi*(xB-xA2));
let sopxv = rienplus(opxvi);
let opxvf = unoupasun(opxvi);
let t2 = (xB-xA2)/xvi;
let yv = Math.round(((yB-yA2)/t2)*(xB-xA2));
let syv = rienplus(yv);
let yvf = unoupasun(yv);
let opyv = -yv;
let sopyv = rienplus(opyv);
let opyvf = unoupasun(opyv);
let zv = Math.round(((zB-zA2)/t2)*(xB-xA2));
let szv = rienplus(zv);
let zvf = unoupasun(zv);
let opzv = -zv;
let sopzv = rienplus(opzv);
let opzvf = unoupasun(opzv);
let xdroite = xA2-xA1;
let ydroite = yA2-yA1;
let zdroite = zA2-zA1;
let nk = yu*opxvi-xu*opyv;
let numk = yu*xdroite-xu*ydroite;
let k = numk/nk;
let pgdk = parenthesegd(k);
let sk = rienmoins(numk/nk);
let ksimp = simpfracmax(numk,nk);

let zA1k1 = zA1+nbreouoppose(nbrealéa(1,5));
let zdroitek1 = zA2-zA1k1;
let ligne3verif = zu*t-zvf*k;

let alpha = nbreouoppose(nbrealéa(1,10));
let xvk2 = alpha*xu;
let sxvk2 = rienplus(xvk2);
let xvk2f = unoupasun(xvk2);
let yvk2 = alpha*yu;
let syvk2 = rienplus(yvk2);
let yvk2f = unoupasun(yvk2);
let zvk2 = alpha*zu;
let szvk2 = rienplus(zvk2);
let zvk2f = unoupasun(zvk2);
let k2 = nbreouoppose(nbrealéa(1,10));
let xA2k2 = xA1-xvk2*k2;
let yA2k2 = yA1-yvk2*k2;
let zA2k2 = zA1-zvk2*k2;

let k3 = k2+nbreouoppose(nbrealéa(1,10));
let zA2k3 = zA1-zvk2*k3;

let cask = nbrealéa(0,3);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


let listeenonces = [`L'espace est rapporté à un repère $\\left(O~;\\overrightarrow{i},\\overrightarrow{j},\\overrightarrow{k}\\right).$<br>
Déterminer la position relative des droites $d_1$ et $d_2$ dont on donne ci-dessous des repésentations paramétriques :<br>
$d_1 : \\left\\{\\begin{array}{rcl} x & = & ${xA1}${sxu}${xuf}t \\\\ y & = & ${yA1}${syu}${yuf}t \\\\ z & = & ${zA1}${szu}${zuf}t \\end{array}\\right. (t\\in\\mathbb{R})$ et 
$d_2 : \\left\\{\\begin{array}{rcl} x & = & ${xA2}${sxv}${xvf}k \\\\ y & = & ${yA2}${syv}${yvf}k \\\\ z & = & ${zA2}${szv}${zvf}k \\end{array}\\right. (k\\in\\mathbb{R})$`,
`L'espace est rapporté à un repère $\\left(O~;\\overrightarrow{i},\\overrightarrow{j},\\overrightarrow{k}\\right).$<br>
Déterminer la position relative des droites $d_1$ et $d_2$ dont on donne ci-dessous des repésentations paramétriques :<br>
$d_1 : \\left\\{\\begin{array}{rcl} x & = & ${xA1}${sxu}${xuf}t \\\\ y & = & ${yA1}${syu}${yuf}t \\\\ z & = & ${zA1k1}${szu}${zuf}t \\end{array}\\right. (t\\in\\mathbb{R})$ et 
$d_2 : \\left\\{\\begin{array}{rcl} x & = & ${xA2}${sxv}${xvf}k \\\\ y & = & ${yA2}${syv}${yvf}k \\\\ z & = & ${zA2}${szv}${zvf}k \\end{array}\\right. (k\\in\\mathbb{R})$`,
`L'espace est rapporté à un repère $\\left(O~;\\overrightarrow{i},\\overrightarrow{j},\\overrightarrow{k}\\right).$<br>
Déterminer la position relative des droites $d_1$ et $d_2$ dont on donne ci-dessous des repésentations paramétriques :<br>
$d_1 : \\left\\{\\begin{array}{rcl} x & = & ${xA1}${sxu}${xuf}t \\\\ y & = & ${yA1}${syu}${yuf}t \\\\ z & = & ${zA1}${szu}${zuf}t \\end{array}\\right. (t\\in\\mathbb{R})$ et 
$d_2 : \\left\\{\\begin{array}{rcl} x & = & ${xA2k2}${sxvk2}${xvk2f}k \\\\ y & = & ${yA2k2}${syvk2}${yvk2f}k \\\\ z & = & ${zA2k2}${szvk2}${zvk2f}k \\end{array}\\right. (k\\in\\mathbb{R})$`,
`L'espace est rapporté à un repère $\\left(O~;\\overrightarrow{i},\\overrightarrow{j},\\overrightarrow{k}\\right).$<br>
Déterminer la position relative des droites $d_1$ et $d_2$ dont on donne ci-dessous des repésentations paramétriques :<br>
$d_1 : \\left\\{\\begin{array}{rcl} x & = & ${xA1}${sxu}${xuf}t \\\\ y & = & ${yA1}${syu}${yuf}t \\\\ z & = & ${zA1}${szu}${zuf}t \\end{array}\\right. (t\\in\\mathbb{R})$ et 
$d_2 : \\left\\{\\begin{array}{rcl} x & = & ${xA2k2}${sxvk2}${xvk2f}k \\\\ y & = & ${yA2k2}${syvk2}${yvk2f}k \\\\ z & = & ${zA2k3}${szvk2}${zvk2f}k \\end{array}\\right. (k\\in\\mathbb{R})$`];

let listecorrections = [`Le vecteur $\\overrightarrow{u}\\left(\\begin{array}{c}${xu}\\\\${yu}\\\\${zu}\\end{array}\\right)$ est un vecteur directeur directeur de $d_1$ et le vecteur $\\overrightarrow{v}\\left(\\begin{array}{c}${xv}\\\\${yv}\\\\${zv}\\end{array}\\right)$ est un vecteur directeur de $d_2$. <br>
Ces deux vecteurs ne sont pas colinéaires car $\\dfrac{${xv}}{${xu}}\\neq\\dfrac{${yv}}{${yu}}\\neq\\dfrac{${zv}}{${zu}}$.<br>
Les droites $d_1$ et $d_2$ ne sont donc ni parallèles ni confondues.<br>
Elles peuvent donc être sécantes ou non coplanaires.<br>
Pour savoir si elles sont sécantes on va essayer de résoudre le système suivant :<br>
$\\left\\{\\begin{array}{rcl}${xA1}${sxu}${xuf}t & = & ${xA2}${sxv}${xvf}k \\\\ ${yA1}${syu}${yuf}t & = & ${yA2}${syv}${yvf}k \\\\ ${zA1}${szu}${zuf}t & = & ${zA2}${szv}${zvf}k \\end{array}\\right.
\\iff \\left\\{\\begin{array}{rcl}${xuf}t${sopxv}${opxvf}k & = & ${xdroite} \\\\ ${yuf}t${sopyv}${opyvf}k & = & ${ydroite} \\\\ ${zuf}t${sopzv}${opzvf}k & = & \\boxed{${zdroite}} \\end{array}\\right.$<br>
On va résoudre tout d'abord le système formé par les deux premières lignes : $\\left\\{\\begin{array}{rcll}${xuf}t${sopxv}${opxvf}k & = & ${xdroite} & (L_1) \\\\ ${yuf}t${sopyv}${opyvf}k & = & ${ydroite} & (L_2)\\end{array}\\right.$.<br>
En effctuant l'opération : $${yu}\\times L_1 ${sopxu}${opxu}\\times L_2$ on obtient : $${nk}k=${numk}$ donc $k=\\dfrac{${numk}}{${nk}}=${sk}${ksimp} $<br>
On remplace ensuite $k$ par $${sk}${ksimp}$ dans $L_1$ et on obtient $t=${t}$.<br>
On remplace ensuite $t$ par $${t}$ et $k$ par $${sk}${ksimp}$ dans la troisième ligne qui n'a pas encore été utilisée :<br>
$${zu}\\times ${pgdt[0]}${t}${pgdt[1]}${sopzv}${opzvf}\\times ${pgdk[0]}${sk}${ksimp}${pgdk[1]}=\\boxed{${zdroite}}$ donc $t=${t}$ et $k=${sk}${ksimp}$ sont les solutions de ce système.<br>
Les droites sont donc sécantes en un point $B$ qui a pour coordonnées :<br>
$\\left\\{\\begin{array}{rclclcl} x_B & = & ${xA1}${sxu}${xuf}t & = & ${xA1}${sxu}${xuf}\\times ${pgdt[0]}${t}${pgdt[1]} & = & ${xB} \\\\ y_B & = & ${yA1}${syu}${yuf}t & = & ${yA1}${syu}${yuf}\\times ${pgdt[0]}${t}${pgdt[1]} & = & ${yB} \\\\ z_B & = & ${zA1}${szu}${zuf}t & = & ${zA1}${szu}${zuf}\\times ${pgdt[0]}${t}${pgdt[1]} & = & ${zB} \\end{array}\\right.$<br>
Donc $B\\left(${xB}~;${yB}~;${zB} \\right)$`,
`Le vecteur $\\overrightarrow{u}\\left(\\begin{array}{c}${xu}\\\\${yu}\\\\${zu}\\end{array}\\right)$ est un vecteur directeur directeur de $d_1$ et le vecteur $\\overrightarrow{v}\\left(\\begin{array}{c}${xv}\\\\${yv}\\\\${zv}\\end{array}\\right)$ est un vecteur directeur de $d_2$. <br>
Ces deux vecteurs ne sont pas colinéaires car $\\dfrac{${xv}}{${xu}}\\neq\\dfrac{${yv}}{${yu}}\\neq\\dfrac{${zv}}{${zu}}$.<br>
Les droites $d_1$ et $d_2$ ne sont donc ni parallèles ni confondues.<br>
Elles peuvent donc être sécantes ou non coplanaires.<br>
Pour savoir si elles sont sécantes on va essayer de résoudre le système suivant :<br>
$\\left\\{\\begin{array}{rcl}${xA1}${sxu}${xuf}t & = & ${xA2}${sxv}${xvf}k \\\\ ${yA1}${syu}${yuf}t & = & ${yA2}${syv}${yvf}k \\\\ ${zA1k1}${szu}${zuf}t & = & ${zA2}${szv}${zvf}k \\end{array}\\right.
\\iff \\left\\{\\begin{array}{rcl}${xuf}t${sopxv}${opxvf}k & = & ${xdroite} \\\\ ${yuf}t${sopyv}${opyvf}k & = & ${ydroite} \\\\ ${zuf}t${sopzv}${opzvf}k & = & \\boxed{${zdroitek1}} \\end{array}\\right.$<br>
On va résoudre tout d'abord le système formé par les deux premières lignes : $\\left\\{\\begin{array}{rcll}${xuf}t${sopxv}${opxvf}k & = & ${xdroite} & (L_1) \\\\ ${yuf}t${sopyv}${opyvf}k & = & ${ydroite} & (L_2)\\end{array}\\right.$.<br>
En effctuant l'opération : $${yu}\\times L_1 ${sopxu}${opxu}\\times L_2$ on obtient : $${nk}k=${numk}$ donc $k=\\dfrac{${numk}}{${nk}}=${sk}${ksimp} $<br>
On remplace ensuite $k$ par $${sk}${ksimp}$ dans $L_1$ et on obtient $t=${t}$.<br>
On remplace ensuite $t$ par $${t}$ et $k$ par $${sk}${ksimp}$ dans la troisième ligne qui n'a pas encore été utilisée :<br>
$${zu}\\times ${pgdt[0]}${t}${pgdt[1]}${sopzv}${opzvf}\\times ${pgdk[0]}${sk}${ksimp}${pgdk[1]}=${ligne3verif}\\neq\\boxed{${zdroitek1}}$ donc le système n'admet pas de solution.<br>
Les droites $d_1$ et $d_2$ sont donc non coplanaires.`,
`Le vecteur $\\overrightarrow{u}\\left(\\begin{array}{c}${xu}\\\\${yu}\\\\${zu}\\end{array}\\right)$ est un vecteur directeur directeur de $d_1$ et le vecteur $\\overrightarrow{v}\\left(\\begin{array}{c}${xvk2}\\\\${yvk2}\\\\${zvk2}\\end{array}\\right)$ est un vecteur directeur de $d_2$. <br>
Ces deux vecteurs sont colinéaires car $\\dfrac{${xvk2}}{${xu}}=\\dfrac{${yvk2}}{${yu}}=\\dfrac{${zvk2}}{${zu}}=${alpha}$.<br>
Les droites $d_1$ et $d_2$ sont donc parallèles ou confondues.<br>
Pour savoir si elles sont confondues on doit donc vérifier si un point de $d_1$ appartient à $d_2$.<br>
Le point $A_1(${xA1}~;${yA1}~;${zA1})\\in d_1$.<br>
Si $A_1\\in d_2$ alors $\\left\\{\\begin{array}{rclcl} x_{A_1} & = & ${xA2k2}${sxvk2}${xvk2f}k & = & ${xA1} \\\\ y_{A_1} & = & ${yA2k2}${syvk2}${yvk2f}k & = & ${yA1} \\\\ z_{A_1} & = & ${zA2k2}${szvk2}${zvk2f}k & = & ${zA1} \\end{array}\\right.$<br>
En résolvant les équations ainsi créées pour chacune des trois lignes, on trouve à chaque fois $k=${k2}$ donc $A_1\\in d_2$. <br>
Les droites $d_1$ et $d_2$ sont donc confondues.`,
`Le vecteur $\\overrightarrow{u}\\left(\\begin{array}{c}${xu}\\\\${yu}\\\\${zu}\\end{array}\\right)$ est un vecteur directeur directeur de $d_1$ et le vecteur $\\overrightarrow{v}\\left(\\begin{array}{c}${xvk2}\\\\${yvk2}\\\\${zvk2}\\end{array}\\right)$ est un vecteur directeur de $d_2$. <br>
Ces deux vecteurs sont colinéaires car $\\dfrac{${xvk2}}{${xu}}=\\dfrac{${yvk2}}{${yu}}=\\dfrac{${zvk2}}{${zu}}=${alpha}$.<br>
Les droites $d_1$ et $d_2$ sont donc parallèles ou confondues.<br>
Pour savoir si elles sont confondues on doit donc vérifier si un point de $d_1$ appartient à $d_2$.<br>
Le point $A_1(${xA1}~;${yA1}~;${zA1})\\in d_1$.<br>
Si $A_1\\in d_2$ alors $\\left\\{\\begin{array}{rclcl} x_{A_1} & = & ${xA2k2}${sxvk2}${xvk2f}k & = & ${xA1} \\\\ y_{A_1} & = & ${yA2k2}${syvk2}${yvk2f}k & = & ${yA1} \\\\ z_{A_1} & = & ${zA2k3}${szvk2}${zvk2f}k & = & ${zA1} \\end{array}\\right.$<br>
En résolvant les équations ainsi créées pour chacune des deux premières lignes, on trouve $k=${k2}$ mais pour la troisième ligne on trouve $k=${k3}$ donc $A_1\\notin d_2$. <br>
Les droites $d_1$ et $d_2$ sont donc strictement parallèles.`];
 
let listesolutions = [`Les droites sont sécantes en $B\\left(${xB}~;${yB}~;${zB} \\right)$.`,
`Les droites $d_1$ et $d_2$ ne sont pas coplanaires.`,
`Les droites $d_1$ et $d_2$ sont confondues.`,
`Les droites $d_1$ et $d_2$ sont strictement parallèles.`];

enonce.innerHTML = listeenonces[cask];

solution.innerHTML = listesolutions[cask];

correctiond.innerHTML = listecorrections[cask];


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
    location.href = "../../../Menus/MenuTaleSpe.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuTaleEspace.html";
})