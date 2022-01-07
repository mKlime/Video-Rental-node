const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Movie = sequelize.define('Movie',{
    _id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    movieName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    premiere: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    }
});

module.exports = Movie;