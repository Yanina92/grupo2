const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerLogin');
const guestMiddlewares = require('../middlewares/guestMiddlewares'); //  Esto va como middleware de '/register'
const authMiddlewares = require('../middlewares/authMiddlewares')   //  Esto va como middleware de '/profile'

router.get('/',guestMiddlewares, controller.index);
router.post('/',controller.login)
router.get('/',controller.logout)

module.exports = router;