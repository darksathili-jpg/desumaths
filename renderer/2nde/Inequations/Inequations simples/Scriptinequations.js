function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

function positifnegatif(a) {
    let choix=nbrealéa(1,2);
    let rep;
    if (choix==1) {rep=a;} else {rep=-a;}
    return rep;
}

function supinf(choix,a) {
    let rep;
    if (choix==0 && a>0) {rep='<';}
    if (choix==0 && a<0) {rep='\\color{red}{>}';}
    if (choix==1 && a>0) {rep=`\\leqslant`;}
    if (choix==1 && a<0) {rep=`\\color{red}{\\geqslant}`;}
    if (choix==2 && a>0) {rep='>';}
    if (choix==2 && a<0) {rep='\\color{red}{<}';}
    if (choix==3 && a>0) {rep=`\\geqslant`;}
    if (choix==3 && a<0) {rep=`\\color{red}{\\leqslant}`;}
    return rep;
}

function signe(b) {
    let rep;
    if (b>=0) {rep='+';} else {rep='';}
    return rep;
}

function plusmoins(b) {
    let rep;
    if (b==``) {rep='+';} else {rep='-';}
    return rep;
}

function valabs(b) {
    let rep;
    if (b<0) {rep=-b;} else {rep=b;}
    return rep;
}

function solutions(choix,a,d) {
    let rep;
    if (choix==0 && a>0) {rep=`\\left] -\\infty~;~\\dfrac{${d}}{${a}} \\right[`;}
    if (choix==0 && a<0) {rep=`\\left] \\dfrac{${d}}{${a}}~;~+\\infty \\right[`;}
    if (choix==1 && a>0) {rep=`\\left] -\\infty~;~\\dfrac{${d}}{${a}} \\right]`;}
    if (choix==1 && a<0) {rep=`\\left[ \\dfrac{${d}}{${a}}~;~+\\infty \\right[`;}
    if (choix==2 && a>0) {rep=`\\left] \\dfrac{${d}}{${a}}~;~+\\infty \\right[`;}
    if (choix==2 && a<0) {rep=`\\left] -\\infty~;~\\dfrac{${d}}{${a}} \\right[`;}
    if (choix==3 && a>0) {rep=`\\left[ \\dfrac{${d}}{${a}}~;~+\\infty \\right[`;}
    if (choix==3 && a<0) {rep=`\\left] -\\infty~;~\\dfrac{${d}}{${a}} \\right]`;}
    return rep;
}

