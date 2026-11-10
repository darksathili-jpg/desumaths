/*
  Variable contenant le script matex
*/

function nbrealéa(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

let a = nbrealéa(1,15);

export let latex = `\\documentclass[a4paper,11pt]{book}
\\pagestyle{empty}
\\usepackage[left=1cm,right=1cm,top=1cm,bottom=1cm]{geometry}
\\usepackage[utf8]{inputenc}
\\usepackage{tabularx}
\\usepackage{diagbox,slashbox}
\\usepackage[T1]{fontenc}
\\usepackage{tikz,tkz-tab,tikz-cd}
\\usetikzlibrary{patterns}
\\usepackage{enumitem}
\\usepackage{eurosym}
\\usepackage{amsthm}
\\usepackage{graphicx,multicol}
\\usepackage{pstricks,pst-all,pst-tree,pst-func}
\\usepackage{amsmath,amssymb,amsfonts,mathrsfs,makeidx}
\\usepackage{fancybox}
\\usepackage{fancyhdr}
\\usepackage{lscape}
\\usepackage[makeroom]{cancel}
\\usepackage{tablists}
\\usepackage{ulem,xcolor}
\\usepackage{color,colortbl}
\\usepackage{titlesec}
\\usepackage{pifont}
\\usepackage{pict2e}
\\usepackage[frenchb]{babel}



%Ensembles de nombres%
\\def\\N{\\mathbb{N}}
\\def\\Z{\\mathbb{Z}}
\\def\\D{\\mathbb{D}}
\\def\\Q{\\mathbb{Q}}
\\def\\R{\\mathbb{R}}
\\def\\C{\\mathbb{C}}

%Gras, italique, soulignement%
\\newcommand{\\g}[1]{{\\bfseries{#1}}}
\\newcommand{\\soul}[1]{{\\underline{#1}}}
\\newcommand{\\ita}[1]{{\\textit{#1}}}
\\newcommand{\\gsoul}[1]{{\\bfseries{\\underline{#1}}}}
\\newcommand{\\gita}[1]{{\\bfseries{\\textit{#1}}}}
\\newcommand{\\soulita}[1]{{\\underline{\\textit{#1}}}}
\\newcommand{\\gitasoul}[1]{{\\bfseries{\\underline{\\textit{#1}}}}}


%Taille de la police%
\\newcommand{\\taille}[2]{{\\fontsize{#1}{#1}\\selectfont {#2}}}



\\renewcommand{\\theenumi}{\\textbf{\\arabic{enumi}}}
\\renewcommand{\\labelenumi}{\\textbf{\\theenumi)}}
\\renewcommand{\\theenumii}{\\textbf{\\alph{enumii}}}
\\renewcommand{\\labelenumii}{\\textbf{\\theenumii)}}




\\newcommand{\\A}{\\text{À~}}
\\newcommand{\\vertipar}[2]{\\displaystyle\\binom{#1}{#2}}
\\newcommand{\\vectd}[3]{\\renewcommand{\\arraystretch}{1}
\\overrightarrow{#1}\\displaystyle\\begin{pmatrix}
 #2 \\\\
 #3 
 \\end{pmatrix}}
\\newcommand{\\vectt}[4]{\\renewcommand{\\arraystretch}{1}
\\overrightarrow{#1}\\displaystyle\\begin{pmatrix}
 #2 \\\\
 #3 \\\\
 #4
 \\end{pmatrix}}



\\newcommand{\\entoure}[3]{\\textcolor{#1}{\\ovalbox{\\textcolor{#2}{#3}}}}
\\newcommand{\\syst}[4]{$\\left\\lbrace\\def\\arraystretch{1.2}\\begin{array}{r@{~}l@{~}r}#1&=&#2\\\\#3&=&#4\\end{array}\\right.$}
\\newcommand{\\Titre}[1]{\\begin{center}
\\taille{14}{\\gsoul{#1}}
\\end{center}}


\\begin{document}
\\Titre{Une correction du DS 6}
\\gsoul{Exercice 1 :}
\\begin{enumerate}
\\item \\begin{tikzpicture}[baseline={([yshift=-1em] current bounding box.north)}]
\\tikzset{double style/.style = {double,double distance=2pt}}
\\tkzTabInit[lgt=4,espcl=4]{$x$/1,$3x-12$/1,$-2x+10$/1,$(3x-12)(-2x+10)$/1}{$-\\infty$,$4$,$5$,$+\\infty$}
\\tkzTabLine{,-,z,+,t,+}
\\tkzTabLine{,+,t,+,z,-}
\\tkzTabLine{,-,z,+,z,-}
\\end{tikzpicture}
\\vspace{2cm}\\\\
\\begin{center}
$S=]-\\infty~;~4]\\cup [5~;~+\\infty[$
\\end{center}
\\end{enumerate}
\\end{document}
`
