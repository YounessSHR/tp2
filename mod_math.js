// mod_math.js

// 1. Arrow functions (fonctions fléchées)
export const addition = (a, b) => a + b;

export const soustraction = (a, b) => a - b;

export const multiplication = (a, b) => a * b;


// 2. Rest parameter (...) : accepter plusieurs arguments
export const moyenne = (...nombres) => {
    if (nombres.length === 0) {
        return 0;
    }

    const somme = nombres.reduce(
        (total, nombre) => total + nombre,
        0
    );

    return somme / nombres.length;
};


// 3. Template string : formater un résultat
export const formatResultat = (operation, resultat) =>
    `${operation} : ${resultat}`;


// 4. Spread (...) : fusionner plusieurs tableaux
export const fusionnerTableaux = (...tableaux) =>
    [].concat(...tableaux);


// 5. Spread (...) : ajouter un élément au début
export const ajouterEnTete = (tableau, element) =>
    [element, ...tableau];