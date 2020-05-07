const express = require('express');
const router = express.Router();
const { createUser, login } = require('../controllers/users.js');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

router.post('/register', createUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

router.post('/login', login, (req, res) => {
  console.log('TOKEN', res.locals.token)
  return res.status(200).json(res.locals.token);
});

router.get('/google', passport.authenticate('google', {session:false, scope: ['https://www.googleapis.com/auth/userinfo.profile'] }));

router.get('/google/callback', passport.authenticate('google', {session:false, failureRedirect: '/auth/login' }),async function(req, res) {
  const token = await req.user.generateAuthToken()
  // res.header('Authorization', token);
  // res.cookie('Authorization', token)
  return res.redirect('http://localhost:8080/login?token='+token);
});



module.exports = router;