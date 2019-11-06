var mysql = require('mysql');

var createConnection = () => {
  return mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'bearnies',
    password: 'khanghi1',
    database: 'btcn06web'
  });
}

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
        const sql = `INSERT INTO ${tableName} SET ?`;
        connection.connect();
        connection.query(sql, obj, (error, results, _fields) => {
          if (error) reject(error);
          resolve(results);
        });
        connection.end();
      });
    },

    update: (tableName, obj) => {
      return new Promise((resolve, reject) => {
        const connection = createConnection();
        connection.connect();

        var id = obj.id;
        delete obj.id;
        var sql = `UPDATE ${tableName} SET ? WHERE idUser = ?`;

        connection.query(sql, [obj, id], (error, results, fields) => {
        if (error) reject(error);
        resolve(results.changedRows);
        });
        connection.end();
      });
    },
  };
  