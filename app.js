const express = require('express');
const app = express();

const routerProductDetail = require('./routes/routeProductDetail');
const routerProductCart = require('./routes/routeProductCart');
const routerHome = require('./routes/routeHome');
const routerUser = require('./routes/routeUser');

app.set('view engine', 'ejs');

app.use('/',routerProductDetail)
app.use('/productCart',routerProductCart)
app.use(express.static('public'))
app.use('/', routerHome);
app.use('/user', routerUser);

const port = process.env.PORT || 3030;


app.listen(port,()=>{
    console.log("localhost:" + port + " " + "Activo")
    }
);