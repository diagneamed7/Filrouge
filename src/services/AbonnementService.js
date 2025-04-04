const abonnementRepository = require('../repository/AbonnementRepository');
const abonnementDto = require('../dto/AbonnementDto');

class AbonnementService {
    async getAll() {
        const abonnement = await abonnementRepository.getAll();
        return abonnement.map(prod => new abonnementDto(prod));
    }

    async getById(idAbonnement) {
        const abonnement = await abonnementRepository.getById(idAbonnement);
        if (!abonnement) throw new Error("Cet abonnement n'existe pas dans la base de données!");
        return new abonnementDto(abonnement);
    }

    async create(data) {
        if (!data.type || !data.statut || !data.idUser || !data.idProduit) {
            throw new Error("Les champs type, statut, UserId etidProduit sont obligatoires");
        }
        const abonnement = await abonnementRepository.create(data);
        return new abonnementDto(abonnement);
    }

    async update(idAbonnement, data) {
        const v = await abonnementRepository.update(idAbonnement, data);
        if (!abonnement) throw new Error("L'Abonnement à modifier n'a pas été trouvé !");
        return new abonnementDto(abonnement);
    }

    async delete(idAbonnement) {
        const abonnement = await abonnementRepository.delete(idAbonnement);
        if (!abonnement) throw new Error("L'Abonnement à supprimer n'a pas été trouvé !");
        return { message: "Abonnement supprimé" };
    }
}

module.exports = new AbonnementService
