const express = require('express');
const app = express();
const routerHome = require('./routes/routeHome');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const userLoggedMiddlewares = require('./middlewares/userLoggedMiddlewares');

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
app.use(userLoggedMiddlewares)

app.use('/', routerHome);

const port = process.env.PORT || 3030;

app.listen(port,()=>{
    console.log("localhost:" + port + " " + "Activo")
    }
);