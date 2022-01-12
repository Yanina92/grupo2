const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize;

 

const controller = {
    index:function(req, res) {
       
        const User = db.User;
        db.User.findAll()
            .then(user =>{
                res.render('index.ejs',console.log(user));
            })
        
    }
}

module.exports = controller;