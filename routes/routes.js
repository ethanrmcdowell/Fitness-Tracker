const express = require('express');
const Router = express.Router();
const path = require('path');

// Router.get('/', function (req, res) {
//   res.send('Hello, is this thing working?');
// });

Router.use('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = Router;