function solutionssimplifiees(choix,a,d,simpfrac) {
    let rep;
    let frac=simpfrac[0]/simpfrac[1];
    let fracabs = fracsimp(simpfrac[0],simpfrac[1]);
    let sfrac = rienmoins(d/a); 
    if (choix==0 && a>0 && d!=simpfrac[0]) {rep=`=\\left] -\\infty~;~${sfrac}\\dfrac{${fracabs[0]}}{${fracabs[1]}} \\right[`;}
    if (choix==0 && a>0 && d!=simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] -\\infty~;~${frac} \\right[`;}
    if (choix==0 && a>0 && d==simpfrac[0]) {rep=``;}
    if (choix==0 && a>0 && d==simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] -\\infty~;~${frac} \\right[`;}
    if (choix==0 && a<0 && d!=simpfrac[0]) {rep=`=\\left] ${sfrac}\\dfrac{${fracabs[0]}}{${fracabs[1]}}~;~+\\infty \\right[`;}
    if (choix==0 && a<0 && d!=simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] ${frac}~;~+\\infty \\right[`;}
    if (choix==0 && a<0 && d==simpfrac[0]) {rep=``;}
    if (choix==0 && a<0 && d==simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] ${frac}~;~+\\infty \\right[`;}
    if (choix==1 && a>0 && d!=simpfrac[0]) {rep=`=\\left] -\\infty~;~${sfrac}\\dfrac{${fracabs[0]}}{${fracabs[1]}} \\right]`;}
    if (choix==1 && a>0 && d!=simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] -\\infty~;~${frac} \\right]`;}
    if (choix==1 && a>0 && d==simpfrac[0]) {rep=``;}
    if (choix==1 && a>0 && d==simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] -\\infty~;~${frac} \\right]`;}
    if (choix==1 && a<0 && d!=simpfrac[0]) {rep=`=\\left[ ${sfrac}\\dfrac{${fracabs[0]}}{${fracabs[1]}}~;~+\\infty \\right[`;}
    if (choix==1 && a<0 && d!=simpfrac[0] && simpfrac[1]==1) {rep=`=\\left[ ${frac}~;~+\\infty \\right[`;}
    if (choix==1 && a<0 && d==simpfrac[0]) {rep=``;}
    if (choix==1 && a<0 && d==simpfrac[0] && simpfrac[1]==1) {rep=`=\\left[ ${frac}~;~+\\infty \\right[`;}
    if (choix==2 && a>0 && d!=simpfrac[0]) {rep=`=\\left] ${sfrac}\\dfrac{${fracabs[0]}}{${fracabs[1]}}~;~+\\infty \\right[`;}
    if (choix==2 && a>0 && d!=simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] ${frac}~;~+\\infty \\right[`;}
    if (choix==2 && a>0 && d==simpfrac[0]) {rep=``;}
    if (choix==2 && a>0 && d==simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] ${frac}~;~+\\infty \\right[`;}
    if (choix==2 && a<0 && d!=simpfrac[0]) {rep=`=\\left] -\\infty~;~${sfrac}\\dfrac{${fracabs[0]}}{${fracabs[1]}} \\right[`;}
    if (choix==2 && a<0 && d!=simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] -\\infty~;~${frac} \\right[`;}
    if (choix==2 && a<0 && d==simpfrac[0]) {rep=``;}
    if (choix==2 && a<0 && d==simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] -\\infty~;~${frac} \\right[`;}
    if (choix==3 && a>0 && d!=simpfrac[0]) {rep=`=\\left[ ${sfrac}\\dfrac{${fracabs[0]}}{${fracabs[1]}}~;~+\\infty \\right[`;}
    if (choix==3 && a>0 && d!=simpfrac[0] && simpfrac[1]==1) {rep=`=\\left[ ${frac}~;~+\\infty \\right[`;}
    if (choix==3 && a>0 && d==simpfrac[0]) {rep=``;}
    if (choix==3 && a>0 && d==simpfrac[0] && simpfrac[1]==1) {rep=`=\\left[ ${frac}~;~+\\infty \\right[`;}
    if (choix==3 && a<0 && d!=simpfrac[0]) {rep=`=\\left] -\\infty~;~${sfrac}\\dfrac{${fracabs[0]}}{${fracabs[1]}} \\right]`;}
    if (choix==3 && a<0 && d!=simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] -\\infty~;~${frac} \\right]`;}
    if (choix==3 && a<0 && d==simpfrac[0]) {rep=``;}
    if (choix==3 && a<0 && d==simpfrac[0] && simpfrac[1]==1) {rep=`=\\left] -\\infty~;~${frac} \\right]`;}
    return rep;
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

function aplusmoins(a) {
    let rep;
    let rep1;
    let rep2;
    let rep3;
    if (a<0) {rep1='';rep2='';rep3='<';}
    else {rep1='ne';rep2='pas';rep3='>';}
    return rep=[rep1,rep2,rep3];
}

function ajoutsoust(b) {
    let rep;
    if (b<0) {rep='ajoute';} else {rep='soustrait';}
    return rep;
}

let a = positifnegatif(nbrealéa(1,20));
let b = nbrealéa(-20,20);
let c = nbrealéa(-20,20);
let sig = signe(b);
let oppsig = plusmoins(sig);
let d = c-b;
let valabsb = valabs(b);
let choix = nbrealéa(0,3);
let infsup = supinf(choix,a);
let sol = solutions(choix,a,d);
let simpfrac = simplifierfraction(d,a);
let repsimp = solutionssimplifiees(choix,a,d,simpfrac);
let mots = aplusmoins(a);
let ajso = ajoutsoust(b);

let listeenonces = [`Résoudre dans $\\mathbb{R}$ l'inéquation suivante : $${a}x ${sig} ${b} < ${c}$`,
`Résoudre dans $\\mathbb{R}$ l'inéquation suivante : $${a}x ${sig} ${b} \\leqslant ${c}$`,
`Résoudre dans $\\mathbb{R}$ l'inéquation suivante : $${a}x ${sig} ${b} > ${c}$`,
`Résoudre dans $\\mathbb{R}$ l'inéquation suivante : $${a}x ${sig} ${b} \\geqslant ${c}$`];

let listeSolutions = [];

