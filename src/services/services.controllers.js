const pool = require("../../db.js")
const serviceQueries = require("./services.queries")

const addLivreOr = (req, res) => {
    const tab = [req.body.prenom, req.body.commentaire]
    pool.query(serviceQueries.livreDor, tab, (error, results) => {
        if (error) {
            throw error
        }
        res.render('services/livre-or.pug', { navbarData, message : `Merci ${req.body.prenom} pour votre commentaire`})
    })
}

const avis = (req, res) => {
    const tab = [req.body.note,req.body.id_personne, req.body.id_visiteur]
    pool.query(serviceQueries.avis, tab,(error, results) => {
        if (error) {
            throw error
        }
        res.send("ok")
    })
}

module.exports = {
    addLivreOr,avis
}