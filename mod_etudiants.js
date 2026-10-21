// mod_etudiants.js

// Tableau d'objets représentant les étudiants
export const etudiants = [
  { id: 1, nom: 'Alaoui', prenom: 'Sara', filiere: 'GINF', note: 16.5 },
  { id: 2, nom: 'Bennani', prenom: 'Omar', filiere: 'GINF', note: 11.25 },
  { id: 3, nom: 'Chraibi', prenom: 'Lina', filiere: 'GSTR', note: 9.75 },
  { id: 4, nom: 'Douiri', prenom: 'Yassine', filiere: 'GSTR', note: 14 },
  { id: 5, nom: 'El Fassi', prenom: 'Khadija', filiere: 'GINF', note: 17.5 },
];

// 1. filter : étudiants admis (note >= 10)
export const etudiantsAdmis = etudiants.filter(
  ({ note }) => note >= 10
);

// 2. filter + destructuring : filtrer par filière
export const etudiantsParFiliere = (filiere) =>
  etudiants.filter(
    ({ filiere: filiereEtudiant }) => filiereEtudiant === filiere
  );

// 3. map + template string : noms complets
export const nomsComplets = etudiants.map(
  ({ prenom, nom }) => `${prenom} ${nom}`
);

// Fonction auxiliaire pour déterminer la mention
const obtenirMention = (note) => {
  if (note >= 16) return 'Très Bien';
  if (note >= 14) return 'Bien';
  if (note >= 12) return 'Assez Bien';
  if (note >= 10) return 'Passable';
  return 'Insuffisant';
};

// 4. map : tableau de relevés { nom, mention } avec destructuring
export const releves = etudiants.map(
  ({ nom, note }) => ({
    nom,
    mention: obtenirMention(note),
  })
);

// 5. reduce : moyenne générale avec destructuring de l'accumulateur
const { somme, effectif } = etudiants.reduce(
  ({ somme, effectif }, { note }) => ({
    somme: somme + note,
    effectif: effectif + 1,
  }),
  { somme: 0, effectif: 0 }
);

export const moyenneGenerale =
  effectif === 0 ? 0 : somme / effectif;

// 6. Destructuring + spread : meilleur étudiant sans modifier le tableau
export const [meilleurEtudiant] = [...etudiants].sort(
  ({ note: noteA }, { note: noteB }) => noteB - noteA
);

// 7. Destructuring : statistiques par filière
const statistiquesBrutes = etudiants.reduce(
  (acc, { filiere, note }) => {
    if (!acc[filiere]) {
      acc[filiere] = { effectif: 0, somme: 0 };
    }

    acc[filiere].effectif++;
    acc[filiere].somme += note;

    return acc;
  },
  {}
);

export const statistiques = Object.fromEntries(
  Object.entries(statistiquesBrutes).map(
    ([filiere, { effectif, somme }]) => [
      filiere,
      {
        effectif,
        moyenne: somme / effectif,
      },
    ]
  )
);