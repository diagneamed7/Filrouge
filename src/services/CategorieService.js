const CategorieRepository = require('../repository/CategorieRepository');
const CategorieDto = require('../dto/CategorieDto');

class CategorieService {

    async getAll() {
        const categories = await CategorieRepository.getAll();
        return categories.map(cat => new CategorieDto(cat));
    }

    async getById(id) {
        const categorie = await CategorieRepository.getById(id);
        if (!categorie) throw new Error("La Catégorie n'existe pas dans la base de données");
        return new CategorieDto(categorie);
    }

    async create(data) {
        const categorie = await CategorieRepository.create(data);
        return new CategorieDto(categorie);
    }

    async update(id, data) {
        const categorie = await CategorieRepository.update(id, data);
        if (!categorie) throw new Error("La catégorie à modifier n'existe pas dans la base de données");
        return new CategorieDto(categorie);
    }

    async delete(id) {
        const categorie = await CategorieRepository.delete(id);
        if (!categorie) throw new Error("La Catégorie à supprimer n'a pas été trouvée");
        return { message: "Catégorie supprimée" };
    }
}

module.exports = new CategorieService();
