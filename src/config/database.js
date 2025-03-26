const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('filrouge', 'root', '', {
host: 'localhost',
dialect: 'mysql'
});
sequelize.sync();
module.exports = sequelize;