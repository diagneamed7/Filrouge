class CommandeDto {
    constructor(commande) {
        this.id = commande.id;
        this.userId = commande.userId;
        this.statut = commande.statut;
        this.total = commande.produit_panier?.reduce((sum, item) => sum + (item.prix * item.quantite), 0);
        this.produits = commande.produit_panier?.map(item => ({
            id: item.produit?.id,
            nom: item.produit?.nom,
            quantite: item.quantite,
            prix: item.prix
        }));
    }
}

module.exports = CommandeDto;