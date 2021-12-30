exports.showMovieList = (req, res, next) => {
    res.render('pages/movie/list', {navLocation:'movie'});
}

exports.showAddMovieForm = (req, res, next) => {
    res.render('pages/movie/form', {navLocation:'movie'});
}

exports.showMovieDetails = (req, res, next) => {
    res.render('pages/movie/details', {navLocation:'movie'});
}