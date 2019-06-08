const config = () => {
  let environment = {
    'env': 'localhost:5000',
    //'registration': '/userd/register',
    'login': '/userd/login',
    'mainViewInitialize': '/init',
  };
 return environment;
};

module.exports = config();