module.exports = (sequelize, DataTypes) => {
  const Paiement = sequelize.define("Paiement", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    commandeId: { type: DataTypes.INTEGER, allowNull: false },
    montant: { type: DataTypes.FLOAT, allowNull: false },
    methode: {
      type: DataTypes.ENUM("carte", "paypal", "virement"),
      allowNull: false,
    },
    statut: {
      type: DataTypes.ENUM("en_attente", "payé", "échoué", "remboursé"),
      defaultValue: "en_attente",
    },
    transactionId: { type: DataTypes.STRING }, // Référence Stripe/PayPal
  });

  Paiement.associate = (models) => {
    Paiement.belongsTo(models.Commande, {
      foreignKey: "commandeId",
      as: "commande",
    });
  };

  return Paiement;
};
