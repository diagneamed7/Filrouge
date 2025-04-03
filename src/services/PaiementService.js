const { sequelize } = require('../config/database');
const PaiementRepository = require('../repositories/PaiementRepository');
const CommandeService = require('../services/CommandeService');
const StripeService = require('./StripeService'); // Exemple

class PaiementService {
    constructor() {
        this.paiementRepo = PaiementRepository;
        this.commandeService = new CommandeService();
    }

    async processerPaiement(commandeId, paiementData) {
        const transaction = await sequelize.transaction();
        try {
            // 1. Valider la commande
            const commande = await this.commandeService.getCommandeDetails(commandeId);
            if (commande.statut !== 'en_attente') {
                throw new Error('La commande ne peut pas être payée');
            }

            // 2. Paiement via Stripe (exemple)
            const result = await StripeService.charger(
                paiementData.token,
                commande.total
            );

            // 3. Enregistrer le paiement
            const paiement = await this.paiementRepo.create({
                commandeId,
                montant: commande.total,
                methode: 'carte',
                statut: 'payé',
                transactionId: result.id
            }, { transaction });

            // 4. Mettre à jour la commande
            await this.commandeService.validerPaiement(commandeId, { transaction });

            await transaction.commit();
            return paiement;
        } catch (error) {
            await transaction.rollback();
            await this.paiementRepo.create({
                commandeId,
                montant: paiementData.montant,
                methode: paiementData.methode,
                statut: 'échoué',
                transactionId: null
            }); // Log de l'échec
            throw error;
        }
    }

    async getPaiementByCommande(commandeId) {
        return await this.paiementRepo.findByCommandeId(commandeId);
    }
}

module.exports = new PaiementService();