const abonnementService = require('../services/AbonnementService');

class AbonnementController {
    async getAll(req, res) {
        try {
            const abonnement = await abonnementService.getAll();
            res.json(abonnement);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const abonnement = await abonnementService.getById(req.params.id);
            res.json(abonnement);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const abonnement = await abonnementService.create(req.body);
            res.status(201).json(abonnement);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const abonnement = await abonnementService.update(req.params.id, req.body);
            res.json(abonnement);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const reponse = await abonnementService.delete(req.params.id);
            res.json(reponse);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new AbonnementController();
