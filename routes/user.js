const express = require('express');
const router = express.Router();
var usermodel = require('../models/model');
var passport = require('../middlewares/passport');
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res, next) => {
  console.log(req.body);
  const newUser = {
    username: req.body.username,
    password: req.body.password
  };
  usermodel
    .add(newUser)
    .then(event => {
      res.status(200);
    })
    .catch(next);
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, function(err, user, info) {
    console.log(err);
    if (err || !user) {
      return res.status(400).json({
        message: 'Login failed, some credential(s) is not right',
        user
      });
    }

    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err);
      }

      console.log(user);
      const token = jwt.sign(JSON.stringify(user[0]), 'your_jwt_secret');
      return res.json({user: user[0], token});
    });
  })(req, res);
});

module.exports = router;