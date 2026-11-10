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

function simpfracDenomPos(num,denom) {
  let rep;
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(num,denom);
  let num1=num/gcd;
  let denom1=denom/gcd;
  if (num1>0 && denom1>0) {rep=[num1,denom1];}
  if (num1>0 && denom1<0) {rep=[-num1,-denom1];}
  if (num1<0 && denom1>0) {rep=[num1,denom1];}
  if (num1<0 && denom1<0) {rep=[-num1,denom1];}
  return rep;
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

function valabs(a) {
  let rep;
  if (a>0) {rep=a;} else {rep=-a};
  return rep;
}

function k2pi(a) {
  let rep;
  if (a==1) {rep=`2\\pi`;}
  if (a==2) {rep=`\\pi`;}
  if (a==3) {rep=`\\dfrac{2\\pi}{3}`;}
  if (a==4) {rep=`\\dfrac{\\pi}{2}`;}
  if (a==5) {rep=`\\dfrac{2\\pi}{5}`;}
  return rep;
}

function Cosk(a) {
  let rep;
  let ka = -5;
  let sols = [];
  let fg1 = f1gc[0]/f1gc[1]+ka*k2piSurac[0]/k2piSurac[1];
  let fg1frac;
  while (fg1<-1) {fg1=f1gc[0]/f1gc[1]+ka*k2piSurac[0]/k2piSurac[1];ka=ka+1;}
  let ka1 = ka-1;
  fg1 = f1gc[0]/f1gc[1]+(ka-1)*k2piSurac[0]/k2piSurac[1];
  fg1frac = simpfracDenomPos(f1gc[0]*k2piSurac[1]+(ka-1)*k2piSurac[0]*f1gc[1],f1gc[1]*k2piSurac[1]);
  let fg1fracnum = unoupasun(fg1frac[0]);
  sols.push(`$\\text{Si}~k=${ka1}~\\text{alors}~x=\\dfrac{${fg1fracnum}\\pi}{${fg1frac[1]}}$`);
  while (fg1<=1) {
    fg1 = f1gc[0]/f1gc[1]+ka*k2piSurac[0]/k2piSurac[1];
    fg1frac = simpfracDenomPos(f1gc[0]*k2piSurac[1]+ka*k2piSurac[0]*f1gc[1],f1gc[1]*k2piSurac[1]);
    let fg1fracnum = unoupasun(fg1frac[0]);
    sols.push(`$\\text{Si}~k=${ka}~\\text{alors}~x=\\dfrac{${fg1fracnum}\\pi}{${fg1frac[1]}}$`);
    ka = ka+1;
  }
  if (a==1) {rep=`${sols[0]}`;}
  if (a==2) {rep=`${sols[0]}<br><br>${sols[1]}`;}
  if (a==3) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}`;}
  if (a==4) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}<br><br>${sols[3]}`;}
  if (a==5) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}<br><br>${sols[3]}<br><br>${sols[4]}`;}
  return rep;
}

function Coskp(a) {
  let rep;
  let ka = -5;
  let sols = [];
  let fd1 = f1dc[0]/f1dc[1]+ka*k2piSurac[0]/k2piSurac[1];
  let fd1frac;
  while (fd1<-1) {fd1=f1dc[0]/f1dc[1]+ka*k2piSurac[0]/k2piSurac[1];ka=ka+1;}
  let ka1 = ka-1;
  fd1 = f1dc[0]/f1dc[1]+(ka-1)*k2piSurac[0]/k2piSurac[1];
  fd1frac = simpfracDenomPos(f1dc[0]*k2piSurac[1]+(ka-1)*k2piSurac[0]*f1dc[1],f1dc[1]*k2piSurac[1]);
  let fd1fracnum = unoupasun(fd1frac[0]);
  sols.push(`$\\text{Si}~k'=${ka1}~\\text{alors}~x=\\dfrac{${fd1fracnum}\\pi}{${fd1frac[1]}}$`);
  while (fd1<=1) {
    fd1 = f1dc[0]/f1dc[1]+ka*k2piSurac[0]/k2piSurac[1];
    fd1frac = simpfracDenomPos(f1dc[0]*k2piSurac[1]+ka*k2piSurac[0]*f1dc[1],f1dc[1]*k2piSurac[1]);
    let fd1fracnum = unoupasun(fd1frac[0]);
    sols.push(`$\\text{Si}~k'=${ka}~\\text{alors}~x=\\dfrac{${fd1fracnum}\\pi}{${fd1frac[1]}}$`);
    ka = ka+1;
  }
  if (a==1) {rep=`${sols[0]}`;}
  if (a==2) {rep=`${sols[0]}<br><br>${sols[1]}`;}
  if (a==3) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}`;}
  if (a==4) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}<br><br>${sols[3]}`;}
  if (a==5) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}<br><br>${sols[3]}<br><br>${sols[4]}`;}
  return rep;
}

function Segalc(a) {
  let rep;
  let ka = -5;
  let sols = [];
  let fg1 = f1gc[0]/f1gc[1]+ka*k2piSurac[0]/k2piSurac[1];
  let fg1frac;
  while (fg1<-1) {fg1=f1gc[0]/f1gc[1]+ka*k2piSurac[0]/k2piSurac[1];ka=ka+1;}
  let ka1 = ka-1;
  fg1 = f1gc[0]/f1gc[1]+(ka-1)*k2piSurac[0]/k2piSurac[1];
  fg1frac = simpfracDenomPos(f1gc[0]*k2piSurac[1]+(ka-1)*k2piSurac[0]*f1gc[1],f1gc[1]*k2piSurac[1]);
  let fg1fracnum = unoupasun(fg1frac[0]);
  sols.push(`\\dfrac{${fg1fracnum}\\pi}{${fg1frac[1]}}`);
  while (fg1<=1) {
    fg1 = f1gc[0]/f1gc[1]+ka*k2piSurac[0]/k2piSurac[1];
    fg1frac = simpfracDenomPos(f1gc[0]*k2piSurac[1]+ka*k2piSurac[0]*f1gc[1],f1gc[1]*k2piSurac[1]);
    let fg1fracnum = unoupasun(fg1frac[0]);
    sols.push(`\\dfrac{${fg1fracnum}\\pi}{${fg1frac[1]}}`);
    ka = ka+1;
  }
  ka = -5;
  let solsp = [];
  let fd1 = f1dc[0]/f1dc[1]+ka*k2piSurac[0]/k2piSurac[1];
  let fd1frac;
  while (fd1<-1) {fd1=f1dc[0]/f1dc[1]+ka*k2piSurac[0]/k2piSurac[1];ka=ka+1;}
  ka1 = ka-1;
  fd1 = f1dc[0]/f1dc[1]+(ka-1)*k2piSurac[0]/k2piSurac[1];
  fd1frac = simpfracDenomPos(f1dc[0]*k2piSurac[1]+(ka-1)*k2piSurac[0]*f1dc[1],f1dc[1]*k2piSurac[1]);
  let fd1fracnum = unoupasun(fd1frac[0]);
  solsp.push(`\\dfrac{${fd1fracnum}\\pi}{${fd1frac[1]}}`);
  while (fd1<=1) {
    fd1 = f1dc[0]/f1dc[1]+ka*k2piSurac[0]/k2piSurac[1];
    fd1frac = simpfracDenomPos(f1dc[0]*k2piSurac[1]+ka*k2piSurac[0]*f1dc[1],f1dc[1]*k2piSurac[1]);
    let fd1fracnum = unoupasun(fd1frac[0]);
    solsp.push(`\\dfrac{${fd1fracnum}\\pi}{${fd1frac[1]}}`);
    ka = ka+1;
  }
  if (a==1) {rep=`$S=\\left\\{ ${sols[0]}~;~${solsp[0]} \\right\\}$`;}
  if (a==2) {rep=`$S=\\left\\{ ${sols[0]}~;~${sols[1]}~;~${solsp[0]}~;~${solsp[1]} \\right\\} $`}
  if (a==3) {rep=`$S=\\left\\{ ${sols[0]}~;~${sols[1]}~;~${sols[2]}~;~${solsp[0]}~;~${solsp[1]}~;~${solsp[2]} \\right\\} $`}
  if (a==4) {rep=`$S=\\left\\{ ${sols[0]}~;~${sols[1]}~;~${sols[2]}~;~${sols[3]}~;~${solsp[0]}~;~${solsp[1]}~;~${solsp[2]}~;~${solsp[3]} \\right\\} $`}
  if (a==5) {rep=`$S=\\left\\{ ${sols[0]}~;~${sols[1]}~;~${sols[2]}~;~${sols[3]}~;~${sols[4]}~;~${solsp[0]}~;~${solsp[1]}~;~${solsp[2]}~;~${solsp[3]}~;~${solsp[4]} \\right\\} $`}
  return rep;
}

function Cosk1(a) {
  let rep;
  let ka = -5;
  let sols = [];
  let fg1 = f1gc1[0]/f1gc1[1]+ka*k2piSurac1[0]/k2piSurac1[1];
  let fg1frac;
  while (fg1<0) {fg1=f1gc1[0]/f1gc1[1]+ka*k2piSurac1[0]/k2piSurac1[1];ka=ka+1;}
  let ka1 = ka-1;
  fg1 = f1gc1[0]/f1gc1[1]+(ka-1)*k2piSurac1[0]/k2piSurac1[1];
  fg1frac = simpfracDenomPos(f1gc1[0]*k2piSurac1[1]+(ka-1)*k2piSurac1[0]*f1gc1[1],f1gc1[1]*k2piSurac1[1]);
  let fg1fracnum = unoupasun(fg1frac[0]);
  sols.push(`$\\text{Si}~k=${ka1}~\\text{alors}~x=\\dfrac{${fg1fracnum}\\pi}{${fg1frac[1]}}$`);
  while (fg1<=2) {
    fg1 = f1gc1[0]/f1gc1[1]+ka*k2piSurac1[0]/k2piSurac1[1];
    fg1frac = simpfracDenomPos(f1gc1[0]*k2piSurac1[1]+ka*k2piSurac1[0]*f1gc1[1],f1gc1[1]*k2piSurac1[1]);
    let fg1fracnum = unoupasun(fg1frac[0]);
    sols.push(`$\\text{Si}~k=${ka}~\\text{alors}~x=\\dfrac{${fg1fracnum}\\pi}{${fg1frac[1]}}$`);
    ka = ka+1;
  }
  if (a==1) {rep=`${sols[0]}`;}
  if (a==2) {rep=`${sols[0]}<br><br>${sols[1]}`;}
  if (a==3) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}`;}
  if (a==4) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}<br><br>${sols[3]}`;}
  if (a==5) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}<br><br>${sols[3]}<br><br>${sols[4]}`;}
  return rep;
}

