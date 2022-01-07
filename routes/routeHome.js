const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerHome');
const routerProduct = require('../routes/routeProduct');

router.get('/', controller.index);


module.exports = router;