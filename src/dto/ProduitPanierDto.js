class ProduitPanierDTO {
    constructor(idProduitPanier,IDpanier, IDproduit, quantite, prix_unitaire) {
        this.idProduitPanier = idProduitPanier;
        this.IDpanier = IDpanier;
        this.IDproduit = IDproduit;
        this.quantite = quantite;
        this.prix_unitaire = prix_unitaire;
    }
}

module.exports = ProduitPanierDTO;