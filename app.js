const express = require('express');
const app = express();
const port= 3033
const routerProductDetail = require('./routes/routeProductDetail');
const routerProductCart = require('./routes/routeProductCart');
app.set('view engine', 'ejs');

app.use('/',routerProductDetail)
app.use('/productCart',routerProductCart)
app.use(express.static('public'))

app.listen(port,()=>{
    console.log("localhost:" + port + " " + "Activo")});

