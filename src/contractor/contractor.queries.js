const login = "select * from personnes where email=$1 and mot_de_passe=$2;"
// récupérer les données pour le formulaire
const roles = "select * from roles where id_role != 'id_role';"
const categories = "select * from categories;"
const activites = "select * from activites ;"

const verifyEmail = "select * from personnes where email = $1;"
const signInAsContractor = "insert into personnes (nom,prenom,email,infoPersonne,mot_de_passe,id_activite,id_role,id_societe) values ($1,$2,$3,$4,$5,$6,$7,$8);"

const allContractors = "select nom, prenom, activites.id_activite, societes.id_societe from personnes inner join activites on personnes.id_activite = activites.id_activite inner join societes on personnes.id_societe = societes.id_societe"
const infoContractor = "select infopersonne from personnes where id_personne=$1"

const enableAService = "insert into active (id_personne,id_service) values ($1,$2)"
const disableAService = "delete from active where id_personne=$1 and id_service=$2"

const insererCreneau="insert into creneaux (id_personne, id_stand, creneau) values ($1,$2,$3)"

const findTimeSlot = "select * from creneaux where creneau=$1 and id_stand=$2"

module.exports = {login, verifyEmail, signInAsContractor, roles, categories, activites, infoContractor, allContractors,enableAService,disableAService,insererCreneau,findTimeSlot}