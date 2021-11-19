const express = require('express');
const app = express();

const routerHome = require('./routes/routeHome');
const routerUsers = require('./routes/routeUsers');
const routerProduct = require('./routes/routeProduct');
const methodOverride = require('method-override');

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routerHome);
app.use('/products',routerProduct);
app.use('/users', routerUsers);
//app.use('/login', routeLogin);
//app.use('/register', routeRegister);

const port = process.env.PORT || 3030;


app.listen(port,()=>{
    console.log("localhost:" + port + " " + "Activo")
    }
);
