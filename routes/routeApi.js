const express = require('express');
const router = express.Router();
const usersAPIController = require('../controller/usersAPIcontroller');


//CRUD
//Create (Register)
router.get('/users',usersAPIController.list);
router.get('/:id',usersAPIController.detail);



module.exports = router;