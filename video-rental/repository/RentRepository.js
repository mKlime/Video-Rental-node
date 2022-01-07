const Sequelize = require('sequelize');

const User = require("../model/User");
const Movie = require("../model/Movie");
const Rent = require("../model/Rent");

exports.getRents = () => {
    return Rent.findAll({include: [
        {
            model: User,
            as: 'user'
        },
        {
            model: Movie,
            as: 'movie'
        }]
    });
};

exports.getRentsById = (rentId) =>{
    return Rent.findByPk(rentId, {include: [
        {
            model: User,
            as: 'user'
        },
        {
            model: Movie,
            as: 'movie'
        }]
    });
};

exports.createRent = (data) =>{
    console.log(JSON.stringify(data));

    return Rent.create({
        user_id: data.user_id,
        movi_id: data.movi_id,
        dateFrom: data.dateFrom,
        dateTo: data.dateTo || null
    });
};

exports.updateRent = (rentId, data) =>{
    data.dateTo = data.dateTo || null;
    return Rent.update(data, {where: {_id: rentId}});
};

exports.deleteRent = (rentId) => {
    return Rent.destroy({
        where: {_id: rentId}
    });
};

exports.deleteManyRents = (rentIds) =>{
    return Rent.find({_id: {[Sequelize.Op.in]: rentIds}});
};