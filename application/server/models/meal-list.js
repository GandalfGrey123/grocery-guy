import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

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

export default model(`MealList`, MealListSchema);