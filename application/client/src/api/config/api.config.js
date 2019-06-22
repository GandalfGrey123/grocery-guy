const config = () => {
  let environment = {
    'env': 'localhost:5000',
    'registration': '/userw/register',
    'login': '/userd/login',
    'auth':'/userd/authUser',
    'newGrocery': '/grocery/new',
    'allLists': '/grocery/all',
    'addItemsGroceryList': '/grocery/items/add',
  };
 return environment;
};

module.exports = config();