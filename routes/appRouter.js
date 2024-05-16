const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// GET all movies
router.get('/', movieController.getMovies);

// GET one movie by id
router.get('/:id', movieController.getMovieById);

// POST create a new movie
router.post('/', movieController.createMovie);

// PUT update a movie by id
router.put('/:id', movieController.updateMovie);

// DELETE remove a movie by id
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
