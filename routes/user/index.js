const router = require('express').Router();
const ctrl = require('./user.ctrl');

router
  .get('/check', ctrl.checkWallet)
  .post('/register', ctrl.registerWallet)
  .get('/nickname', ctrl.getNickname);

module.exports = router;
