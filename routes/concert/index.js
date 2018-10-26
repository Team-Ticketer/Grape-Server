const { router } = require('express');
const ctrl = require('./concert.ctrl');

router.get('/login', ctrl.login);

module.exports = router;
