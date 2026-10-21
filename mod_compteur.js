// mod_compteur.js

// Closure : créer un compteur avec une variable privée
export const creerCompteur = () => {
  let compteur = 0;

  return {
    // Incrémenter le compteur de 1
    incrementer: () => {
      compteur++;
      return compteur;
    },

    // Lire la valeur actuelle
    obtenirValeur: () => compteur,

    // Remettre le compteur à zéro
    reinitialiser: () => {
      compteur = 0;
      return compteur;
    },
  };
};