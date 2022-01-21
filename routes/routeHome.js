const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerHome');
//const routeLogin = require('../routes/routeLogin');
//const routeRegister = require('../routes/routeRegister');
//const routerUsers = require('../routes/routeUsers');
const routerProduct = require('../routes/routeProduct');

router.get('/', controller.index);
// router.get('/r',controller.refresh)
//router.use('/products',routerProduct);
//router.use('/users', routerUsers);
//router.use('/login', routeLogin);
//router.use('/register', routeRegister);

module.exports = router;