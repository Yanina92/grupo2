const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerProduct');


router.get('/',controller.productsList);

router.get('/create', controller.addProduct);
router.post('/',controller.save);

router.get('/edit/:id', controller.editProduct);
router.patch('edit/:id',controller.updateProduct);

router.delete('delete/:id',controller.delete);

module.exports = router;