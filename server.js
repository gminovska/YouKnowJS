const express = require('express');
const path = require('path');
const config = require('./config');
const credentials = require('./credentials');
const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');
const assert = require('assert');
const app = express();

//models
const Quiz = require('./models/quiz');
const populateDB = require('./data');

//setup
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//database connection
mongoose.connect(credentials.url);
//populate database
populateDB();
//api routes
app.get('/api/quizzes', (req, res) => {

  Quiz.find()
    .select({ questions: 0})
    .exec((err, data)=>{
      if(err) {
        console.log(err);
      } else {
         res.json(data);
      }
    })
});

app.get('/api/quizzes/:id', (req, res)=>{
  Quiz.findById(req.params.id)
    .select({questions: 1, _id: 0})
    .exec((err, data)=>{
      if(err) {
        console.log(err);
      } else {
        res.json(data);
      }
    })
});

app.post('/api/quizzes/new', (req, res) => {
  console.log(req.body);
  res.send('yabadabadoooo')
})
/**
 * Send html file to the client, if nothing else was requested
 */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(config.PORT, () => {
  console.log(`Express listening on port ${config.PORT}. Enviroment is ${config.ENV}. Press CTRL + C to terminate.`);
});