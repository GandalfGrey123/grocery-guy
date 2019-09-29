const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroceryItem = new Schema({
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

const GroceryListSchema = new Schema({
   title: {
	 type: String, 
	 required:true
   },
   
   items: [GroceryItem],

   created_at: { 
   	 type: Date 
   	},

   updated_at: { 
     type: Date 
   },
});

GroceryListSchema.pre('save',function(next) {
	date = new Date(); 
	//fix date to time format here
	//date = fixDateFormat(new Date());

	if(!this.created_at){
	 this.created_at = date;
	}

	this.updated_at = date;
	next();
});

module.exports = mongoose.model('GroceryList', GroceryListSchema);