const express = require('express')
const router = express.Router()
const servicesControllers = require('./services.controllers.js')

router.post('/guest-book', servicesControllers.addGuestBook)

router.get('/guest-book/:id', servicesControllers.getGuestBook)

router.post('/stars', servicesControllers.addStars)

router.get('/stars/:id', servicesControllers.getStars)

router.get('/', servicesControllers.getAllServices)

module.exports = router