const mongoose = require('mongoose');

const Ticket = mongoose.Schema({
  ticketId: String,
  concertId: String,
  ticketName: String,
  walletAddress: String,
  isUsed: Boolean,
});

module.exports = mongoose.model('Tickets', Ticket);
