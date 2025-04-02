const express = require('express');
const router = express.Router();
const PaiementController = require('../controllers/PaiementController');
const authMiddleware = require('../middlewares/auth');
const validatePaiement = require('../middlewares/validatePaiement');

// POST /commandes/:commandeId/paiement → Paiement
router.post(
    '/commandes/:commandeId/paiement',
    authMiddleware,
    validatePaiement,
    PaiementController.processer
);

// GET /commandes/:commandeId/paiement → Statut
router.get(
    '/commandes/:commandeId/paiement',
    authMiddleware,
    PaiementController.getByCommande
);

module.exports = router;