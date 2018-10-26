const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGODB_URI);

app.get('/', (req, res) => res.status(200).send('<h1>Grape!</h1>'))
  .use('/', require('./routes'))
  .listen(8080);
