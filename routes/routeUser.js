const express = require('express');
const router = express.Router();
const routeLogin = require('./routeLogin');
const routeRegister = require('./routeRegister');

router.use('/login', routeLogin);
router.use('/register', routeRegister);

module.exports = router;