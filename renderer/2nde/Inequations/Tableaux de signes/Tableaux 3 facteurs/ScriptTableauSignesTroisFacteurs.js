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
  if (a<0) {rep='';} else {
      if(a==0) {rep='-'} else{rep='+';}}
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

function avecVirgule(nombre){
  let nombreChaine = nombre.toString()
  nombreChaine = nombreChaine.replace('.', ',')
  return nombreChaine
}

function simply(num,denom) {
  let rep;
  if (denom==1) {rep=`=${num}`;} else {rep='';}
  return rep;
}

function fracsimpmax(num,denom) {
  let rep;
  let signe;
  f1 = simplifierfraction(num,denom);
  f2 = fracsimp(f1[0],f1[1]);
  if (num/denom<0) {signe='-';} else {signe='';}
  return rep = [signe,f2[0],f2[1]];
}

function nbrediff(a) {
  let rep = nbreouoppose(nbrealéa(1,10));
  while (rep==a) {rep=nbreouoppose(nbrealéa(1,10));}
  return rep;
}

function infousup(choix) {
  let rep;
  if (choix==1) {rep=`\\leqslant`;}
  if (choix==2) {rep=`<`;}
  if (choix==3) {rep=`\\geqslant`;}
  if (choix==4) {rep='>';}
  return rep;
}

function coef1() {
  let rep;
  let nbre = nbreouoppose(nbrealéa(1,10));
  let coef;
  if (nbre==1) {coef='';} else {
    if (nbre==-1) {coef=`-`;} else {
      {coef=`${nbre}`;}
    }
  }
  return rep = [nbre,coef];
}

