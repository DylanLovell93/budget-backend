// import express
const express = require('express');

//import cors
const cors = require('cors');

//import transactions
const transactions = require('./controllers/transactions');

//create app
const app = express();

//use cors middleware
app.use(cors());

//use json middleware
app.use(express.json());

//tell app to use our controller
app.use('/transactions', transactions);

//home ping for server.
app.get('/', (req, res) => {
  res.status(200).json('Welcome to our app');
});

//export app
module.exports = app;
