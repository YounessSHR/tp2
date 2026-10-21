import {
  attendre,
  obtenirUtilisateur
} from './mod_async.js';

console.log("Test 1 : Promise");

const debut = Date.now();

await attendre(500);

console.log(
  `Attente terminée après environ ${Date.now() - debut} ms`
);

console.log("\nTest 2 : Fetch et async/await");

try {
  const utilisateur = await obtenirUtilisateur(1);

  console.log("ID :", utilisateur.id);
  console.log("Nom :", utilisateur.name);
  console.log("Email :", utilisateur.email);

  console.log("\nTest terminé avec succès !");
} catch (erreur) {
  console.error("Erreur pendant le test :", erreur.message);
  process.exitCode = 1;
}