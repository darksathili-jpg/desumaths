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
    html = html.replace(/<\/head\s*>/i, viewport + '    <link rel="stylesheet" href="' + relativeCss + '?v=20261114-fix3">\n</head>');
    const header = '<a class="dm-vintage-skip" href="#enonces">Aller directement à l’exercice</a>\n'
      + '<header class="dm-vintage-header"><a class="dm-vintage-brand" href="' + relativeHome + '">Desum<span>@</span>ths</a>'
      + '<div class="dm-vintage-heading"><span>Exercices à volonté</span><h1>' + heading + '</h1></div></header>\n';
    html = html.replace(/<body\s*>/i, '<body class="dm-vintage">\n' + header);
    // MathJax 2 may scan the DOM before a deferred exercise generator fills it.
    // Queue typesetting after ALL scripts have loaded and again after revealing answers.
    // If the legacy CDN is unavailable, try the existing MathJax 3 CDN.
    const typesetPatch = `<script>
(function(){
  "use strict";
  function typeset(node) {
    var math=window.MathJax;
    if(math && math.Hub && typeof math.Hub.Queue==="function"){
      math.Hub.Queue(["Typeset",math.Hub,node||document.body]);
    }else if(math && typeof math.typesetPromise==="function"){
      math.typesetPromise([node||document.body]).catch(function(error){console.warn("MathJax:",error);});
    }
  }
  function fallback() {
    var math=window.MathJax;
    if(math && ((math.Hub && typeof math.Hub.Queue==="function") || typeof math.typesetPromise==="function")) {
      typeset(document.body);return;
    }
    window.MathJax={
      tex:{inlineMath:[["$","$"],["\\\\(","\\\\)"]],displayMath:[[String.fromCharCode(36,36),String.fromCharCode(36,36)],["\\\\[","\\\\]"]]},
      startup:{typeset:true}
    };
    var loader=document.createElement("script");
    loader.src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-chtml.js";
    loader.async=true;
    loader.addEventListener("load",function(){typeset(document.body);});
    document.head.appendChild(loader);
  }
  window.addEventListener("load",function(){
    typeset(document.body);
    ["solutions","correction"].forEach(function(id){
      var button=document.getElementById(id);
      if(button)button.addEventListener("click",function(){
        var target=document.getElementById(id==="solutions"?"solution":"correctiond");
        if(target)typeset(target);
      });
    });
    window.setTimeout(fallback,400);
  });
}());
</script>`;
    html=html.replace(/<\/body\s*>/i,typesetPatch+"\n</body>");
    fs.writeFileSync(absolute, html, "utf8");
    changed.push(path.relative(root, absolute).split(path.sep).join("/"));
  }
}
for (const family of families) {const directory = path.join(root, family); if (fs.existsSync(directory)) visit(directory);}
if (changed.length < 20) throw new Error("Legacy styling did not reach expected number of pages: "+changed.length);
fs.writeFileSync(path.join(root, "legacy-modernization-report.json"),
  JSON.stringify({styled_exercises:changed.length, files:changed, source_files_untouched:true}, null, 2)+"\n");
// A single clickable review of the actual pages emitted by this build.
const escapeHtml = value => value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const sections = families.map(family => {
  const paths = changed.filter(file => file.startsWith(family+"/"));
  if (!paths.length) return "";
  const links = paths.map(file => {
    const url = file.split("/").map(encodeURIComponent).join("/");
    const label = file.slice(family.length+1);
    return '<li><a class="review-link" href="'+url+'">'+escapeHtml(label)+'</a></li>';
  }).join("\n");
  return '<section><h2>'+escapeHtml(family)+' — '+paths.length+' exercices</h2><ol>'+links+'</ol></section>';
}).join("\n");
const reportHtml = '<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
  + '<title>Vérification de la refonte — Desumaths</title>'
  + '<style>*{box-sizing:border-box}body{margin:0;background:#faf6ee;color:#19253d;font:16px/1.6 system-ui,Arial,sans-serif}'
  + 'header{padding:26px max(18px,calc((100vw - 1100px)/2));background:#fff;border-bottom:1px solid #d9dce5}'
  + 'header a{color:#a92840;font-weight:800;text-decoration:none}h1{font-size:clamp(1.6rem,4vw,2.6rem);line-height:1.15;margin:10px 0}'
  + 'main{max-width:1100px;margin:auto;padding:22px 18px 64px}section{margin:22px 0;padding:20px;border:1px solid #d8dce6;border-radius:14px;background:#fff}'
  + 'ol{columns:2;column-gap:30px;padding-left:24px}li{break-inside:avoid;margin:0 0 10px;overflow-wrap:anywhere}'
  + 'a{color:#174c7a}a:focus-visible{outline:3px solid #b42c48;outline-offset:3px}@media(max-width:700px){ol{columns:1}}</style></head><body>'
  + '<header><a href="index.html">← Accueil Desumaths</a><h1>Vérification de la refonte</h1>'
  + '<p>'+changed.length+' exercices historiques présentés avec le nouvel habillage. Les générateurs et corrigés mathématiques restent inchangés.</p>'
  + '<p>Ouvrir chaque exercice permet de contrôler l’énoncé, la solution, la correction et le rendu mobile.</p></header>'
  + '<main>'+sections+'</main></body></html>';
fs.writeFileSync(path.join(root,"verification-refonte.html"),reportHtml,"utf8");
console.log("StylesLegacy: "+changed.length+" historical exercises restyled in the web export; original generators and source HTML untouched.");
