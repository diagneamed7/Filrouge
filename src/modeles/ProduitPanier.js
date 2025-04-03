const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Panier = require('./Panier');
const Produit = require('./Produit');

const ProduitPanier = sequelize.define('ProduitPanier', {
    id: {  // Ajout d'une clé primaire
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    IDpanier: { 
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: { 
            model: Panier, 
            key: 'id_panier' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    IDproduit: { 
        type: DataTypes.STRING,  // ✅ Changement du type pour correspondre à `idProduit`
        allowNull: false,
        references: { 
            model: Produit, 
            key: 'idProduit'  // ✅ Correction pour correspondre au nom exact dans `Produit`
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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

// 🔗 Définition des relations
Panier.hasMany(ProduitPanier, { foreignKey: 'IDpanier' });
ProduitPanier.belongsTo(Panier, { foreignKey: 'IDpanier' });

Produit.hasMany(ProduitPanier, { foreignKey: 'IDproduit' });
ProduitPanier.belongsTo(Produit, { foreignKey: 'IDproduit' });

module.exports = ProduitPanier;


