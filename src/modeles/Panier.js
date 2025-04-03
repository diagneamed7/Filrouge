const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Panier = sequelize.define('Panier', {
    id_panier: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    date_creation: { 
        type: DataTypes.DATE, 
        allowNull: false, 
        defaultValue: DataTypes.NOW 
    }
}, {
    tableName: 'panier',
    timestamps: false
});

module.exports = Panier;

