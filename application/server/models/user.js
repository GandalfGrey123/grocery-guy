var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  username: String,
  password: String,
},{
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);

