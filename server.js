const express = require('express');
const path = require('path');
const config = require('./config');
const credentials = require('./credentials');
// const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const assert = require('assert');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

MongoClient.connect(credentials.url, function(err, db) {
  assert.equal(null, err);
  // insertDocument(db, function() {
  //     db.close();
  // });
  console.log("Connected to the database");

  /**
 * APIs and other request handlers
 * All request handlers should originate from '/api' path
 */
//TODO: Use projection to get only the data needed to build the QuizGrid
  app.get('/api/quizzes', (req, res) => {
    var data = db.collection("quizzes").find({}).toArray((err, data) => {
      assert.equal(null, err);
      console.log(data);
       res.json(data);
    });
  
  });
  
  app.get('/api/quizzes/:id', (req, res) => {
    console.log(req.params.id);
    db.collection('quizzes').findOne({_id: new ObjectID(req.params.id) }, {name: 1, questions: 1, _id: 0})
    .then((response) =>{ res.json(response) })
    .catch((err)=> console.log(err))
  });
  /**
 * Send html file to the client, if nothing else was requested
 */
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  app.listen(config.PORT, () => {
    console.log(`Express listening on port ${config.PORT}. Enviroment is ${config.ENV}. Press CTRL + C to terminate.`);
  });
});

var insertDocument = function(db, callback) {
  db.collection('quizzes').insertOne(
    quizzes,
    function(err, result) {
      assert.equal(err, null);
      console.log("Inserted a document into the restaurants collection.");
      callback();
    });
};









