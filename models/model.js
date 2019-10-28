const db = require('../db/db');

const userModel = {
  findOne({username, password}) {
    return db.load(
      `SELECT * FROM User WHERE username='${username}' AND password='${password}'`
    );
  },
  findOneById(id) {
    return db.load(`SELECT * FROM User WHERE idUser=${id}`);
  },
  add(user) {
    return db.insert('User', user);
  }
};

module.exports = userModel;