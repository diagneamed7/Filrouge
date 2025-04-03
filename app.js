const express = require('express');
const sequelize = require('./src/config/database');
const categorieRoutes = require('./src/routes/CategorieRoutes.js');
const produitRoutes = require('./src/routes/ProduitRoutes.js');
const commandeRoutes = require('./src/routes/CommandeRoutes');
const paiementRoutes = require('./src/routes/PaiementRoutes');

const app = express();
app.use(express.json());

// Synchroniser Sequelize avec la base de données
sequelize.sync({ force: false }) 
    .then(() => console.log('Base de données synchronisée'))
    .catch(err => console.log('Erreur Sequelize:', err));

// Utilisation des routes
app.use('/categories', categorieRoutes);
app.use('/produits', produitRoutes);
app.use('/api/commandes', commandeRoutes);
app.use('/api', paiementRoutes);

app.use("/uploads", express.static("uploads"));

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
