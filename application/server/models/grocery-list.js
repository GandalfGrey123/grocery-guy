var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GroceryListSchema = new mongoose.Schema({
   title: {
	 type: String, 
	 required:true
   },
   
   items: [{
	 type: Schema.Types.ObjectId,
	 ref: 'GroceryItem' 
   }],

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