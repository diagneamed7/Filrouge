const CommandeService = require('../services/CommandeService');
const CommandeDto = require('../dtos/CommandeDto');

class CommandeController {
    constructor() {
        this.commandeService = new CommandeService();
    }

    async create(req, res, next) {
        try {
            const commande = await this.commandeService.createCommande(req.body);
            res.status(201).json(new CommandeDto(commande));
        } catch (error) {
            next(error); // Passer à middleware d'erreur
        }
    }

    async getDetails(req, res, next) {
        try {
            const commande = await this.commandeService.getCommandeDetails(req.params.id);
            res.json(new CommandeDto(commande));
        } catch (error) {
            next(error);
        }
    }

    async annuler(req, res, next) {
        try {
            const commande = await this.commandeService.annulerCommande(req.params.id);
            res.json(new CommandeDto(commande));
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CommandeController();