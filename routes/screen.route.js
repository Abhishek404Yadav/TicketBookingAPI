const express = require('express');
const router = express.Router();
const screenController = require('../controller/screen.controller');

router.post('/',screenController.addScreen);

module.exports = router;