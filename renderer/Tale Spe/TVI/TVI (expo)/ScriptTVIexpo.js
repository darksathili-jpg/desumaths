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


function arrangement(n,k) {
    let rep;
    let factn = fact(n);
    let factnmk = fact(n-k);
    return rep = factn/factnmk;
}

    
function affOupasAff(n) {
    let rep;
    if (n==1) {rep='';} else {rep=`${n}`;}
    return rep;
}

const RG = /(\d)(?=(\d\d\d)+(?!\d))/g
// Le délimiteur FR est le _Narrow No-Break Space_, eh oui !
function useGrouping(int, delimiter = '\u202f') {
  return int.toString().replace(RG, `$1${delimiter}`)
}

function limMoinsInf(a,a1,b,sb,c,c1,d,sd) {
    let rep;
    let aSurcsimp = simpfracmax(a,c);
    let saSurc = rienmoins(a/c);
    if (c>0) {rep=`$f(x)=(${a1}x${sb}${b})~\\text{e}^{${c1}x${sd}${d}}=\\dfrac{${a1}x${sb}${b}}{${c1}x${sd}${d}}\\times (${c1}x${sd}${d})~\\text{e}^{${c1}x${sd}${d}}$
    <p1> $\\phantom{2) a)}$ Si on pose $X=${c1}x${sd}${d}$ alors $(${c1}x${sd}${d})~\\text{e}^{${c1}x${sd}${d}}=Xe^X$ et donc $\\displaystyle{\\lim_{x\\to -\\infty} (${c1}x${sd}${d})~\\text{e}^{${c1}x${sd}${d}}}=\\displaystyle{\\lim_{X\\to -\\infty} Xe^X}=0$ (COURS) </p1>
    <p1> $\\phantom{2) a)}$ De plus $\\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{${a1}x${sb}${b}}{${c1}x${sd}${d}}}=\\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{${a1}x}{${c1}x}}=${saSurc}${aSurcsimp}$ </p1>
    <p1> $\\phantom{2) a)}$ Donc, au final, $\\left. \\begin{array} 0\\displaystyle{\\lim_{x\\to -\\infty} \\dfrac{${a1}x${sb}${b}}{${c1}x${sd}${d}}}=${saSurc}${aSurcsimp} \\\\ \\displaystyle{\\lim_{x\\to -\\infty} (${c1}x${sd}${d})~\\text{e}^{${c1}x${sd}${d}}}=0 \\end{array} \\right\\} \\stackrel{\\text{produit}}{\\implies} \\displaystyle{\\lim_{x\\to -\\infty} f(x)}=0$`;}
    if (a>0 && c<0) {rep=`$x\\mapsto \\text{e}^{${c1}x${sd}${d}}$ est la composée de $x\\mapsto ${c1}x${sd}${d}$ suivie de $x\\mapsto \\text{e}^x$
    <p1> $\\phantom{2) a)} \\left. \\begin{array} 0\\displaystyle{\\lim_{x\\to -\\infty} \\left(${c1}x${sd}${d}\\right)}=+\\infty \\\\ \\displaystyle{\\lim_{x\\to +\\infty} \\text{e}^x}=+\\infty \\end{array} \\right\\}  \\stackrel{\\text{composition}}{\\implies} \\displaystyle{\\lim_{x\\to -\\infty} \\text{e}^{${c1}x${sd}${d}}}=+\\infty$ </p1>
    <p1> $\\phantom{2) a)} \\text{De plus} \\displaystyle{\\lim_{x\\to -\\infty} (${a1}x${sb}${b})}=-\\infty$ </p1>
    $\\phantom{2) a)} \\text{Donc, au final,} \\left. \\begin{array} 0\\displaystyle{\\lim_{x\\to -\\infty} (${a1}x${sb}${b})}=-\\infty \\\\ \\displaystyle{\\lim_{x\\to -\\infty} \\text{e}^{${c1}x${sd}${d}}}=+\\infty \\end{array} \\right\\} \\stackrel{\\text{produit}}{\\implies} \\displaystyle{\\lim_{x\\to -\\infty} f(x)}=-\\infty$`;}
    if (a<0 && c<0) {rep=`$x\\mapsto \\text{e}^{${c1}x${sd}${d}}$ est la composée de $x\\mapsto ${c1}x${sd}${d}$ suivie de $x\\mapsto \\text{e}^x$
    <p1> $\\phantom{2) a)} \\left. \\begin{array} 0\\displaystyle{\\lim_{x\\to -\\infty} \\left(${c1}x${sd}${d}\\right)}=+\\infty \\\\ \\displaystyle{\\lim_{x\\to +\\infty} \\text{e}^x}=+\\infty \\end{array} \\right\\}  \\stackrel{\\text{composition}}{\\implies} \\displaystyle{\\lim_{x\\to -\\infty} \\text{e}^{${c1}x${sd}${d}}}=+\\infty$ </p1>
    <p1> $\\phantom{2) a)} \\text{De plus} \\displaystyle{\\lim_{x\\to -\\infty} (${a1}x${sb}${b})}=+\\infty$ </p1>
    $\\phantom{2) a)} \\text{Donc, au final,} \\left. \\begin{array} 0\\displaystyle{\\lim_{x\\to -\\infty} (${a1}x${sb}${b})}=+\\infty \\\\ \\displaystyle{\\lim_{x\\to -\\infty} \\text{e}^{${c1}x${sd}${d}}}=+\\infty \\end{array} \\right\\} \\stackrel{\\text{produit}}{\\implies} \\displaystyle{\\lim_{x\\to -\\infty} f(x)}=+\\infty$`;}
    return rep;
}

