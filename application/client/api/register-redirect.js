const open = require('open');

let registerButton = document.getElementById("registerButton");
registerButton.addEventListener('click', async (e) => {
  e.preventDefault()
   await open(`http://${api_config.environment}/user/login`); 
})