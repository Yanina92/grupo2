const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const usersFile = path.join(__dirname, "../data/users.json");
const User = require("../models/User");

const controller = {
  index: function (req, res) {
    res.render("./user/login");
  },
  login: (req, res) => {
    let userToLogin = User.findByField("email", req.body.email);

    if (userToLogin) {
      let password = bcrypt.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (password) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin
        return res.render('index', {
            user: req.session.userLogged
        });
      }
      {
        return res.render("./user/login", {
          errors: {
            email: {
              msg: "Los datos ingresados son incorrectos",
            },
          },
        });
      }
    }
    {
      return res.render("./user/login", {
        errors: {
          email: {
            msg: "Los datos ingresados son incorrectos",
          },
        },
      });
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = controller;
