const contractorControllers = require('./contractor.controllers.js')
require('dotenv').config()
const express = require('express')
const router = express.Router()

router.post('/log-in', contractorControllers.logIn)

router.post('/sign-in', contractorControllers.signIn)

router.get('/book-time-slot', (req, res) => { 
    const month = process.env.MONTH || 'Avril'
    const beginning = parseInt(process.env.BEGINNING) || 10
    const ending = parseInt(process.env.ENDING) || 23

    const dateArray = []
    for (let i = beginning; i <= ending; i++) {
        dateArray.push({ day: i, string: `${i} ${month}` })
    }

    const dayStart = parseInt(process.env.DAY_START) || 8
    const dayEnd = parseInt(process.env.DAY_END) || 20
    const duration = parseInt(process.env.DURATION) || 2

    const timeSlotArray = []
    for (let i = dayStart; i <= (dayEnd - duration); i += duration) {
        timeSlotArray.push({ hour: i, string: `${i}h - ${i + duration}h` })
    }

    const standArray = [...standsData]

    res.render('contractor/book_time_slot.pug', { navbarData, dateArray, timeSlotArray, standArray })
})


router.get('/', contractorControllers.getAllContractor)

router.get('/:id', contractorControllers.getContractor)

router.put('/:id', contractorControllers.updateContractor)




router.post('/book-time-slot', contractorControllers.book)

router.get('/activated-services/:id', contractorControllers.getAllActivatedServices)

router.post('/active/:id', contractorControllers.enableService)

router.delete('/active/:id', contractorControllers.disableService)

router.get('/affluence/:id', contractorControllers.affluenceParPersonne)


module.exports = router