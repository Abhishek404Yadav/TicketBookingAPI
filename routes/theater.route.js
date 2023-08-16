const express = require('express');
const router = express.Router();
const theaterController = require('../controller/theater.controller');

router.get('/',theaterController.getAllTheater);
router.post('/',theaterController.addTheater);
router.get('/:theaterId',theaterController.getTheatreById);

module.exports = router;