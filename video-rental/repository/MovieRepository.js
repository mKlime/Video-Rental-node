const User = require("../model/User");
const Movie = require("../model/Movie");
const Rent = require("../model/Rent");

exports.getMovies = () => {
    return Movie.findAll();
};

exports.getMovieByID = (movieId) => {
    return Movie.findByPk(movieId,
    {
        include: [{
            model: Rent,
            as: 'rent',
            include:[{
                model: User,
                as: 'user'
            }]
        }]
    });
};

exports.createMovie = (newMovieData) => {
    return Movie.create({
        movieName: newMovieData.movieName,
        premiere: newMovieData.premiere,
        type: newMovieData.type,
        price: newMovieData.price
    });
};

exports.updateMovie = (movieId, movieData) => {
    const movieName = movieData.movieName;
    const premiere = movieData.premiere;
    const type = movieData.type;
    const price = movieData.price;
    return Movie.update(movieData, {where: {_id: movieId }});
};


exports.deleteMovie = (movieId) => {
    return Movie.destroy({
        where: {_id: movieId}
    });
};