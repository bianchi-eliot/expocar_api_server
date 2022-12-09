
const visitorsControllers = require('./visitors.controllers.js')
require('dotenv').config()
const express = require('express')
const router = express.Router()

router.post('/sign-up', visitorsControllers.signUpAsClient)

router.get('/livre-dor/:id', visitorsControllers.listeAvisDuLivreDor)
router.post('/livre-dor/:id_prestataire', visitorsControllers.ajouterUnCommentaireAuLivreDor)

router.get('/avis/:id_prestataire', visitorsControllers.moyenneAvisDunPrestataire)
router.post('/avis/:id_prestataire', visitorsControllers.ajouterUnAvis)

module.exports = router
