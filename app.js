const express = require('express');
const app = express();
const port= 3033
const path = require('path')

app.use(express.static('public'))

app.listen(port,()=>{
    console.log("localhost:" + port + " " + "Activo")});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'/views/index.html'))})

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
