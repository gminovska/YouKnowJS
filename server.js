const express = require('express');
const path = require('path');
const config = require('./config');
const credentials = require('./credentials');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
// const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');
const assert = require('assert');
const app = express();

//models
const Quiz = require('./models/quiz');
const User = require('./models/user');
const populateDB = require('./data');

//general setup
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//passport configuration
app.use(require('express-session')({
    secret: "The earth is flat",
    resave: false,
    saveUninitialized: false
    //TODO include secure cookies in production
}));
app.use(passport.initialize());
app.use(passport.session());
//passport-local-mongoose setup
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//database connection
mongoose.connect(credentials.url);
//populate database
// populateDB();

//make the user object globally available
app.use(function(req, res, next){
    res.locals.user = req.user;
    next();
});


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
  // console.log(req.body);
  Quiz.create(req.body, (err, result) =>{
    if(err) {
      console.log(err);
    } else {
      res.send('yabadabadoooo');
    }
  });  
});

app.post('/api/login', (req, res) => {
  console.log('We got a request!!!!!! yahooo!')
  console.log(req.body.email);
  res.send("Yoyoyo dawg!")
})

app.post('/api/signup', (req, res) => {
   var newUser = new User({
     username: req.body.email
   });

   User.register(newUser, req.body.password, (err, newUser) =>{
      if(err) {
        console.log(err);
        res.send(err.message);
      } 
      //currently not working...
      passport.authenticate('local')(req, res, () => {
            console.log(user);
            res.redirect('/quizzes');            
        });
   });  
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