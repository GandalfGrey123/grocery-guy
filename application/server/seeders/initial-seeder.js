const mongoose = require('mongoose');
var MealTime = require('../models/meal-time');

const dbUrl = 'mongodb://localhost:27017/grocery-guy';
mongoose.connect(dbUrl,{ useNewUrlParser: true })
  .then(() =>  console.log(dbUrl + 'seeder connection succesful!'))
  .catch((err) => console.error(err));

MealTime.create({ 
	mealHour: 'BREAKFAST' 

}, function (err, small) {
  if (err) return handleError(err);
  console.log('breakfast meal time created' );
});

MealTime.create({ 
	mealHour: 'LUNCH' 

}, function (err, small) {
  if (err) return handleError(err);
  console.log('lunch meal time created' );
});

MealTime.create({ 
	mealHour: 'DINNER' 

}, function (err, small) {
  if (err) return handleError(err);
  console.log('dinner meal time created' );
});

MealTime.create({ 
	mealHour: 'SNACK' 

}, function (err, small) {
  if (err) return handleError(err);
  console.log('snack meal time created' );
});
