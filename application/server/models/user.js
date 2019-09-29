const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const { isValidEmail, isValidPassword } = require('../utils/validation/users');
const NEW_USER_ERRORS = require('../utils/errors/userErrors');
const SERVER_ERRORS = require('../utils/errors/serverErrors');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        uppercase: true,
        index: {
            unique: true
        }
    },
    username: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    name: String,
    password: { type: String, required: true },
    sessionToken: { type: String, required: false },

    groceryLists: [{
        type: Schema.Types.ObjectId,
        ref: 'GroceryList',
    }],

    mealLists: [{
        type: Schema.Types.ObjectId,
        ref: 'MealList',
    }],

}, {
    timestamps: true
});

UserSchema.pre('save', function(next) {
    let user = this;

    //case - creating new user
    if (user.isNew) {
        if (!isValidEmail(user.email)) {
            return next(NEW_USER_ERRORS.invalidEmail)
        }

        if (!isValidPassword(user.password)) {
            return next(NEW_USER_ERRORS.invalidPassword);
        }
    }


    //case - check for password (new or updated)
    if (user.isModified('password')) {
        bcrypt.genSalt(10, function(err, salt) {

            if (err) {
              return next(SERVER_ERRORS.passwordSalt);
            }

            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(SERVER_ERRORS.passwordHash);
                user.password = hash;
            })
        });
    }

  next();
});

//checks login
UserSchema.methods.comparePassword = function(password, cb) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) {
            return cb(SERVER_ERRORS.generalError);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);