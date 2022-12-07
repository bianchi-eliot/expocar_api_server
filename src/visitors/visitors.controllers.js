
const pool = require("../../db.js")
const visitorQueries = require("./visitors.queries")

async function signUpAsClient(req, res) {
    var tab = [ req.body.nom, req.body.prenom, req.body.email, req.body.mdp, req.body.role]

    console.log(tab)
    pool.query(visitorQueries.verifyEmail ,[req.body.email], (error,results)=>{
        if (error) throw error
        if(results.rowCount > 0){
            res.send("l'email a déjà été utilisée")
        }else{
            pool.query(visitorQueries.signUpAsClient, tab, (error,results)=>{
                if(error) throw error
                res.send("votre compte a bien été crée")
            })
        }
    })
}
module.exports = { signUpAsClient }