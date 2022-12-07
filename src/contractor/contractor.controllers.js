const contractorServices = require('./contractor.services.js')

const pool = require("../../db.js")
const contractorQueries = require("./contractor.queries.js")

function checkIfUserExists(req,res) {
    
    var tab = [req.body.email, req.body.mot_de_passe]
    pool.query(contractorQueries.login, tab,(error,results)=>{
        if(error) throw error
        if(results.rows.length == 1){
            res.send("vous êtes connecté")
        }
        if(results.rows.length == 0){
            console.log("test2")
            res.send("vous vous êtes trompé")
        }
    })
}



async function signUp(req, res) {
    var tab = [ req.body.nom, req.body.prenom,req.body.email, req.body.info, 
        req.body.mdp, req.body.activite, req.body.role, req.body.societe]
    console.log(tab)
    pool.query(contractorQueries.verifyEmail, [req.body.email], (error,results)=>{
        if (error) throw error
        if(results.rowCount > 0){
            res.send("l'email a déjà été utilisée")
        }else{
            pool.query(contractorQueries.signInAsContractor, tab, (error,results)=>{
                if(error) throw error
                res.send("votre compte a bien été crée")
            })
        }
    })
}

async function infoContractor(req, res){
    try {
        const id = req.params.id || 2

        const contractorInfo = await pool.query(contractorQueries.infoContractor, [id])
        res.send(contractorInfo.rows)
    } catch(err) {
        console.log(err)
    }
}



function allContractors(req, res) {
    pool.query(contractorQueries.allContractors, (error,results)=>{
        if (error)throw error
        if(results.rows == 0){
            res.send("Il n'y a aucun prestataire")
        }
        res.send(results.rows)
    })

} 

function book(req, res) {
    const id = 2
    const jour = req.body.jour
    const heure = req.body.heure
    const mois = 4
    const annee = 2022
    const numStand = req.body.stand

    const date = annee+"/"+mois+"/"+jour+" "+heure+":00:00"

    pool.query(contractorQueries.findTimeSlot,[date,numStand],(error,results)=>{
        if(error) throw error
        if(results.rows != 0){
            res.send("Ce stand est déjà reservé pour ce jour")
        }else{
            pool.query(contractorQueries.insererCreneau,[id,numStand,date],(error,results)=>{
                if(error) throw error
                res.send("Vous avez réservé le stand machin pour le jour machin")
            })
        }
    })

}

function enableService(req,res){
    //insert into active
    const id = req.params.id
    const id_service = req.body.id_service
    console.log(id,id_service)
    pool.query(contractorQueries.enableAService,[id,id_service],(error,results)=>{
        if (error) throw error
        res.send("Le service machin est activé")
    })
}


function disableService(req,res){
    const id = req.params.id
    const id_service = req.body.id_service
    pool.query(contractorQueries.disableAService,[id,id_service],(error,results)=>{
        if (error) throw error
        res.send("Le service machin est desactivé")
    })
}

module.exports = { checkIfUserExists, signUp, infoContractor, allContractors, book, enableService, disableService }
