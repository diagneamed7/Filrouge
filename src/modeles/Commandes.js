const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const ProduitPanier = require("../Modeles/ProduitPanier");

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
    idproduitPanier: {  // Clé étrangère vers Commande
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ProduitPanier',
          key: 'idProduitPanier'
        }
      }
});

// Relation
Commande.belongsTo(ProduitPanier, {
    foreignKey: "idProduitPanier",
    as: "ProduitPanier",
});
ProduitPanier.hasMany(Commande, { foreignKey: "idcommande", as: "Commande" });
module.exports = Commande;
