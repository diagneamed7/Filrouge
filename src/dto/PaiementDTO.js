class PaiementDto {
    constructor(paiement) {
        this.id = paiement.id;
        this.montant = paiement.montant;
        this.methode = paiement.methode;
        this.statut = paiement.statut;
        this.dateCreation = paiement.createdAt;
        // Masquer les champs sensibles comme transactionId
    }
}

module.exports = PaiementDto;