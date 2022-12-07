const organiserControllers = require("./organiser.controllers")
const express = require("express")
const router = express.Router()

router.get('/allContractors', organiserControllers.listerLesPrestataires)

router.get("/listContractorsOnWL", organiserControllers.listerLesPrestatairesEnAttente)

router.get("/validateContractorOnWL/:id", organiserControllers.validerUnPrestataire)

router.delete("/deleteContractorOnWL/:id", organiserControllers.refuserUnePersonneEnAttente)

module.exports = router