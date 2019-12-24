'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Connecta ao banco
const url = 'mongodb+srv://leandro:jbo301208@cluster0-igu4r.mongodb.net/test?retryWrites=true&w=majority';
var options = { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true };

mongoose.connect(url, options);

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados: ' + err);
})

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada com o banco de dados');
})

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada com o banco de dados');
})

//Carregar od Models
const Product = require('./models/product');

// Carregar as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;