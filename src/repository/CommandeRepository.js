const Commande = require("../Modeles/Commandes");
const ProduitPanier = require("../Modeles/ProduitPanier");

class CommandeRepository {
    async create(data) {
        return await Commande.create(data);
    }

    async updateCommande(idcommande, data) {
        const commande = await Commande.findByPk(idcommande);
        if (!commande) {
            throw new Error('Commande non trouvée');
        }
        return await commande.update(data);
    }

    async deleteCommande(idcommande) {
        const commande = await Commande.findByPk(idcommande);
        if (!commande) {
            throw new Error('Commande non trouvée');
        }
        await commande.destroy(); 
        return commande;
    }

    async getAll() {
        return await Commande.findAll({ 
            include: [{
                model: ProduitPanier, 
                as: 'ProduitPanier' 
            }]
        });
    }

    async getById(idcommande) {
        return await Commande.findByPk(idcommande, { 
            include: [{
                model: ProduitPanier,
                as: 'ProduitPanier'
            }]
        });
    }
}

module.exports = new CommandeRepository();