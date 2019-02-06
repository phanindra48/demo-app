/**
 * Development environment settings
 *
 */

module.exports = {
  port: 5200,
  prefix: '/api',
  orm: {
    // adapter: 'mysql',
    connectionLimit: 100,
    host: 'localhost',
    database: 'chad',
    user: 'root',
    password: 'password'
  }
};