function limmInf(a,c) {
    let rep;
    if (c>0) {rep=`$0$`;}
    if (a>0 && c<0) {rep=`$-\\infty$ `;}
    if (a<0 && c<0) {rep=`$+\\infty$`;}
    return rep;
}

function limPlusInf(a,a1,b,sb,c,c1,d,sd) {
    let rep;
    let aSurcsimp = simpfracmax(a,c);
    let saSurc = rienmoins(a/c);
    if (c<0) {rep=`$f(x)=(${a1}x${sb}${b})~\\text{e}^{${c1}x${sd}${d}}=\\dfrac{${a1}x${sb}${b}}{${c1}x${sd}${d}}\\times (${c1}x${sd}${d})~\\text{e}^{${c1}x${sd}${d}}$
    <p1> $\\phantom{2) b)}$ Si on pose $X=${c1}x${sd}${d}$ alors $(${c1}x${sd}${d})~\\text{e}^{${c1}x${sd}${d}}=Xe^X$ et donc $\\displaystyle{\\lim_{x\\to +\\infty} (${c1}x${sd}${d})~\\text{e}^{${c1}x${sd}${d}}}=\\displaystyle{\\lim_{X\\to -\\infty} Xe^X}=0$ (COURS) </p1>
    <p1> $\\phantom{2) b)}$ De plus $\\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{${a1}x${sb}${b}}{${c1}x${sd}${d}}}=\\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{${a1}x}{${c1}x}}=${saSurc}${aSurcsimp}$ </p1>
    <p1> $\\phantom{2) b)}$ Donc, au final, $\\left. \\begin{array} 0\\displaystyle{\\lim_{x\\to +\\infty} \\dfrac{${a1}x${sb}${b}}{${c1}x${sd}${d}}}=${saSurc}${aSurcsimp} \\\\ \\displaystyle{\\lim_{x\\to +\\infty} (${c1}x${sd}${d})~\\text{e}^{${c1}x${sd}${d}}}=0 \\end{array} \\right\\}  \\stackrel{\\text{produit}}{\\implies} \\displaystyle{\\lim_{x\\to +\\infty} f(x)}=0$ `;}
    if (a>0 && c>0) {rep=`$x\\mapsto \\text{e}^{${c1}x${sd}${d}}$ est la composée de $x\\mapsto ${c1}x${sd}${d}$ suivie de $x\\mapsto \\text{e}^x$
    <p1> $\\phantom{2) b)} \\left. \\begin{array} 0\\displaystyle{\\lim_{x\\to +\\infty} \\left(${c1}x${sd}${d}\\right)}=+\\infty \\\\ \\displaystyle{\\lim_{x\\to +\\infty} \\text{e}^x}=+\\infty \\end{array} \\right\\}  \\stackrel{\\text{composition}}{\\implies} \\displaystyle{\\lim_{x\\to +\\infty} \\text{e}^{${c1}x${sd}${d}}}=+\\infty$ </p1>
    <p1> $\\phantom{2) b)} \\text{De plus} \\displaystyle{\\lim_{x\\to +\\infty} (${a1}x${sb}${b})}=+\\infty$ </p1>
    $\\phantom{2) b)} \\text{Donc, au final,} \\left. \\begin{array} 0\\displaystyle{\\lim_{x\\to +\\infty} (${a1}x${sb}${b})}=+\\infty \\\\ \\displaystyle{\\lim_{x\\to +\\infty} \\text{e}^{${c1}x${sd}${d}}}=+\\infty \\end{array} \\right\\} \\stackrel{\\text{produit}}{\\implies} \\displaystyle{\\lim_{x\\to +\\infty} f(x)}=+\\infty$`;}
    if (a<0 && c>0) {rep=`$x\\mapsto \\text{e}^{${c1}x${sd}${d}}$ est la composée de $x\\mapsto ${c1}x${sd}${d}$ suivie de $x\\mapsto \\text{e}^x$
    <p1> $\\phantom{2) b)} \\left. \\begin{array} 0\\displaystyle{\\lim_{x\\to +\\infty} \\left(${c1}x${sd}${d}\\right)}=+\\infty \\\\ \\displaystyle{\\lim_{x\\to +\\infty} \\text{e}^x}=+\\infty \\end{array} \\right\\}  \\stackrel{\\text{composition}}{\\implies} \\displaystyle{\\lim_{x\\to +\\infty} \\text{e}^{${c1}x${sd}${d}}}=+\\infty$ </p1>
    <p1> $\\phantom{2) b)} \\text{De plus} \\displaystyle{\\lim_{x\\to +\\infty} (${a1}x${sb}${b})}=-\\infty$ </p1>
    $\\phantom{2) b)} \\text{Donc, au final,}\\left. \\begin{array} 0\\displaystyle{\\lim_{x\\to +\\infty} (${a1}x${sb}${b})}=-\\infty \\\\ \\displaystyle{\\lim_{x\\to +\\infty} \\text{e}^{${c1}x${sd}${d}}}=+\\infty \\end{array} \\right\\} \\stackrel{\\text{produit}}{\\implies} \\displaystyle{\\lim_{x\\to +\\infty} f(x)}=-\\infty$`;}
    return rep;
}

