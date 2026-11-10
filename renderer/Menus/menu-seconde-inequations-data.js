// ============================================================================
// Menus/menu-seconde-inequations-data.js
// ============================================================================

const MENU = {
  titre: 'Inéquations',
  retour: { href: 'MenuSeconde.html', label: 'Retour Menu Seconde' },
  sections: [
    {
      titre: "Fiches d'exercices",
      liens: [
        { href: '../2nde/Inequations/Inequationssimples,intersections,reunions.pdf', label: 'Inéquations simples, intersections, réunions', type: 'pdf' },
        { href: '../2nde/Inequations/Inequations(divers).pdf', label: 'Inéquations (divers)', type: 'pdf' },
        { href: '../2nde/Inequations/Inequations(tableauxdesignesdebase).pdf', label: 'Inéquations (tableaux de signes de base)', type: 'pdf' },
        { href: '../2nde/Inequations/Inequations(tableauxdesignesdivers).pdf', label: 'Inéquations (tableaux de signes divers)', type: 'pdf' },
        { href: '../2nde/Inequations/Systemesdinequations.pdf', label: "Systèmes d'inéquations", type: 'pdf' },
      ],
    },
    {
      titre: 'Exercices « à volonté »',
      liens: [
        { href: '../2nde/Inequations/Inequations simples/Inequations.html', label: 'Inéquations simples' },
        { href: '../2nde/Inequations/Intersection reunion/InterUnion.html', label: 'Intersections et réunions' },
        {
          label: 'Tableaux de signes',
          groupe: [
            { href: '../2nde/Inequations/Tableaux de signes/Tableaux 2 facteurs/TableauSignesDeuxFacteurs.html', label: 'Inéquations avec deux facteurs' },
            { href: '../2nde/Inequations/Tableaux de signes/Tableaux 2 facteurx VI/TableauSignesDeuxFacteursVI.html', label: 'Inéquations avec valeur interdite' },
            { href: '../2nde/Inequations/Tableaux de signes/Tableaux 3 facteurs/TableauSignesTroisFacteurs.html', label: 'Inéquations avec trois facteurs' },
            { href: '../2nde/Inequations/Tableaux de signes/Tableaux 3 facteurs VIs/TableauSignesTroisFacteursVIs.html', label: 'Inéquations avec deux valeurs interdites' },
            { href: '../2nde/Inequations/Tableaux de signes/Difference de carres/IneqsdDiffDeCarres.html', label: 'Inéquations : différences de carrés' },
            { href: '../2nde/Inequations/Tableaux de signes/Ineq fraction pas zero/IneqFracDiffZero.html', label: 'Inéquations : fraction et nombre différent de zéro' },
          ],
        },
      ],
    },
  ],
};
