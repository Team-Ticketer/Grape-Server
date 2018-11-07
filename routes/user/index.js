const router = require('express').Router();
const ctrl = require('./user.ctrl');

router.post('/register', ctrl.registerWallet)
  .get('/nickname', ctrl.getNickname);

module.exports = router;
