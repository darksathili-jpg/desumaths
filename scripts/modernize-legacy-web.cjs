"use strict";
// Indirect modernization of the public WEB BUILD ONLY.
// Never alter renderer exercises, JavaScript generators or correction text.
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "../dist/web");
const families = ["2nde", "1ST", "1Spe", "TST", "Tale Spe"];
const css = path.join(root, "StylesLegacy.css");
if (!fs.existsSync(css)) throw new Error("StylesLegacy.css missing in web export");
const changed = [];
function visit(directory) {
  for (const entry of fs.readdirSync(directory, {withFileTypes:true})) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) {visit(absolute); continue;}
    if (!entry.isFile() || !entry.name.toLowerCase().endsWith(".html")) continue;
    let html = fs.readFileSync(absolute, "utf8");
    // Strictly target untouched Bootstrap-style historical exercise templates.
    // Exclude modern exercises and custom HTML whose layout needs dedicated review.
    if (!/<head\b/i.test(html) || !/<\/head\s*>/i.test(html) || !/<body\s*>/i.test(html)) continue;
    if (!/<div\s+id\s*=\s*["']enonces["']/i.test(html)) continue;
    if (!/id\s*=\s*["']solutions["']/i.test(html) || !/id\s*=\s*["']correction["']/i.test(html)) continue;
    if (!/Styleexos\.css/i.test(html) || /StylesIndex\.css|<style\b|dm-layout|exercice-layout|StylesLegacy\.css/i.test(html)) continue;
    const relativeCss = path.relative(path.dirname(absolute), css).split(path.sep).join("/");
    const relativeHome = path.relative(path.dirname(absolute), path.join(root, "index.html")).split(path.sep).join("/");
    const titleMatch = html.match(/<title\s*>([^<]*)<\/title\s*>/i);
    const heading = (titleMatch ? titleMatch[1] : "Exercice de mathématiques").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const viewport = /<meta\s+name\s*=\s*["']viewport["']/i.test(html) ? "" : '    <meta name="viewport" content="width=device-width, initial-scale=1">\n';
    html = html.replace(/<\/head\s*>/i, viewport + '    <link rel="stylesheet" href="' + relativeCss + '">\n</head>');
    const header = '<a class="dm-vintage-skip" href="#enonces">Aller directement à l’exercice</a>\n'
      + '<header class="dm-vintage-header"><a class="dm-vintage-brand" href="' + relativeHome + '">Desum<span>@</span>ths</a>'
      + '<div class="dm-vintage-heading"><span>Exercices à volonté</span><h1>' + heading + '</h1></div></header>\n';
    html = html.replace(/<body\s*>/i, '<body class="dm-vintage">\n' + header);
    fs.writeFileSync(absolute, html, "utf8");
    changed.push(path.relative(root, absolute).split(path.sep).join("/"));
  }
}
for (const family of families) {const directory = path.join(root, family); if (fs.existsSync(directory)) visit(directory);}
if (changed.length < 20) throw new Error("Legacy styling did not reach expected number of pages: "+changed.length);
fs.writeFileSync(path.join(root, "legacy-modernization-report.json"),
  JSON.stringify({styled_exercises:changed.length, files:changed, source_files_untouched:true}, null, 2)+"\n");
console.log("StylesLegacy: "+changed.length+" historical exercises restyled in the web export; original generators and source HTML untouched.");
