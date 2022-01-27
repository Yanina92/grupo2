const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
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
            res.render("./user/register",{ errors:errors.mapped(), oldData:req.body,})
        }else {
        Users.create ({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password,10),
            phone: req.body.phone,
            image: req.file.filename,
            admin: req.body.admin
    })
    .then(usuario => console.log(usuario),res.redirect('/users/profile'))
    .catch(error => console.log(res.status(400).send(error)))

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
                return res.redirect('/profile')})            
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
        let email = req.body.email;
       Users.findOne({where: {email:email},raw : true})
        .then(response =>{ 
            console.log(response,"Stay Here - 1")
            if (response){
                console.log("Stay Here - 1.8")
                let isOkThePassword = bcryptjs.compareSync(req.body.password,response.password)
                let user = response;
                console.log("Stay Here - 2")
                    if (isOkThePassword){
                        console.log("Stay Here - 3")
                        delete user.password
                        req.session.userLogged = user;
                    }
                    if(req.body.remember_user){
                        console.log("Stay Here - 4")
                        res.cookie('userEmail',req.body.email,{maxAge:(1000*60)*2})
                       return res.render('./user/profile',console.log("Work2!"),{user})
                    }
                    if(isOkThePassword && !req.body.remember_user){
                    console.log("Stay Here - 5")
                  return res.redirect('./profile',302,console.log("Work!"),{user});
                }
                {
                    console.log("Stay Here - ????")
                    return res.render('./user/login',{
                        errors:{
                            email:{
                                msg:'Las credenciales son invalidas'
                            }
                        }  
                    });
                }     
            }
   
        })

     
    },

    profile:function(req, res) {

        console.log(req.cookies.userEmail);
        console.log(req.session.userLogged)

        return res.render('./user/profile',
        {
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
