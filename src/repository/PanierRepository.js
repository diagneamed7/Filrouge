const Panier = require('../modeles/Panier');

class PanierRepository {
    async createPanier() {
        return await Panier.create();
    }

    async getPanierById(id) {
        return await Panier.findByPk(id);
    }

    async getAllPaniers() {
        return await Panier.findAll();
    }

    async updatePanier(id, data) {
        return await Panier.update(data, { where: { id_panier: id } });
    }

    async deletePanier(id) {
        return await Panier.destroy({ where: { id_panier: id } });
    }
}

module.exports = new PanierRepository();