function Coskp1(a) {
  let rep;
  let ka = -5;
  let sols = [];
  let fd1 = f1dc1[0]/f1dc1[1]+ka*k2piSurac1[0]/k2piSurac1[1];
  let fd1frac;
  while (fd1<0) {fd1=f1dc1[0]/f1dc1[1]+ka*k2piSurac1[0]/k2piSurac1[1];ka=ka+1;}
  let ka1 = ka-1;
  fd1 = f1dc1[0]/f1dc1[1]+(ka-1)*k2piSurac1[0]/k2piSurac1[1];
  fd1frac = simpfracDenomPos(f1dc1[0]*k2piSurac1[1]+(ka-1)*k2piSurac1[0]*f1dc1[1],f1dc1[1]*k2piSurac1[1]);
  let fd1fracnum = unoupasun(fd1frac[0]);
  sols.push(`$\\text{Si}~k'=${ka1}~\\text{alors}~x=\\dfrac{${fd1fracnum}\\pi}{${fd1frac[1]}}$`);
  while (fd1<=2) {
    fd1 = f1dc1[0]/f1dc1[1]+ka*k2piSurac1[0]/k2piSurac1[1];
    fd1frac = simpfracDenomPos(f1dc1[0]*k2piSurac1[1]+ka*k2piSurac1[0]*f1dc1[1],f1dc1[1]*k2piSurac1[1]);
    let fd1fracnum = unoupasun(fd1frac[0]);
    sols.push(`$\\text{Si}~k'=${ka}~\\text{alors}~x=\\dfrac{${fd1fracnum}\\pi}{${fd1frac[1]}}$`);
    ka = ka+1;
  }
  if (a==1) {rep=`${sols[0]}`;}
  if (a==2) {rep=`${sols[0]}<br><br>${sols[1]}`;}
  if (a==3) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}`;}
  if (a==4) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}<br><br>${sols[3]}`;}
  if (a==5) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}<br><br>${sols[3]}<br><br>${sols[4]}`;}
  return rep;
}

function Segalc1(a) {
  let rep;
  let ka = -5;
  let sols = [];
  let fg1 = f1gc1[0]/f1gc1[1]+ka*k2piSurac1[0]/k2piSurac1[1];
  let fg1frac;
  while (fg1<0) {fg1=f1gc1[0]/f1gc1[1]+ka*k2piSurac1[0]/k2piSurac1[1];ka=ka+1;}
  let ka1 = ka-1;
  fg1 = f1gc1[0]/f1gc1[1]+(ka-1)*k2piSurac1[0]/k2piSurac1[1];
  fg1frac = simpfracDenomPos(f1gc1[0]*k2piSurac1[1]+(ka-1)*k2piSurac1[0]*f1gc1[1],f1gc1[1]*k2piSurac1[1]);
  let fg1fracnum = unoupasun(fg1frac[0]);
  sols.push(`\\dfrac{${fg1fracnum}\\pi}{${fg1frac[1]}}`);
  while (fg1<=2) {
    fg1 = f1gc1[0]/f1gc1[1]+ka*k2piSurac1[0]/k2piSurac1[1];
    fg1frac = simpfracDenomPos(f1gc1[0]*k2piSurac1[1]+ka*k2piSurac1[0]*f1gc1[1],f1gc1[1]*k2piSurac1[1]);
    let fg1fracnum = unoupasun(fg1frac[0]);
    sols.push(`\\dfrac{${fg1fracnum}\\pi}{${fg1frac[1]}}`);
    ka = ka+1;
  }
  ka = -5;
  let solsp = [];
  let fd1 = f1dc1[0]/f1dc1[1]+ka*k2piSurac1[0]/k2piSurac1[1];
  let fd1frac;
  while (fd1<0) {fd1=f1dc1[0]/f1dc1[1]+ka*k2piSurac1[0]/k2piSurac1[1];ka=ka+1;}
  ka1 = ka-1;
  fd1 = f1dc1[0]/f1dc1[1]+(ka-1)*k2piSurac1[0]/k2piSurac1[1];
  fd1frac = simpfracDenomPos(f1dc1[0]*k2piSurac1[1]+(ka-1)*k2piSurac1[0]*f1dc1[1],f1dc1[1]*k2piSurac1[1]);
  let fd1fracnum = unoupasun(fd1frac[0]);
  solsp.push(`\\dfrac{${fd1fracnum}\\pi}{${fd1frac[1]}}`);
  while (fd1<=2) {
    fd1 = f1dc1[0]/f1dc1[1]+ka*k2piSurac1[0]/k2piSurac1[1];
    fd1frac = simpfracDenomPos(f1dc1[0]*k2piSurac1[1]+ka*k2piSurac1[0]*f1dc1[1],f1dc1[1]*k2piSurac1[1]);
    let fd1fracnum = unoupasun(fd1frac[0]);
    solsp.push(`\\dfrac{${fd1fracnum}\\pi}{${fd1frac[1]}}`);
    ka = ka+1;
  }
  if (a==1) {rep=`$S=\\left\\{ ${sols[0]}~;~${solsp[0]} \\right\\}$`;}
  if (a==2) {rep=`$S=\\left\\{ ${sols[0]}~;~${sols[1]}~;~${solsp[0]}~;~${solsp[1]} \\right\\} $`}
  if (a==3) {rep=`$S=\\left\\{ ${sols[0]}~;~${sols[1]}~;~${sols[2]}~;~${solsp[0]}~;~${solsp[1]}~;~${solsp[2]} \\right\\} $`}
  if (a==4) {rep=`$S=\\left\\{ ${sols[0]}~;~${sols[1]}~;~${sols[2]}~;~${sols[3]}~;~${solsp[0]}~;~${solsp[1]}~;~${solsp[2]}~;~${solsp[3]} \\right\\} $`}
  if (a==5) {rep=`$S=\\left\\{ ${sols[0]}~;~${sols[1]}~;~${sols[2]}~;~${sols[3]}~;~${sols[4]}~;~${solsp[0]}~;~${solsp[1]}~;~${solsp[2]}~;~${solsp[3]}~;~${solsp[4]} \\right\\} $`}
  return rep;
}

function Sink(a) {
  let rep;
  let ka = -5;
  let sols = [];
  let fg1 = f1gs[0]/f1gs[1]+ka*k2piSuras[0]/k2piSuras[1];
  let fg1frac;
  while (fg1<-1) {fg1=f1gs[0]/f1gs[1]+ka*k2piSuras[0]/k2piSuras[1];ka=ka+1;}
  let ka1 = ka-1;
  fg1 = f1gs[0]/f1gs[1]+(ka-1)*k2piSuras[0]/k2piSuras[1];
  fg1frac = simpfracDenomPos(f1gs[0]*k2piSuras[1]+(ka-1)*k2piSuras[0]*f1gs[1],f1gs[1]*k2piSuras[1]);
  let fg1fracnum = unoupasun(fg1frac[0]);
  sols.push(`$\\text{Si}~k=${ka1}~\\text{alors}~x=\\dfrac{${fg1fracnum}\\pi}{${fg1frac[1]}}$`);
  while (fg1<=1) {
    fg1 = f1gs[0]/f1gs[1]+ka*k2piSuras[0]/k2piSuras[1];
    fg1frac = simpfracDenomPos(f1gs[0]*k2piSuras[1]+ka*k2piSuras[0]*f1gs[1],f1gs[1]*k2piSuras[1]);
    let fg1fracnum = unoupasun(fg1frac[0]);
    sols.push(`$\\text{Si}~k=${ka}~\\text{alors}~x=\\dfrac{${fg1fracnum}\\pi}{${fg1frac[1]}}$`);
    ka = ka+1;
  }
  if (a==1) {rep=`${sols[0]}`;}
  if (a==2) {rep=`${sols[0]}<br><br>${sols[1]}`;}
  if (a==3) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}`;}
  if (a==4) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}<br><br>${sols[3]}`;}
  if (a==5) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}<br><br>${sols[3]}<br><br>${sols[4]}`;}
  return rep;
}

