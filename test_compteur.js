import { creerCompteur } from './mod_compteur.js';

// Test 1 : création d'un nouveau compteur
console.log("Test 1 : Nouveau compteur");

const compteur = creerCompteur();

console.log("Valeur initiale :", compteur.obtenirValeur());

// Test 2 : incrémentation
console.log("\nTest 2 : Incrémentation");

console.log("Après une incrémentation :", compteur.incrementer());
console.log("Après deux incrémentations :", compteur.incrementer());
console.log("Valeur actuelle :", compteur.obtenirValeur());

// Test 3 : réinitialisation
console.log("\nTest 3 : Réinitialisation");

console.log("Après réinitialisation :", compteur.reinitialiser());
console.log("Valeur actuelle :", compteur.obtenirValeur());

// Test 4 : indépendance des compteurs
console.log("\nTest 4 : Indépendance des compteurs");

const compteurA = creerCompteur();
const compteurB = creerCompteur();

compteurA.incrementer();
compteurA.incrementer();
compteurB.incrementer();

console.log("Valeur du compteur A :", compteurA.obtenirValeur());
console.log("Valeur du compteur B :", compteurB.obtenirValeur());

console.log("\nTous les tests manuels sont terminés !");