function limpinf(a,c) {
    let rep;
    if (c<0) {rep=`$0$ `;}
    if (a>0 && c>0) {rep=`$+\\infty$`;}
    if (a<0 && c>0) {rep=`$-\\infty$`;}
    return rep;
}

function FdeXEgal(ac) {
    let rep;
    if (ac>0) {rep=nbrealéa(1,15);}
    if (ac<0) {rep=nbrealéa(-15,-1);}
    return rep;
}

/*------------------------------------------------------------------------------
Retourne l'image d'un point par une rotation (repère X de gauche à droite, Y du
haut vers le bas).
ENTREE :
    M        Point à transformer
    O        Point centre de la rotation
    angle    Angle (en degrés)
SORTIE :
    Image de M par la rotation d'angle angle autour de O (les coordonnées ne
    sont pas entières).
------------------------------------------------------------------------------*/
function rotation(xM,yM,xO,yO,angle) {
    let rep;
    x = (xM-xO) * Math.cos (Math.PI*angle/180) + (yM-yO) * Math.sin (Math.PI*angle/180) + xO;
    y = - (xM-xO) * Math.sin (Math.PI*angle/180) + (yM-yO) * Math.cos (Math.PI*angle/180) + yO;
    return rep = [x,y];
  }

function tabvar(x,y,L,l,canvas,ac,a,c,num,denom,signe,coefnum,coefdenom,coefexnum,coefexdenom,savexpo,sexpo) {
    var canvas = document.getElementById(canvas); 
    var context = canvas.getContext("2d");
    context.save();
    context.beginPath();
    context.strokeRect(x,y,L,l);
    context.beginPath();
    context.moveTo(x,x+70);
    context.lineTo(L+x,x+70);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+70,y);
    context.lineTo(x+70,l+30);
    context.strokeStyle="black";
    context.stroke();
    context.font = '30px serif';
    context.fillText(`x`,47,70);
    context.fillText(`f '(x)`,25,120);
    context.fillText(`f(x)`,35,200);
    context.font = '20px serif';
        if (denom==1) {context.fillText(`${signe}${num}`,x+200,70);}
        if (denom!=1) {context.fillText(`${signe}${num}/${denom}`,x+190,70);}
    context.fillText(`- ∞`,x+80,70);
    context.fillText(`+ ∞`,L+x-40,70);
    context.beginPath();
    context.moveTo(x,x+120);
    context.lineTo(L+x,x+120);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+210,x+70);
    context.lineTo(x+210,x+120);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+210, x+95, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    if (ac<0) {
        context.font = '15px serif';
        if (a>0 && c<0) {context.fillText(`- ∞`,x+80,x+200);context.fillText(`0`,L+x-40,x+200);}
        if (a<0 && c>0) {context.fillText(`0`,x+80,x+200);context.fillText(`- ∞`,L+x-40,x+200);}
    context.fillText(`M`,x+210,x+140);
    context.fillText(`+`,150,x+95);
    context.fillText(`-`,300,x+95);
    context.beginPath();
    context.moveTo(x+100,l);
    context.lineTo(x+180,160);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+180,160);
    context.lineTo(f1hdx,f1hdy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+180,160);
    context.lineTo(f1hgx,f1hgy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+240,160);
    context.lineTo(L+x-40,x+180);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(L+x-40,x+180);
    context.lineTo(f2hdx,f2hdy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(L+x-40,x+180);
    context.lineTo(f2hgx,f2hgy);
    context.strokeStyle="black";
    context.stroke();
    }
    if (ac>0) {
        context.font = '15px serif';
        if (a>0 && c>0) {context.fillText(`0`,x+80,160);context.fillText(`+ ∞`,L+x-40,160);}
        if (a<0 && c<0) {context.fillText(`+ ∞`,x+80,160);context.fillText(`0`,L+x-40,160);}
    context.fillText(`m`,x+220,220);
    context.fillText(`+`,300,x+95);
    context.fillText(`-`,150,x+95);
    context.beginPath();
    context.moveTo(x+100,l-30);
    context.lineTo(x+200,200);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+240,200);
    context.lineTo(L+x-40,l-30);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+200,200);
    context.lineTo(f3hgx,f3hgy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(x+200,200);
    context.lineTo(f3hdx,f3hdy);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.moveTo(L+x-40,l-30);
    context.lineTo(f4hgx,f4hgy);
    context.strokeStyle="black";
    context.stroke();
    context.moveTo(L+x-40,l-30);
    context.lineTo(f4hdx,f4hdy);
    context.strokeStyle="black";
    context.stroke();
    }
}

