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

function signe() {
    let a = nbrealéa(1,2);
    let sig;
    if (a==1) {sig='+';} else {sig='-';}
    return sig;
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

function impo(denom) {
    let rep;
    if (denom==0) {rep='impossible';} else {rep='';}
    return rep;
}

function valabs(a) {
    let rep;
    if (a<0) {rep=-a;} else {rep=a;}
    return rep;
}

function unoupasun(a) {
    let rep;
    if (a==1) {rep=``;} else {
        if (a==-1) {rep=`-`;} else {rep=`${a}`;}}
    return rep;
}

function repfrac(num1,denom1,num2,denom2,signe) {
    let rep;
    if (num1==num2 && denom1==denom2) {rep=``;} else {rep=`=${signe}\\dfrac{${num2}}{${denom2}}`;}
    return rep;
}

function changesigne(s,nbre) {
    let rep;
    if (s=='-') {rep=-nbre;} else {rep=nbre;}
    return rep;
}

function paszerox(a,s) {
    let rep = nbreouoppose(nbrealéa(1,10));
    let b;
    if (s=='-') {b=-rep;} else {b=rep;}  
    while (a+b==0) {rep=nbreouoppose(nbrealéa(1,10));if (s=='-') {b=-rep;} else {b=rep;};}
    return rep;
}

function repfrac(num1,denom1,num2,denom2,signe) {
    let rep;
    if (num1==num2 && denom1==denom2) {rep=``;} else {rep=`=${signe}\\dfrac{${num2}}{${denom2}}`;}
    return rep;
}

function signefrac(num,denom) {
    let rep;
    if (num>0 && denom>0) {rep='';}
    if (num>0 && denom<0) {rep='-';}
    if (num<0 && denom>0) {rep='-';}
    if (num<0 && denom<0) {rep='';}
    return rep;
}

function solsimpfin(num,denom) {
    let rep;
    let rep1;
    let signe = signefrac(num,denom);
    if (num==0) {signe=``;};
    let frac1 = simplifierfraction(num,denom);
    let frac2 = fracsimp(frac1[0],frac1[1]);
    if (frac2[1]==1) {rep1=[signe,frac2[0]];} else {rep1=[signe,frac2[0],frac2[1]];}
    if (num==frac2[0] && denom==frac2[1] && frac2[1]!=1) {rep=``;}  else {
    if (rep1.length==2) {rep=`=${rep1[0]}${rep1[1]}`;} else {rep=`=${rep1[0]}\\dfrac{${rep1[1]}}{${rep1[2]}}`;}
    }
    return rep;
}

function soluces(num,denom) {
    let rep;
    let rep1;
    let signe = signefrac(num,denom);
    if (num==0) {signe=``;};
    let frac1 = simplifierfraction(num,denom);
    let frac2 = fracsimp(frac1[0],frac1[1]);
    if (frac2[1]==1) {rep1=[signe,frac2[0]];} else {rep1=[signe,frac2[0],frac2[1]];}
    if (rep1.length==2) {rep=`${rep1[0]}${rep1[1]}`;} else {rep=`${rep1[0]}\\dfrac{${rep1[1]}}{${rep1[2]}}`;}
    return rep;
}

function changeoupas(signe) {
    let rep;
    if (signe=='-') {rep=['','','-'];} else {rep=['ne','pas','+'];}
    return rep;
}

let a = nbreouoppose(nbrealéa(1,10));
let aun = unoupasun(a);
let b = nbreouoppose(nbrealéa(1,10));
let sb = rienplus(b);
let c = nbreouoppose(nbrealéa(1,10));
let cun = unoupasun(c);
let d = nbreouoppose(nbrealéa(1,10));
let sd = rienplus(d);
let signeentreparentheses = signe();
let e = paszerox(c,signeentreparentheses);
let eun = unoupasun(e);
let f = nbreouoppose(nbrealéa(1,10));
let sf = rienplus(f);
let e2 = changesigne(signeentreparentheses,e);
let se2 = rienplus(e2);
let e2un = unoupasun(e2);
let f2 = changesigne(signeentreparentheses,f);
let sf2 = rienplus(f2);
let somx = c+e2;
let somxun = unoupasun(somx);
let somreels = d+f2;
let ssomreels = rienplus(somreels);
let opb = -b;
let opsomreels = -somreels;
let sol1 = solsimpfin(opb,a);
let sol2 = solsimpfin(opsomreels,somx);
let soluce1 = soluces(opb,a);
let soluce2 = soluces(opsomreels,somx);
let negoupasneg = changeoupas(signeentreparentheses);



const enonce = document.getElementById('enonce');
const correctiond = document.getElementById('correctiond');
const correction = document.getElementById('correction');
const solutions = document.getElementById('solutions');
const solution = document.getElementById('solution');
const recommencer = document.getElementById('recommencer');

// Le gabarit de correction ci-dessous provient du site historique, sans réécriture.
enonce.innerHTML = `<span class="enonce-texte">Résoudre dans $\\mathbb{R}$ l'équation :</span><span class="enonce-expression">$(${aun} x ${sb} ${b}) (${cun} x ${sd} ${d}) ${signeentreparentheses} (${aun} x ${sb} ${b}) (${eun} x ${sf} ${f}) = 0$</span>`;
solution.innerHTML = `$S=\\left\\{${soluce1}~;${soluce2} \\right\\} $`;
correctiond.innerHTML = `$\\begin{array}{lrcl}
& \\underbrace{(${aun} x ${sb} ${b})}_{facteur~commun} (${cun} x ${sd} ${d}) ${signeentreparentheses} \\underbrace{(${aun} x ${sb} ${b})}_{facteur~commun} (${eun} x ${sf} ${f}) & = & 0 \\\\
\\iff & \\underbrace{(${aun} x ${sb} ${b})}_{facteur~commun} \\left[ ${cun} x ${sd} ${d} ${signeentreparentheses} (${eun} x ${sf} ${f}) \\right] & = & 0
\\end{array}$<br><br>
On ${negoupasneg[0]} change ${negoupasneg[1]} les signes à l'intérieur des parenthèses situées dans les crochets car elles sont précédées du signe "$${negoupasneg[2]}$".<br><br>
$\\begin{array}{lrcl}\\iff & (${aun} x ${sb} ${b}) (${cun} x ${sd} ${d} ${se2} ${e2un}x${sf2}${f2}) & = & 0 \\\\
\\iff & (${aun} x ${sb} ${b}) (${somxun}x${ssomreels}${somreels}) & = & 0 
\\end{array}$
<br><br>
$\\begin{array}{rclcrcl}
\\iff & ${aun} x ${sb} ${b} & = & 0 & \\text{ou} & ${somxun}x${ssomreels}${somreels} & = & 0 \\\\
\\iff & ${aun}x & = & ${opb} & \\text{ou} & ${somxun}x & = & ${opsomreels} \\\\
\\iff & x & = & \\dfrac{${opb}}{${a}}${sol1} & \\text{ou} & x & = & \\dfrac{${opsomreels}}{${somx}}${sol2}
\\end{array}$<br><br>
$S=\\left\\{${soluce1}~;${soluce2} \\right\\}$`;

/* R16 : adaptation de l'affichage, sans modification du gabarit historique.
 * Chaque système MathJax reste entier; le défilement concerne ce système seul. */
function preparerScrollMathJax(element) {
  if (!element || element.id !== 'correctiond' || typeof element.querySelectorAll !== 'function') return;
  for (const formule of Array.from(element.querySelectorAll('mjx-container'))) {
    if (formule.closest('.r16-math-region')) continue;
    // Important : ne jamais isoler les signes en ligne ni l'ensemble des solutions.
    if (!formule.querySelector('mjx-mtable')) continue;
    const region = document.createElement('div');
    region.className = 'r16-math-region';
    const fenetre = document.createElement('div');
    fenetre.className = 'r16-math-scroll';
    fenetre.tabIndex = 0;
    fenetre.setAttribute('role', 'region');
    fenetre.setAttribute('aria-label', 'Étapes de calcul : utiliser les flèches pour faire défiler horizontalement');
    const interieur = document.createElement('div');
    interieur.className = 'r16-math-inner';
    const commandes = document.createElement('div');
    commandes.className = 'r16-math-controls';
    commandes.hidden = true;
    const gauche = document.createElement('button');
    gauche.type = 'button';
    gauche.textContent = '←';
    gauche.setAttribute('aria-label', 'Début des calculs');
    const aide = document.createElement('span');
    aide.textContent = 'Suite des calculs : glisser ou utiliser les flèches';
    const droite = document.createElement('button');
    droite.type = 'button';
    droite.textContent = '→';
    droite.setAttribute('aria-label', 'Fin des calculs');
    commandes.append(gauche, aide, droite);
    formule.parentNode.insertBefore(region, formule);
    region.append(fenetre, commandes);
    fenetre.appendChild(interieur);
    interieur.appendChild(formule);

    const actualiser = () => {
      const reste = Math.max(0, fenetre.scrollWidth - fenetre.clientWidth);
      const depasse = reste > 4;
      region.dataset.overflow = String(depasse);
      commandes.hidden = !depasse;
      gauche.disabled = fenetre.scrollLeft <= 2;
      droite.disabled = fenetre.scrollLeft >= reste - 2;
    };
    const avancer = sens => {
      const longueur = fenetre.scrollWidth - fenetre.clientWidth;
      // Une pression atteint le debut ou la derniere colonne sans etape manquante.
      fenetre.scrollTo({ left: sens < 0 ? 0 : Math.max(0, longueur), behavior: 'smooth' });
    };
    gauche.addEventListener('click', () => avancer(-1));
    droite.addEventListener('click', () => avancer(1));
    fenetre.addEventListener('scroll', actualiser, { passive: true });
    fenetre.addEventListener('keydown', evenement => {
      if (evenement.key === 'Home') { fenetre.scrollLeft = 0; evenement.preventDefault(); }
      if (evenement.key === 'End') { fenetre.scrollLeft = fenetre.scrollWidth; evenement.preventDefault(); }
    });
    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(actualiser);
      observer.observe(fenetre);
      observer.observe(interieur);
    }
    if (typeof requestAnimationFrame === 'function') requestAnimationFrame(actualiser);
    else actualiser();
  }
}

