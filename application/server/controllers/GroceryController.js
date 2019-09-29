const User = require('../models/user');
const GroceryList = require('../models/grocery-list');

const GroceryController = {
    addNewList: (req, res) => {
        User.findOne({
            sessionToken: req.body.authToken,
            email: req.body.userEmail,
        }, (err, user) => {

            if (err) {
                res.status(500).json({ isValid: false });
                return;
            }
            if (!user) {
                //user not found , auth token is bad or expired
                res.status(401).json({ isValid: false });
                return
            }

            GroceryList.create({
                title: req.body.groceryTitle,
            }, (err, newList) => {

                if (err) {
                    res.status(500).json({ isValid: false });
                    return;
                };

                user.groceryLists.push(newList)
                user.save()
                res.status(200).json({ isValid: true });
            });

        });
    },

    addNewListItem: (req, res) => {
        User.findOne({
            sessionToken: req.body.authToken,
            email: req.body.userEmail,
        }).populate({
            path: 'groceryLists',
        }).exec((err, user) => {

            if (err) {
                console.log(err);
                res.status(200).json({ isValid: false });
                return;
            }
            if (!user) {
                //user not found , auth token is bad or expired
                res.status(200).json({ isValid: false });
                return
            }

            var list = user.groceryLists.find((nextList) => {
                return nextList._id == req.body.groceryListId;
            });

            req.body.items.map((item) => {
                list.items.push(item);
            })

            list.save();
            user.save();
            res.status(200).json({ isValid: true, userData: user.groceryLists });
        })
    },

    getLists: (req, res) => {
        User.findOne({
            sessionToken: req.headers.authtoken,
            email: req.headers.useremail,
        }).populate({
            path: 'groceryLists',
        }).exec((err, user) => {
            if (err) {
                res.status(500).json({ isValid: false, userData: [] });
            }
            console.log(user.groceryLists)
            res.status(200).json({ isValid: true, userData: user.groceryLists });
        })
    }
}

module.exports = GroceryController;