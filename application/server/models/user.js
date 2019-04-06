var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: String,  
  username: String,
  name: String,
  password: String,
},{
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);

