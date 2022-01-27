const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const Users = db.User;

const controller = {

    'list': (req, res) => {
        Users.findAll({attributes:["id","first_name","last_name","email","phone","image"]})
        .then(user => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: user.length,
                    url: 'api/users/'
                },
                data: user
            }

                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
      Users.findByPk(req.params.id,{attributes:["id","first_name","last_name","email","phone","image"]})
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/users/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    },
 


    }

module.exports = controller;
