const passport = require('passport');
const User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, done) => {
  done(null , user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id,(err, user)=>{
  	done(err, user);
  });
});

passport.use('signup',
	new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback : true,
	},(req, email, loginPassword, done) =>{

		User.findOne( { $or :[{'email': email} , {'username':req.body.username}] } , (err, user)=>{
			if(err){
			 console.log(err);
			 return(err);
			}

			if(!user){
			   User.create({ 
			   	 email: req.body.email,
			   	 username: req.body.username,
   				 name: req.body.name,   				    				 
   				 password: req.body.password,
 			   },(err, user) => {
      				if(err) return handleError(err);
      				return done(null,user);
  			   });			
			}

			else{
			 console.log('exists');		
			 return done(null,false, {message: 'exists'});
			}
		});
	}
));


