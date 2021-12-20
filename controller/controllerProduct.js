const {validationResult } = require ('express-validator')
const fs = require("fs");
const path = require("path");
const db = require('../database/models'); ;
const sequelize = db.sequelize;
const Product = db.Product;



const controller = {
  productsDetail:(req, res) => {
    let productId = req.params.id
    Product.findByPk(productId)
      .then((Product) => {
        return res.render('./products/productDetail',{Product})
    })
},

  productsCart: (req, res) => {
    res.render('./products/productCart');
  },

  productsList: (req, res) => {
    Product.findAll()
    .then((Product) => {
     return res.render("./products/productList", { Product })});
  },
 

  createForm: (req, res) => {
    res.render("./products/addProduct");
  },

  saveProduct: (req, res) => {
    let error = validationResult(req, res); 
    
    if (!error.isEmpty()) {
      res.render("./products/addProduct",
      {
        error:error.array(),
        old:req.body
      }); 
    }
    let products = JSON.parse(fs.readFileSync(productPath, "utf8"));
    let newProduct = {
      id: products[products.length - 1].id + 1,
      ...req.body,
      image: "/upload/" + req.file.filename,
    };
    console.log(req.body);
    products.push(newProduct);
    fs.writeFileSync(productPath, JSON.stringify(products, null, " "));
    res.redirect("/products");
  },

  editProduct: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productPath, "utf8"));
    let identy = req.params.id;
    let productToEdit = products.find((product) => product.id == identy);
    console.log(productToEdit);
    res.render("./products/editProduct", { productToEdit });
  },

  updateProduct: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productPath, "utf8"));
    let id = req.params.id;
    let productToEdit = products.find((product) => product.id == id);

    productToEdit = {
      id: productToEdit.id,
      ...req.body,
    };
    console.log(productToEdit);
    let newProducts = products.map((product) => {
      if (product.id == productToEdit.id) {
        return (product = { ...productToEdit });
      }
      return product;
    });
    console.log("Articulo ID:" + id + " se modifico");

    fs.writeFileSync(productPath, JSON.stringify(newProducts, null, " "));
    res.redirect("/products");
  },

  delete: (req, res) => {
    let id = req.params.id;
    let products = JSON.parse(fs.readFileSync(productPath, "utf8"));
    let productFilter = products.filter((product) => product.id != id);
    console.log("Articulo ID:" + id + " se elimino");
    fs.writeFileSync(productPath, JSON.stringify(productFilter, null, " "));
    res.redirect("/products");
  },
};

module.exports = controller;
