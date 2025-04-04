const User = require('../modeles/User');

class UserRepository {

//Repository pour créer une catégorie
 async create(data) {
 return await User.create(data);
 }

 //Repository pour rechercher une catégorie par id
 async getById(idUser) {
    return await User.findByPk(idUser);
}

//Repository pour modifier une catégorie
async update(idUser, data) {
    return await User.update(data, {where : { idUser }});
}

//Repository pour supprimer une catégorie
async delete(idUser) {
    return await User.destroy({where : {idUser}});
}

//Repository pour lister les catégories
 async getAll() {
 return await User.findAll();
 }
}
module.exports = new UserRepository();