function Sinkp(a) {
  let rep;
  let ka = -5;
  let sols = [];
  let fd1 = f1ds[0]/f1ds[1]+ka*k2piSuras[0]/k2piSuras[1];
  let fd1frac;
  while (fd1<-1) {fd1=f1ds[0]/f1ds[1]+ka*k2piSuras[0]/k2piSuras[1];ka=ka+1;}
  let ka1 = ka-1;
  fd1 = f1ds[0]/f1ds[1]+(ka-1)*k2piSuras[0]/k2piSuras[1];
  fd1frac = simpfracDenomPos(f1ds[0]*k2piSuras[1]+(ka-1)*k2piSuras[0]*f1ds[1],f1ds[1]*k2piSuras[1]);
  let fd1fracnum = unoupasun(fd1frac[0]);
  sols.push(`$\\text{Si}~k'=${ka1}~\\text{alors}~x=\\dfrac{${fd1fracnum}\\pi}{${fd1frac[1]}}$`);
  while (fd1<=1) {
    fd1 = f1ds[0]/f1ds[1]+ka*k2piSuras[0]/k2piSuras[1];
    fd1frac = simpfracDenomPos(f1ds[0]*k2piSuras[1]+ka*k2piSuras[0]*f1ds[1],f1ds[1]*k2piSuras[1]);
    let fd1fracnum = unoupasun(fd1frac[0]);
    sols.push(`$\\text{Si}~k'=${ka}~\\text{alors}~x=\\dfrac{${fd1fracnum}\\pi}{${fd1frac[1]}}$`);
    ka = ka+1;
  }
  if (a==1) {rep=`${sols[0]}`;}
  if (a==2) {rep=`${sols[0]}<br><br>${sols[1]}`;}
  if (a==3) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}`;}
  if (a==4) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}<br><br>${sols[3]}`;}
  if (a==5) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}<br><br>${sols[3]}<br><br>${sols[4]}`;}
  return rep;
}

function Segal(a) {
  let rep;
  let ka = -5;
  let sols = [];
  let fg1 = f1gs[0]/f1gs[1]+ka*k2piSuras[0]/k2piSuras[1];
  let fg1frac;
  while (fg1<-1) {fg1=f1gs[0]/f1gs[1]+ka*k2piSuras[0]/k2piSuras[1];ka=ka+1;}
  let ka1 = ka-1;
  fg1 = f1gs[0]/f1gs[1]+(ka-1)*k2piSuras[0]/k2piSuras[1];
  fg1frac = simpfracDenomPos(f1gs[0]*k2piSuras[1]+(ka-1)*k2piSuras[0]*f1gs[1],f1gs[1]*k2piSuras[1]);
  let fg1fracnum = unoupasun(fg1frac[0]);
  sols.push(`\\dfrac{${fg1fracnum}\\pi}{${fg1frac[1]}}`);
  while (fg1<=1) {
    fg1 = f1gs[0]/f1gs[1]+ka*k2piSuras[0]/k2piSuras[1];
    fg1frac = simpfracDenomPos(f1gs[0]*k2piSuras[1]+ka*k2piSuras[0]*f1gs[1],f1gs[1]*k2piSuras[1]);
    let fg1fracnum = unoupasun(fg1frac[0]);
    sols.push(`\\dfrac{${fg1fracnum}\\pi}{${fg1frac[1]}}`);
    ka = ka+1;
  }
  ka = -5;
  let solsp = [];
  let fd1 = f1ds[0]/f1ds[1]+ka*k2piSuras[0]/k2piSuras[1];
  let fd1frac;
  while (fd1<-1) {fd1=f1ds[0]/f1ds[1]+ka*k2piSuras[0]/k2piSuras[1];ka=ka+1;}
  ka1 = ka-1;
  fd1 = f1ds[0]/f1ds[1]+(ka-1)*k2piSuras[0]/k2piSuras[1];
  fd1frac = simpfracDenomPos(f1ds[0]*k2piSuras[1]+(ka-1)*k2piSuras[0]*f1ds[1],f1ds[1]*k2piSuras[1]);
  let fd1fracnum = unoupasun(fd1frac[0]);
  solsp.push(`\\dfrac{${fd1fracnum}\\pi}{${fd1frac[1]}}`);
  while (fd1<=1) {
    fd1 = f1ds[0]/f1ds[1]+ka*k2piSuras[0]/k2piSuras[1];
    fd1frac = simpfracDenomPos(f1ds[0]*k2piSuras[1]+ka*k2piSuras[0]*f1ds[1],f1ds[1]*k2piSuras[1]);
    let fd1fracnum = unoupasun(fd1frac[0]);
    solsp.push(`\\dfrac{${fd1fracnum}\\pi}{${fd1frac[1]}}`);
    ka = ka+1;
  }
  if (a==1) {rep=`$S=\\left\\{ ${sols[0]}~;~${solsp[0]} \\right\\}$`;}
  if (a==2) {rep=`$S=\\left\\{ ${sols[0]}~;~${sols[1]}~;~${solsp[0]}~;~${solsp[1]} \\right\\} $`}
  if (a==3) {rep=`$S=\\left\\{ ${sols[0]}~;~${sols[1]}~;~${sols[2]}~;~${solsp[0]}~;~${solsp[1]}~;~${solsp[2]} \\right\\} $`}
  if (a==4) {rep=`$S=\\left\\{ ${sols[0]}~;~${sols[1]}~;~${sols[2]}~;~${sols[3]}~;~${solsp[0]}~;~${solsp[1]}~;~${solsp[2]}~;~${solsp[3]} \\right\\} $`}
  if (a==5) {rep=`$S=\\left\\{ ${sols[0]}~;~${sols[1]}~;~${sols[2]}~;~${sols[3]}~;~${sols[4]}~;~${solsp[0]}~;~${solsp[1]}~;~${solsp[2]}~;~${solsp[3]}~;~${solsp[4]} \\right\\} $`}
  return rep;
}

function Sink1(a) {
  let rep;
  let ka = -5;
  let sols = [];
  let fg1 = f1gs1[0]/f1gs1[1]+ka*k2piSuras1[0]/k2piSuras1[1];
  let fg1frac;
  while (fg1<0) {fg1=f1gs1[0]/f1gs1[1]+ka*k2piSuras1[0]/k2piSuras1[1];ka=ka+1;}
  let ka1 = ka-1;
  fg1 = f1gs1[0]/f1gs&[1]+(ka-1)*k2piSuras1[0]/k2piSuras1[1];
  fg1frac = simpfracDenomPos(f1gs1[0]*k2piSuras1[1]+(ka-1)*k2piSuras1[0]*f1gs1[1],f1gs1[1]*k2piSuras1[1]);
  let fg1fracnum = unoupasun(fg1frac[0]);
  sols.push(`$\\text{Si}~k=${ka1}~\\text{alors}~x=\\dfrac{${fg1fracnum}\\pi}{${fg1frac[1]}}$`);
  while (fg1<=2) {
    fg1 = f1gs1[0]/f1gs1[1]+ka*k2piSuras1[0]/k2piSuras1[1];
    fg1frac = simpfracDenomPos(f1gs1[0]*k2piSuras1[1]+ka*k2piSuras1[0]*f1gs1[1],f1gs1[1]*k2piSuras1[1]);
    let fg1fracnum = unoupasun(fg1frac[0]);
    sols.push(`$\\text{Si}~k=${ka}~\\text{alors}~x=\\dfrac{${fg1fracnum}\\pi}{${fg1frac[1]}}$`);
    ka = ka+1;
  }
  if (a==1) {rep=`${sols[0]}`;}
  if (a==2) {rep=`${sols[0]}<br><br>${sols[1]}`;}
  if (a==3) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}`;}
  if (a==4) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}<br><br>${sols[3]}`;}
  if (a==5) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}<br><br>${sols[3]}<br><br>${sols[4]}`;}
  return rep;
}

