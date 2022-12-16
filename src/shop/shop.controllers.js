require("dotenv").config();
const shopQueries = require("./shop.queries")
const pool = require('../../db')
const pmax = "SELECT MAX(prix_piece) FROM pieces"

exports.list = (req,res) => {
    pool.query(shopQueries.getAllPieces, (error, results) => {
        if (error) throw error
        const marques = "SELECT * FROM societes"
        const types_pieces = "SELECT * FROM type_pieces"
        return res.status(200).send({success: 1, data: {resp: results.rows, types_pieces, marques, pmax}})
    });
}

exports.add = (req, res) => {
    console.log(req.body)
    pool.query(shopQueries.insertPiece, req.body, (error, results) => {
        if (error) throw error
        else console.log("Piece added successfully !")
    })
    return res.redirect('/shop');
}

exports.update = (req, res) => {
    console.log(req.body)
    pool.query(shopQueries.updatePiece, req.body, (error, results) => {
        if (error) throw error
        else console.log("Piece updated successfully !")
    })
    return res.redirect('/shop');
}

exports.delete = (req, res) => {
    pool.query(shopQueries.deletePiece, [req.body.id_piece], (error, results) => {
        if (error) throw error
        else console.log("Piece deleted successfully !")
    })
    return res.redirect('/shop');
}

exports.showOne = (req,res) => {
    pool.query(shopQueries.getPiece, [req.params.id], (error, results) => {
        if (error) throw error;
        const marque = "SELECT * FROM societes WHERE id_societe = (SELECT id_societe FROM pieces WHERE id_piece = " + results.rows.id_marque + ")"
        return res.status(200).send({success: 1, data: {marque, results: results.rows}})
    })
}

exports.filter = (req,res) => {
    pool.query(shopQueries.filter, [req.query["type"],req.query["marque"], 0, req.query["price"]], (error, results) => {
        if(error) throw error
        return res.status(200).send({success: 1, data: results.rows});
    })
}