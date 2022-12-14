const rootControllers = require('./root.controllers.js')
const express = require('express')
const router = express.Router()

router.get('/', rootControllers.getHome)

router.get('/login-signup', rootControllers.getLogInSignUp)
  
router.get('/planning', rootControllers.getPlanning)

router.get('/all-societes', rootControllers.getAllSocietes)
router.get('/all-activities', rootControllers.getAllActivities)
router.get('/all-roles', rootControllers.getAllRoles)
router.get('/sign-in-roles', rootControllers.getSignInRoles)

module.exports = router