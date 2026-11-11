// Desumaths — exemple leger pour le compilateur PDF en navigateur.
// Le document d'origine complet reste accessible avec le bouton historique.
export const latexWeb = String.raw\`
\\documentclass[11pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{amsmath,amssymb,xcolor}
\\begin{document}
\\begin{center}
{\\Large \\textbf{Desumaths : un exercice corrige}}
\\end{center}
\\section*{Equation du premier degre}
Resoudre :
\\[
  2x+3=11.
\\]
\\textcolor{blue}{\\textbf{Correction :}}
\\begin{align*}
  2x+3 &= 11\\\\
  2x &= 8\\\\
  x &= 4
\\end{align*}
Donc \\(S=\\{4\\}\\).
\\end{document}
\`.trim();
