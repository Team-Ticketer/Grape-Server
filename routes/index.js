const express = require('express');

const router = express.Router();

router
  .use('/concert', require('./concert'))
  .use('/user', require('./user'));

module.exports = router;
