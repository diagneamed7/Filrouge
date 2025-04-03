const { sequelize } = require('../config/database');
const CommandeRepository = require('../repository/CommandeRepository');
const ProduitPanierService = require('../services/ProduitPanierService');
class CommandeService {
    constructor() {
        this.commandeRepo = new CommandeRepository();
        this.produitPanierService = new ProduitPanierService();
    }

    async createCommande(commandeData) {
        const transaction = await sequelize.transaction();
        try {
            // 1. Créer la commande
            const commande = await this.commandeRepo.create({
                userId: commandeData.userId,
                statut: 'en_attente',
                id_panier: commandeData.id_panier // Si votre modèle inclut ce champ
            }, { transaction });

            // 2. Valider/transférer les produits du panier vers la commande
            await this.produitPanierService.transfererPanierVersCommande(
                commandeData.id_panier,
                commande.id,
                { transaction }
            );

            await transaction.commit();
            return await this.getCommandeDetails(commande.id); // Retourne la commande peuplée
        } catch (error) {
            await transaction.rollback();
            throw new Error(`Échec de la création : ${error.message}`);
        }
    }

    async getCommandeDetails(commandeId) {
        const commande = await this.commandeRepo.getById(commandeId, {
            include: [
                {
                    association: 'ProduitPanier',
                    include: ['produit'] // Si ProduitPanier est lié à Produit
                }
            ]
        });

        if (!commande) throw new Error('Commande introuvable');

        // Calcul dynamique du total
        commande.dataValues.total = commande.produit_panier.reduce(
            (sum, item) => sum + (item.prix * item.quantite),
            0
        );

        return commande;
    }


    async annulerCommande(commandeId) {
        const transaction = await sequelize.transaction();
        try {
            // 1. Mettre à jour le statut
            const commande = await this.commandeRepo.update(
                commandeId,
                { statut: 'annulee' },
                { transaction }
            );

            // 2. Libérer les produits associés (ex: réaugmenter le stock)
            await this.produitPanierService.libererProduitsPourAnnulation(
                commandeId,
                { transaction }
            );

            await transaction.commit();
            return commande;
        } catch (error) {
            await transaction.rollback();
            throw new Error(`Échec de l'annulation : ${error.message}`);
        }
    }

    async validerPaiement(commandeId, paiementData) {
        const transaction = await sequelize.transaction();
        try {
            // 1. Vérifier que la commande existe et est en attente
            const commande = await this.commandeRepo.getById(commandeId);
            if (commande.statut !== 'en_attente') {
                throw new Error('La commande ne peut pas être payée');
            }

            // 2. Appeler le service de paiement (ex: Stripe)
            // await PaiementService.processer(...);

            // 3. Mettre à jour la commande
            await this.commandeRepo.update(
                commandeId,
                { statut: 'payee', datePaiement: new Date() },
                { transaction }
            );

            await transaction.commit();
            return true;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }



    // Lister les commandes d'un utilisateur
    async getCommandesByUser(userId) {
        return this.commandeRepo.getAll({
            where: { userId },
            include: ['produit_panier']
        });
    }





}
module.exports = new CommandeService();    