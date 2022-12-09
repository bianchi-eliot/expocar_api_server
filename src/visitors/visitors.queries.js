const verifyEmail = "select * from personnes where email = $1;"
const signUpAsClient = " insert into personnes (nom, prenom, email, mot_de_passe, id_role) values ($1,$2,$3,$4,$5);"

const ajouterUnAvis = "insert into note (id_personne,id_visiteur,valeur_note) values ($1,$2,$3);"
const ajouterUnCommentaireAuLivreDor ="insert into livre_dor (id_personne,id_visiteur,date_signature,message_visiteur) values ($1,$2,$3,$4)"

const listeAvisDuLivreDorDunPrestataire = "select * from livre_dor where id_personne = $1;"

const moyenneAvisDunPrestataire = "select id_personne, avg(valeur_note) from note where id_personne= $1 group by id_personne;"

module.exports = { verifyEmail,signUpAsClient, ajouterUnAvis, ajouterUnCommentaireAuLivreDor, listeAvisDuLivreDorDunPrestataire,moyenneAvisDunPrestataire }