function MinMax(ac,snum1,num1,denom1,snum2,num2,denom2) {
    let rep;
    if (ac>0) {
        if (denom1==1 && denom2==1) {rep=`m=${snum1}${num1}~\\text{e}^{${snum2}${num2}}`;}
        if (denom1==1 && denom2!=1) {rep=`m=${snum1}${num1}~\\text{e}^{${snum2}\\frac{${num2}}{${denom2}}}`;}
        if (denom1!=1 && denom2==1) {rep=`m=${snum1}\\dfrac{${num1}}{${denom1}}~\\text{e}^{${snum2}${num2}}`;}
        if (denom1!=1 && denom2!=1) {rep=`m=${snum1}\\dfrac{${num1}}{${denom1}}~\\text{e}^{${snum2}\\frac{${num2}}{${denom2}}}`;}}
    else {
        if (denom1==1 && denom2==1) {rep=`M=${snum1}${num1}~\\text{e}^{${snum2}${num2}}`;}
        if (denom1==1 && denom2!=1) {rep=`M=${snum1}${num1}~\\text{e}^{${snum2}\\frac{${num2}}{${denom2}}}`;}
        if (denom1!=1 && denom2==1) {rep=`M=${snum1}\\dfrac{${num1}}{${denom1}}~\\text{e}^{${snum2}${num2}}`;}
        if (denom1!=1 && denom2!=1) {rep=`M=${snum1}\\dfrac{${num1}}{${denom1}}~\\text{e}^{${snum2}\\frac{${num2}}{${denom2}}}`;}}
    return rep;
}

function MiMa(ac,snum1,num1,denom1,snum2,num2,denom2) {
    let rep;
    if (ac>0) {
        if (denom1==1 && denom2==1) {rep=`${snum1}${num1}~\\text{e}^{${snum2}${num2}}`;}
        if (denom1==1 && denom2!=1) {rep=`${snum1}${num1}~\\text{e}^{${snum2}\\frac{${num2}}{${denom2}}}`;}
        if (denom1!=1 && denom2==1) {rep=`${snum1}\\dfrac{${num1}}{${denom1}}~\\text{e}^{${snum2}${num2}}`;}
        if (denom1!=1 && denom2!=1) {rep=`${snum1}\\dfrac{${num1}}{${denom1}}~\\text{e}^{${snum2}\\frac{${num2}}{${denom2}}}`;}}
    else {
        if (denom1==1 && denom2==1) {rep=`${snum1}${num1}~\\text{e}^{${snum2}${num2}}`;}
        if (denom1==1 && denom2!=1) {rep=`${snum1}${num1}~\\text{e}^{${snum2}\\frac{${num2}}{${denom2}}}`;}
        if (denom1!=1 && denom2==1) {rep=`${snum1}\\dfrac{${num1}}{${denom1}}~\\text{e}^{${snum2}${num2}}`;}
        if (denom1!=1 && denom2!=1) {rep=`${snum1}\\dfrac{${num1}}{${denom1}}~\\text{e}^{${snum2}\\frac{${num2}}{${denom2}}}`;}}
    return rep;
}

