const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

app
  .use(bodyparser.json())
  .use(bodyparser.urlencoded({ extended: true }))
  .use('/', require('./routes'))
  .get('/', (req, res) => res.status(200).send('<h1>Grape!</h1>'))
  .listen(process.env.PORT || 8080);
