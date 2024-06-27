const fs = require('fs');

const userCars = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/userCars.json`)
);

exports.getAllParkings = (req, res) => {};

exports.addNewParking = (req, res) => {};

exports.addNewPlacement = (req, res) => {};

exports.deleteParking = (req, res) => {};

exports.deletePlacement = (req, res) => {};
