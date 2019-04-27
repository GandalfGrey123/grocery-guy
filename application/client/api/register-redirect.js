const open = require('open');
var api_config = require('./config/api.config');

let registerButton = document.getElementById("registerButton");
registerButton.addEventListener('click', async (e) => {
  e.preventDefault()
   await open(`http://${api_config.registration}`); 
})