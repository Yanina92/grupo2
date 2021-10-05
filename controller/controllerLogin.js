const path = require('path');
const controller = {
    index:function(req, res) {
        res.render('./user/login');
    }
}

module.exports = controller;