const REGEX_GROUPS = /(\d)(?=(\d\d\d)+(?!\d))/g
// Le délimiteur FR est le _Narrow No-Break Space_, eh oui !
function useGrouping(int, delimiter = '\u202f') {
  return int.toString().replace(REGEX_GROUPS, `$1${delimiter}`)
}

function Question4a(ac,signeracine,racinenum,racinedenom,falpha,minimax) {
    let rep;
    if (ac<0 && a>0 && c<0) {
        if (racinedenom==1) {rep=`Sur $\\left[${signeracine}${racinenum}~;~+\\infty\\right[$, l'équation $f(x)=${falpha}$ n'admet pas de solution car $f(x)\\geqslant 0$ <br>
        Sur $\\left]-\\infty~;~${signeracine}${racinenum}\\right]$ : <br>
        $\\bullet f$ est continue car dérivable <br>
        $\\bullet f$ est strictement croissante <br>
        $\\bullet \\left. \\begin{array} f\\left( ${signeracine}${racinenum} \\right)=${minimaxi}\\approx ${sommet} \\\\ \\displaystyle{\\lim_{x\\to -\\infty} f(x)}=-\\infty \\end{array} \\right\\} \\text{Or} ${falpha}\\in \\left]-\\infty~;~${minimax} \\right]$ <br>
        Donc d'après le corollaire du théorème des valeurs intermédiaires, l'équation $f(x)=${falpha}$ admet une unique solution $\\alpha$ sur $\\mathbb{R}$. `;}
            else {rep=`Sur $\\left[${signeracine}\\dfrac{${racinenum}}{${racinedenom}}~;~+\\infty\\right[$, l'équation $f(x)=${falpha}$ n'admet pas de solution car $f(x)\\geqslant 0$ <br>
            Sur $\\left]-\\infty~;~${signeracine}\\dfrac{${racinenum}}{${racinedenom}}\\right]$ : <br>
            $\\bullet f$ est continue car dérivable <br>
            $\\bullet f$ est strictement croissante <br>
            $\\bullet \\left. \\begin{array} 0f\\left( ${signeracine}\\dfrac{${racinenum}}{${racinedenom}} \\right)=${minimaxi}\\approx ${sommet} \\\\ \\displaystyle{\\lim_{x\\to -\\infty} f(x)}=-\\infty \\end{array} \\right\\} \\text{Or}~ ${falpha}\\in \\left]-\\infty~;~${minimax} \\right]$ <br>
            Donc d'après le corollaire du théorème des valeurs intermédiaires, l'équation $f(x)=${falpha}$ admet une unique solution $\\alpha$ sur $\\mathbb{R}$. <br>`;} }
    if (ac<0 && a<0 && c>0) {if (racinedenom==1) {rep=`Sur $\\left]-\\infty~;~${signeracine}${racinenum}\\right]$, l'équation $f(x)=${falpha}$ n'admet pas de solution car $f(x)\\geqslant 0$ <br>
    Sur $\\left[${signeracine}${racinenum}~;~+\\infty\\right[$ : <br>
    $\\bullet f$ est continue car dérivable <br>
    $\\bullet f$ est strictement décroissante <br>
    $\\bullet \\left. \\begin{array} f\\left( ${signeracine}${racinenum} \\right)=${minimaxi}\\approx ${sommet} \\\\ \\displaystyle{\\lim_{x\\to +\\infty} f(x)}=-\\infty \\end{array} \\right\\} \\text{Or}~ ${falpha}\\in \\left]-\\infty~;~${minimax}\\right]$ <br>
    Donc d'après le corollaire du théorème des valeurs intermédiaires, l'équation $f(x)=${falpha}$ admet une unique solution $\\alpha$ sur $\\mathbb{R}$. `;}
        else {rep=`Sur $\\left]-\\infty~;~${signeracine}\\dfrac{${racinenum}}{${racinedenom}}\\right]$, l'équation $f(x)=${falpha}$ n'admet pas de solution car $f(x)\\geqslant 0$ <br>
        Sur $\\left[${signeracine}\\dfrac{${racinenum}}{${racinedenom}}~;~+\\infty\\right[$ : <br>
        $\\bullet f$ est continue car dérivable <br>
        $\\bullet f$ est strictement décroissante <br>
        $\\bullet \\left. \\begin{array} 0f\\left( ${signeracine}\\dfrac{${racinenum}}{${racinedenom}} \\right)=${minimaxi}\\approx ${sommet} \\\\ \\displaystyle{\\lim_{x\\to +\\infty} f(x)}=-\\infty \\end{array} \\right\\} \\text{Or}~ ${falpha}\\in \\left]-\\infty~;~${minimax}\\right]$ <br>
        Donc d'après le corollaire du théorème des valeurs intermédiaires, l'équation $f(x)=${falpha}$ admet une unique solution $\\alpha$ sur $\\mathbb{R}$. <br>`;}}
    
    if (ac>0 && a>0 && c>0) {if (racinedenom==1) {rep=`Sur $\\left]-\\infty~;~${signeracine}${racinenum}\\right]$, l'équation $f(x)=${falpha}$ n'admet pas de solution car $f(x)\\leqslant 0$ <br>
        Sur $\\left[${signeracine}${racinenum}~;~+\\infty\\right[$ : <br>
        $\\bullet f$ est continue car dérivable <br>
        $\\bullet f$ est strictement croissante <br>
        $\\bullet \\left. \\begin{array} f\\left( ${signeracine}${racinenum} \\right)=${minimaxi}\\approx ${sommet} \\\\ \\displaystyle{\\lim_{x\\to +\\infty} f(x)}=+\\infty \\end{array} \\right\\} \\text{Or}~ ${falpha}\\in \\left[${minimax}~;~+\\infty \\right[$ <br>
        Donc d'après le corollaire du théorème des valeurs intermédiaires, l'équation $f(x)=${falpha}$ admet une unique solution $\\alpha$ sur $\\mathbb{R}$. `;}
            else {rep=`Sur $\\left]-\\infty~;~${signeracine}\\dfrac{${racinenum}}{${racinedenom}}\\right]$, l'équation $f(x)=${falpha}$ n'admet pas de solution car $f(x)\\leqslant 0$ <br>
            Sur $\\left[${signeracine}\\dfrac{${racinenum}}{${racinedenom}}~;~+\\infty\\right[$ : <br>
            $\\bullet f$ est continue car dérivable <br>
            $\\bullet f$ est strictement croissante <br>
            $\\bullet \\left. \\begin{array} 0f\\left( ${signeracine}\\dfrac{${racinenum}}{${racinedenom}} \\right)=${minimaxi}\\approx ${sommet} \\\\ \\displaystyle{\\lim_{x\\to +\\infty} f(x)}=+\\infty \\end{array} \\right\\} \\text{Or}~ ${falpha}\\in \\left[${minimax}~;~+\\infty \\right[$ <br>
            Donc d'après le corollaire du théorème des valeurs intermédiaires, l'équation $f(x)=${falpha}$ admet une unique solution $\\alpha$ sur $\\mathbb{R}$. <br>`;} }
    if (ac>0 && a<0 && c<0) {if (racinedenom==1) {rep=`Sur $\\left[${signeracine}${racinenum}~;~+\\infty\\right[$, l'équation $f(x)=${falpha}$ n'admet pas de solution car $f(x)\\leqslant 0$ <br>
    Sur $\\left]-\\infty~;~${signeracine}${racinenum}\\right]$ : <br>
    $\\bullet f$ est continue car dérivable <br>
    $\\bullet f$ est strictement décroissante <br>
    $\\bullet \\left. \\begin{array} f\\left( ${signeracine}${racinenum} \\right)=${minimaxi}\\approx ${sommet} \\\\ \\displaystyle{\\lim_{x\\to -\\infty} f(x)}=+\\infty \\end{array} \\right\\} \\text{Or}~ ${falpha}\\in \\left[${minimax}~;~+\\infty \\right[$ <br>
    Donc d'après le corollaire du théorème des valeurs intermédiaires, l'équation $f(x)=${falpha}$ admet une unique solution $\\alpha$ sur $\\mathbb{R}$. `;}
        else {rep=`Sur $\\left[${signeracine}\\dfrac{${racinenum}}{${racinedenom}}~;~+\\infty\\right[$, l'équation $f(x)=${falpha}$ n'admet pas de solution car $f(x)\\leqslant 0$ <br>
        Sur $\\left]-\\infty~;~${signeracine}\\dfrac{${racinenum}}{${racinedenom}}\\right]$ : <br>
        $\\bullet f$ est continue car dérivable <br>
        $\\bullet f$ est strictement décroissante <br>
        $\\bullet \\left. \\begin{array} 0f\\left( ${signeracine}\\dfrac{${racinenum}}{${racinedenom}} \\right)=${minimaxi}\\approx ${sommet} \\\\ \\displaystyle{\\lim_{x\\to -\\infty} f(x)}=+\\infty \\end{array} \\right\\} \\text{Or}~ ${falpha}\\in \\left[${minimax}~;~+\\infty \\right[$ <br>
        Donc d'après le corollaire du théorème des valeurs intermédiaires, l'équation $f(x)=${falpha}$ admet une unique solution $\\alpha$ sur $\\mathbb{R}$. <br>`;}}
    return rep;;
}

