
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const mongoose = require('mongoose');
const auth = require('./routes/auth.js');

//Mongoose Connection
mongoose.connect('mongodb+srv://hjjinnie:Codesmith@cluster0-bdriw.mongodb.net/BusyBazaar?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
});

//Use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route handlers
app.use('/auth', auth);

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