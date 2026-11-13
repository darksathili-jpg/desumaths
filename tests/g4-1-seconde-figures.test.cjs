'use strict';
const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root,file),'utf8');

test('G4.1 : Seconde offers two distinct and focused teaching pages', () => {
  const menu = read('renderer/Menus/MenuSeconde.html');
  const lab = read('renderer/Laboratoire/FiguresTikZ/index.html');
  const cases = [
    {file:'variations.html', id:'variations', other:'courbe'},
    {file:'parabole.html', id:'courbe', other:'variations'}
  ];
  for (const {file,id,other} of cases) {
    const page = read('renderer/Laboratoire/FiguresTikZ/'+file);
    assert.ok(menu.includes('../Laboratoire/FiguresTikZ/'+file));
    assert.match(page,new RegExp('id="'+id+'" data-tikz-example="'+id+'"'));
    assert.ok(!page.includes('data-tikz-example="'+other+'"'));
    assert.ok(page.includes('figures-tikz.js'));
    assert.ok(page.includes('vendor/tikzjax/tikzjax.js'));
    assert.match(lab,new RegExp('id="'+id+'" data-tikz-example="'+id+'"'));
  }
  assert.ok(!menu.includes('index.html#variations'));
  assert.ok(!menu.includes('index.html#courbe'));
  assert.match(menu,/id="themes"/);
  assert.match(menu,/rendu-menu\.js/);
  assert.match(menu,/Activité facultative/);
});

test('G4.1 : no historical exercise generators or correction assets need editing', () => {
  const menu = read('renderer/Menus/menu-seconde-data.js');
  assert.match(menu,/MenuSecondeFonctions\.html/);
  assert.match(menu,/MenuSecondeEquations\.html/);
  assert.doesNotMatch(menu,/FiguresTikZ/);
});

test('G4.1 : gateway remains readable and keyboard accessible on mobile', () => {
  const style = read('renderer/Menus/StyleMenus.css');
  assert.match(style,/\.g41-links a:focus-visible/);
  assert.match(style,/min-height:44px/);
  assert.match(style,/@media\(max-width:520px\)/);
});

test('G4.1 : automated browser recipe preserves evidence and gates publication', () => {
  const script = read('scripts/visual-check-g4-1-seconde.cjs');
  const workflow = read('.github/workflows/g4-1-seconde.yml');
  assert.match(script,/375/);
  assert.match(script,/1280/);
  assert.match(script,/getBBox/);
  assert.match(script,/waitForURL/);
  assert.match(script,/historicalFunctionRoute/);
  assert.match(script,/MenuSecondeFonctions/);
  assert.match(script,/page\.screenshot/);
  assert.match(workflow,/node scripts\/visual-check-g4-1-seconde\.cjs/);
  assert.match(workflow,/npm run check/);
  assert.match(workflow,/npm run build:web/);
  assert.match(workflow,/artifacts\/g4-1-seconde/);
  assert.match(workflow,/revision\.txt/);
  assert.match(workflow,/git rev-parse HEAD/);
  assert.match(workflow,/GITHUB_STEP_SUMMARY/);
  assert.match(workflow,/Resume de la recette/);
  assert.match(workflow,/needs: build/);
  assert.match(workflow,/needs\.build\.result == 'success'/);
  assert.match(workflow,/actions\/upload-pages-artifact@v4/);
  assert.match(workflow,/actions\/deploy-pages@v4/);
  assert.match(workflow,/name: github-pages/);
  const deployJob=workflow.indexOf('\n  deploy:');
  const browserCheck=workflow.indexOf('node scripts/visual-check-g4-1-seconde.cjs');
  assert.ok(deployJob>browserCheck,'Publishing must depend on browser verification');
  const deployment=workflow.slice(deployJob);
  assert.match(deployment,/pages: write/);
  assert.match(deployment,/id-token: write/);
  assert.match(deployment,/g4-1-build\.json/);
  assert.match(deployment,/x\["commit"\]==os\.environ\["GITHUB_SHA"\]/);


  const revisionLine = workflow.split('\n').find(line => line.includes("printf 'commit="));
  assert.ok(revisionLine,'Missing provenance output');
  assert.ok(revisionLine.includes(String.raw`\n`),'Missing printf line delimiter');
  assert.ok(!revisionLine.includes(String.raw`\\n`),'Escaped literal newlines in provenance');

});

