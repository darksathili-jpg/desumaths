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
    if (a<0) {pg='(';} else {pg='';}
    if (a<0) {pd=')';} else {pd='';}
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

function emeouere(n) {
    let rep;
    if (n==1) {rep='ère';} else {rep='ème';}
    return rep;
}

function soupass(n) {
    let rep;
    if (n<=1) {rep='mauvaise réponse';} else {rep='mauvaises réponses';}
    return rep;
}

function fact(nbr){
    let i, f = 1;
    for(i = 1; i <= nbr; i++)  
    {
      f = f * i;   // ou f *= i;
    }  
    return f;
  }

function combinaison(n,k) {
    let rep;
    let factn = fact(n);
    let factk = fact(k);
    let factnmk = fact(n-k);
    return rep = factn/(factnmk*factk);
}

function choixNom() {
    let rep;
    let listeeleves = ['Tom','Jules','Pierre','Kylian','Raphael','Maella','Ambre','Mathilde','Lylou','Joana-Amélia','Ema','Evan','Thomas','Yanis','Lucie','Gabin','Sarah',`Noa`,`Timothe`,`Victoria`,`Lucille`,`Zahra`,`Lucas`,`Adam`,`Àurore`];
    return rep = listeeleves[nbrealéa(0,24)];
}

function choixNoms2() {
    let rep;
    let listeeleves = ['Tom','Jules','Pierre','Kylian','Raphael','Maella','Ambre','Mathilde','Lylou','Joana-Amélia','Ema','Evan','Thomas','Yanis','Lucie','Gabin','Sarah',`Noa`,`Timothe`,`Victoria`,`Lucille`,`Zahra`,`Lucas`,`Adam`,`Àurore`];
    let choix1= nbrealéa(0,24);
    let choix2 = nbrealéa(0,24);
    while (choix1==choix2) {choix2=nbrealéa(0,24);}
    return rep = [listeeleves[choix1],listeeleves[choix2]];
}

function places(n) {
    let rep;
    let rang1 = nbrealéa(1,n);
    let rang2 = nbrealéa(1,n);
    while (rang1==rang2) {rang2=nbrealéa(1,n);}
    return rep = [rang1,rang2];
}

function choixNoms3() {
    let rep;
    let listeeleves = ['Tom','Jules','Pierre','Kylian','Raphael','Maella','Ambre','Mathilde','Lylou','Joana-Amélia','Ema','Evan','Thomas','Yanis','Lucie','Gabin','Sarah',`Noa`,`Timothe`,`Victoria`,`Lucille`,`Zahra`,`Lucas`,`Adam`,`Àurore`];
    let choix1 = nbrealéa(0,24);
    let rep1 = listeeleves[choix1];
    listeeleves.splice(choix1,1);
    let choix2 = nbrealéa(0,23);
    let rep2 = listeeleves[choix2];
    listeeleves.splice(choix2,1);
    let choix3 = nbrealéa(0,22);
    let rep3 = listeeleves[choix3];
    return rep = [rep1,rep2,rep3];
}

function LettresQ3(n) {
    let rep=`$26$`;
    let k = 26;
    while (n>1) {k=k-1;rep=rep+`$\\hspace{1mm}\\times\\hspace{1mm}${k}$`;n=n-1;}
    return rep;
}

function ChiffresQ4(n) {
    let rep=`$10$`;
    let k = 10;
    while (n>1) {k=k-1;rep=rep+`$\\hspace{1mm}\\times\\hspace{1mm}${k}$`;n=n-1;}
    return rep;
}

function arrangement(n,k) {
    let rep;
    let factn = fact(n);
    let factnmk = fact(n-k);
    return rep = factn/factnmk;
}

function UnOuPlusieurs(n) {
    let rep;
    if (n==1) {rep=['la','lettre restante','son emplacement'];} else {rep=['les','lettres restantes','leurs emplacements'];}
    return rep;
}

function UnOuPlusieursc(n) {
    let rep;
    if (n==1) {rep=['le','chiffre restant','son emplacement'];} else {rep=['les','chiffres restants','leurs emplacements'];}
    return rep;
}
    
function affOupasAff(n) {
    let rep;
    if (n==1) {rep='';} else {rep=`${n}`;}
    return rep;
}

const REGEX_GROUPS = /(\d)(?=(\d\d\d)+(?!\d))/g
// Le délimiteur FR est le _Narrow No-Break Space_, eh oui !
function useGrouping(int, delimiter = '\u202f') {
  return int.toString().replace(REGEX_GROUPS, `$1${delimiter}`)
}



