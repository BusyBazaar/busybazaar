const express = require('express');
const router = express.Router();
const { createUser, login } = require('../controllers/users.js');

router.post('/register', createUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

router.post('/login', login, (req, res) => {
  return res.status(200).send('Login successfully');
});

module.exports = router;