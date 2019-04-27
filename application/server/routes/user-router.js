const express = require('express');
const router = express.Router();
var User = require('../models/user');
const passport = require('passport');

var csurf = require('csurf');
var csrfProtection = csurf();

router.use(csrfProtection);

router.get('/csrftkn', (req,res)=>{
   res.send({csrfToken: req.csrfToken()});
});


//registration and login routes
router.post('/register',
    passport.authenticate('signup', {
      successRedirect: '/user/success',
      failureRedirect: '/user/register',
      failureFlash: false,
    })
);


router.get('/register', (req,res) =>{
  res.render('index.html.ejs',{csrfToken: req.csrfToken()});
});

router.get('/success', (req,res) =>{
  res.render('success.html.ejs');
});


router.post('/login', (req, res) => {

  User.findOne({ email: req.body.email },function(err, user){
     
     if(err){
      console.log(err);
      return;
     }
     
     if(user){      
        user.comparePassword(req.body.password, function(err, isMatch) {
          console.log(isMatch);
          if(isMatch == true){
            console.log("logged in");
            res.send();
          }else {
           console.log("failed login");
          }
        });
     }
     else{
      console.log("user not found");
      res.status = 404;
     }
  });
});

module.exports = router;