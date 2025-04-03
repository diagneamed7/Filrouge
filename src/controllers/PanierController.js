const panierService = require('../services/PanierService');

class PanierController {
    async getAll(req, res) {
        try {
            const paniers = await panierService.getAll();
            res.json(paniers);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const panier = await panierService.getById(req.params.id);
            res.json(panier);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const panier = await panierService.create();
            res.status(201).json(panier);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const response = await panierService.delete(req.params.id);
            res.json(response);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new PanierController();