const fs = require("fs");
const express = require("express");

const userCars = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/userCars.json`)
);

const userRegistration = (req, res) => {};

const userAuthorization = (req, res) => {};

const router = express.Router();

router.route("/register").post(userRegistration);
router.route("/login").post(userAuthorization);

module.exports = router;
