const { DataTypes } = require('sequelize'); 
const sequelize = require('../config/database')

const Catgorie = sequelize.define('Categorie',
{ 
  id : {type: DataTypes.STRING, allowNull : false},
  nom: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false }
}); 


module.exports = Categorie;
