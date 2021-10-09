const express = require('express');
const app = express();

const routerProductDetail = require('./routes/routeProductDetail');
const routerProductCart = require('./routes/routeProductCart');
const routerHome = require('./routes/routeHome');
const routeLogin = require('./routes/routeLogin');
const routeRegister = require('./routes/routeRegister');
const routerUsers = require('./routes/routeUsers');

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use('/', routerHome);
app.use('/productDetail',routerProductDetail)
app.use('/productCart',routerProductCart)
app.use('/users', routerUsers);
app.use('/login', routeLogin);
app.use('/register', routeRegister);

const port = process.env.PORT || 3030;


app.listen(port,()=>{
    console.log("localhost:" + port + " " + "Activo")
    }
);