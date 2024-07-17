const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema({
  name: String,
  street: String,
  district: String,
  region: String,
  owner: Object,
  OwnerId: Number,
  Places: Object,
});

const Parking = mongoose.model('Account', parkingSchema);

module.exports = Parking;
