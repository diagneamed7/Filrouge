const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categorie = require('./Categorie');
const Produit = sequelize.define('Produit', {
id: { type: DataTypes.STRING, allowNull: false },
nom: { type: DataTypes.STRING, allowNull: false },
description: { type: DataTypes.STRING, allowNull: false },
prix: { type: DataTypes.FLOAT, allowNull: false },
stock: { type: DataTypes.INTEGER, allowNull: false },
image: { type: DataTypes.STRING, allowNull: false }
});
// Relation
Produit.belongsTo(Categprie, { foreignKey: 'id', as: 'Categorie' });
Categorie.hasMany(Produit, { foreignKey: 'id', as: 'Produit' });

module.exports = Produit;