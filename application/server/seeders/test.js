const mongoose = require('mongoose');
var User = require('../models/user');

const dbUrl = 'mongodb://localhost:27017/grocery-guy';
mongoose.connect(dbUrl,{ 
	useCreateIndex: true,
	useNewUrlParser: true 
})
  .then(() =>  console.log(dbUrl + 'seeder connection succesful!'))
  .catch((err) => console.error(err));
