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
            const { idCategorie, nom, description } = req.body;
            const image = req.file ? req.file.filename : null;
    
            if (!image) {
                return res.status(400).json({ error: "L'image est obligatoire" });
            }
    
            const newCategorie = await CategorieService.create({
                idCategorie,
                nom,
                description,
                image // Enregistre le nom de l'image
            });
    
            res.status(201).json(newCategorie);
        } catch (error) {
            res.status(500).json({ error: error.message });
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
