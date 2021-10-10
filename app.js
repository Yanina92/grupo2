const express = require('express');
const app = express();

const routerProductDetail = require('./routes/routeProductDetail');
const routerProductCart = require('./routes/routeProductCart');
const routerHome = require('./routes/routeHome');
const routerUser = require('./routes/routeUser');
const routerProduct = require('./routes/routeProduct');

app.set('view engine', 'ejs'); 
app.use(express.urlencoded({ extended: false }));


app.use('/productDetail',routerProductDetail)
app.use('/productCart',routerProductCart)
app.use(express.static('public'))
app.use('/', routerHome);
app.use('/user', routerUser);
app.use('/products',routerProduct);

const port = process.env.PORT || 3030;


app.listen(port,()=>{
    console.log("localhost:" + port + " " + "Activo")
    }
);