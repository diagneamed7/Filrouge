const panierRepository = require('../repository/PanierRepository');
const PanierDTO = require('../dto/PanierDto');

class PanierService {
    async getAll() {
        const paniers = await panierRepository.getAllPaniers();
        return paniers.map(panier => new PanierDTO(panier.id_panier, panier.date_creation));
    }

    async getById(id) {
        const panier = await panierRepository.getPanierById(id);
        if (!panier) throw new Error("Le panier n'existe pas !");
        return new PanierDTO(panier.id_panier, panier.date_creation);
    }

    async create() {
        const panier = await panierRepository.createPanier();
        return new PanierDTO(panier.id_panier, panier.date_creation);
    }

    async delete(id) {
        const deleted = await panierRepository.deletePanier(id);
        if (!deleted) throw new Error("Le panier à supprimer n'a pas été trouvé !");
        return { message: "Panier supprimé" };
    }
}

module.exports = new PanierService();