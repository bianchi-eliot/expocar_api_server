const pool = require("../../db.js")
const organiserQueries = require("./organiser.queries")

function validerUnPrestataire(req,res){
    const id = req.params.id
    pool.query(organiserQueries.changePersonsRole,[id], (error, results)=>{
        if (error) throw error
        res.send("Vous venez de valider un prestataire")
    })
    
}

function refuserUnePersonneEnAttente(req,res){
    const id = req.params.id
    pool.query(organiserQueries.deletePersonOnWL,[id], (error, results)=>{
        if (error) throw error
        res.send("Le prestataire en attente a bien été supprimé.")
    })

}
function listerLesPrestatairesEnAttente(req,res){
    pool.query(organiserQueries.getPersonsOnWL, (error,results)=>{
        if(error) throw error
        if(results.rows == 0){
            res.send("Il n'y a aucun prestataire en attente de validation")
        }else{
            res.send(results.rows)
        }
    })
}


function listerLesPrestataires(req, res) {
    pool.query(organiserQueries.getPersons, (error, results)=>{
        if (error) throw error
        if(results.rows == 0){
            res.send("Il n'y a aucun prestataire inscrit")
        }
        res.send(results.rows)
    })
}


module.exports = {validerUnPrestataire, refuserUnePersonneEnAttente, listerLesPrestataires, listerLesPrestatairesEnAttente}