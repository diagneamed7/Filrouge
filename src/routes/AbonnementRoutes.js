const express = require('express');
const router = express.Router();
const abonnementController = require('../controllers/AbonnementController');

// Obtenir tous les abonnements
router.get('/', abonnementController.getAll);

// Obtenir un abonnement par son ID
router.get('/:id', abonnementController.getById);

// Créer un nouveau abonnement
router.post('/', abonnementController.create);

// Modifier un abonnement existant
router.put('/:id',abonnementController.update);

// Supprimer un abonnement
router.delete('/:id', abonnementController.delete);

module.exports = router;