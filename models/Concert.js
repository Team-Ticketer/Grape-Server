const mongoose = require('mongoose');

const Concert = new mongoose.Schema({
  contract: String,
  name: String,
  artist: String,
  content: String,
  video: String,
  picture: String,
  adress: String,
  placeName: String,
  lat: Number,
  lng: Number,
  startDate: Date,
  endDate: Date,
  ownerName: String,
  price: Array,
});

module.exports = mongoose.model('Concert', Concert);
