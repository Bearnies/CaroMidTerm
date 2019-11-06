const db = require('../db/db');

const userModel = {
  findOne({username, password}) {
    return db.load(
      `SELECT * FROM user WHERE username='${username}' AND password='${password}'`
    );
  },

  findOneById(id) {
    return db.load(`SELECT * FROM user WHERE idUser=${id}`);
  },

  add(user) {
    return db.insert('user', user);
  },
  
  update: function(user) {
    return db.update('user', user);
  }
};

module.exports = userModel;