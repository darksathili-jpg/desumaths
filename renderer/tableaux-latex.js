/* Tableaux dynamiques composés en TeX par MathJax. */
(function (root) {
  "use strict";

  function array(rows, separators = rows.length - 1) {
    const columns = "c|c" + "c".repeat(rows[0].length - 2);
    return String.raw`\begin{array}{${columns}}` +
      rows.map((row, index) => (index === 0 ? "" :
        index <= separators ? String.raw`\\\hline ` : String.raw`\\ `) + row.join(" & ")).join("") +
      String.raw`\end{array}`;
  }

  function signe(value) {
    return value === 0 ? "0" : value > 0 ? "+" : "-";
  }

  function signesDeuxFacteurs(facteurs, { quotient = false } = {}) {
    const racines = facteurs.map(facteur => facteur.racine).sort((a, b) => a - b);
    const signes = facteurs.map(({ pente, racine }) => {
      const avant = -Math.sign(pente);
      const apres = -avant;
      return racine === racines[0] ? [avant, 0, apres, apres, apres] : [avant, avant, avant, 0, apres];
    });
    const signesResultat = signes[0].map((valeur, indice) => {
      if (quotient && signes[1][indice] === 0) return String.raw`\Vert`;
      return signe(valeur * signes[1][indice]);
    });
    const [numerateur, denominateur] = facteurs.map(({ expression }) => expression);
    const resultat = quotient
      ? "A(x)"
      : `(${numerateur})(${denominateur})`;
    return array([
      ["x", String.raw`-\infty`, "", racines[0], "", racines[1], "", String.raw`+\infty`],
      ...facteurs.map(({ expression }, indice) => [
        expression, "", ...signes[indice].map((valeur, colonne) =>
          colonne % 2 === 1 && valeur !== 0 ? "" : signe(valeur)), "",
      ]),
      [resultat, "", ...signesResultat, ""],
    ]);
  }

  function variationsDegreDeux({ bornes, images, coefficient }) {
    const minimum = coefficient > 0;
    const haut = minimum ? [images[0], "", "", "", images[2]] : ["", "", images[1], "", ""];
    const bas = minimum ? ["", "", images[1], "", ""] : [images[0], "", "", "", images[2]];
    const montee = String.raw`\nearrow`;
    const descente = String.raw`\searrow`;
    return array([
      ["x", bornes[0], "", bornes[1], "", bornes[2]],
      ["f'(x)", "", minimum ? "-" : "+", "0", minimum ? "+" : "-", ""],
      ["", ...haut],
      ["f(x)", "", minimum ? descente : montee, "", minimum ? montee : descente, ""],
      ["", ...bas],
    ], 2);
  }

  function afficher(element, source) {
    element.textContent = String.raw`\[${source}\]`;
  }

  root.DesumathsTableauxLatex = Object.freeze({ signesDeuxFacteurs, variationsDegreDeux, afficher });
})(globalThis);