function soluce(x1,x2,x3,a1,a2,a3,choix,range) {
  let rep;
  if (a1>0 && a2>0 && a3>0 && choix==1 && range[3]==1) {rep=`]-\\infty~;${x1}]\\cup [${x2}~;${x3}]`;}
  if (a1>0 && a2>0 && a3>0 && choix==2 && range[3]==1) {rep=`]-\\infty~;${x1}[\\cup ]${x2}~;${x3}[`;}
  if (a1>0 && a2>0 && a3>0 && choix==3 && range[3]==1) {rep=`[${x1}~;${x2}]\\cup [${x3}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3>0 && choix==4 && range[3]==1) {rep=`]${x1}~;${x2}[\\cup ]${x3}~;+\\infty[`;}

  if (a1>0 && a2>0 && a3<0 && choix==1 && range[3]==1) {rep=`[${x1}~;${x2}]\\cup [${x3}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3<0 && choix==2 && range[3]==1) {rep=`]${x1}~;${x2}[\\cup ]${x3}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3<0 && choix==3 && range[3]==1) {rep=`]-\\infty~;${x1}]\\cup [${x2}~;${x3}]`;}
  if (a1>0 && a2>0 && a3<0 && choix==4 && range[3]==1) {rep=`]-\\infty~;${x1}[\\cup ]${x2}~;${x3}[`;}

  if (a1>0 && a2<0 && a3>0 && choix==1 && range[3]==1) {rep=`[${x1}~;${x2}]\\cup [${x3}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3>0 && choix==2 && range[3]==1) {rep=`]${x1}~;${x2}[\\cup ]${x3}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3>0 && choix==3 && range[3]==1) {rep=`]-\\infty~;${x1}]\\cup [${x2}~;${x3}]`;}
  if (a1>0 && a2<0 && a3>0 && choix==4 && range[3]==1) {rep=`]-\\infty~;${x1}[\\cup ]${x2}~;${x3}[`;}

  if (a1>0 && a2<0 && a3<0 && choix==1 && range[3]==1) {rep=`]-\\infty~;${x1}]\\cup [${x2}~;${x3}]`;}
  if (a1>0 && a2<0 && a3<0 && choix==2 && range[3]==1) {rep=`]-\\infty~;${x1}[\\cup ]${x2}~;${x3}[`;}
  if (a1>0 && a2<0 && a3<0 && choix==3 && range[3]==1) {rep=`[${x1}~;${x2}]\\cup [${x3}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3<0 && choix==4 && range[3]==1) {rep=`]${x1}~;${x2}[\\cup ]${x3}~;+\\infty[`;}

  if (a1<0 && a2>0 && a3>0 && choix==1 && range[3]==1) {rep=`[${x1}~;${x2}]\\cup [${x3}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3>0 && choix==2 && range[3]==1) {rep=`]${x1}~;${x2}[\\cup ]${x3}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3>0 && choix==3 && range[3]==1) {rep=`]-\\infty~;${x1}]\\cup [${x2}~;${x3}]`;}
  if (a1<0 && a2>0 && a3>0 && choix==4 && range[3]==1) {rep=`]-\\infty~;${x1}[\\cup ]${x2}~;${x3}[`;}

  if (a1<0 && a2>0 && a3<0 && choix==1 && range[3]==1) {rep=`]-\\infty~;${x1}]\\cup [${x2}~;${x3}]`;}
  if (a1<0 && a2>0 && a3<0 && choix==2 && range[3]==1) {rep=`]-\\infty~;${x1}[\\cup ]${x2}~;${x3}[`;}
  if (a1<0 && a2>0 && a3<0 && choix==3 && range[3]==1) {rep=`[${x1}~;${x2}]\\cup [${x3}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3<0 && choix==4 && range[3]==1) {rep=`]${x1}~;${x2}[\\cup ]${x3}~;+\\infty[`;}

  if (a1<0 && a2<0 && a3>0 && choix==1 && range[3]==1) {rep=`]-\\infty~;${x1}]\\cup [${x2}~;${x3}]`;}
  if (a1<0 && a2<0 && a3>0 && choix==2 && range[3]==1) {rep=`]-\\infty~;${x1}[\\cup ]${x2}~;${x3}[`;}
  if (a1<0 && a2<0 && a3>0 && choix==3 && range[3]==1) {rep=`[${x1}~;${x2}]\\cup [${x3}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3>0 && choix==4 && range[3]==1) {rep=`]${x1}~;${x2}[\\cup ]${x3}~;+\\infty[`;}

  if (a1<0 && a2<0 && a3<0 && choix==1 && range[3]==1) {rep=`[${x1}~;${x2}]\\cup [${x3}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3<0 && choix==2 && range[3]==1) {rep=`]${x1}~;${x2}[\\cup ]${x3}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3<0 && choix==3 && range[3]==1) {rep=`]-\\infty~;${x1}]\\cup [${x2}~;${x3}]`;}
  if (a1<0 && a2<0 && a3<0 && choix==4 && range[3]==1) {rep=`]-\\infty~;${x1}[\\cup ]${x2}~;${x3}[`;}

  if (a1>0 && a2>0 && a3>0 && choix==1 && range[3]==2) {rep=`]-\\infty~;${x1}]\\cup [${x3}~;${x2}]`;}
  if (a1>0 && a2>0 && a3>0 && choix==2 && range[3]==2) {rep=`]-\\infty~;${x1}[\\cup ]${x3}~;${x2}[`;}
  if (a1>0 && a2>0 && a3>0 && choix==3 && range[3]==2) {rep=`[${x1}~;${x3}]\\cup [${x2}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3>0 && choix==4 && range[3]==2) {rep=`]${x1}~;${x3}[\\cup ]${x2}~;+\\infty[`;}

  if (a1>0 && a2>0 && a3<0 && choix==1 && range[3]==2) {rep=`[${x1}~;${x3}]\\cup [${x2}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3<0 && choix==2 && range[3]==2) {rep=`]${x1}~;${x3}[\\cup ]${x2}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3<0 && choix==3 && range[3]==2) {rep=`]-\\infty~;${x1}]\\cup [${x3}~;${x2}]`;}
  if (a1>0 && a2>0 && a3<0 && choix==4 && range[3]==2) {rep=`]-\\infty~;${x1}[\\cup ]${x3}~;${x2}[`;}

  if (a1>0 && a2<0 && a3>0 && choix==1 && range[3]==2) {rep=`[${x1}~;${x3}]\\cup [${x2}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3>0 && choix==2 && range[3]==2) {rep=`]${x1}~;${x3}[\\cup ]${x2}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3>0 && choix==3 && range[3]==2) {rep=`]-\\infty~;${x1}]\\cup [${x3}~;${x2}]`;}
  if (a1>0 && a2<0 && a3>0 && choix==4 && range[3]==2) {rep=`]-\\infty~;${x1}[\\cup ]${x3}~;${x2}[`;}

  if (a1>0 && a2<0 && a3<0 && choix==1 && range[3]==2) {rep=`]-\\infty~;${x1}]\\cup [${x3}~;${x2}]`;}
  if (a1>0 && a2<0 && a3<0 && choix==2 && range[3]==2) {rep=`]-\\infty~;${x1}[\\cup ]${x3}~;${x2}[`;}
  if (a1>0 && a2<0 && a3<0 && choix==3 && range[3]==2) {rep=`[${x1}~;${x3}]\\cup [${x2}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3<0 && choix==4 && range[3]==2) {rep=`]${x1}~;${x3}[\\cup ]${x2}~;+\\infty[`;}

  if (a1<0 && a2>0 && a3>0 && choix==1 && range[3]==2) {rep=`[${x1}~;${x3}]\\cup [${x2}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3>0 && choix==2 && range[3]==2) {rep=`]${x1}~;${x3}[\\cup ]${x2}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3>0 && choix==3 && range[3]==2) {rep=`]-\\infty~;${x1}]\\cup [${x3}~;${x2}]`;}
  if (a1<0 && a2>0 && a3>0 && choix==4 && range[3]==2) {rep=`]-\\infty~;${x1}[\\cup ]${x3}~;${x2}[`;}

  if (a1<0 && a2>0 && a3<0 && choix==1 && range[3]==2) {rep=`]-\\infty~;${x1}]\\cup [${x3}~;${x2}]`;}
  if (a1<0 && a2>0 && a3<0 && choix==2 && range[3]==2) {rep=`]-\\infty~;${x1}[\\cup ]${x3}~;${x2}[`;}
  if (a1<0 && a2>0 && a3<0 && choix==3 && range[3]==2) {rep=`[${x1}~;${x3}]\\cup [${x2}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3<0 && choix==4 && range[3]==2) {rep=`]${x1}~;${x3}[\\cup ]${x2}~;+\\infty[`;}

  if (a1<0 && a2<0 && a3>0 && choix==1 && range[3]==2) {rep=`]-\\infty~;${x1}]\\cup [${x3}~;${x2}]`;}
  if (a1<0 && a2<0 && a3>0 && choix==2 && range[3]==2) {rep=`]-\\infty~;${x1}[\\cup ]${x3}~;${x2}[`;}
  if (a1<0 && a2<0 && a3>0 && choix==3 && range[3]==2) {rep=`[${x1}~;${x3}]\\cup [${x2}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3>0 && choix==4 && range[3]==2) {rep=`]${x1}~;${x3}[\\cup ]${x2}~;+\\infty[`;}

  if (a1<0 && a2<0 && a3<0 && choix==1 && range[3]==2) {rep=`[${x1}~;${x3}]\\cup [${x2}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3<0 && choix==2 && range[3]==2) {rep=`]${x1}~;${x3}[\\cup ]${x2}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3<0 && choix==3 && range[3]==2) {rep=`]-\\infty~;${x1}]\\cup [${x3}~;${x2}]`;}
  if (a1<0 && a2<0 && a3<0 && choix==4 && range[3]==2) {rep=`]-\\infty~;${x1}[\\cup ]${x3}~;${x2}[`;}

  if (a1>0 && a2>0 && a3>0 && choix==1 && range[3]==3) {rep=`]-\\infty~;${x2}]\\cup [${x1}~;${x3}]`;}
  if (a1>0 && a2>0 && a3>0 && choix==2 && range[3]==3) {rep=`]-\\infty~;${x2}[\\cup ]${x1}~;${x3}[`;}
  if (a1>0 && a2>0 && a3>0 && choix==3 && range[3]==3) {rep=`[${x2}~;${x1}]\\cup [${x3}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3>0 && choix==4 && range[3]==3) {rep=`]${x2}~;${x1}[\\cup ]${x3}~;+\\infty[`;}

  if (a1>0 && a2>0 && a3<0 && choix==1 && range[3]==3) {rep=`[${x2}~;${x1}]\\cup [${x3}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3<0 && choix==2 && range[3]==3) {rep=`]${x2}~;${x1}[\\cup ]${x3}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3<0 && choix==3 && range[3]==3) {rep=`]-\\infty~;${x2}]\\cup [${x1}~;${x3}]`;}
  if (a1>0 && a2>0 && a3<0 && choix==4 && range[3]==3) {rep=`]-\\infty~;${x2}[\\cup ]${x1}~;${x3}[`;}

  if (a1>0 && a2<0 && a3>0 && choix==1 && range[3]==3) {rep=`[${x2}~;${x1}]\\cup [${x3}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3>0 && choix==2 && range[3]==3) {rep=`]${x2}~;${x1}[\\cup ]${x3}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3>0 && choix==3 && range[3]==3) {rep=`]-\\infty~;${x2}]\\cup [${x1}~;${x3}]`;}
  if (a1>0 && a2<0 && a3>0 && choix==4 && range[3]==3) {rep=`]-\\infty~;${x2}[\\cup ]${x1}~;${x3}[`;}

  if (a1>0 && a2<0 && a3<0 && choix==1 && range[3]==3) {rep=`]-\\infty~;${x2}]\\cup [${x1}~;${x3}]`;}
  if (a1>0 && a2<0 && a3<0 && choix==2 && range[3]==3) {rep=`]-\\infty~;${x2}[\\cup ]${x1}~;${x3}[`;}
  if (a1>0 && a2<0 && a3<0 && choix==3 && range[3]==3) {rep=`[${x2}~;${x1}]\\cup [${x3}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3<0 && choix==4 && range[3]==3) {rep=`]${x2}~;${x1}[\\cup ]${x3}~;+\\infty[`;}

  if (a1<0 && a2>0 && a3>0 && choix==1 && range[3]==3) {rep=`[${x2}~;${x1}]\\cup [${x3}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3>0 && choix==2 && range[3]==3) {rep=`]${x2}~;${x1}[\\cup ]${x3}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3>0 && choix==3 && range[3]==3) {rep=`]-\\infty~;${x2}]\\cup [${x1}~;${x3}]`;}
  if (a1<0 && a2>0 && a3>0 && choix==4 && range[3]==3) {rep=`]-\\infty~;${x2}[\\cup ]${x1}~;${x3}[`;}

  if (a1<0 && a2>0 && a3<0 && choix==1 && range[3]==3) {rep=`]-\\infty~;${x2}]\\cup [${x1}~;${x3}]`;}
  if (a1<0 && a2>0 && a3<0 && choix==2 && range[3]==3) {rep=`]-\\infty~;${x2}[\\cup ]${x1}~;${x3}[`;}
  if (a1<0 && a2>0 && a3<0 && choix==3 && range[3]==3) {rep=`[${x2}~;${x1}]\\cup [${x3}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3<0 && choix==4 && range[3]==3) {rep=`]${x2}~;${x1}[\\cup ]${x3}~;+\\infty[`;}

  if (a1<0 && a2<0 && a3>0 && choix==1 && range[3]==3) {rep=`]-\\infty~;${x2}]\\cup [${x1}~;${x3}]`;}
  if (a1<0 && a2<0 && a3>0 && choix==2 && range[3]==3) {rep=`]-\\infty~;${x2}[\\cup ]${x1}~;${x3}[`;}
  if (a1<0 && a2<0 && a3>0 && choix==3 && range[3]==3) {rep=`[${x2}~;${x1}]\\cup [${x3}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3>0 && choix==4 && range[3]==3) {rep=`]${x2}~;${x1}[\\cup ]${x3}~;+\\infty[`;}

  if (a1<0 && a2<0 && a3<0 && choix==1 && range[3]==3) {rep=`[${x2}~;${x1}]\\cup [${x3}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3<0 && choix==2 && range[3]==3) {rep=`]${x2}~;${x1}[\\cup ]${x3}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3<0 && choix==3 && range[3]==3) {rep=`]-\\infty~;${x2}]\\cup [${x1}~;${x3}]`;}
  if (a1<0 && a2<0 && a3<0 && choix==4 && range[3]==3) {rep=`]-\\infty~;${x2}[\\cup ]${x1}~;${x3}[`;}

  if (a1>0 && a2>0 && a3>0 && choix==1 && range[3]==4) {rep=`]-\\infty~;${x2}]\\cup [${x3}~;${x1}]`;}
  if (a1>0 && a2>0 && a3>0 && choix==2 && range[3]==4) {rep=`]-\\infty~;${x2}[\\cup ]${x3}~;${x1}[`;}
  if (a1>0 && a2>0 && a3>0 && choix==3 && range[3]==4) {rep=`[${x2}~;${x3}]\\cup [${x1}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3>0 && choix==4 && range[3]==4) {rep=`]${x2}~;${x3}[\\cup ]${x1}~;+\\infty[`;}

  if (a1>0 && a2>0 && a3<0 && choix==1 && range[3]==4) {rep=`[${x2}~;${x3}]\\cup [${x1}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3<0 && choix==2 && range[3]==4) {rep=`]${x2}~;${x3}[\\cup ]${x1}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3<0 && choix==3 && range[3]==4) {rep=`]-\\infty~;${x2}]\\cup [${x3}~;${x1}]`;}
  if (a1>0 && a2>0 && a3<0 && choix==4 && range[3]==4) {rep=`]-\\infty~;${x2}[\\cup ]${x3}~;${x1}[`;}

  if (a1>0 && a2<0 && a3>0 && choix==1 && range[3]==4) {rep=`[${x2}~;${x3}]\\cup [${x1}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3>0 && choix==2 && range[3]==4) {rep=`]${x2}~;${x3}[\\cup ]${x1}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3>0 && choix==3 && range[3]==4) {rep=`]-\\infty~;${x2}]\\cup [${x3}~;${x1}]`;}
  if (a1>0 && a2<0 && a3>0 && choix==4 && range[3]==4) {rep=`]-\\infty~;${x2}[\\cup ]${x3}~;${x1}[`;}

  if (a1>0 && a2<0 && a3<0 && choix==1 && range[3]==4) {rep=`]-\\infty~;${x2}]\\cup [${x3}~;${x1}]`;}
  if (a1>0 && a2<0 && a3<0 && choix==2 && range[3]==4) {rep=`]-\\infty~;${x2}[\\cup ]${x3}~;${x1}[`;}
  if (a1>0 && a2<0 && a3<0 && choix==3 && range[3]==4) {rep=`[${x2}~;${x3}]\\cup [${x1}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3<0 && choix==4 && range[3]==4) {rep=`]${x2}~;${x3}[\\cup ]${x1}~;+\\infty[`;}

  if (a1<0 && a2>0 && a3>0 && choix==1 && range[3]==4) {rep=`[${x2}~;${x3}]\\cup [${x1}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3>0 && choix==2 && range[3]==4) {rep=`]${x2}~;${x3}[\\cup ]${x1}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3>0 && choix==3 && range[3]==4) {rep=`]-\\infty~;${x2}]\\cup [${x3}~;${x1}]`;}
  if (a1<0 && a2>0 && a3>0 && choix==4 && range[3]==4) {rep=`]-\\infty~;${x2}[\\cup ]${x3}~;${x1}[`;}

  if (a1<0 && a2>0 && a3<0 && choix==1 && range[3]==4) {rep=`]-\\infty~;${x2}]\\cup [${x3}~;${x1}]`;}
  if (a1<0 && a2>0 && a3<0 && choix==2 && range[3]==4) {rep=`]-\\infty~;${x2}[\\cup ]${x3}~;${x1}[`;}
  if (a1<0 && a2>0 && a3<0 && choix==3 && range[3]==4) {rep=`[${x2}~;${x3}]\\cup [${x1}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3<0 && choix==4 && range[3]==4) {rep=`]${x2}~;${x3}[\\cup ]${x1}~;+\\infty[`;}

  if (a1<0 && a2<0 && a3>0 && choix==1 && range[3]==4) {rep=`]-\\infty~;${x2}]\\cup [${x3}~;${x1}]`;}
  if (a1<0 && a2<0 && a3>0 && choix==2 && range[3]==4) {rep=`]-\\infty~;${x2}[\\cup ]${x3}~;${x1}[`;}
  if (a1<0 && a2<0 && a3>0 && choix==3 && range[3]==4) {rep=`[${x2}~;${x3}]\\cup [${x1}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3>0 && choix==4 && range[3]==4) {rep=`]${x2}~;${x3}[\\cup ]${x1}~;+\\infty[`;}

  if (a1<0 && a2<0 && a3<0 && choix==1 && range[3]==4) {rep=`[${x2}~;${x3}]\\cup [${x1}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3<0 && choix==2 && range[3]==4) {rep=`]${x2}~;${x3}[\\cup ]${x1}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3<0 && choix==3 && range[3]==4) {rep=`]-\\infty~;${x2}]\\cup [${x3}~;${x1}]`;}
  if (a1<0 && a2<0 && a3<0 && choix==4 && range[3]==4) {rep=`]-\\infty~;${x2}[\\cup ]${x3}~;${x1}[`;}

  if (a1>0 && a2>0 && a3>0 && choix==1 && range[3]==5) {rep=`]-\\infty~;${x3}]\\cup [${x1}~;${x2}]`;}
  if (a1>0 && a2>0 && a3>0 && choix==2 && range[3]==5) {rep=`]-\\infty~;${x3}[\\cup ]${x1}~;${x2}[`;}
  if (a1>0 && a2>0 && a3>0 && choix==3 && range[3]==5) {rep=`[${x3}~;${x1}]\\cup [${x2}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3>0 && choix==4 && range[3]==5) {rep=`]${x3}~;${x1}[\\cup ]${x2}~;+\\infty[`;}

  if (a1>0 && a2>0 && a3<0 && choix==1 && range[3]==5) {rep=`[${x3}~;${x1}]\\cup [${x2}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3<0 && choix==2 && range[3]==5) {rep=`]${x3}~;${x1}[\\cup ]${x2}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3<0 && choix==3 && range[3]==5) {rep=`]-\\infty~;${x3}]\\cup [${x1}~;${x2}]`;}
  if (a1>0 && a2>0 && a3<0 && choix==4 && range[3]==5) {rep=`]-\\infty~;${x3}[\\cup ]${x1}~;${x2}[`;}

  if (a1>0 && a2<0 && a3>0 && choix==1 && range[3]==5) {rep=`[${x3}~;${x1}]\\cup [${x2}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3>0 && choix==2 && range[3]==5) {rep=`]${x3}~;${x1}[\\cup ]${x2}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3>0 && choix==3 && range[3]==5) {rep=`]-\\infty~;${x3}]\\cup [${x1}~;${x2}]`;}
  if (a1>0 && a2<0 && a3>0 && choix==4 && range[3]==5) {rep=`]-\\infty~;${x3}[\\cup ]${x1}~;${x2}[`;}

  if (a1>0 && a2<0 && a3<0 && choix==1 && range[3]==5) {rep=`]-\\infty~;${x3}]\\cup [${x1}~;${x2}]`;}
  if (a1>0 && a2<0 && a3<0 && choix==2 && range[3]==5) {rep=`]-\\infty~;${x3}[\\cup ]${x1}~;${x2}[`;}
  if (a1>0 && a2<0 && a3<0 && choix==3 && range[3]==5) {rep=`[${x3}~;${x1}]\\cup [${x2}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3<0 && choix==4 && range[3]==5) {rep=`]${x3}~;${x1}[\\cup ]${x2}~;+\\infty[`;}

  if (a1<0 && a2>0 && a3>0 && choix==1 && range[3]==5) {rep=`[${x3}~;${x1}]\\cup [${x2}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3>0 && choix==2 && range[3]==5) {rep=`]${x3}~;${x1}[\\cup ]${x2}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3>0 && choix==3 && range[3]==5) {rep=`]-\\infty~;${x3}]\\cup [${x1}~;${x2}]`;}
  if (a1<0 && a2>0 && a3>0 && choix==4 && range[3]==5) {rep=`]-\\infty~;${x3}[\\cup ]${x1}~;${x2}[`;}

  if (a1<0 && a2>0 && a3<0 && choix==1 && range[3]==5) {rep=`]-\\infty~;${x3}]\\cup [${x1}~;${x2}]`;}
  if (a1<0 && a2>0 && a3<0 && choix==2 && range[3]==5) {rep=`]-\\infty~;${x3}[\\cup ]${x1}~;${x2}[`;}
  if (a1<0 && a2>0 && a3<0 && choix==3 && range[3]==5) {rep=`[${x3}~;${x1}]\\cup [${x2}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3<0 && choix==4 && range[3]==5) {rep=`]${x3}~;${x1}[\\cup ]${x2}~;+\\infty[`;}

  if (a1<0 && a2<0 && a3>0 && choix==1 && range[3]==5) {rep=`]-\\infty~;${x3}]\\cup [${x1}~;${x2}]`;}
  if (a1<0 && a2<0 && a3>0 && choix==2 && range[3]==5) {rep=`]-\\infty~;${x3}[\\cup ]${x1}~;${x2}[`;}
  if (a1<0 && a2<0 && a3>0 && choix==3 && range[3]==5) {rep=`[${x3}~;${x1}]\\cup [${x2}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3>0 && choix==4 && range[3]==5) {rep=`]${x3}~;${x1}[\\cup ]${x2}~;+\\infty[`;}

  if (a1<0 && a2<0 && a3<0 && choix==1 && range[3]==5) {rep=`[${x3}~;${x1}]\\cup [${x2}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3<0 && choix==2 && range[3]==5) {rep=`]${x3}~;${x1}[\\cup ]${x2}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3<0 && choix==3 && range[3]==5) {rep=`]-\\infty~;${x3}]\\cup [${x1}~;${x2}]`;}
  if (a1<0 && a2<0 && a3<0 && choix==4 && range[3]==5) {rep=`]-\\infty~;${x3}[\\cup ]${x1}~;${x2}[`;}

  if (a1>0 && a2>0 && a3>0 && choix==1 && range[3]==6) {rep=`]-\\infty~;${x3}]\\cup [${x2}~;${x1}]`;}
  if (a1>0 && a2>0 && a3>0 && choix==2 && range[3]==6) {rep=`]-\\infty~;${x3}[\\cup ]${x2}~;${x1}[`;}
  if (a1>0 && a2>0 && a3>0 && choix==3 && range[3]==6) {rep=`[${x3}~;${x2}]\\cup [${x1}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3>0 && choix==4 && range[3]==6) {rep=`]${x3}~;${x2}[\\cup ]${x1}~;+\\infty[`;}

  if (a1>0 && a2>0 && a3<0 && choix==1 && range[3]==6) {rep=`[${x3}~;${x2}]\\cup [${x1}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3<0 && choix==2 && range[3]==6) {rep=`]${x3}~;${x2}[\\cup ]${x1}~;+\\infty[`;}
  if (a1>0 && a2>0 && a3<0 && choix==3 && range[3]==6) {rep=`]-\\infty~;${x3}]\\cup [${x2}~;${x1}]`;}
  if (a1>0 && a2>0 && a3<0 && choix==4 && range[3]==6) {rep=`]-\\infty~;${x3}[\\cup ]${x2}~;${x1}[`;}

  if (a1>0 && a2<0 && a3>0 && choix==1 && range[3]==6) {rep=`[${x3}~;${x2}]\\cup [${x1}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3>0 && choix==2 && range[3]==6) {rep=`]${x3}~;${x2}[\\cup ]${x1}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3>0 && choix==3 && range[3]==6) {rep=`]-\\infty~;${x3}]\\cup [${x2}~;${x1}]`;}
  if (a1>0 && a2<0 && a3>0 && choix==4 && range[3]==6) {rep=`]-\\infty~;${x3}[\\cup ]${x2}~;${x1}[`;}

  if (a1>0 && a2<0 && a3<0 && choix==1 && range[3]==6) {rep=`]-\\infty~;${x3}]\\cup [${x2}~;${x1}]`;}
  if (a1>0 && a2<0 && a3<0 && choix==2 && range[3]==6) {rep=`]-\\infty~;${x3}[\\cup ]${x2}~;${x1}[`;}
  if (a1>0 && a2<0 && a3<0 && choix==3 && range[3]==6) {rep=`[${x3}~;${x2}]\\cup [${x1}~;+\\infty[`;}
  if (a1>0 && a2<0 && a3<0 && choix==4 && range[3]==6) {rep=`]${x3}~;${x2}[\\cup ]${x1}~;+\\infty[`;}

  if (a1<0 && a2>0 && a3>0 && choix==1 && range[3]==6) {rep=`[${x3}~;${x2}]\\cup [${x1}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3>0 && choix==2 && range[3]==6) {rep=`]${x3}~;${x2}[\\cup ]${x1}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3>0 && choix==3 && range[3]==6) {rep=`]-\\infty~;${x3}]\\cup [${x2}~;${x1}]`;}
  if (a1<0 && a2>0 && a3>0 && choix==4 && range[3]==6) {rep=`]-\\infty~;${x3}[\\cup ]${x2}~;${x1}[`;}

  if (a1<0 && a2>0 && a3<0 && choix==1 && range[3]==6) {rep=`]-\\infty~;${x3}]\\cup [${x2}~;${x1}]`;}
  if (a1<0 && a2>0 && a3<0 && choix==2 && range[3]==6) {rep=`]-\\infty~;${x3}[\\cup ]${x2}~;${x1}[`;}
  if (a1<0 && a2>0 && a3<0 && choix==3 && range[3]==6) {rep=`[${x3}~;${x2}]\\cup [${x1}~;+\\infty[`;}
  if (a1<0 && a2>0 && a3<0 && choix==4 && range[3]==6) {rep=`]${x3}~;${x2}[\\cup ]${x1}~;+\\infty[`;}

  if (a1<0 && a2<0 && a3>0 && choix==1 && range[3]==6) {rep=`]-\\infty~;${x3}]\\cup [${x2}~;${x1}]`;}
  if (a1<0 && a2<0 && a3>0 && choix==2 && range[3]==6) {rep=`]-\\infty~;${x3}[\\cup ]${x2}~;${x1}[`;}
  if (a1<0 && a2<0 && a3>0 && choix==3 && range[3]==6) {rep=`[${x3}~;${x2}]\\cup [${x1}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3>0 && choix==4 && range[3]==6) {rep=`]${x3}~;${x2}[\\cup ]${x1}~;+\\infty[`;}

  if (a1<0 && a2<0 && a3<0 && choix==1 && range[3]==6) {rep=`[${x3}~;${x2}]\\cup [${x1}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3<0 && choix==2 && range[3]==6) {rep=`]${x3}~;${x2}[\\cup ]${x1}~;+\\infty[`;}
  if (a1<0 && a2<0 && a3<0 && choix==3 && range[3]==6) {rep=`]-\\infty~;${x3}]\\cup [${x2}~;${x1}]`;}
  if (a1<0 && a2<0 && a3<0 && choix==4 && range[3]==6) {rep=`]-\\infty~;${x3}[\\cup ]${x2}~;${x1}[`;}

  return rep;
}

