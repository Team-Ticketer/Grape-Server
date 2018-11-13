const mongoose = require('mongoose');

const Concert = new mongoose.Schema({
  contract: String,
  name: String,
  artist: String,
  content: String,
  video: String,
  picture: String,
  poster: String,
  address: String,
  placeName: String,
  lat: Number,
  lng: Number,
  startDate: Date,
  endDate: Date,
  owner: {
    name: String,
    email: String,
    description: String,
  },
  tickets: [{
    name: String,
    description: String,
    amount: Number,
    price: Number,
  }],
});

module.exports = mongoose.model('Concert', Concert);
