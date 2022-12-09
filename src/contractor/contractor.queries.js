const selectContractorByEmailAndPassword = "select * from personnes where email = $1 and mot_de_passe = $2;"
// récupérer les données pour le formulaire
const roles = "select * from roles where id_role != 'id_role';"
const categories = "select * from categories;"
const activites = "select * from activites ;"

const verifyEmail = "select id_personne from personnes where email = $1;"
const insertContractor = "insert into personnes (nom,prenom,email,infoPersonne,mot_de_passe,id_activite,id_role,id_societe) values ($1,$2,$3,$4,$5,$6,$7,$8);"

const selectAllContractor = `
    SELECT personnes.id_personne, societes.id_societe, nom, prenom, nom_activite, 
        nom_societe, photo_marque
    FROM creneaux
    INNER JOIN personnes
        ON creneaux.id_personne = personnes.id_personne
    INNER JOIN societes
        ON personnes.id_societe = societes.id_societe
    INNER JOIN activites
        ON personnes.id_activite = activites.id_activite`

const selectContractorById = `
    SELECT personnes.id_personne, societes.id_societe, nom, prenom, nom_activite, 
        nom_societe, photo_marque, infoPersonne
    FROM personnes
    INNER JOIN societes
        ON personnes.id_societe = societes.id_societe
    INNER JOIN activites
        ON personnes.id_activite = activites.id_activite
    WHERE personnes.id_personne = $1`

const enableAService = "insert into active (id_personne, id_service) values ($1, $2)"
const disableAService = "delete from active where id_personne= $1 and id_service= $2"

const insertTimeSlot="insert into creneaux (id_personne, id_stand, creneau) values ($1,$2,$3)"

const findTimeSlot = "select * from creneaux where creneau=$1 and id_stand=$2"

module.exports = {selectContractorByEmailAndPassword, verifyEmail, insertContractor, roles, categories, activites, selectContractorById, selectAllContractor, enableAService,disableAService,insertTimeSlot,findTimeSlot}