const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true],
    unique: true,
  },
  type: {
    type: String,
    required: [true, 'A car must have a type'],
  },
  mark: {
    type: String,
    required: [true, 'A car must have a mark'],
  },
  model: {
    type: String,
    required: [true, 'A car must have a model'],
  },
  number: {
    type: String,
    required: [true, 'A car must have a number'],
    unique: true,
  },
  account: {
    type: Object,
    required: [true, 'A car must have an account'],
  },
  accountId: {
    type: Number,
    required: [true, 'A car must have an account id'],
    unique: true,
  },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
