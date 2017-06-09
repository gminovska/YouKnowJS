const express = require('express');
const path = require('path');
const config = require('./config');


const app = express();

app.use(express.static(path.join(__dirname, 'build')));

/**
 * APIs and other request handlers
 * All request handlers should originate from '/api' path
 */

var quizzes = {
  data: [
    {
      id: 1,
      name: "Scope & Closures"
    },
    {
      id: 2,
      name: "Up & Going"
    }
  ]
}
app.get('/api/allquizzes', (req, res) => {
  res.json(quizzes);
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
