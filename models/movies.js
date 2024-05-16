const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
}, 
{ timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
