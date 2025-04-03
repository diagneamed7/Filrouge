const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('filrouge', 'root', '', {
host: 'localhost',
port : '3306',
dialect: 'mysql'
});
sequelize.sync();
module.exports = sequelize;