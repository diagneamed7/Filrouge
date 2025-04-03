const produitPanierService = require('../services/ProduitPanierService');

class ProduitPanierController {
    async getByPanierId(req, res) {
        try {
            const produits = await produitPanierService.getByPanierId(req.params.id);
            res.json(produits);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async addProduit(req, res) {
        try {
            const produit = await produitPanierService.addProduit(req.body);
            res.status(201).json(produit);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new ProduitPanierController();