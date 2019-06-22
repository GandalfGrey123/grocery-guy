var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GroceryItemSchema = new mongoose.Schema({
	name: {
	  type: String, 
	  required:true
	},
	
	quantity:{
	  type: Number, 
	  required:false,
	  default: 1,
	},

	store:{
	  type: String,
	  required:false	
	},
	description:{
	  type: String,
	  required:false
	}
});

module.exports = mongoose.model('GroceryItem', GroceryItemSchema);