// const Person = require('../organiser/organiser.models')
// const Brand = require('./brand.models')

// const cars = require('../../json/cars.json')

// const navbarData = require('../../json/navbar_datas.json')



// exports.getContractors = (req, res, next)=>{
//     const persons = Person.getAll()
//     const brands = Brand.getAll()
    
//     res.render('brand/list_contractor', {
//         brands: brands,
//         persons: persons,
//         path: '/list_contractor',
//         cars,
//         navbarData      
//     })
// }

// exports.getContractorsByBrandId = (req, res, next) => {
//     const brandId = req.params.brandId
//     const persons = Person.getContractorsByBrandId(brandId)

//     const brands = Brand.getAll()

//     res.render('brand/list_contractor', {
//         brands: brands,
//         persons: persons,
//         selectedBrand: brandId,
//         path: '/list_contractor',
//         cars,
//         navbarData      
//     })

// }