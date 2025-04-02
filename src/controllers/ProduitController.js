const produitService = require('../services/ProduitService');

class ProduitController {
    async getAll(req, res) {
        try {
            const produit = await produitService.getAll();
            res.json(produit);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const produit = await produitService.getById(req.params.id);
            res.json(produit);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const produit = await produitService.create(req.body);
            res.status(201).json(produit);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const produit = await produitService.update(req.params.id, req.body);
            res.json(produit);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const reponse = await produitService.delete(req.params.id);
            res.json(reponse);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new ProduitController();
