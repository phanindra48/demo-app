/* eslint-disable prettier/prettier */
const orm = require('../../orm');

module.exports = {
  /**
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [All Projects]
   */
  async find(req, res) {
    const { limit = 30, skip = 0 } = req.query;

    return orm.query('SELECT * FROM ilance_users')
      .then(({rows, fields}) => {
        res.json(rows);
      })
      .catch(res.serverError);
  },

  async login(req, res) {
    const { username, password } = req.body || {};
    if (!username || !password) {
      return res.badRequest({
        message: 'Username or Password is missing!'
      });
    }
    return res.ok({
      message: 'User account created!'
    });
  }
};
