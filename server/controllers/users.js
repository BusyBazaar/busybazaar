const { Users } = require('../models/model.js');
const bcrypt = require('bcryptjs');

const userController = {
  createUser: async (req, res, next) => {
    console.log('we are creating user')
    const {username, password} = req.body;
    console.log(req.body);

    const userExist = await Users.findOne({ username: username });
    if(userExist) return res.status(406).send('User already exists!');

    Users.create({
      username: username,
      password: password,
    }, async (err, user) => {
      if(err) 
      next(err);
      const token = await user.generateAuthToken() 
      res.locals.user = user;

      res.header('Authorization', token)

      return next();
    })
  },
  login: async (req, res, next) =>{
    let { username, password } = req.body;
    console.log('req.body', req.body)
    console.log(password)
    const user = await Users.findOne({username})
    if(!user){
      return res.status(406).send({error: 'Login failed! Check login credentials'});
    } else {
      bcrypt.compare(password, user.password)
      .then(async result => {
        if (!result) {
          return res.status(401).send({error: 'Login failed! Check login credentials'});
        } else {
          //user was found, compare the password to the hased one
          const token = await user.generateAuthToken()
          res.locals.user = user;

          console.log(user);

          res.header('Authorization', token);
          res.locals.token = token;
          
          return next();
          }  
        })
    }     
  },
}

module.exports = userController;
