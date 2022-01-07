const express = require('express');
const  router = express.Router();
const controller = require('../controller/controllerProduct');
const multer = require('multer');
const upload = multer({ dest: './public/upload/productsImages' });
const validateFormCreate = require('../middlewares/validationFormProduct');

router.get('/detail/:id',controller.productsDetail);
router.get('/productCart',controller.productsCart);
//Create
router.get('/create', controller.createForm);
router.post('/create',validateFormCreate,upload.single('image'),controller.saveProduct);
//Read
router.get('/',controller.productsList);
//Update
router.get('/edit/:id', controller.editProduct);
router.post('/edit/:id',controller.updateProduct);
//Delete
router.post('/delete/:id',controller.delete);

module.exports = router;