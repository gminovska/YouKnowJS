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
const Feedback = require('./models/feedback');
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

// DUNNO WAT TO DO
//make the user object globally available
// app.use(function(req, res, next){
//     res.locals.user = req.user;
//     next();
// });


//api routes
app.get('/api/quizzes', (req, res) => {

  Quiz.find()
    .select({
      questions: 0
    })
    .exec((err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    })
});

app.get('/api/quizzes/:id', (req, res) => {
  Quiz.findById(req.params.id)
    .select({
      questions: 1,
      _id: 0
    })
    .exec((err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    })
});

app.post('/api/quizzes/new', (req, res) => {
  Quiz.create(req.body, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send('yabadabadoooo');
    }
  });
});

 
 
app.post('/api/login',
  passport.authenticate('local'), (req, res) => {
    const user = {
      _id: req.user._id,
      quizzes: req.user.quizzes,
      username: req.user.username
    }

    res.json({user});
  });

app.post('/api/signup', (req, res) => {
  var newUser = new User({
    username: req.body.username
  });

  User.register(newUser, req.body.password, (err, result) => {
    if (err) {
      res.status(401).send({err});
    }
    else {
      req.login(result, (err => {
      if (err) console.log(err);

      const user = {
        _id: result._id,
        quizzes: result.quizzes,
        username: result.username
      }

      res.json({user});
      }));
    }
  });
});

app.get('/api/authenticate', (req, res) => {
  if (req.user) {
    const user = {
      _id: req.user._id,
      quizzes: req.user.quizzes,
      username: req.user.username
    }
    res.json(user)
  }
  else {
    res.json({user: false});
  }
})

app.get('/api/logout', (req, res) => {
  req.logout();
  res.json({user: false});
})
 
app.post('/api/results/new', (req, res) => {
  if (req.user) {
    User.findById(req.user._id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        result.quizzes.push(req.body);
        result.save();
        console.log("Score saved!");
      }
    });
  }
  res.json(req.user);
});

app.post('/api/feedback/new', (req, res) => {
  
  const data = {
    quizId: req.body.quizId,
    feedbackText: req.body.feedbackText,
    userId: req.user._id
  }

  Feedback.create(data, (err, result) => {
    if (err) {
      console.log(err);
    }
  })

  res.status(200).send();
})

app.get('/api/halloffame', (req, res) => {

  Quiz.find()
    .select({_id: 1})
    .exec((err, data) => {
      if (err) {
        console.log(err);
      } else {
        const quizIds = data.map(x => ({"$elemMatch" : {_id: x._id, score:1}}));
        User.find({"quizzes": {$all: quizIds}},
                  {username: 1, __v: 1}, 
                  {sort: {__v: 1}})
            .exec((err, data) => {
              if(err) {
                console.log(err)
              }
              else {
                res.json(data);
              }
            })
      }
    })

});

app.get('/api/scoreboard', (req, res) => {
  // TODO change the quizzes._id to something else. See also User model and Quiz component line 69
  User.findById(req.user._id)
    .populate('quizzes._id', '-_id name')
    .exec((err, result) => {
    if(err) {
      console.log(err)
      res.json({ errMsg: err})
    }
    else {
      console.log(result);
      res.json({ quizzes: result.quizzes});
    }
  })
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