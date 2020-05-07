
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const mongoose = require('mongoose');
const auth = require('./routes/auth.js');
const product = require('./routes/product.js');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { Users } = require('./models/model.js');


//Use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
dotenv.config();

//Mongoose Connection
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
});

passport.use(new GoogleStrategy({
  clientID: '847716762760-r2u4k2nd66tk4tbebg6kpeftlvvbv2p8.apps.googleusercontent.com',
  clientSecret: 'GG5qhPwtgrvbrw8olumz9J_E',
  callbackURL: "http://localhost:8080"
  // callbackURL: `${process.env.SERVER_API_URL}/auth/google/callback`
},
function(accessToken, refreshToken, profile, done) {
     Users.findOne({ username: profile.id }, function (err, user) {
      if (err){
        return done(err);
      } 
      if (!user){
        user = new Users({
          username: profile.username,
          password: accessToken,
        });
        user.save(function(err){
          if (err) console.log(err);
          return done(err, user);
        })
      } else{
        return done(err, user);
      }
     });
  }
));


app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));


app.get('/auth/google/callback', 
passport.authenticate('google', { failureRedirect: '/auth/login' }),
function(req, res) {
  res.redirect('/');
});

//route handlers
app.use('/auth', auth);
app.use('/product', product);

app.use(express.static(path.resolve(__dirname, '../dist')));
//Main get request
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

//Error Handling
app.all('*', (req, res) => {
  return res.status(404).send('Oops! Something went wrong')
})

//Global Error Handler
app.use((err, req, res) => {
  return res.status(500).json({ message: err });
});



app.listen(port, () => console.log('Listening on port ' + port ));