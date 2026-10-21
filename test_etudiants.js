import {
  etudiants,
  etudiantsAdmis,
  etudiantsParFiliere,
  nomsComplets,
  releves,
  moyenneGenerale,
  meilleurEtudiant,
  statistiques,
} from './mod_etudiants.js';

console.log('Étudiants admis :', etudiantsAdmis.length);
console.log('Étudiants GINF :', etudiantsParFiliere('GINF').length);
console.log('Noms complets :', nomsComplets); //
console.log('Relevés :', releves);
console.log('Moyenne générale :', moyenneGenerale);
console.log('Meilleur étudiant :', meilleurEtudiant);
console.log('Statistiques par filière :', statistiques);

console.log('Tableau original toujours intact :', etudiants.length);