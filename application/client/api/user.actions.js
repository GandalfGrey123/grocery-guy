var request = require('request');
var api_config = require('./config/api.config');


let userLoginForm = document.getElementById("userLoginForm");
userLoginForm.addEventListener('submit', function(event) {
	event.preventDefault();
	const formData = new FormData(event.target);

	postData = {};

    for (var entry of formData.entries()){
      postData[entry[0]] = entry[1];
    }

    request.post({
       url:`http://${api_config.environment}/user/login`,
       json: postData,
       
     },function (error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body);
          }
      }
	);
});



let userSignUpForm = document.getElementById("userSignUpForm");
userSignUpForm.addEventListener('submit', function(event) {
	event.preventDefault();
	const formData = new FormData(event.target);

	postData = {};

	//validate while filling postData 
    for (var entry of formData.entries()){
      
      //filter out extra confirm password and rename json key
      if(entry[0] != 'password2'){
       if(entry[0] == 'password1'){
         postData['password'] = entry[1];
       }else{
       	  postData[entry[0]] = entry[1];
       }        
      }
    }

   request.post({
       url:`http://${api_config.environment}/user/new`,
       json: {registrationForm: postData},

     },function (error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body);
          }else{
          	alert("user registration successful!");
          }
      }
	);
});



let getAllButton = document.getElementById("getAllButton");
getAllButton.addEventListener('click', function(){
	// get request
	request.get({
		 url:`http://${api_config.environment}/user/all`,
	});
});
