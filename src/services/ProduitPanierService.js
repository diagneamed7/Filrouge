const produitPanierRepository = require('../repository/ProduitPanierRepository');
const ProduitPanierDTO = require('../dto/ProduitPanierDto');

class ProduitPanierService {
    async getByPanierId(id_panier) {
        const produits = await produitPanierRepository.getProduitsByPanier(id_panier);
        return produits.map(prod => new ProduitPanierDTO(prod.IDpanier, prod.IDproduit, prod.quantite, prod.prix_unitaire));
    }

    async addProduit(data) {
        if (!data.IDpanier || !data.IDproduit || !data.quantite || !data.prix_unitaire) {
            throw new Error("Tous les champs sont obligatoires");
        }
        const produit = await produitPanierRepository.addProduitToPanier(data);
        return new ProduitPanierDTO(produit.IDpanier, produit.IDproduit, produit.quantite, produit.prix_unitaire);
    }

    async updateProduit(IDpanier, IDproduit, data) {
        const updated = await produitPanierRepository.updateProduitPanier(IDpanier, IDproduit, data);
        if (!updated) throw new Error("Le produit dans le panier n'a pas été trouvé !");
        return { message: "Produit mis à jour" };
    }

    async deleteProduit(IDpanier, IDproduit) {
        const deleted = await produitPanierRepository.deleteProduitPanier(IDpanier, IDproduit);
        if (!deleted) throw new Error("Le produit dans le panier à supprimer n'a pas été trouvé !");
        return { message: "Produit supprimé du panier" };
    }
}

module.exports = new ProduitPanierService();