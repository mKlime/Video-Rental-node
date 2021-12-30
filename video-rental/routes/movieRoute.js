const express = require('express');
const router = express.Router();
const movieControler = require('../controllers/movieController');

router.get('/', movieControler.showMovieList);
router.get('/add', movieControler.showAddMovieForm);
// router.get('/edit/:movieId', movieControler.showEditMovieForm);
router.get('/details/:movieId', movieControler.showMovieDetails);


// router.post('/add', movieControler.addMovie);
// router.post('/edit', movieControler.updateMovie);
// router.get('/delete/:movieId', movieControler.deleteMovie);


module.exports = router;

