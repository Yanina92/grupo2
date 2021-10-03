const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

const routerHome = require('./routes/routeHome');
const routerUser = require('./routes/routeUser');

app.use(express.static('public'));

app.listen(port,()=>{
    console.log("localhost:" + port + " " + "Activo")
    }
);

app.use('/', routerHome);
app.use('/user', routerUser);