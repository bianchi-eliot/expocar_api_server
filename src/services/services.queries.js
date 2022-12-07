const livreDor = "INSERT INTO livre_dor (prenom, message_livre_dor) VALUES ($1, $2);"

const avis = "insert into avis (valeur_avis, id_personne, id_visiteur) values ($1,$2,$3);"
module.exports = { livreDor, avis }