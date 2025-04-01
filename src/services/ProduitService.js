const produitRepository = require('../repository/ProduitRepository');
const produitDto = require('../dto/ProduitDto');

class ProduitService {
    async getAll() {
        const produit = await produitRepository.getAll();
        return produit.map(prod => new produitDto(prod));
    }

    async getById(id) {
        const produit = await produitRepository.getById(id);
        if (!produit) throw new Error("Le Produit n'existe pas dans la base de données!");
        return new produitDto(produit);
    }

    async create(data) {
        if (!data.nom || !data.prix || !data.idCategorie) {
            throw new Error("Les champs nom, prix et CategorieId sont obligatoires");
        }
        const produit = await produitRepository.create(data);
        return new produitDto(produit);
    }

    async update(id, data) {
        const produit = await produitRepository.update(id, data);
        if (!produit) throw new Error("Le Produit à modifier n'a pas été trouvé !");
        return new produitDto(produit);
    }

    async delete(id) {
        const produit = await produitRepository.delete(id);
        if (!produit) throw new Error("Le Produit à supprimer n'a pas été trouvé !");
        return { message: "Produit supprimé" };
    }
}

module.exports = new ProduitService
