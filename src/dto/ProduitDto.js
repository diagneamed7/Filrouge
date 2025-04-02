
class ProduitDto {
    constructor(id, nom, description, prix, stock, image, Categorie) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.prix = prix;
    this.stock = stock;
    this.image = image;
    this.Categorie = Categorie ? { id: Categorie.id, nom: Categorie.nom } : null;
    }
   }
   module.exports = ProduitDto;