let nq = nbrealéa(5,10);
let nqm1 = nq-1;
let nr = nbrealéa(3,7);
let RepBonne = nbrealéa(1,nq);
let emeOuEre = emeouere(RepBonne);
let nbreRepQCM = nr**nq;
let nRepQCM = useGrouping(nr**nq);
let nrf = nr-1;
let nbreRepFausses = nrf**nq;
let nRepFausses = useGrouping(nrf**nq);
let rep2av = avecVirgule(Math.round(nbreRepFausses/nbreRepQCM*100)/100);
let num2b = nrf**nqm1;
let rep2bv = avecVirgule(Math.round(nq*nrf**nqm1/nbreRepQCM*100)/100);
let rep2b = simplifierfraction(nq*nrf**nqm1,nbreRepQCM);
let rep2bnum = useGrouping(rep2b[0]);
let rep2bdenom = useGrouping(rep2b[1]);
let rep2bsimp = simpfracmax(nq*nrf**nqm1,nbreRepQCM);
let rep2cv = avecVirgule(Math.round(nrf**nqm1/nbreRepQCM*100)/100);
let rep2c = simplifierfraction(nrf**nqm1,nbreRepQCM);
let rep2cnum = useGrouping(rep2c[0]);
let rep2cdenom = useGrouping(rep2c[1]);
let rep2csimp = simpfracmax(nrf**nqm1,nbreRepQCM);
let n2d = nbrealéa(0,nq);
let SouPasS = soupass(n2d);
let n2dbr = nq-n2d;
let combi2d = combinaison(nq,n2d);
let rep2d = simplifierfraction(nrf**n2d*combi2d,nbreRepQCM);
let rep2dnum = useGrouping(rep2d[0]);
let rep2ddenom = useGrouping(rep2d[1]);
let rep2dv = avecVirgule(Math.round(nrf**n2d*combi2d/nbreRepQCM*100)/100);
let rep2dsimp = simpfracmax(nrf**n2d*combi2d,nbreRepQCM);
let rep2ev = avecVirgule(Math.round((1-nrf**nq/nbreRepQCM)*100)/100);
let rep2e = simplifierfraction(nbreRepQCM-nrf**nq,nbreRepQCM);
let rep2enum = useGrouping(rep2e[0]);
let rep2edenom = useGrouping(rep2e[1]);
let rep2esimp = simpfracmax(nbreRepQCM-nrf**nq,nbreRepQCM);

let nbreJoueurs = nbrealéa(5,15);
let nbreJoueursm1 = nbreJoueurs-1;
let nbreJoueursm2 = nbreJoueurs-2;
let nbreJoueursm3 = nbreJoueurs-3;
let prenom = choixNom();
let places1b = places(nbreJoueurs);
let prenoms = choixNoms2();
let n2 = 2*nbrealéa(5,15);
let moitieN2 = n2/2;
let moitieN2m1 = moitieN2-1;
let moitieN2m2 = moitieN2-2;
let n2m2 = n2-2;
let prenoms2b = choixNoms2();
let prenoms2d = choixNoms3();
let rep21a = useGrouping(fact(nbreJoueurs));
let rep21b = useGrouping(fact(nbreJoueursm1));
let rep21c = useGrouping(fact(nbreJoueursm2));
let rep22a = useGrouping(Math.round(combinaison(n2,moitieN2)));
let rep22b = useGrouping(Math.round(combinaison(n2m2,moitieN2m2)));
let rep22c = useGrouping(Math.round(combinaison(n2m2,moitieN2m1)));
let rep22d = useGrouping(fact(nbreJoueursm3));
let rep22e = useGrouping(fact(3)*fact(nbreJoueursm3));
let rep22f = useGrouping(nbreJoueurs*nbreJoueursm1*nbreJoueursm2);

