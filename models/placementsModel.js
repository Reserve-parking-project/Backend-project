const mongoose = require('mongoose');

const placementSchema = new mongoose.Schema({
  longitude: {
    type: Number,
  },
  latitude: {
    type: Number,
  },
  isFree: Boolean,
  price: Number,
  parkingId: Number,
});

const Placement = mongoose.model('Placement', placementSchema);

module.exports = Placement;
