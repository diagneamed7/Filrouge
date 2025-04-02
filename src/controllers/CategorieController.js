const CategorieService = require('../services/CategorieService');

class CategorieController {
    async getAll(req, res) {
        try {
            const categorie = await CategorieService.getAll();
            res.json(categorie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const categorie = await CategorieService.getById(req.params.id);
            res.json(categorie);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const categorie = await CategorieService.create(req.body);
            res.status(201).json(categorie);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const categorie = await CategorieService.update(req.params.id, req.body);
            res.json(categorie);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const reponse = await CategorieService.delete(req.params.id);
            res.json(reponse);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new CategorieController();
