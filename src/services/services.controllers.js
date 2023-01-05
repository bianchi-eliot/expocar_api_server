const pool = require("../../db.js")
const serviceQueries = require("./services.queries")

async function addGuestBook(req, res) {
    try {
        const now = new Date()
        const jour = now.getDate()
        const mois = now.getMonth()+1
        const annee = now.getFullYear()
        const signatureDate = `${jour}/${mois}/${annee}`

        const { idContractor, idVisitor, message } = req.body
        const tab = [idContractor, idVisitor, signatureDate, message]
        await pool.query(serviceQueries.insertGuestBook, tab)
        res.send({ data: 0 })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function getGuestBook(req, res) {
    try {
        const idContractor = req.params.id
        const guestBook = await pool.query(serviceQueries.selectGuestBookByContractorId, [idContractor])
        res.send({ data: 0, guestBook: guestBook.rows })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}


async function addStars(req, res) {
    try {
        const { idContractor, idVisitor, stars } = req.body
        const tab = [idContractor, idVisitor, stars]
        await pool.query(serviceQueries.insertStars, tab)
        res.send({ data: 0 })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

async function getStars(req, res) {
    try {
        const idContractor = req.params.id
        const grade = await pool.query(serviceQueries.selectStartsByContractorId, [idContractor])
        res.send({ data: 0, grade: grade.rows[0].grade })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
} 

async function getAllServices(req, res) {
    try {
        const services = await pool.query(serviceQueries.selectAllServices)
        res.send({ data: 0, services: services.rows })
    } catch(err) {
        console.log(err.message)
        res.send({ data: 1 })
    }
}

module.exports = {
    addGuestBook, getGuestBook,
    addStars, getStars,
    getAllServices
}