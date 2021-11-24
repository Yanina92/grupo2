const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerUsers');
const guestMiddlewares = require('../middlewares/guestMiddlewares'); //  Esto va como middleware de '/register'
const authMiddlewares = require('../middlewares/authMiddlewares')   //  Esto va como middleware de '/profile'
const userLoggedMiddlewares = require('../middlewares/userLoggedMiddlewares')

router.get('/', controller.index);
router.delete('/delete/:id', controller.delete);
router.patch('/edit/:id', controller.put);
router.get('/edit/:id', controller.edit);
router.post('/create', controller.create);
router.get('/register',guestMiddlewares ,controller.register);
router.get('/login',userLoggedMiddlewares, controller.login);
router.post('/login',controller.logged)
router.get('/logout',controller.logout)

module.exports = router;