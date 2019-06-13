const mongoose = require('mongoose');
var User = require('../models/user');

const dbUrl = 'mongodb://localhost:27017/grocery-guy';
mongoose.connect(dbUrl,{
 useCreateIndex: true,
 useNewUrlParser: true 
})
  .then(() =>  console.log(dbUrl + 'seeder connection succesful!'))
  .catch((err) => console.error(err));

// User.create({ 
// 	 email: 'req.body.email',
//    username: 'req.body.username',
//    name: 'req.body.name',                        
//    password: 'req.body.password',

// }, function (err) {
//   if (err) return handleError(err);
//   console.log('created' );
// });



  User.findOne({ email: 'req.body.email' },function(err, user){
      console.log(user.username)

  });


