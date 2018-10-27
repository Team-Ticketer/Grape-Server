const express = require('express');

const router = express.Router();

router
  .use('/concert', require('./concert'))
  .use('/ticket', require('./ticket'));

module.exports = router;
