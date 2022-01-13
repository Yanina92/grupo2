const express = require('express');
const  router = express.Router();
const controller = require('../controller/controllerProduct');
const validationFormProduct = require('../middlewares/validationFormProduct');
const multer = require('multer');
const storageProd = require('../middlewares/multerProdMiddleware');
const uploadFile = multer({storage: storageProd});
//const upload = multer({ dest: './public/upload/productsImages' });


router.get('/detail/:id',controller.productsDetail);
router.get('/productCart',controller.productsCart);
//Create
router.get('/create', controller.createForm);
router.post('/create',uploadFile.single('image'),validationFormProduct,controller.saveProduct);
//Read
router.get('/',controller.productsList);
//Update
router.get('/edit/:id', controller.editProduct);
router.post('/edit/:id',uploadFile.single('image'),validationFormProduct,controller.updateProduct);
//Delete
router.post('/delete/:id',controller.delete);

module.exports = router;