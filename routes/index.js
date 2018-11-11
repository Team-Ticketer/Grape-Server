const express = require('express');

const router = express.Router();

router
  .use('/concert', require('./concert'))
  .use('/user', require('./user'))
  .use('/ticket', require('./ticket'));

module.exports = router;
