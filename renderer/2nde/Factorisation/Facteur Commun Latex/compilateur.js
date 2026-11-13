// Importation de la variable contenant le script latex.
import { latex } from "./latex.js";

// compileBtn est le bouton pour démarrer la compilation du script Latex
const compileBtn = document.getElementById("compilebtn");
// Elément de visualisation les informations de compilation.
const consoleOutput = document.getElementById("console");
// Elément de visualisation du fichier PDF généré après compilation.
const pdfbox = document.getElementById("pdfbox");
// Elèment de visualisation du script Latex
const pdfscript = document.getElementById("pdfscript");
pdfscript.innerHTML = latex;
// Création de la balise d'affichage embed du PDF
const embed = document.createElement("embed");
embed.type = "application/pdf";
embed.width = "100%";
embed.height = "400px";
pdfbox.appendChild(embed);

// Instanciation de la machine de compilation distante : PdfTeXEngine.js
const globalEn = new PdfTeXEngine();

async function init() {
  /* 
  On attend que la machine de compilation soit disponible,
  si c'est le cas la compilation peut démarrer
  */
  await globalEn.loadEngine();
  compileBtn.innerHTML = "Compiler le document latex";
  compileBtn.disabled = false;
  compileBtn.addEventListener("click", () => {
    compile();
  });
}

async function compile() {
  if (!globalEn.isReady()) {
    console.log("Machine de compilation inaccessible...");
    return;
  }
  compileBtn.disabled = true;
  compileBtn.innerHTML = "Compilation...";

  // Création du fichier main.tex et injection du script.
  globalEn.writeMemFSFile("main.tex", latex);
  // Chargement du fichier main.tex dans la machine de compilation.
  globalEn.setEngineMainFile("main.tex");
  // r contient le résultat de la compilation.
  let r = await globalEn.compileLaTeX();
  // r.log permet d'obtenir les informations de compilation(Comme avec Texmaker).
  consoleOutput.innerHTML = r.log;
  compileBtn.innerHTML = "Compiler";
  compileBtn.disabled = false;

  // Si la compilation a réussi on génère un objet permettant l'affiche du PDF.
  if (r.status === 0) {
    const pdfblob = new Blob([r.pdf], { type: "application/pdf" });
    // Création d'une URL pour afficher le PDF dans une balise HTML de type embed.
    const objectURL = URL.createObjectURL(pdfblob);
    // On libère l'URL : C'est techniquement pour éviter la surcharge des resources.
    setTimeout(() => {
      URL.revokeObjectURL(objectURL);
    }, 30000);
    // Affichage de contôle de l'URL.
    console.log(objectURL);
    // On affiche le PDF dans une balise embed.
    embed.src = objectURL;
  }
}

init();
