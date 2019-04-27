var request = require('request');
var api_config = require('./config/api.config');
var axios = require("axios");

axios({
  method: 'get',
  url: "http://localhost:5000/user/csrftkn",  
}).then((res) => {
    console.log(res.data.csrfToken);
});