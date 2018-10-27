const router = require('express').Router();
const ctrl = require('./ticket.ctrl');

router.get('/', ctrl.getTicketList)
  .post('/', ctrl.buyTicket)
  .post('/', ctrl.buyTicket);

module.exports = router;
