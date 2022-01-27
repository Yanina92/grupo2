const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize;
const Products = db.Product;
const Category = db.Category;



const controller = {
    index:function(req, res) {
    let desc = (discount) => parseFloat(discount)/100;
    let math = function(price,desce) {
  return  Math.abs
    (Math.trunc
        (parseFloat(price) - parseFloat(desce)))
};

Products.findAll({where:{offer:1},offset:1,limit: 8,order: sequelize.random()})
            .then(products =>{
                res.render('index.ejs',{products,desc,math})})
            }
        }

module.exports = controller;