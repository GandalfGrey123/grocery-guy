const express = require('express');
const router = express.Router();
var User = require('../models/user');

var csurf = require('csurf');
var csrfProtection = csurf();
router.use(csrfProtection);


//registration and login routes
router.get('/register', (req,res) =>{
  res.render('index.html.ejs',{csrfToken: req.csrfToken()});
});


router.post('/register', (req,res) =>{  
 User.findOne( { $or :
    [{'email': req.body.email} , 
    {'username':req.body.username}]}, 
 
 (err, user)=>{
  
    if(err) res.status(400).json({error: 'failed'});
    
     if(!user){
      User.create({ 
         email: req.body.email,
         username: req.body.username,
         name: req.body.name,                        
         password: req.body.password,
       },(err, user) => {
            if(err) res.status(500).json({error: 'failed'});              
            res.status(200).render('success.html.ejs');
       });
    } 
 });
})



//registration success view 
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

          //need to return oAuth token and client will save it in localstorage          
            res.status(200).send('success');
          }else {
           res.status(400).json({error: 'failed'});
          }
        });
     }
     else{
      console.log("user not found");
      res.status(401).json({error: 'failed'});
     }
  });
});

module.exports = router;