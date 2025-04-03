const express = require('express');
const router = express.Router();
const panierController = require('../controllers/PanierController');

// Obtenir tous les paniers
router.get('/', panierController.getAll);

// Obtenir un panier par son ID
router.get('/:id', panierController.getById);

// Créer un nouveau panier
router.post('/', panierController.create);

// Supprimer un panier
router.delete('/:id', panierController.delete);

module.exports = router;
