
const controller = {
    addProduct:function(req, res) {
        res.render('./user/addProduct')
    },

    editProduct:function(req, res) {
        res.render('./user/editProduct')
    }

}

module.exports = controller;