const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerAdmin');

router.use('/addProduct', controller.addProduct);
router.use('/editProduct', controller.editProduct);

module.exports = router;