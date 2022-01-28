const express = require('express');
const app = express();
const routerHome = require('./routes/routeHome');
const routerProduct = require('./routes/routeProduct');
const routerUsers = require('./routes/routeUsers');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const userLoggedMiddlewares = require('./middlewares/userLoggedMiddlewares');
const routerApi = require('./routes/routeApi')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: 'mySecretWord',
    resave: false,
	saveUninitialized: false,
}));
app.use(cookies());
app.use(userLoggedMiddlewares);

app.use('/', routerHome);
app.use('/users', routerUsers);
app.use('/products',routerProduct);
app.use('/api',routerApi)
app.use((req, res, next) => {
    res.status(404).render('not-found');
});

const port = process.env.PORT || 3030;

app.listen(port,()=>{
    console.log("localhost:" + port + " " + "Activo")
    }
);
