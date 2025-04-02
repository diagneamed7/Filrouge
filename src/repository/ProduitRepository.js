const Produit = require('../modeles/Produit');
const Categorie = require('../modeles/Categorie');

class ProductRepository {

    async getAll() {
        return await Produit.findAll({ include: [{ model: Categorie, as: 'Categorie' }] });
    }

    async getById(idProduit) {
        return await Produit.findByPk(idProduit, { include: [{ model: Categorie, as: 'Categorie' }] });
    }

    async create(data) {

        return await Produit.create(data);
    }

    async update(idProduit, data) {
        const produit = await Produit.findByPk(idProduit);
        if (!produit) return null;
        return await produit.update(data);
    }

    async delete(idProduit) {
        const produit = await Produit.findByPk(idProduit);
        if (!produit) return null;
        await produit.destroy();
        return produit;
    }
}

module.exports = new ProductRepository();