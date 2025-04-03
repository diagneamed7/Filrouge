const PaiementService = require('../services/PaiementService');
const PaiementDto = require('../dtos/PaiementDto');

class PaiementController {
    async processer(req, res, next) {
        try {
            const paiement = await PaiementService.processerPaiement(
                req.params.commandeId,
                req.body
            );
            res.status(201).json(new PaiementDto(paiement));
        } catch (error) {
            next(error);
        }
    }

    async getByCommande(req, res, next) {
        try {
            const paiement = await PaiementService.getPaiementByCommande(
                req.params.commandeId
            );
            res.json(new PaiementDto(paiement));
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new PaiementController();