function Sinkp1(a) {
  let rep;
  let ka = -5;
  let sols = [];
  let fd1 = f1ds1[0]/f1ds1[1]+ka*k2piSuras1[0]/k2piSuras1[1];
  let fd1frac;
  while (fd1<0) {fd1=f1ds1[0]/f1ds1[1]+ka*k2piSuras1[0]/k2piSuras1[1];ka=ka+1;}
  let ka1 = ka-1;
  fd1 = f1ds1[0]/f1ds1[1]+(ka-1)*k2piSuras1[0]/k2piSuras1[1];
  fd1frac = simpfracDenomPos(f1ds1[0]*k2piSuras1[1]+(ka-1)*k2piSuras1[0]*f1ds1[1],f1ds1[1]*k2piSuras1[1]);
  let fd1fracnum = unoupasun(fd1frac[0]);
  sols.push(`$\\text{Si}~k'=${ka1}~\\text{alors}~x=\\dfrac{${fd1fracnum}\\pi}{${fd1frac[1]}}$`);
  while (fd1<2) {
    fd1 = f1ds1[0]/f1ds1[1]+ka*k2piSuras1[0]/k2piSuras1[1];
    fd1frac = simpfracDenomPos(f1ds1[0]*k2piSuras1[1]+ka*k2piSuras1[0]*f1ds1[1],f1ds1[1]*k2piSuras1[1]);
    let fd1fracnum = unoupasun(fd1frac[0]);
    sols.push(`$\\text{Si}~k'=${ka}~\\text{alors}~x=\\dfrac{${fd1fracnum}\\pi}{${fd1frac[1]}}$`);
    ka = ka+1;
  }
  if (a==1) {rep=`${sols[0]}`;}
  if (a==2) {rep=`${sols[0]}<br><br>${sols[1]}`;}
  if (a==3) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}`;}
  if (a==4) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}<br><br>${sols[3]}`;}
  if (a==5) {rep=`${sols[0]}<br><br>${sols[1]}<br><br>${sols[2]}<br><br>${sols[3]}<br><br>${sols[4]}`;}
  return rep;
}

