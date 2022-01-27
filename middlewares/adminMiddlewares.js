const adminMiddlewares = (req, res, next) => {
  if(req.session.userLogged.admin){
    return res.redirect('/')
  }
  next();
}




module.exports = adminMiddlewares;