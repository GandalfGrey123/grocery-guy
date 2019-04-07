const express = require('express');
const router = express.Router();
var User = require('../models/user');

router.get('/all', (req, res) => {
  User.find({}, 'username name email').select('-_id').exec(function( err, users){
  	if(err){console.log(err);}
  	else{
  	 res.json(users);
  	}
  });
});

router.post('/login', (req, res) => {


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

  res.send();
});

module.exports = router;