function demanderMathJax(element) {
  try {
    const mj=window.MathJax;
    if (mj && typeof mj.typesetPromise==='function') {
      return mj.typesetPromise([element]).then(()=>preparerScrollMathJax(element)).catch(()=>undefined);
    }
  } catch { /* le panneau doit rester utilisable sans MathJax */ }
  return Promise.resolve();
}

function basculer(bouton,panneau){
  const ouvrir=panneau.hidden;
  panneau.hidden=!ouvrir;
  bouton.setAttribute('aria-expanded',String(ouvrir));
  bouton.textContent=ouvrir?bouton.dataset.masquer:bouton.dataset.afficher;
  if(ouvrir) demanderMathJax(panneau);
}
solutions.addEventListener('click',()=>basculer(solutions,solution));
correction.addEventListener('click',()=>basculer(correction,correctiond));
recommencer.addEventListener('click',()=>location.reload());
for(const [id,href] of [
  ['accueil','../../../index.html'],
  ['MenuSeconde','../../../Menus/MenuSeconde.html'],
  ['MenuSecondeEquations','../../../Menus/MenuSecondeEquations.html']
]){
  document.getElementById(id).addEventListener('click',()=>{location.href=href;});
}
if (document.readyState === 'complete') {
  demanderMathJax(enonce);
} else {
  window.addEventListener('load',()=>demanderMathJax(enonce),{once:true});
}
