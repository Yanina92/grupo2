const express = require('express');
const app = express();

const routerProductDetail = require('./routes/routeProductDetail');
const routerProductCart = require('./routes/routeProductCart');
const routerHome = require('./routes/routeHome');
const routerUser = require('./routes/routeUser');
const routerAdmin = require('./routes/routeAdmin');

app.set('view engine', 'ejs');

app.use('/productDetail',routerProductDetail)
app.use('/productCart',routerProductCart)
app.use(express.static('public'))
app.use('/', routerHome);
app.use('/user', routerUser);
app.use('/admin',routerAdmin);

const port = process.env.PORT || 3030;


app.listen(port,()=>{
    console.log("localhost:" + port + " " + "Activo")
    }
);