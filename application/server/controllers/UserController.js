const User = require('../models/user');
const { generateSessionToken } = require('../utils/validation/users');

const UserController = {

    authorize: (req, res) => {
        User.findOne({
            email: req.headers.sessionemail
        }, function(mongoErr, user) {
            if (mongoErr) {
                res.status(500).json({
                    serverError: true,
                    isValid: false
                });
            }

            if (user) {
                res.status(200).json({
                    isValid: req.headers.sessiontoken == user.sessionToken
                });
            } else {
                res.status(200).json({
                    isValid: false
                });
            }
        });
    },

    webRegistration: (req, res) => {
        User.findOne({
            $or: [{ 'email': req.body.email },
                { 'username': req.body.username }
            ]
        }, (err, user) => {

            if (err) {
                //ADD CODE - serve error mongoose query returned error
                res.status(500).json({ serverError: true });
            };

            if (!user) {
                User.create({
                    email: req.body.email,
                    username: req.body.username,
                    name: req.body.name,
                    password: req.body.password,
                }, (err, user) => {

                    if (err) {
                        //ADD CODE - model returns err object parse and send in response.
                        res.status(401).json({
                            errors: [
                                err.formField,
                                err.errorMessage
                            ],
                            serverError: false,
                            email: null,
                            username: null
                        });
                    }

                    res.status(200).render('success.html.ejs', { email: user.email, username: user.username });
                });
            }
        });
    },

    desktopLogin: (req, res) => {
        User.findOne({
            email: req.body.email.toUpperCase()
        }, function(mongoErr, user) {

            if (mongoErr) {
                res.status(500).json({ serverError: true, token: null });
                return;
            }

            if (user) {               
                user.comparePassword(req.body.password, function(err, isMatch) {
                    if (isMatch === true) {
                        //need to return oAuth token and client will save it in localstorage          
                        let userSessionToken = generateSessionToken(15, user.id);
                        user.set('sessionToken', userSessionToken);
                        user.save().then(() => {
                            res.status(200)
                                .json({ token: userSessionToken });
                        });

                    } else {
                     //passwords did not match
                     res.status(401).json({ token: null });
                    }
                });
            } else {
                res.status(500).json({ serverError: true, token: null });
            }
        });
    },

};

module.exports = UserController;