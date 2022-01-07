const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('User',{
    _id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = User;