function nbrediffs(x1,x2) {
  let rep = nbreouoppose(nbrealéa(1,10));
  while (rep==x1 || rep==x2) {rep=nbreouoppose(nbrealéa(1,10))};
  return rep;
}

function rangement(x1,x2,x3) {
  let rep;
  if (x1<x2 && x2<x3) {rep=[x1,x2,x3,1];}
  if (x1<x3 && x3<x2) {rep=[x1,x3,x2,2];}
  if (x2<x1 && x1<x3) {rep=[x2,x1,x3,3];}
  if (x2<x3 && x3<x1) {rep=[x2,x3,x1,4];}
  if (x3<x1 && x1<x2) {rep=[x3,x1,x2,5];}
  if (x3<x2 && x2<x1) {rep=[x3,x2,x1,6];}
  return rep;
 }

let x1 = nbreouoppose(nbrealéa(1,10));
let x2 = nbrediff(x1);
let x3 = nbrediffs(x1,x2);
let coeff1 = coef1();
let a1 = coeff1[1];
let b1 = -coeff1[0]*x1;
let sb1 = rienplus(b1);
let coeff2 = coef1();
let a2 = coeff2[1];
let b2 = -coeff2[0]*x2;
let sb2 = rienplus(b2);
let coeff3 = coef1();
let a3 = coeff3[1];
let b3 = -coeff3[0]*x3;
let sb3 = rienplus(b3);
let choix = nbrealéa(1,4);
let signe = infousup(choix);
let opb1 = -b1;
let opb2 = -b2;
let opb3 = -b3;
let range = rangement(x1,x2,x3);
let sol = soluce(x1,x2,x3,coeff1[0],coeff2[0],coeff3[0],choix,range);

