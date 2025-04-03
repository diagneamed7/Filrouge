class ProduitPanierDTO {
    constructor(IDpanier, IDproduit, quantite, prix_unitaire) {
        this.IDpanier = IDpanier;
        this.IDproduit = IDproduit;
        this.quantite = quantite;
        this.prix_unitaire = prix_unitaire;
    }
}

module.exports = ProduitPanierDTO;