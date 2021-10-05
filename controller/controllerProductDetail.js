const path = require('path');
const controller = {
    index:function(req, res) {
        res.render('./products/productDetail');
    }
}

module.exports = controller;