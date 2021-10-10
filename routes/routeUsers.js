const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerUsers');

router.get('/', controller.index);
router.delete('/delete/:id', controller.delete);
router.patch('/edit/:id', controller.put);
router.get('/edit/:id', controller.edit);
router.post('/create', controller.create);
module.exports = router;