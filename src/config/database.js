const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('filrouge', 'root', 'root', {
host: 'localhost',
port : '8889',
dialect: 'mysql'
});
sequelize.sync();
module.exports = sequelize;