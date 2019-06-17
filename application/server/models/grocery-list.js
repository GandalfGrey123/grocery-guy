import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

var GroceryListSchema = new Schema({
	items: [{
		type: Schema.Types.ObjectId,
		ref: 'GroceryItem' 
   }],
});

export default model('GroceryList', GroceryListSchema);