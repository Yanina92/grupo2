const express = require('express');
const  router = express.Router();
const controller = require('../controller/controllerProduct');
const multer = require('multer');
// const upload = multer({ dest: 'E:/proyectoFerreteria/grupo_2_ferreteria/public/upload' });
const upload = multer({ dest: './public/upload' });
const validateFormCreate = require('../middlewares/validationFormProduct');

// Validaciones



router.get('/',controller.productsList);
router.get('/detail/:id',controller.productsDetail);

router.get('/create', controller.createForm);

router.post('/',upload.single('image'),validateFormCreate,controller.saveProduct); // Se envia upload(MULTER) y  Validaciones por Middlewares 

router.get('/edit/:id', controller.editProduct);
router.patch('/edit/:id',controller.updateProduct);

router.delete('/delete/:id',controller.delete);

module.exports = router;