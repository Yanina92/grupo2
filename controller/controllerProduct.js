const fs = require('fs');
const path = require('path');
const productPath = path.join(__dirname, '../data/productsData.json')   
const products = JSON.parse(fs.readFileSync(productPath, 'utf8'));

const controller = {
    productsList:(req, res) => {
        res.render('./products/productList',{products})
    },
    addProduct:(req, res) => {
        res.render('./user/addProduct')
    },

    save:(req, res) => {
        let newProduct = req.body;
        res.redirect('/products')
        
        console.log(newProduct[0]);
    },

    editProduct:(req, res) => {
        let id = req.params.id
		let productToEdit = products.find(
			product => product.id == id
		)
		res.render('./user/editProduct', {productToEdit})
	},

    updateProduct:(req, res) => {

    },

    delete:(req, res) => {

    },
}

module.exports = controller;