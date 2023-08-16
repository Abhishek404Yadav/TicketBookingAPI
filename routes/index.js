const express = require("express");
const router = express.Router();

const moviesRoute = require("./movies.route");
router.use("/movies", moviesRoute);

const theaterRoute = require("./theater.route");
router.use("/theater", theaterRoute);

const showTimingRoute = require("./showtime.route");
router.use("/timing",showTimingRoute);

module.exports = router;