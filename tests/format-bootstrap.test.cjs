const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
test('Le format local est demandé avant la ressource distante', () => {
 const source = fs.readFileSync(path.resolve(__dirname, '../renderer/Serveur Latex/swiftlatexpdftex.js'), 'utf8');
 assert.ok(source.includes('local.open("GET","swiftlatexpdftex.fmt",false)'));
 assert.ok(source.indexOf('local.open("GET","swiftlatexpdftex.fmt",false)') < source.indexOf('const remote_url=self.texlive_endpoint+"pdftex/"+cacheKey'));
 assert.ok(source.includes('local.response.byteLength>1024'));
});
