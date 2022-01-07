const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Rent = sequelize.define('Rent',{
    _id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    movi_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
     dateFrom: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dateTo: {
        type: Sequelize.DATE,
        allowNull: true
    }

});

module.exports = Rent;