let nbreLettres = nbrealéa(3,7);
let nbreLettresm1 = nbreLettres-1;
let nbreChiffres = nbrealéa(3,7);
let nbreChiffresm1 = nbreChiffres-1;
let nbreCaracteres = nbreLettres+nbreChiffres;
let n36 = nbrealéa(2,nbreLettres-1);
let n37 = nbrealéa(2,nbreChiffres-1);
let rep31 = useGrouping(26**nbreLettres*10**nbreChiffres);
let lq3 = LettresQ3(nbreLettres);
let rep33 = useGrouping(Math.round(arrangement(26,nbreLettres)*10**nbreChiffres));
let cq4 = ChiffresQ4(nbreChiffres);
let rep34 = useGrouping(Math.round(arrangement(10,nbreChiffres)*26**nbreLettres));
let placesDispoQ5 = nbreChiffres+nbreLettres-2;
let rep35 = useGrouping(Math.round(260*combinaison(placesDispoQ5,nbreLettresm1)*26**nbreLettresm1*10**nbreChiffresm1));
let lq6 = LettresQ3(n36);
let nbreLettresq6 = nbreLettres-n36;
let affNbreLettresq6 = affOupasAff(nbreLettresq6);
let singOuPlur = UnOuPlusieurs(nbreLettresq6);
let placesDispoQ6 = nbreChiffres+nbreLettres-n36;
let rep36 = useGrouping(Math.round(arrangement(26,n36)*combinaison(placesDispoQ6,nbreLettresq6)*26**nbreLettresq6*10**nbreChiffres));
let cq7 = ChiffresQ4(n37);
let nbreChiffresq7 = nbreChiffres-n37;
let affNbreChiffresQ7 = affOupasAff(nbreChiffresq7);
let singOuPlur7 = UnOuPlusieursc(nbreChiffresq7);
let placesDispoQ7 = nbreChiffres+nbreLettres-n37;
let rep37 = useGrouping(Math.round(arrangement(10,n37)*combinaison(placesDispoQ7,nbreChiffresq7)*10**nbreChiffresq7*26**nbreLettres));
let rep38 = useGrouping(Math.round(26*combinaison(nbreCaracteres,nbreLettres)*10**nbreChiffres));
let rep39 = useGrouping(Math.round(combinaison(nbreCaracteres,nbreLettres)*26**nbreLettres*10**nbreChiffres));

let k = nbrealéa(0,2);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');


let listeenonces = [`On considère un QCM comportant ${nq} questions.<br>
Pour chaque question il y a ${nr} propositions de réponses.<br>
Pour chaque question il n'y a qu'une seule bonne réponse possible.<br>
1) Déterminer le nombre de façons différentes de répondre à ce QCM.<br>
2) On suppose qu'un candidat répond au hasard à chacune des questions du QCM.<br>
Calculer la probabilité des évènements suivants :<br>
$\\hspace{1 cm}$ a) A : &laquo le candidat n'a aucune bonne réponse. &raquo <br>
$\\hspace{1 cm}$ b) B : &laquo le candidat a exactement une bonne réponse. &raquo <br>
$\\hspace{1 cm}$ c) C : &laquo le candidat n'a répondu correctement qu'à la ${RepBonne}$^{\\text{${emeOuEre}}}$ question. &raquo <br>
$\\hspace{1 cm}$ d) D : &laquo le candidat a exactement ${n2d} ${SouPasS}. &raquo <br>
$\\hspace{1 cm}$ e) E : &laquo le candidat a au moins une bonne réponse. &raquo <br>`,
`1) Au cours d'une partie de jeu vidéo, ${nbreJoueurs} joueurs font une course de karting. <br>
$\\phantom{1)}$ a) Combien y a-t-il de classements différents possibles ? <br>
$\\phantom{1)}$ b) ${prenom} termine à la première place. Combien y a-t-il alors de classements différents possibles ? <br>
$\\phantom{1)}$ c) ${prenoms[0]} termine ${places1b[0]}$^\\text{e}$ et ${prenoms[1]} termine ${places1b[1]}$^\\text{e}$. Combien y a-t-il alors de classements différents possibles ? <br>
$\\phantom{1)}$ d) ${prenoms2d[0]} termine $1^{\\text{e}}$, ${prenoms2d[1]} termine $2^{\\text{e}}$ et ${prenoms2d[2]} termine $3^{\\text{e}}$. <br>
$\\phantom{1) d)}$ Combien y a-t-il alors de classements différents possibles ? <br>
$\\phantom{1)}$ e) Combien y a-t-il de classements différents possibles avec ${prenoms2d[0]}, ${prenoms2d[1]} et ${prenoms2d[2]} qui terminent aux trois premières places du classement (dans n'importe quel ordre) ? <br>
$\\phantom{1)}$ f) Un podium est le classement des 3 premiers joueurs de la course. Combien y a-t-il de podiums différents possibles ? <br>
2) ${n2} amis décident de se partager en 2 équipes de ${moitieN2} joueurs. <br>
$\\phantom{1)}$ a) Combien d'équipes différentes peut-on former ? <br>
$\\phantom{1)}$ b) Combien d'équipes comportant à la fois ${prenoms2b[0]} et ${prenoms2b[1]} peut-on former ? <br>
$\\phantom{1)}$ c) Combien d'équipes peut-on former si ${prenoms2b[0]} appartient à l'une des équipes et ${prenoms2b[1]} appartient à l'autre équipe ?`,
`Pour accéder à un compte sur un site internet, un utilisateur doit saisir un mot de passe contenant ${nbreLettres} lettres et ${nbreChiffres} chiffres (certaines lettres peuvent être identiques ainsi que certains chiffres). <br>
Dans chacun des cas suivants, déterminer le nombre de mots de passe possibles : <br>
1) le mot de passe commence par les ${nbreLettres} lettres. <br>
2) Le mot de passe commence par les ${nbreChiffres} chiffres. <br>
3) Le mot de passe commence par les ${nbreLettres} lettres et toutes les lettres sont différentes. <br>
4) Le mot de passe commence par les ${nbreChiffres} chiffres et tous les chiffres sont différents. <br>
5) Le premier caractère est une lettre et le deuxième est un chiffre. <br>
6) Les ${n36} premiers caractères sont des lettres différentes. <br>
7) Les ${n37} derniers caractères sont des chiffres différents. <br>
8) Toutes les lettres sont identiques. <br>
9) Il n'y a aucune contrainte. Il faut donc déterminer le nombre total de mots de passes possibles.`];

