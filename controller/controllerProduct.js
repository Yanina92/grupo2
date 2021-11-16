const {validationResult } = require ('express-validator')
const fs = require("fs");
const path = require("path");
const productPath = path.join(__dirname, "../data/productsData.json");
// const products = JSON.parse(fs.readFileSync(productPath, 'utf8'));

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

  productsList: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productPath, "utf8"));
    res.render("./products/productList", { products });
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
