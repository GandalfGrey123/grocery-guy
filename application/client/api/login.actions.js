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
       url:`http://${api_config.registration-url}`,
       json: postData,
       
     },function (error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body);
          }
       }
	  );
});