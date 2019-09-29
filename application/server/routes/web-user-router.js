const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

//form cookie security
const csurf = require('csurf');
const csrfProtection = csurf();
router.use(csrfProtection);

//registration and login routes
router.get('/register', (req,res) => {
  res.render('index.html.ejs',{csrfToken: req.csrfToken()});
});

router.post('/register', (req,res) => {  
  UserController.webRegistration(req,res);
});

//registration success view 
router.get('/success', (req,res) => {
  res.render('success.html.ejs');
});

module.exports = router;