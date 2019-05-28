const process = require('process');
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const session = require('express-session');

const userRouter = require('./routes/user-router');
var pjson = require('./package.json');

var app = express();

const dbUrl = 'mongodb://localhost:27017/grocery-guy';
mongoose.connect( dbUrl,{ 
	  useNewUrlParser: true,
	  useFindAndModify: false,
	  useCreateIndex: true,
	})
  	 .then(() =>  console.log(dbUrl + 'connection succesful!'))
  	 .catch((err) => console.error(err));
   
app.set(`view engine`, `ejs`);

app.use(express.static(__dirname + '/views'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());    

app.use(session({
	secret: '###10101010###', 
	resave: false , 
	saveUninitialized: false
}))

app.use('/user', userRouter);


app.listen(5000, '127.0.0.1', () => {
    console.log('the ' + pjson.name + ' server is listening on 127.0.0.1:5000');
});



