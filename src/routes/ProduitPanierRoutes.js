const express = require('express');
const router = express.Router();
const produitPanierController = require('../controllers/ProduitPanierController');

// Obtenir les produits d'un panier
router.get('/:id', produitPanierController.getByPanierId);

// Ajouter un produit à un panier
router.post('/', produitPanierController.addProduit);

module.exports = router;
