var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var MealListSchema = new Schema({
	mealName: {
		type: String, 
		required:true
	},
	
	items: [{
		 type: Schema.Types.ObjectId,
		 ref: 'GroceryItem' 
	}],

	mealHour: {
		type: String,
		required: true
	}	
});

module.exports = mongoose.model(`MealList`, MealListSchema);