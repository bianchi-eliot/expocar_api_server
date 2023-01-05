const contractorServices = require('./contractor.services.js')

const pool = require("../../db.js")
const contractorQueries = require("./contractor.queries.js")
const servicesQueries = require('../services/services.queries.js')

async function logIn(req,res) {
    try {
        const { email, password } = req.body
        const results = await pool.query(contractorQueries.selectContractorByEmailAndPassword, [email, password])
        if (results.rowCount === 0) res.send({ data: 2 })
        else res.send({ data: 0 })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function signIn(req, res) {
    try {
        const { lastName, firstName, email, info, password, idActivity, idRole, idSociety } = req.body

        let tab = null
        if (parseInt(idRole) === 2) {
            tab = [lastName, firstName, email, info, password, idActivity, idRole, idSociety]
        } else if (parseInt(idRole) === 4) {
            tab = [lastName, firstName, email, info, password, null, idRole, null]
        }

        const results = await pool.query(contractorQueries.verifyEmail, [email])
        if (results.rowCount === 1) res.send({ data: 2 })
        else {
            await pool.query(contractorQueries.insertPerson, tab)
            res.send({ data: 0 })   
        }
    } catch(err) {
        console.log(err.message)
        res.send({ data: 2 })
    }
}

async function getContractor(req, res){
    try {
        const id = req.params.id || 2
        const results = await pool.query(contractorQueries.selectContractorById, [id])
        res.send({ data: 0, contractorInfo: results.rows[0] })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function getAllContractor(req, res) {
    try {
        const contractors = await pool.query(contractorQueries.selectAllContractor)
        res.send(contractors.rows)
    } catch(err) {
        console.log(err)
    }
} 

async function book(req, res) {
    try {
        const idContractor = 2
        const { hour, day, month, numberStand } = req.body
        const year = new Date().getFullYear()
    
        const date = `${year}/${month}/${day} ${hour}:00:00`
    
        const results = await pool.query(contractorQueries.findTimeSlot, [date, numberStand])
        if (results.rowCount !== 0) res.send({ data: 2 })
        else {
            await pool.query(contractorQueries.insertTimeSlot, [idContractor, numberStand, date])
            res.send({ data: 0 })
        }
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function enableService(req, res) {
    try {
        const idContractor = 3
        const idService = req.params.id
        await pool.query(contractorQueries.enableAService, [idContractor, idService])
        res.send({ data: 0 })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function disableService(req, res) {
    try {
        const idContractor = 3
        const idService = req.params.id
        await pool.query(contractorQueries.disableAService, [idContractor, idService])
        res.send({ data: 0 })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function updateContractor(req, res) {
    try {
        const personneId = req.params.id
        const { lastname, firstname, email, info, societes, activities } = req.body
        const tab = [lastname, firstname, email, info, activities, societes, personneId]
        await pool.query(contractorQueries.updateContractor, tab)
        res.send({ data: 0 })
    } catch(err) {
        console.log(err)
        res.send({ data: 1 })
    }
}

async function getAllActivatedServices(req, res) {
    try {
        const contractorId = req.params.id
        let servicesActivated = await pool.query(contractorQueries.selectContractorServices, 
            [contractorId])
        servicesActivated = servicesActivated.rows.map(service => service.id_service)
        
        let guestBook = null
        if (servicesActivated.includes(1)) {
            guestBook = await pool.query(servicesQueries.selectGuestBookByContractorId, [contractorId])
        }

        let stars = null
        if (servicesActivated.includes(2)) {
            stars = await pool.query(servicesQueries.selectStartsByContractorId, [contractorId])
        }


        res.send({ data: 0, servicesActivated, guestBook, stars })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
    }

module.exports = { logIn, signIn, getContractor, getAllContractor, book, enableService, 
    disableService, updateContractor, getAllActivatedServices }
