
const visitorsControllers = require('./visitors.controllers.js')
require('dotenv').config()
const express = require('express')
const router = express.Router()

router.post('/sign-up', visitorsControllers.signUpAsClient)

module.exports = router