let listecorrections = [`<p1> 1) L'odre est important et il peut y avoir répétition donc il s'agit d'un ${nq}-uplet d'un ensemble à ${nr} éléments donc il y a $${nr}^{${nq}}=${nRepQCM}$ façons de répondre à ce QCM. </p1>
<p1> 2) a) Pour chaque question il y a ${nrf} mauvaises réponses, ce qui donne $${nrf}^{${nq}}=${nRepFausses}$ possibilités (c'est un ${nq}-uplet d'un ensemble à ${nrf} éléments).<br>
$\\phantom{2) a)}$ On a donc $P(A)=\\dfrac{${nRepFausses}}{${nRepQCM}}\\approx ${rep2av}$ </p1>
<p1> $\\phantom{2)}$ b) Il y a ${nq} façons de placer la bonne réponse : $\\binom{${nq}}{1}=${nq}$. <br>
$\\phantom{2) b)}$ Pour les ${nqm1} réponses fausses il y a $${nrf}^{${nqm1}}$ possibilités (c'est un ${nqm1}-uplet d'un ensemble à ${nrf} éléments) <br>
$\\phantom{2) b)}$ On a donc $P(B)=\\dfrac{${nq}\\times ${nrf}^{${nqm1}}}{${nRepQCM}}=\\dfrac{${rep2bnum}}{${rep2bdenom}} \\approx ${rep2bv}$ </p1>
<p1> $\\phantom{2)}$ c) À la ${RepBonne}$^{\\text{${emeOuEre}}}$ question il n'y a qu'1 choix possible. <br>
$\\phantom{2) c)}$ Pour les ${nqm1} autres questions il y a $${nrf}^{${nqm1}}$ possibilités (c'est un ${nqm1}-uplet d'un ensemble à ${nrf} éléments) <br>
$\\phantom{2) c)}$ On a donc $P(C)=\\dfrac{1\\times ${nrf}^{${nqm1}}}{${nRepQCM}}=\\dfrac{${rep2cnum}}{${rep2cdenom}} \\approx ${rep2cv}$ </p1>
<p1> $\\phantom{2)}$ d) Pour les ${n2d} mauvaises réponses il y a $\\binom{${nq}}{${n2d}}=${combi2d}$ possibilités de les placer puis ${nrf} possibiltés de réponses fausses à chaque question (ce sera donc un ${n2d}-uplet d'un ensemble à ${nrf} éléments). <br>
$\\phantom{2) d)}$ On obtient donc $${nrf}^{${n2d}}\\times ${combi2d}$ possibilités de mauvaises réponses. <br>
$\\phantom{2) d)}$ Pour les réponses correctes il n'y a qu'1 possibilité. <br>
$\\phantom{2) d)}$ On a donc $P(D)=\\dfrac{1\\times ${nrf}^{${n2d}}\\times ${combi2d}}{${nRepQCM}}=\\dfrac{${rep2dnum}}{${rep2ddenom}} \\approx ${rep2dv}$ </p1>
$\\phantom{2)}$ e) E est l'évènement contraire de l'évènement : &laquo l'élève n'a aucune bonne réponse &raquo <br>
$\\phantom{2) e)}$ on a donc $P(E)=1-P\\left(\\overline{E}\\right)=1-\\dfrac{${nrf}^{${nq}}}{${nRepQCM}}=\\dfrac{${rep2enum}}{${rep2edenom}} \\approx ${rep2ev}$`,
`<p1> 1) a) Il s'agit d'une permutation de ${nbreJoueurs} éléments (l'ordre est important et il ne peut pas y avoir de répétition). <br>
$\\phantom{1) a)}$ Il y en a donc $${nbreJoueurs}!=${rep21a}$ </p1>
<p1> $\\phantom{1)}$ b) Si ${prenom} termine à la première place il n'y a qu'un choix possible pour ce joueur.<br>
$\\phantom{1) b)}$ Pour les ${nbreJoueursm1} autres joueurs il s'agit d'une permutation (l'ordre est important et il ne peut pas y avoir de répétition). <br>
$\\phantom{1) b)}$ On obtient donc : $1\\times ${nbreJoueursm1}!=${rep21b}$ </p1>
<p1> $\\phantom{1)}$ c) Pour ${prenoms[0]} et ${prenoms[1]} il n'y a qu'un choix possible pour chacun. <br>
$\\phantom{1) c)}$ Pour les ${nbreJoueursm2} autres joueurs il s'agit d'une permutation (l'ordre est important et il ne peut pas y avoir de répétition). <br>
$\\phantom{1) c)}$ On obtient donc : $1\\times 1\\times ${nbreJoueursm2}!=${rep21c}$ </p1>
<p1>$\\phantom{1)}$ d) Pour les 3 premières places il n'y a qu'un choix possible. <br>
$\\phantom{1) d)}$ Pour les ${nbreJoueursm3} autres joueurs il s'agit d'une permutation (l'ordre est important et il ne peut pas y avoir de répétition). <br>
$\\phantom{1) d)}$ Il y en a donc : $1\\times ${nbreJoueursm3}!=${rep22d}$ </p1>
<p1> $\\phantom{1)}$ e) Pour les 3 premières places il s'agit d'une permutation des 3 joueurs possibles (l'ordre est important et il ne peut pas y avoir de répétition). <br>
$\\phantom{1) e)}$ Il y en a donc : $3!=6$ <br>
$\\phantom{1) e)}$ Pour les ${nbreJoueursm3} autres joueurs il s'agit également d'une permutation (l'ordre est important et il ne peut pas y avoir de répétition). <br>
$\\phantom{1) e)}$ Il y en a donc : $${nbreJoueursm3}!$ <br>
$\\phantom{1) e)}$ Au final il y a donc : $3!\\times ${nbreJoueursm3}!=${rep22e}$ possibilités. </p1>
<p1> $\\phantom{1)}$ f) Pour les 3 joueurs qui vont former le podium : il ne peut pas y avoir de répétition et l'ordre est important (il s'agit donc d'un arrangement). <br>
$\\phantom{1) f)}$ Il y a donc $${nbreJoueurs}\\times${nbreJoueursm1}\\times${nbreJoueursm2}=${rep22f}$ podiums possibles. 
</p1>
<p1> 2) a) Il s'agit en fait de choisir ${moitieN2} joueurs parmi les ${n2} donc il s'agit d'une combinaison car l'ordre n'a pas d'importance et il ne peut pas y avoir de répétition. <br><br>
$\\phantom{2) a)}$ Il y en a donc $\\binom{${n2}}{${moitieN2}}=${rep22a}$ <p1>
<p1> $\\phantom{2)}$ b) Les choix de deux joueurs étant fixé il reste en fait à choisr les ${moitieN2m2} autres joueurs de l'équipe parmi les ${n2m2} restants. <br>
$\\phantom{2) b)}$ Il s'agit donc d'une combinaison car l'ordre n'a pas d'importance et il ne peut pas y avoir de répétition. <br>
$\\phantom{2) b)}$ Il y en a donc $\\binom{${n2m2}}{${moitieN2m2}}=${rep22b}$ </p1>
$\\phantom{2)}$ c) ${prenoms2b[0]} appartenant à la première équipe il reste à choisir les ${moitieN2m1} autres joueurs de l'équipe parmi les ${n2m2} restants (on ne peut plus choisir ni ${prenoms2b[0]} ni ${prenoms2b[1]}). <br>
$\\phantom{2) c)}$ Il s'agit donc d'une combinaison car l'ordre n'a pas d'importance et il ne peut pas y avoir de répétition. <br>
$\\phantom{2) c)}$ Il y en a donc $\\binom{${n2m2}}{${moitieN2m1}}=${rep22c}$ `,
`<p1> 1) Pour les ${nbreLettres} lettres il s'agit d'un ${nbreLettres}-uplet d'un ensemble à 26 éléments. <br>
$\\phantom{1)}$ Il y en a donc $26^{${nbreLettres}}$.<br>
$\\phantom{1)}$ Pour les ${nbreChiffres} chiffres il s'agit d'un ${nbreChiffres}-uplet d'un ensemble à 10 éléments. <br>
$\\phantom{1)}$ Il y en a donc $10^{${nbreChiffres}}$. <br>
$\\phantom{1)}$ Au final il y a donc $10^{${nbreChiffres}}\\times26^{${nbreLettres}}=${rep31}$ codes possibles. </p1>
<p1> 2) Pour les ${nbreChiffres} chiffres il s'agit d'un ${nbreChiffres}-uplet d'un ensemble à 10 éléments. <br>
$\\phantom{2)}$ Il y en a donc $10^{${nbreChiffres}}$. <br>
$\\phantom{2)}$ Pour les ${nbreLettres} lettres il s'agit d'un ${nbreLettres}-uplet d'un ensemble à 26 éléments. <br>
$\\phantom{2)}$ Il y en a donc $26^{${nbreLettres}}$. <br>
$\\phantom{2)}$ Au final il y a donc $26^{${nbreLettres}}\\times 10^{${nbreChiffres}}=${rep31}$ codes possibles. </p1>
<p1> 3) Pour les ${nbreLettres} lettres l'ordre est important et il ne peut pas y avoir de répétition : c'est donc un arrangement. <br>
$\\phantom{3)}$ Il y a donc ${lq3} possibiltés. <br>
$\\phantom{3)}$ Pour les ${nbreChiffres} chiffres il s'agit d'un ${nbreChiffres}-uplet d'un ensemble à 10 éléments. <br>
$\\phantom{3)}$ Il y en a donc $10^{${nbreChiffres}}$. <br>
$\\phantom{3)}$ Au final il y a donc ${lq3}$\\hspace{1mm}\\times\\hspace{1mm} 10^{${nbreChiffres}}=${rep33}$ possibilités. </p1>
<p1> 4) Pour les ${nbreChiffres} chiffres l'ordre est important et il ne peut pas y avoir de répétition : c'est donc un arrangement. <br>
$\\phantom{4)}$ Il y a donc ${cq4} possibiltés. <br>
$\\phantom{4)}$ Pour les ${nbreLettres} lettres il s'agit d'un ${nbreLettres}-uplet d'un ensemble à 26 éléments. <br>
$\\phantom{4)}$ Il y en a donc $26^{${nbreLettres}}$. <br>
$\\phantom{4)}$ Au final il y a donc ${cq4}$\\hspace{1mm}\\times\\hspace{1mm} 26^{${nbreLettres}}=${rep34}$ possibilités. </p1>
<p1> 5) Pour le premier caractère il y 26 choix possibles et pour le deuxième il y en a 10. <br>
$\\phantom{5)}$ Pour les ${nbreLettresm1} lettres restantes, on peut d'abord définir le nombre de possibilités de les placer dans le code. <br>
$\\phantom{5)}$ Il s'agit de choisir ${nbreLettresm1} places parmi les ${placesDispoQ5} restantes. <br>
$\\phantom{5)}$ Il s'agit d'une combinaison car il n'y a pas de répétition et l'ordre n'est pas important : $\\binom{${placesDispoQ5}}{${nbreLettresm1}}$ <br>
$\\phantom{5)}$ Ensuite pour chaque lettre il y a 26 choix possibles. Il s'agit donc d'un ${nbreLettresm1}-uplet d'un ensemble à 26 éléments : il y donc $26^${nbreLettresm1}$ possibilités. <br>
$\\phantom{5)}$ Pour les ${nbreChiffresm1} restants le choix des places est déjà défini car, les lettres étant placées, les places restantes sont pour les chiffres. <br>
$\\phantom{5)}$ Pour chaque chiffre il y a 10 choix possibles. Il s'agit donc d'un ${nbreChiffresm1}-uplet d'un ensemble à 10 éléments : il y donc $10^${nbreChiffresm1}$ possibilités. <br>
$\\phantom{5)}$ Au final il y a donc $26\\times 10\\times\\binom{${placesDispoQ5}}{${nbreLettresm1}}\\times 26^${nbreLettresm1}\\times 10^${nbreChiffresm1}=${rep35}$ possibilités </p1>
<p1> 6) Pour le choix des ${n36} lettres il s'agit d'un arrangement car l'ordre est important et il ne peut pas y avoir de répétition. <br>
$\\phantom{6)}$ Il y a donc ${lq6} possibilités. <br>
$\\phantom{6)}$ Pour ${singOuPlur[0]} ${affNbreLettresq6} ${singOuPlur[1]} il faut d'abord choisir ${singOuPlur[2]} parmi les ${placesDispoQ6} places restantes. <br>
$\\phantom{6)}$ Il s'agit d'une combinaison car l'ordre n'est pas important et il ne peut pas y avoir de répétition : $\\binom{${placesDispoQ6}}{${nbreLettresq6}}$ <br>
$\\phantom{6)}$ Ensuite pour le choix des lettres restantes il s'agit d'un ${nbreLettresq6}-uplet d'un ensemble à 26 éléments car il peut y avoir répétition et l'ordre est important. <br>
$\\phantom{6)}$ Il y a donc $26^{${nbreLettresq6}}$ possibilités. <br>
$\\phantom{6)}$ Pour les ${nbreChiffres} chiffres restants à placer, le choix des places est déjà fait et le choix des chiffres est un ${nbreChiffres}-uplet d'un ensemble à 10 éléments car il peut y avoir répétition et l'ordre est important. <br>
$\\phantom{6)}$ Il y a donc $10^{${nbreChiffres}}$ possibilités. <br>
$\\phantom{6)}$ Au final il y a donc : ${lq6}$\\hspace{1mm}\\times\\binom{${placesDispoQ6}}{${nbreLettresq6}}\\hspace{1mm}\\times 26^{${nbreLettresq6}}\\hspace{1mm}\\times 10^{${nbreChiffres}}=${rep36}$ </p1>
<p1> 7) Pour le choix des ${n37} chiffres il s'agit d'un arrangement car l'ordre est important et il ne peut pas y avoir de répétition. <br>
$\\phantom{7)}$ Il y a donc ${cq7} possibilités. <br>
$\\phantom{7)}$ Pour ${singOuPlur7[0]} ${affNbreChiffresQ7} ${singOuPlur7[1]} il faut d'abord choisir ${singOuPlur7[2]} parmi les ${placesDispoQ7} places restantes. <br>
$\\phantom{7)}$ Il s'agit d'une combinaison car l'ordre n'est pas important et il ne peut pas y avoir de répétition : $\\binom{${placesDispoQ7}}{${nbreChiffresq7}}$ <br>
$\\phantom{7)}$ Ensuite pour le choix des chiffres restants il s'agit d'un ${nbreChiffresq7}-uplet d'un ensemble à 10 éléments car il peut y avoir répétition et l'ordre est important. <br>
$\\phantom{7)}$ Il y a donc $10^{${nbreChiffresq7}}$ possibilités. <br>
$\\phantom{7)}$ Pour les ${nbreLettres} lettres restants à placer, le choix des places est déjà fait et le choix des lettres est un ${nbreLettres}-uplet d'un ensemble à 26 éléments car il peut y avoir répétition et l'ordre est important. <br>
$\\phantom{7)}$ Il y a donc $26^{${nbreLettres}}$ possibilités. <br>
$\\phantom{7)}$ Au final il y a donc : ${cq7}$\\hspace{1mm}\\times\\binom{${placesDispoQ7}}{${nbreChiffresq7}}\\hspace{1mm}\\times 10^{${nbreChiffresq7}}\\hspace{1mm}\\times 26^{${nbreLettres}}=${rep37}$ </p1>
<p1> 8) Pour le choix de la lettre il y a 26 possibilités. <br>
$\\phantom{8)}$ Il faut ensuite choisir les emplacements des ${nbreLettres} lettres : il s'agit d'une combinaison car l'ordre n'est pas important et il ne peut pas y avoir de répétition. <br>
$\\phantom{8)}$ Il y a donc $\\binom{${nbreCaracteres}}{${nbreLettres}}$ possibilités <br>
$\\phantom{8)}$ Pour les ${nbreChiffres} chiffres il peut y avoir répétition du choix et l'ordre est important : il s'agit donc d'un ${nbreChiffres}-uplet d'un ensemble à 10 éléments. <br>
$\\phantom{8)}$  Il y en a donc $10^{${nbreChiffres}}$. <br>
$\\phantom{8)}$  Au final il y a donc $26\\times \\binom{${nbreCaracteres}}{${nbreLettres}}\\times 10^{${nbreChiffres}}=${rep38}$ possibilités. </p1>
9) Pour l'emplacement des ${nbreLettres} lettres : il s'agit d'une combinaison car l'ordre n'est pas important et il ne peut pas y avoir de répétition. <br>
$\\phantom{9)}$ Il y a donc $\\binom{${nbreCaracteres}}{${nbreLettres}}$ possibilités. <br>
$\\phantom{9)}$ Pour le choix des ${nbreLettres} lettres il peut y avoir répétition du choix et l'ordre est important : il s'agit donc d'un ${nbreLettres}-uplet d'un ensemble à 26 éléments. <br>
$\\phantom{9)}$ Il y en a donc $26^{${nbreLettres}}$ <br>
$\\phantom{9)}$ Pour les ${nbreChiffres} chiffres il peut y avoir répétition du choix et l'ordre est important : il s'agit donc d'un ${nbreChiffres}-uplet d'un ensemble à 10 éléments. <br>
$\\phantom{9)}$  Il y en a donc $10^{${nbreChiffres}}$. <br>
$\\phantom{9)}$ Au final il y a donc $\\binom{${nbreCaracteres}}{${nbreLettres}}\\times 26^{${nbreLettres}}\\times 10^{${nbreChiffres}}=${rep39}$ codes possibles.`];

