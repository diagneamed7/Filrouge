const { Abonnement } = require('../modeles/Abonnement');
const { User } = require('../modeles/User');  // Assure-toi que tu importes bien le modèle User
const { Produit } = require('../modeles/Produit');  // Assure-toi que tu importes aussi le modèle Produit

class AbonnementRepository {

    // Récupère tous les abonnements avec les utilisateurs et produits associés
    async getAll() {
        return await Abonnement.findAll({
            include: [
                { model: User, as: 'User' }, // Relation avec User
                { model: Produit, as: 'Produit' } // Relation avec Produit
            ]
        });
    }

    // Récupère un abonnement par son ID avec les utilisateurs et produits associés
    async getById(idAbonnement) {
        return await Abonnement.findByPk(idAbonnement, {
            include: [
                { model: User, as: 'User' },  // Relation avec User
                { model: Produit, as: 'Produit' }  // Relation avec Produit
            ]
        });
    }

    // Crée un nouvel abonnement
    async create(data) {
        return await Abonnement.create(data);
    }

    // Met à jour un abonnement par son ID
    async update(idAbonnement, data) {
        const abonnement = await Abonnement.findByPk(idAbonnement);
        if (!abonnement) return null;
        return await abonnement.update(data);
    }

    // Supprime un abonnement par son ID
    async delete(idAbonnement) {
        const abonnement = await Abonnement.findByPk(idAbonnement);
        if (!abonnement) return null;
        await abonnement.destroy();
        return abonnement;
    }
}

module.exports = new AbonnementRepository();
