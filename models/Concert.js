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
  startDate: Date,
  endDate: Date,
  owner: {
    name: String,
    email: String,
    description: String,
  },
});

module.exports = mongoose.model('Concert', Concert);
