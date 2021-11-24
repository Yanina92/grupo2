const User = require('../models/User')
<<<<<<< HEAD
const userLoggedMiddlewares = (req, res, next) => {  
  res.locals.logged = false;

  let emailInCookie = req.cookies.userEmail;
  let userFromCookie = User.findByField("email",emailInCookie);

  if (userFromCookie) {
=======

const userLoggedMiddlewares = (req, res, next) => {
  
  res.locals.isLogged = false;

  let emailInCookie = req.cookies.userEmail;
  let userFromCookie = User.findByField('email',emailInCookie);

  if(userFromCookie){
>>>>>>> master
    req.session.userLogged = userFromCookie;
  }

  if (req.session && req.session.userLogged){
     res.locals.isLogged = true;
     res.locals.userLogged = req.session.userLogged;
   }

  next();
}

module.exports = userLoggedMiddlewares;