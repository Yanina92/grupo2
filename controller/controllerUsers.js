const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const usersFile = path.join(__dirname, '../data/users.json');
const User = require('../modelsUsers/User')
const {validationResult} =require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models'); ;
const sequelize = db.sequelize;
const Users = db.User;



const controller = {
    
  index:function(req, res) {
        Users.findAll()
            .then(users => {
                res.render('../views/user/user-table',{users})
            })
    },

  delete: function (req, res) {
    let userId = req.params.id;
    // let users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
    Users.destroy({where: {id:userId}, force:true})
    .then(() =>{
       return res.redirect("/users");
    })
    .catch(error => res.send(error))
    // let finalUsers = users.filter((user) => user.id != id);
    // fs.writeFileSync(usersFile, JSON.stringify(finalUsers, null, " "));
    
  }, 

  edit: function (req, res) {
    let userId = req.params.id;
    // let users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
    // let editUser = users.filter((user) => user.id == userId);
    // console.log(editUser[0].firstName);
    let user = Users.findByPk(userId)
    .then((user) => {
        return res.render("../views/user/user-edit", { user },console.log(user));
  })
},
    update:  (req,res) => {
        let userId = req.params.id;
        Users
        .update(
            {
                first_name: req.body.title,
                last_name: req.body.rating,
                email: req.body.awards,
                password: req.body.release_date,
                phone: req.body.length,
                image: req.body.genre_id,
                admin: req.body.genre_id
            },
            {
                where: {id: userId}
            })
        .then(()=> {
            return res.redirect('/users')})            
        .catch(error => res.send(error))
  },
  register: function (req, res) {
    res.render("./user/register");
  },

  create: function (req, res) {
    console.log("ENTRE");
    let users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
    let userCompare = User.findByField("email", req.body.email);
    let newUser = {
      id: users[users.length - 1].id + 1,
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
    };
    console.log(User.findByField("email", req.body.email));

        if(userCompare) {
            return res.render('./user/register', {
                errors: {
                    email: {
                        msg:'Este mail ya esta registrado'
                    }
                },
            oldData: req.body
            });
        }else{
		users.push(newUser)
		fs.writeFileSync(usersFile, JSON.stringify(users, null, ' '));
    }
		res.redirect('/');
    },

    register:function(req, res) {
        return res.render('./user/register');
    },

    processRegister:function(req, res) {

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            return res.render('./user/register', {
            errors: resultValidation.mapped(),
            oldData: req.body
        });
    }

    let userInDb = User.findByField('email',req.body.email);

    if (userInDb) {
        return res.render('./user/register', {
        errors: {
            email:{
                msg: 'Este email ya esta registrado'
            }
        },
        oldData: req.body
        });
    }

     let userToCreate = {
         ...req.body,
         password: bcryptjs.hashSync(req.body.password,10),
         image: req.file.filename
     }
     User.create(userToCreate);
     return res.send('ok, se creo el usuario');
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
