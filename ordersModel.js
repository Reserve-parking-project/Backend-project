const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  carId: {
    type: Number,
    unique: true,
    required: [true, 'An order must have a car id'],
  },
  placementId: {
    type: Number,
    unique: true,
    required: [true, 'An order must have a placement id'],
  },
  priceWithDiscount: {
    type: Number,
    required: [true, 'An order must have a price with discount'],
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
