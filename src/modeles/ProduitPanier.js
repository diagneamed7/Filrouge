const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Panier = require('./Panier');
const Produit = require('./Produit');

const ProduitPanier = sequelize.define('ProduitPanier', {
    idProduitPanier: {  // Ajout d'une clé primaire
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idPanier: { 
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: { 
            model: Panier, 
            key: 'idPanier' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    idProduit: { 
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
    prixUnitaire: { 
        type: DataTypes.FLOAT, 
        allowNull: false 
    }
}, {
    tableName: 'produitPanier',
    timestamps: false
});

// 🔗 Définition des relations
Panier.hasMany(ProduitPanier, { foreignKey: 'idPanier' });
ProduitPanier.belongsTo(Panier, { foreignKey: 'idPanier' });

Produit.hasMany(ProduitPanier, { foreignKey: 'idProduit' });
ProduitPanier.belongsTo(Produit, { foreignKey: 'idProduit' });

module.exports = ProduitPanier;