function Segal1(a) {
  let rep;
  let ka = -5;
  let sols = [];
  let fg1 = f1gs1[0]/f1gs1[1]+ka*k2piSuras1[0]/k2piSuras1[1];
  let fg1frac;
  while (fg1<0) {fg1=f1gs1[0]/f1gs1[1]+ka*k2piSuras1[0]/k2piSuras1[1];ka=ka+1;}
  let ka1 = ka-1;
  fg1 = f1gs1[0]/f1gs1[1]+(ka-1)*k2piSuras1[0]/k2piSuras1[1];
  fg1frac = simpfracDenomPos(f1gs1[0]*k2piSuras1[1]+(ka-1)*k2piSuras1[0]*f1gs1[1],f1gs1[1]*k2piSuras1[1]);
  let fg1fracnum = unoupasun(fg1frac[0]);
  sols.push(`\\dfrac{${fg1fracnum}\\pi}{${fg1frac[1]}}`);
  while (fg1<2) {
    fg1 = f1gs1[0]/f1gs1[1]+ka*k2piSuras1[0]/k2piSuras1[1];
    fg1frac = simpfracDenomPos(f1gs1[0]*k2piSuras1[1]+ka*k2piSuras1[0]*f1gs1[1],f1gs1[1]*k2piSuras1[1]);
    let fg1fracnum = unoupasun(fg1frac[0]);
    sols.push(`\\dfrac{${fg1fracnum}\\pi}{${fg1frac[1]}}`);
    ka = ka+1;
  }
  ka = -5;
  let solsp = [];
  let fd1 = f1ds1[0]/f1ds1[1]+ka*k2piSuras1[0]/k2piSuras1[1];
  let fd1frac;
  while (fd1<0) {fd1=f1ds1[0]/f1ds1[1]+ka*k2piSuras1[0]/k2piSuras1[1];ka=ka+1;}
  ka1 = ka-1;
  fd1 = f1ds1[0]/f1ds1[1]+(ka-1)*k2piSuras1[0]/k2piSuras1[1];
  fd1frac = simpfracDenomPos(f1ds1[0]*k2piSuras1[1]+(ka-1)*k2piSuras1[0]*f1ds1[1],f1ds1[1]*k2piSuras1[1]);
  let fd1fracnum = unoupasun(fd1frac[0]);
  solsp.push(`\\dfrac{${fd1fracnum}\\pi}{${fd1frac[1]}}`);
  while (fd1<=2) {
    fd1 = f1ds1[0]/f1ds1[1]+ka*k2piSuras1[0]/k2piSuras1[1];
    fd1frac = simpfracDenomPos(f1ds1[0]*k2piSuras1[1]+ka*k2piSuras1[0]*f1ds1[1],f1ds1[1]*k2piSuras1[1]);
    let fd1fracnum = unoupasun(fd1frac[0]);
    solsp.push(`\\dfrac{${fd1fracnum}\\pi}{${fd1frac[1]}}`);
    ka = ka+1;
  }
  if (a==1) {rep=`$S=\\left\\{ ${sols[0]}~;~${solsp[0]} \\right\\}$`;}
  if (a==2) {rep=`$S=\\left\\{ ${sols[0]}~;~${sols[1]}~;~${solsp[0]}~;~${solsp[1]} \\right\\} $`}
  if (a==3) {rep=`$S=\\left\\{ ${sols[0]}~;~${sols[1]}~;~${sols[2]}~;~${solsp[0]}~;~${solsp[1]}~;~${solsp[2]} \\right\\} $`}
  if (a==4) {rep=`$S=\\left\\{ ${sols[0]}~;~${sols[1]}~;~${sols[2]}~;~${sols[3]}~;~${solsp[0]}~;~${solsp[1]}~;~${solsp[2]}~;~${solsp[3]} \\right\\} $`}
  if (a==5) {rep=`$S=\\left\\{ ${sols[0]}~;~${sols[1]}~;~${sols[2]}~;~${sols[3]}~;~${sols[4]}~;~${solsp[0]}~;~${solsp[1]}~;~${solsp[2]}~;~${solsp[3]}~;~${solsp[4]} \\right\\} $`}
  return rep;
}

