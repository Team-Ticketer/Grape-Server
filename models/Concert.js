const mongoose = require('mongoose');

const Concert = new mongoose.Schema({
  contract: String,
  name: String,
  content: String,
  picture: String,
  lat: Number,
  lng: Number,
  startDate: Date,
  endDate: Date,
  ownerName: String,
  minPrice: Number,
  maxPrice: Number,
});

module.exports = mongoose.model('Concert', Concert);