function tabsignes(x,y,L,l,canvas,x1,x2,x3,a1,a2,a3,range) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.save();
  context.beginPath();
  context.strokeRect(x,y,L,l);
  context.beginPath();
  context.moveTo(x,x+50);
  context.lineTo(L+x,x+50);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x,x+100);
  context.lineTo(L+x,x+100);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x,x+150);
  context.lineTo(L+x,x+150);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x,x+200);
  context.lineTo(L+x,x+200);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+160,y);
  context.lineTo(x+160,l+30);
  context.strokeStyle="black";
  context.stroke();
  context.font = '20px serif';
  context.fillText(`x`,100,55);
  context.fillText(`- ∞`,185,55);
  context.fillText(`+ ∞`,380,55);
  context.fillText(`${a1}x${sb1}${b1}`,80,105);
  context.fillText(`${a2}x${sb2}${b2}`,80,145);
  context.fillText(`${a3}x${sb3}${b3}`,80,210);
  context.fillText(`A(x)`,80,250)
  context.beginPath();
  context.moveTo(x+220,y+40);
  context.lineTo(x+220,l+30);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+280,y+40);
  context.lineTo(x+280,l+30);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+340,y+40);
  context.lineTo(x+340,l+30);
  context.strokeStyle="black";
  context.stroke();

  if (range[3]==1 && a1>0 && a2>0 && a3>0) {
  context.font = '20px serif';
  context.fillText(`${x1}`,x+210,55);
  context.fillText(`${x2}`,x+270,55);
  context.fillText(`${x3}`,x+330,55);
  context.fillText(`-`,200,105);
  context.fillText(`+`,260,105);
  context.fillText(`+`,320,105);
  context.fillText(`+`,380,105);
  context.fillText(`-`,200,145);
  context.fillText(`-`,260,145);
  context.fillText(`+`,320,145);
  context.fillText(`+`,380,145);
  context.fillText(`-`,200,200);
  context.fillText(`-`,260,200);
  context.fillText(`-`,320,200);
  context.fillText(`+`,380,200);
  context.fillText(`-`,200,250);
  context.fillText(`+`,260,250);
  context.fillText(`-`,320,250);
  context.fillText(`+`,380,250);
  context.beginPath();
  context.arc(x+220, y+65, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+280, y+115, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+340, y+165, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  }

  if (range[3]==1 && a1>0 && a2>0 && a3<0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+210,55);
    context.fillText(`${x2}`,x+270,55);
    context.fillText(`${x3}`,x+330,55);
    context.fillText(`-`,200,105);
    context.fillText(`+`,260,105);
    context.fillText(`+`,320,105);
    context.fillText(`+`,380,105);
    context.fillText(`-`,200,145);
    context.fillText(`-`,260,145);
    context.fillText(`+`,320,145);
    context.fillText(`+`,380,145);
    context.fillText(`+`,200,200);
    context.fillText(`+`,260,200);
    context.fillText(`+`,320,200);
    context.fillText(`-`,380,200);
    context.fillText(`+`,200,250);
    context.fillText(`-`,260,250);
    context.fillText(`+`,320,250);
    context.fillText(`-`,380,250);
    context.beginPath();
    context.arc(x+220, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
  }

  if (range[3]==1 && a1>0 && a2<0 && a3>0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+210,55);
    context.fillText(`${x2}`,x+270,55);
    context.fillText(`${x3}`,x+330,55);
    context.fillText(`-`,200,105);
    context.fillText(`+`,260,105);
    context.fillText(`+`,320,105);
    context.fillText(`+`,380,105);
    context.fillText(`+`,200,145);
    context.fillText(`+`,260,145);
    context.fillText(`-`,320,145);
    context.fillText(`-`,380,145);
    context.fillText(`-`,200,200);
    context.fillText(`-`,260,200);
    context.fillText(`-`,320,200);
    context.fillText(`+`,380,200);
    context.fillText(`+`,200,250);
    context.fillText(`-`,260,250);
    context.fillText(`+`,320,250);
    context.fillText(`-`,380,250);
    context.beginPath();
    context.arc(x+220, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
  }

  if (range[3]==1 && a1>0 && a2<0 && a3<0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+210,55);
    context.fillText(`${x2}`,x+270,55);
    context.fillText(`${x3}`,x+330,55);
    context.fillText(`-`,200,105);
    context.fillText(`+`,260,105);
    context.fillText(`+`,320,105);
    context.fillText(`+`,380,105);
    context.fillText(`+`,200,145);
    context.fillText(`+`,260,145);
    context.fillText(`-`,320,145);
    context.fillText(`-`,380,145);
    context.fillText(`+`,200,200);
    context.fillText(`+`,260,200);
    context.fillText(`+`,320,200);
    context.fillText(`-`,380,200);
    context.fillText(`-`,200,250);
    context.fillText(`+`,260,250);
    context.fillText(`-`,320,250);
    context.fillText(`+`,380,250);
    context.beginPath();
    context.arc(x+220, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
  }

  if (range[3]==1 && a1<0 && a2>0 && a3>0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+210,55);
    context.fillText(`${x2}`,x+270,55);
    context.fillText(`${x3}`,x+330,55);
    context.fillText(`+`,200,105);
    context.fillText(`-`,260,105);
    context.fillText(`-`,320,105);
    context.fillText(`-`,380,105);
    context.fillText(`-`,200,145);
    context.fillText(`-`,260,145);
    context.fillText(`+`,320,145);
    context.fillText(`+`,380,145);
    context.fillText(`-`,200,200);
    context.fillText(`-`,260,200);
    context.fillText(`-`,320,200);
    context.fillText(`+`,380,200);
    context.fillText(`+`,200,250);
    context.fillText(`-`,260,250);
    context.fillText(`+`,320,250);
    context.fillText(`-`,380,250);
    context.beginPath();
    context.arc(x+220, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
  }

  if (range[3]==1 && a1<0 && a2>0 && a3<0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+210,55);
    context.fillText(`${x2}`,x+270,55);
    context.fillText(`${x3}`,x+330,55);
    context.fillText(`+`,200,105);
    context.fillText(`-`,260,105);
    context.fillText(`-`,320,105);
    context.fillText(`-`,380,105);
    context.fillText(`-`,200,145);
    context.fillText(`-`,260,145);
    context.fillText(`+`,320,145);
    context.fillText(`+`,380,145);
    context.fillText(`+`,200,200);
    context.fillText(`+`,260,200);
    context.fillText(`+`,320,200);
    context.fillText(`-`,380,200);
    context.fillText(`-`,200,250);
    context.fillText(`+`,260,250);
    context.fillText(`-`,320,250);
    context.fillText(`+`,380,250);
    context.beginPath();
    context.arc(x+220, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
  }

  if (range[3]==1 && a1<0 && a2<0 && a3>0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+210,55);
    context.fillText(`${x2}`,x+270,55);
    context.fillText(`${x3}`,x+330,55);
    context.fillText(`+`,200,105);
    context.fillText(`-`,260,105);
    context.fillText(`-`,320,105);
    context.fillText(`-`,380,105);
    context.fillText(`+`,200,145);
    context.fillText(`+`,260,145);
    context.fillText(`-`,320,145);
    context.fillText(`-`,380,145);
    context.fillText(`-`,200,200);
    context.fillText(`-`,260,200);
    context.fillText(`-`,320,200);
    context.fillText(`+`,380,200);
    context.fillText(`-`,200,250);
    context.fillText(`+`,260,250);
    context.fillText(`-`,320,250);
    context.fillText(`+`,380,250);
    context.beginPath();
    context.arc(x+220, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
  }

  if (range[3]==1 && a1<0 && a2<0 && a3<0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+210,55);
    context.fillText(`${x2}`,x+270,55);
    context.fillText(`${x3}`,x+330,55);
    context.fillText(`+`,200,105);
    context.fillText(`-`,260,105);
    context.fillText(`-`,320,105);
    context.fillText(`-`,380,105);
    context.fillText(`+`,200,145);
    context.fillText(`+`,260,145);
    context.fillText(`-`,320,145);
    context.fillText(`-`,380,145);
    context.fillText(`+`,200,200);
    context.fillText(`+`,260,200);
    context.fillText(`+`,320,200);
    context.fillText(`-`,380,200);
    context.fillText(`+`,200,250);
    context.fillText(`-`,260,250);
    context.fillText(`+`,320,250);
    context.fillText(`-`,380,250);
    context.beginPath();
    context.arc(x+220, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
  }

  if (range[3]==2 && a1>0 && a2>0 && a3>0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+210,55);
    context.fillText(`${x3}`,x+270,55);
    context.fillText(`${x2}`,x+330,55);
    context.fillText(`-`,200,105);
    context.fillText(`+`,260,105);
    context.fillText(`+`,320,105);
    context.fillText(`+`,380,105);
    context.fillText(`-`,200,145);
    context.fillText(`+`,260,145);
    context.fillText(`+`,320,145);
    context.fillText(`+`,380,145);
    context.fillText(`-`,200,200);
    context.fillText(`-`,260,200);
    context.fillText(`+`,320,200);
    context.fillText(`+`,380,200);
    context.fillText(`-`,200,250);
    context.fillText(`+`,260,250);
    context.fillText(`-`,320,250);
    context.fillText(`+`,380,250);
    context.beginPath();
    context.arc(x+220, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    }
  
  if (range[3]==2 && a1>0 && a2>0 && a3<0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+210,55);
    context.fillText(`${x3}`,x+270,55);
    context.fillText(`${x2}`,x+330,55);
    context.fillText(`-`,200,105);
    context.fillText(`+`,260,105);
    context.fillText(`+`,320,105);
    context.fillText(`+`,380,105);
    context.fillText(`-`,200,145);
    context.fillText(`-`,260,145);
    context.fillText(`-`,320,145);
    context.fillText(`+`,380,145);
    context.fillText(`+`,200,200);
    context.fillText(`+`,260,200);
    context.fillText(`-`,320,200);
    context.fillText(`-`,380,200);
    context.fillText(`+`,200,250);
    context.fillText(`-`,260,250);
    context.fillText(`+`,320,250);
    context.fillText(`-`,380,250);
    context.beginPath();
    context.arc(x+220, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    }
  
  if (range[3]==2 && a1>0 && a2<0 && a3>0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+210,55);
    context.fillText(`${x3}`,x+270,55);
    context.fillText(`${x2}`,x+330,55);
    context.fillText(`-`,200,105);
    context.fillText(`+`,260,105);
    context.fillText(`+`,320,105);
    context.fillText(`+`,380,105);
    context.fillText(`+`,200,145);
    context.fillText(`+`,260,145);
    context.fillText(`+`,320,145);
    context.fillText(`-`,380,145);
    context.fillText(`-`,200,200);
    context.fillText(`-`,260,200);
    context.fillText(`+`,320,200);
    context.fillText(`+`,380,200);
    context.fillText(`+`,200,250);
    context.fillText(`-`,260,250);
    context.fillText(`+`,320,250);
    context.fillText(`-`,380,250);
    context.beginPath();
    context.arc(x+220, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    }
  
  if (range[3]==2 && a1>0 && a2<0 && a3<0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+210,55);
    context.fillText(`${x3}`,x+270,55);
    context.fillText(`${x2}`,x+330,55);
    context.fillText(`-`,200,105);
    context.fillText(`+`,260,105);
    context.fillText(`+`,320,105);
    context.fillText(`+`,380,105);
    context.fillText(`+`,200,145);
    context.fillText(`+`,260,145);
    context.fillText(`+`,320,145);
    context.fillText(`-`,380,145);
    context.fillText(`+`,200,200);
    context.fillText(`+`,260,200);
    context.fillText(`-`,320,200);
    context.fillText(`-`,380,200);
    context.fillText(`-`,200,250);
    context.fillText(`+`,260,250);
    context.fillText(`-`,320,250);
    context.fillText(`+`,380,250);
    context.beginPath();
    context.arc(x+220, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    }
  
  if (range[3]==2 && a1<0 && a2>0 && a3>0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+210,55);
    context.fillText(`${x3}`,x+270,55);
    context.fillText(`${x2}`,x+330,55);
    context.fillText(`+`,200,105);
    context.fillText(`-`,260,105);
    context.fillText(`-`,320,105);
    context.fillText(`-`,380,105);
    context.fillText(`-`,200,145);
    context.fillText(`-`,260,145);
    context.fillText(`-`,320,145);
    context.fillText(`+`,380,145);
    context.fillText(`-`,200,200);
    context.fillText(`-`,260,200);
    context.fillText(`+`,320,200);
    context.fillText(`+`,380,200);
    context.fillText(`+`,200,250);
    context.fillText(`-`,260,250);
    context.fillText(`+`,320,250);
    context.fillText(`-`,380,250);
    context.beginPath();
    context.arc(x+220, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    }
  
  if (range[3]==2 && a1<0 && a2>0 && a3<0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+210,55);
    context.fillText(`${x3}`,x+270,55);
    context.fillText(`${x2}`,x+330,55);
    context.fillText(`+`,200,105);
    context.fillText(`-`,260,105);
    context.fillText(`-`,320,105);
    context.fillText(`-`,380,105);
    context.fillText(`-`,200,145);
    context.fillText(`-`,260,145);
    context.fillText(`-`,320,145);
    context.fillText(`+`,380,145);
    context.fillText(`+`,200,200);
    context.fillText(`+`,260,200);
    context.fillText(`-`,320,200);
    context.fillText(`-`,380,200);
    context.fillText(`-`,200,250);
    context.fillText(`+`,260,250);
    context.fillText(`-`,320,250);
    context.fillText(`+`,380,250);
    context.beginPath();
    context.arc(x+220, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    }
  
  if (range[3]==2 && a1<0 && a2<0 && a3>0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+210,55);
    context.fillText(`${x3}`,x+270,55);
    context.fillText(`${x2}`,x+330,55);
    context.fillText(`+`,200,105);
    context.fillText(`-`,260,105);
    context.fillText(`-`,320,105);
    context.fillText(`-`,380,105);
    context.fillText(`+`,200,145);
    context.fillText(`+`,260,145);
    context.fillText(`+`,320,145);
    context.fillText(`-`,380,145);
    context.fillText(`-`,200,200);
    context.fillText(`-`,260,200);
    context.fillText(`+`,320,200);
    context.fillText(`+`,380,200);
    context.fillText(`-`,200,250);
    context.fillText(`+`,260,250);
    context.fillText(`-`,320,250);
    context.fillText(`+`,380,250);
    context.beginPath();
    context.arc(x+220, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    }
  
  if (range[3]==2 && a1<0 && a2<0 && a3<0) {
    context.font = '20px serif';
    context.fillText(`${x1}`,x+210,55);
    context.fillText(`${x3}`,x+270,55);
    context.fillText(`${x2}`,x+330,55);
    context.fillText(`+`,200,105);
    context.fillText(`-`,260,105);
    context.fillText(`-`,320,105);
    context.fillText(`-`,380,105);
    context.fillText(`+`,200,145);
    context.fillText(`+`,260,145);
    context.fillText(`+`,320,145);
    context.fillText(`-`,380,145);
    context.fillText(`+`,200,200);
    context.fillText(`+`,260,200);
    context.fillText(`-`,320,200);
    context.fillText(`-`,380,200);
    context.fillText(`+`,200,250);
    context.fillText(`-`,260,250);
    context.fillText(`+`,320,250);
    context.fillText(`-`,380,250);
    context.beginPath();
    context.arc(x+220, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    }

  if (range[3]==3 && a1>0 && a2>0 && a3>0) {
    context.font = '20px serif';
    context.fillText(`${x2}`,x+210,55);
    context.fillText(`${x1}`,x+270,55);
    context.fillText(`${x3}`,x+330,55);
    context.fillText(`-`,200,105);
    context.fillText(`-`,260,105);
    context.fillText(`+`,320,105);
    context.fillText(`+`,380,105);
    context.fillText(`-`,200,145);
    context.fillText(`+`,260,145);
    context.fillText(`+`,320,145);
    context.fillText(`+`,380,145);
    context.fillText(`-`,200,200);
    context.fillText(`-`,260,200);
    context.fillText(`-`,320,200);
    context.fillText(`+`,380,200);
    context.fillText(`-`,200,250);
    context.fillText(`+`,260,250);
    context.fillText(`-`,320,250);
    context.fillText(`+`,380,250);
    context.beginPath();
    context.arc(x+280, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
      }
    
  if (range[3]==3 && a1>0 && a2>0 && a3<0) {
    context.font = '20px serif';
    context.fillText(`${x2}`,x+210,55);
    context.fillText(`${x1}`,x+270,55);
    context.fillText(`${x3}`,x+330,55);
    context.fillText(`-`,200,105);
    context.fillText(`-`,260,105);
    context.fillText(`+`,320,105);
    context.fillText(`+`,380,105);
    context.fillText(`-`,200,145);
    context.fillText(`+`,260,145);
    context.fillText(`+`,320,145);
    context.fillText(`+`,380,145);
    context.fillText(`+`,200,200);
    context.fillText(`+`,260,200);
    context.fillText(`+`,320,200);
    context.fillText(`-`,380,200);
    context.fillText(`+`,200,250);
    context.fillText(`-`,260,250);
    context.fillText(`+`,320,250);
    context.fillText(`-`,380,250);
    context.beginPath();
    context.arc(x+280, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
      }
    
  if (range[3]==3 && a1>0 && a2<0 && a3>0) {
    context.font = '20px serif';
    context.fillText(`${x2}`,x+210,55);
    context.fillText(`${x1}`,x+270,55);
    context.fillText(`${x3}`,x+330,55);
    context.fillText(`-`,200,105);
    context.fillText(`-`,260,105);
    context.fillText(`+`,320,105);
    context.fillText(`+`,380,105);
    context.fillText(`+`,200,145);
    context.fillText(`-`,260,145);
    context.fillText(`-`,320,145);
    context.fillText(`-`,380,145);
    context.fillText(`-`,200,200);
    context.fillText(`-`,260,200);
    context.fillText(`-`,320,200);
    context.fillText(`+`,380,200);
    context.fillText(`+`,200,250);
    context.fillText(`-`,260,250);
    context.fillText(`+`,320,250);
    context.fillText(`-`,380,250);
    context.beginPath();
    context.arc(x+280, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
      }
    
  if (range[3]==3 && a1>0 && a2<0 && a3<0) {
    context.font = '20px serif';
    context.fillText(`${x2}`,x+210,55);
    context.fillText(`${x1}`,x+270,55);
    context.fillText(`${x3}`,x+330,55);
    context.fillText(`-`,200,105);
    context.fillText(`-`,260,105);
    context.fillText(`+`,320,105);
    context.fillText(`+`,380,105);
    context.fillText(`+`,200,145);
    context.fillText(`-`,260,145);
    context.fillText(`-`,320,145);
    context.fillText(`-`,380,145);
    context.fillText(`+`,200,200);
    context.fillText(`+`,260,200);
    context.fillText(`+`,320,200);
    context.fillText(`-`,380,200);
    context.fillText(`-`,200,250);
    context.fillText(`+`,260,250);
    context.fillText(`-`,320,250);
    context.fillText(`+`,380,250);
    context.beginPath();
    context.arc(x+280, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
      }
    
  if (range[3]==3 && a1<0 && a2>0 && a3>0) {
    context.font = '20px serif';
    context.fillText(`${x2}`,x+210,55);
    context.fillText(`${x1}`,x+270,55);
    context.fillText(`${x3}`,x+330,55);
    context.fillText(`+`,200,105);
    context.fillText(`+`,260,105);
    context.fillText(`-`,320,105);
    context.fillText(`-`,380,105);
    context.fillText(`-`,200,145);
    context.fillText(`+`,260,145);
    context.fillText(`+`,320,145);
    context.fillText(`+`,380,145);
    context.fillText(`-`,200,200);
    context.fillText(`-`,260,200);
    context.fillText(`-`,320,200);
    context.fillText(`+`,380,200);
    context.fillText(`+`,200,250);
    context.fillText(`-`,260,250);
    context.fillText(`+`,320,250);
    context.fillText(`-`,380,250);
    context.beginPath();
    context.arc(x+280, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
      }
    
  if (range[3]==3 && a1<0 && a2>0 && a3<0) {
    context.font = '20px serif';
    context.fillText(`${x2}`,x+210,55);
    context.fillText(`${x1}`,x+270,55);
    context.fillText(`${x3}`,x+330,55);
    context.fillText(`+`,200,105);
    context.fillText(`+`,260,105);
    context.fillText(`-`,320,105);
    context.fillText(`-`,380,105);
    context.fillText(`-`,200,145);
    context.fillText(`+`,260,145);
    context.fillText(`+`,320,145);
    context.fillText(`+`,380,145);
    context.fillText(`+`,200,200);
    context.fillText(`+`,260,200);
    context.fillText(`+`,320,200);
    context.fillText(`-`,380,200);
    context.fillText(`-`,200,250);
    context.fillText(`+`,260,250);
    context.fillText(`-`,320,250);
    context.fillText(`+`,380,250);
    context.beginPath();
    context.arc(x+280, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
      }
    
  if (range[3]==3 && a1<0 && a2<0 && a3>0) {
    context.font = '20px serif';
    context.fillText(`${x2}`,x+210,55);
    context.fillText(`${x1}`,x+270,55);
    context.fillText(`${x3}`,x+330,55);
    context.fillText(`+`,200,105);
    context.fillText(`+`,260,105);
    context.fillText(`-`,320,105);
    context.fillText(`-`,380,105);
    context.fillText(`+`,200,145);
    context.fillText(`-`,260,145);
    context.fillText(`-`,320,145);
    context.fillText(`-`,380,145);
    context.fillText(`-`,200,200);
    context.fillText(`-`,260,200);
    context.fillText(`-`,320,200);
    context.fillText(`+`,380,200);
    context.fillText(`-`,200,250);
    context.fillText(`+`,260,250);
    context.fillText(`-`,320,250);
    context.fillText(`+`,380,250);
    context.beginPath();
    context.arc(x+280, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
      }
    
  if (range[3]==3 && a1<0 && a2<0 && a3<0) {
    context.font = '20px serif';
    context.fillText(`${x2}`,x+210,55);
    context.fillText(`${x1}`,x+270,55);
    context.fillText(`${x3}`,x+330,55);
    context.fillText(`+`,200,105);
    context.fillText(`+`,260,105);
    context.fillText(`-`,320,105);
    context.fillText(`-`,380,105);
    context.fillText(`+`,200,145);
    context.fillText(`-`,260,145);
    context.fillText(`-`,320,145);
    context.fillText(`-`,380,145);
    context.fillText(`+`,200,200);
    context.fillText(`+`,260,200);
    context.fillText(`+`,320,200);
    context.fillText(`-`,380,200);
    context.fillText(`+`,200,250);
    context.fillText(`-`,260,250);
    context.fillText(`+`,320,250);
    context.fillText(`-`,380,250);
    context.beginPath();
    context.arc(x+280, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
      }

    if (range[3]==4 && a1>0 && a2>0 && a3>0) {
    context.font = '20px serif';
    context.fillText(`${x2}`,x+210,55);
    context.fillText(`${x3}`,x+270,55);
    context.fillText(`${x1}`,x+330,55);
    context.fillText(`-`,200,105);
    context.fillText(`-`,260,105);
    context.fillText(`-`,320,105);
    context.fillText(`+`,380,105);
    context.fillText(`-`,200,145);
    context.fillText(`+`,260,145);
    context.fillText(`+`,320,145);
    context.fillText(`+`,380,145);
    context.fillText(`-`,200,200);
    context.fillText(`-`,260,200);
    context.fillText(`+`,320,200);
    context.fillText(`+`,380,200);
    context.fillText(`-`,200,250);
    context.fillText(`+`,260,250);
    context.fillText(`-`,320,250);
    context.fillText(`+`,380,250);
    context.beginPath();
    context.arc(x+340, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
        }
      
    if (range[3]==4 && a1>0 && a2>0 && a3<0) {
      context.font = '20px serif';
      context.fillText(`${x2}`,x+210,55);
      context.fillText(`${x3}`,x+270,55);
      context.fillText(`${x1}`,x+330,55);
      context.fillText(`-`,200,105);
      context.fillText(`-`,260,105);
      context.fillText(`-`,320,105);
      context.fillText(`+`,380,105);
      context.fillText(`-`,200,145);
      context.fillText(`+`,260,145);
      context.fillText(`+`,320,145);
      context.fillText(`+`,380,145);
      context.fillText(`+`,200,200);
      context.fillText(`+`,260,200);
      context.fillText(`-`,320,200);
      context.fillText(`-`,380,200);
      context.fillText(`+`,200,250);
      context.fillText(`-`,260,250);
      context.fillText(`+`,320,250);
      context.fillText(`-`,380,250);
      context.beginPath();
      context.arc(x+340, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
        }
      
    if (range[3]==4 && a1>0 && a2<0 && a3>0) {
      context.font = '20px serif';
      context.fillText(`${x2}`,x+210,55);
      context.fillText(`${x3}`,x+270,55);
      context.fillText(`${x1}`,x+330,55);
      context.fillText(`-`,200,105);
      context.fillText(`-`,260,105);
      context.fillText(`-`,320,105);
      context.fillText(`+`,380,105);
      context.fillText(`+`,200,145);
      context.fillText(`-`,260,145);
      context.fillText(`-`,320,145);
      context.fillText(`-`,380,145);
      context.fillText(`-`,200,200);
      context.fillText(`-`,260,200);
      context.fillText(`+`,320,200);
      context.fillText(`+`,380,200);
      context.fillText(`+`,200,250);
      context.fillText(`-`,260,250);
      context.fillText(`+`,320,250);
      context.fillText(`-`,380,250);
      context.beginPath();
      context.arc(x+340, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
        }
      
    if (range[3]==4 && a1>0 && a2<0 && a3<0) {
      context.font = '20px serif';
      context.fillText(`${x2}`,x+210,55);
      context.fillText(`${x3}`,x+270,55);
      context.fillText(`${x1}`,x+330,55);
      context.fillText(`-`,200,105);
      context.fillText(`-`,260,105);
      context.fillText(`-`,320,105);
      context.fillText(`+`,380,105);
      context.fillText(`+`,200,145);
      context.fillText(`-`,260,145);
      context.fillText(`-`,320,145);
      context.fillText(`-`,380,145);
      context.fillText(`+`,200,200);
      context.fillText(`+`,260,200);
      context.fillText(`-`,320,200);
      context.fillText(`-`,380,200);
      context.fillText(`-`,200,250);
      context.fillText(`+`,260,250);
      context.fillText(`-`,320,250);
      context.fillText(`+`,380,250);
      context.beginPath();
      context.arc(x+340, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
        }
      
    if (range[3]==4 && a1<0 && a2>0 && a3>0) {
      context.font = '20px serif';
      context.fillText(`${x2}`,x+210,55);
      context.fillText(`${x3}`,x+270,55);
      context.fillText(`${x1}`,x+330,55);
      context.fillText(`+`,200,105);
      context.fillText(`+`,260,105);
      context.fillText(`+`,320,105);
      context.fillText(`-`,380,105);
      context.fillText(`-`,200,145);
      context.fillText(`+`,260,145);
      context.fillText(`+`,320,145);
      context.fillText(`+`,380,145);
      context.fillText(`-`,200,200);
      context.fillText(`-`,260,200);
      context.fillText(`+`,320,200);
      context.fillText(`+`,380,200);
      context.fillText(`+`,200,250);
      context.fillText(`-`,260,250);
      context.fillText(`+`,320,250);
      context.fillText(`-`,380,250);
      context.beginPath();
      context.arc(x+340, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
        }
      
    if (range[3]==4 && a1<0 && a2>0 && a3<0) {
      context.font = '20px serif';
      context.fillText(`${x2}`,x+210,55);
      context.fillText(`${x3}`,x+270,55);
      context.fillText(`${x1}`,x+330,55);
      context.fillText(`+`,200,105);
      context.fillText(`+`,260,105);
      context.fillText(`+`,320,105);
      context.fillText(`-`,380,105);
      context.fillText(`-`,200,145);
      context.fillText(`+`,260,145);
      context.fillText(`+`,320,145);
      context.fillText(`+`,380,145);
      context.fillText(`+`,200,200);
      context.fillText(`+`,260,200);
      context.fillText(`-`,320,200);
      context.fillText(`-`,380,200);
      context.fillText(`-`,200,250);
      context.fillText(`+`,260,250);
      context.fillText(`-`,320,250);
      context.fillText(`+`,380,250);
      context.beginPath();
      context.arc(x+340, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
        }
      
    if (range[3]==4 && a1<0 && a2<0 && a3>0) {
      context.font = '20px serif';
      context.fillText(`${x2}`,x+210,55);
      context.fillText(`${x3}`,x+270,55);
      context.fillText(`${x1}`,x+330,55);
      context.fillText(`+`,200,105);
      context.fillText(`+`,260,105);
      context.fillText(`+`,320,105);
      context.fillText(`-`,380,105);
      context.fillText(`+`,200,145);
      context.fillText(`-`,260,145);
      context.fillText(`-`,320,145);
      context.fillText(`-`,380,145);
      context.fillText(`-`,200,200);
      context.fillText(`-`,260,200);
      context.fillText(`+`,320,200);
      context.fillText(`+`,380,200);
      context.fillText(`-`,200,250);
      context.fillText(`+`,260,250);
      context.fillText(`-`,320,250);
      context.fillText(`+`,380,250);
      context.beginPath();
      context.arc(x+340, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
        }
      
    if (range[3]==4 && a1<0 && a2<0 && a3<0) {
      context.font = '20px serif';
      context.fillText(`${x2}`,x+210,55);
      context.fillText(`${x3}`,x+270,55);
      context.fillText(`${x1}`,x+330,55);
      context.fillText(`+`,200,105);
      context.fillText(`+`,260,105);
      context.fillText(`+`,320,105);
      context.fillText(`-`,380,105);
      context.fillText(`+`,200,145);
      context.fillText(`-`,260,145);
      context.fillText(`-`,320,145);
      context.fillText(`-`,380,145);
      context.fillText(`+`,200,200);
      context.fillText(`+`,260,200);
      context.fillText(`-`,320,200);
      context.fillText(`-`,380,200);
      context.fillText(`+`,200,250);
      context.fillText(`-`,260,250);
      context.fillText(`+`,320,250);
      context.fillText(`-`,380,250);
      context.beginPath();
      context.arc(x+340, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
        }
  if (range[3]==5 && a1>0 && a2>0 && a3>0) {
      context.font = '20px serif';
      context.fillText(`${x3}`,x+210,55);
      context.fillText(`${x1}`,x+270,55);
      context.fillText(`${x2}`,x+330,55);
      context.fillText(`-`,200,105);
      context.fillText(`-`,260,105);
      context.fillText(`+`,320,105);
      context.fillText(`+`,380,105);
      context.fillText(`-`,200,145);
      context.fillText(`-`,260,145);
      context.fillText(`-`,320,145);
      context.fillText(`+`,380,145);
      context.fillText(`-`,200,200);
      context.fillText(`+`,260,200);
      context.fillText(`+`,320,200);
      context.fillText(`+`,380,200);
      context.fillText(`-`,200,250);
      context.fillText(`+`,260,250);
      context.fillText(`-`,320,250);
      context.fillText(`+`,380,250);
      context.beginPath();
      context.arc(x+280, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
          }
        
  if (range[3]==5 && a1>0 && a2>0 && a3<0) {
      context.font = '20px serif';
      context.fillText(`${x3}`,x+210,55);
      context.fillText(`${x1}`,x+270,55);
      context.fillText(`${x2}`,x+330,55);
      context.fillText(`-`,200,105);
      context.fillText(`-`,260,105);
      context.fillText(`+`,320,105);
      context.fillText(`+`,380,105);
      context.fillText(`-`,200,145);
      context.fillText(`-`,260,145);
      context.fillText(`-`,320,145);
      context.fillText(`+`,380,145);
      context.fillText(`+`,200,200);
      context.fillText(`-`,260,200);
      context.fillText(`-`,320,200);
      context.fillText(`-`,380,200);
      context.fillText(`+`,200,250);
      context.fillText(`-`,260,250);
      context.fillText(`+`,320,250);
      context.fillText(`-`,380,250);
      context.beginPath();
      context.arc(x+280, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
          }
        
  if (range[3]==5 && a1>0 && a2<0 && a3>0) {
      context.font = '20px serif';
      context.fillText(`${x3}`,x+210,55);
      context.fillText(`${x1}`,x+270,55);
      context.fillText(`${x2}`,x+330,55);
      context.fillText(`-`,200,105);
      context.fillText(`-`,260,105);
      context.fillText(`+`,320,105);
      context.fillText(`+`,380,105);
      context.fillText(`+`,200,145);
      context.fillText(`+`,260,145);
      context.fillText(`+`,320,145);
      context.fillText(`-`,380,145);
      context.fillText(`-`,200,200);
      context.fillText(`+`,260,200);
      context.fillText(`+`,320,200);
      context.fillText(`+`,380,200);
      context.fillText(`+`,200,250);
      context.fillText(`-`,260,250);
      context.fillText(`+`,320,250);
      context.fillText(`-`,380,250);
      context.beginPath();
      context.arc(x+280, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
          }
        
  if (range[3]==5 && a1>0 && a2<0 && a3<0) {
      context.font = '20px serif';
      context.fillText(`${x3}`,x+210,55);
      context.fillText(`${x1}`,x+270,55);
      context.fillText(`${x2}`,x+330,55);
      context.fillText(`-`,200,105);
      context.fillText(`-`,260,105);
      context.fillText(`+`,320,105);
      context.fillText(`+`,380,105);
      context.fillText(`+`,200,145);
      context.fillText(`+`,260,145);
      context.fillText(`+`,320,145);
      context.fillText(`-`,380,145);
      context.fillText(`+`,200,200);
      context.fillText(`-`,260,200);
      context.fillText(`-`,320,200);
      context.fillText(`-`,380,200);
      context.fillText(`-`,200,250);
      context.fillText(`+`,260,250);
      context.fillText(`-`,320,250);
      context.fillText(`+`,380,250);
      context.beginPath();
      context.arc(x+280, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
          }
        
  if (range[3]==5 && a1<0 && a2>0 && a3>0) {
      context.font = '20px serif';
      context.fillText(`${x3}`,x+210,55);
      context.fillText(`${x1}`,x+270,55);
      context.fillText(`${x2}`,x+330,55);
      context.fillText(`+`,200,105);
      context.fillText(`+`,260,105);
      context.fillText(`-`,320,105);
      context.fillText(`-`,380,105);
      context.fillText(`-`,200,145);
      context.fillText(`-`,260,145);
      context.fillText(`-`,320,145);
      context.fillText(`+`,380,145);
      context.fillText(`-`,200,200);
      context.fillText(`+`,260,200);
      context.fillText(`+`,320,200);
      context.fillText(`+`,380,200);
      context.fillText(`+`,200,250);
      context.fillText(`-`,260,250);
      context.fillText(`+`,320,250);
      context.fillText(`-`,380,250);
      context.beginPath();
      context.arc(x+280, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
          }
        
  if (range[3]==5 && a1<0 && a2>0 && a3<0) {
      context.font = '20px serif';
      context.fillText(`${x3}`,x+210,55);
      context.fillText(`${x1}`,x+270,55);
      context.fillText(`${x2}`,x+330,55);
      context.fillText(`+`,200,105);
      context.fillText(`+`,260,105);
      context.fillText(`-`,320,105);
      context.fillText(`-`,380,105);
      context.fillText(`-`,200,145);
      context.fillText(`-`,260,145);
      context.fillText(`-`,320,145);
      context.fillText(`+`,380,145);
      context.fillText(`+`,200,200);
      context.fillText(`-`,260,200);
      context.fillText(`-`,320,200);
      context.fillText(`-`,380,200);
      context.fillText(`-`,200,250);
      context.fillText(`+`,260,250);
      context.fillText(`-`,320,250);
      context.fillText(`+`,380,250);
      context.beginPath();
      context.arc(x+280, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
          }
        
  if (range[3]==5 && a1<0 && a2<0 && a3>0) {
      context.font = '20px serif';
      context.fillText(`${x3}`,x+210,55);
      context.fillText(`${x1}`,x+270,55);
      context.fillText(`${x2}`,x+330,55);
      context.fillText(`+`,200,105);
      context.fillText(`+`,260,105);
      context.fillText(`-`,320,105);
      context.fillText(`-`,380,105);
      context.fillText(`+`,200,145);
      context.fillText(`+`,260,145);
      context.fillText(`+`,320,145);
      context.fillText(`-`,380,145);
      context.fillText(`-`,200,200);
      context.fillText(`+`,260,200);
      context.fillText(`+`,320,200);
      context.fillText(`+`,380,200);
      context.fillText(`-`,200,250);
      context.fillText(`+`,260,250);
      context.fillText(`-`,320,250);
      context.fillText(`+`,380,250);
      context.beginPath();
      context.arc(x+280, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
          }
        
  if (range[3]==5 && a1<0 && a2<0 && a3<0) {
      context.font = '20px serif';
      context.fillText(`${x3}`,x+210,55);
      context.fillText(`${x1}`,x+270,55);
      context.fillText(`${x2}`,x+330,55);
      context.fillText(`+`,200,105);
      context.fillText(`+`,260,105);
      context.fillText(`-`,320,105);
      context.fillText(`-`,380,105);
      context.fillText(`+`,200,145);
      context.fillText(`+`,260,145);
      context.fillText(`+`,320,145);
      context.fillText(`-`,380,145);
      context.fillText(`+`,200,200);
      context.fillText(`-`,260,200);
      context.fillText(`-`,320,200);
      context.fillText(`-`,380,200);
      context.fillText(`+`,200,250);
      context.fillText(`-`,260,250);
      context.fillText(`+`,320,250);
      context.fillText(`-`,380,250);
      context.beginPath();
      context.arc(x+280, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
          }
  
  if (range[3]==6 && a1>0 && a2>0 && a3>0) {
      context.font = '20px serif';
      context.fillText(`${x3}`,x+210,55);
      context.fillText(`${x2}`,x+270,55);
      context.fillText(`${x1}`,x+330,55);
      context.fillText(`-`,200,105);
      context.fillText(`-`,260,105);
      context.fillText(`-`,320,105);
      context.fillText(`+`,380,105);
      context.fillText(`-`,200,145);
      context.fillText(`-`,260,145);
      context.fillText(`+`,320,145);
      context.fillText(`+`,380,145);
      context.fillText(`-`,200,200);
      context.fillText(`+`,260,200);
      context.fillText(`+`,320,200);
      context.fillText(`+`,380,200);
      context.fillText(`-`,200,250);
      context.fillText(`+`,260,250);
      context.fillText(`-`,320,250);
      context.fillText(`+`,380,250);
      context.beginPath();
      context.arc(x+340, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
            }
          
  if (range[3]==6 && a1>0 && a2>0 && a3<0) {
      context.font = '20px serif';
      context.fillText(`${x3}`,x+210,55);
      context.fillText(`${x2}`,x+270,55);
      context.fillText(`${x1}`,x+330,55);
      context.fillText(`-`,200,105);
      context.fillText(`-`,260,105);
      context.fillText(`-`,320,105);
      context.fillText(`+`,380,105);
      context.fillText(`-`,200,145);
      context.fillText(`-`,260,145);
      context.fillText(`+`,320,145);
      context.fillText(`+`,380,145);
      context.fillText(`+`,200,200);
      context.fillText(`-`,260,200);
      context.fillText(`-`,320,200);
      context.fillText(`-`,380,200);
      context.fillText(`+`,200,250);
      context.fillText(`-`,260,250);
      context.fillText(`+`,320,250);
      context.fillText(`-`,380,250);
      context.beginPath();
      context.arc(x+340, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
            }
          
  if (range[3]==6 && a1>0 && a2<0 && a3>0) {
      context.font = '20px serif';
      context.fillText(`${x3}`,x+210,55);
      context.fillText(`${x2}`,x+270,55);
      context.fillText(`${x1}`,x+330,55);
      context.fillText(`-`,200,105);
      context.fillText(`-`,260,105);
      context.fillText(`-`,320,105);
      context.fillText(`+`,380,105);
      context.fillText(`+`,200,145);
      context.fillText(`+`,260,145);
      context.fillText(`-`,320,145);
      context.fillText(`-`,380,145);
      context.fillText(`-`,200,200);
      context.fillText(`+`,260,200);
      context.fillText(`+`,320,200);
      context.fillText(`+`,380,200);
      context.fillText(`+`,200,250);
      context.fillText(`-`,260,250);
      context.fillText(`+`,320,250);
      context.fillText(`-`,380,250);
      context.beginPath();
      context.arc(x+340, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
            }
          
  if (range[3]==6 && a1>0 && a2<0 && a3<0) {
      context.font = '20px serif';
      context.fillText(`${x3}`,x+210,55);
      context.fillText(`${x2}`,x+270,55);
      context.fillText(`${x1}`,x+330,55);
      context.fillText(`-`,200,105);
      context.fillText(`-`,260,105);
      context.fillText(`-`,320,105);
      context.fillText(`+`,380,105);
      context.fillText(`+`,200,145);
      context.fillText(`+`,260,145);
      context.fillText(`-`,320,145);
      context.fillText(`-`,380,145);
      context.fillText(`+`,200,200);
      context.fillText(`-`,260,200);
      context.fillText(`-`,320,200);
      context.fillText(`-`,380,200);
      context.fillText(`-`,200,250);
      context.fillText(`+`,260,250);
      context.fillText(`-`,320,250);
      context.fillText(`+`,380,250);
      context.beginPath();
      context.arc(x+340, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
            }
          
  if (range[3]==6 && a1<0 && a2>0 && a3>0) {
      context.font = '20px serif';
      context.fillText(`${x3}`,x+210,55);
      context.fillText(`${x2}`,x+270,55);
      context.fillText(`${x1}`,x+330,55);
      context.fillText(`+`,200,105);
      context.fillText(`+`,260,105);
      context.fillText(`+`,320,105);
      context.fillText(`-`,380,105);
      context.fillText(`-`,200,145);
      context.fillText(`-`,260,145);
      context.fillText(`+`,320,145);
      context.fillText(`+`,380,145);
      context.fillText(`-`,200,200);
      context.fillText(`+`,260,200);
      context.fillText(`+`,320,200);
      context.fillText(`+`,380,200);
      context.fillText(`+`,200,250);
      context.fillText(`-`,260,250);
      context.fillText(`+`,320,250);
      context.fillText(`-`,380,250);
      context.beginPath();
      context.arc(x+340, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
            }
          
  if (range[3]==6 && a1<0 && a2>0 && a3<0) {
      context.font = '20px serif';
      context.fillText(`${x3}`,x+210,55);
      context.fillText(`${x2}`,x+270,55);
      context.fillText(`${x1}`,x+330,55);
      context.fillText(`+`,200,105);
      context.fillText(`+`,260,105);
      context.fillText(`+`,320,105);
      context.fillText(`-`,380,105);
      context.fillText(`-`,200,145);
      context.fillText(`-`,260,145);
      context.fillText(`+`,320,145);
      context.fillText(`+`,380,145);
      context.fillText(`+`,200,200);
      context.fillText(`-`,260,200);
      context.fillText(`-`,320,200);
      context.fillText(`-`,380,200);
      context.fillText(`-`,200,250);
      context.fillText(`+`,260,250);
      context.fillText(`-`,320,250);
      context.fillText(`+`,380,250);
      context.beginPath();
      context.arc(x+340, y+65, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+115, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+165, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
      context.beginPath();
      context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
      context.strokeStyle="black";
      context.stroke();
            }
          
  if (range[3]==6 && a1<0 && a2<0 && a3>0) {
    context.font = '20px serif';
    context.fillText(`${x3}`,x+210,55);
    context.fillText(`${x2}`,x+270,55);
    context.fillText(`${x1}`,x+330,55);
    context.fillText(`+`,200,105);
    context.fillText(`+`,260,105);
    context.fillText(`+`,320,105);
    context.fillText(`-`,380,105);
    context.fillText(`+`,200,145);
    context.fillText(`+`,260,145);
    context.fillText(`-`,320,145);
    context.fillText(`-`,380,145);
    context.fillText(`-`,200,200);
    context.fillText(`+`,260,200);
    context.fillText(`+`,320,200);
    context.fillText(`+`,380,200);
    context.fillText(`-`,200,250);
    context.fillText(`+`,260,250);
    context.fillText(`-`,320,250);
    context.fillText(`+`,380,250);
    context.beginPath();
    context.beginPath();
    context.arc(x+340, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
            }
          
  if (range[3]==6 && a1<0 && a2<0 && a3<0) {
    context.font = '20px serif';
    context.fillText(`${x3}`,x+210,55);
    context.fillText(`${x2}`,x+270,55);
    context.fillText(`${x1}`,x+330,55);
    context.fillText(`+`,200,105);
    context.fillText(`+`,260,105);
    context.fillText(`+`,320,105);
    context.fillText(`-`,380,105);
    context.fillText(`+`,200,145);
    context.fillText(`+`,260,145);
    context.fillText(`-`,320,145);
    context.fillText(`-`,380,145);
    context.fillText(`+`,200,200);
    context.fillText(`-`,260,200);
    context.fillText(`-`,320,200);
    context.fillText(`-`,380,200);
    context.fillText(`+`,200,250);
    context.fillText(`-`,260,250);
    context.fillText(`+`,320,250);
    context.fillText(`-`,380,250);
    context.beginPath();
    context.arc(x+340, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+165, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+220, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+280, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+340, y+215, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
            }
}

tabsignes(20,30,400,250,"canvasC",x1,x2,x3,coeff1[0],coeff2[0],coeff3[0],range);

let enonce = document.getElementById('enonce');
let enonce2 = document.getElementById('enonce2');
let correctiond = document.getElementById('correctiond');
let correction1 = document.getElementById('correction1');
let correction2 = document.getElementById('correction2');
let correction3 = document.getElementById('correction3');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
let solutionRB = document.getElementById('solutionRB');
let solutionRH = document.getElementById('solutionRH');

let listeenonces = [`On pose $A(x)=(${a1}x${sb1}${b1})(${a2}x${sb2}${b2})(${a3}x${sb3}${b3})$<br>
Résoudre dans $\\mathbb{R}$ l'inéquation : $A(x)${signe}0$`];

let listecorrection = [``];

enonce.innerHTML = listeenonces[0];
enonce2.innerHTML = ``;

solution.innerHTML = `$S=${sol}$`;

correction1.innerHTML = `On cherche d'abord les nombres qui seront inscrits sur la première ligne :<br>
$\\dfrac{${opb1}}{${coeff1[0]}}=${x1}$ , $\\dfrac{${opb2}}{${coeff2[0]}}=${x2}$ et $\\dfrac{${opb3}}{${coeff3[0]}}=${x3}$`;
correction2.innerHTML = `$S=${sol}$`;

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
    location.href = "../../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../../Menus/MenuSeconde.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../../Menus/MenuSecondeInequations.html";
})