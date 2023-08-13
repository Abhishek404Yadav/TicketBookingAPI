const express = require("express");
const router = express.Router();

const moviesRoute = require("./movies.route");
router.use("/movies", moviesRoute);

module.exports = router;