const User = require("../model/User");
const Movie = require("../model/Movie");
const Rent = require("../model/Rent");


exports.getUsers = () =>{
    return User.findAll();
};

exports.getUserByID = (userId) => {
    return User.findByPk(userId,
    {
        include: [{
            model: Rent,
            as: 'rent',
            include: [{
                model: Movie,
                as: 'movie'
            }]
        }]
    });
};

exports.createUser = (newUserData) =>{
    return User.create({
        firstName: newUserData.firstName,
        lastName: newUserData.lastName,
        phoneNumber: newUserData.phoneNumber,
        email: newUserData.email,
    });
};

exports.updateUser = (userId, userData) =>{
    const firstName = userData.firstName;
    const lastName = userData.lastName;
    const phoneNumber = userData.phoneNumber;
    const email = userData.email;
    return User.update(userData,{where:{_id: userId}});
};

exports.deleteUser = (userId) => {
    return User.destroy({
        where: {_id: userId}
    });
};