const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Panier = require('./Panier');
const Produit = require('./Produit');

const ProduitPanier = sequelize.define('ProduitPanier', {
    IDpanier: { 
        type: DataTypes.INTEGER, 
        references: { model: Panier, key: 'id_panier' }
    },
    IDproduit: { 
        type: DataTypes.INTEGER, 
        references: { model: Produit, key: 'id_produit' }
    },
    quantite: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        defaultValue: 1 
    },
    prix_unitaire: { 
        type: DataTypes.FLOAT, 
        allowNull: false 
    }
}, {
    tableName: 'produit_panier',
    timestamps: false
});

// Définition des relations
Panier.hasMany(ProduitPanier, { foreignKey: 'IDpanier', as: 'produits' });
ProduitPanier.belongsTo(Panier, { foreignKey: 'IDpanier', as: 'panier' });

Produit.hasMany(ProduitPanier, { foreignKey: 'IDproduit', as: 'paniers' });
ProduitPanier.belongsTo(Produit, { foreignKey: 'IDproduit', as: 'produit' });

module.exports = ProduitPanier;
