const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema({
  name: String,
  parkings: Object,
});

const Owner = mongoose.model('Account', OwnerSchema);

module.exports = Owner;
