const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const dir = path.join(__dirname, '../renderer/Menus');
const pages = fs.readdirSync(dir).filter(n => /^Menu.*\.html$/.test(n));
test('each menu loads MathJax 3 after rendering, with dollar delimiters configured', () => {
  assert.ok(pages.length >= 40, 'expected all generated menus');
  for (const page of pages) {
    const html = fs.readFileSync(path.join(dir, page), 'utf8');
    const cfg = html.indexOf('window.MathJax =');
    const data = html.search(/<script src="(?:data-|menu-)[^"]+\.js" defer><\/script>/);
    const render = html.indexOf('<script src="rendu-menu.js" defer></script>');
    const math = html.indexOf('mathjax@3.2.2/es5/tex-chtml.js');
    assert.ok(cfg >= 0 && data >= 0 && render >= 0 && math >= 0, page);
    assert.ok(data < cfg && cfg < render && render < math, page);
    assert.match(html, /inlineMath:.*\$.*\$/);
  }
});
test('historical labels retain math delimiters, not HTML markup', () => {
 const source=fs.readFileSync(path.join(dir,'data-MenuTSTSuites.js'),'utf8');
 assert.match(source, /\$n\$\+1/);
 assert.match(source, /\$u_0\$/);
 const engine=fs.readFileSync(path.join(dir,'rendu-menu.js'),'utf8');
 assert.match(engine, /texte.textContent = label/);
});
