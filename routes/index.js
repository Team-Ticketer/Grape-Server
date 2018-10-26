const { router } = require('express');

router.use('/user', require('./user'))
  .use('/concert', require('./concert'));

module.exports = router;
