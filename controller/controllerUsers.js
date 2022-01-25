const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const User = require('../database/models/User');
const {validationResult} =require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const sequelize = db.sequelize;
const Users = db.User;



const controller = {
    
    index:function(req, res) {
        Users.findAll()
            .then(users => {
                res.render('../views/user/user-table',{users})
            })
    },

    register:function(req, res) {
        return res.render('./user/register');
    },

    processRegister:function(req, res) {
        let errors = validationResult(req);
        if (errors.errors.length > 0) {
            res.render("./user/register",{ errors:errors.mapped(), oldData:req.body});
        }else {
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password,10),
            image: req.file.filename
        }
        Users.create(userToCreate);
        //return res.send('ok, se creo el usuario');
        res.redirect('/users');
    }
    },

    edit: function (req, res) {
        let userId = req.params.id;
        let user = Users.findByPk(userId)
        .then((user) => {
            return res.render("../views/user/user-edit", { user },console.log(user));
        })
        .catch(error => res.send(error))
    },

    update: function (req, res) {
        Users.update(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone,
                admin: req.body.admin,
            },
            {
                where: {id: req.params.id}
            })
            .then(()=> {
                return res.redirect('/users')})            
            .catch(error => res.send(error));
    },

    delete: function (req, res) {
        Users.destroy({where: {id:req.params.id}, force:true})
        .then(() =>{
        return res.redirect("/users");
        })
        .catch(error => res.send(error))    
    }, 

    login:function(req, res) {
        return res.render('./user/login');
    },

    loginProcess:function(req, res) {
        let userToLogin = User.findByField('email',req.body.email);

        if (userToLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password,userToLogin.password);
            if (isOkThePassword){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                if(req.body.remember_user){
                    res.cookie('userEmail',req.body.email,{maxAge:(1000*60)*2})
                }
                return res.redirect('/users/profile');
            }     
        }

        return res.render('./user/login',{
            errors:{
                email:{
                    msg:'Las credenciales son invalidas'
                }
            }  
        });
    },

    profile:function(req, res) {

        console.log(req.cookies.userEmail);

        return res.render('./user/profile',{
            user: req.session.userLogged
        });
    },

    logout:function(req, res) {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },
}

module.exports = controller;
