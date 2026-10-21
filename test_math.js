import {
    addition,
    soustraction,
    multiplication,
    moyenne,
    formatResultat,
    fusionnerTableaux,
    ajouterEnTete
} from './mod_math.js';

console.log("Addition:", addition(5, 3));
console.log("Soustraction:", soustraction(10, 4));
console.log("Multiplication:", multiplication(3, 7));

console.log("Moyenne:", moyenne(10, 15, 20));
console.log("Moyenne vide:", moyenne());

console.log("Format:", formatResultat("Addition", 8));

console.log(
    "Fusion:",
    fusionnerTableaux([1, 2], [3, 4])
);

console.log(
    "Ajout en tête:",
    ajouterEnTete([2, 3, 4], 1)
);