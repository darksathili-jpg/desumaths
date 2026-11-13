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

test('G4.1 : publication requires complete build, protected math and revision proof', () => {
  const workflow = read('.github/workflows/g4-1-seconde.yml');
  assert.match(workflow,/npm run check\b/);
  assert.match(workflow,/npm run build:web/);
  assert.match(workflow,/npm run check:web/);
  assert.match(workflow,/npm run audit:web/);
  assert.match(workflow,/node scripts\/check-g4-1-web\.cjs/);
  assert.match(workflow,/artifacts\/g4-1-seconde/);
  assert.match(workflow,/revision\.txt/);
  assert.match(workflow,/git rev-parse HEAD/);
  assert.match(workflow,/needs: build/);
  assert.match(workflow,/needs\.build\.result == 'success'/);
  assert.match(workflow,/actions\/upload-pages-artifact@v4/);
  assert.match(workflow,/actions\/deploy-pages@v4/);
  assert.match(workflow,/name: github-pages/);
  const build=workflow.indexOf('npm run build:web');
  const checks=workflow.indexOf('npm run check:web');
  const artifact=workflow.indexOf('actions/upload-pages-artifact@v4');
  const deploy=workflow.indexOf('\n  deploy:');
  assert.ok(build>=0 && checks>build && artifact>checks && deploy>artifact,'Build and checks must precede deployment');
  const deployment=workflow.slice(deploy);
  assert.match(deployment,/pages: write/);
  assert.match(deployment,/id-token: write/);
  assert.match(deployment,/g4-1-build\.json/);
  assert.match(deployment,/x\["commit"\]==os\.environ\["GITHUB_SHA"\]/);
  const revisionLine=workflow.split('\n').find(line=>line.includes("printf 'commit="));
  assert.ok(revisionLine && revisionLine.includes(String.raw`\n`));
});

test('G4.1: full site artifact follows export and source checks', () => {
  const workflow=read('.github/workflows/g4-1-seconde.yml');
  const exportCheck=read('scripts/check-g4-1-web.cjs');
  assert.match(workflow,/node scripts\/check-g4-1-web\.cjs/);
  assert.match(workflow,/path: dist\/web/);
  assert.match(workflow,/dist\/web\/g4-1-build\.json/);
  assert.ok(workflow.indexOf('node scripts/check-g4-1-web.cjs') < workflow.indexOf('actions/upload-pages-artifact@v4'));
  for(const id of ['variations','courbe']) assert.ok(exportCheck.includes(id));
  assert.ok(exportCheck.includes('MenuSecondeFonctions.html'));
});

test('G4.1-R5 : Seconde loads a versioned stylesheet with responsive design', () => {
  const menu=read('renderer/Menus/MenuSeconde.html');
  const css=read('renderer/Menus/StyleMenus.css');
  assert.match(menu,/StyleMenus\.css\?v=g41-r5/);
  assert.match(css,/\.g41-figures\{/);
  assert.match(css,/\.g41-links a\{/);
  assert.match(css,/\.g41-links a:focus-visible/);
  assert.match(css,/@media\(max-width:520px\)/);
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

test('G4.1-R8 : production verifier is valid Node syntax', () => {
  const {spawnSync}=require('node:child_process');
  const file=path.join(root,'scripts/check-g4-1-web.cjs');
  const result=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});
  assert.equal(result.status,0,'Syntaxe invalide du contrôle de publication : '+result.stderr);
  const workflow=read('.github/workflows/g4-1-seconde.yml');
  assert.match(workflow,/node scripts\/check-g4-1-web\.cjs/);
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

test('Production : les accès directs aux exercices historiques existent tous', () => {
 const index=read('renderer/index.html');
 const css=read('renderer/StylesIndex.css');
 const links=[
 'MenuSecondeEquations.html','MenuSecondeFonctions.html','MenuSecondeProbabilites.html','MenuSeconde.html',
 'Menu1STfonctionsdegre2.html','Menu1STsuitesarithmetiques.html','Menu1STprobabilitesproportions.html','Menu1ST.html',
 'MenuTaleSuites.html','MenuTaleProbabilites.html','MenuTaleLimites.html','MenuTaleSpe.html'
 ];
 assert.match(index,/id="patrimoine-acces-titre"/);
 for(const file of links){
  assert.ok(index.includes('href="Menus/'+file+'"'),'Lien accueil absent : '+file);
  assert.ok(fs.existsSync(path.join(root,'renderer/Menus',file)),'Destination historique absente : '+file);
 }
 assert.match(css,/\.patrimoine-grille/);
 assert.match(css,/@media\(max-width:900px\)/);
 assert.match(css,/\.patrimoine-cahier a:focus-visible/);
});

