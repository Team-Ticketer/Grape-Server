const mongoose = require('mongoose');

const Concert = new mongoose.Schema({
  contract: String,
  content: String,
  lat: Number,
  lng: Number,
});

module.exports = mongoose.model('Concert', Concert);
