const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerRegister');
const guestMiddlewares = require('../middlewares/guestMiddlewares')

router.get('/',guestMiddlewares, controller.index);

module.exports = router;