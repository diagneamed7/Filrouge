const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Produit_panier = require("../Modeles/ProduitPaniergit ");

const Commande = sequelize.define("Commande", {
    idcommande: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date_commande: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    statut_commande: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    idproduit_panier: {  // Clé étrangère vers Commande
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'produit_panier',
          key: 'idproduit_panier'
        }
      }
});

// Relation
Commande.belongsTo(Produit_panier, {
    foreignKey: "idProduit_panier",
    as: "produit_panier",
});
Produit_panier.hasMany(Commande, { foreignKey: "idcommande", as: "Commande" });
module.exports = Commandes;
