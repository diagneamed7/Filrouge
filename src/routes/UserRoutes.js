const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// Obtenir toutes les users
router.get('/', userController.getAll);

// Obtenir une user par son ID
router.get('/:id', userController.getById);

// Créer une nouvelle user
router.post('/', userController.create);

// Modifier une user existante
router.put('/:id', userController.update);

// Supprimer une user
router.delete('/:id', userController.delete);

module.exports = router;


