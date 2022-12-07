class Piece{
    constructor(id,descr,name,img,price,quantity,idType,idMarque) {
        this.id_piece = id;
        this.descriptif = descr;
        this.nom = name;
        this.img_piece = img;
        this.prix_piece = parseInt(price);
        this.quantite = parseInt(quantity);
        this.id_type_piece = parseInt(idType);
        this.id_marque = parseInt(idMarque);
    }

    // GETTERS
    get idPiece(){return this.id_piece;}
    get descriptifPiece() {return this.descriptif;}
    get nomPiece() { return this.nom; }
    get imgPiece() { return this.img_piece; }
    get prixPiece() { return this.prix_piece; }
    get quantitePiece() { return this.quantite; }
    get idTypePiece() { return this.id_type_piece; }
    get idMarque() { return this.id_marque}

    get JSON() {
        let marquePiece;
        dataMarques.forEach((m) => {
            if(m["id_marque"] === this.idMarque) {
                marquePiece = m["nom_marque"]
            }
        })
        return JSON.stringify({
            id_piece:this.idPiece,
            descriptif: this.descriptifPiece,
            nom: this.nomPiece,
            img_piece: this.imgPiece,
            prix_piece: this.prixPiece,
            quantite: this.quantitePiece,
            type_piece: dataTypePiece[this.idTypePiece - 1]["nom_type_piece"],
            marque: marquePiece,
        });
    }

    //SETTERS
    set idPiece(id){ this.id_piece = id;}
    set descriptifPiece(desc) { this.descriptif = desc;}
    set nomPiece(name) { this.nom = name; }
    set imgPiece(img) { this.img_piece = img; }
    set prixPiece(price) { this.prix_piece = price; }
    set quantitePiece(qt) { this.quantite = qt; }
    set idTypePiece(idType){ this.id_type_piece = idType; }
    set idMarque(idM) { this.id_marque = idM; }

    static fromJSON(json){
        const data = JSON.parse(JSON.stringify(json));
        if (typeof data !== 'object'
            || !data.hasOwnProperty("id_piece")
            || (typeof data.id_piece !== 'string' && typeof data.id_piece !== 'number')
            || !data.hasOwnProperty("descriptif")
            || typeof data.descriptif !== 'string'
            || !data.hasOwnProperty("nom")
            || typeof data.nom !== 'string'
            || !data.hasOwnProperty("img_piece")
            || typeof data.img_piece !== 'string'
            || !data.hasOwnProperty("prix_piece")
            || (typeof data.id_type_piece !== 'string' && typeof data.id_type_piece !== 'number')
            || !data.hasOwnProperty("quantite")
            || (typeof data.id_type_piece !== 'string' && typeof data.id_type_piece !== 'number')
            || !data.hasOwnProperty("id_type_piece")
            || (typeof data.id_type_piece !== 'string' && typeof data.id_type_piece !== 'number')
            || !data.hasOwnProperty("id_marque")
            || (typeof data.id_type_piece !== 'string' && typeof data.id_type_piece !== 'number')){
            throw new Error(`Not a Piece: ${json}`);
        }

        return new Piece(data.id_piece, data.descriptif, data.nom, data.img_piece,
                         data.prix_piece, data.quantite, data.id_type_piece, data.id_marque);
    }
}

module.exports = {
    Piece: Piece
}

