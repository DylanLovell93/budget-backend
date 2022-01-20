//import express
const express = require('express');

//import uuid
const { v4: uuidv4 } = require('uuid');

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
  const newPost = { ...req.body, id: uuidv4() };
  budgetList.push(newPost);
  res.status(200).json(budgetList);
});

//GET request to get individual budget item
transactions.get('/:id', (req, res) => {
  const { id } = req.params;
  const singleItem = budgetList.find((e) => e.id === id);
  console.log(`GET request to "/transactions/${id}"`);
  singleItem
    ? res.status(200).json(singleItem)
    : res.status(404).json({ error: 'Transaction not found' });
});

//DELETE request to delete a budget item
transactions.delete('/:id', (req, res) => {
  const { id } = req.params;
  console.log(`DELETE request to "/transactions/${id}"`);
  const idx = budgetList.findIndex((e) => e.id === id);
  if (idx !== -1) {
    budgetList.splice(idx, 1);
    res.status(200).json(budgetList);
  } else {
    res.status(404).json({ error: 'Transaction not found' });
  }
});

//PUT request to replace a budget item
transactions.put('/:id', (req, res) => {
  const { id } = req.params;
  const newPost = { ...req.body, id: id };
  console.log(`PUT request to "/transactions/${id}"`);
  const idx = budgetList.findIndex((e) => e.id === id);
  if (idx !== -1) {
    budgetList.splice(idx, 1, newPost);
    res.status(200).json(budgetList);
  } else {
    res.status(404).json({ error: 'Transaction not found' });
  }
});

// export our controller
module.exports = transactions;
