const Categorie = require('../modeles/Categorie');

class CategorieRepository {

//Repository pour créer une catégorie
 async create(data) {
 return await Categorie.create(data);
 }

 //Repository pour rechercher une catégorie par id
 async getById(id) {
    return await Categorie.findByPk(id);
}

//Repository pour modifier une catégorie
async update(idCategorie, data) {
    return await Categorie.update(data, {where : { idCategorie }});
}

//Repository pour supprimer une catégorie
async delete(idCategorie) {
    return await Categorie.destroy({where : {idCategorie}});
}

//Repository pour lister les catégories
 async getAll() {
 return await Categorie.findAll();
 }
}
module.exports = new CategorieRepository();