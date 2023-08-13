const  Movie = require("../models/movie.model");

const getAllMovies = async (req, res) => {
  const movies = await Movie.findAll();

  return res.status(200).json(movies);
};

const addMovie = async (request, response) => {
  const { name, language, runtime } =
    request.body;

  const movie = Movie.build({
    name,
    language,
    runtime,
  });

  await movie
    .save()
    .then(function (success) {
      response.status(201).json(success);
    })
    .catch(function (error) {
      response.json(error);
    });
};

module.exports = {
  getAllMovies,
  addMovie,
};