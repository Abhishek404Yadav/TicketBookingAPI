const express = require('express');
const router = express.Router();
const seatController = require('../controller/seat.controller');

router.get('/',seatController.getAvailableSeat);
router.post('/',seatController.bookSeat);
router.post('/add',seatController.addSeat);

module.exports = router;