const mysql = require('mysql');
const config = require('./src/config');

const pool = mysql.createPool(config.orm);

const query = (sqlString, values = []) =>
  new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        return reject(err);
      }

      conn.query(sqlString, values, (error, rows, fields) => {
        conn.release();
        if (!error) {
          return resolve({
            rows,
            fields
          });
        }
      });

      conn.on('error', connError => reject(connError));
    });
  });

module.exports = {
  query,
  pool
};
