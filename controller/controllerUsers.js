const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const usersFile = path.join(__dirname, "../data/users.json");
const User = require("../models/User");
const multer = require("multer");
const upload = multer({ dest: "./public/upload/userImg" });

const controller = {
  index: function (req, res) {
    let users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
    res.render("./user/user-table", { users: users });
  },

  delete: function (req, res) {
    let id = req.params.id;
    let users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
    let finalUsers = users.filter((user) => user.id != id);
    fs.writeFileSync(usersFile, JSON.stringify(finalUsers, null, " "));
    res.redirect("/users");
  },

  edit: function (req, res) {
    let userId = req.params.id;
    let users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
    let editUser = users.filter((user) => user.id == userId);
    console.log(editUser[0].firstName);
    res.render("./user/user-edit", { user: editUser[0] });
  },

  put: function (req, res) {
    let id = req.params.id;
    let users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
    let userToEdit = users.find((user) => user.id == id);

    userToEdit = {
      id: userToEdit.id,
      ...req.body,
    };
    console.log(req.body);
    console.log(userToEdit);
    let newUsers = users.map((user) => {
      if (user.id == userToEdit.id) {
        return (user = { ...userToEdit });
      }
      return user;
    });

    console.log(newUsers);

    fs.writeFileSync(usersFile, JSON.stringify(newUsers, null, " "));

    res.redirect("/users");
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

    if (userCompare) {
      return res.render("./user/register", {
        errors: {
          email: {
            msg: "Este mail ya esta registrado",
          },
        },
        oldData: req.body,
      });
    } else {
      users.push(newUser);
      fs.writeFileSync(usersFile, JSON.stringify(users, null, " "));
      res.redirect("./users/login");
    }
  },
  login: function (req, res) {
    console.log(req.cookies.testing);
    res.render("./user/login");
  },
  logged: (req, res) => {
    let userToLogin = User.findByField("email", req.body.email);
    console.log(req.body.rememberUser);

    if (userToLogin) {
      let password = bcrypt.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (password) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if (req.body.rememberUser) {
          res.cookie("userMail", req.body.email, { maxAge: 1000 * 60 * 5 });
        }
        return res.render("index", {
          user: req.session.userLogged,
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
