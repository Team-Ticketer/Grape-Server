const router = require('express').Router();
const ctrl = require('./ticket.ctrl');

router.get('/', ctrl.getTickets)
  .post('/', ctrl.registerOwner);

module.exports = router;
