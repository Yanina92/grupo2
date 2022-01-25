const express = require('express');
const router = express.Router();
const usersAPIController = require('../controller/usersAPIcontroller');
const productsAPIController = require('../controller/productsAPIController');

//Usuarios
router.get('/users',usersAPIController.list);
router.get('/users/:id',usersAPIController.detail);

//Productos

router.get('/products',productsAPIController.list);
router.get('/products/:id',productsAPIController.detail);

//Categorias

module.exports = router;