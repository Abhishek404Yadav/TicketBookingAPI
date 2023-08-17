const  Movie = require("../models/movie.model");

const getAllMovies = async (req, res) => {
  const movies = await Movie.findAll();

  return res.status(200).json(movies);
};

const addMovie = async (request, response) => {
  const { name, language, runtime } =
    request.body;

  const movie = await Movie.create({
    name,
    language,
    runtime,
  });
  return response.status(201).json(movie);
};

module.exports = {
  getAllMovies,
  addMovie,
};