const fs = require('fs');

const userCars = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/userCars.json`)
);

exports.getAllOwners = (req, res) => {};

exports.addNewOwner = (req, res) => {};

exports.deleteOwner = (req, res) => {};