test('G4.1: downloadable site artifact is gated by browser checks', () => {
  const workflow=read('.github/workflows/g4-1-seconde.yml');
  const exportCheck=read('scripts/check-g4-1-web.cjs');
  assert.match(workflow,/node scripts\/check-g4-1-web\.cjs/);
  assert.match(workflow,/name: desumaths-g4-1-site-preview/);
  const chrome=workflow.indexOf('node scripts/visual-check-g4-1-seconde.cjs');
  const preview=workflow.indexOf('name: desumaths-g4-1-site-preview');
  assert.ok(chrome>=0 && preview>chrome,'Preview must only run after browser recipe');
  assert.match(workflow,/dist\/web\/g4-1-build\.json/);
  for(const id of ['variations','courbe']) {
    assert.ok(exportCheck.includes(id),'Missing exported anchor validation: '+id);
  }
  assert.match(exportCheck,/MenuSecondeFonctions\.html/);
});

test('G4.1-R5 : Seconde always loads a versioned stylesheet and Chrome checks real design', () => {
  const menu=read('renderer/Menus/MenuSeconde.html');
  const css=read('renderer/Menus/StyleMenus.css');
  const browser=read('scripts/visual-check-g4-1-seconde.cjs');
  assert.match(menu,/StyleMenus\.css\?v=g41-r5/);
  assert.match(css,/\.g41-figures\{/);
  assert.match(css,/\.g41-links a\{/);
  assert.match(browser,/graphicStyle\.stylesheet/);
  assert.match(browser,/graphicStyle\.border/);
  assert.match(browser,/graphicStyle\.buttonBackground/);
  assert.match(browser,/graphicStyle\.buttonHeight/);
  assert.match(browser,/\['flex','inline-flex'\]\.includes\(graphicStyle\.display\)/);
  assert.doesNotMatch(browser,/assert\.equal\(graphicStyle\.display,'inline-flex'/);

});

test('G4.1: single-figure pages have a one-figure status and wide responsive layout', () => {
  const script=read('renderer/Laboratoire/FiguresTikZ/figures-tikz.js');
  const css=read('renderer/Laboratoire/FiguresTikZ/figures-tikz.css');
  assert.match(script,/cards\.length === 1/);
  assert.match(script,/Figure SVG générée/);
  assert.match(script,/2 figures SVG générées/);
  assert.match(css,/\.g41-single \.g4-gallery/);
  assert.match(css,/grid-template-columns:minmax\(0,1fr\)/);
});

test('G4.1-R8 : each dedicated page has a different question and hidden checked answer', () => {
  const variations=read('renderer/Laboratoire/FiguresTikZ/variations.html');
  const parabole=read('renderer/Laboratoire/FiguresTikZ/parabole.html');
  const style=read('renderer/Laboratoire/FiguresTikZ/figures-tikz.css');
  for (const page of [variations,parabole]) {
    assert.equal((page.match(/class="g41-activity-answer"/g)||[]).length,1);
    assert.match(page,/<summary>Vérifier ma réponse<\/summary>/);
    assert.match(page,/<details class="g41-activity-answer">/);
  }
  assert.match(variations,/décroissante/);
  assert.match(variations,/minimum est −4/);
  assert.match(parabole,/abscisses −2 et 2/);
  assert.match(parabole,/sommet est S\(0 ; −4\)/);
  assert.match(style,/\.g41-activity-answer summary:focus-visible/);
});

test('G4.1-R8 : le script navigateur est syntaxiquement valide avant Playwright', () => {
  const {spawnSync}=require('node:child_process');
  const file=path.join(root,'scripts/visual-check-g4-1-seconde.cjs');
  const result=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});
  assert.equal(result.status,0,'Syntaxe invalide dans la recette navigateur : '+result.stderr);
  const script=read('scripts/visual-check-g4-1-seconde.cjs');
  assert.equal((script.match(/process\.exitCode=1/g)||[]).length,1,'Terminaison dupliquée');
});

test('G4.1 : each focused page links to the actual complementary HTML file', () => {
  const folder='renderer/Laboratoire/FiguresTikZ/';
  for (const [source,destination] of [['variations.html','parabole.html'],['parabole.html','variations.html']]) {
    const page=read(folder+source);
    assert.equal((page.match(new RegExp('href="'+destination+'"','g'))||[]).length,2,
      source+' should link twice to '+destination);
    assert.ok(fs.existsSync(path.join(root,folder,destination)),
      'Broken complementary destination '+destination);
  }
  assert.doesNotMatch(read(folder+'variations.html'),/href="courbe\.html"/);
});
