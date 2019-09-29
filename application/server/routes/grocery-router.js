const express = require('express');
const router = express.Router();
const GroceryController = require('../controllers/GroceryController');

router.post('/new', (req, res) => {
  GroceryController.addNewList(req,res);
});

router.post('/items/add', (req, res) => {
  GroceryController.addNewListItem(req,res);  
});

router.get('/all', (req,res) => {
  GroceryController.getLists(req,res); 
});

module.exports = router;