const express = require('express');
const router = express.Router();
var User = require('../models/user');
var GroceryList = require('../models/grocery-list');
var GroceryItem = require('../models/grocery-item');
const { authIsValid } = require('../utils/users');

router.post('/new', (req, res) => {
  User.findOne({ 
    sessionToken: req.body.authToken,
    email: req.body.userEmail,
  },(err,user)=>{
     
     if(err){
      console.log(err);
      return;
     }     
     if(!user){
      //user not found , auth token is bad or expired
      res.status(200).json({isValid: false});
      return
     }

      GroceryList.create({ 
        title: req.body.groceryTitle,
      },(err, newList) => {
          if(err) res.status(500).json({error: 'failed'});              
            user.groceryLists.push(newList)
            user.save()
            res.status(200).json({});
      });

  });
});

router.post('/items/add', (req, res) => {

   User.findOne({
    sessionToken: req.body.authToken,
    email: req.body.userEmail,
  }).populate({
    path:'groceryLists',
  }).exec((err, user)=>{

     if(err){
      console.log(err);
      res.status(200).json({error: false});      
      return;
     }
     if(!user){
       console.log('error')
      //user not found , auth token is bad or expired
      res.status(200).json({error: false});
      return
     }

     var list = user.groceryLists.find((nextList) => {  
       return nextList._id == req.body.groceryListId;
     });

     GroceryItem.insertMany(
      req.body.items
     ).then(function(newItems ) {

       //concat the new items to the GroceryList.items
       newItems.map((item) => { list.items.push(item) })     
       list.save();
       user.save();
   
       res.status(200).json({ userData: user.groceryLists });
     }); 
  })
  
});

router.get('/all', (req,res) => {
  User.findOne({
    sessionToken: req.headers.authtoken,
    email: req.headers.useremail,
  }).populate({
    path:'groceryLists',
  }).exec((err, user)=>{
    //if(err) do something
     res.status(200).json({ userData: user.groceryLists });
  })
});

module.exports = router;