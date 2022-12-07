const schedule = `
    SELECT EXTRACT (HOUR FROM creneau) AS hour, personnes.id_personne, societes.id_societe, 
        nom, prenom, nom_activite, libelle_service, nom_societe, photo_marque, stands.id_stand
    FROM creneaux
    INNER JOIN personnes
        ON creneaux.id_personne = personnes.id_personne
    INNER JOIN societes
        ON personnes.id_societe = societes.id_societe
    INNER JOIN activites
        ON personnes.id_activite = activites.id_activite
    INNER JOIN stands
        ON creneaux.id_stand = stands.id_stand
    INNER JOIN active
        ON personnes.id_personne = active.id_personne
    INNER JOIN services
        ON active.id_service = services.id_service
    WHERE creneaux.creneau >= $1 AND creneaux.creneau < $2;`

module.exports = {
    schedule
}