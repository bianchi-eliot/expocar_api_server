
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

function listeAvisDuLivreDor(req,res){
    const id = req.params.id

    pool.query(visitorQueries.listeAvisDuLivreDorDunPrestataire, [id], (error,results)=>{
        if (error) throw error
        if(results.rows==0){
            res.send("Le prestaire n'a pas encore de commentaires dans son livre d'or")
        }else{
            res.send(results.rows)
        }
        
    })
}const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
'August', 'September', 'October', 'November', 'December']
function ajouterUnCommentaireAuLivreDor(req,res){
    const id_prestataire = req.params.id_prestataire
    const id_visiteur = req.body.id_visiteur
    let todayDay = new Date().getDate()
    let todayMonth = new Date().getMonth()
    let todayMonthName = monthNames[todayMonth]
    let todayYear = new Date().getFullYear()
    const date = new Date(`${todayMonthName} ${todayDay}, ${todayYear}`)
    const message = req.body.message

    pool.query(visitorQueries.ajouterUnCommentaireAuLivreDor,[id_prestataire,id_visiteur,date, message], (error, results)=>{
        if(error) throw error
        res.send("vous avez bien ajouté le commentaire")
    })
}
function ajouterUnAvis(req,res){
    const id_prestataire = req.params.id_prestataire
    const id_visiteur = req.body.id_visiteur
    const note = req.body.note
    console.log(note)
    pool.query(visitorQueries.ajouterUnAvis, [id_prestataire,id_visiteur,note], (error, results)=>{
        if(error) throw error
        res.send("vous avez ajouté un avis")
    })
}
function moyenneAvisDunPrestataire(req,res){
    const id_prestataire = req.params.id_prestataire
    pool.query(visitorQueries.moyenneAvisDunPrestataire, [id_prestataire], (error, results)=>{
        if (error) throw error
        res.send(results.rows)
    })
    
}
module.exports = { signUpAsClient,listeAvisDuLivreDor, ajouterUnCommentaireAuLivreDor, ajouterUnAvis, moyenneAvisDunPrestataire  }