const express = require('express');

const router = express.Router();

router
  .use('/concert', require('./concert'));

module.exports = router;
