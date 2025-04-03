const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Categorie = require("./Categorie");
const Produit = sequelize.define("Produit", {
  idProduit: { type: DataTypes.STRING, primaryKey: true },
  nom: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  prix: { type: DataTypes.FLOAT, allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
  idCategorie: {
    // ✅ Correspond bien à la clé primaire de `Categorie`
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Categorie,
      key: "idCategorie",
    },
  },
});
// Relation
Produit.belongsTo(Categorie, { foreignKey: "idCategorie", as: "Categorie" });
Categorie.hasMany(Produit, { foreignKey: "idCategorie", as: "Produit" });

module.exports = Produit;
