const contractorServices = require('./contractor.services.js')

const pool = require("../../db.js")
const contractorQueries = require("./contractor.queries.js")

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
        const { lastname, firstname, email, info, password, idActivity, idRole, idSociety } = req.body
        const tab = [lastname, firstname, email, password, info, idActivity, idRole, idSociety]
        const results = await pool.query(contractorQueries.verifyEmail, [email])
        if (results.rowCount === 1) res.send({ data: 2 })
        else {
            await pool.query(contractorQueries.insertContractor, tab)
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
        const idContractor = 2
        const idService = req.params.id || 2
        await pool.query(contractorQueries.enableAService, [idContractor, idService])
        res.send({ data: 0 })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function disableService(req, res) {
    try {
        const idContractor = 2
        const idService = req.params.id
        await pool.query(contractorQueries.disableAService, [idContractor, idService])
        res.send({ data: 0 })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

module.exports = { logIn, signIn, getContractor, getAllContractor, book, enableService, disableService }
