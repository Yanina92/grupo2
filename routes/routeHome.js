const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerHome');
const routerProductCart = require('../routes/routeProductCart');
// const routeLogin = require('../routes/routeLogin');
// const routeRegister = require('../routes/routeRegister');
const routerUsers = require('../routes/routeUsers');
const routerProduct = require('../routes/routeProduct');

router.get('/', controller.index);
router.use('/products',routerProduct);
router.use('/productCart',routerProductCart)
router.use('/users', routerUsers);

module.exports = router;