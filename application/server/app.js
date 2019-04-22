const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
var app = express();
var pjson = require('./package.json');
const userRouter = require('./routes/user-router');


const dbUrl = 'mongodb://localhost:27017/grocery-guy';
mongoose.connect(dbUrl,{ useNewUrlParser: true })
  .then(() =>  console.log(dbUrl + 'connection succesful!'))
  .catch((err) => console.error(err));
   
app.set(`view engine`, `ejs`);


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());    
app.use('/user', userRouter);

app.listen(5000, '127.0.0.1', () => {
    console.log('the ' + pjson.name + ' server is listening on 127.0.0.1:5000');
});

