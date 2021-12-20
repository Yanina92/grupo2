const {validationResult } = require ('express-validator')
const fs = require("fs");
const path = require("path");
const productPath = path.join(__dirname, "../data/productsData.json");
const db = require('../database/models');
const sequelize = db.sequelize;
const Product = require('../database/models/Product');
const Products = db.Product;

const controller = {

  productsDetail:(req, res) => {
    let identy = req.params.id
    const products = JSON.parse(fs.readFileSync(productPath, 'utf8'));
    let product = products.find(p=>p.id==identy);
    // let productosRelacionados = product.productosRelacionados.map((pId)=>products.find(p=>p.id==pId));
    res.render('./products/productDetail',{product})
  },

  productsCart: (req, res) => {
    res.render('./products/productCart');
  },
 
  productsList:function(req, res) {
    Products.findAll()
      .then(products => {
          res.render("./products/productList",{products})
      })
  },

  createForm: (req, res) => {
    res.render("./products/addProduct");
  },

  saveProduct:function(req, res) {

    let productToCreate = {
        ...req.body,
        image: req.file.filename
    }
    Products.create(productToCreate);
    res.redirect('/products');
  },

  /**saveProduct: (req, res) => {
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
  },**/

  /**editProduct: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productPath, "utf8"));
    let identy = req.params.id;
    let productToEdit = products.find((product) => product.id == identy);
    console.log(productToEdit);
    res.render("./products/editProduct", { productToEdit });
  },**/

  editProduct: function (req, res) {
    let product = Products.findByPk(req.params.id)
    .then((product) => {
        return res.render("./products/editProduct", { product });
    })
    .catch(error => res.send(error))
  },

  updateProduct: function (req, res) {
    Products.update(
      {
        name: req.body.name,
        description: req.body.description,
        offer: req.body.offer,
        discount: req.body.discount,
        price: req.body.price,
        stock: req.body.stock,
        id_category: req.body.id_category,
        id_brand: req.body.id_brand,
      },
      {
        where: {id: req.params.id}
      })
      .then(()=> {
        return res.redirect('/products')})            
      .catch(error => res.send(error));
  },

  /**updateProduct: (req, res) => {
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
  },**/

  delete: function (req, res) {
    Products.destroy({where: {id:req.params.id}, force:true})
    .then(() =>{
    return res.redirect("/products");
    })
    .catch(error => res.send(error))    
  }, 
};

module.exports = controller;
