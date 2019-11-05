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
        message: info ? info.message: 'Login failed, some credential(s) is not right',
        user
      });
    }

    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err);
      }

      console.log(user);
      const token = jwt.sign(JSON.stringify(user[0]), 'JWT_Token');
      // return res.json({user: {
      //   idUser: user[0].idUser,
      //   username: '',
      //   description: ''
      //  },token
      // });
      return res.json({user: user[0], token});
    });
  })(req, res);
});


router.post('/updateprofile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    usermodel
      .update(req.body.data)
      .then(event => {
        res.status(200);
      })
      .catch(next);
  }
);

router.post('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.json({data: req.user[0]});
  }
);


module.exports = router;