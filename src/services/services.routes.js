const express = require('express')
const router = express.Router()
const servicesControllers = require('./services.controllers.js')

router.get('/livre-or', (req, res) => {
    res.render('services/livre-or.pug', { navbarData})
})

router.post('/livre-or', servicesControllers.addLivreOr)

router.post('/note', servicesControllers.avis)

module.exports = router