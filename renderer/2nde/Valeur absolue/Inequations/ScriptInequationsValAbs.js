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

function cas(a,denom,denom1,denom2) {
    let k;
    if (a<0) {k=0;}
    if (a==0 && denom !=1) {k=1;}
    if (a>0 && denom1 !=1 && denom2!=1) {k=2;}
    if (a==0 && denom==1) {k=3;}
    if (a>0 && denom1==1 && denom2!=1) {k=4;}
    if (a>0 && denom1!=1 && denom2==1) {k=5;}
    if (a>0 && denom1==1 && denom2==1) {k=6;}
    return k; 
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

function paszero() {
    let rep = nbrealéa(-2,15);
    while (rep==0) {rep=nbrealéa(-2,15);}
    return rep;
}

function supinf(k) {
    if (k==1) {return `Résoudre dans $\\mathbb{R}$ l'inéquation : $\\left|${a}x${sb}${b}\\right| \\leqslant ${c}$`;}
    if (k==2) {return `Résoudre dans $\\mathbb{R}$ l'inéquation : $\\left|${a}x${sb}${b}\\right| < ${c}$`;}
    if (k==3) {return `Résoudre dans $\\mathbb{R}$ l'inéquation : $\\left|${a}x${sb}${b}\\right| \\geqslant ${c}$`;}
    if (k==4) {return `Résoudre dans $\\mathbb{R}$ l'inéquation : $\\left|${a}x${sb}${b}\\right| > ${c}$`;} 
}

function corriges(k,c,a,ssol1,sol1simpnum,sol1simpdenom,ssol2,sol2simpnum,sol2simpdenom) {
    if (k==1 && c<0) {return `$${c}$ est négatif donc c'est impossible car une valeur absolue est toujours positive.<br> $S=\\varnothing$`;}
    if (k==2 && c<0) {return `$${c}$ est négatif donc c'est impossible car une valeur absolue est toujours positive.<br> $S=\\varnothing$`;}
    if (k==3 && c<0) {return `$${c}$ est négatif donc c'est toujours vrai car une valeur absolue est toujours positive.<br> $S=\\mathbb{R}$`;}
    if (k==4 && c<0) {return `$${c}$ est négatif donc c'est toujours vrai car une valeur absolue est toujours positive.<br> $S=\\mathbb{R}$`;}
    if (k==1 && c>0 && a>0 && sol1simpdenom!=1 && sol2simpdenom!=1) {return `Il faut résoudre $${oppc}\\leqslant ${a}x${sb}${b}\\leqslant ${c}$ donc : <br>
    $${oppc}${soppb}${oppb}\\leqslant ${a}x\\leqslant ${c}${soppb}${oppb}$ donc :<br>
    $${oppcoppb}\\leqslant ${a}x\\leqslant ${coppb}$ donc :<br><br>
    $\\dfrac{${oppcoppb}}{${a}}\\leqslant x \\leqslant \\dfrac{${coppb}}{${a}}$ donc : $${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}\\leqslant x \\leqslant ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}$<br><br>
    $S=\\left[${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}~;~${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}} \\right] $`;}
    if (k==2 && c>0 && a>0 && sol1simpdenom!=1 && sol2simpdenom!=1) {return `Il faut résoudre $${oppc} < ${a}x${sb}${b} < ${c}$ donc : <br>
    $${oppc}${soppb}${oppb} < ${a}x < ${c}${soppb}${oppb}$ donc :<br>
    $${oppcoppb} < ${a}x < ${coppb}$ donc :<br><br>
    $\\dfrac{${oppcoppb}}{${a}} < x < \\dfrac{${coppb}}{${a}}$ donc : $${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} < x < ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}$<br>
    $S=\\left]${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}~;~${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}} \\right[ $`;}
    if (k==1 && c>0 && a<0 && sol1simpdenom!=1 && sol2simpdenom!=1) {return `Il faut résoudre $${oppc}\\leqslant ${a}x${sb}${b}\\leqslant ${c}$ donc : <br>
    $${oppc}${soppb}${oppb}\\leqslant ${a}x\\leqslant ${c}${soppb}${oppb}$ donc :<br>
    $${oppcoppb}\\leqslant ${a}x\\leqslant ${coppb}$ donc :<br><br>
    $\\dfrac{${oppcoppb}}{${a}}\\geqslant x \\geqslant \\dfrac{${coppb}}{${a}}$ donc : $${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}\\geqslant x \\geqslant ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}$<br><br>
    $S=\\left[${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}~;~${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} \\right] $`;}
    if (k==2 && c>0 && a<0 && sol1simpdenom!=1 && sol2simpdenom!=1) {return `Il faut résoudre $${oppc} < ${a}x${sb}${b} < ${c}$ donc : <br>
    $${oppc}${soppb}${oppb} < ${a}x < ${c}${soppb}${oppb}$ donc :<br>
    $${oppcoppb} < ${a}x < ${coppb}$ donc :<br><br>
    $\\dfrac{${oppcoppb}}{${a}} > x > \\dfrac{${coppb}}{${a}}$ donc : $${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} > x > ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}$<br>
    $S=\\left]${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}~;~${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} \\right[ $`;}
    if (k==3 && c>0 && a>0 && sol1simpdenom!=1 && sol2simpdenom!=1) {return `Il faut résoudre :<br>
    $\\begin{array}{rclcrcl} ${a}x${sb}${b} & \\geqslant & ${c} & \\text{ou} & ${a}x${sb}${b} & \\leqslant & ${oppc} \\\\
    ${a}x & \\geqslant & ${c} ${soppb} ${oppb} & \\text{ou} & ${a}x & \\leqslant & ${oppc} ${soppb} ${oppb} \\\\
    ${a}x & \\geqslant & ${coppb} & \\text{ou} & ${a}x & \\leqslant & ${oppcoppb} \\\\
    x & \\geqslant & \\dfrac{${coppb}}{${a}} & \\text{ou} & x & \\leqslant & \\dfrac{${oppcoppb}}{${a}} \\\\
    x & \\geqslant & ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}  & \\text{ou} & x & \\leqslant & ${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} \\\\
    \\end{array}$<br><br>
    $S=\\left] -\\infty~;~${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}\\right] \\cup \\left[ ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}~;~+\\infty\\right[$`;}
    if (k==4 && c>0 && a>0 && sol1simpdenom!=1 && sol2simpdenom!=1) {return `Il faut résoudre :<br>
    $\\begin{array}{rclcrcl} ${a}x${sb}${b} & > & ${c} & \\text{ou} & ${a}x${sb}${b} & < & ${oppc} \\\\
    ${a}x & > & ${c} ${soppb} ${oppb} & \\text{ou} & ${a}x & < & ${oppc} ${soppb} ${oppb} \\\\
    ${a}x & > & ${coppb} & \\text{ou} & ${a}x & < & ${oppcoppb} \\\\
    x & > & \\dfrac{${coppb}}{${a}} & \\text{ou} & x & < & \\dfrac{${oppcoppb}}{${a}} \\\\
    x & > & ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}  & \\text{ou} & x & < & ${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} \\\\
    \\end{array}$<br><br>
    $S=\\left] -\\infty~;~${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}\\right[ \\cup \\left] ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}~;~+\\infty\\right[$`;}
    if (k==3 && c>0 && a<0 && sol1simpdenom!=1 && sol2simpdenom!=1) {return `Il faut résoudre :<br>
    $\\begin{array}{rclcrcl} ${a}x${sb}${b} & \\geqslant & ${c} & \\text{ou} & ${a}x${sb}${b} & \\leqslant & ${oppc} \\\\
    ${a}x & \\geqslant & ${c} ${soppb} ${oppb} & \\text{ou} & ${a}x & \\leqslant & ${oppc} ${soppb} ${oppb} \\\\
    ${a}x & \\geqslant & ${coppb} & \\text{ou} & ${a}x & \\leqslant & ${oppcoppb} \\\\
    x & \\leqslant & \\dfrac{${coppb}}{${a}} & \\text{ou} & x & \\geqslant & \\dfrac{${oppcoppb}}{${a}} \\\\
    x & \\leqslant & ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}  & \\text{ou} & x & \\geqslant & ${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} \\\\
    \\end{array}$<br><br>
    $S=\\left] -\\infty~;~${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}\\right] \\cup \\left[${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} ~;~+\\infty\\right[$`;}
    if (k==4 && c>0 && a<0 && sol1simpdenom!=1 && sol2simpdenom!=1) {return `Il faut résoudre :<br>
    $\\begin{array}{rclcrcl} ${a}x${sb}${b} & > & ${c} & \\text{ou} & ${a}x${sb}${b} & < & ${oppc} \\\\
    ${a}x & > & ${c} ${soppb} ${oppb} & \\text{ou} & ${a}x & < & ${oppc} ${soppb} ${oppb} \\\\
    ${a}x & > & ${coppb} & \\text{ou} & ${a}x & < & ${oppcoppb} \\\\
    x & < & \\dfrac{${coppb}}{${a}} & \\text{ou} & x & > & \\dfrac{${oppcoppb}}{${a}} \\\\
    x & < & ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}  & \\text{ou} & x & > & ${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} \\\\
    \\end{array}$<br><br>
    $S=\\left] -\\infty~;~${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}\\right[ \\cup \\left]${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} ~;~+\\infty\\right[$`;}
    if (k==1 && c>0 && a>0 && sol1simpdenom==1 && sol2simpdenom!=1) {return `Il faut résoudre $${oppc}\\leqslant ${a}x${sb}${b}\\leqslant ${c}$ donc : <br>
    $${oppc}${soppb}${oppb}\\leqslant ${a}x\\leqslant ${c}${soppb}${oppb}$ donc :<br>
    $${oppcoppb}\\leqslant ${a}x\\leqslant ${coppb}$ donc :<br><br>
    $\\dfrac{${oppcoppb}}{${a}}\\leqslant x \\leqslant \\dfrac{${coppb}}{${a}}$ donc : $${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}\\leqslant x \\leqslant ${ssol1} ${sol1simpnum}$<br><br>
    $S=\\left[${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}~;~${ssol1} ${sol1simpnum} \\right] $`;}
    if (k==1 && c>0 && a>0 && sol1simpdenom!=1 && sol2simpdenom==1) {return `Il faut résoudre $${oppc}\\leqslant ${a}x${sb}${b}\\leqslant ${c}$ donc : <br>
    $${oppc}${soppb}${oppb}\\leqslant ${a}x\\leqslant ${c}${soppb}${oppb}$ donc :<br>
    $${oppcoppb}\\leqslant ${a}x\\leqslant ${coppb}$ donc :<br><br>
    $\\dfrac{${oppcoppb}}{${a}}\\leqslant x \\leqslant \\dfrac{${coppb}}{${a}}$ donc : $${ssol2}${sol2simpnum}\\leqslant x \\leqslant ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}$<br><br>
    $S=\\left[${ssol2}${sol2simpnum}~;~${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}} \\right] $`;}
    if (k==1 && c>0 && a>0 && sol1simpdenom==1 && sol2simpdenom==1) {return `Il faut résoudre $${oppc}\\leqslant ${a}x${sb}${b}\\leqslant ${c}$ donc : <br>
    $${oppc}${soppb}${oppb}\\leqslant ${a}x\\leqslant ${c}${soppb}${oppb}$ donc :<br>
    $${oppcoppb}\\leqslant ${a}x\\leqslant ${coppb}$ donc :<br><br>
    $\\dfrac{${oppcoppb}}{${a}}\\leqslant x \\leqslant \\dfrac{${coppb}}{${a}}$ donc : $${ssol2}${sol2simpnum}\\leqslant x \\leqslant ${ssol1} ${sol1simpnum}$<br><br>
    $S=\\left[${ssol2}${sol2simpnum}~;~${ssol1} ${sol1simpnum} \\right] $`;}
    if (k==2 && c>0 && a>0 && sol1simpdenom==1 && sol2simpdenom!=1) {return `Il faut résoudre $${oppc} < ${a}x${sb}${b} < ${c}$ donc : <br>
    $${oppc}${soppb}${oppb} < ${a}x < ${c}${soppb}${oppb}$ donc :<br>
    $${oppcoppb} < ${a}x < ${coppb}$ donc :<br><br>
    $\\dfrac{${oppcoppb}}{${a}} < x < \\dfrac{${coppb}}{${a}}$ donc : $${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} < x < ${ssol1} ${sol1simpnum}$<br>
    $S=\\left]${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}~;~${ssol1} {${sol1simpnum} \\right[ $`;}
    if (k==2 && c>0 && a>0 && sol1simpdenom!=1 && sol2simpdenom==1) {return `Il faut résoudre $${oppc} < ${a}x${sb}${b} < ${c}$ donc : <br>
    $${oppc}${soppb}${oppb} < ${a}x < ${c}${soppb}${oppb}$ donc :<br>
    $${oppcoppb} < ${a}x < ${coppb}$ donc :<br><br>
    $\\dfrac{${oppcoppb}}{${a}} < x < \\dfrac{${coppb}}{${a}}$ donc : $${ssol2}${sol2simpnum} < x < ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}$<br>
    $S=\\left]${ssol2}${sol2simpnum}~;~${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}} \\right[ $`;}
    if (k==2 && c>0 && a>0 && sol1simpdenom==1 && sol2simpdenom==1) {return `Il faut résoudre $${oppc} < ${a}x${sb}${b} < ${c}$ donc : <br>
    $${oppc}${soppb}${oppb} < ${a}x < ${c}${soppb}${oppb}$ donc :<br>
    $${oppcoppb} < ${a}x < ${coppb}$ donc :<br><br>
    $\\dfrac{${oppcoppb}}{${a}} < x < \\dfrac{${coppb}}{${a}}$ donc : $${ssol2}${sol2simpnum} < x < ${ssol1} ${sol1simpnum}$<br>
    $S=\\left]${ssol2}${sol2simpnum}~;~${ssol1} ${sol1simpnum} \\right[ $`;}
    if (k==1 && c>0 && a<0 && sol1simpdenom==1 && sol2simpdenom!=1) {return `Il faut résoudre $${oppc}\\leqslant ${a}x${sb}${b}\\leqslant ${c}$ donc : <br>
    $${oppc}${soppb}${oppb}\\leqslant ${a}x\\leqslant ${c}${soppb}${oppb}$ donc :<br>
    $${oppcoppb}\\leqslant ${a}x\\leqslant ${coppb}$ donc :<br><br>
    $\\dfrac{${oppcoppb}}{${a}}\\geqslant x \\geqslant \\dfrac{${coppb}}{${a}}$ donc : $${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}\\geqslant x \\geqslant ${ssol1} ${sol1simpnum}$<br><br>
    $S=\\left[${ssol1} ${sol1simpnum}~;~${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} \\right] $`;}
    if (k==1 && c>0 && a<0 && sol1simpdenom!=1 && sol2simpdenom==1) {return `Il faut résoudre $${oppc}\\leqslant ${a}x${sb}${b}\\leqslant ${c}$ donc : <br>
    $${oppc}${soppb}${oppb}\\leqslant ${a}x\\leqslant ${c}${soppb}${oppb}$ donc :<br>
    $${oppcoppb}\\leqslant ${a}x\\leqslant ${coppb}$ donc :<br><br>
    $\\dfrac{${oppcoppb}}{${a}}\\geqslant x \\geqslant \\dfrac{${coppb}}{${a}}$ donc : $${ssol2}${sol2simpnum}\\geqslant x \\geqslant ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}$<br><br>
    $S=\\left[${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}~;~${ssol2}${sol2simpnum} \\right] $`;}
    if (k==1 && c>0 && a<0 && sol1simpdenom==1 && sol2simpdenom==1) {return `Il faut résoudre $${oppc}\\leqslant ${a}x${sb}${b}\\leqslant ${c}$ donc : <br>
    $${oppc}${soppb}${oppb}\\leqslant ${a}x\\leqslant ${c}${soppb}${oppb}$ donc :<br>
    $${oppcoppb}\\leqslant ${a}x\\leqslant ${coppb}$ donc :<br><br>
    $\\dfrac{${oppcoppb}}{${a}}\\geqslant x \\geqslant \\dfrac{${coppb}}{${a}}$ donc : $${ssol2}${sol2simpnum}\\geqslant x \\geqslant ${ssol1} ${sol1simpnum}$<br><br>
    $S=\\left[${ssol1} ${sol1simpnum}~;~${ssol2}${sol2simpnum} \\right] $`;}
    if (k==2 && c>0 && a<0 && sol1simpdenom==1 && sol2simpdenom!=1) {return `Il faut résoudre $${oppc} < ${a}x${sb}${b} < ${c}$ donc : <br>
    $${oppc}${soppb}${oppb} < ${a}x < ${c}${soppb}${oppb}$ donc :<br>
    $${oppcoppb} < ${a}x < ${coppb}$ donc :<br><br>
    $\\dfrac{${oppcoppb}}{${a}} > x > \\dfrac{${coppb}}{${a}}$ donc : $${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} > x > ${ssol1} ${sol1simpnum}$<br>
    $S=\\left]${ssol1} ${sol1simpnum}~;~${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} \\right[ $`;}
    if (k==2 && c>0 && a<0 && sol1simpdenom!=1 && sol2simpdenom==1) {return `Il faut résoudre $${oppc} < ${a}x${sb}${b} < ${c}$ donc : <br>
    $${oppc}${soppb}${oppb} < ${a}x < ${c}${soppb}${oppb}$ donc :<br>
    $${oppcoppb} < ${a}x < ${coppb}$ donc :<br><br>
    $\\dfrac{${oppcoppb}}{${a}} > x > \\dfrac{${coppb}}{${a}}$ donc : $${ssol2}${sol2simpnum} > x > ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}$<br>
    $S=\\left]${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}~;~${ssol2}${sol2simpnum} \\right[ $`;}
    if (k==2 && c>0 && a<0 && sol1simpdenom==1 && sol2simpdenom==1) {return `Il faut résoudre $${oppc} < ${a}x${sb}${b} < ${c}$ donc : <br>
    $${oppc}${soppb}${oppb} < ${a}x < ${c}${soppb}${oppb}$ donc :<br>
    $${oppcoppb} < ${a}x < ${coppb}$ donc :<br><br>
    $\\dfrac{${oppcoppb}}{${a}} > x > \\dfrac{${coppb}}{${a}}$ donc : $${ssol2}${sol2simpnum} > x > ${ssol1} ${sol1simpnum}$<br>
    $S=\\left]${ssol1} ${sol1simpnum}~;~${ssol2}${sol2simpnum} \\right[ $`;}
    if (k==3 && c>0 && a>0 && sol1simpdenom==1 && sol2simpdenom!=1) {return `Il faut résoudre :<br>
    $\\begin{array}{rclcrcl} ${a}x${sb}${b} & \\geqslant & ${c} & \\text{ou} & ${a}x${sb}${b} & \\leqslant & ${oppc} \\\\
    ${a}x & \\geqslant & ${c} ${soppb} ${oppb} & \\text{ou} & ${a}x & \\leqslant & ${oppc} ${soppb} ${oppb} \\\\
    ${a}x & \\geqslant & ${coppb} & \\text{ou} & ${a}x & \\leqslant & ${oppcoppb} \\\\
    x & \\geqslant & \\dfrac{${coppb}}{${a}} & \\text{ou} & x & \\leqslant & \\dfrac{${oppcoppb}}{${a}} \\\\
    x & \\geqslant & ${ssol1} ${sol1simpnum}  & \\text{ou} & x & \\leqslant & ${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} \\\\
    \\end{array}$<br><br>
    $S=\\left] -\\infty~;~${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}\\right] \\cup \\left[ ${ssol1} ${sol1simpnum}~;~+\\infty\\right[$`;}
    if (k==3 && c>0 && a>0 && sol1simpdenom!=1 && sol2simpdenom==1) {return `Il faut résoudre :<br>
    $\\begin{array}{rclcrcl} ${a}x${sb}${b} & \\geqslant & ${c} & \\text{ou} & ${a}x${sb}${b} & \\leqslant & ${oppc} \\\\
    ${a}x & \\geqslant & ${c} ${soppb} ${oppb} & \\text{ou} & ${a}x & \\leqslant & ${oppc} ${soppb} ${oppb} \\\\
    ${a}x & \\geqslant & ${coppb} & \\text{ou} & ${a}x & \\leqslant & ${oppcoppb} \\\\
    x & \\geqslant & \\dfrac{${coppb}}{${a}} & \\text{ou} & x & \\leqslant & \\dfrac{${oppcoppb}}{${a}} \\\\
    x & \\geqslant & ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}  & \\text{ou} & x & \\leqslant & ${ssol2}${sol2simpnum} \\\\
    \\end{array}$<br><br>
    $S=\\left] -\\infty~;~${ssol2}${sol2simpnum}\\right] \\cup \\left[ ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}~;~+\\infty\\right[$`;}
    if (k==3 && c>0 && a>0 && sol1simpdenom==1 && sol2simpdenom==1) {return `Il faut résoudre :<br>
    $\\begin{array}{rclcrcl} ${a}x${sb}${b} & \\geqslant & ${c} & \\text{ou} & ${a}x${sb}${b} & \\leqslant & ${oppc} \\\\
    ${a}x & \\geqslant & ${c} ${soppb} ${oppb} & \\text{ou} & ${a}x & \\leqslant & ${oppc} ${soppb} ${oppb} \\\\
    ${a}x & \\geqslant & ${coppb} & \\text{ou} & ${a}x & \\leqslant & ${oppcoppb} \\\\
    x & \\geqslant & \\dfrac{${coppb}}{${a}} & \\text{ou} & x & \\leqslant & \\dfrac{${oppcoppb}}{${a}} \\\\
    x & \\geqslant & ${ssol1} ${sol1simpnum}  & \\text{ou} & x & \\leqslant & ${ssol2}${sol2simpnum} \\\\
    \\end{array}$<br><br>
    $S=\\left] -\\infty~;~${ssol2}${sol2simpnum}\\right] \\cup \\left[ ${ssol1} ${sol1simpnum}~;~+\\infty\\right[$`;}
    if (k==4 && c>0 && a>0 && sol1simpdenom==1 && sol2simpdenom!=1) {return `Il faut résoudre :<br>
    $\\begin{array}{rclcrcl} ${a}x${sb}${b} & > & ${c} & \\text{ou} & ${a}x${sb}${b} & < & ${oppc} \\\\
    ${a}x & > & ${c} ${soppb} ${oppb} & \\text{ou} & ${a}x & < & ${oppc} ${soppb} ${oppb} \\\\
    ${a}x & > & ${coppb} & \\text{ou} & ${a}x & < & ${oppcoppb} \\\\
    x & > & \\dfrac{${coppb}}{${a}} & \\text{ou} & x & < & \\dfrac{${oppcoppb}}{${a}} \\\\
    x & > & ${ssol1} ${sol1simpnum}  & \\text{ou} & x & < & ${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} \\\\
    \\end{array}$<br><br>
    $S=\\left] -\\infty~;~${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}\\right[ \\cup \\left] ${ssol1} ${sol1simpnum}~;~+\\infty\\right[$`;}
    if (k==4 && c>0 && a>0 && sol1simpdenom!=1 && sol2simpdenom==1) {return `Il faut résoudre :<br>
    $\\begin{array}{rclcrcl} ${a}x${sb}${b} & > & ${c} & \\text{ou} & ${a}x${sb}${b} & < & ${oppc} \\\\
    ${a}x & > & ${c} ${soppb} ${oppb} & \\text{ou} & ${a}x & < & ${oppc} ${soppb} ${oppb} \\\\
    ${a}x & > & ${coppb} & \\text{ou} & ${a}x & < & ${oppcoppb} \\\\
    x & > & \\dfrac{${coppb}}{${a}} & \\text{ou} & x & < & \\dfrac{${oppcoppb}}{${a}} \\\\
    x & > & ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}  & \\text{ou} & x & < & ${ssol2}${sol2simpnum} \\\\
    \\end{array}$<br><br>
    $S=\\left] -\\infty~;~${ssol2}${sol2simpnum}\\right[ \\cup \\left] ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}~;~+\\infty\\right[$`;}
    if (k==4 && c>0 && a>0 && sol1simpdenom==1 && sol2simpdenom==1) {return `Il faut résoudre :<br>
    $\\begin{array}{rclcrcl} ${a}x${sb}${b} & > & ${c} & \\text{ou} & ${a}x${sb}${b} & < & ${oppc} \\\\
    ${a}x & > & ${c} ${soppb} ${oppb} & \\text{ou} & ${a}x & < & ${oppc} ${soppb} ${oppb} \\\\
    ${a}x & > & ${coppb} & \\text{ou} & ${a}x & < & ${oppcoppb} \\\\
    x & > & \\dfrac{${coppb}}{${a}} & \\text{ou} & x & < & \\dfrac{${oppcoppb}}{${a}} \\\\
    x & > & ${ssol1} ${sol1simpnum}  & \\text{ou} & x & < & ${ssol2}${sol2simpnum} \\\\
    \\end{array}$<br><br>
    $S=\\left] -\\infty~;~${ssol2}${sol2simpnum}\\right[ \\cup \\left] ${ssol1} ${sol1simpnum}~;~+\\infty\\right[$`;}
    if (k==3 && c>0 && a<0 && sol1simpdenom==1 && sol2simpdenom!=1) {return `Il faut résoudre :<br>
    $\\begin{array}{rclcrcl} ${a}x${sb}${b} & \\geqslant & ${c} & \\text{ou} & ${a}x${sb}${b} & \\leqslant & ${oppc} \\\\
    ${a}x & \\geqslant & ${c} ${soppb} ${oppb} & \\text{ou} & ${a}x & \\leqslant & ${oppc} ${soppb} ${oppb} \\\\
    ${a}x & \\geqslant & ${coppb} & \\text{ou} & ${a}x & \\leqslant & ${oppcoppb} \\\\
    x & \\leqslant & \\dfrac{${coppb}}{${a}} & \\text{ou} & x & \\geqslant & \\dfrac{${oppcoppb}}{${a}} \\\\
    x & \\leqslant & ${ssol1} ${sol1simpnum}  & \\text{ou} & x & \\geqslant & ${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} \\\\
    \\end{array}$<br><br>
    $S=\\left] -\\infty~;~${ssol1} ${sol1simpnum}\\right] \\cup \\left[${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} ~;~+\\infty\\right[$`;}
    if (k==3 && c>0 && a<0 && sol1simpdenom!=1 && sol2simpdenom==1) {return `Il faut résoudre :<br>
    $\\begin{array}{rclcrcl} ${a}x${sb}${b} & \\geqslant & ${c} & \\text{ou} & ${a}x${sb}${b} & \\leqslant & ${oppc} \\\\
    ${a}x & \\geqslant & ${c} ${soppb} ${oppb} & \\text{ou} & ${a}x & \\leqslant & ${oppc} ${soppb} ${oppb} \\\\
    ${a}x & \\geqslant & ${coppb} & \\text{ou} & ${a}x & \\leqslant & ${oppcoppb} \\\\
    x & \\leqslant & \\dfrac{${coppb}}{${a}} & \\text{ou} & x & \\geqslant & \\dfrac{${oppcoppb}}{${a}} \\\\
    x & \\leqslant & ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}  & \\text{ou} & x & \\geqslant & ${ssol2}${sol2simpnum} \\\\
    \\end{array}$<br><br>
    $S=\\left] -\\infty~;~${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}\\right] \\cup \\left[${ssol2}${sol2simpnum} ~;~+\\infty\\right[$`;}
    if (k==3 && c>0 && a<0 && sol1simpdenom==1 && sol2simpdenom==1) {return `Il faut résoudre :<br>
    $\\begin{array}{rclcrcl} ${a}x${sb}${b} & \\geqslant & ${c} & \\text{ou} & ${a}x${sb}${b} & \\leqslant & ${oppc} \\\\
    ${a}x & \\geqslant & ${c} ${soppb} ${oppb} & \\text{ou} & ${a}x & \\leqslant & ${oppc} ${soppb} ${oppb} \\\\
    ${a}x & \\geqslant & ${coppb} & \\text{ou} & ${a}x & \\leqslant & ${oppcoppb} \\\\
    x & \\leqslant & \\dfrac{${coppb}}{${a}} & \\text{ou} & x & \\geqslant & \\dfrac{${oppcoppb}}{${a}} \\\\
    x & \\leqslant & ${ssol1} ${sol1simpnum}  & \\text{ou} & x & \\geqslant & ${ssol2}${sol2simpnum} \\\\
    \\end{array}$<br><br>
    $S=\\left] -\\infty~;~${ssol1} ${sol1simpnum}\\right] \\cup \\left[${ssol2}${sol2simpnum} ~;~+\\infty\\right[$`;}
    if (k==4 && c>0 && a<0 && sol1simpdenom==1 && sol2simpdenom!=1) {return `Il faut résoudre :<br>
    $\\begin{array}{rclcrcl} ${a}x${sb}${b} & > & ${c} & \\text{ou} & ${a}x${sb}${b} & < & ${oppc} \\\\
    ${a}x & > & ${c} ${soppb} ${oppb} & \\text{ou} & ${a}x & < & ${oppc} ${soppb} ${oppb} \\\\
    ${a}x & > & ${coppb} & \\text{ou} & ${a}x & < & ${oppcoppb} \\\\
    x & < & \\dfrac{${coppb}}{${a}} & \\text{ou} & x & > & \\dfrac{${oppcoppb}}{${a}} \\\\
    x & < & ${ssol1} ${sol1simpnum}  & \\text{ou} & x & > & ${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} \\\\
    \\end{array}$<br><br>
    $S=\\left] -\\infty~;~${ssol1} ${sol1simpnum}\\right[ \\cup \\left]${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} ~;~+\\infty\\right[$`;}
    if (k==4 && c>0 && a<0 && sol1simpdenom!=1 && sol2simpdenom==1) {return `Il faut résoudre :<br>
    $\\begin{array}{rclcrcl} ${a}x${sb}${b} & > & ${c} & \\text{ou} & ${a}x${sb}${b} & < & ${oppc} \\\\
    ${a}x & > & ${c} ${soppb} ${oppb} & \\text{ou} & ${a}x & < & ${oppc} ${soppb} ${oppb} \\\\
    ${a}x & > & ${coppb} & \\text{ou} & ${a}x & < & ${oppcoppb} \\\\
    x & < & \\dfrac{${coppb}}{${a}} & \\text{ou} & x & > & \\dfrac{${oppcoppb}}{${a}} \\\\
    x & < & ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}  & \\text{ou} & x & > & ${ssol2}${sol2simpnum} \\\\
    \\end{array}$<br><br>
    $S=\\left] -\\infty~;~${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}\\right[ \\cup \\left]${ssol2}${sol2simpnum} ~;~+\\infty\\right[$`;}
    if (k==4 && c>0 && a<0 && sol1simpdenom==1 && sol2simpdenom==1) {return `Il faut résoudre :<br>
    $\\begin{array}{rclcrcl} ${a}x${sb}${b} & > & ${c} & \\text{ou} & ${a}x${sb}${b} & < & ${oppc} \\\\
    ${a}x & > & ${c} ${soppb} ${oppb} & \\text{ou} & ${a}x & < & ${oppc} ${soppb} ${oppb} \\\\
    ${a}x & > & ${coppb} & \\text{ou} & ${a}x & < & ${oppcoppb} \\\\
    x & < & \\dfrac{${coppb}}{${a}} & \\text{ou} & x & > & \\dfrac{${oppcoppb}}{${a}} \\\\
    x & < & ${ssol1} ${sol1simpnum}  & \\text{ou} & x & > & ${ssol2}${sol2simpnum} \\\\
    \\end{array}$<br><br>
    $S=\\left] -\\infty~;~${ssol1}${sol1simpnum}\\right[ \\cup \\left]${ssol2}${sol2simpnum} ~;~+\\infty\\right[$`;}
}

function soluce(k,c,a,ssol1,sol1simpnum,sol1simpdenom,ssol2,sol2simpnum,sol2simpdenom) {
    if (k==1 && c<0) {return `$S=\\varnothing$`;}
    if (k==2 && c<0) {return `$S=\\varnothing$`;}
    if (k==3 && c<0) {return `$S=\\mathbb{R}$`;}
    if (k==4 && c<0) {return `$S=\\mathbb{R}$`;}
    if (k==1 && c>0 && a>0 && sol1simpdenom!=1 && sol2simpdenom!=1) {return `$S=\\left[${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}~;~${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}} \\right] $`;}
    if (k==2 && c>0 && a>0 && sol1simpdenom!=1 && sol2simpdenom!=1) {return `$S=\\left]${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}~;~${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}} \\right[ $`;}
    if (k==1 && c>0 && a<0 && sol1simpdenom!=1 && sol2simpdenom!=1) {return `$S=\\left[${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}~;~${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} \\right] $`;}
    if (k==2 && c>0 && a<0 && sol1simpdenom!=1 && sol2simpdenom!=1) {return `$S=\\left]${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}~;~${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} \\right[ $`;}
    if (k==3 && c>0 && a>0 && sol1simpdenom!=1 && sol2simpdenom!=1) {return `$S=\\left] -\\infty~;~${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}\\right] \\cup \\left[ ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}~;~+\\infty\\right[$`;}
    if (k==4 && c>0 && a>0 && sol1simpdenom!=1 && sol2simpdenom!=1) {return `$S=\\left] -\\infty~;~${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}\\right[ \\cup \\left] ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}~;~+\\infty\\right[$`;}
    if (k==3 && c>0 && a<0 && sol1simpdenom!=1 && sol2simpdenom!=1) {return `$S=\\left] -\\infty~;~${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}\\right] \\cup \\left[${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} ~;~+\\infty\\right[$`;}
    if (k==4 && c>0 && a<0 && sol1simpdenom!=1 && sol2simpdenom!=1) {return `$S=\\left] -\\infty~;~${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}\\right[ \\cup \\left]${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} ~;~+\\infty\\right[$`;}
    if (k==1 && c>0 && a>0 && sol1simpdenom==1 && sol2simpdenom!=1) {return `$S=\\left[${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}~;~${ssol1} ${sol1simpnum} \\right] $`;}
    if (k==1 && c>0 && a>0 && sol1simpdenom!=1 && sol2simpdenom==1) {return `$S=\\left[${ssol2}${sol2simpnum}~;~${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}} \\right] $`;}
    if (k==1 && c>0 && a>0 && sol1simpdenom==1 && sol2simpdenom==1) {return `$S=\\left[${ssol2}${sol2simpnum}~;~${ssol1} ${sol1simpnum} \\right] $`;}
    if (k==2 && c>0 && a>0 && sol1simpdenom==1 && sol2simpdenom!=1) {return `$S=\\left]${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}~;~${ssol1} {${sol1simpnum} \\right[ $`;}
    if (k==2 && c>0 && a>0 && sol1simpdenom!=1 && sol2simpdenom==1) {return `$S=\\left]${ssol2}${sol2simpnum}~;~${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}} \\right[ $`;}
    if (k==2 && c>0 && a>0 && sol1simpdenom==1 && sol2simpdenom==1) {return `$S=\\left]${ssol2}${sol2simpnum}~;~${ssol1} ${sol1simpnum} \\right[ $`;}
    if (k==1 && c>0 && a<0 && sol1simpdenom==1 && sol2simpdenom!=1) {return `$S=\\left[${ssol1} ${sol1simpnum}~;~${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} \\right] $`;}
    if (k==1 && c>0 && a<0 && sol1simpdenom!=1 && sol2simpdenom==1) {return `$S=\\left[${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}~;~${ssol2}${sol2simpnum} \\right] $`;}
    if (k==1 && c>0 && a<0 && sol1simpdenom==1 && sol2simpdenom==1) {return `$S=\\left[${ssol1} ${sol1simpnum}~;~${ssol2}${sol2simpnum} \\right] $`;}
    if (k==2 && c>0 && a<0 && sol1simpdenom==1 && sol2simpdenom!=1) {return `$S=\\left]${ssol1} ${sol1simpnum}~;~${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} \\right[ $`;}
    if (k==2 && c>0 && a<0 && sol1simpdenom!=1 && sol2simpdenom==1) {return `$S=\\left]${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}~;~${ssol2}${sol2simpnum} \\right[ $`;}
    if (k==2 && c>0 && a<0 && sol1simpdenom==1 && sol2simpdenom==1) {return `$S=\\left]${ssol1} ${sol1simpnum}~;~${ssol2}${sol2simpnum} \\right[ $`;}
    if (k==3 && c>0 && a>0 && sol1simpdenom==1 && sol2simpdenom!=1) {return `$S=\\left] -\\infty~;~${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}\\right] \\cup \\left[ ${ssol1} ${sol1simpnum}~;~+\\infty\\right[$`;}
    if (k==3 && c>0 && a>0 && sol1simpdenom!=1 && sol2simpdenom==1) {return `$S=\\left] -\\infty~;~${ssol2}${sol2simpnum}\\right] \\cup \\left[ ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}~;~+\\infty\\right[$`;}
    if (k==3 && c>0 && a>0 && sol1simpdenom==1 && sol2simpdenom==1) {return `$S=\\left] -\\infty~;~${ssol2}${sol2simpnum}\\right] \\cup \\left[ ${ssol1} ${sol1simpnum}~;~+\\infty\\right[$`;}
    if (k==4 && c>0 && a>0 && sol1simpdenom==1 && sol2simpdenom!=1) {return `$S=\\left] -\\infty~;~${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}}\\right[ \\cup \\left] ${ssol1} ${sol1simpnum}~;~+\\infty\\right[$`;}
    if (k==4 && c>0 && a>0 && sol1simpdenom!=1 && sol2simpdenom==1) {return `$S=\\left] -\\infty~;~${ssol2}${sol2simpnum}\\right[ \\cup \\left] ${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}~;~+\\infty\\right[$`;}
    if (k==4 && c>0 && a>0 && sol1simpdenom==1 && sol2simpdenom==1) {return `$S=\\left] -\\infty~;~${ssol2}${sol2simpnum}\\right[ \\cup \\left] ${ssol1} ${sol1simpnum}~;~+\\infty\\right[$`;}
    if (k==3 && c>0 && a<0 && sol1simpdenom==1 && sol2simpdenom!=1) {return `$S=\\left] -\\infty~;~${ssol1} ${sol1simpnum}\\right] \\cup \\left[${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} ~;~+\\infty\\right[$`;}
    if (k==3 && c>0 && a<0 && sol1simpdenom!=1 && sol2simpdenom==1) {return `$S=\\left] -\\infty~;~${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}\\right] \\cup \\left[${ssol2}${sol2simpnum} ~;~+\\infty\\right[$`;}
    if (k==3 && c>0 && a<0 && sol1simpdenom==1 && sol2simpdenom==1) {return `$S=\\left] -\\infty~;~${ssol1} ${sol1simpnum}\\right] \\cup \\left[${ssol2}${sol2simpnum} ~;~+\\infty\\right[$`;}
    if (k==4 && c>0 && a<0 && sol1simpdenom==1 && sol2simpdenom!=1) {return `$S=\\left] -\\infty~;~${ssol1} ${sol1simpnum}\\right[ \\cup \\left]${ssol2}\\dfrac{${sol2simpnum}}{${sol2simpdenom}} ~;~+\\infty\\right[$`;}
    if (k==4 && c>0 && a<0 && sol1simpdenom!=1 && sol2simpdenom==1) {return `$S=\\left] -\\infty~;~${ssol1} \\dfrac{${sol1simpnum}}{${sol1simpdenom}}\\right[ \\cup \\left]${ssol2}${sol2simpnum} ~;~+\\infty\\right[$`;}
    if (k==4 && c>0 && a<0 && sol1simpdenom==1 && sol2simpdenom==1) {return `$S=\\left] -\\infty~;~${ssol1}${sol1simpnum}\\right[ \\cup \\left]${ssol2}${sol2simpnum} ~;~+\\infty\\right[$`;}    
}

function test_réponse(a,b,c) {
    let test;
    let div=a/b;
    if (div==c) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}

let a = nbreouoppose(nbrealéa(1,10));
let b = nbreouoppose(nbrealéa(1,10));
let sb = rienplus(b);
let oppb = -b;
let soppb = rienplus(oppb);
let c = paszero();
let oppc = -c;
let oppbsura = simplifierfraction(oppb,a);
let oppbsurasimp = fracsimp(oppbsura[0],oppbsura[1]);
let soppbsura = rienmoins(oppb/a);
let coppb = c+oppb;
let oppcoppb = oppc+oppb;
let sol1 = simplifierfraction(coppb,a);
let sol1simp = fracsimp(sol1[0],sol1[1]);
let ssol1 = rienmoins(coppb/a);
let sol2 = simplifierfraction(oppcoppb,a);
let sol2simp = fracsimp(sol2[0],sol2[1]);
let ssol2 = rienmoins(oppcoppb/a);
let k = nbrealéa(1,4);


enonce.innerHTML = supinf(k);
solution.innerHTML = soluce(k,c,a,ssol1,sol1simp[0],sol1simp[1],ssol2,sol2simp[0],sol2simp[1]);
correctiond.innerHTML = corriges(k,c,a,ssol1,sol1simp[0],sol1simp[1],ssol2,sol2simp[0],sol2simp[1]);

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
    location.href = "../../../Menus/MenuSecondeValeurAbsolue.html";
})