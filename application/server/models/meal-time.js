var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var mealTimeSchema = new Schema({
	mealHour: {
		type: String,
		unique : true, 
		required : true, 
		dropDups: true 
	},

	//MealTimes hasMany recipes
	recipes:[{
		 type: Schema.Types.ObjectId,
		 ref: 'MealList' 
	}],
});

module.exports = mongoose.model(`MealTime`, mealTimeSchema);