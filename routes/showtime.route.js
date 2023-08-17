const express = require('express');
const router = express.Router();
const showTimeController = require('../controller/showtime.controller');

router.get('/:movieId',showTimeController.getAllTiming);
router.post('/',showTimeController.addShowTime);

module.exports = router;