let listeCorrections = [`$\\begin{array}{lrcll} & ${a}x ${sig} ${b} & < & ${c} & \\\\
 \\iff & ${a}x & < & ${c} ${oppsig} ${valabsb} & \\text{(on ${ajso} ${valabsb} à chaque membre de l'inéquation)} \\\\
 \\iff & ${a}x & < & ${d} & \\\\
 \\iff & x & ${infsup} & \\dfrac{${d}}{${a}} & \\text{(on ${mots[0]} change ${mots[1]} le sens de l'inéquation car on divise par}~${a} ${mots[2]} 0) \\end{array}$  </br><br>`,
`$\\begin{array}{lrcll} & ${a}x ${sig} ${b} & \\leqslant & ${c} & \\\\
 \\iff & ${a}x & \\leqslant & ${c} ${oppsig} ${valabsb} & \\text{(on ${ajso} ${valabsb} à chaque membre de l'inéquation)} \\\\
 \\iff & ${a}x & \\leqslant & ${d} & \\\\
 \\iff & x & ${infsup} & \\dfrac{${d}}{${a}} & \\text{(on ${mots[0]} change ${mots[1]} le sens de l'inéquation car on divise par}~${a} ${mots[2]} 0) \\end{array}$  </br><br>`,
`$\\begin{array}{lrcll} & ${a}x ${sig} ${b} & > & ${c} & \\\\
 \\iff & ${a}x & > & ${c} ${oppsig} ${valabsb} & \\text{(on ${ajso} ${valabsb} à chaque membre de l'inéquation)} \\\\
 \\iff & ${a}x & > & ${d} & \\\\
 \\iff & x & ${infsup} & \\dfrac{${d}}{${a}} & \\text{(on ${mots[0]} change ${mots[1]} le sens de l'inéquation car on divise par}~${a} ${mots[2]} 0) \\end{array}$  </br><br>`,
`$\\begin{array}{lrcll} & ${a}x ${sig} ${b} & \\geqslant & ${c} & \\\\
 \\iff & ${a}x & \\geqslant & ${c} ${oppsig} ${valabsb} & \\text{(on ${ajso} ${valabsb} à chaque membre de l'inéquation)} \\\\
 \\iff & ${a}x & \\geqslant & ${d} & \\\\
 \\iff & x & ${infsup} & \\dfrac{${d}}{${a}} & \\text{(on ${mots[0]} change ${mots[1]} le sens de l'inéquation car on divise par}~${a} ${mots[2]} 0) \\end{array}$  </br><br>`];


function afficherDroiteReelle() {
    const figure = document.getElementById('figure-intervalle');
    const versGauche = (choix < 2) === (a > 0);
    const borneIncluse = choix % 2 === 1;
    const valeur = d / a;
    const sens = versGauche ? 'à gauche' : 'à droite';
    figure.setAttribute('aria-label', `Solutions ${sens} de ${valeur}, borne ${borneIncluse ? 'incluse' : 'exclue'}`);

    // SVG natif : aucun moteur TikZ externe requis pour afficher la droite.
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 640 120');
    svg.setAttribute('width', '640');
    svg.setAttribute('height', '120');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', figure.getAttribute('aria-label'));

    function element(nom, attributs, texte) {
        const noeud = document.createElementNS(ns, nom);
        for (const [cle, valeur] of Object.entries(attributs)) noeud.setAttribute(cle, String(valeur));
        if (texte !== undefined) noeud.textContent = texte;
        svg.appendChild(noeud);
        return noeud;
    }

    const couleur = '#b42332';
    element('line', {x1: 35, y1: 52, x2: 605, y2: 52, stroke: 'currentColor', 'stroke-width': 2});
    element('path', {d: 'M 45 45 L 35 52 L 45 59 M 595 45 L 605 52 L 595 59',
        fill: 'none', stroke: 'currentColor', 'stroke-width': 2});
    element('line', {x1: 320, y1: 52, x2: versGauche ? 45 : 595, y2: 52,
        stroke: couleur, 'stroke-width': 5, 'stroke-linecap': 'round'});
    // Le crochet se tourne vers la partie coloriée si la borne est incluse.
    // Borne exclue : parenthèse ouverte, sans point plein.
    if (borneIncluse) {
        element('circle', {cx: 320, cy: 52, r: 7, fill: couleur});
    } else {
        element('circle', {cx: 320, cy: 52, r: 7, fill: 'white', stroke: couleur, 'stroke-width': 3});
    }
    element('text', {x: 320, y: 93, 'text-anchor': 'middle', 'font-size': 19,
        fill: 'currentColor'}, String(valeur));
    element('text', {x: 35, y: 93, 'text-anchor': 'middle', 'font-size': 16,
        fill: 'currentColor'}, '−∞');
    element('text', {x: 605, y: 93, 'text-anchor': 'middle', 'font-size': 16,
        fill: 'currentColor'}, '+∞');
    figure.replaceChildren(svg);
}

document.getElementById('enonce').textContent = listeenonces[choix];
document.getElementById('solution').textContent = `$S=${sol} ${repsimp}$`;
document.getElementById('correction1').innerHTML = listeCorrections[choix];
document.getElementById('correction2').textContent = `$S=${sol} ${repsimp}$`;
afficherDroiteReelle();

for (const id of ['solutions', 'correction']) {
    const bouton = document.getElementById(id);
    const panneau = document.getElementById(bouton.getAttribute('aria-controls'));
    const libelle = bouton.textContent;
    bouton.addEventListener('click', () => {
        panneau.hidden = !panneau.hidden;
        bouton.setAttribute('aria-expanded', String(!panneau.hidden));
        bouton.textContent = panneau.hidden ? libelle : libelle.replace('Afficher', 'Masquer');
    });
}

document.getElementById('recommencer').addEventListener('click', () => location.reload());
