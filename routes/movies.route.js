const express = require('express');
const router = express.Router();

const moviesController = require("../controller/movies.controller")

router.get("/",moviesController.getAllMovies);
router.post("/",moviesController.addMovie);

module.exports = router;