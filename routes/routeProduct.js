const express = require('express');
const  router = express.Router();
const controller = require('../controller/controllerProduct');
const multer = require('multer');
// const upload = multer({ dest: 'E:/proyectoFerreteria/grupo_2_ferreteria/public/upload' });
const upload = multer({ dest: './public/upload' });
const {body} = require('express-validator');

// Validaciones

const validateFormCreate = [
    body('name').notEmpty().withMessage('Tenes que completar el campo de Nombre'),
    body('category').notEmpty().withMessage('Tenes que completar el campo de Categoria'),
    body('brand').notEmpty().withMessage('Tenes que completar el campo de Marca'),
    body('price')
    .notEmpty().withMessage('Tenes que completar el campo Precio').bail()
    .isNumeric().withMessage('Tenes que completar el campo Precio expresado en numeros'),
    body('offer').notEmpty().withMessage('Tenes que decir Si esta,o No en oferta')
]

router.get('/',controller.productsList);
router.get('/:id',controller.productsDetail);
router.get('/productCart',controller.productsCart);

router.get('/create', controller.createForm);

router.post('/',upload.single('image'),validateFormCreate,controller.saveProduct); // Se envia upload(MULTER) y  Validaciones por Middlewares 

router.get('/edit/:id', controller.editProduct);
router.patch('/edit/:id',controller.updateProduct);

router.delete('/delete/:id',controller.delete);

module.exports = router;