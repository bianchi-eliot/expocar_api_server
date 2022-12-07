
const pieceModel = require("./shop.models.js");
const fs = require("fs");

class AllPieces extends pieceModel.Piece {
    async list(callback) {
        const pieces = await this.readAllPieces();
        if(pieces.length === 0) {
            return callback([]);
        }

        let res = [];
        pieces.forEach((piece) => {
            res.push(JSON.parse(piece.JSON));
        });
        return callback(null,res);
    }

    async readAllPieces() {
        try {
            const pieces = [];
            dataPieces.forEach((piece) => {
                pieces.push(pieceModel.Piece.fromJSON(piece));
            })
            return pieces;
        } catch(e) {
            console.log(e);
            return [];
        }
    }
}

function add(data, callback) {
    let allPieces = dataPieces;
    const nextId = (pieces) => { return (Math.max.apply(Math,pieces.map(p => { return p["id_piece"] })) + 1)};

    let pieceId = allPieces.length <= 0 ? 1 : nextId(allPieces);
    let laurInsert = {
        id_piece: pieceId,
        descriptif: data["descriptif"],
        nom: data["nom"],
        img_piece: data["img_piece"],
        prix_piece: data["prix_piece"],
        quantite: data["quantite"],
        id_type_piece: data["type_piece"],
        id_marque: data["marque"]
    }

    allPieces.push(laurInsert);
    try{
        const dataJSON = JSON.stringify(allPieces)
        console.log(dataJSON)
        fs.writeFileSync('C:/Users/fdavid5/Desktop/SAE_salon_auto/json/items.json', dataJSON)
        return callback(null, "Product saved successfully!")
    }catch(e){
        console.log(e);
        return callback("Save failed!")
    }
}

function get(id, callback) {
    let piece = dataPieces[id - 1];
    if(piece !== undefined) {
        return callback(null, piece)
    } else {
        return callback("Error of piece !");
    }
}

function update(data, callback) {
    let allPieces = dataPieces;
    let pieceUpdate = {
        id_piece: parseInt(data["id_piece"]),
        descriptif: data["descriptif"],
        nom: data["nom"],
        img_piece: data["img_piece"],
        prix_piece: data["prix_piece"],
        quantite: data["quantite"],
        id_type_piece: parseInt(data["type_piece"]),
        id_marque: parseInt(data["marque"])
    };
    console.log(pieceUpdate)

    allPieces.splice(data["id_piece"] - 1, pieceUpdate)
    try {
        const dataJSON = JSON.stringify(dataPieces)
        fs.writeFileSync('/json/items.json', dataJSON)
        return callback(null, "Piece updated successfully!");
    } catch (e) {
        return callback("Update failed!")
    }
}

function deletePiece(id, callback) {
    let piece = dataPieces[id - 1];
    dataPieces.splice(id - 1, 1);

    if(piece !== undefined) {
        const dataJSON = JSON.stringify(dataPieces)
        fs.writeFileSync('/json/items.json', dataJSON)
        console.log("Piece deleting : " + piece)
        return callback(null, "Deleting is successful !");
    } else {
        return callback("Deleting failed !")
    }
}

function filter(type, marque, prix_min, prix_max, callback) {
    let pieces = [];
    if(type !== undefined) {
        pieces = callback.filter((piece) => piece["type_piece"] === type);
    }

    if(marque !== undefined) {
        if(type !== undefined) {
            pieces = pieces.filter((piece) => piece["marque"] === marque)
        } else {
            pieces = callback.filter((piece) => piece["marque"] === marque)
        }
    }

    if(prix_min !== undefined && prix_max !== undefined) {
        if(marque !== undefined || type !== undefined) {
            pieces = pieces.filter((piece) => piece["prix_piece"] >= prix_min && piece["prix_piece"] <= prix_max)
        } else {
            pieces = callback.filter((piece) => piece["prix_piece"] >= prix_min && piece["prix_piece"] <= prix_max)
        }
    }

    return pieces;
}

const getMaxPrize = () => {
    let prix_max = 0;
    /*dataPieces.forEach((p) => {
        if(p["prix_piece"] > prix_max)
            prix_max = p["prix_piece"];
    })*/
    return Math.ceil(prix_max);
}

const addToPanier = (callback) => {

}

const getPanier = (id, callback) => {
    const panier = paniersJSON.filter((p) => p["id_panier"] - 1 === id);
    try {
        return callback(null, panier);
    } catch (e) {
        return callback(e);
    }
}

module.exports = {
    AllPieces, add, get, update, deletePiece,
    filter, getMaxPrize, getPanier
}