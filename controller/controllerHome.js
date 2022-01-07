const db = require('../database/models')
const sequelize = db.sequelize;
const Products = db.Product;


const controller = {
    index:function(req, res) {
        Products.findAll({raw:true,limit:4,where: {offer:1} })
            .then(product => {
                res.render('index.ejs',{product});
            })
        
    }
}

module.exports = controller;