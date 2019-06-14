const config = () => {
  let environment = {
    'env': 'localhost:5000',
    'registration': '/userw/register',
    'login': '/userd/login',
    'auth':'/userd/authUser',
  };
 return environment;
};

module.exports = config();