function dichotomie(a,b,c,d,falpha) {
    let rep;
    let inf = -100;
    let sup = 100;
    let m = sup-inf;
    while (sup-inf>0.0001) {
        m=(inf+sup)/2;
        let fm = (a*m+b)*Math.exp(c*m+d)-falpha;
        let finf = (a*inf+b)*Math.exp(c*inf+d)-falpha;
        if (finf*fm<0) {sup=m;}
            else {inf=m;}
    }
    return rep = [inf,sup];
}

let a = nbreouoppose(nbrealéa(1,10));
let a1 = unoupasun(a);
let b = nbreouoppose(nbrealéa(1,10));
let sb = rienplus(b);
let c = nbreouoppose(nbrealéa(1,10));
let pgdc = parenthesegd(c);
let c1 = unoupasun(c);
let sc = rienplus(c);
let d = nbreouoppose(nbrealéa(1,10));
let sd = rienplus(d);
let ac = a*c;
let sac = rienplus(ac);
let bc = b*c;
let sbc = rienplus(bc);
let aPlusbc = a+bc;
let saPlusbc = rienplus(aPlusbc);
let lim1 = limMoinsInf(a,a1,b,sb,c,c1,d,sd);
let lim2 = limPlusInf(a,a1,b,sb,c,c1,d,sd);
let lim1rep = limmInf(a,c);
let lim2rep = limpinf(a,c);
let racine = -aPlusbc/ac;
let racinesimpfrac = simplifierfraction(-aPlusbc,ac)
let racinesimp = fracsimp(racinesimpfrac[0],racinesimpfrac[1]);
let sracinesimp = rienmoins(-aPlusbc/ac);
let sommet = useGrouping(avecVirgule(Math.round((a*racine+b)*Math.exp(c*racine+d)*10**9)/10**9));
let falpha = FdeXEgal(ac);
let racineCoefAvExpo = simplifierfraction(-a*aPlusbc+b*ac,ac);
let RCAE = fracsimp(racineCoefAvExpo[0],racineCoefAvExpo[1]);
let sRCAE = rienmoins((-a*aPlusbc+b*ac)/ac);
let racineExpo = simplifierfraction(-c*aPlusbc+d*ac,ac);
let RE = fracsimp(racineExpo[0],racineExpo[1]);
let sRE = rienmoins((-c*aPlusbc+d*ac)/ac);
let f1hd = rotation(190,165,200,160,30);
let f1hg = rotation(190,165.75,200,160,-30);
let f1hdx = f1hd[0];
let f1hdy = f1hd[1];
let f1hgx = f1hg[0];
let f1hgy = f1hg[1];
let f2hd = rotation(370,196.67,380,200,30);
let f2hg = rotation(370,196.67,380,200,-30);
let f2hdx = f2hd[0];
let f2hdy = f2hd[1];
let f2hgx = f2hg[0];
let f2hgy = f2hg[1];
let f3hd = rotation(210,197,220,200,30);
let f3hg = rotation(210,197,220,200,-30);
let f3hdx = f3hd[0];
let f3hdy = f3hd[1];
let f3hgx = f3hg[0];
let f3hgy = f3hg[1];
let f4hd = rotation(370,172.5,380,170,30);
let f4hg = rotation(370,172.5,380,170,-30);
let f4hdx = f4hd[0];
let f4hdy = f4hd[1];
let f4hgx = f4hg[0];
let f4hgy = f4hg[1];
let minimaxi = MinMax(ac,sRCAE,RCAE[0],RCAE[1],sRE,RE[0],RE[1]);
let minimax = MiMa(ac,sRCAE,RCAE[0],RCAE[1],sRE,RE[0],RE[1]);
let q4a = Question4a(ac,sracinesimp,racinesimp[0],racinesimp[1],falpha,minimax);
let alpha = dichotomie(a,b,c,d,falpha);
let alphainf = avecVirgule(Math.round(alpha[0]*100)/100);
let alphasup = avecVirgule(alpha[0]+0.01);


