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

function infousup(choix) {
  let rep;
  if (choix==1) {rep=`\\leqslant`;}
  if (choix==2) {rep=`<`;}
  if (choix==3) {rep=`\\geqslant`;}
  if (choix==4) {rep='>';}
  return rep;
}

function nbrediff(a) {
  let rep = nbreouoppose(nbrealéa(1,10));
  while (rep==a) {rep=nbreouoppose(nbrealéa(1,10));}
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

function coef2(a) {
  let rep;
  let nbre = nbreouoppose(nbrealéa(1,10));
  let coef;
  while (nbre==a || nbre==-a) {nbre=nbreouoppose(nbrealéa(1,10));}
  if (nbre==1) {coef='';} else {
    if (nbre==-1) {coef=`-`;} else {
      {coef=`${nbre}`;}
    }
  }
  return rep = [nbre,coef];
}


function soluce(r1,r2,x1,x2,a1,a2,choix) {
  let rep;
  if (a1>0 && a2>0 && x1<x2 && choix==1 && r1[2]!=1 && r2[2]!=1) {rep=`\\left[${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right]`;}
  if (a1>0 && a2>0 && x1<x2 && choix==2 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right[`;}
  if (a1>0 && a2>0 && x1<x2 && choix==3 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right]\\cup \\left[${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;+\\infty\\right[`;}
  if (a1>0 && a2>0 && x1<x2 && choix==4 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right[\\cup \\left]${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;+\\infty\\right[`;}
  if (a1>0 && a2>0 && x1<x2 && choix==1 && r1[2]==1 && r2[2]==1) {rep=`\\left[${r1[0]}${r1[1]}~;${r2[0]}${r2[1]}\\right]`;}
  if (a1>0 && a2>0 && x1<x2 && choix==2 && r1[2]==1 && r2[2]==1) {rep=`\\left]${r1[0]}${r1[1]}~;${r2[0]}${r2[1]}\\right[`;}
  if (a1>0 && a2>0 && x1<x2 && choix==3 && r1[2]==1 && r2[2]==1) {rep=`\\left]-\\infty~;${r1[0]}${r1[1]}\\right]\\cup \\left[${r2[0]}${r2[1]}~;+\\infty\\right[`;}
  if (a1>0 && a2>0 && x1<x2 && choix==4 && r1[2]==1 && r2[2]==1) {rep=`\\left]-\\infty~;${r1[0]}${r1[1]}\\right[\\cup \\left]${r2[0]}${r2[1]}~;+\\infty\\right[`;}
  if (a1>0 && a2>0 && x1<x2 && choix==1 && r1[2]==1 && r2[2]!=1) {rep=`\\left[${r1[0]}${r1[1]}~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right]`;}
  if (a1>0 && a2>0 && x1<x2 && choix==2 && r1[2]==1 && r2[2]!=1) {rep=`\\left]${r1[0]}${r1[1]}~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right[`;}
  if (a1>0 && a2>0 && x1<x2 && choix==3 && r1[2]==1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r1[0]}${r1[1]}\\right]\\cup \\left[${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;+\\infty\\right[`;}
  if (a1>0 && a2>0 && x1<x2 && choix==4 && r1[2]==1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r1[0]}${r1[1]}\\right[\\cup \\left]${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;+\\infty\\right[`;}
  if (a1>0 && a2>0 && x1<x2 && choix==1 && r1[2]!=1 && r2[2]==1) {rep=`\\left[${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;${r2[0]}${r2[1]}\\right]`;}
  if (a1>0 && a2>0 && x1<x2 && choix==2 && r1[2]!=1 && r2[2]==1) {rep=`\\left]${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;${r2[0]}${r2[1]}\\right[`;}
  if (a1>0 && a2>0 && x1<x2 && choix==3 && r1[2]!=1 && r2[2]==1) {rep=`\\left]-\\infty~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right]\\cup \\left[${r2[0]}${r2[1]}~;+\\infty\\right[`;}
  if (a1>0 && a2>0 && x1<x2 && choix==4 && r1[2]!=1 && r2[2]==1) {rep=`\\left]-\\infty~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right[\\cup \\left]${r2[0]}${r2[1]}~;+\\infty\\right[`;}

  if (a1>0 && a2>0 && x1>x2 && choix==1 && r1[2]!=1 && r2[2]!=1) {rep=`\\left[${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right]`;}
  if (a1>0 && a2>0 && x1>x2 && choix==2 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right[`;}
  if (a1>0 && a2>0 && x1>x2 && choix==3 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right]\\cup \\left[${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;+\\infty\\right[`;}
  if (a1>0 && a2>0 && x1>x2 && choix==4 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right[\\cup \\left]${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;+\\infty\\right[`;}
  if (a1>0 && a2>0 && x1>x2 && choix==1 && r1[2]==1 && r2[2]==1) {rep=`\\left[${r2[0]}${r2[1]}~;${r1[0]}${r1[1]}\\right]`;}
  if (a1>0 && a2>0 && x1>x2 && choix==2 && r1[2]==1 && r2[2]==1) {rep=`\\left]${r2[0]}${r2[1]}}~;${r1[0]}${r1[1]}\\right[`;}
  if (a1>0 && a2>0 && x1>x2 && choix==3 && r1[2]==1 && r2[2]==1) {rep=`\\left]-\\infty~;${r2[0]}${r2[1]}\\right]\\cup \\left[${r1[0]}${r1[1]}~;+\\infty\\right[`;}
  if (a1>0 && a2>0 && x1>x2 && choix==4 && r1[2]==1 && r2[2]==1) {rep=`\\left]-\\infty~;${r2[0]}${r2[1]}\\right[\\cup \\left]${r1[0]}${r1[1]}~;+\\infty\\right[`;}
  if (a1>0 && a2>0 && x1>x2 && choix==1 && r1[2]==1 && r2[2]!=1) {rep=`\\left[${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;${r1[0]}${r1[1]}\\right]`;}
  if (a1>0 && a2>0 && x1>x2 && choix==2 && r1[2]==1 && r2[2]!=1) {rep=`\\left]${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;${r1[0]}${r1[1]}\\right[`;}
  if (a1>0 && a2>0 && x1>x2 && choix==3 && r1[2]==1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right]\\cup \\left[${r1[0]}${r1[1]}~;+\\infty\\right[`;}
  if (a1>0 && a2>0 && x1>x2 && choix==4 && r1[2]==1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right[\\cup \\left]${r1[0]}${r1[1]}~;+\\infty\\right[`;}
  if (a1>0 && a2>0 && x1>x2 && choix==1 && r1[2]!=1 && r2[2]==1) {rep=`\\left[${r2[0]}${r2[1]}~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right]`;}
  if (a1>0 && a2>0 && x1>x2 && choix==2 && r1[2]!=1 && r2[2]==1) {rep=`\\left]${r2[0]}${r2[1]}~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right[`;}
  if (a1>0 && a2>0 && x1>x2 && choix==3 && r1[2]!=1 && r2[2]==1) {rep=`\\left]-\\infty~;${r2[0]}${r2[1]}\\right]\\cup \\left[${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;+\\infty\\right[`;}
  if (a1>0 && a2>0 && x1>x2 && choix==4 && r1[2]!=1 && r2[2]==1) {rep=`\\left]-\\infty~;${r2[0]}${r2[1]}\\right[\\cup \\left]${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;+\\infty\\right[`;}


  if (a1>0 && a2<0 && x1<x2 && choix==1 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right]\\cup \\left[${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;+\\infty\\right[`;}
  if (a1>0 && a2<0 && x1<x2 && choix==2 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right[\\cup \\left]${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;+\\infty\\right[`;}
  if (a1>0 && a2<0 && x1<x2 && choix==3 && r1[2]!=1 && r2[2]!=1) {rep=`\\left[${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right]`;}
  if (a1>0 && a2<0 && x1<x2 && choix==4 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right[`;}
  if (a1>0 && a2<0 && x1<x2 && choix==1 && r1[2]==1 && r2[2]==1) {rep=`\\left]-\\infty~;${r1[0]}${r1[1]}\\right]\\cup \\left[${r2[0]}${r2[1]}~;+\\infty\\right[`;}
  if (a1>0 && a2<0 && x1<x2 && choix==2 && r1[2]==1 && r2[2]==1) {rep=`\\left]-\\infty~;${r1[0]}${r1[1]}\\right[\\cup \\left]${r2[0]}${r2[1]}~;+\\infty\\right[`;}
  if (a1>0 && a2<0 && x1<x2 && choix==3 && r1[2]==1 && r2[2]==1) {rep=`\\left[${r1[0]}${r1[1]}~;${r2[0]}${r2[1]}\\right]`;}
  if (a1>0 && a2<0 && x1<x2 && choix==4 && r1[2]==1 && r2[2]==1) {rep=`\\left]${r1[0]}${r1[1]}~;${r2[0]}${r2[1]}\\right[`;}
  if (a1>0 && a2<0 && x1<x2 && choix==1 && r1[2]==1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r1[0]}${r1[1]}\\right]\\cup \\left[${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;+\\infty\\right[`;}
  if (a1>0 && a2<0 && x1<x2 && choix==2 && r1[2]==1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r1[0]}${r1[1]}\\right[\\cup \\left]${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;+\\infty\\right[`;}
  if (a1>0 && a2<0 && x1<x2 && choix==3 && r1[2]==1 && r2[2]!=1) {rep=`\\left[${r1[0]}${r1[1]}~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right]`;}
  if (a1>0 && a2<0 && x1<x2 && choix==4 && r1[2]==1 && r2[2]!=1) {rep=`\\left]${r1[0]}${r1[1]}~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right[`;}
  if (a1>0 && a2<0 && x1<x2 && choix==1 && r1[2]!=1 && r2[2]==1) {rep=`\\left]-\\infty~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right]\\cup \\left[${r2[0]}${r2[1]}~;+\\infty\\right[`;}
  if (a1>0 && a2<0 && x1<x2 && choix==2 && r1[2]!=1 && r2[2]==1) {rep=`\\left]-\\infty~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right[\\cup \\left]${r2[0]}${r2[1]}~;+\\infty\\right[`;}
  if (a1>0 && a2<0 && x1<x2 && choix==3 && r1[2]!=1 && r2[2]==1) {rep=`\\left[${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;${r2[0]}${r2[1]}\\right]`;}
  if (a1>0 && a2<0 && x1<x2 && choix==4 && r1[2]!=1 && r2[2]==1) {rep=`\\left]${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;${r2[0]}${r2[1]}\\right[`;}

  if (a1>0 && a2<0 && x1>x2 && choix==1 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right]\\cup \\left[${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;+\\infty\\right[`;}
  if (a1>0 && a2<0 && x1>x2 && choix==2 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right[\\cup \\left]${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;+\\infty\\right[`;}
  if (a1>0 && a2<0 && x1>x2 && choix==3 && r1[2]!=1 && r2[2]!=1) {rep=`\\left[${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right]`;}
  if (a1>0 && a2<0 && x1>x2 && choix==4 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right[`;}
  if (a1>0 && a2<0 && x1>x2 && choix==1 && r1[2]==1 && r2[2]==1) {rep=`\\left]-\\infty~;${r2[0]}${r2[1]}\\right]\\cup \\left[${r1[0]}${r1[1]}~;+\\infty\\right[`;}
  if (a1>0 && a2<0 && x1>x2 && choix==2 && r1[2]==1 && r2[2]==1) {rep=`\\left]-\\infty~;${r2[0]}${r2[1]}\\right[\\cup \\left]${r1[0]}${r1[1]}~;+\\infty\\right[`;}
  if (a1>0 && a2<0 && x1>x2 && choix==3 && r1[2]==1 && r2[2]==1) {rep=`\\left[${r2[0]}${r2[1]}~;${r1[0]}${r1[1]}\\right]`;}
  if (a1>0 && a2<0 && x1>x2 && choix==4 && r1[2]==1 && r2[2]==1) {rep=`\\left]${r2[0]}${r2[1]}~;${r1[0]}${r1[1]}\\right[`;}
  if (a1>0 && a2<0 && x1>x2 && choix==1 && r1[2]==1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right]\\cup \\left[${r1[0]}${r1[1]}~;+\\infty\\right[`;}
  if (a1>0 && a2<0 && x1>x2 && choix==2 && r1[2]==1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right[\\cup \\left]${r1[0]}${r1[1]}~;+\\infty\\right[`;}
  if (a1>0 && a2<0 && x1>x2 && choix==3 && r1[2]==1 && r2[2]!=1) {rep=`\\left[${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;${r1[0]}${r1[1]}\\right]`;}
  if (a1>0 && a2<0 && x1>x2 && choix==4 && r1[2]==1 && r2[2]!=1) {rep=`\\left]${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;${r1[0]}${r1[1]}\\right[`;}
  if (a1>0 && a2<0 && x1>x2 && choix==1 && r1[2]!=1 && r2[2]==1) {rep=`\\left]-\\infty~;${r2[0]}${r2[1]}\\right]\\cup \\left[${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;+\\infty\\right[`;}
  if (a1>0 && a2<0 && x1>x2 && choix==2 && r1[2]!=1 && r2[2]==1) {rep=`\\left]-\\infty~;${r2[0]}${r2[1]}\\right[\\cup \\left]${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;+\\infty\\right[`;}
  if (a1>0 && a2<0 && x1>x2 && choix==3 && r1[2]!=1 && r2[2]==1) {rep=`\\left[${r2[0]}${r2[1]}~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right]`;}
  if (a1>0 && a2<0 && x1>x2 && choix==4 && r1[2]!=1 && r2[2]==1) {rep=`\\left]${r2[0]}${r2[1]}~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right[`;}

  if (a1<0 && a2>0 && x1<x2 && choix==1 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right]\\cup \\left[${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;+\\infty\\right[`;}
  if (a1<0 && a2>0 && x1<x2 && choix==2 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right[\\cup \\left]${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;+\\infty\\right[`;}
  if (a1<0 && a2>0 && x1<x2 && choix==3 && r1[2]!=1 && r2[2]!=1) {rep=`\\left[${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right]`;}
  if (a1<0 && a2>0 && x1<x2 && choix==4 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right[`;}
  if (a1<0 && a2>0 && x1<x2 && choix==1 && r1[2]==1 && r2[2]==1) {rep=`\\left]-\\infty~;${r1[0]}${r1[1]}\\right]\\cup \\left[${r2[0]}${r2[1]}~;+\\infty\\right[`;}
  if (a1<0 && a2>0 && x1<x2 && choix==2 && r1[2]==1 && r2[2]==1) {rep=`\\left]-\\infty~;${r1[0]}${r1[1]}\\right[\\cup \\left]${r2[0]}${r2[1]}~;+\\infty\\right[`;}
  if (a1<0 && a2>0 && x1<x2 && choix==3 && r1[2]==1 && r2[2]==1) {rep=`\\left[${r1[0]}${r1[1]}~;${r2[0]}${r2[1]}\\right]`;}
  if (a1<0 && a2>0 && x1<x2 && choix==4 && r1[2]==1 && r2[2]==1) {rep=`\\left]${r1[0]}${r1[1]}~;${r2[0]}${r2[1]}\\right[`;}
  if (a1<0 && a2>0 && x1<x2 && choix==1 && r1[2]==1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r1[0]}${r1[1]}\\right]\\cup \\left[${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;+\\infty\\right[`;}
  if (a1<0 && a2>0 && x1<x2 && choix==2 && r1[2]==1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r1[0]}${r1[1]}\\right[\\cup \\left]${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;+\\infty\\right[`;}
  if (a1<0 && a2>0 && x1<x2 && choix==3 && r1[2]==1 && r2[2]!=1) {rep=`\\left[${r1[0]}${r1[1]}~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right]`;}
  if (a1<0 && a2>0 && x1<x2 && choix==4 && r1[2]==1 && r2[2]!=1) {rep=`\\left]${r1[0]}${r1[1]}~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right[`;}
  if (a1<0 && a2>0 && x1<x2 && choix==1 && r1[2]!=1 && r2[2]==1) {rep=`\\left]-\\infty~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right]\\cup \\left[${r2[0]}${r2[1]}~;+\\infty\\right[`;}
  if (a1<0 && a2>0 && x1<x2 && choix==2 && r1[2]!=1 && r2[2]==1) {rep=`\\left]-\\infty~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right[\\cup \\left]${r2[0]}${r2[1]}~;+\\infty\\right[`;}
  if (a1<0 && a2>0 && x1<x2 && choix==3 && r1[2]!=1 && r2[2]==1) {rep=`\\left[${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;${r2[0]}${r2[1]}\\right]`;}
  if (a1<0 && a2>0 && x1<x2 && choix==4 && r1[2]!=1 && r2[2]==1) {rep=`\\left]${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;${r2[0]}${r2[1]}\\right[`;}

  if (a1<0 && a2>0 && x1>x2 && choix==1 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right]\\cup \\left[${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;+\\infty\\right[`;}
  if (a1<0 && a2>0 && x1>x2 && choix==2 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right[\\cup \\left]${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;+\\infty\\right[`;}
  if (a1<0 && a2>0 && x1>x2 && choix==3 && r1[2]!=1 && r2[2]!=1) {rep=`\\left[${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right]`;}
  if (a1<0 && a2>0 && x1>x2 && choix==4 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right[`;}
  if (a1<0 && a2>0 && x1>x2 && choix==1 && r1[2]==1 && r2[2]==1) {rep=`\\left]-\\infty~;${r2[0]}${r2[1]}\\right]\\cup \\left[${r1[0]}${r1[1]}~;+\\infty\\right[`;}
  if (a1<0 && a2>0 && x1>x2 && choix==2 && r1[2]==1 && r2[2]==1) {rep=`\\left]-\\infty~;${r2[0]}${r2[1]}\\right[\\cup \\left]${r1[0]}${r1[1]}~;+\\infty\\right[`;}
  if (a1<0 && a2>0 && x1>x2 && choix==3 && r1[2]==1 && r2[2]==1) {rep=`\\left[${r2[0]}${r2[1]}~;${r1[0]}${r1[1]}\\right]`;}
  if (a1<0 && a2>0 && x1>x2 && choix==4 && r1[2]==1 && r2[2]==1) {rep=`\\left]${r2[0]}${r2[1]}~;${r1[0]}${r1[1]}\\right[`;}
  if (a1<0 && a2>0 && x1>x2 && choix==1 && r1[2]==1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right]\\cup \\left[${r1[0]}${r1[1]}~;+\\infty\\right[`;}
  if (a1<0 && a2>0 && x1>x2 && choix==2 && r1[2]==1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right[\\cup \\left]${r1[0]}${r1[1]}~;+\\infty\\right[`;}
  if (a1<0 && a2>0 && x1>x2 && choix==3 && r1[2]==1 && r2[2]!=1) {rep=`\\left[${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;${r1[0]}${r1[1]}\\right]`;}
  if (a1<0 && a2>0 && x1>x2 && choix==4 && r1[2]==1 && r2[2]!=1) {rep=`\\left]${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;${r1[0]}${r1[1]}\\right[`;}
  if (a1<0 && a2>0 && x1>x2 && choix==1 && r1[2]!=1 && r2[2]==1) {rep=`\\left]-\\infty~;${r2[0]}${r2[1]}\\right]\\cup \\left[${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;+\\infty\\right[`;}
  if (a1<0 && a2>0 && x1>x2 && choix==2 && r1[2]!=1 && r2[2]==1) {rep=`\\left]-\\infty~;${r2[0]}${r2[1]}\\right[\\cup \\left]${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;+\\infty\\right[`;}
  if (a1<0 && a2>0 && x1>x2 && choix==3 && r1[2]!=1 && r2[2]==1) {rep=`\\left[${r2[0]}${r2[1]}~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right]`;}
  if (a1<0 && a2>0 && x1>x2 && choix==4 && r1[2]!=1 && r2[2]==1) {rep=`\\left]${r2[0]}${r2[1]}~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right[`;}

  if (a1<0 && a2<0 && x1<x2 && choix==1 && r1[2]!=1 && r2[2]!=1) {rep=`\\left[${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right]`;}
  if (a1<0 && a2<0 && x1<x2 && choix==2 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right[`;}
  if (a1<0 && a2<0 && x1<x2 && choix==3 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right]\\cup \\left[${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;+\\infty\\right[`;}
  if (a1<0 && a2<0 && x1<x2 && choix==4 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right[\\cup \\left]${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;+\\infty\\right[`;}
  if (a1<0 && a2<0 && x1<x2 && choix==1 && r1[2]==1 && r2[2]==1) {rep=`\\left[${r1[0]}${r1[1]}~;${r2[0]}${r2[1]}\\right]`;}
  if (a1<0 && a2<0 && x1<x2 && choix==2 && r1[2]==1 && r2[2]==1) {rep=`\\left]${r1[0]}${r1[1]}~;${r2[0]}${r2[1]}\\right[`;}
  if (a1<0 && a2<0 && x1<x2 && choix==3 && r1[2]==1 && r2[2]==1) {rep=`\\left]-\\infty~;${r1[0]}${r1[1]}\\right]\\cup \\left[${r2[0]}${r2[1]}~;+\\infty\\right[`;}
  if (a1<0 && a2<0 && x1<x2 && choix==4 && r1[2]==1 && r2[2]==1) {rep=`\\left]-\\infty~;${r1[0]}${r1[1]}\\right[\\cup \\left]${r2[0]}${r2[1]}~;+\\infty\\right[`;}
  if (a1<0 && a2<0 && x1<x2 && choix==1 && r1[2]==1 && r2[2]!=1) {rep=`\\left[${r1[0]}${r1[1]}~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right]`;}
  if (a1<0 && a2<0 && x1<x2 && choix==2 && r1[2]==1 && r2[2]!=1) {rep=`\\left]${r1[0]}${r1[1]}~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right[`;}
  if (a1<0 && a2<0 && x1<x2 && choix==3 && r1[2]==1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r1[0]}${r1[1]}\\right]\\cup \\left[${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;+\\infty\\right[`;}
  if (a1<0 && a2<0 && x1<x2 && choix==4 && r1[2]==1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r1[0]}${r1[1]}\\right[\\cup \\left]${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;+\\infty\\right[`;}
  if (a1<0 && a2<0 && x1<x2 && choix==1 && r1[2]!=1 && r2[2]==1) {rep=`\\left[${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;${r2[0]}${r2[1]}\\right]`;}
  if (a1<0 && a2<0 && x1<x2 && choix==2 && r1[2]!=1 && r2[2]==1) {rep=`\\left]${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;${r2[0]}${r2[1]}\\right[`;}
  if (a1<0 && a2<0 && x1<x2 && choix==3 && r1[2]!=1 && r2[2]==1) {rep=`\\left]-\\infty~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right]\\cup \\left[${r2[0]}${r2[1]}~;+\\infty\\right[`;}
  if (a1<0 && a2<0 && x1<x2 && choix==4 && r1[2]!=1 && r2[2]==1) {rep=`\\left]-\\infty~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right[\\cup \\left]${r2[0]}${r2[1]}~;+\\infty\\right[`;}

  if (a1<0 && a2<0 && x1>x2 && choix==1 && r1[2]!=1 && r2[2]!=1) {rep=`\\left[${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right]`;}
  if (a1<0 && a2<0 && x1>x2 && choix==2 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right[`;}
  if (a1<0 && a2<0 && x1>x2 && choix==3 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right]\\cup \\left[${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;+\\infty\\right[`;}
  if (a1<0 && a2<0 && x1>x2 && choix==4 && r1[2]!=1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right[\\cup \\left]${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;+\\infty\\right[`;}
  if (a1<0 && a2<0 && x1>x2 && choix==1 && r1[2]==1 && r2[2]==1) {rep=`\\left[${r2[0]}${r2[1]}~;${r1[0]}${r1[1]}\\right]`;}
  if (a1<0 && a2<0 && x1>x2 && choix==2 && r1[2]==1 && r2[2]==1) {rep=`\\left]${r2[0]}${r2[1]}~;${r1[0]}${r1[1]}\\right[`;}
  if (a1<0 && a2<0 && x1>x2 && choix==3 && r1[2]==1 && r2[2]==1) {rep=`\\left]-\\infty~;${r2[0]}${r2[1]}\\right]\\cup \\left[${r1[0]}${r1[1]}~;+\\infty\\right[`;}
  if (a1<0 && a2<0 && x1>x2 && choix==4 && r1[2]==1 && r2[2]==1) {rep=`\\left]-\\infty~;${r2[0]}${r2[1]}\\right[\\cup \\left]${r1[0]}${r1[1]}~;+\\infty\\right[`;}
  if (a1<0 && a2<0 && x1>x2 && choix==1 && r1[2]==1 && r2[2]!=1) {rep=`\\left[${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;${r1[0]}${r1[1]}\\right]`;}
  if (a1<0 && a2<0 && x1>x2 && choix==2 && r1[2]==1 && r2[2]!=1) {rep=`\\left]${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}~;${r1[0]}${r1[1]}\\right[`;}
  if (a1<0 && a2<0 && x1>x2 && choix==3 && r1[2]==1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right]\\cup \\left[${r1[0]}${r1[1]}~;+\\infty\\right[`;}
  if (a1<0 && a2<0 && x1>x2 && choix==4 && r1[2]==1 && r2[2]!=1) {rep=`\\left]-\\infty~;${r2[0]}\\dfrac{${r2[1]}}{${r2[2]}}\\right[\\cup \\left]${r1[0]}${r1[1]}~;+\\infty\\right[`;}
  if (a1<0 && a2<0 && x1>x2 && choix==1 && r1[2]!=1 && r2[2]==1) {rep=`\\left[${r2[0]}${r2[1]}~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right]`;}
  if (a1<0 && a2<0 && x1>x2 && choix==2 && r1[2]!=1 && r2[2]==1) {rep=`\\left]${r2[0]}${r2[1]}~;${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}\\right[`;}
  if (a1<0 && a2<0 && x1>x2 && choix==3 && r1[2]!=1 && r2[2]==1) {rep=`\\left]-\\infty~;${r2[0]}${r2[1]}\\right]\\cup \\left[${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;+\\infty\\right[`;}
  if (a1<0 && a2<0 && x1>x2 && choix==4 && r1[2]!=1 && r2[2]==1) {rep=`\\left]-\\infty~;${r2[0]}${r2[1]}\\right[\\cup \\left]${r1[0]}\\dfrac{${r1[1]}}{${r1[2]}}~;+\\infty\\right[`;}

  return rep;
}

function racinesdiff(a1,b1,a2) {
  let rep = nbreouoppose(nbrealéa(1,10));
  while (rep==(a2*b1)/a1) {rep=nbreouoppose(nbrealéa(1,10));}
  return rep;  
}

let coeff1 = coef1();
let a1 = coeff1[0];
let b1 = nbreouoppose(nbrealéa(1,10));
let sb1 = rienplus(b1);
let coeff2 = coef2(a1);
let a2 = coeff2[0];
let sa2 = rienplus(a2);
let opa2 = -a2;
let sopa2 = rienplus(opa2);
let b2 = racinesdiff(a1,b1,a2);
let sb2 = rienplus(b2);
let opb2 = -b2;
let sopb2 = rienplus(opb2);
let choix = nbrealéa(1,4);
let signe = infousup(choix);
let opb1 = -b1;
let a1a2 = a1+a2;
let b1b2 = b1+b2;
let sb1b2 = rienplus(b1b2);
let a1ma2 = a1-a2;
let b1mb2 = b1-b2;
let sb1mb2 = rienplus(b1mb2);
let r1 = fracsimpmax(-b1b2,a1a2);
let r2 = fracsimpmax(-b1mb2,a1ma2);
let x1 = -b1b2/a1a2;
let x2 = -b1mb2/a1ma2;
let sol = soluce(r1,r2,x1,x2,a1a2,a1ma2,choix);


function tabsignes(x,y,L,l,canvas,x1,x2,a1,a2) {
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
  context.moveTo(x+160,y);
  context.lineTo(x+160,l+30);
  context.strokeStyle="black";
  context.stroke();
  context.font = '20px serif';
  context.fillText(`x`,100,55);
  context.fillText(`- ∞`,185,55);
  context.fillText(`+ ∞`,380,55);
  context.fillText(`${a1a2}x${sb1b2}${b1b2}`,80,105);
  context.fillText(`${a1ma2}x${sb1mb2}${b1mb2}`,80,145);
  context.fillText(`(${a1a2}x${sb1b2}${b1b2})(${a1ma2}x${sb1mb2}${b1mb2})`,30,210);
  context.beginPath();
  context.moveTo(x+240,y+40);
  context.lineTo(x+240,l+30);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.moveTo(x+320,y+40);
  context.lineTo(x+320,l+30);
  context.strokeStyle="black";
  context.stroke();

  if (x1<x2 && a1>0 && a2>0) {
  context.font = '20px serif';
  if (r1[2]==1 && r2[2]==1) {context.fillText(`${r1[0]}${r1[1]}`,x+230,55);context.fillText(`${r2[0]}${r2[1]}`,x+310,55);}
  if (r1[2]==1 && r2[2]!=1) {context.fillText(`${r1[0]}${r1[1]}`,x+230,55);context.fillText(`${r2[0]}${r2[1]}/${r2[2]}`,x+310,55);}
  if (r1[2]!=1 && r2[2]==1) {context.fillText(`${r1[0]}${r1[1]}/${r1[2]}`,x+230,55);context.fillText(`${r2[0]}${r2[1]}`,x+310,55);}
  if (r1[2]!=1 && r2[2]!=1) {context.fillText(`${r1[0]}${r1[1]}/${r1[2]}`,x+230,55);context.fillText(`${r2[0]}${r2[1]}/${r2[2]}`,x+310,55);}
  context.fillText(`-`,220,105);context.fillText(`+`,300,105);context.fillText(`+`,370,105);
  context.fillText(`-`,220,145);context.fillText(`-`,300,145);context.fillText(`+`,370,145);
  context.fillText(`+`,220,210);context.fillText(`-`,300,210);context.fillText(`+`,370,210);
  context.beginPath();
  context.arc(x+240, y+65, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+320, y+115, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+240, y+175, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  context.beginPath();
  context.arc(x+320, y+175, 5, 0, 2 * Math.PI);
  context.strokeStyle="black";
  context.stroke();
  }

  if (x1<x2 && a1>0 && a2<0) {
    context.font = '20px serif';
    if (r1[2]==1 && r2[2]==1) {context.fillText(`${r1[0]}${r1[1]}`,x+230,55);context.fillText(`${r2[0]}${r2[1]}`,x+310,55);}
    if (r1[2]==1 && r2[2]!=1) {context.fillText(`${r1[0]}${r1[1]}`,x+230,55);context.fillText(`${r2[0]}${r2[1]}/${r2[2]}`,x+310,55);}
    if (r1[2]!=1 && r2[2]==1) {context.fillText(`${r1[0]}${r1[1]}/${r1[2]}`,x+230,55);context.fillText(`${r2[0]}${r2[1]}`,x+310,55);}
    if (r1[2]!=1 && r2[2]!=1) {context.fillText(`${r1[0]}${r1[1]}/${r1[2]}`,x+230,55);context.fillText(`${r2[0]}${r2[1]}/${r2[2]}`,x+310,55);}
    context.fillText(`-`,220,105);context.fillText(`+`,300,105);context.fillText(`+`,370,105);
    context.fillText(`+`,220,145);context.fillText(`+`,300,145);context.fillText(`-`,370,145);
    context.fillText(`-`,220,210);context.fillText(`+`,300,210);context.fillText(`-`,370,210);
    context.beginPath();
    context.arc(x+240, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+320, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+240, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+320, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
  }

  if (x1<x2 && a1<0 && a2<0) {
    context.font = '20px serif';
    if (r1[2]==1 && r2[2]==1) {context.fillText(`${r1[0]}${r1[1]}`,x+230,55);context.fillText(`${r2[0]}${r2[1]}`,x+310,55);}
    if (r1[2]==1 && r2[2]!=1) {context.fillText(`${r1[0]}${r1[1]}`,x+230,55);context.fillText(`${r2[0]}${r2[1]}/${r2[2]}`,x+310,55);}
    if (r1[2]!=1 && r2[2]==1) {context.fillText(`${r1[0]}${r1[1]}/${r1[2]}`,x+230,55);context.fillText(`${r2[0]}${r2[1]}`,x+310,55);}
    if (r1[2]!=1 && r2[2]!=1) {context.fillText(`${r1[0]}${r1[1]}/${r1[2]}`,x+230,55);context.fillText(`${r2[0]}${r2[1]}/${r2[2]}`,x+310,55);}
    context.fillText(`+`,220,105);context.fillText(`-`,300,105);context.fillText(`-`,370,105);
    context.fillText(`+`,220,145);context.fillText(`+`,300,145);context.fillText(`-`,370,145);
    context.fillText(`+`,220,210);context.fillText(`-`,300,210);context.fillText(`+`,370,210);
    context.beginPath();
    context.arc(x+240, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+320, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+240, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+320, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
  }

  if (x1<x2 && a1<0 && a2>0) {
    context.font = '20px serif';
    if (r1[2]==1 && r2[2]==1) {context.fillText(`${r1[0]}${r1[1]}`,x+230,55);context.fillText(`${r2[0]}${r2[1]}`,x+310,55);}
    if (r1[2]==1 && r2[2]!=1) {context.fillText(`${r1[0]}${r1[1]}`,x+230,55);context.fillText(`${r2[0]}${r2[1]}/${r2[2]}`,x+310,55);}
    if (r1[2]!=1 && r2[2]==1) {context.fillText(`${r1[0]}${r1[1]}/${r1[2]}`,x+230,55);context.fillText(`${r2[0]}${r2[1]}`,x+310,55);}
    if (r1[2]!=1 && r2[2]!=1) {context.fillText(`${r1[0]}${r1[1]}/${r1[2]}`,x+230,55);context.fillText(`${r2[0]}${r2[1]}/${r2[2]}`,x+310,55);}
    context.fillText(`+`,220,105);context.fillText(`-`,300,105);context.fillText(`-`,370,105);
    context.fillText(`-`,220,145);context.fillText(`-`,300,145);context.fillText(`+`,370,145);
    context.fillText(`-`,220,210);context.fillText(`+`,300,210);context.fillText(`-`,370,210);
    context.beginPath();
    context.arc(x+240, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+320, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+240, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+320, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
  }

  if (x1>x2 && a1>0 && a2>0) {
    context.font = '20px serif';
    if (r1[2]==1 && r2[2]==1) {context.fillText(`${r1[0]}${r1[1]}`,x+310,55);context.fillText(`${r2[0]}${r2[1]}`,x+230,55);}
    if (r1[2]==1 && r2[2]!=1) {context.fillText(`${r1[0]}${r1[1]}`,x+310,55);context.fillText(`${r2[0]}${r2[1]}/${r2[2]}`,x+230,55);}
    if (r1[2]!=1 && r2[2]==1) {context.fillText(`${r1[0]}${r1[1]}/${r1[2]}`,x+310,55);context.fillText(`${r2[0]}${r2[1]}`,x+230,55);}
    if (r1[2]!=1 && r2[2]!=1) {context.fillText(`${r1[0]}${r1[1]}/${r1[2]}`,x+310,55);context.fillText(`${r2[0]}${r2[1]}/${r2[2]}`,x+230,55);}
    context.fillText(`-`,220,105);context.fillText(`-`,300,105);context.fillText(`+`,370,105);
    context.fillText(`-`,220,145);context.fillText(`+`,300,145);context.fillText(`+`,370,145);
    context.fillText(`+`,220,210);context.fillText(`-`,300,210);context.fillText(`+`,370,210);
    context.beginPath();
    context.arc(x+320, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+240, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+240, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+320, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
  }

  if (x1>x2 && a1>0 && a2<0) {
    context.font = '20px serif';
    if (r1[2]==1 && r2[2]==1) {context.fillText(`${r1[0]}${r1[1]}`,x+310,55);context.fillText(`${r2[0]}${r2[1]}`,x+230,55);}
    if (r1[2]==1 && r2[2]!=1) {context.fillText(`${r1[0]}${r1[1]}`,x+310,55);context.fillText(`${r2[0]}${r2[1]}/${r2[2]}`,x+230,55);}
    if (r1[2]!=1 && r2[2]==1) {context.fillText(`${r1[0]}${r1[1]}/${r1[2]}`,x+310,55);context.fillText(`${r2[0]}${r2[1]}`,x+230,55);}
    if (r1[2]!=1 && r2[2]!=1) {context.fillText(`${r1[0]}${r1[1]}/${r1[2]}`,x+310,55);context.fillText(`${r2[0]}${r2[1]}/${r2[2]}`,x+230,55);}
    context.fillText(`-`,220,105);context.fillText(`-`,300,105);context.fillText(`+`,370,105);
    context.fillText(`+`,220,145);context.fillText(`-`,300,145);context.fillText(`-`,370,145);
    context.fillText(`-`,220,210);context.fillText(`+`,300,210);context.fillText(`-`,370,210);
    context.beginPath();
    context.arc(x+320, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+240, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+240, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+320, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
  }

  if (x1>x2 && a1<0 && a2<0) {
    context.font = '20px serif';
    if (r1[2]==1 && r2[2]==1) {context.fillText(`${r1[0]}${r1[1]}`,x+310,55);context.fillText(`${r2[0]}${r2[1]}`,x+230,55);}
    if (r1[2]==1 && r2[2]!=1) {context.fillText(`${r1[0]}${r1[1]}`,x+310,55);context.fillText(`${r2[0]}${r2[1]}/${r2[2]}`,x+230,55);}
    if (r1[2]!=1 && r2[2]==1) {context.fillText(`${r1[0]}${r1[1]}/${r1[2]}`,x+310,55);context.fillText(`${r2[0]}${r2[1]}`,x+230,55);}
    if (r1[2]!=1 && r2[2]!=1) {context.fillText(`${r1[0]}${r1[1]}/${r1[2]}`,x+310,55);context.fillText(`${r2[0]}${r2[1]}/${r2[2]}`,x+230,55);}
    context.fillText(`+`,220,105);context.fillText(`+`,300,105);context.fillText(`-`,370,105);
    context.fillText(`+`,220,145);context.fillText(`-`,300,145);context.fillText(`-`,370,145);
    context.fillText(`+`,220,210);context.fillText(`-`,300,210);context.fillText(`+`,370,210);
    context.beginPath();
    context.arc(x+320, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+240, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+240, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+320, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
  }

  if (x1>x2 && a1<0 && a2>0) {
    context.font = '20px serif';
    if (r1[2]==1 && r2[2]==1) {context.fillText(`${r1[0]}${r1[1]}`,x+310,55);context.fillText(`${r2[0]}${r2[1]}`,x+230,55);}
    if (r1[2]==1 && r2[2]!=1) {context.fillText(`${r1[0]}${r1[1]}`,x+310,55);context.fillText(`${r2[0]}${r2[1]}/${r2[2]}`,x+230,55);}
    if (r1[2]!=1 && r2[2]==1) {context.fillText(`${r1[0]}${r1[1]}/${r1[2]}`,x+310,55);context.fillText(`${r2[0]}${r2[1]}`,x+230,55);}
    if (r1[2]!=1 && r2[2]!=1) {context.fillText(`${r1[0]}${r1[1]}/${r1[2]}`,x+310,55);context.fillText(`${r2[0]}${r2[1]}/${r2[2]}`,x+230,55);}
    context.fillText(`+`,220,105);context.fillText(`+`,300,105);context.fillText(`-`,370,105);
    context.fillText(`-`,220,145);context.fillText(`+`,300,145);context.fillText(`+`,370,145);
    context.fillText(`-`,220,210);context.fillText(`+`,300,210);context.fillText(`-`,370,210);
    context.beginPath();
    context.arc(x+320, y+65, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+240, y+115, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+240, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.beginPath();
    context.arc(x+320, y+175, 5, 0, 2 * Math.PI);
    context.strokeStyle="black";
    context.stroke();
  }
}

tabsignes(20,30,400,200,"canvasC",x1,x2,a1a2,a1ma2);

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

let listeenonces = [`Résoudre dans $\\mathbb{R}$ l'inéquation : $(${coeff1[1]}x${sb1}${b1})^2-(${coeff2[1]}x${sb2}${b2})^2${signe}0$`];

let listecorrection = [``];

enonce.innerHTML = listeenonces[0];
enonce2.innerHTML = ``;

solution.innerHTML = `$S=${sol}$`;

correction1.innerHTML = `$\\begin{array}{lccl} & \\color{blue}{\\underbrace{\\color{black}{(${a1}x${sb1}${b1})^2}}_{a^2}}-\\color{blue}{\\underbrace{\\color{black}{(${a2}x${sb2}${b2})^2}}_{b^2}} & ${signe} & 0\\\\
\\iff & [\\color{red}{\\underbrace{\\color{blue}{\\underbrace{\\color{black}{(${a1}x${sb1}${b1})}}_{a}}\\color{black}{+}\\color{blue}{\\underbrace{\\color{black}{(${a2}x${sb2}${b2})}}_{b}}}_{a+b}}]\\times [\\color{red}{\\underbrace{\\color{blue}{\\underbrace{\\color{black}{(${a1}x${sb1}${b1})}}_{a}}\\color{black}{-}\\color{blue}{\\underbrace{\\color{black}{(${a2}x${sb2}${b2})}}_{b}}}_{a-b}}] & ${signe} & 0\\\\
\\iff & (${a1}x${sb1}${b1}${sa2}${a2}x${sb2}${b2})\\times (${a1}x${sb1}${b1}${sopa2}${opa2}x${sopb2}${opb2}) & ${signe} & 0\\\\
\\iff & (${a1a2}x${sb1b2}${b1b2})\\times (${a1ma2}x${sb1mb2}${b1mb2}) & ${signe} & 0
\\end{array}$`;
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