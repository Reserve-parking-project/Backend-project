const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'An account must have an email'],
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  },
  cars: {},
  discount: Number,
  person: {},
  personId: Number,
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
