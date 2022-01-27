const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const moment = require('moment');

const Products = db.Product;
const Categories = db.Category;

const controller = {

    'list': (req, res) => {
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
    
    'categories':(req, res) => {
        Categories.findAll()
        .then(category => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: category.length,
                    url: '/api/categories/'
                },
                data: category
            }
            res.json(respuesta);
        });
    },
 


    }

module.exports = controller;
