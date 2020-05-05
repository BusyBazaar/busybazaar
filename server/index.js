
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hjjinnie:Codesmith@cluster0-bdriw.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
});

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