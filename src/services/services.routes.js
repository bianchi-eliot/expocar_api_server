const express = require('express')
const router = express.Router()
const servicesControllers = require('./services.controllers.js')

/**
 * @swagger
 * /services/guest-book:
 *   post:
 *      description: Ajouter un commentaire au livre d'or d'un prestataire
 *      tags:
 *          - livre d'or
 *      parameters:
 *          - in: body
 *            name: livre d'or
 *            description: ajout livre d'or
 *            schema:
 *              type: object
 *              required:
 *                 - idContractor
 *                 - idVisitor
 *                 - signatureDate
 *                 - message
 *              properties:
 *                  idContractor:
 *                      type: integer
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 2  
 *                  idVisitor:
 *                      type: integer
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 18
 *                  message:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: j'ai beaucoup aimé votre activité
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post('/guest-book', servicesControllers.addGuestBook)

router.get('/guest-book/:id', servicesControllers.getGuestBook)

router.post('/stars', servicesControllers.addStars)

router.get('/stars/:id', servicesControllers.getStars)

router.get('/', servicesControllers.getAllServices)


module.exports = router