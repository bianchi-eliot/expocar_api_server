const { simplifyRequest } = require('../../tools/sql.tools.js')
//const mapData = require('../../map_datas.json')
const mapQueries = require('./map.queries.js')
//const brands = require("../../json/cars.json")
//const persons = require("../../json/persons.json")
const pool = require('../../db.js')


/*function listByBrand(req,res,next){
    res.send(brands)
    res.render('map/list_contractor', {
        brands: brands,
        path: '/map/list_contractor',
        navbarData      
    })
}
function listContractors(req,res){

    console.log("test")
    let tabContractor = []
    persons.forEach(person => {
        if(person.fk_role_id_role == 2){
            //console.log("c'est un prestataire")
            var idContractor = person.id_personne
            var nomContractor = person.nom
            var prenomContractor = person.prenom
            var emailContractor = person.email
            //console.log(idContractor, nomContractor, prenomContractor, emailContractor)
            
            tabContractor.push(
                {idContractor,
                nomContractor,
                prenomContractor,
                emailContractor})
            
        }
        else{
            console.log("ce n'est pas un prestataire ")
        }
    })
    res.send(tabContractor)
    //res.send(200)
}*/

async function schedule(req, res) {
    try {
        const date = new Date()
        //const dateStart = getDateStart(date)
        //const dateEnd = getDateEnd(date)
        const dateStart = '2023-01-12 14:00:00'
        const dateEnd = '2023-01-12 16:00:00'
        const dates = [dateStart, dateEnd]
        let timeSlots = await pool.query(mapQueries.schedule, dates)
        timeSlots = simplifyRequest(timeSlots.rows, 'id_personne', 'libelle_service')
        console.log(timeSlots)
        res.status(200).send(timeSlots)
        //res.status(200).render('map/map.pug', { navbarData, mapData, timeSlots: timeSlotsSorted })
    }
    catch(e) {
        console.log(e)
        res.status(400).send('Err: ' + e)
    }
}

function getDateStart(d) {
    if ( parseInt(d.getHours()) % 2 === 0) {
        return `2022-11-24 ${d.getHours()}:00:00`
    }
    return `2022-11-24 ${d.getHours()-1}:00:00`
}
function getDateEnd(d) {
    if ( parseInt(d.getHours()) % 2 === 0) {
        return `2022-11-24 ${d.getHours()+2}:00:00`
    }
    return `2022-11-24 ${d.getHours()+1}:00:00`
}

module.exports = { schedule }