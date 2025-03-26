const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Commande = require("../Modeles/Commandes");

const Paiement = sequelize.define("Paiement", {
  idpaiement: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  somme_payee: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  methode_paiement: {
    type: DataTypes.STRING,
    allowNull: false,
   
  },
  statut_paiement: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  idcommande: {  
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Commandes',
      key: 'idcommande'
    }
  }
});

// Relation
Paiement.belongsTo(Commande, {
  foreignKey: "idcommande",
  as: "commande",
});
Commande.hasMany(Paiement, { foreignKey: "idpaiement", as: "paiements" });

module.exports = Paiement;
