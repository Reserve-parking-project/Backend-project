const fs = require('fs');

const userCars = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/userCars.json`)
);

exports.getAllOrders = (req, res) => {};

exports.addNewOrder = (req, res) => {};

exports.deleteOrder = (req, res) => {};
