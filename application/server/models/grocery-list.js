var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var GroceryListSchema = new Schema({
	name: {
		type: String, 
		required:true
	},	
	items:{ 
		type: Array, 
		default: []
	}
});

module.exports = mongoose.model('GroceryList', GroceryListSchema);