let listeCosEnonces = [`1`,`\\sqrt{3}`,`\\sqrt{2}`,`-1`,`-\\sqrt{3}`,`-\\sqrt{2}`,`2`,`2`,`2`,`2`,`2`,`2`];

let listeCosAngle = [`\\pi`,`\\pi`,`\\pi`,`2\\pi`,`5\\pi`,`3\\pi`,`3`,`6`,`4`,`3`,`6`,`4`,`-\\pi`,`-\\pi`,`-\\pi`,`-2\\pi`,`-5\\pi`,`-3\\pi`,`3`,`6`,`4`,`3`,`6`,`4`];

let listeSinEnonces = [`1`,`\\sqrt{3}`,`\\sqrt{2}`,`-1`,`-\\sqrt{3}`,`-\\sqrt{2}`,`2`,`2`,`2`,`2`,`2`,`2`];

let listeSinAngle = [`\\pi`,`\\pi`,`\\pi`,`-\\pi`,`-\\pi`,`-\\pi`,`6`,`3`,`4`,`6`,`3`,`4`,`5\\pi`,`2\\pi`,`3\\pi`,`-5\\pi`,`-2\\pi`,`-3\\pi`,`6`,`3`,`4`,`6`,`3`,`4`];

let listeSinAngle1 = [`\\pi`,`\\pi`,`\\pi`,`7\\pi`,`4\\pi`,`5\\pi`,`6`,`3`,`4`,`6`,`3`,`4`,`5\\pi`,`2\\pi`,`3\\pi`,`11\\pi`,`5\\pi`,`7\\pi`,`6`,`3`,`4`,`6`,`3`,`4`];


