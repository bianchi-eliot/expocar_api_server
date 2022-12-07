
const express = require('express')
const router = express.Router()
const mapControllers = require("./map.controllers")

router.get('/', mapControllers.schedule)


//router.get('/listContractors',mapControllers.listContractors)

//router.get('/list_contractor', mapControllers.listByBrand)

module.exports = router