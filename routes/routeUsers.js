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

//CRUD
//Create (Register)
router.get('/register',guestMiddlewares, controller.register);
router.post('/register',validations, uploadFile.single('image') , controller.processRegister);
//Read (List)
router.get('/', controller.index);
//Update
router.get('/edit/:id', controller.edit);
router.post('/edit/:id', controller.update);
//Delete
router.post('/delete/:id', controller.delete);

//Login
router.get('/login',guestMiddlewares, controller.login);
router.post('/login', controller.loginProcess);
//Profile
router.get('/profile',authMiddlewares, controller.profile);
//Logout
router.get('/logout', controller.logout);

module.exports = router;