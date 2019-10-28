var mysql = require('mysql');

var createConnection =  mysql.connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'btcn06web'
});

module.exports = {
    load: sql => {
      return new Promise((resolve, reject) => {
        const connection = createConnection();
        connection.connect();
        connection.query(sql, (error, results, _fields) => {
          if (error) reject(error);
          resolve(results);
        });
        connection.end();
      });
    },
    insert: (tableName, obj) => {
      return new Promise((resolve, reject) => {
        const connection = createConnection();
        const sql = `INSERT INTO ${tableName} set ?`;
        connection.connect();
        connection.query(sql, obj, (error, results, _fields) => {
          if (error) reject(error);
          resolve(results);
        });
        connection.end();
      });
    }
  };
  