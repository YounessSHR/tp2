// mod_async.js

// 1. Promise : attendre pendant une durée donnée
export const attendre = (duree) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duree);
  });
};

// 2. Async / Await + Fetch : récupérer un utilisateur depuis une API
export const obtenirUtilisateur = async (id = 1) => {
  if (!Number.isInteger(id) || id < 1) {
    throw new TypeError("L'identifiant doit être un entier positif.");
  }

  // Envoyer une requête HTTP
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  // Vérifier si la requête a réussi
  if (!response.ok) {
    throw new Error(`Erreur HTTP : ${response.status}`);
  }

  // Convertir la réponse en objet JavaScript
  const utilisateur = await response.json();

  return utilisateur;
};