let numCosAngle = [1,1,1,2,5,3,-1,-1,-1,-2,-5,-3];
let denomCosAngle = [3,6,4,3,6,4,3,6,4,3,6,4];

let numSinAngle = [1,1,1,-1,-1,-1,5,2,3,-5,-2,-3];
let denomSinAngle = [6,3,4,6,3,4,6,3,4,6,3,4];

let numSinAngle1 = [1,1,1,7,4,5,5,2,3,11,5,7];
let denomSinAngle1 = [6,3,4,6,3,4,6,3,4,6,3,4];

let listeCosAngle1 = [`\\pi`,`\\pi`,`\\pi`,`2\\pi`,`5\\pi`,`3\\pi`,`3`,`6`,`4`,`3`,`6`,`4`,`5\\pi`,`11\\pi`,`7\\pi`,`4\\pi`,`7\\pi`,`5\\pi`,`3`,`6`,`4`,`3`,`6`,`4`];

let numCosAngle1 = [1,1,1,2,5,3,5,11,7,4,7,5];
let denomCosAngle1 = [3,6,4,3,6,4,3,6,4,3,6,4];

let a = nbrealéa(1,5);
let a1 = unoupasun(a);
let k = nbrealéa(0,5);

let f1gc = simpfracDenomPos(numCosAngle[k],denomCosAngle[k]*a);
let f1gnumc = unoupasun(f1gc[0]);
let f1dc = simpfracDenomPos(numCosAngle[k+6],denomCosAngle[k+6]*a);
let f1dnumc = unoupasun(f1dc[0]);
let k2piSurac = simplifierfraction(2,a);
let k2piSuranumc = unoupasun(k2piSurac[0]);
let k2pisimpc = k2pi(a);
let SolutionsCos = Cosk(a);
let SolutionsCosp = Coskp(a);
let CosS = Segalc(a);

let f1gc1 = simpfracDenomPos(numCosAngle1[k],denomCosAngle1[k]*a);
let f1gnumc1 = unoupasun(f1gc1[0]);
let f1dc1 = simpfracDenomPos(numCosAngle1[k+6],denomCosAngle1[k+6]*a);
let f1dnumc1 = unoupasun(f1dc1[0]);
let k2piSurac1 = simplifierfraction(2,a);
let k2piSuranumc1 = unoupasun(k2piSurac1[0]);
let k2pisimpc1 = k2pi(a);
let SolutionsCos1 = Cosk1(a);
let SolutionsCosp1 = Coskp1(a);
let CosS1 = Segalc1(a);

let f1gs = simpfracDenomPos(numSinAngle[k],denomSinAngle[k]*a);
let f1gnums = unoupasun(f1gs[0]);
let f1ds = simpfracDenomPos(numSinAngle[k+6],denomSinAngle[k+6]*a);
let f1dnums = unoupasun(f1ds[0]);
let k2piSuras = simplifierfraction(2,a);
let k2piSuranums = unoupasun(k2piSuras[0]);
let k2pisimps = k2pi(a);
let SolutionsSin = Sink(a);
let SolutionsSinp = Sinkp(a);
let SinS = Segal(a);

let f1gs1 = simpfracDenomPos(numSinAngle1[k],denomSinAngle1[k]*a);
let f1gnums1 = unoupasun(f1gs1[0]);
let f1ds1 = simpfracDenomPos(numSinAngle1[k+6],denomSinAngle1[k+6]*a);
let f1dnums1 = unoupasun(f1ds1[0]);
let k2piSuras1 = simplifierfraction(2,a);
let k2piSuranum1s = unoupasun(k2piSuras1[0]);
let k2pisimps1 = k2pi(a);
let SolutionsSin1 = Sink1(a);
let SolutionsSinp1 = Sinkp1(a);
let SinS1 = Segal1(a);

let cas = nbrealéa(0,3);

