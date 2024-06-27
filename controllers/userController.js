const fs = require('fs');

const userCars = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/userCars.json`)
);

exports.userRegistration = (req, res) => {};

exports.userAuthorization = (req, res) => {};
