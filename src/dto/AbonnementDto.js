class AbonnementDto {
    constructor(id, type, date_debut, date_fin, statut, Produit, User) {
    this.id = id;
    this.type = type;
    this.date_debut = date_fin;
    this.statut = statut;
    this.Produit = Produit ? { id: Produit.id, nom: Produit.nom } : null;
    this.User = User ? { id: User.id, username: User.username } : null;
    }
   }
   module.exports = AbonnementDto;