const { DataTypes } = require('sequelize');
   const sequelize = require('../config/database');
   const User = sequelize.define('User', {
       id_User: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
       },
       username: {
           type: DataTypes.STRING,
           allowNull: false,
           unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telephone: {
            type: DataTypes.INTEGER,
            defaultValue: 'user',
        },
        role: {
            type: DataTypes.ENUM('user', 'admin'),
            defaultValue: 'user',
        },
        date_inscription: {
            type: DataTypes.DATE,
            defaultValue: 'user',
        },
    });
 
    module.exports = User;
 
// Relation
User.belongsTo(abonnement, { foreignKey: 'id_ab', as: 'abonnement' });

module.exports = User;