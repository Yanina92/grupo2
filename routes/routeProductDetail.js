const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerProductDetail');

router.get('/', controller.index);

module.exports = router;