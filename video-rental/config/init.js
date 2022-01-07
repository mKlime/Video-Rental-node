
const sequelize = require('./sequelize');

const User = require('../model/User');
const Movie = require('../model/Movie');
const Rent = require('../model/Rent');

module.exports = () =>{
    User.hasMany(Rent,{as: 'rent', foreignKey: {name: 'user_id', allowNull: false}, constraints: true, onDelete: 'CASCADE' });
    Rent.belongsTo(User,{as: 'user', foreignKey:{name: 'user_id', allowNull: false}});
    Movie.hasMany(Rent,{as: 'rent', foreignKey: {name: 'movi_id', allowNull: false}, constraints: true, onDelete: 'CASCADE' });
    Rent.belongsTo(Movie,{as: 'movie', foreignKey:{name: 'movi_id', allowNull: false}});

    let allUsers, allMovies;
    return sequelize
        .sync({force: true})
        .then( () =>{
            return User.findAll();
        })
        .then(users => {
            if(!users || users.length == 0){
                return User.bulkCreate([
                    {firstName: 'Janusz', lastName: 'Kowalski', phoneNumber: '510-510-510', email: 'janusz.kowalski@gmai.com',  password: '12345'},
                    {firstName: 'Adam', lastName: 'Zieliński',  phoneNumber: '511-510-510', email: 'adam.zielinski@ups.com', password: '12345'},
                    {firstName: 'Marian', lastName: 'Nowak',  phoneNumber: '510-511-510', email: 'marian.nowak@wp.com', password: '12345'}
                ])
                    .then( () => {
                        return User.findAll();
                    });
            } else {
                return users;
            }
        })
        .then( users => {
            allUsers = users;
            return Movie.findAll();
        })
        .then( movies => {
            if( !movies || movies.length == 0 ) {
                return Movie.bulkCreate([
                    { movieName: 'Bodyguard', premiere: 1992, type: 'Romans', price: 2.50 },
                    { movieName: 'Mumia powraca', premiere: 2001, type: 'Przygoda', price: 8.50 }
                ])
                    .then( () => {
                        return User.findAll();
                    });
            } else {
                return movies;
            }
        })
        .then( movies => {
            allMovies = movies;
            return Rent.findAll();
        })
        .then( rents => {
            if( !rents || rents.length == 0 ) {
                return Rent.bulkCreate([
                    {user_id: allUsers[0]._id, movi_id: allMovies[0]._id, dateFrom: '2021-12-21', dateTo: '2021-12-28'},
                    {user_id: allUsers[1]._id, movi_id: allMovies[0]._id, dateFrom: '2021-11-02', dateTo: '2021-11-07'},
                    {user_id: allUsers[0]._id, movi_id: allMovies[1]._id, dateFrom: '2021-12-15', dateTo: null}
                ]);
            } else {
                return rents;
            }
        });
};
