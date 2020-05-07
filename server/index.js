
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const mongoose = require('mongoose');
const auth = require('./routes/auth.js');
const product = require('./routes/product.js');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

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
  return res.status(404).send('Page not found')
})

//Global Error Handler
app.use((err, req, res) => {
  return res.status(500).json({ message: err });
});



app.listen(port, () => console.log('Listening on port ' + port ));