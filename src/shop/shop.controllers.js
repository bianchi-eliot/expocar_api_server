require("dotenv").config();
const shopServices = require("./shop.services.js");
const pmax = shopServices.getMaxPrize();


function detectError(req, res, error, results) {
    if (error) {
        console.log(error);
        return res.status(400).send(`<h1 style="color: green">ERROR 400: ${{success: 0, data: error}}</h1>`);
    }
    return res.status(200).send({success: 1, data: results});
}

exports.list = (req,res) => {
    let service = new shopServices.AllPieces();
    service.list((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send(`<h1 style="color: green">ERROR 400: ${{success: 0, data: error}}</h1>`);
        }
        return res.render("../views/shop/shop.pug", {navbarData, mapData, resp: results, types_pieces, marques, pmax})
    }).then();
}

exports.add = (req, res) => {
    const types_pieces = require('../../json/type_items.json')
    const marques = require('../../json/cars.json')
    res.status(200);
    return res.render("../views/shop/pieces/add_piece.pug", {navbarData, mapData, types_pieces, marques});
}

exports.validAdd = (req, res) => {
    console.log(req.body)
    shopServices.add(req.body, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send(`<h1 style="color: green">ERROR 400: ${{success: 0, data: error}}</h1>`);
        }
    })
    return res.redirect('/shop');
}

exports.update = (req, res) => {
    const piece = pieces[req.params.id - 1];
    const type = types_pieces[piece.id_type_piece - 1]
    const marque = marques[piece.id_marque - 1]
    return res.render("../views/shop/pieces/update_piece.pug", {navbarData, mapData, marque, piece, type, types_pieces, marques});
}

exports.validUpdate = (req, res) => {
    shopServices.update(req.body, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send(`<h1 style="color: green">ERROR 400: ${{success: 0, data: error}}</h1>`);
        }
        console.log(results)
    })
    return res.redirect('/shop')
}

exports.delete = (req, res) => {
    shopServices.deletePiece(req.body.id_piece, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send(`<h1 style="color: green">ERROR 400: ${{success: 0, data: error}}</h1>`);
        }
        console.log(results)
    })
    return res.redirect('/shop')
}

exports.showOne = (req,res) => {
    shopServices.get(req.params.id, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send(`<h1 style="color: green">ERROR 400: ${{success: 0, data: error}}</h1>`);
        }
        const marque = marques[results.id_marque - 1];
        return res.render("../views/shop/pieces/details_piece.pug", {navbarData, mapData, piece: results, marque})
    })
}

exports.filter = (req,res) => {
    let service = new shopServices.AllPieces();
    service.list((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send(`<h1 style="color: green">ERROR 400: ${{success: 0, data: error}}</h1>`);
        }
        const resp = shopServices.filter(req.query["type"],req.query["marque"], 0, req.query["price"], results)
        return res.render("../views/shop/shop.pug", {navbarData, mapData, resp, types_pieces, marques, pmax})
    });
}