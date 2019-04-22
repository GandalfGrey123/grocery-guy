const open = require('open');

let registerButton = document.getElementById("registerButton");
registerButton.addEventListener('click', async (e) => {
  e.preventDefault()
   await open('http://localhost:5000/user/register-form-show'); 
})