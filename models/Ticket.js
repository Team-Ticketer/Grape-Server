const mongoose = require('mongoose');

const Ticket = mongoose.Schema({
  walletId: String,
  tickets: [String],
});

module.exports = mongoose.model('Ticket', Ticket);
