const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerUsers');
const multer = require('multer');
const path = require('path');

const storage = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validationRegisterMiddleware');

const uploadFile = multer({storage});

router.get('/', controller.index);
router.delete('/delete/:id', controller.delete);
router.patch('/edit/:id', controller.put);
router.get('/edit/:id', controller.edit);
router.post('/create', controller.create);
router.get('/register', controller.register);
router.post('/register', uploadFile.single('image'), validations, controller.processRegister);
router.get('/login', controller.login);
router.post('/login', controller.loginProcess);
module.exports = router;