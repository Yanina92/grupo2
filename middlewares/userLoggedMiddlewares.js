const userLoggedMiddlewares = (req, res, next) => {
  
  res.locals.logged = false;
  console.log(req.session)

  if (req.session.userLogged){
     res.locals.logged = true;
     res.locals.userLogged = req.session.userLogged;
   }

  next();
}

module.exports = userLoggedMiddlewares;