function tabpush() {
  let tableau =[`1`,`2`,`3`];
  let i=0;
  while (i<4) {i=i+1;tableau.push(`cheval${i}`);}
  return rep = `${tableau[0]}<br>${tableau[1]}<br>${tableau[4]}`
}

let tab = tabpush();

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');

let listeenonces = [`Résoudre l'équation : $\\cos(${a1}x)=\\dfrac{${listeCosEnonces[k]}}{${listeCosEnonces[k+6]}}$ dans $]-\\pi~;~\\pi]$`,
`Résoudre l'équation : $\\cos(${a1}x)=\\dfrac{${listeCosEnonces[k]}}{${listeCosEnonces[k+6]}}$ dans $[0~;~2\\pi[$`,
`Résoudre l'équation : $\\sin(${a1}x)=\\dfrac{${listeSinEnonces[k]}}{${listeSinEnonces[k+6]}}$ dans $]-\\pi~;~\\pi]$`,
`Résoudre l'équation : $\\sin(${a1}x)=\\dfrac{${listeSinEnonces[k]}}{${listeSinEnonces[k+6]}}$ dans $[0~;~2\\pi[$`];

let listecorrections = [`$\\begin{array}{lrclcrcl}  & \\cos(${a1}x) & = & \\dfrac{${listeCosEnonces[k]}}{${listeCosEnonces[k+6]}} & & & & \\\\
\\iff & ${a1}x & = & \\dfrac{${listeCosAngle[k]}}{${listeCosAngle[k+6]}}+k2\\pi & \\text{ou} & ${a1}x & = & -\\dfrac{${listeCosAngle[k]}}{${listeCosAngle[k+6]}} +k'2\\pi \\hspace{1cm}(k\\in\\mathbb{Z},k'\\in\\mathbb{Z}) \\\\
\\iff & x & = & \\dfrac{${f1gnumc}\\pi}{${f1gc[1]}} +k${k2pisimpc} & \\text{ou} & x & = & -\\dfrac{${f1gnumc}\\pi}{${f1gc[1]}} +k'${k2pisimpc}
\\end{array}$<br><br>
${SolutionsCos}<br><br>
${SolutionsCosp}<br><br>
${CosS}`,
`$\\begin{array}{lrclcrcl}  & \\cos(${a1}x) & = & \\dfrac{${listeCosEnonces[k]}}{${listeCosEnonces[k+6]}} & & & & \\\\
\\iff & ${a1}x & = & \\dfrac{${listeCosAngle1[k]}}{${listeCosAngle1[k+6]}}+k2\\pi & \\text{ou} & ${a1}x & = & \\dfrac{${listeCosAngle1[k+12]}}{${listeCosAngle1[k+18]}} +k'2\\pi \\hspace{1cm}(k\\in\\mathbb{Z},k'\\in\\mathbb{Z}) \\\\
\\iff & x & = & \\dfrac{${f1gnumc1}\\pi}{${f1gc1[1]}} +k${k2pisimpc1} & \\text{ou} & x & = & \\dfrac{${f1dnumc1}\\pi}{${f1dc1[1]}} +k'${k2pisimpc1}
\\end{array}$<br><br>
${SolutionsCos1}<br><br>
${SolutionsCosp1}<br><br>
${CosS1}`,
`$\\begin{array}{lrclcrcl}  & \\sin(${a1}x) & = & \\dfrac{${listeSinEnonces[k]}}{${listeSinEnonces[k+6]}} & & & & \\\\
\\iff & ${a1}x & = & \\dfrac{${listeSinAngle[k]}}{${listeSinAngle[k+6]}}+k2\\pi & \\text{ou} & ${a1}x & = & \\dfrac{${listeSinAngle[k+12]}}{${listeSinAngle[k+18]}} +k'2\\pi \\hspace{1cm}(k\\in\\mathbb{Z},k'\\in\\mathbb{Z}) \\\\
\\iff & x & = & \\dfrac{${f1gnums}\\pi}{${f1gs[1]}} +k${k2pisimps} & \\text{ou} & x & = & \\dfrac{${f1dnums}\\pi}{${f1ds[1]}} +k'${k2pisimps}
\\end{array}$<br><br>
${SolutionsSin}<br><br>
${SolutionsSinp}<br><br>
${SinS}`,
`$\\begin{array}{lrclcrcl}  & \\sin(${a1}x) & = & \\dfrac{${listeSinEnonces[k]}}{${listeSinEnonces[k+6]}} & & & & \\\\
\\iff & ${a1}x & = & \\dfrac{${listeSinAngle1[k]}}{${listeSinAngle1[k+6]}}+k2\\pi & \\text{ou} & ${a1}x & = & \\dfrac{${listeSinAngle1[k+12]}}{${listeSinAngle1[k+18]}} +k'2\\pi \\hspace{1cm}(k\\in\\mathbb{Z},k'\\in\\mathbb{Z}) \\\\
\\iff & x & = & \\dfrac{${f1gnums1}\\pi}{${f1gs1[1]}} +k${k2pisimps1} & \\text{ou} & x & = & \\dfrac{${f1dnums1}\\pi}{${f1ds1[1]}} +k'${k2pisimps1}
\\end{array}$<br><br>
${SolutionsSin1}<br><br>
${SolutionsSinp1}<br><br>
${SinS1}`];

let listesolutions = [`${CosS}`,`${CosS1}`,`${SinS}`,`${SinS1}`];

enonce.innerHTML = listeenonces[cas];

solution.innerHTML = listesolutions[cas];

correctiond.innerHTML = listecorrections[cas];

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
    location.href = "../../../Menus/MenuTaleEquasdiffs.html";
})