tabvar(20,30,400,200,"canvasC",ac,a,c,racinesimp[0],racinesimp[1],sracinesimp,RCAE[0],RCAE[1],RE[0],RE[1],sRCAE,sRE);
tabvar(20,30,400,200,"canvasS",ac,a,c,racinesimp[0],racinesimp[1],sracinesimp,RCAE[0],RCAE[1],RE[0],RE[1],sRCAE,sRE);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
let correction1 = document.getElementById('correction1');
let correction2 = document.getElementById('correction2');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
let solution1 = document.getElementById('solution1');
let solution2 = document.getElementById('solution2');
var test = document.getElementById('test');


let listeenonces = [`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=(${a1}x${sb}${b})~\\text{e}^{${c1}x${sd}${d}}$ <br>
1) Déterminer la fonction dérivée de $f$ sur $\\mathbb{R}$. <br>
2) a) Déterminer la limite de $f$ en $-\\infty$. <br>
$\\phantom{2)}$ b) Déterminer la limite de $f$ en $+\\infty$. <br>
3) Dresser le tableau de variations complet de $f$ sur $\\mathbb{R}$. <br>
4) a) Montrer que l'équation $f(x)=${falpha}$ admet une unique solution $\\alpha$ sur $\\mathbb{R}$.<br>
$\\phantom{4)}$ b) Déterminer une valeur approchée de $\\alpha$ à $10^{-2}$ près.`];

