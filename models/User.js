const mongoose = require('mongoose');

const User = new mongoose.Schema({
  kakaoId: String,
  name: String,
  walletId: String,
});

module.exports = mongoose.model('User', User);
