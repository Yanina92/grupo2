const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const moment = require('moment');

const Products = db.Product;
const Categories = db.Category;

const controller = {

    'list': (req, res) => {

       /* let cat = Categories.findAll({raw: true})  

        let contadorCategorias = {};

        for (let i = 0; i < cat.length; i++) {
            var contador = 0;
            contador = Products.count({
                where: {
                category_id: {
                    [Op.eq]: cat[i].id,
                },
                },
            });

            contadorCategorias[`Categoria ${cat[i].name}`] = contador;
        }

      console.log(contadorCategorias);*/

        Products.findAll({include:[{association:"category"},{association:"brand"}]})        
        .then(function (product) {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: 'api/products/'
                    },
                    data: product
                };
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
      Products.findByPk(req.params.id)
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/:id'
                    },
                    data: product
                }
                res.json(respuesta);
            });
    },
 


    }

module.exports = controller;
