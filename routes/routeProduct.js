const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerProduct');
const validationFormProduct = require('../middlewares/validationFormProduct');
const multer = require('multer');
const storageProd = require('../middlewares/multerProdMiddleware');
const uploadFile = multer({storage: storageProd});
const authMiddlewares = require('../middlewares/authMiddlewares')
//const upload = multer({ dest: './public/upload/productsImages' });



//Admin
router.get('/table',controller.table);
//Update
router.get('/edit/:id', controller.editProduct);
router.post('/edit/:id',uploadFile.single('image'),validationFormProduct,controller.updateProduct);
//Create
router.get('/create', controller.createForm);
router.post('/create',uploadFile.single('image'),validationFormProduct,controller.saveProduct);
//Delete
router.post('/delete/:id',controller.delete);

router.get('/detail/:id',controller.productsDetail);
router.get('/productCart',authMiddlewares,controller.productsCart);

//Read
router.get('/:page',controller.productsList);


module.exports = router;