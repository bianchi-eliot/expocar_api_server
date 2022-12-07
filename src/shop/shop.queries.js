const getPiece = "SELECT * FROM pieces WHERE id_piece = $1";
const getPanierFromId = "SELECT * FROM rempli_panier WHERE id_personne = $1"

module.exports = {
    getPiece, getPanierFromId,
}