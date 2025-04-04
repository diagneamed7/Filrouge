const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const ProduitPanier = require("../modeles/ProduitPanier");

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
    idproduitPanier: {  // Clé étrangère vers ProduitPanier
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ProduitPanier', // Assurez-vous que le nom du modèle soit correct, il semble y avoir une pluralisation ici.
            key: 'idProduitPanier'
        }
    }
});

// Relation
Commande.belongsTo(ProduitPanier, {
    foreignKey: "idproduitPanier",  // clé étrangère de la commande vers ProduitPanier
    as: "produitPanier",  // alias pour la relation
});
ProduitPanier.hasMany(Commande, { 
    foreignKey: "idproduitPanier",  // clé étrangère de ProduitPanier vers Commande
    as: "commandes"  // alias pour la relation inverse
});

module.exports = Commande;
