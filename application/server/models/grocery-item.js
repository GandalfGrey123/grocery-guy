import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

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

export default model('GroceryItem', GroceryItemSchema);