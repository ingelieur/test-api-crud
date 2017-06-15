const express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var books = require('./routes/books')
//var transactions = require('./routes/transactions')

app.use('/books', books);
//app.use('/transactions', transactions);

app.listen(3000)
