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

function rienmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='';}
    return rep;
}

function plusmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}

function valabs(a) {
    let rep;
    if (a<0) {rep=-a;} else {rep=a;}
    return rep;
}

function parenthesesgd(a) {
    let rep;
    let parg;
    let pard;
    if (a<0) {parg='(';pard=')';} else {parg='';pard='';}
    return rep = [parg,pard];
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

function zerooupaszero(a) {
    let rep;
    let sa = rienplus(a);
    if (a==0) {rep=``;} else {rep=`${sa}${a}`;}
    return rep;
}

function unoupasunzerooupaszero(a) {
    let rep;
    let sa = rienplus(a);
    if (a==1) {rep=`+x`;} else {
        if (a==-1) {rep=`-x`;} else {
            if (a==0) {rep=``;} else {rep=`${sa}${a}x`;}
        }}
    return rep;
}

function zerooupaszero1(a) {
    let rep;
    let sa = rienplus(a);
    if (a==0) {rep=``;} else {rep=`${a}`;}
    return rep;
}

function nbrediff(a) {
    let rep = nbrealéa(-10,10);
    while (a==rep) {rep = nbrealéa(-10,10);}
    return rep;
}

function facteurspremiers(n) {
    let rep = [];
    let liste = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
    let i = 0;
    while (i<liste.length) {
        while (Math.trunc(n/liste[i])==n/liste[i]) {rep.push(liste[i]);n=n/liste[i]};
        i=i+1;
    }
    return rep;
}

function facteurs(n) {
    let rep=[];
    let i = 1;
    while (i<=n) {
        if (Math.trunc(n/i)==n/i) {rep.push(n/i);}
        i=i+1;
    }
    return rep;
}

function simpracine(r) {
    let rep = [];
    let rep1 = 0;
    let rep2 = 0;
    let liste =[4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400,441,484,529,576,625];
    let i = 0;
    while (i<liste.length) {
        if (Math.trunc(r/liste[i])==r/liste[i]) {rep1=Math.sqrt(liste[i]);rep2=r/liste[i];}
        i = i+1;
    }
    if (rep1 == 0 && rep2 == 0) {rep1 = 1;rep2 = r;}
    return rep = [rep1,rep2];
}

function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };

function coefficientsimplificationrep(b,a2,delta) {
    let rep=1;
    let b1 = valabs(b);
    let a1 = valabs(a2);
    let rdeltasimp = simpracine(delta);
    let d = rdeltasimp[0];
    return rep=gcd(gcd(a1,b1),d);
}

function signesibzero(b) {
    let rep;
    if (b==0) {rep=``;} else {rep=`+`;}
    return rep;
}

