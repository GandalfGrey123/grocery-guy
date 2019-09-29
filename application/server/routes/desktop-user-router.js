const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/authUser', (req, res) => {
  UserController.authorize(req,res);
});

router.post('/login', (req, res) => {
	console.log('called route')
  UserController.desktopLogin(req,res);
});

module.exports = router;