const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Produit = require('./Produit');
const User = require('./User');

const Abonnement = sequelize.define('Abonnement', {
    idAbonnement :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_debut: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,  // Utiliser la date actuelle
    },
    date_fin: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,  // Utiliser la date actuelle
    },
    statut: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idUser : {
        // ✅ Correspond bien à la clé primaire de `Categorie`
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: "idUser"
        },
    },
    idProduit:{
        // ✅ Correspond bien à la clé primaire de `Categorie`
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: Produit,
          key: "idProduit"
        }
    }
});

// Relations
Abonnement.belongsTo(User, { foreignKey: 'idUser', as: 'User' });  // L'ID de l'utilisateur
Abonnement.belongsTo(Produit, { foreignKey: 'idProduit', as: 'Produit' });  // L'ID du produit
User.hasMany(Abonnement, { foreignKey: 'idAbonnement', as: 'abonnement' });  // Un utilisateur peut avoir plusieurs abonnements
Produit.hasMany(Abonnement, { foreignKey: 'idAbonnement', as: 'abonnement' });  // Un produit peut avoir plusieurs abonnements

module.exports = Abonnement;
