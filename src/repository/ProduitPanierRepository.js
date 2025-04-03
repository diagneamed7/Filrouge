const ProduitPanier = require('../modeles/ProduitPanier');

class ProduitPanierRepository {
    async addProduitToPanier(data) {
        return await ProduitPanier.create(data);
    }

    async getProduitsByPanier(idPanier) {
        return await ProduitPanier.findAll({ where: { idPanier: idPanier } });
    }

    async updateProduitPanier(idPanier, idProduit, data) {
        return await ProduitPanier.update(data, { where: { idPanier, idProduit } });
    }

    async deleteProduitPanier(idPanier, idProduit) {
        return await ProduitPanier.destroy({ where: { idPanier, idProduit } });
    }
}

module.exports = new ProduitPanierRepository();