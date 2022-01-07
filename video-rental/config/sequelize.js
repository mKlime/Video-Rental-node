const Sequelize = require('sequelize');

const sequelize = new Sequelize('video-rental-project', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;

