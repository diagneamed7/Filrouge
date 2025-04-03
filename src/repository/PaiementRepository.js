const Paiement = require("../Modeles/Paiement");

class PaiementRepository {
    async create(data, transaction = null) {
        return await Paiement.create(data, { transaction });
    }

    async findByCommandeId(commandeId, transaction = null) {
        return await Paiement.findOne({ 
            where: { commandeId },
            transaction
        });
    }

    async updateStatut(paiementId, newStatut, transaction = null) {
        const paiement = await Paiement.findByPk(paiementId, { transaction });
        if (!paiement) throw new Error('Paiement non trouvé');
        return await paiement.update({ statut: newStatut }, { transaction });
    }
}

module.exports = new PaiementRepository();