let listesolutions = [`1) ${nRepQCM} <br>
2) a) $P(A)=\\dfrac{${nbreRepFausses}}{${nbreRepQCM}}\\approx ${rep2av}$ <br>
$\\phantom{2)}$ b) $P(B)=${rep2bsimp} \\approx ${rep2bv}$ <br>
$\\phantom{2)}$ c) $P(C)=${rep2csimp} \\approx ${rep2cv}$ <br>
$\\phantom{2)}$ d) $P(D)=${rep2dsimp} \\approx ${rep2dv}$`,
`1) a) $${rep21a}$ <br>
$\\phantom{1)}$ b) $${rep21b}$ <br>
$\\phantom{1)}$ c) $${rep21c}$ <br>
$\\phantom{1)}$ d) $${rep22d}$ <br>
$\\phantom{1)}$ e) $${rep22e}$ <br>
$\\phantom{1)}$ f) $${rep22f}$ <br>
2) a) ${rep22a} <br>
$\\phantom{2)}$ b) $${rep22b}$ <br>
$\\phantom{2)}$ c) $${rep22c}$`,
`1) $10^{${nbreChiffres}}\\times26^{${nbreLettres}} =${rep31}$ <br>
2) $26^{${nbreLettres}}\\times 10^{${nbreChiffres}}=${rep31}$ <br>
3) ${lq3}$\\hspace{1mm}\\times\\hspace{1mm} 10^{${nbreChiffres}}=${rep33}$ <br>
4) ${cq4}$\\hspace{1mm}\\times\\hspace{1mm} 26^{${nbreLettres}}=${rep34}$ <br>
5) $26\\times 10\\times\\binom{${placesDispoQ5}}{${nbreLettresm1}}\\times 26^${nbreLettresm1}\\times 10^${nbreChiffresm1}=${rep35}$ <br>
6) ${lq6}$\\hspace{1mm}\\times\\binom{${placesDispoQ6}}{${nbreLettresq6}}\\hspace{1mm}\\times 26^{${nbreLettresq6}}\\hspace{1mm}\\times 10^{${nbreChiffres}}=${rep36}$ <br>
7) ${cq7}$\\hspace{1mm}\\times\\binom{${placesDispoQ7}}{${nbreChiffresq7}}\\hspace{1mm}\\times 10^{${nbreChiffresq7}}\\hspace{1mm}\\times 26^{${nbreLettres}}=${rep37}$ <br>
8) $26\\times \\binom{${nbreCaracteres}}{${nbreLettres}}\\times 10^{${nbreChiffres}}=${rep38}$ <br>
9) $\\binom{${nbreCaracteres}}{${nbreLettres}}\\times 26^{${nbreLettres}}\\times 10^{${nbreChiffres}}=${rep39}$ <br>`];

enonce.innerHTML = listeenonces[k];

solution.innerHTML = listesolutions[k];

correctiond.innerHTML = listecorrections[k];


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
    location.href = "../../../Menus/MenuTaleProbabilites.html";
})