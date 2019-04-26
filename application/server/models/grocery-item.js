var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var GroceryItemSchema = new Schema({
	name: {
		type: String, 
		required:true
	},
	description:{
		type: String,
		required:false
	}
});

module.exports = mongoose.model('GroceryItem', GroceryItemSchema);