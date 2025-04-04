const UserRepository = require('../repository/UserRepository');
const UserDto = require('../dto/UserDto');

class UserService {

    async getAll() {
        const Users = await UserRepository.getAll();
        return Users.map(cat => new UserDto(cat));
    }

    async getById(idUser) {
        const user = await UserRepository.getById(idUser);
        if (!user) throw new Error("L'utilisateur n'existe pas dans la base de données");
        return new UserDto(user);
    }

    async create(data) {
        const user = await UserRepository.create(data);
        return new UserDto(user);
    }

    async update(idUser, data) {
        const user = await UserRepository.update(idUser, data);
        if (!user) throw new Error("L'utilisateur' à modifier n'existe pas dans la base de données");
        return new UserDto(user);
    }

    async delete(idUser) {
        const User = await UserRepository.delete(idUser);
        if (!User) throw new Error("L'utilisateur à supprimer n'a pas été trouvée");
        return { message: "Utilisateur supprimée" };
    }
}

module.exports = new UserService();
