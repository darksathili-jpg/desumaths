'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const source=fs.readFileSync(path.join(__dirname,'../renderer/1ST/Fonctions/Fonctions degre 2/Sommet/Scriptdegre2Sommet.js'),'utf8');

test('historical vertex generator: 500 exercises, correct minimum and hidden answers',()=>{
  const elements=new Map();
  const element=(id)=>{
    if(!elements.has(id)){
      const e={id,hidden:true,textContent:'',attributes:{},children:[],
        addEventListener(type,fn){this[type]=fn;},
        setAttribute(name,value){this.attributes[name]=value;},
        replaceChildren(){this.children=[];},
        append(...nodes){this.children.push(...nodes);}
      };
      elements.set(id,e);
    }
    return elements.get(id);
  };
  let count=0;
  const document={
    getElementById:element,
    createElement:()=>element('generated-'+(++count)),
    createTextNode:text=>({textContent:text})
  };
  const window={MathJax:null,addEventListener(){}};
  vm.runInNewContext(source,{document,window,Math,Object},{timeout:1000});
  const seen=new Set();
  for(let i=0;i<500;i++){
    const e=window.DesumathsSommet.getExercise();
    assert.ok(Number.isInteger(e.alpha)&&Number.isInteger(e.beta));
    assert.ok(Math.abs(e.alpha)<=9&&Math.abs(e.beta)<=9);
    assert.ok(Number.isInteger(e.a)&&Math.abs(e.a)>=1&&Math.abs(e.a)<=9);
    assert.equal(e.xS,(e.alpha+e.beta)/2);
    assert.equal(e.yS,e.a*(e.xS-e.alpha)*(e.xS-e.beta));
    assert.equal(element('solution').hidden,true);
    assert.equal(element('correctiond').hidden,true);
    seen.add([e.alpha,e.beta,e.a].join(':'));
    element('recommencer').click();
  }
  assert.ok(seen.size>100,'random generator produced too little variety');
  element('solutions').click();
  element('correction').click();
  assert.equal(element('solution').hidden,false);
  assert.equal(element('correctiond').hidden,false);
  assert.equal(element('correctiond').children.length,4);
  assert.equal(element('solutions').attributes['aria-expanded'],'true');
  assert.equal(element('correction').attributes['aria-expanded'],'true');
  element('recommencer').click();
  assert.equal(element('solution').hidden,true);
  assert.equal(element('correctiond').hidden,true);
});
