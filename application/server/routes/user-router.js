const express = require('express');
const router = express.Router();
var User = require('../models/user');

var MealTime = require('../models/meal-time');


router.get('/register-form-show', (req,res) =>{
  res.render('index.html.ejs');
});

router.post('/register-form-submit',(req ,res)=>{

  //validate(req.body)

  User.create({ 
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  },(err, user) => {
      if(err) return handleError(err);
      res.status = 204;
      res.send('succesful!');
  });

  //want this to work instead, but couldnt get form name to
  //new User(req.body.registrationForm).save(function(err){  
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