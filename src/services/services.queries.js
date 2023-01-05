const insertGuestBook = `
    INSERT INTO livre_dor (id_prestataire, id_visiteur, date_signature, message_visiteur) 
    VALUES ($1, $2, $3, $4);
`

const selectGuestBookByContractorId = `
    SELECT livre_dor.id_visiteur, date_signature, message_visiteur, prenom, nom
    FROM livre_dor
    INNER JOIN personnes 
    ON livre_dor.id_visiteur = personnes.id_personne
    WHERE livre_dor.id_prestataire = $1;
`

const insertStars = `
    INSERT INTO stars (id_prestataire, id_visiteur, valeur_note) 
    VALUES ($1, $2, $3);
`

const selectStartsByContractorId = `
    SELECT AVG(valeur_note) AS grade
    FROM stars
    WHERE id_prestataire = $1;
`

const selectAllServices = `SELECT id_service, libelle_service FROM services;` 

module.exports = {
    insertGuestBook, selectGuestBookByContractorId,
    insertStars, selectStartsByContractorId,
    selectAllServices
}