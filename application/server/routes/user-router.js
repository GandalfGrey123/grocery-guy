const express = require('express');
const router = express.Router();
var User = require('../models/user');

router.get('/all', (req, res) => {
  User.find({}, 'username name email').select('-_id').exec(function( err, users){
  	if(err){
      console.log(err);
      return;
    }
    
    if(users.length){
  	  res.json(users);
    }else{
      res.status = 404;
    }
  	
  });
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


router.post('/new', (req, res) => {

  new User(req.body.registrationForm).save(function(err){
     
      //if post success , else failure
   	  if(err){
   	   console.log("User registration failed");
   	   res.status = 200;
   	  }else{
   	   console.log("User registration success");
   	   res.status = 204;
   	  }
     res.send();
  });
});

module.exports = router;
