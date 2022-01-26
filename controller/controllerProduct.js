const { validationResult } = require ('express-validator')
const fs = require("fs");
const path = require("path");
const productPath = path.join(__dirname, "../data/productsData.json");
const db = require('../database/models');
const Sequelize = require('sequelize')
const Products = db.Product;


const controller = {

  productsDetail:(req, res) => {
    // let identy = req.params.id
    // const products = JSON.parse(fs.readFileSync(productPath, 'utf8'));
    // let product = products.find(p=>p.id==identy);
    // // let productosRelacionados = product.productosRelacionados.map((pId)=>products.find(p=>p.id==pId));
    // res.render('./products/productDetail',{product})
    let productId = req.params.id;
    let product = Products.findByPk(productId)
    .then((product) => {
        return res.render("./products/productDetail", { product },console.log(product));
    })
    .catch(error => res.send(error))
  },
  productsCart: (req, res) => {
    res.render('./products/productCart');
  },
 
  productsList:function(req, res) {
    let perPage = 5;
    let page = req.params.page || 1 ;
    let pages = '';
    let desc = (discount) => parseFloat(discount)/100  
    Products.findAndCountAll({
      offset:((perPage * page) - page)},
      {
        limit:perPage
      }
    )
      .then(products => {
          res.render("./products/productList",{products:products.rows,pages:products.count / perPage , page,desc})
      })

  },
  productsListPriceASC:function(req, res) {
    let perPage = 5;
    let page = req.params.page || 1 ;
    let pages = '';
    let desc = (discount) => parseFloat(discount)/100  
    Products.findAndCountAll({
      offset:((perPage * page) - page),
         
      },{
        limit:perPage
      }
    )
      .then(products => {
          res.render("./products/productList",{products:products.rows,pages:products.count / perPage , page,desc},console.log(products.rows))
      })

  },
  productsListPriceDESC:function(req, res) {
    let perPage = 5;
    let page = req.params.page || 1 ;
    let pages = '';
    let desc = (discount) => parseFloat(discount)/100  
    Products.findAndCountAll({
      offset:((perPage * page) - page),
         
      },{
        limit:perPage
      }
    )
      .then(products => {
          res.render("./products/productList",{products:products.rows,pages:products.count / perPage , page,desc},console.log(products.rows))
      })

  },
 
  createForm: (req, res) => {
    res.render("./products/addProduct");
  },

  saveProduct:function(req, res) {

    let errors = validationResult(req);

    if (errors.errors.length > 0) {

      res.render("./products/addProduct",{ errors:errors.mapped(), oldData:req.body}); 

    } else {

      let productToCreate = {
        ...req.body,
        image: req.file.filename
      };

      Products.create(productToCreate);
      res.redirect('/products');
      
    };
  },

  /**
      image: "/upload/" + req.file.filename,
  },**/

  editProduct: (req, res) => {
    let productId = req.params.id;
    let product = Products.findByPk(productId)
      .then((product) => {
        return res.render("../views/products/editProduct", { product },console.log(product));
      })
      .catch(error => res.send(error));
  },

  updateProduct: function (req, res) {

    let errors = validationResult(req);

    if (errors.errors.length > 0) {

      console.log(errors)
      console.log("aqui toy")

      res.render("./products/editProduct",{ errors:errors.mapped(), product:req.body}); 

      console.log("llegue aqui")

    } else {

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
          image: req.file.filename,
        },
        {
          where: {id: req.params.id}
        })
        .then(()=> {
          return res.redirect('/products')})            
        .catch(error => res.send(error));
        console.log("nop, toy aqui")
    };
    
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
    return res.redirect("/products/1");
    })
    .catch(error => res.send(error))    
  }, 
};

module.exports = controller;
