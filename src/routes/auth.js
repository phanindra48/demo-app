const AuthController = require('../controllers/AuthController');

module.exports = [
  {
    path: 'projects',
    method: 'get',
    action: AuthController.find
  },
  {
    path: 'users',
    method: 'get',
    action: AuthController.find
  },
];
