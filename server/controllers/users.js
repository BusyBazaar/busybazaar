const Users = require('../models/model.js');
const bcrypt = require('bcryptjs');

const userController = {
  createUser: (req, res, next) => {
    console.log('we are creating user')
    const {username, password} = req.body;
    console.log(req.body);

    Users.create({
      username: username,
      password: password,
    }, async (err, user) => {
      if(err) next(err);
      res.locals.user = user;
      next();
    })
  },
  login: async (req, res, next) =>{
    let { username, password } = req.body;
    console.log('req.body', req.body)
    console.log(password)
    const user = await Users.findOne({username})
    console.log("this is user:", user)
    if (!user){
      console.log('No user')
      return res.status(401).send({error: 'Login failed! Check authentication credentials'})
    } else {
      bcrypt.compare(password, user.password)
      .then(async result => {
        if (!result) {
          console.log('password does not match');
          return next()
        }else{
          //user was found, compare the password to the hased one
          console.log('user was found')
        //   const token = await user.generateAuthToken() 
          res.locals.user = user;
