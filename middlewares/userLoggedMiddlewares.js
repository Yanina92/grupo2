const User = require('../models/User')

const userLoggedMiddlewares = (req, res, next) => {
  
  res.locals.logged = false;

  let emailInCookie = req.cookies.userEmail;
  let userFromCookie = User.findByField('email',emailInCookie);

  if(userFromCookie){
    req.session.userLogged = userFromCookie;
  }

  if (req.session.userLogged){
     res.locals.logged = true;
     res.locals.userLogged = req.session.userLogged;
   }

  next();
}

module.exports = userLoggedMiddlewares;