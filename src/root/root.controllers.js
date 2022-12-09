const { simplifyRequest } = require('../../tools/sql.tools.js')
 
const rootQueries = require('./root.queries.js')
const pool = require('../../db.js')

async function getHome(req, res) {
    const brands = await pool.query(rootQueries.selectAllSocietes)
    res.send(brands.rows)
    //res.status(200).render('home.pug', { navbarData, brands: brandsJSON })
}

function getLogInSignUp(req, res) {
    /*res.status(200).render('login_signup.pug', { 
        navbarData,
        roles: getAllRoles(rolesJSON),
        activities: getAllActivities(activitiesJSON),
        brands: getAllBrands(brandsJSON)
    })*/
}

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                    'August', 'September', 'October', 'November', 'December']
async function getPlanning(req, res) {
    try {
        let { day: todayDay, month: todayMonth, monthName: todayMonthName, year: todayYear } = req.query
        if (todayDay == 'undefined' || todayDay == undefined) todayDay = new Date().getDate()
        if (todayMonth == 'undefined' || todayMonth == undefined) todayMonth = new Date().getMonth()
        if (todayMonthName == 'undefined' || todayMonthName == undefined) todayMonthName = monthNames[todayMonth]
        if (todayYear == 'undefined' || todayYear == undefined) todayYear = new Date().getFullYear()
        
        const today = new Date(`${todayMonthName} ${todayDay}, ${todayYear}`)
        const todayDate = { 
            todayDay, 
            //todayDay: '14',
            todayMonth:parseInt(todayMonth)+1, 
            // todayMonth: '01',
            todayMonthName, 
            todayYear 
        }
        console.log(todayDate)
        const yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000))
        const yesterdayDate = {
            yesterdayDay: yesterday.getDate(),
            yesterdayMonth: yesterday.getMonth(),
            yesterdayYear: yesterday.getFullYear()
        }


        const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000))
        const tomorrowDate = {
            tomorrowDay: tomorrow.getDate(),
            tomorrowMonth: tomorrow.getMonth(),
            tomorrowYear: tomorrow.getFullYear()
        }

        const timeSlots = await pool.query(rootQueries.planning, 
            [todayDate.todayDay, todayDate.todayMonth])
        const timeSlotsSorted = simplifyRequest(timeSlots.rows, 'id_stand', 'hour', 'id_personne', 'id_societe', 'nom', 'prenom', 'nom_activite', 'nom_societe', 'photo_marque')
        timeSlotsSorted.sort(sortTimeSlot)
        res.status(200).send({ timeSlots: timeSlotsSorted, todayDate, yesterdayDate, tomorrowDate })
    } catch(e) {
        console.log(e)
        res.status(400).send(e)
    }
}

function sortTimeSlot(a, b) {
    if (a.numero_stand < b.numero_stand) return -1
    if (a.numero_stand < b.numero_stand) return 1
    return 0
}


module.exports = {
    getHome, getLogInSignUp, getPlanning
}

