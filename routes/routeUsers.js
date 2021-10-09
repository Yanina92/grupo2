const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerUsers');

router.get('/', controller.index);

module.exports = router;