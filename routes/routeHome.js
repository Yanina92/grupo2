const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerHome');

router.get('/', controller.index);

module.exports = router;