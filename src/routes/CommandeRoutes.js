const express = require('express');
const router = express.Router();
const CommandeController = require('../controllers/CommandeController');
//const authMiddleware = require('../middlewares/auth'); // Exemple de middleware

// POST /commandes → Création
router.post('/', /*authMiddleware,*/ CommandeController.create);

// GET /commandes/:id → Détails
router.get('/:id', /*authMiddleware,*/ CommandeController.getDetails);

// PUT /commandes/:id/annuler → Annulation
router.put('/:id/annuler', /*authMiddleware,*/ CommandeController.annuler);

module.exports = router;