const contractorControllers = require('./contractor.controllers.js')
require('dotenv').config()
const express = require('express')
const router = express.Router()

router.post('/sign-in', contractorControllers.checkIfUserExists)

router.post('/sign-up', contractorControllers.signUp)

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


router.get('/allContractors', contractorControllers.allContractors)

router.get('/contractorInfo/:id', contractorControllers.infoContractor)

router.post('/book-time-slot', contractorControllers.book)


router.post('/enableService/:id', contractorControllers.enableService)

router.delete('/disableService/:id', contractorControllers.disableService)

module.exports = router