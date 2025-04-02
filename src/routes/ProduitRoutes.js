const express = require('express');
const router = express.Router();
const produitController = require('../controllers/ProduitController');

// Obtenir tous les produits
router.get('/', produitController.getAll);

// Obtenir un produit par son ID
router.get('/:id', produitController.getById);

// Créer un nouveau produit
router.post('/', produitController.create);

// Modifier un produit existant
router.put('/:id', produitController.update);

// Supprimer un produit
router.delete('/:id', produitController.delete);

module.exports = router;
