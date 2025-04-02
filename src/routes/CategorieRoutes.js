const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/CategorieController');

// Obtenir toutes les catégories
router.get('/', categorieController.getAll);

// Obtenir une catégorie par son ID
router.get('/:id', categorieController.getById);

// Créer une nouvelle catégorie
router.post('/', categorieController.create);

// Modifier une catégorie existante
router.put('/:id', categorieController.update);

// Supprimer une catégorie
router.delete('/:id', categorieController.delete);

module.exports = router;
