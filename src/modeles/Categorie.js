const { DataTypes } = require('sequelize'); 
const sequelize = require('../config/database')

const Categorie = sequelize.define('Categorie',
{ 
  idCategorie : {type: DataTypes.STRING, primaryKey : true},
  nom: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false }
}); 


module.exports = Categorie;
