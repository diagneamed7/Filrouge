const { DataTypes } = require('sequelize');
   const sequelize = require('../config/database');
const Produit = require('./Produit');
const Produit = require('./User');
   const User = sequelize.define('abonnement', {
       id_ab: {
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
            defaultValue: 'abonnement',
        },
        date_fin: {
            type: DataTypes.DATE,
            defaultValue: 'abonnement',
        },
        statut: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
 
    module.exports = abonnement;
 
// Relation
Produit.belongsTo(abonnement, { foreignKey: 'id', as: 'abonnement' });
User.hasMany(abonnement, { foreignKey: 'id_User', as: 'abonnement' });
Produit.hasMany(abonnement, { foreignKey: 'id', as: 'abonnement' });

module.exports = User;