function soluce(a,b,c) {
    let rep;
    let delta = b*b-4*a*c;
    let opb = -b;
    let b1 = zerooupaszero1(b);
    let opb1 = zerooupaszero1(opb);
    let a2 = 2*a;
    let opa2 = -a2;
    let pgda = parenthesesgd(a);
    let sol1 = -b/(2*a);
    let ssol1 = rienmoins(sol1);
    let sol1fracsimp = simpfracmax(-b,a2);
    let rdelta = Math.sqrt(delta);
    let num1 = opb-rdelta;
    let num2 = opb+rdelta;
    let coefsimp = coefficientsimplificationrep(b,a2,delta);
    let opbsimp = opb/coefsimp;
    let bsimp = -opbsimp;
    let opbsimp1 = zerooupaszero1(opbsimp);
    let bsimp1 = zerooupaszero1(bsimp);
    let a2simp = a2/coefsimp;
    let opa2simp = -a2simp;
    let racinesimp = simpracine(delta);
    let devracinsimp = racinesimp[0]/coefsimp;
    let sousracine = racinesimp[1];
    let szero = signesibzero(b);
    if (delta<0) {rep=`$\\Delta <0$ donc l'équation n'admet pas de solution réelle. <br> $S=\\varnothing$`;}
    if (delta==0) {rep=`$\\Delta =0$ donc l'équation admet une unique solution réelle :<br><br>
        $x_1=\\dfrac{-b}{2a}=\\dfrac{${opb}}{2\\times ${pgda[0]}${a}${pgda[1]}} =\\dfrac{${opb}}{${a2}}=${ssol1}${sol1fracsimp}$<br><br>
        $S=\\left\\{ ${ssol1}${sol1fracsimp} \\right\\}$`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp == 1 && a>0) {rep=`$\\Delta >0$ donc l'équation admet deux solutions réelles distinctes :<br><br>
        $x_1=\\dfrac{-b-\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}-\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}-\\sqrt{${delta}}}{${a2}}$<br><br>
        $x_2=\\dfrac{-b+\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}+\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}${szero}\\sqrt{${delta}}}{${a2}}$<br><br>
        $S=\\left\\{\\dfrac{${opb1}-\\sqrt{${delta}}}{${a2}}~;\\dfrac{${opb1}${szero}\\sqrt{${delta}}}{${a2}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp == 1 && a<0) {rep=`$\\Delta >0$ donc l'équation admet deux solutions réelles distinctes :<br><br>
        $x_1=\\dfrac{-b-\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}-\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}-\\sqrt{${delta}}}{${a2}}=\\dfrac{${b1}${szero}\\sqrt{${delta}}}{${opa2}}$<br><br>
        $x_2=\\dfrac{-b+\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}+\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}${szero}\\sqrt{${delta}}}{${a2}}=\\dfrac{${b1}-\\sqrt{${delta}}}{${opa2}}$<br><br>
        $S=\\left\\{\\dfrac{${b1}${szero}\\sqrt{${delta}}}{${opa2}}~;\\dfrac{${b1}-\\sqrt{${delta}}}{${opa2}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp != 1 && a<0 && devracinsimp!=1 && opa2simp !=1) {rep=`$\\Delta >0$ donc l'équation admet deux solutions réelles distinctes :<br><br>
        $x_1=\\dfrac{-b-\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}-\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}-\\sqrt{${delta}}}{${a2}}=\\dfrac{${opbsimp1}-${devracinsimp}\\sqrt{${sousracine}}}{${a2simp}}=\\dfrac{${bsimp1}${szero}${devracinsimp}\\sqrt{${sousracine}}}{${opa2simp}}$<br><br>
        $x_2=\\dfrac{-b+\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}+\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}${szero}\\sqrt{${delta}}}{${a2}}=\\dfrac{${opbsimp1}${szero}${devracinsimp}\\sqrt{${sousracine}}}{${a2simp}}=\\dfrac{${bsimp1}-${devracinsimp}\\sqrt{${sousracine}}}{${opa2simp}}$<br><br>
        $S=\\left\\{\\dfrac{${bsimp1}${szero}${devracinsimp}\\sqrt{${sousracine}}}{${opa2simp}}~;\\dfrac{${bsimp1}-${devracinsimp}\\sqrt{${sousracine}}}{${opa2simp}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp != 1 && a<0 && devracinsimp!=1 && opa2simp ==1) {rep=`$\\Delta >0$ donc l'équation admet deux solutions réelles distinctes :<br><br>
        $x_1=\\dfrac{-b-\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}-\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}-\\sqrt{${delta}}}{${a2}}=\\dfrac{${opbsimp1}-${devracinsimp}\\sqrt{${sousracine}}}{${a2simp}}=${bsimp1}${szero}${devracinsimp}\\sqrt{${sousracine}}$<br><br>
        $x_2=\\dfrac{-b+\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}+\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}${szero}\\sqrt{${delta}}}{${a2}}=\\dfrac{${opbsimp1}${szero}${devracinsimp}\\sqrt{${sousracine}}}{${a2simp}}=${bsimp1}-${devracinsimp}\\sqrt{${sousracine}}$<br><br>
        $S=\\left\\{${bsimp1}${szero}${devracinsimp}\\sqrt{${sousracine}}~;${bsimp1}-${devracinsimp}\\sqrt{${sousracine}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp != 1 && a<0 && devracinsimp==1 && a2simp!=-1) {rep=`$\\Delta >0$ donc l'équation admet deux solutions réelles distinctes :<br><br>
        $x_1=\\dfrac{-b-\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}-\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}-\\sqrt{${delta}}}{${a2}}=\\dfrac{${opbsimp1}-${devracinsimp}\\sqrt{${sousracine}}}{${a2simp}}=\\dfrac{${bsimp1}${szero}\\sqrt{${sousracine}}}{${opa2simp}}$<br><br>
        $x_2=\\dfrac{-b+\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}+\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}${szero}\\sqrt{${delta}}}{${a2}}=\\dfrac{${opbsimp1}${szero}${devracinsimp}\\sqrt{${sousracine}}}{${a2simp}}=\\dfrac{${bsimp1}-\\sqrt{${sousracine}}}{${opa2simp}}$<br><br>
        $S=\\left\\{\\dfrac{${bsimp1}${szero}\\sqrt{${sousracine}}}{${opa2simp}}~;\\dfrac{${bsimp1}-\\sqrt{${sousracine}}}{${opa2simp}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp != 1 && a<0 && devracinsimp==1 && a2simp==-1) {rep=`$\\Delta >0$ donc l'équation admet deux solutions réelles distinctes :<br><br>
        $x_1=\\dfrac{-b-\\sqrt{\\Delta}}{2a}=\\dfrac{${opb1}-\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}-\\sqrt{${delta}}}{${a2}}=\\dfrac{${opbsimp1}-${devracinsimp}\\sqrt{${sousracine}}}{${a2simp}}=${bsimp1}${szero}\\sqrt{${sousracine}}$<br><br>
        $x_2=\\dfrac{-b+\\sqrt{\\Delta}}{2a}=\\dfrac{${opb1}+\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}${szero}\\sqrt{${delta}}}{${a2}}=\\dfrac{${opbsimp1}${szero}${devracinsimp}\\sqrt{${sousracine}}}{${a2simp}}=${bsimp1}-\\sqrt{${sousracine}}$<br><br>
        $S=\\left\\{${bsimp1}${szero}\\sqrt{${sousracine}}~;${bsimp1}-\\sqrt{${sousracine}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp != 1 && a>0 && devracinsimp!=1 && a2simp!=1) {rep=`$\\Delta >0$ donc l'équation admet deux solutions réelles distinctes :<br><br>
        $x_1=\\dfrac{-b-\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}-\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}-\\sqrt{${delta}}}{${a2}}=\\dfrac{${opbsimp1}-${devracinsimp}\\sqrt{${sousracine}}}{${a2simp}}$<br><br>
        $x_2=\\dfrac{-b+\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}+\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}${szero}\\sqrt{${delta}}}{${a2}}=\\dfrac{${opbsimp1}${szero}${devracinsimp}\\sqrt{${sousracine}}}{${a2simp}}$<br><br>
        $S=\\left\\{\\dfrac{${opbsimp1}-${devracinsimp}\\sqrt{${sousracine}}}{${a2simp}}~;\\dfrac{${opbsimp1}${szero}${devracinsimp}\\sqrt{${sousracine}}}{${a2simp}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp != 1 && a>0 && devracinsimp!=1 && a2simp==1) {rep=`$\\Delta >0$ donc l'équation admet deux solutions réelles distinctes :<br><br>
        $x_1=\\dfrac{-b-\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}-\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}-\\sqrt{${delta}}}{${a2}}=${opbsimp1}-${devracinsimp}\\sqrt{${sousracine}}$<br><br>
        $x_2=\\dfrac{-b+\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}+\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}${szero}\\sqrt{${delta}}}{${a2}}=${opbsimp1}${szero}${devracinsimp}\\sqrt{${sousracine}}$<br><br>
        $S=\\left\\{${opbsimp1}-${devracinsimp}\\sqrt{${sousracine}}~;${opbsimp1}${szero}${devracinsimp}\\sqrt{${sousracine}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp != 1 && a>0 && devracinsimp==1 && a2simp!=1) {rep=`$\\Delta >0$ donc l'équation admet deux solutions réelles distinctes :<br><br>
        $x_1=\\dfrac{-b-\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}-\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}-\\sqrt{${delta}}}{${a2}}=\\dfrac{${opbsimp1}-\\sqrt{${sousracine}}}{${a2simp}}$<br><br>
        $x_2=\\dfrac{-b+\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}+\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}${szero}\\sqrt{${delta}}}{${a2}}=\\dfrac{${opbsimp1}${szero}\\sqrt{${sousracine}}}{${a2simp}}$<br><br>
        $S=\\left\\{\\dfrac{${opbsimp1}-\\sqrt{${sousracine}}}{${a2simp}}~;\\dfrac{${opbsimp1}${szero}\\sqrt{${sousracine}}}{${a2simp}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp != 1 && a>0 && devracinsimp==1 && a2simp==1) {rep=`$\\Delta >0$ donc l'équation admet deux solutions réelles distinctes :<br><br>
        $x_1=\\dfrac{-b-\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}-\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}-\\sqrt{${delta}}}{${a2}}=${opbsimp1}-\\sqrt{${sousracine}}$<br><br>
        $x_2=\\dfrac{-b+\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}+\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}${szero}\\sqrt{${delta}}}{${a2}}=${opbsimp1}${szero}\\sqrt{${sousracine}}$<br><br>
        $S=\\left\\{${opbsimp1}-\\sqrt{${sousracine}}~;${opbsimp1}${szero}\\sqrt{${sousracine}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)==rdelta) {x1=(-b-rdelta)/a2;x2=(-b+rdelta)/a2;sx1=rienmoins(x1);sx2=rienmoins(x2);let x1fracsimp=simpfracmax(-b-rdelta,a2);let x2fracsimp=simpfracmax(-b+rdelta,a2);
        rep=`$\\Delta >0$ donc l'équation admet deux solutions réelles distinctes :<br><br>
        $x_1=\\dfrac{-b-\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}-\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}-\\sqrt{${delta}}}{${a2}}=\\dfrac{${opb1}-${rdelta}}{${a2}}=\\dfrac{${num1}}{${a2}}=${sx1}${x1fracsimp}$<br><br>
        $x_2=\\dfrac{-b+\\sqrt{\\Delta}}{2a}=\\dfrac{${opb}+\\sqrt{${delta}}}{2\\times ${pgda[0]}${a}${pgda[1]}}=\\dfrac{${opb1}${szero}\\sqrt{${delta}}}{${a2}}=\\dfrac{${opb1}${szero}${rdelta}}{${a2}}=\\dfrac{${num2}}{${a2}}=${sx2}${x2fracsimp}$<br><br>
        $S=\\left\\{${sx1}${x1fracsimp}~;${sx2}${x2fracsimp}\\right\\} $`;}
    return rep;
}

