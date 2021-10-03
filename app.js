const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

const routerHome = require('./routes/routeHome');
const routerUser = require('./routes/routeUser');

<<<<<<< HEAD
app.listen(port,()=>{
    console.log("localhost:" + port + " " + "Activo")});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'/views/login.html'))})

app.get('/productDetail',function (req, res){
    res.sendFile(path.join(__dirname,'/views/productDetail.html'))});

app.get('/productList',function (req, res){
    res.sendFile(path.join(__dirname,'/views/productList.html'))})

app.get('/productCart',function (req, res){
    res.sendFile(path.join(__dirname,'/views/productCart.html'))});

app.get('/register', function (req,res){
    res.sendFile(path.join(__dirname,'/views/register.html'))});

app.get('/login', function (req,res){
    res.sendFile(path.join(__dirname,'/views/login.html'))});
=======
app.use(express.static('public'));

app.listen(port,()=>{
    console.log("localhost:" + port + " " + "Activo")
    }
);

app.use('/', routerHome);
app.use('/user', routerUser);
>>>>>>> f21d7322dd1bbd48bb8caafadeffa8713a2c7514