let listecorrections = [`1) On va utiliser la formule : $(u\\times v)'=u'v+v'u$. <br>
$\\phantom{1)} u(x)=${a1}x${sb}${b}$ donc $u'(x)=${a}$ et $v(x)=\\text{e}^{${c1}x${sd}${d}}$ donc $v'(x)=${c1}\\text{e}^{${c1}x${sd}${d}}$  $\\left(\\text{on a utilisé la formule $\\left(\\text{e}^u\\right)'=u'\\text{e}^u$}\\right)$ <br>
$\\phantom{1)} f'(x)=\\underbrace{${a}}_{u'}\\times \\underbrace{\\text{e}^{${c1}x${sd}${d}}}_{v} + \\underbrace{${pgdc[0]}${c1}\\text{e}^{${c1}x${sd}${d}}${pgdc[1]}}_{v'} \\times \\underbrace{(${a1}x${sb}${b})}_{u}=\\left[ ${a}${sc}${c}\\times (${a1}x${sb}${b}) \\right] \\text{e}^{${c1}x${sd}${d}}$ <br>
$\\phantom{1) f'(x)}=(${a}${sac}${ac}x${sbc}${bc})~\\text{e}^{${c1}x${sd}${d}}=(${ac}x${saPlusbc}${aPlusbc})~\\text{e}^{${c1}x${sd}${d}}$ <br>
2) a) ${lim1} <br>
$\\phantom{2)}$ b) ${lim2} <br>
3) `];

let listesolutions = [``];

enonce.innerHTML = listeenonces[0];

solution1.innerHTML = `1) $f'(x)=(${ac}x${saPlusbc}${aPlusbc})~\\text{e}^{${c1}x${sd}${d}}$ <br>
2) a) $\\displaystyle{\\lim_{x\\to -\\infty} f(x)}=$${lim1rep} <br>
$\\phantom{2)}$ b) $\\displaystyle{\\lim_{x\\to +\\infty} f(x)}=$${lim2rep} <br>
3) `;

solution2.innerHTML = `$${minimaxi}\\approx ${sommet}$ <br>
4) a) TVI <br>
$\\phantom{5)}$ b) $\\alpha\\approx ${alphainf}$`;

correction1.innerHTML = listecorrections[0];

correction2.innerHTML = `$${minimaxi}\\approx ${sommet}$ <br>
4) a) ${q4a} <br>
$\\phantom{4)}$ b) $\\alpha\\approx ${alphainf}$`;



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
    location.href = "../../../Menus/MenuTaleContinuite.html";
})