function reponses(a,b,c) {
    let rep;
    let delta = b*b-4*a*c;
    let opb = -b;
    let b1 = zerooupaszero1(b);
    let opb1 = zerooupaszero1(opb);
    let a2 = 2*a;
    let opa2 = -a2;
    let sol1 = -b/(2*a);
    let ssol1 = rienmoins(sol1);
    let sol1fracsimp = simpfracmax(-b,a2);
    let rdelta = Math.sqrt(delta);
    let coefsimp = coefficientsimplificationrep(b,a2,delta);
    let opbsimp = opb/coefsimp;
    let bsimp = -opbsimp;
    let opbsimp1 = zerooupaszero1(opbsimp);
    let bsimp1 = zerooupaszero1(bsimp);
    let a2simp = a2/coefsimp;
    let opa2simp = -a2simp;
    let racinesimp = simpracine(delta);
    let devracinsimp = racinesimp[0]/coefsimp;
    let sousracine = racinesimp[1];
    let szero = signesibzero(b);
    if (delta<0) {rep=`$\\Delta <0$ donc l'équation n'admet pas de solution réelle. <br> $S=\\varnothing$`;}
    if (delta==0) {rep=`$S=\\left\\{ ${ssol1}${sol1fracsimp} \\right\\}$`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp == 1 && a>0) {rep=`$S=\\left\\{\\dfrac{${opb1}-\\sqrt{${delta}}}{${a2}}~;\\dfrac{${opb1}${szero}\\sqrt{${delta}}}{${a2}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp == 1 && a<0) {rep=`$S=\\left\\{\\dfrac{${b1}${szero}\\sqrt{${delta}}}{${opa2}}~;\\dfrac{${b1}-\\sqrt{${delta}}}{${opa2}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp != 1 && a<0 && devracinsimp!=1 && opa2simp !=1) {rep=`$S=\\left\\{\\dfrac{${bsimp1}${szero}${devracinsimp}\\sqrt{${sousracine}}}{${opa2simp}}~;\\dfrac{${bsimp1}-${devracinsimp}\\sqrt{${sousracine}}}{${opa2simp}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp != 1 && a<0 && devracinsimp!=1 && opa2simp ==1) {rep=`$S=\\left\\{${bsimp1}${szero}${devracinsimp}\\sqrt{${sousracine}}~;${bsimp1}-${devracinsimp}\\sqrt{${sousracine}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp != 1 && a<0 && devracinsimp==1 && a2simp!=-1) {rep=`$S=\\left\\{\\dfrac{${bsimp1}${szero}\\sqrt{${sousracine}}}{${opa2simp}}~;\\dfrac{${bsimp1}-\\sqrt{${sousracine}}}{${opa2simp}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp != 1 && a<0 && devracinsimp==1 && a2simp==-1) {rep=`$S=\\left\\{${bsimp1}${szero}\\sqrt{${sousracine}}~;${bsimp1}-\\sqrt{${sousracine}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp != 1 && a>0 && devracinsimp!=1 && a2simp!=1) {rep=`$S=\\left\\{\\dfrac{${opbsimp1}-${devracinsimp}\\sqrt{${sousracine}}}{${a2simp}}~;\\dfrac{${opbsimp1}${szero}${devracinsimp}\\sqrt{${sousracine}}}{${a2simp}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp != 1 && a>0 && devracinsimp!=1 && a2simp==1) {rep=`$S=\\left\\{${opbsimp1}-${devracinsimp}\\sqrt{${sousracine}}~;${opbsimp1}${szero}${devracinsimp}\\sqrt{${sousracine}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp != 1 && a>0 && devracinsimp==1 && a2simp!=1) {rep=`$S=\\left\\{\\dfrac{${opbsimp1}-\\sqrt{${sousracine}}}{${a2simp}}~;\\dfrac{${opbsimp1}${szero}\\sqrt{${sousracine}}}{${a2simp}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)!=rdelta && coefsimp != 1 && a>0 && devracinsimp==1 && a2simp==1) {rep=`$S=\\left\\{${opbsimp1}-\\sqrt{${sousracine}}~;${opbsimp1}${szero}\\sqrt{${sousracine}}\\right\\}$<br>`;}
    if (delta>0 && Math.trunc(rdelta)==rdelta) {x1=(-b-rdelta)/a2;x2=(-b+rdelta)/a2;sx1=rienmoins(x1);sx2=rienmoins(x2);let x1fracsimp=simpfracmax(-b-rdelta,a2);let x2fracsimp=simpfracmax(-b+rdelta,a2);
        rep=`$S=\\left\\{${sx1}${x1fracsimp}~;${sx2}${x2fracsimp}\\right\\} $`;}
    return rep;
}

let a = nbreouoppose(nbrealéa(1,10));
let a1 = unoupasun(a);
let pgda = parenthesesgd(a);
let b = nbrealéa(-10,10);
let b1 = unoupasunzerooupaszero(b);
let pgdb = parenthesesgd(b);
let c = nbrealéa(-10,10);
let c1 = zerooupaszero(c);
let pgdc = parenthesesgd(c);
let delta = b*b-4*a*c;
let sol = soluce(a,b,c);
let rep = reponses(a,b,c);

let facts = facteurspremiers(8);
let racine = simpracine(24);

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');

let listenonces = [`Résoudre dans $\\mathbb{R}$ l'équation suivante : $${a1}x^2${b1}${c1}=0$.<br>
`];

let listeCorrections = [`On va tout d'abord calculer $\\Delta=b^2-4ac$ :<br>
$\\Delta = ${pgdb[0]} ${b} ${pgdb[1]} ^2-4\\times ${pgda[0]}${a}${pgda[1]}\\times ${pgdc[0]}${c}${pgdc[1]}=${delta}$<br>
${sol}`];

let listeSolutions = [`${rep}`];

enonce.innerHTML = listenonces[0];
solution.innerHTML = listeSolutions[0];
correctiond.innerHTML = listeCorrections[0];


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
    location.href = "../../../Menus/MenuSecondeEqsDroites.html";
})