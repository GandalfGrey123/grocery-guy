//logged in actions
var request = require('request');
var api_config = require('./config/api.config');


let mainSearchButton = document.getElementById("search");
mainSearchButton.addEventListener('click', function(event) {
	event.preventDefault();
});