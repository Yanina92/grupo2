const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerUsers');
const multer = require('multer');
const path = require('path');

const storage = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validationRegisterMiddleware');
const guestMiddlewares = require('../middlewares/guestMiddlewares');
const authMiddlewares = require('../middlewares/authMiddlewares');

const uploadFile = multer({storage});

router.get('/', controller.index);
router.delete('/delete/:id', controller.delete);
router.patch('/edit/:id', controller.put);
router.get('/edit/:id', controller.edit);
router.post('/create', controller.create);
router.get('/register',guestMiddlewares, controller.register);
router.post('/register', uploadFile.single('image'), validations, controller.processRegister);
router.get('/login',guestMiddlewares, controller.login);
router.post('/login', controller.loginProcess);
router.get('/profile',authMiddlewares, controller.profile);
router.get('/logout', controller.logout);

module.exports = router;