var User = require('../../models/user');

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const PASSWORD_MIN_LENGTH = 12;
const PASSWORD_MAX_LENGTH = 36;

//change to use something else besides id later
const generateSessionToken = (length,id) => {
  return (
  	(Math.random(0).toString(36).slice(2,length) + id.toString()).substr(0,length)
  );
};

const isValidEmail = (email) => {
 return EMAIL_REGEX.test(email);
};


const isValidPassword = (password) => {
 if(password.length <= PASSWORD_MIN_LENGTH || password.length >= PASSWORD_MAX_LENGTH){
  return false;
 }

 return true;
}

module.exports={generateSessionToken, isValidEmail, isValidPassword}