const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'A tour must have a first name'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'A tour must have a last name'],
    trim: true,
  },
  phoneNumber: {
    type: Number,
    unique: true,
  },
  account: Object,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
