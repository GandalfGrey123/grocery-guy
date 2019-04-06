const express = require('express');
const router = express.Router();
var User = require('../models/user');

router.get('/all', (req, res) => {
  User.find({}).exec(function( err, employees){
  	if(err){console.log(err);}
  	else{
  	 res.json(employees);
  	}
  });
});


router.post('/new', (req, res) => {
 	

  //if post success , else failure
   if(true){
    res.status = 204;
   }else{
    res.status = 200;
   }
  
  res.send();
});

module.exports = router;
