//import express
const express = require('express');

//create transactions controller
const transactions = express.Router();

//import budgetList
const budgetList = require('../models/budgetList');

//GET request to get the whole budget list
transactions.get('/', (req, res) => {
  console.log('GET request to "/transactions"');
  res.status(200).json(budgetList);
});

//POST request to add a budget item
transactions.post('/', (req, res) => {
  console.log('POST request to "/transactions"');
  budgetList.push(req.body);
  res.status(200).json(budgetList);
});

//GET request to get individual budget item
transactions.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log(`GET request to "/transactions/${id}"`);
  res.status(200).json(budgetList[id]);
});

//DELETE request to delete a budget item
transactions.delete('/:id', (req, res) => {
  const { id } = req.params;
  console.log(`DELETE request to "/transactions/${id}"`);
  budgetList.splice(id, 1);
  res.status(200).json(budgetList);
});

//PUT request to replace a budget item
transactions.put('/:id', (req, res) => {
  const { id } = req.params;
  console.log(`PUT request to "/transactions/${id}"`);
  budgetList.splice(id, 1, req.body);
  res.status(200).json(budgetList);
});

// export our controller
module.exports = transactions;
