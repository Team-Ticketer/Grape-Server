const mongoose = require('mongoose');

const User = new mongoose.Schema({
  email: String,
  phoneNum: String,
});

module.exports = mongoose.model('User', User);
