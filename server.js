const express = require('express');
const path = require('path');
const passport = require('passport');
const app = express();
const port = process.env.PORT || 5000;
var user = require('./routes/user');

app.use(express.json());

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use('/user', user);

app.get('/home', passport.authenticate('jwt', { session: false }));