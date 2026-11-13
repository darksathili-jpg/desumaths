"use strict";
// Calcul exact de l'equation ax+b=cx+d. Module partage navigateur / tests Node.
(function(root,factory){
  const api=factory();
  if(typeof module==='object' && module.exports) module.exports=api;
  if(root) root.DesumathsEquation=api;
})(typeof globalThis!=='undefined'?globalThis:null,function(){
  function pgcd(a,b){a=a<0n?-a:a;b=b<0n?-b:b;while(b!==0n){const t=a%b;a=b;b=t;}return a;}
  function rationnel(num,den=1n){
    num=BigInt(num);den=BigInt(den);
    if(den===0n) throw new RangeError('Dénominateur nul');
    if(den<0n){num=-num;den=-den;}
    const g=pgcd(num,den);
    return {num:num/g,den:den/g};
  }
  function parseReponse(raw){
    if(typeof raw!=='string'||raw.length>120) return null;
    let s=raw.trim().replace(/\u2212/g,'-').replace(/\s+/g,'');
    s=s.replace(/^x=/i,'');
    if(!s||!/^[-+]?(?:\d+(?:[.,]\d+)?|[.,]\d+)(?:\/[-+]?\d+)?$/.test(s))return null;
    // Limiter la taille des entiers pour eviter les saisies accidentelles demesurees.
    if(s.replace(/[^0-9]/g,'').length>30)return null;
    const parts=s.split('/');
    if(parts.length===2){
      if(/[.,]/.test(parts[0]))return null;
      const den=BigInt(parts[1]);
      if(den===0n)return null;
      return rationnel(BigInt(parts[0]),den);
    }
    const norm=s.replace(',','.');
    const neg=norm.startsWith('-');
    const digits=norm.replace(/^[-+]/,'').split('.');
    const frac=digits[1]||'';
    const num=BigInt(digits[0]||'0')*10n**BigInt(frac.length)+BigInt(frac||'0');
    return rationnel(neg?-num:num,10n**BigInt(frac.length));
  }
  function estSolution(saisie,eq){
    const valeur=parseReponse(saisie);
    if(!valeur)return {valide:false,correct:false,raison:'format'};
    const attendu=solution(eq);
    return {valide:true,correct:valeur.num===attendu.num&&valeur.den===attendu.den};
  }
  function solution(eq){
    if(!eq||![eq.a,eq.b,eq.c,eq.d].every(Number.isSafeInteger))throw new TypeError('Coefficients entiers requis');
    if(eq.a===eq.c)throw new RangeError('Le coefficient de x ne doit pas être nul');
    return rationnel(BigInt(eq.d-eq.b),BigInt(eq.a-eq.c));
  }
  function genere(random=Math.random){
    function entier(min,max){return Math.floor(random()*(max-min+1))+min;}
    const a=entier(-10,10)||1,b=entier(-10,10),d=entier(-10,10);
    let c=entier(-10,10);
    if(c===a)c=a===10?9:a+1;
    return {a,b,c,d};
  }
  function formatRationnel(r){return r.den===1n?String(r.num):`\\frac{${r.num}}{${r.den}}`;}
  function termeX(n,first){
    if(n===0)return first?'0':'';
    const abs=Math.abs(n),val=(abs===1?'':abs)+'x';
    return (n<0?(first?'-':' - '):(first?'':' + '))+val;
  }
  function termeNombre(n){return n<0?' - '+Math.abs(n):' + '+n;}
  function membre(x,n){return termeX(x,true)+termeNombre(n);}
  function latexEquation(eq){return `${membre(eq.a,eq.b)} = ${membre(eq.c,eq.d)}`;}
  function latexCorrection(eq){
    const t=eq.a-eq.c,u=eq.d-eq.b;
    const sol=solution(eq);
    const fin=`x = ${formatRationnel(sol)}`;
    // Chaque etape est une egalite equivalente, y compris pour des coefficients negatifs.
    return [
      {titre:'Méthode « collège » — opérations sur les deux membres',etapes:[
        latexEquation(eq),
        `${membre(eq.a,eq.b)} - (${eq.b}) = ${membre(eq.c,eq.d)} - (${eq.b})`,
        `${termeX(eq.a,true)} = ${membre(eq.c,u)}`,
        `${termeX(eq.a,true)} - (${eq.c}x) = ${membre(eq.c,u)} - (${eq.c}x)`,
        `${t}x = ${u}`,
        fin
      ]},
      {titre:'Méthode « lycée » — regroupement des termes',etapes:[
        latexEquation(eq),
        `${termeX(eq.a,true)} - (${eq.c}x) = ${eq.d} - (${eq.b})`,
        `${t}x = ${u}`,
        fin
      ]}
    ];
  }
  return {rationnel,parseReponse,estSolution,solution,genere,formatRationnel,latexEquation,latexCorrection};
});
