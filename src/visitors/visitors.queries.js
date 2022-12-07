const verifyEmail = "select * from personnes where email = $1;"
const signUpAsClient = " insert into personnes (nom, prenom, email, mot_de_passe, id_role) values ($1,$2,$3,$4,$5);"


module.exports = { verifyEmail,signUpAsClient }