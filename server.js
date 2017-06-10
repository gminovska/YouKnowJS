const express = require('express');
const path = require('path');
const config = require('./config');
const credentials = require('./credentials');
// const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const assert = require('assert');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

MongoClient.connect(credentials.url, function(err, db) {
  assert.equal(null, err);
  // insertDocument(db, function() {
  //     db.close();
  // });
  console.log("Connected to the database");
  app.get('/api/allquizzes', (req, res) => {
    var data = db.collection("quizzes").find({}).toArray((err, data) => {
      assert.equal(null, err);
      console.log(data);
       res.json(data);
    });
   
  });

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





/**
 * APIs and other request handlers
 * All request handlers should originate from '/api' path
 */

var quizzes = {
  id: 1,
  name: "Scope & Closures",
  description: "Bla bla",
  imageURL: "http://someplace.com/",
  numberOfQuestions: 23,
  book: "You Don't Know JS",
  questions: [{
    question: "What type of scope does JS have?",
    type: 'regular',
    answers: [{
        text: "Just block scope",
        correct: false
      },
      {
        text: "Just function scope",
        correct: false
      },
      {
        text: "Both block and function scope",
        correct: true
      }
    ],
    explanation: "Bla bla"
  }]
}

/**
 * Send html file to the client, if nothing else was requested
 */