const ProduitPanier = require('../modeles/ProduitPanier');

class ProduitPanierRepository {
    async addProduitToPanier(data) {
        return await ProduitPanier.create(data);
    }

    async getProduitsByPanier(id_panier) {
        return await ProduitPanier.findAll({ where: { IDpanier: id_panier } });
    }

    async updateProduitPanier(IDpanier, IDproduit, data) {
        return await ProduitPanier.update(data, { where: { IDpanier, IDproduit } });
    }

    async deleteProduitPanier(IDpanier, IDproduit) {
        return await ProduitPanier.destroy({ where: { IDpanier, IDproduit } });
    }
}

module.exports = new ProduitPanierRepository();