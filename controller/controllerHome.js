const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize;
const Products = db.Product;
const Category = db.Category;



const controller = {
    index:function(req, res) {
        
const productsPage1 =  Products.findAll({where:{offer:1},offset:1,limit: 4,order: sequelize.random()});
const productsPage2 =  Products.findAll({where:{offer:1},offset:4,limit: 8,order: sequelize.random()});

Promise.all([productsPage1,productsPage2])
.then(products =>{
     res.render('index.ejs',{products},console.log(products[0]))})

        // Products.findAll({where:{offer:1},offset:1,limit: 8,order: sequelize.random()})
        //     .then(products =>{
        //         res.render('index.ejs',{products},console.log(products.length));
        //     })
        
     }
    //,
    // refresh:function(req, res) {
    //     Products.findAll({where:{offer:1},offset:1,limit: 5})
    //         .then(products =>{
    //             res.render('index.ejs',{products},console.log(products.length));
    //         })
        
}
module.exports = controller;